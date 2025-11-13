import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { InventorySegment, ProductKey } from '@/hooks/useInventorySegments';
import { useToast } from '@/hooks/use-toast';

interface OrderConfiguratorProps {
  segments: InventorySegment[];
  initialProductKey?: ProductKey;
  initialSegmentId?: string;
}

export function OrderConfigurator({ segments, initialProductKey, initialSegmentId }: OrderConfiguratorProps) {
  const { toast } = useToast();
  const [selectedProductKey, setSelectedProductKey] = useState<ProductKey | null>(initialProductKey || null);
  const [selectedSegmentId, setSelectedSegmentId] = useState<string | null>(initialSegmentId || null);
  const [quantity, setQuantity] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  useEffect(() => {
    if (initialProductKey) setSelectedProductKey(initialProductKey);
    if (initialSegmentId) setSelectedSegmentId(initialSegmentId);
  }, [initialProductKey, initialSegmentId]);

  const selectedSegment = segments.find((s) => s.id === selectedSegmentId);
  const filteredSegments = selectedProductKey
    ? segments.filter((s) => s.productKey === selectedProductKey)
    : [];

  const unitPrice = selectedSegment ? selectedSegment.priceCents / 100 : 0;
  const estimatedTotal = quantity * unitPrice;
  const maxQuantity = selectedSegment?.availableQuantity || 0;

  const handleProductSelect = (productKey: ProductKey) => {
    setSelectedProductKey(productKey);
    setSelectedSegmentId(null);
    setQuantity(0);
    setCheckoutError(null);
  };

  const handleSegmentSelect = (segmentId: string) => {
    const segment = segments.find((s) => s.id === segmentId);
    setSelectedSegmentId(segmentId);
    if (segment && quantity > segment.availableQuantity) {
      setQuantity(segment.availableQuantity);
    }
    setCheckoutError(null);
  };

  const handleQuantityChange = (value: number) => {
    const clampedValue = Math.max(0, Math.min(value, maxQuantity));
    setQuantity(clampedValue);
    setCheckoutError(null);
  };

  const handleCheckout = async () => {
    if (!selectedSegmentId || quantity <= 0) {
      setCheckoutError('Please select a product, age band, and quantity.');
      return;
    }

    if (quantity > maxQuantity) {
      setCheckoutError(`Quantity exceeds available inventory (${maxQuantity} records).`);
      return;
    }

    setIsSubmitting(true);
    setCheckoutError(null);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          segmentId: selectedSegmentId,
          quantity,
        }),
      });

      if (!response.ok) {
        throw new Error('Checkout request failed');
      }

      const data = await response.json();
      
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      setCheckoutError('Checkout failed. Please try again or contact support.');
      toast({
        title: 'Checkout Error',
        description: 'Unable to create checkout. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const productOptions = [
    { key: 'direct_submissions' as ProductKey, label: 'Direct Submissions', subtext: 'Premium, real-time submissions' },
    { key: 'alpha_data' as ProductKey, label: 'Alpha Data', subtext: 'Smart-aged submissions at scale' },
    { key: 'pulse_data' as ProductKey, label: 'Pulse Data', subtext: 'Deep archive & triggers for big floors' },
  ];

  return (
    <div id="order-configurator" className="grid md:grid-cols-2 gap-8">
      <div className="space-y-8">
        {/* Step 1 */}
        <div className="space-y-4">
          <Label className="text-lg font-semibold">Step 1 · Choose product</Label>
          <div role="radiogroup" className="grid gap-3">
            {productOptions.map((option) => (
              <button
                key={option.key}
                role="radio"
                aria-checked={selectedProductKey === option.key}
                onClick={() => handleProductSelect(option.key)}
                className={`p-4 border-2 rounded-lg text-left transition-all ${
                  selectedProductKey === option.key
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className="font-semibold">{option.label}</div>
                <div className="text-sm text-muted-foreground">{option.subtext}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2 */}
        <div className="space-y-4">
          <Label className="text-lg font-semibold">Step 2 · Choose age band & quantity</Label>
          {!selectedProductKey ? (
            <p className="text-sm text-muted-foreground">Select a product first.</p>
          ) : filteredSegments.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No active segments for this product. Try another tier or check back as new volume is added.
            </p>
          ) : (
            <>
              <div role="radiogroup" className="grid gap-3">
                {filteredSegments.map((segment) => (
                  <button
                    key={segment.id}
                    role="radio"
                    aria-checked={selectedSegmentId === segment.id}
                    onClick={() => handleSegmentSelect(segment.id)}
                    className={`p-4 border-2 rounded-lg text-left transition-all ${
                      selectedSegmentId === segment.id
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="font-semibold">{segment.ageBandLabel}</div>
                    <div className="text-sm text-muted-foreground">
                      ${(segment.priceCents / 100).toFixed(2)} / record · {segment.availableQuantity.toLocaleString()} available
                    </div>
                  </button>
                ))}
              </div>

              {selectedSegment && (
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity (records)</Label>
                  <Input
                    id="quantity"
                    type="number"
                    min={0}
                    max={maxQuantity}
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 0)}
                  />
                  <p className="text-sm text-muted-foreground">
                    Max available today for this band: {maxQuantity.toLocaleString()} records.
                  </p>
                </div>
              )}
            </>
          )}
        </div>

        {/* Step 3 */}
        <div className="space-y-4">
          <Label className="text-lg font-semibold">Step 3 · Review & proceed to checkout</Label>
          {checkoutError && (
            <div className="p-3 border border-destructive/50 bg-destructive/10 rounded text-sm text-destructive">
              {checkoutError}
            </div>
          )}
          <Button
            onClick={handleCheckout}
            disabled={!selectedSegmentId || quantity <= 0 || isSubmitting}
            className="w-full"
            size="lg"
          >
            {isSubmitting ? 'Creating checkout…' : 'Proceed to checkout'}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            You'll confirm details and complete payment on a secure checkout powered by Square.
          </p>
        </div>
      </div>

      {/* Order Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Order summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Product:</span>
              <span className="font-medium">{selectedSegment?.productLabel || 'Select a product'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Age band:</span>
              <span className="font-medium">{selectedSegment?.ageBandLabel || 'Select an age band'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Price / record:</span>
              <span className="font-medium">{selectedSegment ? `$${unitPrice.toFixed(2)}` : '—'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Quantity:</span>
              <span className="font-medium">{quantity > 0 ? quantity.toLocaleString() : 'Not set yet'}</span>
            </div>
          </div>
          
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold">Estimated total</span>
              <span className="text-2xl font-bold">
                {estimatedTotal > 0 ? `$${estimatedTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : '—'}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Final totals and any applicable taxes will be confirmed on the checkout screen.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

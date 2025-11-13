import { InventorySegment, ProductKey } from '@/hooks/useInventorySegments';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface InventoryDashboardProps {
  segments: InventorySegment[];
  isLoading: boolean;
  error: string | null;
  lastRefreshed: Date | null;
  onSegmentSelect: (productKey: ProductKey, segmentId: string) => void;
}

type SegmentStatus = 'healthy' | 'tight' | 'waitlist';

function getSegmentStatus(availableQuantity: number, maxQuantity: number): SegmentStatus {
  if (availableQuantity <= 0) return 'waitlist';
  const ratio = maxQuantity > 0 ? availableQuantity / maxQuantity : 1;
  return ratio > 0.2 ? 'healthy' : 'tight';
}

function getStatusConfig(status: SegmentStatus) {
  switch (status) {
    case 'healthy':
      return {
        color: 'bg-emerald-500',
        label: 'Healthy',
        caption: 'Plenty of capacity available.',
      };
    case 'tight':
      return {
        color: 'bg-amber-500',
        label: 'Tight',
        caption: 'Limited capacity remaining. Lock in volume soon.',
      };
    case 'waitlist':
      return {
        color: 'bg-red-500',
        label: 'Waitlist',
        caption: 'Temporarily sold out. Join the waitlist or choose another band.',
      };
  }
}

export function InventoryDashboard({
  segments,
  isLoading,
  error,
  lastRefreshed,
  onSegmentSelect,
}: InventoryDashboardProps) {
  const formatNumber = (num: number) => num.toLocaleString();
  const formatPrice = (cents: number) => `$${(cents / 100).toFixed(2)}`;

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">Loading live inventory…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">
          Live availability is temporarily unavailable. Pricing will still be validated at checkout.
        </p>
      </div>
    );
  }

  if (segments.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">
          Inventory data is not available yet. You can still configure an order and we'll confirm availability during checkout.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {lastRefreshed && (
        <p className="text-sm text-muted-foreground">
          Live inventory last refreshed: {lastRefreshed.toLocaleTimeString()}
        </p>
      )}
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-semibold">Product</th>
              <th className="text-left py-3 px-4 font-semibold">Age band</th>
              <th className="text-left py-3 px-4 font-semibold">Price / record</th>
              <th className="text-left py-3 px-4 font-semibold">Available now</th>
              <th className="text-left py-3 px-4 font-semibold">Max cap</th>
              <th className="text-left py-3 px-4 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {segments.map((segment) => {
              const status = getSegmentStatus(segment.availableQuantity, segment.maxQuantity);
              const statusConfig = getStatusConfig(status);
              const utilizationPercent = segment.maxQuantity > 0
                ? (segment.availableQuantity / segment.maxQuantity) * 100
                : 0;

              return (
                <tr
                  key={segment.id}
                  className="border-b hover:bg-muted/50 cursor-pointer transition-colors"
                  onClick={() => onSegmentSelect(segment.productKey, segment.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSegmentSelect(segment.productKey, segment.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Select ${segment.productLabel} ${segment.ageBandLabel}`}
                >
                  <td className="py-3 px-4">{segment.productLabel}</td>
                  <td className="py-3 px-4">{segment.ageBandLabel}</td>
                  <td className="py-3 px-4">{formatPrice(segment.priceCents)} / record</td>
                  <td className="py-3 px-4">{formatNumber(segment.availableQuantity)} records</td>
                  <td className="py-3 px-4">{formatNumber(segment.maxQuantity)}</td>
                  <td className="py-3 px-4">
                    <div className="space-y-2">
                      <Badge variant="secondary" className={statusConfig.color}>
                        {statusConfig.label}
                      </Badge>
                      <div className="space-y-1">
                        <Progress value={utilizationPercent} className="h-2" />
                        <p className="text-xs text-muted-foreground">
                          {statusConfig.caption}
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

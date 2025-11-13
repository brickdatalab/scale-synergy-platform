import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export type ProductKey = 'direct_submissions' | 'alpha_data' | 'pulse_data';
export type AgeBandKey = 'lt_15' | '15_30' | '30_90' | '90_180' | '180_365' | '1_2y';

export interface InventorySegment {
  id: string;
  productKey: ProductKey;
  productLabel: string;
  ageBandKey: AgeBandKey;
  ageBandLabel: string;
  priceCents: number;
  availableQuantity: number;
  maxQuantity: number;
  squareVariationId?: string | null;
}

export interface UseInventorySegmentsResult {
  segments: InventorySegment[];
  isLoading: boolean;
  error: string | null;
  lastRefreshed: Date | null;
  refresh: () => Promise<void>;
}

export function useInventorySegments(autoRefreshInterval?: number): UseInventorySegmentsResult {
  const [segments, setSegments] = useState<InventorySegment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastRefreshed, setLastRefreshed] = useState<Date | null>(null);

  const fetchSegments = async () => {
    try {
      setError(null);
      const { data, error: fetchError } = await supabase
        .from('inventory_segments')
        .select('*')
        .order('product_key')
        .order('age_band_key');

      if (fetchError) throw fetchError;

      const mappedSegments: InventorySegment[] = (data || []).map((row) => ({
        id: row.id,
        productKey: row.product_key as ProductKey,
        productLabel: row.product_label,
        ageBandKey: row.age_band_key as AgeBandKey,
        ageBandLabel: row.age_band_label,
        priceCents: row.price_cents,
        availableQuantity: row.available_quantity,
        maxQuantity: row.max_quantity,
        squareVariationId: row.square_variation_id,
      }));

      setSegments(mappedSegments);
      setLastRefreshed(new Date());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load inventory');
      console.error('Error fetching inventory segments:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSegments();
  }, []);

  useEffect(() => {
    if (!autoRefreshInterval) return;

    const interval = setInterval(fetchSegments, autoRefreshInterval);
    return () => clearInterval(interval);
  }, [autoRefreshInterval]);

  return {
    segments,
    isLoading,
    error,
    lastRefreshed,
    refresh: fetchSegments,
  };
}

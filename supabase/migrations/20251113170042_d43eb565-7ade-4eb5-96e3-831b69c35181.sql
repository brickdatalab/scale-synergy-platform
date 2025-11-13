-- Create inventory_segments table
CREATE TABLE public.inventory_segments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_key TEXT NOT NULL CHECK (product_key IN ('direct_submissions', 'alpha_data', 'pulse_data')),
    product_label TEXT NOT NULL,
    age_band_key TEXT NOT NULL CHECK (age_band_key IN ('lt_15', '15_30', '30_90', '90_180', '180_365', '1_2y')),
    age_band_label TEXT NOT NULL,
    price_cents INTEGER NOT NULL,
    available_quantity INTEGER NOT NULL DEFAULT 0,
    max_quantity INTEGER NOT NULL DEFAULT 0,
    square_variation_id TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE(product_key, age_band_key)
);

-- Enable RLS on inventory_segments
ALTER TABLE public.inventory_segments ENABLE ROW LEVEL SECURITY;

-- Allow public SELECT access to inventory_segments
CREATE POLICY "Allow public read access to inventory_segments"
ON public.inventory_segments
FOR SELECT
TO anon
USING (true);

-- Create orders table
CREATE TABLE public.orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    segment_id UUID NOT NULL REFERENCES public.inventory_segments(id),
    quantity INTEGER NOT NULL,
    unit_price_cents INTEGER NOT NULL,
    total_cents INTEGER NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('pending', 'paid', 'failed', 'cancelled')),
    square_payment_link_id TEXT,
    square_checkout_id TEXT,
    square_payment_id TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS on orders (deny all to anon)
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Create function to decrement inventory atomically
CREATE OR REPLACE FUNCTION public.decrement_inventory(segment_uuid UUID, qty INTEGER)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    rows_updated INTEGER;
BEGIN
    UPDATE public.inventory_segments
    SET available_quantity = available_quantity - qty,
        updated_at = now()
    WHERE id = segment_uuid
    AND available_quantity >= qty;
    
    GET DIAGNOSTICS rows_updated = ROW_COUNT;
    
    RETURN rows_updated > 0;
END;
$$;

-- Create trigger to auto-update updated_at
CREATE OR REPLACE FUNCTION public.update_inventory_segments_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$;

CREATE TRIGGER update_inventory_segments_updated_at
BEFORE UPDATE ON public.inventory_segments
FOR EACH ROW
EXECUTE FUNCTION public.update_inventory_segments_updated_at();

-- Insert seed data for the six product/age band combinations
INSERT INTO public.inventory_segments (product_key, product_label, age_band_key, age_band_label, price_cents, available_quantity, max_quantity) VALUES
('direct_submissions', 'Direct Submissions', 'lt_15', '< 15 days', 700, 10000, 15000),
('direct_submissions', 'Direct Submissions', '15_30', '15–30 days', 400, 8000, 12000),
('alpha_data', 'Alpha Data', '30_90', '30–90 days', 100, 20000, 25000),
('alpha_data', 'Alpha Data', '90_180', '90–180 days', 75, 15000, 20000),
('pulse_data', 'Pulse Data', '180_365', '180–365 days', 50, 30000, 40000),
('pulse_data', 'Pulse Data', '1_2y', '1–2 years', 25, 25000, 35000);
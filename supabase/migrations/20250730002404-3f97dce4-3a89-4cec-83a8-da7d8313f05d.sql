-- Create products table
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  features TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Create policies for products
CREATE POLICY "Anyone can view products" 
ON public.products 
FOR SELECT 
USING (true);

CREATE POLICY "Authenticated users can insert products" 
ON public.products 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Authenticated users can update products" 
ON public.products 
FOR UPDATE 
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated users can delete products" 
ON public.products 
FOR DELETE 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_products_updated_at
BEFORE UPDATE ON public.products
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample products data
INSERT INTO public.products (title, description, icon_name, features) VALUES
('Premium Facebook Accounts', 'High-quality aged Facebook accounts with established history and credibility.', 'Facebook', ARRAY['Aged accounts', 'Real profile history', 'Phone verified', 'Email verified', 'High trust score']),
('Instagram Growth Tools', 'Professional Instagram automation tools for organic follower growth.', 'Instagram', ARRAY['Auto engagement', 'Hashtag research', 'Content scheduling', 'Analytics dashboard', 'Safe automation']),
('Social Media Templates', 'Ready-to-use templates for Facebook and Instagram posts and stories.', 'PenTool', ARRAY['Professional designs', 'Customizable templates', 'Multiple formats', 'Commercial license', 'Regular updates']),
('Facebook Page Assets', 'Complete Facebook business page setup with optimized content and graphics.', 'Target', ARRAY['Page optimization', 'Cover designs', 'Profile setup', 'Content calendar', 'SEO optimization']),
('Analytics Dashboard', 'Comprehensive social media analytics and reporting tools.', 'BarChart3', ARRAY['Real-time tracking', 'Performance metrics', 'Custom reports', 'ROI analysis', 'Competitor insights']),
('Content Creation Suite', 'AI-powered content creation tools for social media marketing.', 'Lightbulb', ARRAY['AI copywriting', 'Image generation', 'Video editing', 'Content ideas', 'Brand consistency']);
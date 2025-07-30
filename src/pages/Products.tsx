import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { 
  Shield, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Search,
  Eye,
  Lock,
  Star,
  DollarSign,
  Package
} from 'lucide-react';

// Icon mapping
const iconMap = {
  Shield,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  DollarSign,
  Package,
  Eye,
  Lock
};

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching products:', error);
          return;
        }

        setProducts(data || []);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = [...new Set(products.map(product => product.category))];

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-6 py-16">
            <div className="text-center">
              <p className="text-gray-400 text-lg">Loading products...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-background to-secondary">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Our <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Products</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Premium Facebook assets and social media accounts ready for your marketing campaigns
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-card/50 border-border/20 text-white placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Badge 
                  key={category} 
                  variant="outline" 
                  className="border-accent/20 text-accent bg-accent/10 hover:bg-accent/20 transition-colors cursor-pointer"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="bg-card/50 border-border/20 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group relative">
                  {product.popular && (
                    <Badge className="absolute -top-2 -right-2 bg-accent text-white z-10">
                      Popular
                    </Badge>
                  )}
                  {product.premium && (
                    <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black z-10">
                      Premium
                    </Badge>
                  )}
                  
                  <CardHeader className="pb-3">
                    <div className="relative h-32 mb-3 rounded-lg overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <Badge variant="outline" className="w-fit text-xs mb-2 border-accent/20 text-accent">
                      {product.category}
                    </Badge>
                    <CardTitle className="text-lg font-semibold text-white mb-2 leading-tight truncate">
                      {product.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-sm line-clamp-2">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <ul className="space-y-1.5 mb-4">
                      {product.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3.5 h-3.5 text-accent mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-accent font-semibold text-lg">
                        {product.price}
                      </span>
                      <Badge 
                        variant={product.status === "In Stock" ? "default" : "destructive"}
                        className={product.status === "In Stock" ? "bg-green-600 hover:bg-green-700" : ""}
                      >
                        {product.status}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400 text-sm">
                        Stock: {product.stock} pcs
                      </span>
                    </div>
                    
                    <Button 
                      className={product.status === "In Stock" ? "w-full cta-button text-sm py-2" : "w-full bg-gray-600 text-gray-300 cursor-not-allowed text-sm py-2"}
                      disabled={product.status !== "In Stock"}
                    >
                      {product.status === "In Stock" ? "Buy Now" : "Out of Stock"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-400 text-lg">No products found matching your search.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Need Custom Products?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our team for custom Facebook assets and bulk pricing options
            </p>
            <Button className="cta-button text-lg px-8 py-4">
              Contact Support
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
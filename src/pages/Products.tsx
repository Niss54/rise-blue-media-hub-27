import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const allProducts = [
    // Reinstate Accounts
    {
      id: 'usa-reinstated-ari',
      icon: <Shield className="w-6 h-6" />,
      title: "USA Advertising Access Reinstated Profile (ARI)",
      description: "Premium reinstated Facebook profile with advertising access, ID card included, farmed account with friends.",
      category: "Reinstate Accounts",
      price: "$35.00",
      stock: 0,
      features: ["Advertising access", "ID card included", "Farmed with friends", "USA profile"],
      image: "https://imagedelivery.net/Pht1ckgmpKl0YOB2QHSQ8Q/ee6d58f3-d104-4893-e2b4-afb2ce321a00/public",
      status: "Out of Stock"
    },
    {
      id: 'usa-double-reinstated',
      icon: <Shield className="w-6 h-6" />,
      title: "USA Double Reinstated Account (SARI)",
      description: "USA advertising access double reinstated account with ID card, farmed account with posts.",
      category: "Double Reinstated Accounts",
      price: "$40.00",
      stock: 0,
      features: ["Double reinstated", "ID card included", "Farmed with posts", "USA profile"],
      image: "https://imagedelivery.net/Pht1ckgmpKl0YOB2QHSQ8Q/88b4381e-7abb-41d3-5a1f-a7485b06f200/public",
      status: "Out of Stock"
    },
    {
      id: 'super-aged-reinstated',
      icon: <Star className="w-6 h-6" />,
      title: "USA Super Aged Reinstated Profile",
      description: "Premium aged reinstated profile with ID card - super aged and premium quality account.",
      category: "Super Aged Reinstated",
      price: "$120.00",
      stock: 33,
      features: ["Super aged profile", "Premium quality", "ID card included", "High success rate"],
      image: "https://imagedelivery.net/Pht1ckgmpKl0YOB2QHSQ8Q/88b4381e-7abb-41d3-5a1f-a7485b06f200/public",
      status: "In Stock",
      popular: true
    },
    // Facebook Fan Pages
    {
      id: 'reinstated-fan-pages',
      icon: <Users className="w-6 h-6" />,
      title: "Facebook Reinstated Fan Pages (ARI)",
      description: "Facebook advertising access reinstated fan pages with name & niche changeable options.",
      category: "Facebook Fan Pages",
      price: "$40.00",
      stock: 2,
      features: ["Name changeable", "Niche changeable", "Advertising access", "Reinstated status"],
      image: "https://imagedelivery.net/Pht1ckgmpKl0YOB2QHSQ8Q/0954c130-59fd-41d8-e19e-47eacb74c600/public",
      status: "In Stock"
    },
    {
      id: 'aged-fan-pages',
      icon: <Users className="w-6 h-6" />,
      title: "Facebook Aged Fan Pages (2010-2022)",
      description: "Facebook aged fan pages created between 2010-2022 with name & niche changeable.",
      category: "Facebook Fan Pages",
      price: "$40.00",
      stock: 4,
      features: ["Created 2010-2022", "Name changeable", "Niche changeable", "Aged account"],
      image: "https://imagedelivery.net/Pht1ckgmpKl0YOB2QHSQ8Q/0954c130-59fd-41d8-e19e-47eacb74c600/public",
      status: "In Stock"
    },
    {
      id: 'strong-fan-pages-5k',
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Super Strong Facebook Fan Pages (5K-10K)",
      description: "Super strong Facebook fan pages with 5K-10K followers, name & niche changeable.",
      category: "Facebook Fan Pages",
      price: "$200.00",
      stock: 19,
      features: ["5K-10K followers", "Super strong", "Name changeable", "High engagement"],
      image: "https://imagedelivery.net/Pht1ckgmpKl0YOB2QHSQ8Q/0954c130-59fd-41d8-e19e-47eacb74c600/public",
      status: "In Stock",
      popular: true
    },
    {
      id: 'strong-fan-pages-10k',
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Super Strong Facebook Fan Pages (10K-30K)",
      description: "Super strong Facebook fan pages with 10K-30K followers, name & niche changeable.",
      category: "Facebook Fan Pages",
      price: "$250.00",
      stock: 17,
      features: ["10K-30K followers", "Super strong", "Name changeable", "Premium engagement"],
      image: "https://imagedelivery.net/Pht1ckgmpKl0YOB2QHSQ8Q/0954c130-59fd-41d8-e19e-47eacb74c600/public",
      status: "In Stock",
      popular: true
    },
    {
      id: 'blue-tick-pages',
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Facebook Blue Tick Fan Page",
      description: "Facebook verified blue tick fan page - one of the best pages for advertising campaigns.",
      category: "Facebook Fan Pages",
      price: "$1500.00",
      stock: 10,
      features: ["Blue tick verified", "Premium for ads", "High trust factor", "Rare availability"],
      image: "https://imagedelivery.net/Pht1ckgmpKl0YOB2QHSQ8Q/0954c130-59fd-41d8-e19e-47eacb74c600/public",
      status: "In Stock",
      premium: true
    },
    // Verified Business Managers
    {
      id: 'verified-bm-usa',
      icon: <Shield className="w-6 h-6" />,
      title: "Facebook Verified Business Manager (USA)",
      description: "Facebook verified business manager with ID card verification from USA.",
      category: "Verified Business Managers",
      price: "$70.00",
      stock: 12,
      features: ["ID verified", "USA country", "Clean history", "Ready to use"],
      image: "https://imagedelivery.net/Pht1ckgmpKl0YOB2QHSQ8Q/d8733495-d68d-4d35-e331-fa16a16f1000/public",
      status: "In Stock"
    },
    {
      id: 'verified-reinstated-bm',
      icon: <Shield className="w-6 h-6" />,
      title: "Verified + Reinstated Business Manager",
      description: "Facebook verified and reinstated business manager with ID card from USA.",
      category: "Verified Business Managers",
      price: "$80.00",
      stock: 11,
      features: ["Verified + Reinstated", "ID card included", "USA country", "Double protection"],
      image: "https://imagedelivery.net/Pht1ckgmpKl0YOB2QHSQ8Q/d8733495-d68d-4d35-e331-fa16a16f1000/public",
      status: "In Stock"
    },
    {
      id: 'aged-verified-bm',
      icon: <Star className="w-6 h-6" />,
      title: "Aged Verified BM (2018-2022)",
      description: "Aged verified business manager created 2018-2022 with real company docs and fast limit increase.",
      category: "Verified Business Managers",
      price: "$250.00",
      stock: 46,
      features: ["Aged 2018-2022", "Real company docs", "Fast limit increase", "Premium quality"],
      image: "https://imagedelivery.net/Pht1ckgmpKl0YOB2QHSQ8Q/d8733495-d68d-4d35-e331-fa16a16f1000/public",
      status: "In Stock",
      popular: true
    },
    // High Limit Personal Ads
    {
      id: 'personal-250-limit',
      icon: <DollarSign className="w-6 h-6" />,
      title: "250$ Daily Spending Limit Personal Ads",
      description: "Personal ads account with 250$ daily spending limit, country/currency/timezone changeable.",
      category: "High Limit Personal Ads",
      price: "$99.00",
      stock: 26,
      features: ["250$ daily limit", "Country changeable", "Currency changeable", "Timezone flexible"],
      image: "https://imagedelivery.net/Pht1ckgmpKl0YOB2QHSQ8Q/8a07dae2-51b2-4894-a2e1-5df73c162d00/public",
      status: "In Stock",
      popular: true
    },
    {
      id: 'personal-1500-limit',
      icon: <DollarSign className="w-6 h-6" />,
      title: "1500$ Daily Spending Limit Personal Ads",
      description: "High limit personal ads account with 1500$ daily spending capacity.",
      category: "High Limit Personal Ads",
      price: "$200.00",
      stock: 41,
      features: ["1500$ daily limit", "High spending capacity", "Personal account", "Premium limits"],
      image: "https://imagedelivery.net/Pht1ckgmpKl0YOB2QHSQ8Q/8a07dae2-51b2-4894-a2e1-5df73c162d00/public",
      status: "In Stock"
    },
    // Emails
    {
      id: 'hotmail-emails',
      icon: <Package className="w-6 h-6" />,
      title: "Best Quality Hotmail Email Accounts",
      description: "High quality Hotmail email accounts for any purpose - 100% secured and verified.",
      category: "Emails",
      price: "$0.50",
      stock: 255,
      features: ["100% secured", "Any purpose use", "High quality", "Bulk available"],
      image: "https://res.cloudinary.com/dohfu9dzt/image/upload/v1679156938/Untitled_design_4_xiycw4.png",
      status: "In Stock"
    }
  ];

  const categories = [...new Set(allProducts.map(product => product.category))];

  const filteredProducts = allProducts.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
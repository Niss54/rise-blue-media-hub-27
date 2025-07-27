import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Shield, 
  Globe, 
  TrendingUp, 
  CheckCircle, 
  Users, 
  Zap, 
  Search,
  Eye,
  Lock,
  AlertTriangle,
  Store,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const allServices = [
    {
      id: 'bm-spy',
      icon: <Eye className="w-6 h-6" />,
      title: "Facebook BM SPY Service",
      description: "Spy the whole ad accounts of your competitor with professional intelligence service.",
      category: "Spy Services",
      features: ["Full competitor analysis", "Ad account insights", "Campaign strategies", "Professional reports"],
      price: "Contact for pricing",
      popular: true
    },
    {
      id: 'google-spy',
      icon: <Search className="w-6 h-6" />,
      title: "Google Ads Account SPY Service",
      description: "Professional Google Ads account spy service for competitive intelligence and market research.",
      category: "Spy Services",
      features: ["Google Ads insights", "Keyword analysis", "Campaign tracking", "Performance metrics"],
      price: "Contact for pricing",
      popular: false
    },
    {
      id: 'shopify-spy',
      icon: <Store className="w-6 h-6" />,
      title: "Shopify Spy Service",
      description: "Complete Shopify store analysis and competitor intelligence service for e-commerce businesses.",
      category: "Spy Services",
      features: ["Store analysis", "Product research", "Sales tracking", "Market insights"],
      price: "Contact for pricing",
      popular: false
    },
    {
      id: 'checkpoint-unlock',
      icon: <Lock className="w-6 h-6" />,
      title: "Facebook Checkpoint Video Verification Unlock",
      description: "Professional Facebook checkpoint video verification unlock service for restricted accounts.",
      category: "Account Recovery",
      features: ["Video verification", "Account recovery", "Checkpoint bypass", "Expert support"],
      price: "Contact for pricing",
      popular: true
    },
    {
      id: 'ad-account-unban',
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Facebook Ad Account Unban Service",
      description: "Professional Facebook ad account unban and restoration service with high success rate.",
      category: "Account Recovery",
      features: ["Account restoration", "Policy compliance", "Quick turnaround", "Success guarantee"],
      price: "Contact for pricing",
      popular: false
    },
    {
      id: 'business-manager-verified',
      icon: <Shield className="w-6 h-6" />,
      title: "Verified Business Manager Accounts",
      description: "Premium verified Facebook Business Manager accounts ready for advertising campaigns.",
      category: "Business Accounts",
      features: ["ID verified", "High limits", "Multiple ad accounts", "Clean history"],
      price: "$70 - $350",
      popular: true
    },
    {
      id: 'high-limit-personal',
      icon: <BarChart3 className="w-6 h-6" />,
      title: "High Limit Personal Ad Accounts",
      description: "Personal advertising accounts with high daily spending limits and proven track record.",
      category: "Ad Accounts",
      features: ["High spending limits", "Currency changeable", "Timezone flexible", "Strong performance"],
      price: "$99 - $200",
      popular: false
    },
    {
      id: 'facebook-pages',
      icon: <Users className="w-6 h-6" />,
      title: "Facebook Fan Pages",
      description: "Established Facebook pages with real followers and engagement history for your business.",
      category: "Social Assets",
      features: ["Real followers", "Engagement history", "Niche-specific", "Brand ready"],
      price: "$40 - $1500",
      popular: false
    },
    {
      id: 'reinstate-accounts',
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Reinstated Facebook Accounts",
      description: "Premium reinstated Facebook profiles with advertising access and clean history.",
      category: "Reinstated Assets",
      features: ["Advertising access", "Clean history", "ID verified", "Farmed accounts"],
      price: "$35 - $120",
      popular: true
    },
    {
      id: 'custom-solutions',
      icon: <Zap className="w-6 h-6" />,
      title: "Custom Facebook Solutions",
      description: "Tailored Facebook marketing and account management solutions for enterprise clients.",
      category: "Custom Services",
      features: ["Custom requirements", "Bulk discounts", "Priority support", "Dedicated manager"],
      price: "Custom pricing",
      popular: false
    }
  ];

  const categories = [...new Set(allServices.map(service => service.category))];

  const filteredServices = allServices.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.category.toLowerCase().includes(searchTerm.toLowerCase())
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
                Our <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Comprehensive Facebook marketing solutions and premium social media assets to scale your business
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search services..."
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

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredServices.map((service) => (
                <Card key={service.id} className="bg-card/50 border-border/20 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group relative">
                  {service.popular && (
                    <Badge className="absolute -top-2 -right-2 bg-accent text-white z-10">
                      Popular
                    </Badge>
                  )}
                  
                  <CardHeader className="pb-3">
                    <div className="text-accent mb-3 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <Badge variant="outline" className="w-fit text-xs mb-2 border-accent/20 text-accent">
                      {service.category}
                    </Badge>
                    <CardTitle className="text-lg font-semibold text-white mb-2 leading-tight truncate">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-sm line-clamp-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <ul className="space-y-1.5 mb-4">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3.5 h-3.5 text-accent mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-accent font-semibold text-sm">
                        {service.price}
                      </span>
                    </div>
                    
                    <Link to={`/services/${service.id}`}>
                      <Button className="w-full cta-button text-sm py-2">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-400 text-lg">No services found matching your search.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Need Custom Solutions?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our team for tailored Facebook marketing solutions and bulk pricing options
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

export default Services;
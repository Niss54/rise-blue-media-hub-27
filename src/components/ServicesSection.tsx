import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Users, TrendingUp, Zap, Globe, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      id: 'bm-spy',
      icon: <Shield className="w-6 h-6" />,
      title: "BM SPY Service",
      description: "Spy the whole ad accounts of your competitor with our professional service.",
      features: ["Full competitor analysis", "Ad account insights", "Campaign strategies", "Professional reports"]
    },
    {
      id: 'google-spy',
      icon: <Globe className="w-6 h-6" />,
      title: "Google Ads Account SPY",
      description: "Professional Google Ads account spy service for competitive intelligence.",
      features: ["Google Ads insights", "Keyword analysis", "Campaign tracking", "Performance metrics"]
    },
    {
      id: 'shopify-spy',
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Shopify Spy Service",
      description: "Complete Shopify store analysis and competitor intelligence service.",
      features: ["Store analysis", "Product research", "Sales tracking", "Market insights"]
    },
    {
      id: 'checkpoint-unlock',
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Checkpoint Verification Unlock",
      description: "Facebook checkpoint video verification unlock service for restricted accounts.",
      features: ["Video verification", "Account recovery", "Checkpoint bypass", "Expert support"]
    },
    {
      id: 'ad-account-unban',
      icon: <Users className="w-6 h-6" />,
      title: "Ad Account Unban Service",
      description: "Professional Facebook ad account unban and restoration service.",
      features: ["Account restoration", "Policy compliance", "Quick turnaround", "Success guarantee"]
    },
    {
      id: 'custom-solutions',
      icon: <Zap className="w-6 h-6" />,
      title: "Custom Facebook Services",
      description: "Tailored Facebook marketing and account management solutions.",
      features: ["Custom solutions", "Bulk discounts", "Priority support", "Dedicated manager"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We provide premium social media assets to help you scale your business and reach your marketing goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/50 border-border/20 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group h-full flex flex-col">
              <CardHeader className="pb-3">
                <div className="text-accent mb-3 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-white mb-2 leading-tight">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 flex flex-col flex-grow">
                <ul className="space-y-1.5 mb-4 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-3.5 h-3.5 text-accent mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={`/services/${service.id}`} className="mt-auto">
                  <Button className="w-full cta-button text-sm py-2">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/services">
            <Button variant="prominent" size="lg" className="text-lg px-8 py-4">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
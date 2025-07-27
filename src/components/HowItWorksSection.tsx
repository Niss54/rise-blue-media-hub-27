import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Lock, Shield, Zap } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [{
    icon: <Search className="w-12 h-12" />,
    title: "Browse Verified Assets",
    description: "Explore our curated collection of aged, high-quality accounts and business tools — all verified and performance-tested.",
    step: "01"
  }, {
    icon: <Lock className="w-12 h-12" />,
    title: "Pay Securely with Crypto",
    description: "Complete your purchase in minutes using fully encrypted, crypto-only transactions for maximum privacy and speed.",
    step: "02"
  }, {
    icon: <Shield className="w-12 h-12" />,
    title: "Receive Ownership with Confidence",
    description: "We handle the secure asset transfer, including account recovery setup, legal documentation, and step-by-step support.",
    step: "03"
  }, {
    icon: <Zap className="w-12 h-12" />,
    title: "Launch Instantly",
    description: "Start using your new assets right away — with no delays or warm-up time.",
    step: "04"
  }];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-secondary via-background to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            How It <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Get started in four simple steps. We make it easy to acquire premium assets and launch your campaigns without the wait.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-card/50 border-border/30 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group h-full">
                <CardContent className="p-8 text-center relative">
                  {/* Step Number */}
                  <div className="absolute top-6 right-6 text-5xl font-bold text-accent/30 group-hover:text-accent/50 transition-colors duration-300">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-accent mb-8 flex justify-center group-hover:scale-110 transition-transform duration-300 mt-4">
                    {step.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-6 leading-tight">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Connection Arrow (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-accent to-primary"></div>
                  <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-accent border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-card/20 border border-border/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Rise Blue Media for their social media asset needs.
            </p>
            <Button className="cta-button text-lg px-8 py-4">
              Browse Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
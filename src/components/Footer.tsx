import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card/20 border-t border-border/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="https://iili.io/FGwvLb9.md.png" 
                alt="Rise Blue Media Logo" 
                className="h-8 mr-3"
              />
              <span className="text-lg font-bold text-white">Rise Blue Media</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for premium Facebook assets. We help businesses scale their marketing efforts with verified profiles, business managers, and established pages.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-accent hover:bg-accent/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-accent hover:bg-accent/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-accent hover:bg-accent/10">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-accent transition-colors duration-300">Home</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-accent transition-colors duration-300">Products</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-accent transition-colors duration-300">Services</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-accent transition-colors duration-300">How it Works</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-accent transition-colors duration-300">About</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">Facebook Profiles</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">Business Manager</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">Facebook Pages</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">Instagram Assets</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">Custom Solutions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3 text-accent" />
                <span>support@risebluemedia.com</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3 text-accent" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-3 text-accent" />
                <span>Global Support Available</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-white font-medium mb-3">Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3 py-2 bg-background border border-border rounded-l-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button className="cta-button rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Rise Blue Media. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
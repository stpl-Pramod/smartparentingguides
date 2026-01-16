import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground fill-current" />
              </div>
              <span className="text-xl font-semibold">ParentCare</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering parents with age-wise guidance, tips, and activities for every stage of childhood.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/baby-care" className="text-muted-foreground hover:text-primary transition-colors">Baby Care</Link></li>
              <li><Link to="/parenting-tips" className="text-muted-foreground hover:text-primary transition-colors">Parenting Tips</Link></li>
              <li><Link to="/activities" className="text-muted-foreground hover:text-primary transition-colors">Kids Activities</Link></li>
              <li><Link to="/stories" className="text-muted-foreground hover:text-primary transition-colors">Stories</Link></li>
            </ul>
          </div>
          
          {/* Age Groups */}
          <div>
            <h4 className="font-medium mb-4">Age Groups</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/age-wise/0-2" className="text-muted-foreground hover:text-primary transition-colors">0-2 Years</Link></li>
              <li><Link to="/age-wise/3-5" className="text-muted-foreground hover:text-primary transition-colors">3-5 Years</Link></li>
              <li><Link to="/age-wise/6-10" className="text-muted-foreground hover:text-primary transition-colors">6-10 Years</Link></li>
              <li><Link to="/age-wise/11-15" className="text-muted-foreground hover:text-primary transition-colors">11-15 Years</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>hello@parentcare.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground space-y-3">
          <p>© {new Date().getFullYear()} ParentCare. Made with love for families everywhere.</p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            <span>|</span>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

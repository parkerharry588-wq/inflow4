import React from 'react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { name: 'Home', key: 'home' },
    { name: 'Features', key: 'features' },
    { name: 'Pricing', key: 'pricing' },
    { name: 'Contact', key: 'contact' },
  ];

  const companyLinks = [
    { name: 'About Us', key: 'about' },
    { name: 'Privacy Policy', key: 'privacy' },
    { name: 'Terms of Service', key: 'terms' },
    { name: 'Security', key: 'security' },
  ];

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const handleContactSupport = () => {
    window.location.href = 'mailto:info@inflow.com?subject=Support Request';
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Email */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/public/Screenshot 2025-08-23 154231.png" alt="Inflow" className="h-8 w-auto" />
              <span className="text-2xl font-bold text-gradient">
                Inflow
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600 text-sm">Email:</p>
              <a 
                href="mailto:info@inflow.com" 
                className="text-primary-600 hover:text-primary-700 transition-colors text-sm"
              >
                info@inflow.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => handleNavigation(link.key)}
                  className="block text-gray-600 hover:text-primary-600 transition-colors text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              {companyLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => handleNavigation(link.key)}
                  className="block text-gray-600 hover:text-primary-600 transition-colors text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Support</h3>
            <button
              onClick={handleContactSupport}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm hover-lift"
            >
              Contact Support
            </button>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Inflow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
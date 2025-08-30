import React from 'react';
import { Users, Target, Shield, Zap } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Mission-Driven',
      description: 'We help businesses grow smarter with modern, powerful, and easy-to-use tools.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer-Focused',
      description: 'Your success is our success. We build features that solve real business problems.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime you can count on.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation-First',
      description: 'We constantly evolve our platform with the latest technology and best practices.'
    }
  ];

  const features = [
    'Customer relationship management (CRM)',
    'Marketing automation',
    'Sales pipelines',
    'Client communication tools',
    'Reporting and analytics'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-24">
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            About Inflow
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Inflow, our mission is to help businesses grow smarter with modern, powerful, 
            and easy-to-use tools. We provide an all-in-one platform designed to simplify 
            marketing, sales, and client management, so you can focus on results, not complexity.
          </p>
        </div>

        {/* Features We Provide */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            What We Provide
          </h2>
          
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg max-w-4xl mx-auto">
            <p className="text-gray-600 text-lg mb-8 text-center">
              With Inflow, businesses get access to features like:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
              >
                <div className="text-primary-600 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Our Philosophy
          </h2>
          
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              We believe software should work for you, not against you. That's why Inflow combines 
              enterprise-grade functionality with simplicity and reliability, all under one secure platform.
            </p>
            
            <p className="text-lg text-gray-500">
              Every feature we build is designed with your success in mind, helping you streamline 
              operations, improve client relationships, and grow your business more efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
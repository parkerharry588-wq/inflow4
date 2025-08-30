import React from 'react';
import { Users, Zap, Calendar, BarChart3, Shield, Globe, MessageSquare, Workflow } from 'lucide-react';

export default function FeaturesPage() {
  const coreFeatures = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Centralized Client Management Hub',
      description: 'Keep all your client information, interactions, and history in one organized place.',
      benefits: ['Complete client profiles', 'Interaction history tracking', 'Document management', 'Contact organization']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Automated Workflows & Follow-ups',
      description: 'Set up smart automation to handle routine tasks and never miss important follow-ups.',
      benefits: ['Email automation', 'Task scheduling', 'Follow-up reminders', 'Workflow templates']
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Built-in Booking & Scheduling',
      description: 'Let clients book appointments directly with integrated calendar management.',
      benefits: ['Online booking system', 'Calendar synchronization', 'Automated confirmations', 'Time zone support']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Data Insights for Smarter Decisions',
      description: 'Get actionable insights from your business data to make informed strategic decisions.',
      benefits: ['Performance analytics', 'Custom reporting', 'Trend analysis', 'ROI tracking']
    }
  ];

  const additionalFeatures = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Communication Tools',
      description: 'Integrated messaging and communication features to stay connected with clients.'
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: 'Sales Pipelines',
      description: 'Visual pipeline management to track deals and opportunities from lead to close.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, backups, and compliance standards.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'API Integration',
      description: 'Connect with your existing tools and services through our comprehensive API.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Powerful Features
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to manage clients, automate workflows, and grow your business efficiently.
          </p>
        </div>

        {/* Core Features */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Core Features
          </h2>
          
          <div className="space-y-16">
            {coreFeatures.map((feature, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                    <div className="text-purple-400 mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">{feature.description}</p>
                    
                    <div className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                          <span className="text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="aspect-video bg-slate-800/30 rounded-2xl border border-purple-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                        {feature.icon}
                      </div>
                      <p className="text-gray-400">Feature Demo</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Features */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Additional Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {additionalFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="text-purple-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/20 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              See how these powerful features can streamline your business operations and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-white/20">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
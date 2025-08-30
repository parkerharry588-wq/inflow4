import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import { Play, Users, Zap, Calendar, BarChart3, CheckCircle, Star } from 'lucide-react';

interface HomePageProps {
  onNavigate?: (page: string) => void;
  onScrollToVideo?: () => void;
}

export default function HomePage({ onNavigate, onScrollToVideo }: HomePageProps) {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Centralized Client Management Hub',
      description: 'Keep all your client information, interactions, and history in one organized place.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Automated Workflows & Follow-ups',
      description: 'Set up smart automation to handle routine tasks and never miss important follow-ups.'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Built-in Booking & Scheduling',
      description: 'Let clients book appointments directly with integrated calendar management.'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Data Insights for Smarter Decisions',
      description: 'Get actionable insights from your business data to make informed strategic decisions.'
    }
  ];

  const stats = [
    { label: 'Customer Satisfaction', value: '100%' },
    { label: 'Uptime', value: '99.9%' },
    { label: 'Support', value: '24/7' },
  ];

  const testimonials = [
    {
      name: 'Nora Ali',
      company: 'Digital Marketing Expert',
      text: 'Inflow transformed how I used to manage clients. The automation features alone now saves me 20 hours every week.',
      rating: 5
    },
    {
      name: 'Simone Brooks',
      company: 'Real Estate Agent',
      text: 'Having all my client info in one place makes my day so much easier. Honestly, it’s a game changer.',
      rating: 5
    },
    {
      name: 'Lillian Clarke',
      company: 'Nail Stylist',
      text: 'Finally, a platform that actually makes client management much more convenient. The ROI has been incredible.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <AnimatedBackground />
        
        <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 leading-tight tracking-tight">
             Elevate Your Sales With The All-in-One CRM Platform
            </h1>       
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-light">
              Automate client management and keep everything organized all in one place, 
              from onboarding to billing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={() => onNavigate?.('pricing')}
                className="group bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Get Started
              </button>
              
              <button 
                onClick={onScrollToVideo}
                className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 border border-gray-200 hover:border-primary-300 hover-lift"
              >
                <Play className="w-5 h-5 text-primary-600" />
                <span>See Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="text-3xl md:text-4xl font-black text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm md:text-base font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              All You Need to Scale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Powerful features designed to help you manage clients more efficiently and grow your business faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-primary-300 transition-all duration-300 hover-lift shadow-lg hover:shadow-xl"
              >
                <div className="text-primary-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video-section" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              See Inflow in Action
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Watch how easy it is to transform your business operations
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative aspect-video bg-gray-100 rounded-3xl border border-gray-200 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-50/50 to-secondary-50/50">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-4 mx-auto hover-lift cursor-pointer">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <p className="text-gray-700 text-lg font-semibold">Demo Video Coming Soon</p>
                  <p className="text-gray-500 text-sm mt-2">1920 × 1080</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Trusted With Thousands
            </h2>
            <p className="text-xl text-gray-600 font-light">
              See what our customers are saying about their Inflow experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic font-medium">"{testimonial.text}"</p>
                <div>
                  <p className="text-gray-900 font-bold">{testimonial.name}</p>
                  <p className="text-primary-600 text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-light">
              Join thousands of successful businesses using Inflow to streamline their operations and accelerate growth.
            </p>
            <button 
              onClick={() => onNavigate?.('pricing')}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              Start Your 12-Day Free Trial
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
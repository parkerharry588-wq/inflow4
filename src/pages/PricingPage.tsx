import React from 'react';
import { Check, Zap, Crown } from 'lucide-react';

export default function PricingPage() {
  const handleStripeRedirect = (plan: string) => {
    // In a real app, this would redirect to Stripe Checkout
    console.log(`Redirecting to Stripe checkout for ${plan} plan`);
    alert(`Redirecting to Stripe checkout for ${plan} plan - this would integrate with your Stripe account`);
  };

  const standardFeatures = [
    'Unlimited client records',
    'Advanced automation',
    'Booking & scheduling',
    'Basic analytics',
    '12-day free trial'
  ];

  const premiumFeatures = [
    'Everything in Standard',
    'Full analytics & reporting',
    'Priority support',
    'White-label option',
    'API access',
    '12-day free trial'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-24">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Scale your business with the right plan for your needs. All plans include a 12-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Standard Plan */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 relative shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift">
            <div className="flex items-center mb-6">
              <Zap className="w-8 h-8 text-primary-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Standard Plan</h2>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline mb-2">
                <span className="text-5xl font-black text-gray-900">$59.99</span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-primary-600">$47.99</span>
                <span className="text-gray-600 ml-2">/month billed yearly</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {standardFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleStripeRedirect('standard')}
              className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Free Trial
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-3xl p-8 border-2 border-primary-300 relative shadow-2xl hover:shadow-3xl transition-all duration-300 hover-lift">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                Most Popular
              </span>
            </div>

            <div className="flex items-center mb-6">
              <Crown className="w-8 h-8 text-secondary-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Premium Plan</h2>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline mb-2">
                <span className="text-5xl font-black text-gray-900">$74.99</span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-secondary-600">$59.99</span>
                <span className="text-gray-600 ml-2">/month billed yearly</span>
              </div>
              <p className="text-sm text-green-600 mt-2 font-semibold">Save 20% with yearly billing</p>
            </div>

            <ul className="space-y-4 mb-8">
              {premiumFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleStripeRedirect('premium')}
              className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Start Free Trial
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can I cancel anytime?</h3>
              <p className="text-gray-600">
                Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period, and you won't be charged again.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Is my data secure?</h3>
              <p className="text-gray-600">
                Absolutely. We use enterprise-grade security measures including SSL encryption, regular backups, and strict access controls to protect your business data.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How easy is it to get started?</h3>
              <p className="text-gray-600">
                Very easy! Our onboarding process takes just minutes, and our intuitive interface means you can start managing clients right away. Plus, our support team is here to help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
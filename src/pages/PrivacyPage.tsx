import React from 'react';

export default function PrivacyPage() {
  const sections = [
    {
      title: 'Information We Collect',
      items: [
        'Account Information: Name, email, company details.',
        'Platform Usage Data: Interactions with Inflow\'s features (CRM, marketing, automation).',
        'Billing Information: Payment details processed by secure third-party providers.'
      ]
    },
    {
      title: 'How We Use Your Information',
      items: [
        'To provide access to the Inflow platform.',
        'To improve our services and develop new features.',
        'To send important updates, account notices, and support responses.',
        'To prevent fraud and maintain security.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-24">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            At Inflow, your privacy matters. We are committed to protecting the information you share with us and being transparent about how we use it.
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Sharing</h2>
            <p className="text-gray-600 leading-relaxed">
              We do not sell your personal data. We may share information only with trusted third-party providers that enable Inflow to function (e.g., payment processors, hosting providers).
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Retention</h2>
            <p className="text-gray-600 leading-relaxed">
              We retain your data while your account is active or as required by law. You can request deletion of your account data at any time.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
            <p className="text-gray-600 leading-relaxed">
              You may request access, correction, or deletion of your personal data by contacting us at{' '}
              <a href="mailto:support@inflow.com" className="text-primary-600 hover:text-primary-700 transition-colors">
                support@inflow.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
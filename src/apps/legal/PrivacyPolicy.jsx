import React from "react";

export default function PrivacyPolicy({ h1 = "Privacy Policy" }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600 mb-4 text-center">
            {h1}
          </h1>
          <p className="text-gray-600 text-center text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            This Privacy Policy explains how Indo Global Education Foundation
            (&quot;IGEF&quot;, &quot;we&quot;, &quot;us&quot;) collects, uses, and protects your personal
            information when you use our website and services.
          </p>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-6">
          {/* Section 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                1
              </span>
              Information We Collect
            </h2>
            <ul className="list-none space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base">
              <li className="flex items-start">
                <span className="bg-red-100 text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                  •
                </span>
                Contact details such as name, email address, and phone number.
              </li>
              <li className="flex items-start">
                <span className="bg-red-100 text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                  •
                </span>
                Academic and application details provided through forms.
              </li>
              <li className="flex items-start">
                <span className="bg-red-100 text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                  •
                </span>
                Technical data like IP address, device, and browser information.
              </li>
              <li className="flex items-start">
                <span className="bg-red-100 text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                  •
                </span>
                Usage data including pages visited and interactions on the site.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                2
              </span>
              How We Use Your Information
            </h2>
            <ul className="list-none space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base">
              <li className="flex items-start">
                <span className="bg-red-100 text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                  •
                </span>
                To process admissions and respond to inquiries.
              </li>
              <li className="flex items-start">
                <span className="bg-red-100 text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                  •
                </span>
                To provide information about programs, events, and services.
              </li>
              <li className="flex items-start">
                <span className="bg-red-100 text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                  •
                </span>
                To improve website functionality and user experience.
              </li>
              <li className="flex items-start">
                <span className="bg-red-100 text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                  •
                </span>
                To comply with legal and regulatory requirements.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                3
              </span>
              Cookies and Tracking
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We may use cookies and similar technologies to enhance website
              performance and analytics. You can control cookies through your
              browser settings.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                4
              </span>
              Data Sharing
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We do not sell your personal data. We may share information with
              service providers or partners for legitimate academic and
              operational purposes, subject to appropriate safeguards.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                5
              </span>
              Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We implement reasonable technical and organizational measures to
              protect your data from unauthorized access, alteration, or
              disclosure.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                6
              </span>
              Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              You may request access, correction, or deletion of your personal
              information, subject to applicable laws and institutional
              policies.
            </p>
          </div>

          {/* Section 7 */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                7
              </span>
              Children&apos;s Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Our site is intended for prospective students and stakeholders. We
              do not knowingly collect data from children without appropriate
              consent.
            </p>
          </div>

          {/* Section 8 */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                8
              </span>
              Policy Updates
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We may update this Privacy Policy periodically. The latest version
              will always be available on this page.
            </p>
          </div>

          {/* Section 9 */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                9
              </span>
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              For privacy-related queries, write to{" "}
              <a
                href="mailto:contact@igef.net"
                className="text-red-600 font-semibold hover:text-red-700 underline transition-colors duration-200"
              >
                contact@igef.net
              </a>
            </p>
          </div>
        </div>

       
      </div>
    </div>
  );
}

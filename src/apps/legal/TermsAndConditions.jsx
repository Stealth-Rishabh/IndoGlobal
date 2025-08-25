
export default function TermsAndConditions({ h1 = "Terms and Conditions" }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600 mb-4 text-center">
            {h1}
          </h1>
          <p className="text-gray-600 text-center text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Welcome to Indo Global Education Foundation. By accessing or using
            our website, you agree to comply with and be bound by the following
            terms and conditions. Please read them carefully.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-6">
          {/* Section 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                1
              </span>
              Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Your use of this website constitutes acceptance of these Terms and
              Conditions and any policies referenced herein. If you do not
              agree, please discontinue use of the site.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                2
              </span>
              Eligibility
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              This website is intended for individuals seeking information about
              our programs, admissions, and services. Users are responsible for
              ensuring the accuracy of information they submit.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                3
              </span>
              Use of Content
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              All content on this website, including text, images, and graphics,
              is the property of Indo Global Education Foundation or its
              licensors and is protected by applicable intellectual property
              laws. You may not reproduce, distribute, or modify content without
              prior written consent.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                4
              </span>
              User Submissions
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Information submitted via forms (e.g., admissions, contact,
              careers) must be accurate and lawful. We may use submissions to
              contact you regarding programs and services as per our Privacy
              Policy.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                5
              </span>
              Third-Party Links
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Our website may contain links to third-party websites or services.
              We are not responsible for their content, policies, or practices.
              Access them at your own discretion.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                6
              </span>
              Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              While we strive for accuracy, we make no guarantees regarding the
              completeness or reliability of site content. Indo Global Education
              Foundation shall not be liable for any direct or indirect damages
              arising from the use of this website.
            </p>
          </div>

          {/* Section 7 */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                7
              </span>
              Changes to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We may update these Terms and Conditions from time to time. Any
              changes will be posted on this page with an updated effective
              date.
            </p>
          </div>

          {/* Section 8 */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                8
              </span>
              Contact
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              For questions regarding these terms, please contact us at{" "}
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

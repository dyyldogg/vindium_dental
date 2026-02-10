import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Header() {
  return (
    <header className="border-b border-gray-100 bg-white/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Vindium
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link to="/platform" className="hover:text-purple-600 transition-colors">Platform</Link>
          <Link to="/communications" className="hover:text-purple-600 transition-colors">Communications</Link>
          <Link to="/portal" className="hover:text-purple-600 transition-colors">Patient Portal</Link>
          <Link to="/privacy" className="hover:text-purple-600 transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-purple-600 transition-colors">Terms</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
            Sign In
          </Link>
          <Link 
            to="/signup" 
            className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3">
              Vindium
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Patient lead management and engagement platform for dental practices.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900 mb-3">Product</div>
            <div className="space-y-2 text-sm text-gray-600">
              <Link to="/platform" className="block hover:text-purple-600 transition-colors">Platform</Link>
              <Link to="/communications" className="block hover:text-purple-600 transition-colors">Communications</Link>
              <Link to="/portal" className="block hover:text-purple-600 transition-colors">Patient Portal</Link>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900 mb-3">Legal</div>
            <div className="space-y-2 text-sm text-gray-600">
              <Link to="/privacy" className="block hover:text-purple-600 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="block hover:text-purple-600 transition-colors">Terms of Service</Link>
              <Link to="/communications" className="block hover:text-purple-600 transition-colors">SMS Compliance</Link>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900 mb-3">Contact</div>
            <div className="space-y-2 text-sm text-gray-600">
              <div>1940 Haste St, Berkeley, CA 94704 #B</div>
              <div>admin@vindium.net</div>
              <div>(650) 714-7406</div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200 text-sm text-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>© {new Date().getFullYear()} Vindium, LLC. All rights reserved.</div>
            <div className="text-xs text-gray-500">
              Built for compliance and reliability
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-purple-700 mb-6 border border-purple-100">
              <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
              Dental Lead Management Platform
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
              The Lead Platform Built for{' '}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">Dental Practices</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Capture leads, nurture patients, automate appointment reminders, and grow your practice—all in one place. 
              Built specifically for dental practices who want to fill more chairs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/signup" 
                className="px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/portal" 
                className="px-8 py-4 text-base font-semibold text-gray-900 bg-white border-2 border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-lg transition-all duration-200"
              >
                View Patient Portal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Patient Lead Management
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to capture, nurture, and convert leads into loyal patients for your dental practice.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl mb-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Patient Database</h3>
            <p className="text-gray-600 leading-relaxed">
              Centralized patient management with full treatment history, insurance info, and preferences. Search, filter, and segment your patient base instantly.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mb-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Lead Tracking</h3>
            <p className="text-gray-600 leading-relaxed">
              Track every lead from first inquiry to booked appointment. See conversion rates, response times, and identify which marketing channels drive the most new patients.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl mb-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Reminders</h3>
            <p className="text-gray-600 leading-relaxed">
              Set up appointment reminders, recall campaigns, and follow-up sequences that run automatically. Reduce no-shows and keep chairs filled.
            </p>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platform Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A complete toolkit for managing and engaging your client base.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Patient Management', desc: 'Comprehensive patient profiles' },
              { name: 'Lead Pipeline', desc: 'Track inquiries to appointments' },
              { name: 'Automated Messaging', desc: 'Reminders & recall campaigns' },
              { name: 'Patient Segmentation', desc: 'Target by treatment needs' },
              { name: 'Lead Scoring', desc: 'Prioritize high-intent prospects' },
              { name: 'Reporting Dashboard', desc: 'Chair fill rates & revenue' },
              { name: 'Patient Portal', desc: 'Online booking & forms' },
              { name: 'HIPAA Compliance', desc: 'Secure patient data handling' }
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border border-gray-100">
                <div className="text-base font-semibold text-gray-900 mb-2">{feature.name}</div>
                <div className="text-sm text-gray-600">{feature.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Keep Patients Coming Back
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Vindium automatically sends the messages your patients need—appointment confirmations, 
              recall reminders, and treatment follow-ups. Set it up once, and your communication runs on autopilot.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Appointment Reminders</div>
                  <div className="text-gray-600">Reduce no-shows by up to 40% with timely SMS and email reminders</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Recall Campaigns</div>
                  <div className="text-gray-600">Automated 6-month cleaning reminders and overdue patient outreach</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Treatment Follow-ups</div>
                  <div className="text-gray-600">Post-procedure check-ins and treatment plan reminders</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
            <div className="text-sm font-semibold text-purple-900 mb-4">Sample Messages</div>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                <div className="text-sm text-gray-900">"Hi Sarah! This is a reminder of your cleaning appointment with Dr. Miller on Jan 15 at 2:00 PM. Reply C to confirm."</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                <div className="text-sm text-gray-900">"It's been 6 months since your last cleaning! Call us at (650) 714-7406 or reply BOOK to schedule your next visit."</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                <div className="text-sm text-gray-900">"Hi Sarah, how are you feeling after your procedure yesterday? Reply if you have any questions for Dr. Miller."</div>
              </div>
            </div>
            <div className="mt-6 text-xs text-gray-600">
              All messages include opt-out instructions and maintain TCPA/HIPAA compliance.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Join dental practices who fill more chairs and grow their patient base effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/signup" 
              className="px-8 py-4 text-base font-semibold text-purple-600 bg-white rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-200"
            >
              Start Free Trial
            </Link>
            <Link 
              to="/communications" 
              className="px-8 py-4 text-base font-semibold text-white border-2 border-white rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              Learn About Compliance
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function Platform() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          The Platform
        </h1>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          Vindium is your command center for patient leads and relationships. Track every inquiry, 
          nurture prospects, and automate patient communication—all from one unified dashboard.
        </p>
      </div>
      
      <div className="space-y-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Modules</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Patient & Lead Manager</h3>
              <p className="text-gray-600 mb-4">
                Centralized database for all patient and lead information with full history tracking.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Patient profiles with treatment history</li>
                <li>• Lead source tracking</li>
                <li>• Insurance and payment info</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Practice Analytics</h3>
              <p className="text-gray-600 mb-4">
                Track lead conversion, chair fill rates, and patient retention over time.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Lead-to-patient conversion</li>
                <li>• No-show rate tracking</li>
                <li>• Revenue per patient metrics</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Automated Outreach</h3>
              <p className="text-gray-600 mb-4">
                Set up workflows for appointment reminders, recalls, and lead nurturing.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Appointment reminders</li>
                <li>• Recall campaigns</li>
                <li>• New lead follow-up sequences</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">HIPAA Compliance</h3>
              <p className="text-gray-600 mb-4">
                Healthcare-grade security with automated consent tracking and audit logs.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• HIPAA-compliant messaging</li>
                <li>• Encrypted patient data</li>
                <li>• BAA agreements available</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Data You Can Act On</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-sm font-semibold text-purple-600 mb-3">Patient Insights</div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Patient lifetime value</li>
                <li>Treatment acceptance rates</li>
                <li>Recall compliance tracking</li>
                <li>Referral source analysis</li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-blue-600 mb-3">Lead Performance</div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Lead source ROI</li>
                <li>Response time metrics</li>
                <li>Conversion rates by channel</li>
                <li>Cost per new patient</li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-cyan-600 mb-3">Practice Metrics</div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Chair utilization rates</li>
                <li>No-show percentages</li>
                <li>Reactivation success</li>
                <li>Revenue forecasting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Communications() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        How We Communicate
      </h1>
      <p className="text-xl text-gray-600 mb-12 leading-relaxed">
        Vindium provides compliant, HIPAA-secure communications for dental practices. 
        Every message is transactional, consent-based, and fully auditable.
      </p>

      <div className="space-y-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Types</h2>
          <p className="text-gray-600 mb-6">
            We deliver appointment reminders, recall notifications, and treatment follow-ups to patients 
            who have explicitly opted in via your practice's intake forms.
          </p>
          <div className="space-y-4">
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-sm font-semibold text-gray-900 mb-2">Appointment Reminders</div>
              <div className="text-sm text-gray-700 font-mono bg-white p-4 rounded border border-gray-200">
                "Hi [First Name], this is a reminder of your appointment with Dr. [Doctor Name] on [Date] at [Time]. Reply C to confirm."
              </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-sm font-semibold text-gray-900 mb-2">Recall Reminders</div>
              <div className="text-sm text-gray-700 font-mono bg-white p-4 rounded border border-gray-200">
                "Hi [First Name], it's time for your 6-month cleaning! Call us at [Phone] or reply BOOK to schedule."
              </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-sm font-semibold text-gray-900 mb-2">Post-Treatment Follow-ups</div>
              <div className="text-sm text-gray-700 font-mono bg-white p-4 rounded border border-gray-200">
                "Hi [First Name], how are you feeling after your procedure? Reply if you have any questions."
              </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-sm font-semibold text-gray-900 mb-2">New Lead Response</div>
              <div className="text-sm text-gray-700 font-mono bg-white p-4 rounded border border-gray-200">
                "Thanks for reaching out to [Practice Name]! We'd love to help. What time works for a quick call?"
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Opt-In Process</h2>
          <p className="text-gray-700 mb-6">
            Patients explicitly opt in via your practice's intake forms with clear consent language, or by providing 
            their phone number directly at check-in. We store opt-in timestamps and 
            maintain comprehensive HIPAA-compliant audit logs for each patient.
          </p>
          <div className="bg-white rounded-lg p-6 border border-blue-200">
            <div className="text-sm font-semibold text-gray-900 mb-3">Consent Management</div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Explicit checkbox consent required</li>
              <li>• Timestamp and IP address logged</li>
              <li>• Opt-out instructions in every message</li>
              <li>• <strong>STOP</strong> keyword processing (automatic unsubscribe)</li>
              <li>• HELP keyword support</li>
              <li>• Audit trail maintained for compliance</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance Standards</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Vindium maintains full TCPA and HIPAA compliance for all patient communications. Our platform includes:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>Written consent before any messages are sent</li>
              <li>HIPAA-compliant message content (no PHI in SMS)</li>
              <li>Easy opt-out mechanism (reply <strong>STOP</strong>)</li>
              <li>Encrypted data storage and transmission</li>
              <li>Business Associate Agreements (BAA) available</li>
              <li>Regular compliance audits and HIPAA training</li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-50 rounded-2xl p-8 border border-purple-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Frequency</h2>
          <p className="text-gray-700">
            Message frequency varies based on appointment schedule and recall needs. Patients typically receive 
            appointment reminders, recall notifications, and treatment follow-ups. Non-promotional messages only.
          </p>
        </div>
      </div>
    </div>
  )
}

function Portal() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Patient Portal
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Secure access for patients to book appointments, complete forms, and manage their preferences.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="p-8 bg-white rounded-2xl border border-gray-200 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Online Booking</h3>
          <p className="text-gray-600">
            Let patients book, reschedule, or cancel appointments 24/7 online.
          </p>
        </div>
        <div className="p-8 bg-white rounded-2xl border border-gray-200 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Forms</h3>
          <p className="text-gray-600">
            Patients complete intake forms, medical history, and consent documents before arrival.
          </p>
        </div>
        <div className="p-8 bg-white rounded-2xl border border-gray-200 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Treatment History</h3>
          <p className="text-gray-600">
            Patients can view past visits, treatment plans, and upcoming appointment details.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 border border-gray-200 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Portal Access</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          The patient portal provides secure, HIPAA-compliant access for your patients. They can book 
          appointments, complete forms, and manage their communication preferences.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/login" 
            className="px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:shadow-xl transition-all"
          >
            Sign In to Portal
          </Link>
          <Link 
            to="/signup" 
            className="px-8 py-3 text-base font-semibold text-gray-900 bg-white border-2 border-gray-200 rounded-lg hover:border-purple-300 transition-all"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  )
}

function Signup() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 py-20">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Create Your Account</h1>
          <p className="text-lg text-gray-600">
            Get started with AI-powered patient lead management
          </p>
        </div>
        
        <form name="signup" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
          <input type="hidden" name="form-name" value="signup" />
          <input type="hidden" name="bot-field" />
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">First Name</label>
                <input name="firstName" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors" required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Last Name</label>
                <input name="lastName" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors" required />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
              <input type="email" name="email" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors" required />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
              <input type="tel" name="phone" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors" required />
              <p className="text-xs text-gray-500 mt-2">Used for service notifications and account security</p>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Practice Name</label>
              <input name="company" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors" />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">How can we help?</label>
              <textarea name="message" rows="4" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors resize-none"></textarea>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <p className="text-sm font-semibold text-gray-900 mb-4">
                Would you like to receive SMS notifications?
              </p>
              <div className="space-y-3 mb-4">
                <label className="flex items-center gap-3 p-3 bg-white rounded-lg border-2 border-gray-200 cursor-pointer hover:border-purple-300 transition-colors has-[:checked]:border-purple-500 has-[:checked]:bg-purple-50">
                  <input type="radio" name="smsConsent" value="yes" className="w-5 h-5 text-purple-600 border-gray-300 focus:ring-purple-500" required />
                  <span className="text-sm font-medium text-gray-900">Yes, sign me up for SMS</span>
                </label>
                <label className="flex items-center gap-3 p-3 bg-white rounded-lg border-2 border-gray-200 cursor-pointer hover:border-gray-300 transition-colors has-[:checked]:border-gray-400 has-[:checked]:bg-gray-50">
                  <input type="radio" name="smsConsent" value="no" className="w-5 h-5 text-gray-600 border-gray-300 focus:ring-gray-500" />
                  <span className="text-sm font-medium text-gray-700">No Thanks</span>
                </label>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                By selecting "Yes", you consent to receive transactional service messages from Vindium (e.g. appointment reminders, service updates, and billing confirmations) at the phone number provided above. 
                Consent is not a condition of purchase. Message frequency varies. 
                Message and data rates may apply. <strong>Reply STOP to cancel at any time.</strong> After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed. <strong>Reply HELP</strong> for assistance. See our{' '}
                <Link to="/privacy" className="text-purple-600 hover:underline font-medium">Privacy Policy</Link> and{' '}
                <Link to="/terms" className="text-purple-600 hover:underline font-medium">Terms of Service</Link>.
              </p>
            </div>

            <button type="submit" className="w-full py-4 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200">
              Create Account
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-purple-600 hover:underline font-medium">Sign in</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 py-20">
      <div className="max-w-md mx-auto px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome Back</h1>
          <p className="text-lg text-gray-600">
            Sign in to access your practice dashboard
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
              <input type="email" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors" />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Password</label>
              <input type="password" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors" />
            </div>

            <button className="w-full py-4 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200">
              Sign In
            </button>

            <p className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-purple-600 hover:underline font-medium">Create one</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-8">Last updated: ${new Date().toLocaleDateString()}</p>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          Vindium, LLC ("Vindium", "we", "us") provides AI-powered patient lead management and communication services 
          for dental practices. This policy explains how we collect, use, and share information.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Information We Collect</h2>
        <ul className="space-y-2 text-gray-700">
          <li>Contact information you submit (name, email, phone number)</li>
          <li>Communication preferences and consent records with timestamps</li>
          <li>Message delivery metadata (timestamps, carrier delivery information, read receipts)</li>
          <li>Website analytics and form submission data</li>
          <li>Account activity and authentication logs</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How We Use Information</h2>
        <ul className="space-y-2 text-gray-700">
          <li>To provide communications services and respond to inquiries</li>
          <li>To send SMS messages per your explicit consent for appointment reminders, service updates, and billing confirmations</li>
          <li>To maintain opt-in/opt-out records and ensure TCPA compliance</li>
          <li>To ensure reliable delivery, troubleshoot issues, and prevent abuse</li>
          <li>To improve our AI-powered message optimization algorithms</li>
          <li>To maintain security and prevent unauthorized access</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">SMS Communications</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We use SMS communications to deliver transactional messages including appointment reminders, 
          service status updates, and billing confirmations. Key details:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Consent:</strong> We obtain explicit written consent before sending any SMS messages</li>
          <li><strong>Message Types:</strong> Transactional service notifications only (non-promotional)</li>
          <li><strong>Frequency:</strong> Message frequency varies based on service activity</li>
          <li><strong>Opt-Out:</strong> <strong>Reply STOP to cancel at any time.</strong> After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed.</li>
          <li><strong>Help:</strong> <strong>Reply HELP</strong> for assistance or contact admin@vindium.net.</li>
          <li><strong>Records:</strong> We store opt-in timestamps, consent records, and complete audit trails</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Data Sharing</h2>
        <p className="text-gray-700 leading-relaxed">
          We share necessary data with trusted service providers (e.g., SMS platforms, wireless carriers, 
          and Google Cloud Platform) solely to deliver messages and operate our services. We do not sell 
          personal data to third parties.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Data Retention</h2>
        <p className="text-gray-700 leading-relaxed">
          We retain information for as long as needed to provide services and as required by law. Message logs, 
          consent records, and audit trails are retained for compliance purposes. You may request deletion of 
          your data by contacting us at admin@vindium.net.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Your Rights and Choices</h2>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Opt-Out:</strong> <strong>Reply STOP to cancel at any time.</strong> After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed.</li>
          <li><strong>Access:</strong> Request access to your personal data through the client portal</li>
          <li><strong>Correction:</strong> Update your information in the client portal or contact support</li>
          <li><strong>Deletion:</strong> Request deletion of your data (subject to legal retention requirements)</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Security</h2>
        <p className="text-gray-700 leading-relaxed">
          We use enterprise-grade security measures including Cloud KMS encryption, IAM access control, 
          and secure data transmission. All data is stored on Google Cloud Platform with SOC 2-compliant infrastructure.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Children's Privacy</h2>
        <p className="text-gray-700 leading-relaxed">
          Our services are intended for individuals 18 years and older. We do not knowingly collect 
          information from children under 18.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">International Users</h2>
        <p className="text-gray-700 leading-relaxed">
          We operate in the United States. If you access our services from other regions, your data 
          may be transferred to and processed in the U.S.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Changes to This Policy</h2>
        <p className="text-gray-700 leading-relaxed">
          We may update this policy from time to time. Material changes will be reflected here with 
          an updated date. Continued use of our services after changes constitutes acceptance.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Contact Us</h2>
        <div className="text-gray-700 leading-relaxed">
          <p>Vindium, LLC</p>
          <p>1940 Haste St, Berkeley, CA 94704 Apartment #B</p>
          <p>Email: admin@vindium.net</p>
          <p>Phone: (650) 714-7406</p>
        </div>
      </div>
    </div>
  )
}

function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Terms of Service</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-8">Last updated: ${new Date().toLocaleDateString()}</p>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          By using Vindium services, you agree to these Terms of Service.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Services</h2>
        <p className="text-gray-700 leading-relaxed">
          Vindium provides AI-powered patient lead management and communication services for dental practices, 
          including appointment reminders, recall campaigns, treatment follow-ups, and lead nurturing.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">SMS/Mobile Terms</h2>
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 my-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Program Information</h3>
          <ul className="space-y-3 text-gray-700">
            <li><strong>Program Name:</strong> Vindium Client Communications</li>
            <li><strong>Description:</strong> We send transactional messages including appointment reminders, 
            recall notifications, treatment follow-ups, and practice communications (non-promotional)</li>
            <li><strong>Opt-In:</strong> Subscribe via practice intake forms, patient portal, or by providing explicit consent 
            at check-in</li>
            <li><strong>Frequency:</strong> Recurring; message frequency varies based on service activity</li>
            <li><strong>Cost:</strong> Message and data rates may apply as charged by your mobile carrier</li>
            <li><strong>Opt-Out:</strong> <strong>Reply STOP to cancel at any time.</strong> After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed.</li>
            <li><strong>Help:</strong> <strong>Reply HELP</strong> for assistance or contact admin@vindium.net or (650) 714-7406.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">User Responsibilities</h2>
        <ul className="space-y-2 text-gray-700">
          <li>You must be 18 years or older to use our services</li>
          <li>Provide accurate and current contact information</li>
          <li>Maintain the security of your account credentials</li>
          <li>Comply with applicable laws and regulations</li>
          <li>Not use services for unlawful or prohibited purposes</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Consent and Data Usage</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          By opting in to SMS communications:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>You provide explicit written consent to receive SMS messages at the provided phone number</li>
          <li>We store your phone number, consent timestamp, and opt-in method for compliance purposes</li>
          <li>We share necessary data with messaging vendors and wireless carriers to deliver messages</li>
          <li>We maintain audit logs of all messages sent and delivery status</li>
          <li>You may withdraw consent at any time by replying <strong>STOP</strong> or contacting us</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Carrier Information</h2>
        <p className="text-gray-700 leading-relaxed">
          Wireless carriers are not liable for delayed or undelivered messages. Message delivery depends 
          on carrier network availability and device compatibility.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Prohibited Content</h2>
        <p className="text-gray-700 leading-relaxed">
          We do not send SHAFT content (sex, hate, alcohol to minors, firearms, tobacco) or other prohibited 
          content as defined by CTIA guidelines and carrier policies.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Service Availability</h2>
        <p className="text-gray-700 leading-relaxed">
          We strive for high availability but do not guarantee uninterrupted service. We may perform 
          maintenance or updates that temporarily affect service availability.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Limitation of Liability</h2>
        <p className="text-gray-700 leading-relaxed">
          Vindium shall not be liable for indirect, incidental, special, consequential, or punitive 
          damages arising from your use of our services.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Termination</h2>
        <p className="text-gray-700 leading-relaxed">
          We may terminate or suspend access to our services immediately, without prior notice, for conduct 
          that violates these Terms or is harmful to other users or our business.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Changes to Terms</h2>
        <p className="text-gray-700 leading-relaxed">
          We reserve the right to modify these Terms at any time. Material changes will be effective upon 
          posting to this page with an updated date.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Governing Law</h2>
        <p className="text-gray-700 leading-relaxed">
          These Terms are governed by the laws of the State of California, without regard to conflict of law principles.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Contact</h2>
        <div className="text-gray-700 leading-relaxed">
          <p>Vindium, LLC</p>
          <p>1940 Haste St, Berkeley, CA 94704 Apartment #B</p>
          <p>Email: admin@vindium.net</p>
          <p>Phone: (650) 714-7406</p>
        </div>

        <p className="text-gray-700 leading-relaxed mt-8">
          For more information about our data practices, see our{' '}
          <Link to="/privacy" className="text-purple-600 hover:underline font-medium">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/communications" element={<Communications />} />
            <Route path="/portal" element={<Portal />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

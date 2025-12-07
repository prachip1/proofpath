import Sidebar from '../Sidebar'
import MobileHeader from '../MobileHeader'
import { HiBell } from 'react-icons/hi'

function CaseDetail({ onNavigate, onLogout }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeItem="Cases" onNavigate={onNavigate} onLogout={onLogout} />
      
      {/* Mobile Header */}
      <MobileHeader onLogout={onLogout} />
      
      {/* Main Content Area */}
      <div className="flex-1 mt-16 md:mt-0 md:ml-64 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-4 md:px-8 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Breadcrumbs */}
          <div className="text-xs md:text-sm text-gray-600">
            <span className="hover:text-gray-900 cursor-pointer">Dashboard</span>
            <span className="mx-2">&gt;</span>
            <span className="hover:text-gray-900 cursor-pointer">Cases</span>
            <span className="mx-2">&gt;</span>
            <span className="hover:text-gray-900 cursor-pointer">MRG-2025-112</span>
            <span className="mx-2">&gt;</span>
            <span className="text-gray-900 font-medium">Proof Narrative</span>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-medium">Compliance Officer</span>
            {/* User Profile Icon */}
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-semibold cursor-pointer">
              U
            </div>
            {/* Notification Bell */}
            <button className="text-gray-600 hover:text-gray-900">
              <HiBell className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white p-4 md:p-8">
          {/* Header Section */}
          <div className="mb-6 flex flex-col md:flex-row items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">Proof Narrative & Risk Report</h1>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>FCA-aligned</span>
                <span className="text-gray-300">|</span>
                <span>Regulator-ready</span>
                <span className="text-gray-300">|</span>
                <span>Machine-auditable</span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 rounded-md text-white font-medium" style={{ backgroundColor: '#10b981' }}>
                Export Audit Pack
              </button>
              <button className="px-4 py-2 rounded-md text-white font-medium" style={{ backgroundColor: '#10b981' }}>
                Download PDF
              </button>
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-semibold">
                U
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="space-y-6">
            {/* Top Row - Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Case Overview */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Case Overview</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Borrower Name:</span>
                    <span className="text-gray-900 font-medium">John Doe</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mortgage Application Ref:</span>
                    <span className="text-gray-900 font-medium">MRG-2025-112</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Broker:</span>
                    <span className="text-gray-900 font-medium">PrimeHome Mortgages Ltd</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Loan Amount:</span>
                    <span className="text-gray-900 font-medium">£350,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Deposit Amount:</span>
                    <span className="text-gray-900 font-medium">£60,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lender:</span>
                    <span className="text-gray-900 font-medium">ABC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Broker:</span>
                    <span className="text-gray-900 font-medium">Prime</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date Generated:</span>
                    <span className="text-gray-900 font-medium">17 Nov 2025</span>
                  </div>
                </div>
              </div>

              {/* Automated Risk Summary */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Automated Risk Summary</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded text-white font-medium" style={{ backgroundColor: '#f97316' }}>
                      Medium
                    </span>
                    <span className="text-gray-900 font-medium">Risk</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Enhanced Due Diligence (EDD):</span>
                    <span className="text-gray-900 font-medium ml-2">Yes (crypto component)</span>
                  </div>
                  <div>
                    <span className="text-gray-600 font-medium">Actions Taken:</span>
                    <ul className="mt-2 space-y-1 text-gray-600">
                      <li>• Gift letter collected</li>
                      <li>• Exchange statement uploaded</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Row - Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Automated Proof Narrative */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Automated Proof Narrative</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 text-gray-600 font-medium">Source ID</th>
                        <th className="text-left py-2 text-gray-600 font-medium">Source Type</th>
                        <th className="text-left py-2 text-gray-600 font-medium">Amount</th>
                        <th className="text-left py-2 text-gray-600 font-medium">Origin Account</th>
                        <th className="text-left py-2 text-gray-600 font-medium">Classification</th>
                        <th className="text-left py-2 text-gray-600 font-medium">Risk Tier</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 text-gray-900 font-medium">S1</td>
                        <td className="py-3 text-gray-600">Regular salary savings</td>
                        <td className="py-3 text-gray-900">40,000</td>
                        <td className="py-3 text-gray-600">HSBC Current (**8,4,21)</td>
                        <td className="py-3 text-gray-600">Employment</td>
                        <td className="py-3">
                          <span className="px-2 py-1 rounded text-xs font-medium text-white" style={{ backgroundColor: '#10b981' }}>
                            Low
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 text-gray-900 font-medium">S2</td>
                        <td className="py-3 text-gray-600">Gift from parent</td>
                        <td className="py-3 text-gray-900">15,000</td>
                        <td className="py-3 text-gray-600">Barclays Joint Accoyni (*712)</td>
                        <td className="py-3 text-gray-600">Family gift</td>
                        <td className="py-3">
                          <span className="px-2 py-1 rounded text-xs font-medium text-white" style={{ backgroundColor: '#86efac' }}>
                            89%
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 text-gray-900 font-medium">S3</td>
                        <td className="py-3 text-gray-600">Crypto proceeds</td>
                        <td className="py-3 text-gray-900">5,000</td>
                        <td className="py-3 text-gray-600">Coinbase Wallet</td>
                        <td className="py-3 text-gray-600">Digital asset sale</td>
                        <td className="py-3">
                          <span className="px-2 py-1 rounded text-xs font-medium text-white" style={{ backgroundColor: '#86efac' }}>
                            81%
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* AML / FCA Compliance Checks */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">AML / FCA Compliance Checks</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 text-gray-600 font-medium">Check Category</th>
                        <th className="text-left py-2 text-gray-600 font-medium">Control Applied</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 text-gray-600">eIDV / Open banking</td>
                        <td className="py-3 text-gray-900">KYC match</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 text-gray-600">AI transaction tracing</td>
                        <td className="py-3 text-gray-900">Complete</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 text-gray-600">High-Risk Flag Review</td>
                        <td className="py-3 text-gray-900">Additional document review</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 text-gray-600">Record Keeping</td>
                        <td className="py-3 text-gray-900">MLR 2017 Reg 40</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Bottom Row - Full Width */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Audit Trail & Explainability</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 text-gray-600 font-medium">Timestamp</th>
                      <th className="text-left py-2 text-gray-600 font-medium">Actor</th>
                      <th className="text-left py-2 text-gray-600 font-medium">Action</th>
                      <th className="text-left py-2 text-gray-600 font-medium">Evidence Ref</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 text-gray-900">2025-10-05</td>
                      <td className="py-3 text-gray-600">Borrower</td>
                      <td className="py-3 text-gray-600">Linked HSBC + Coinbase</td>
                      <td className="py-3 text-gray-600">Log #3221</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 text-gray-900">2025-10-06</td>
                      <td className="py-3 text-gray-600">AI Engine</td>
                      <td className="py-3 text-gray-600">Classified income streams</td>
                      <td className="py-3 text-gray-600">V2.3 output</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 text-gray-900">2025-10-07</td>
                      <td className="py-3 text-gray-600">Broker</td>
                      <td className="py-3 text-gray-600">Uploaded gift letter</td>
                      <td className="py-3 text-gray-600">GL-0098</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 text-gray-900">2025-10-08</td>
                      <td className="py-3 text-gray-600">Compliance Officer</td>
                      <td className="py-3 text-gray-600">Reviewed crypto</td>
                      <td className="py-3 text-gray-600">C-102</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseDetail


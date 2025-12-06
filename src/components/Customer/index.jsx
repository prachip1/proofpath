import { useState } from 'react'
import SelectAccount from './SelectAccount'
import CustomerSidebar from './CustomerSidebar'

function Customer() {
  const [selectedBank, setSelectedBank] = useState('')
  const [showSelectAccount, setShowSelectAccount] = useState(false)

  const handleContinue = () => {
    if (selectedBank.trim()) {
      setShowSelectAccount(true)
    }
  }

  if (showSelectAccount) {
    return <SelectAccount />
  }

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: '#152E32' }}>
      <CustomerSidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 mt-16 md:mt-0 md:ml-64 flex items-center justify-center p-4 md:p-8">
        {/* Dark Card */}
        <div className="w-full max-w-2xl rounded-lg p-8 text-white" style={{ backgroundColor: '#1A363A' }}>
        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">Connect Applicant Bank Accounts</h1>
        
        {/* Description */}
        <p className="text-gray-300 mb-8">
          The applicant will be asked to authenticate their bank login to retrieve financial data.
        </p>

        {/* Step Indicator */}
        <div className="mb-6">
          <div className="flex items-start gap-4">
            {/* Step Badge */}
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center font-semibold text-lg flex-shrink-0">
              1
            </div>
            <div className="flex-1">
              <div className="font-bold text-lg mb-2">Connect bank account</div>
              <div className="text-gray-400 text-sm">Bank</div>
            </div>
          </div>
        </div>

        {/* Bank Selection Field */}
        <div className="mb-8">
          <input
            type="text"
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
            placeholder="Select or enter bank name"
            className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
          />
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="w-full py-3 rounded-lg font-bold text-white transition-colors"
          style={{ backgroundColor: '#1A363A' }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#2A4A4E'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#1A363A'}
        >
          Continue
        </button>
        </div>
      </div>
    </div>
  )
}

export default Customer


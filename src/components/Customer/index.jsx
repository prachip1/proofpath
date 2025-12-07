import { useState } from 'react'
import SelectAccount from './SelectAccount'
import CustomerSidebar from './CustomerSidebar'
import MobileHeader from '../MobileHeader'
import CustomerMobileBottomNav from './CustomerMobileBottomNav'

function Customer({ onLogout }) {
  const [selectedBank, setSelectedBank] = useState('')
  const [showSelectAccount, setShowSelectAccount] = useState(false)

  const handleContinue = () => {
    if (selectedBank.trim()) {
      setShowSelectAccount(true)
    }
  }

  if (showSelectAccount) {
    return <SelectAccount onLogout={onLogout} />
  }

  return (
    <div className="flex min-h-screen overflow-x-hidden w-full" style={{ backgroundColor: '#152E32' }}>
      <CustomerSidebar onLogout={onLogout} />
      
      {/* Mobile Header */}
      <MobileHeader onLogout={onLogout} />
      
      {/* Main Content Area */}
      <div className="flex-1 pt-16 md:pt-0 md:ml-64 flex items-center justify-center p-4 md:p-8 pb-20 md:pb-8">
        {/* Dark Card */}
        <div className="w-full max-w-2xl rounded-lg p-4 md:p-6 lg:p-8 text-white" style={{ backgroundColor: '#1A363A' }}>
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Connect Applicant Bank Accounts</h1>
        
        {/* Description */}
        <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8">
          The applicant will be asked to authenticate their bank login to retrieve financial data.
        </p>

        {/* Step Indicator */}
        <div className="mb-4 md:mb-6">
          <div className="flex items-start gap-3 md:gap-4">
            {/* Step Badge */}
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-500 flex items-center justify-center font-semibold text-base md:text-lg flex-shrink-0">
              1
            </div>
            <div className="flex-1">
              <div className="font-bold text-base md:text-lg mb-1 md:mb-2">Connect bank account</div>
              <div className="text-gray-400 text-xs md:text-sm">Bank</div>
            </div>
          </div>
        </div>

        {/* Bank Selection Field */}
        <div className="mb-6 md:mb-8">
          <input
            type="text"
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
            placeholder="Select or enter bank name"
            className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
          />
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="w-full py-2.5 md:py-3 rounded-lg font-bold text-white transition-colors text-sm md:text-base"
          style={{ backgroundColor: '#1A363A' }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#2A4A4E'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#1A363A'}
        >
          Continue
        </button>
        </div>
      </div>
      
      {/* Mobile Bottom Navigation */}
      <CustomerMobileBottomNav activeItem="Dashboard" />
    </div>
  )
}

export default Customer


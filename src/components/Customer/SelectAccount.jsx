import { useState } from 'react'
import VerifyAccount from './VerifyAccount'
import AccountConnected from './AccountConnected'
import CustomerSidebar from './CustomerSidebar'
import MobileHeader from '../MobileHeader'
import CustomerMobileBottomNav from './CustomerMobileBottomNav'

function SelectAccount() {
  const [selectedAccount, setSelectedAccount] = useState('0974')
  const [showVerifyAccount, setShowVerifyAccount] = useState(false)
  const [showAccountConnected, setShowAccountConnected] = useState(false)

  const accounts = [
    { id: '0974', label: 'Account', lastDigits: '0974' },
    // You can add more accounts here if needed
  ]

  const handleContinue = () => {
    if (selectedAccount) {
      setShowVerifyAccount(true)
    }
  }

  const handleVerify = () => {
    setShowVerifyAccount(false)
    setShowAccountConnected(true)
  }

  if (showAccountConnected) {
    return <AccountConnected />
  }

  return (
    <>
      <div className="flex min-h-screen overflow-x-hidden w-full" style={{ backgroundColor: '#152E32' }}>
        <CustomerSidebar />
        
        {/* Mobile Header */}
        <MobileHeader />
        
        {/* Main Content Area */}
        <div className="flex-1 pt-16 md:pt-0 md:ml-64 flex items-center justify-center p-4 md:p-8 pb-20 md:pb-8">
          {/* Select Account Card */}
          <div className="w-full max-w-md rounded-lg p-4 md:p-6 lg:p-8 text-white" style={{ backgroundColor: '#1A363A' }}>
          {/* Title */}
          <h1 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Select Account</h1>
          
          {/* Description */}
          <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6">
            Choose an account from the list below to continue.
          </p>

          {/* Account Selection List */}
          <div className="mb-6 md:mb-8 space-y-3 md:space-y-4">
            {accounts.map((account) => (
              <div
                key={account.id}
                onClick={() => setSelectedAccount(account.id)}
                className="flex items-center justify-between p-3 md:p-4 rounded-lg cursor-pointer active:opacity-70 transition-opacity touch-manipulation"
                style={{ backgroundColor: selectedAccount === account.id ? '#2A4A4E' : 'transparent' }}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  {/* Radio Button */}
                  <div className="w-4 h-4 md:w-5 md:h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                    style={{ 
                      borderColor: selectedAccount === account.id ? '#10b981' : '#6b7280',
                      backgroundColor: selectedAccount === account.id ? '#10b981' : 'transparent'
                    }}
                  >
                    {selectedAccount === account.id && (
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white"></div>
                    )}
                  </div>
                  <span className="text-white font-medium text-sm md:text-base">{account.label}</span>
                </div>
                <span className="text-white text-sm md:text-base">•• {account.lastDigits}</span>
              </div>
            ))}
          </div>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            className="w-full py-2.5 md:py-3 rounded-lg font-bold text-gray-900 bg-white hover:bg-gray-100 transition-colors text-sm md:text-base"
          >
            Continue
          </button>
          </div>
        </div>
        
        {/* Mobile Bottom Navigation */}
        <CustomerMobileBottomNav activeItem="Dashboard" />
      </div>

      {/* Verify Account Modal */}
      {showVerifyAccount && (
        <VerifyAccount 
          onVerify={handleVerify}
          onClose={() => setShowVerifyAccount(false)}
        />
      )}
    </>
  )
}

export default SelectAccount


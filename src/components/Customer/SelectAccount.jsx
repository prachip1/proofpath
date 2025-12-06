import { useState } from 'react'
import VerifyAccount from './VerifyAccount'
import AccountConnected from './AccountConnected'
import CustomerSidebar from './CustomerSidebar'

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
      <div className="flex min-h-screen" style={{ backgroundColor: '#152E32' }}>
        <CustomerSidebar />
        
        {/* Main Content Area */}
        <div className="flex-1 ml-64 flex items-center justify-center p-8">
          {/* Select Account Card */}
          <div className="w-full max-w-md rounded-lg p-8 text-white" style={{ backgroundColor: '#1A363A' }}>
          {/* Title */}
          <h1 className="text-2xl font-bold mb-3">Select Account</h1>
          
          {/* Description */}
          <p className="text-gray-300 mb-6">
            Choose an account from the list below to continue.
          </p>

          {/* Account Selection List */}
          <div className="mb-8 space-y-4">
            {accounts.map((account) => (
              <div
                key={account.id}
                onClick={() => setSelectedAccount(account.id)}
                className="flex items-center justify-between p-4 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors"
                style={{ backgroundColor: selectedAccount === account.id ? '#2A4A4E' : 'transparent' }}
              >
                <div className="flex items-center gap-3">
                  {/* Radio Button */}
                  <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
                    style={{ 
                      borderColor: selectedAccount === account.id ? '#10b981' : '#6b7280',
                      backgroundColor: selectedAccount === account.id ? '#10b981' : 'transparent'
                    }}
                  >
                    {selectedAccount === account.id && (
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    )}
                  </div>
                  <span className="text-white font-medium">{account.label}</span>
                </div>
                <span className="text-white">•• {account.lastDigits}</span>
              </div>
            ))}
          </div>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            className="w-full py-3 rounded-lg font-bold text-gray-900 bg-white hover:bg-gray-100 transition-colors"
          >
            Continue
          </button>
          </div>
        </div>
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


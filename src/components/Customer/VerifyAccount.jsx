import { useState } from 'react'

function VerifyAccount({ onVerify, onClose }) {
  const [verificationCode, setVerificationCode] = useState('')

  const handleVerify = () => {
    // Handle verification logic here
    if (verificationCode.trim()) {
      // Call the onVerify callback to navigate to AccountConnected
      if (onVerify) {
        onVerify()
      }
    }
  }

  return (
    <>
      {/* Modal Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        {/* Verify Account Modal */}
        <div className="w-full max-w-md rounded-lg p-8 text-white mx-4" style={{ backgroundColor: '#1A363A' }}>
          {/* Title */}
          <h1 className="text-2xl font-bold mb-3">Verify Your Account</h1>
          
          {/* Instructional Text */}
          <p className="text-gray-300 mb-6">
            A verification code has been sent to your email address.
          </p>

          {/* Verification Code Input Field */}
          <div className="mb-6">
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              placeholder="Enter verification code"
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-lg font-medium text-white border border-gray-600 hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleVerify}
              className="flex-1 py-3 rounded-lg font-bold text-white transition-colors"
              style={{ backgroundColor: '#2A5C62' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#3A6C72'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#2A5C62'}
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default VerifyAccount


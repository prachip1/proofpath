import { useState, useRef, useEffect } from 'react'
import { HiChevronDown, HiCheck } from 'react-icons/hi'
import { FaMicrosoft } from 'react-icons/fa'

function SignIn({ onSignIn }) {
  const [signInAs, setSignInAs] = useState('Broker')
  const [email, setEmail] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const options = [
    { value: 'Broker', label: 'Broker' },
    { value: 'Customer', label: 'Customer' },
    { value: 'Underwriter', label: 'Underwriter' },
    { value: 'Solicitor', label: 'Solicitor' },
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSelect = (value) => {
    setSignInAs(value)
    setIsDropdownOpen(false)
  }

  const selectedOption = options.find(opt => opt.value === signInAs)

  const handleContinue = () => {
    onSignIn(signInAs)
  }

  const handleMicrosoftSignIn = () => {
    onSignIn(signInAs)
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Brand Section */}
      <div className="w-full md:w-1/2 relative overflow-hidden flex items-center justify-center min-h-[300px] md:min-h-screen" style={{ backgroundColor: '#011F2A' }}>
        {/* Organic wavy background pattern - Vertical strokes */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            {/* Subtle organic vertical wavy lines - More wavy */}
            <path
              d="M200,0 Q80,200 200,400 Q120,600 200,800"
              fill="none"
              stroke="#0A4A5A"
              strokeWidth="1.5"
              opacity="0.4"
            />
            <path
              d="M400,0 Q280,200 400,400 Q320,600 400,800"
              fill="none"
              stroke="#0A4A5A"
              strokeWidth="1.5"
              opacity="0.35"
            />
            <path
              d="M600,0 Q480,200 600,400 Q520,600 600,800"
              fill="none"
              stroke="#0A4A5A"
              strokeWidth="1.5"
              opacity="0.4"
            />
            <path
              d="M800,0 Q680,200 800,400 Q720,600 800,800"
              fill="none"
              stroke="#0A4A5A"
              strokeWidth="1.5"
              opacity="0.35"
            />
            <path
              d="M1000,0 Q880,200 1000,400 Q920,600 1000,800"
              fill="none"
              stroke="#0A4A5A"
              strokeWidth="1.5"
              opacity="0.4"
            />
          </svg>
        </div>
        {/* Logo Text - Bottom Center */}
        <h1 className="text-4xl md:text-7xl font-bold relative z-10 tracking-tight px-4" style={{ color: '#22c55e' }}>proofpath.</h1>
      </div>

      {/* Right Side - Sign In Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8" style={{ backgroundColor: '#141F24' }}>
        <div className="w-full max-w-md">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 md:mb-8">Sign in</h2>

          {/* Sign in as dropdown */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Sign in as
            </label>
            <div className="relative" ref={dropdownRef}>
              {/* Dropdown Button */}
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full border border-gray-700 text-white rounded-lg px-4 py-3 flex items-center justify-between hover:border-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                style={{ backgroundColor: '#0C151A' }}
              >
                <span className="font-medium">{selectedOption?.label}</span>
                <HiChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-2 border border-gray-700 rounded-lg shadow-xl overflow-hidden" style={{ backgroundColor: '#0C151A' }}>
                  {options.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleSelect(option.value)}
                      className={`w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-700 transition-colors ${
                        signInAs === option.value ? 'bg-gray-750' : ''
                      }`}
                    >
                      <span className={`font-medium ${
                        signInAs === option.value ? 'text-green-400' : 'text-white'
                      }`}>
                        {option.label}
                      </span>
                      {signInAs === option.value && (
                        <HiCheck className="w-5 h-5 text-green-400" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Email input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleContinue()
                }
              }}
              className="w-full border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              style={{ backgroundColor: '#0C151A' }}
              placeholder="Enter your email"
            />
          </div>

          {/* Continue button */}
          <button 
            onClick={handleContinue}
            className="w-full text-white font-semibold py-3 rounded-lg mb-6 transition-colors"
            style={{ backgroundColor: '#10b981' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#059669'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#10b981'}
          >
            Continue
          </button>

          {/* Divider */}
          <div className="flex items-center mb-6">
            <div className="flex-1 border-t border-gray-700"></div>
            <span className="px-4 text-gray-400 text-sm">or</span>
            <div className="flex-1 border-t border-gray-700"></div>
          </div>

          {/* Microsoft Sign In button */}
          <button 
            onClick={handleMicrosoftSignIn}
            className="w-full text-white font-medium py-3 rounded-lg mb-6 flex items-center justify-center gap-3 border transition-colors"
            style={{ backgroundColor: '#0C151A', borderColor: '#374151' }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#0f1920'
              e.target.style.borderColor = '#4b5563'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#0C151A'
              e.target.style.borderColor = '#374151'
            }}
          >
            <FaMicrosoft className="w-5 h-5" />
            Sign in with Microsoft
          </button>

          {/* One-time passcode link */}
          <div className="text-center">
            <a href="#" className="text-white hover:text-gray-300 text-sm">
              Sign in with a one-time passcode
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn


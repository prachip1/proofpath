import { useState } from 'react'

function SignUp() {
  const [signUpAs, setSignUpAs] = useState('Broker')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Brand Section */}
      <div className="w-1/2 bg-teal-900 relative overflow-hidden flex items-center justify-center">
        {/* Wavy background pattern */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path
              d="M0,400 Q300,300 600,400 T1200,400 L1200,800 L0,800 Z"
              fill="none"
              stroke="#5eead4"
              strokeWidth="3"
            />
            <path
              d="M0,450 Q300,350 600,450 T1200,450 L1200,800 L0,800 Z"
              fill="none"
              stroke="#5eead4"
              strokeWidth="3"
            />
            <path
              d="M0,500 Q300,400 600,500 T1200,500 L1200,800 L0,800 Z"
              fill="none"
              stroke="#5eead4"
              strokeWidth="3"
            />
            <path
              d="M0,350 Q300,250 600,350 T1200,350 L1200,800 L0,800 Z"
              fill="none"
              stroke="#5eead4"
              strokeWidth="3"
            />
            <path
              d="M0,300 Q300,200 600,300 T1200,300 L1200,800 L0,800 Z"
              fill="none"
              stroke="#5eead4"
              strokeWidth="3"
            />
          </svg>
        </div>
        {/* Logo Text */}
        <h1 className="text-7xl font-bold text-green-400 relative z-10 tracking-tight">proofpath.</h1>
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="w-1/2 bg-gray-900 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-semibold text-white mb-8">Sign up</h2>

          {/* Sign up as dropdown */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Sign up as
            </label>
            <select
              value={signUpAs}
              onChange={(e) => setSignUpAs(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            >
              <option value="Broker">Broker</option>
              <option value="Agent">Agent</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          {/* Name input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              placeholder="Enter your full name"
            />
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
              className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          {/* Continue button */}
          <button className="w-full bg-green-400 hover:bg-green-500 text-gray-900 font-semibold py-3 rounded-lg mb-6 transition-colors">
            Continue
          </button>

          {/* Divider */}
          <div className="flex items-center mb-6">
            <div className="flex-1 border-t border-gray-700"></div>
            <span className="px-4 text-gray-400 text-sm">or</span>
            <div className="flex-1 border-t border-gray-700"></div>
          </div>

          {/* Microsoft Sign Up button */}
          <button className="w-full bg-black hover:bg-gray-900 text-white font-medium py-3 rounded-lg mb-6 flex items-center justify-center gap-3 border border-gray-700 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 23 23" fill="none">
              <path d="M0 0H10.5V10.5H0V0Z" fill="#F25022"/>
              <path d="M12.5 0H23V10.5H12.5V0Z" fill="#7FBA00"/>
              <path d="M0 12.5H10.5V23H0V12.5Z" fill="#00A4EF"/>
              <path d="M12.5 12.5H23V23H12.5V12.5Z" fill="#FFB900"/>
            </svg>
            Sign up with Microsoft
          </button>

          {/* Sign in link */}
          <div className="text-center">
            <a href="#" className="text-green-400 hover:text-green-300 text-sm">
              Already have an account? Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp


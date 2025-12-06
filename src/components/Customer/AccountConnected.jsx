import CustomerSidebar from './CustomerSidebar'

function AccountConnected() {
  return (
    <div className="flex min-h-screen" style={{ backgroundColor: '#152E32' }}>
      <CustomerSidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 ml-64 flex items-center justify-center p-8">
        {/* Success Card */}
        <div className="w-full max-w-md text-center text-white">
          {/* Success Icon */}
          <div className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-gray-400 flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl font-bold mb-4">Account Connected</h1>
          
          {/* Description Text */}
          <p className="text-gray-300 text-lg">
            The Savings account ending in 0974 has been successfully connected.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AccountConnected


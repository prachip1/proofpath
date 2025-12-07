import CustomerSidebar from './CustomerSidebar'
import MobileHeader from '../MobileHeader'
import CustomerMobileBottomNav from './CustomerMobileBottomNav'

function AccountConnected() {
  return (
    <div className="flex min-h-screen overflow-x-hidden w-full" style={{ backgroundColor: '#152E32' }}>
      <CustomerSidebar />
      
      {/* Mobile Header */}
      <MobileHeader />
      
      {/* Main Content Area */}
      <div className="flex-1 pt-16 md:pt-0 md:ml-64 flex items-center justify-center p-4 md:p-8 pb-20 md:pb-8">
        {/* Success Card */}
        <div className="w-full max-w-md text-center text-white">
          {/* Success Icon */}
          <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 rounded-full border-4 border-gray-400 flex items-center justify-center">
            <svg className="w-8 h-8 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Account Connected</h1>
          
          {/* Description Text */}
          <p className="text-sm md:text-base lg:text-lg text-gray-300">
            The Savings account ending in 0974 has been successfully connected.
          </p>
        </div>
      </div>
      
      {/* Mobile Bottom Navigation */}
      <CustomerMobileBottomNav activeItem="Dashboard" />
    </div>
  )
}

export default AccountConnected


import { useState } from 'react'
import Sidebar from '../Sidebar'

function SubmitApplication() {
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const steps = [
    { number: 1, label: 'Borrower Details', active: true, completed: true },
    { number: 2, label: 'Property & Loan', active: false, completed: true },
    { number: 3, label: 'Bank Connection', active: false, completed: true },
    { number: 4, label: 'Confirmation', active: showSuccessModal, completed: false },
  ]

  const handleSubmitCase = () => {
    // Here you would typically submit the case data
    // For now, just show the success modal
    setShowSuccessModal(true)
  }

  // Sample data - in real app, this would come from props or context
  const reviewData = {
    borrower: {
      name: 'John Doe',
    },
    property: {
      address: '123 Main Street, City, State 12345',
      propertyType: 'Single Family Home',
    },
    loan: {
      amount: '$250,000',
    },
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeItem="Cases" />
      
      {/* Main Content Area */}
      <div className="flex-1 ml-64 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          {/* Breadcrumbs */}
          <div className="text-sm text-gray-600">
            <span className="hover:text-gray-900 cursor-pointer">Dashboard</span>
            <span className="mx-2">></span>
            <span className="hover:text-gray-900 cursor-pointer">Cases</span>
            <span className="mx-2">></span>
            <span className="text-gray-900 font-medium">New Case</span>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            {/* Notification Bell */}
            <button className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>

            {/* User Profile */}
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-semibold">
                S
              </div>
              <span className="text-gray-700 font-medium">Sophie</span>
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Form Content */}
        <div className="flex-1 bg-white p-8">
          {/* Step Indicator */}
          <div className="mb-8">
            <div className="flex items-center gap-4">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                        step.completed
                          ? 'bg-green-600 text-white'
                          : step.active
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {step.completed ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        step.number
                      )}
                    </div>
                    <span
                      className={`ml-3 font-medium ${
                        step.active || step.completed ? 'text-gray-900' : 'text-gray-500'
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-0.5 mx-4 ${step.completed || (step.active && index < steps.length - 1) ? 'bg-green-600' : 'bg-gray-200'}`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Review Content */}
          <div className="max-w-6xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Submit Application</h2>
            <p className="text-gray-600 mb-8">Review the Information below and submit the case.</p>

            {/* Review Sections Grid */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {/* Left Column - Review Sections */}
              <div className="col-span-2 space-y-6">
                {/* Borrower Details */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Borrower Details</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Name</label>
                      <div className="mt-1 h-4 bg-gray-300 rounded w-48"></div>
                    </div>
                  </div>
                </div>

                {/* Property Information */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Information</h3>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  </div>
                </div>

                {/* Loan Data */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Loan Data</h3>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-300 rounded w-32"></div>
                  </div>
                </div>
              </div>

              {/* Right Column - Visual Placeholder */}
              <div className="col-span-1">
                <div className="bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 h-full min-h-[400px] flex items-center justify-center relative">
                  {/* Diagonal Cross */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-full h-full text-gray-300" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="2" />
                      <line x1="0" y1="100" x2="100" y2="0" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4">
              <button
                type="button"
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleSubmitCase}
                className="px-6 py-2 rounded-md text-white font-medium transition-colors"
                style={{ backgroundColor: '#1A363A' }}
              >
                Submit Case
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
            {/* Step Indicator in Modal */}
            <div className="mb-6">
              <div className="flex items-center justify-center">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-semibold">
                    4
                  </div>
                  <span className="ml-3 font-medium text-gray-900">Confirmation</span>
                </div>
              </div>
            </div>

            {/* Success Content */}
            <div className="text-center">
              {/* Checkmark Icon */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-200 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Case Submitted</h2>

              {/* Subtitle */}
              <p className="text-gray-600 mb-2">The case has been submitted successfully.</p>
              <p className="text-gray-600 mb-8">You will be notified when the review process is complete.</p>

              {/* Action Button */}
              <button
                onClick={() => {
                  setShowSuccessModal(false)
                  // Navigate to dashboard - you can add navigation logic here
                }}
                className="w-full px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-md hover:bg-gray-300 transition-colors"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SubmitApplication


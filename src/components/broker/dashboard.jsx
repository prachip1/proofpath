import { useState } from 'react'
import Sidebar from '../Sidebar'
import MobileBottomNav from '../MobileBottomNav'
import MobileHeader from '../MobileHeader'
import DesktopHeader from '../DesktopHeader'

function Dashboard({ onNavigate, onCaseClick, onLogout }) {
  const allCases = [
    { id: '#123456', applicant: 'Eleanor Smith', submitted: 'Oct 23, 2023', status: 'Completed' },
    { id: '#123455', applicant: 'Benjamin Brown', submitted: 'Oct 20, 2023', status: 'In review' },
    { id: '#123454', applicant: 'Mohammed Ahmed', submitted: 'Oct 19, 2023', status: 'Pending' },
    { id: '#123453', applicant: 'Sophie Wilson', submitted: 'Oct 18, 2023', status: 'Completed' },
  ]
  
  const [searchQuery, setSearchQuery] = useState('')
  
  // Filter out completed cases
  let recentCases = allCases.filter(caseItem => caseItem.status !== 'Completed')
  
  // Apply search filter
  if (searchQuery.trim()) {
    recentCases = recentCases.filter(caseItem => 
      caseItem.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      caseItem.applicant.toLowerCase().includes(searchQuery.toLowerCase()) ||
      caseItem.status.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }
  
  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const getStatusBadgeStyle = () => {
    return { backgroundColor: '#003935', color: 'white' }
  }

  return (
    <div className="flex min-h-screen overflow-x-hidden w-full" style={{ background: 'linear-gradient(to right, #01151C 0%, #002025 50%, #01151C 100%)' }}>
      <Sidebar activeItem="Dashboard" onNavigate={onNavigate} onLogout={onLogout} />
      
      {/* Desktop Header */}
      <DesktopHeader onLogout={onLogout} onSearch={handleSearch} />
      
      {/* Mobile Header */}
      <MobileHeader onLogout={onLogout} onSearch={handleSearch} />
      
      {/* Main Content Area */}
      <div className="flex flex-col mt-8 flex-1 min-w-0 w-full pt-16 md:pt-16 md:ml-64 px-4 md:px-6 lg:px-8 pb-20 md:pb-6 lg:pb-8 overflow-x-hidden">
        {/* Header */}
        <div className="mb-4 md:mb-8">
          <h1 className="text-lg md:text-4xl font-bold text-white mb-1 md:mb-2 leading-tight break-words">Portfolio Summary</h1>
          <p className="text-xs md:text-base text-gray-400 leading-relaxed break-words">Source-of-funds verification at a glance</p>
        </div>

        {/* First Row: All Metrics and Chart Side by Side */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-4 md:mb-6 w-full">
          {/* Left Column: 4 Metrics Cards + Pending Reviews */}
          <div className="flex-1 flex flex-col gap-3 md:gap-4">
            {/* First Row: 4 Metrics Cards */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-4">
              {/* Total Cases */}
              <div className="flex-1 rounded-lg p-4 md:p-6 min-h-[100px] md:h-40 flex flex-col justify-start items-start" style={{ backgroundColor: '#01242A' }}>
                <p className="text-gray-400 text-sm md:text-lg mb-1 leading-tight">Total cases</p>
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-none">128</p>
              </div>
              
              {/* Low Risk */}
              <div className="flex-1 rounded-lg p-4 md:p-6 min-h-[100px] md:h-40 flex flex-col justify-start items-start" style={{ backgroundColor: '#01242A' }}>
                <p className="text-gray-400 text-sm md:text-lg mb-1 leading-tight">Low risk</p>
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-none">85</p>
              </div>
              
              {/* Medium Risk */}
              <div className="flex-1 rounded-lg p-4 md:p-6 min-h-[100px] md:h-40 flex flex-col justify-start items-start" style={{ backgroundColor: '#01242A' }}>
                <p className="text-gray-400 text-sm md:text-lg mb-1 leading-tight">Medium risk</p>
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-none">27</p>
              </div>
              
              {/* High Risk */}
              <div className="flex-1 rounded-lg p-4 md:p-6 min-h-[100px] md:h-40 flex flex-col justify-start items-start" style={{ backgroundColor: '#01242A' }}>
                <p className="text-gray-400 text-sm md:text-lg mb-1 leading-tight">High risk</p>
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-none">16</p>
              </div>
            </div>

            {/* Second Row: Pending Reviews */}
            <div className="rounded-lg p-4 md:p-6 min-h-[80px] md:h-24 flex items-center justify-between" style={{ backgroundColor: '#01242A' }}>
              <p className="text-gray-400 text-sm md:text-lg whitespace-nowrap">Pending reviews</p>
              <p className="text-2xl md:text-3xl font-bold text-white ml-2">4</p>
            </div>
          </div>

          {/* Right Column: Risk Donut Chart */}
          <div className="flex-1 lg:flex-none lg:w-64 rounded-lg p-4 md:p-6 flex flex-col items-center justify-center" style={{ backgroundColor: '#01242A' }}>
            <div className="relative w-40 h-40 md:w-48 md:h-48 mb-4">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Low risk - 66% */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#2dd4bf"
                  strokeWidth="8"
                  strokeDasharray={`${66 * 2.513} ${100 * 2.513}`}
                  strokeDashoffset="0"
                />
                {/* Medium risk - 21% */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#14b8a6"
                  strokeWidth="8"
                  strokeDasharray={`${21 * 2.513} ${100 * 2.513}`}
                  strokeDashoffset={`-${66 * 2.513}`}
                />
                {/* High risk - 13% */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#0d9488"
                  strokeWidth="8"
                  strokeDasharray={`${13 * 2.513} ${100 * 2.513}`}
                  strokeDashoffset={`-${87 * 2.513}`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Risk</span>
              </div>
            </div>
            <div className="space-y-2 md:space-y-3 w-full">
              <div className="flex items-center justify-between text-xs md:text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-teal-400"></div>
                  <span className="text-gray-300">Low</span>
                </div>
                <span className="text-white font-medium">66%</span>
              </div>
              <div className="flex items-center justify-between text-xs md:text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-teal-600"></div>
                  <span className="text-gray-300">Medium</span>
                </div>
                <span className="text-white font-medium">21%</span>
              </div>
              <div className="flex items-center justify-between text-xs md:text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-teal-700"></div>
                  <span className="text-gray-300">High</span>
                </div>
                <span className="text-white font-medium">13%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Cases Table */}
        <div className="rounded-lg p-4 md:p-6" style={{ backgroundColor: '#01242A' }}>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Recent Cases</h2>
          <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
            <table className="w-full min-w-[600px] md:min-w-0">
              <thead>
                <tr className="border-b" style={{ borderColor: '#1E3A3F' }}>
                  <th className="text-left py-2 md:py-3 px-2 md:px-4 text-gray-400 font-medium text-xs md:text-sm">Case ID</th>
                  <th className="text-left py-2 md:py-3 px-2 md:px-4 text-gray-400 font-medium text-xs md:text-sm">Applicant</th>
                  <th className="text-left py-2 md:py-3 px-2 md:px-4 text-gray-400 font-medium text-xs md:text-sm">Submitted</th>
                  <th className="text-left py-2 md:py-3 px-2 md:px-4 text-gray-400 font-medium text-xs md:text-sm">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentCases.map((caseItem, index) => (
                  <tr 
                    key={index} 
                    onClick={() => onCaseClick && onCaseClick(caseItem.id)}
                    className="border-b last:border-0 cursor-pointer active:opacity-70 md:hover:opacity-80 transition-opacity touch-manipulation" 
                    style={{ borderColor: '#1E3A3F', backgroundColor: '#01242A' }}
                  >
                    <td className="py-3 md:py-4 px-2 md:px-4 text-white text-sm md:text-base">{caseItem.id}</td>
                    <td className="py-3 md:py-4 px-2 md:px-4 text-white text-sm md:text-base">{caseItem.applicant}</td>
                    <td className="py-3 md:py-4 px-2 md:px-4 text-white text-sm md:text-base">{caseItem.submitted}</td>
                    <td className="py-3 md:py-4 px-2 md:px-4">
                      <span className="px-2 md:px-3 py-1 rounded-full text-xs font-medium text-white" style={getStatusBadgeStyle()}>
                        {caseItem.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Mobile Bottom Navigation */}
      <MobileBottomNav activeItem="Dashboard" onNavigate={onNavigate} />
    </div>
  )
}

export default Dashboard


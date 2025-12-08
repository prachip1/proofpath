import { useState, useEffect } from 'react'
import Sidebar from '../Sidebar'
import MobileBottomNav from '../MobileBottomNav'
import MobileHeader from '../MobileHeader'
import DesktopHeader from '../DesktopHeader'

function Reports({ onNavigate, onCaseClick, onLogout }) {
  // Default cases (fallback)
  const defaultCases = [
    { id: '#123456', applicant: 'Eleanor Smith', submitted: 'Oct 23, 2023', status: 'Completed' },
    { id: '#123455', applicant: 'Benjamin Brown', submitted: 'Oct 20, 2023', status: 'In review' },
    { id: '#123454', applicant: 'Mohammed Ahmed', submitted: 'Oct 19, 2023', status: 'Pending' },
    { id: '#123453', applicant: 'Sophie Wilson', submitted: 'Oct 18, 2023', status: 'Completed' },
  ]

  const [completedCases, setCompletedCases] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  // Load cases from localStorage
  const loadCases = () => {
    try {
      const savedCases = JSON.parse(localStorage.getItem('cases') || '[]')
      if (savedCases.length > 0) {
        // Merge saved cases with default cases, prioritizing saved cases
        // Remove duplicates based on ID and combine
        const allCases = [...savedCases, ...defaultCases]
        const uniqueCases = allCases.filter((caseItem, index, self) =>
          index === self.findIndex((c) => c.id === caseItem.id)
        )
        // Filter for only completed cases
        const completed = uniqueCases.filter(caseItem => caseItem.status === 'Completed')
        setCompletedCases(completed)
      } else {
        // Filter for only completed cases from default cases
        const completed = defaultCases.filter(caseItem => caseItem.status === 'Completed')
        setCompletedCases(completed)
      }
    } catch (error) {
      console.error('Error loading cases from localStorage:', error)
      // Filter for only completed cases from default cases
      const completed = defaultCases.filter(caseItem => caseItem.status === 'Completed')
      setCompletedCases(completed)
    }
  }

  // Load cases on component mount
  useEffect(() => {
    loadCases()
  }, [])

  // Listen for storage changes (for multi-tab support)
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'cases') {
        loadCases()
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  const getStatusBadgeStyle = () => {
    return { backgroundColor: '#003935', color: 'white' }
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  // Filter cases based on search query
  const filteredCases = searchQuery.trim() 
    ? completedCases.filter(caseItem => 
        caseItem.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        caseItem.applicant.toLowerCase().includes(searchQuery.toLowerCase()) ||
        caseItem.status.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : completedCases

  return (
    <div className="flex min-h-screen overflow-x-hidden w-full" style={{ background: 'linear-gradient(to right, #01151C 0%, #002025 50%, #01151C 100%)' }}>
      <Sidebar activeItem="Reports" onNavigate={onNavigate} onLogout={onLogout} />
      
      {/* Desktop Header */}
      <DesktopHeader onLogout={onLogout} onSearch={handleSearch} />
      
      {/* Mobile Header */}
      <MobileHeader onLogout={onLogout} onSearch={handleSearch} />
      
      {/* Main Content Area */}
      <div className="flex-1 p-4 md:p-6 lg:p-8 mt-16 md:mt-16 md:ml-64 pb-20 md:pb-8">
        <div className="mb-4 md:mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">Reports</h1>
          <p className="text-sm md:text-base lg:text-xl text-gray-300 md:text-white">Completed Cases</p>
        </div>

        {/* Completed Cases - Mobile Card View / Desktop Table View */}
        <div className="rounded-lg p-4 md:p-6" style={{ backgroundColor: '#01242A' }}>
          {filteredCases.length === 0 ? (
            <p className="text-white text-center py-8">
              {searchQuery.trim() ? 'No completed cases found matching your search.' : 'No completed cases found.'}
            </p>
          ) : (
            <>
              {/* Mobile Card View */}
              <div className="md:hidden space-y-3">
                {filteredCases.map((caseItem, index) => (
                  <div
                    key={index}
                    onClick={() => onCaseClick && onCaseClick(caseItem.id)}
                    className="border rounded-lg p-4 cursor-pointer active:opacity-70 transition-opacity touch-manipulation"
                    style={{ borderColor: '#1E3A3F', backgroundColor: '#01242A' }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-400 mb-1">Case ID</p>
                        <p className="text-white font-medium text-sm truncate">{caseItem.id}</p>
                      </div>
                      <span className="px-2 py-1 rounded-full text-xs font-medium text-white ml-2 flex-shrink-0" style={getStatusBadgeStyle()}>
                        {caseItem.status}
                      </span>
                    </div>
                    <div className="mb-2">
                      <p className="text-xs text-gray-400 mb-1">Applicant</p>
                      <p className="text-white text-sm">{caseItem.applicant}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Submitted</p>
                      <p className="text-white text-sm">{caseItem.submitted}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b" style={{ borderColor: '#1E3A3F' }}>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm lg:text-base">Case ID</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm lg:text-base">Applicant</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm lg:text-base">Submitted</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm lg:text-base">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCases.map((caseItem, index) => (
                      <tr 
                        key={index} 
                        onClick={() => onCaseClick && onCaseClick(caseItem.id)}
                        className="border-b last:border-0 cursor-pointer hover:opacity-80 transition-opacity" 
                        style={{ borderColor: '#1E3A3F', backgroundColor: '#01242A' }}
                      >
                        <td className="py-4 px-4 text-white text-sm lg:text-base">{caseItem.id}</td>
                        <td className="py-4 px-4 text-white text-sm lg:text-base">{caseItem.applicant}</td>
                        <td className="py-4 px-4 text-white text-sm lg:text-base">{caseItem.submitted}</td>
                        <td className="py-4 px-4">
                          <span className="px-3 py-1 rounded-full text-xs font-medium text-white" style={getStatusBadgeStyle()}>
                            {caseItem.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
      
      {/* Mobile Bottom Navigation */}
      <MobileBottomNav activeItem="Reports" onNavigate={onNavigate} />
    </div>
  )
}

export default Reports


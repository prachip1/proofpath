import { useState } from 'react'
import SignIn from './components/auth/SignIn'
import Dashboard from './components/broker/dashboard'
import Cases from './components/Cases'
import CaseDetail from './components/Cases/CaseDetail'
import NewCase from './components/Cases/NewCase'
import Reports from './components/broker/Reports'
import Compliance from './components/broker/Compliance'
import Settings from './components/broker/Settings'
import Customer from './components/Customer'
import AllImages from './components/allimages'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userRole, setUserRole] = useState(null)
  const [currentPage, setCurrentPage] = useState('Dashboard')
  const [selectedCaseId, setSelectedCaseId] = useState(null)

  const handleSignIn = (role) => {
    setUserRole(role)
    setIsAuthenticated(true)
    setCurrentPage('Dashboard')
  }

  const handleNavigate = (page) => {
    setCurrentPage(page)
    setSelectedCaseId(null) // Reset case selection when navigating
  }

  const handleCaseClick = (caseId) => {
    setSelectedCaseId(caseId)
    setCurrentPage('CaseDetail')
  }

  // Broker navigation
  if (isAuthenticated && userRole === 'Broker') {
    if (currentPage === 'CaseDetail') {
      return <CaseDetail onNavigate={handleNavigate} />
    }
    
    switch (currentPage) {
      case 'Dashboard':
        return <Dashboard onNavigate={handleNavigate} onCaseClick={handleCaseClick} />
      case 'Cases':
        return <Cases onNavigate={handleNavigate} onCaseClick={handleCaseClick} />
      case 'NewCase':
        return <NewCase onNavigate={handleNavigate} />
      case 'Reports':
        return <Reports onNavigate={handleNavigate} />
      case 'Compliance':
        return <Compliance onNavigate={handleNavigate} />
      case 'Settings':
        return <Settings onNavigate={handleNavigate} />
      default:
        return <Dashboard onNavigate={handleNavigate} onCaseClick={handleCaseClick} />
    }
  }

  // Customer navigation
  if (isAuthenticated && userRole === 'Customer') {
    return <Customer />
  }

  // All Images route (accessible without authentication)
  // Access via URL: http://localhost:5173/#images or add ?page=images
  const urlParams = new URLSearchParams(window.location.search)
  const hash = window.location.hash
  if (urlParams.get('page') === 'images' || hash === '#images') {
    return <AllImages />
  }

  return <SignIn onSignIn={handleSignIn} />
}

export default App

import { useState, useEffect } from 'react'
import SignIn from './components/auth/SignIn'
import Dashboard from './components/broker/dashboard'
import Cases from './components/Cases'
import CaseDetail from './components/Cases/CaseDetail'
import NewCase from './components/Cases/NewCase'
import Reports from './components/broker/Reports'
import Analysis from './components/broker/Analysis'
import Settings from './components/broker/Settings'
import Customer from './components/Customer'
import AllImages from './components/allimages'

function App() {
  // Load state from localStorage on mount
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const saved = localStorage.getItem('isAuthenticated')
    return saved === 'true'
  })
  const [userRole, setUserRole] = useState(() => {
    return localStorage.getItem('userRole') || null
  })
  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem('currentPage') || 'Dashboard'
  })
  const [selectedCaseId, setSelectedCaseId] = useState(() => {
    return localStorage.getItem('selectedCaseId') || null
  })

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated.toString())
  }, [isAuthenticated])

  useEffect(() => {
    if (userRole) {
      localStorage.setItem('userRole', userRole)
    } else {
      localStorage.removeItem('userRole')
    }
  }, [userRole])

  useEffect(() => {
    if (currentPage) {
      localStorage.setItem('currentPage', currentPage)
    }
  }, [currentPage])

  useEffect(() => {
    if (selectedCaseId) {
      localStorage.setItem('selectedCaseId', selectedCaseId)
    } else {
      localStorage.removeItem('selectedCaseId')
    }
  }, [selectedCaseId])

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

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUserRole(null)
    setCurrentPage('Dashboard')
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('userRole')
    localStorage.removeItem('currentPage')
  }

  // Broker navigation
  if (isAuthenticated && userRole === 'Broker') {
    if (currentPage === 'CaseDetail') {
      return <CaseDetail caseId={selectedCaseId} onNavigate={handleNavigate} onLogout={handleLogout} />
    }
    
    switch (currentPage) {
      case 'Dashboard':
        return <Dashboard onNavigate={handleNavigate} onCaseClick={handleCaseClick} onLogout={handleLogout} />
      case 'Cases':
        return <Cases onNavigate={handleNavigate} onCaseClick={handleCaseClick} onLogout={handleLogout} />
      case 'NewCase':
        return <NewCase onNavigate={handleNavigate} onLogout={handleLogout} />
      case 'Reports':
        return <Reports onNavigate={handleNavigate} onCaseClick={handleCaseClick} onLogout={handleLogout} />
      case 'Analysis':
        return <Analysis onNavigate={handleNavigate} onLogout={handleLogout} />
      case 'Settings':
        return <Settings onNavigate={handleNavigate} onLogout={handleLogout} />
      default:
        return <Dashboard onNavigate={handleNavigate} onCaseClick={handleCaseClick} onLogout={handleLogout} />
    }
  }

  // Customer navigation
  if (isAuthenticated && userRole === 'Customer') {
    return <Customer onLogout={handleLogout} />
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

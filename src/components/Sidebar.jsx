import { useState, useEffect } from 'react'
import { HiChevronDown, HiChevronRight, HiHome, HiFolder, HiDocumentReport, HiChartPie, HiCog, HiPlus } from 'react-icons/hi'

function Sidebar({ activeItem = 'Dashboard', onNavigate, onLogout }) {
  const [active, setActive] = useState(activeItem)
  const [isCasesExpanded, setIsCasesExpanded] = useState(false)

  useEffect(() => {
    setActive(activeItem)
    // Auto-expand Cases menu if NewCase is active
    if (activeItem === 'NewCase') {
      setIsCasesExpanded(true)
    }
  }, [activeItem])

  const menuItems = [
    { id: 'Dashboard', label: 'Dashboard', icon: HiHome },
    { 
      id: 'Cases', 
      label: 'Cases',
      icon: HiFolder,
      submenu: [
        { id: 'NewCase', label: 'New Case', icon: HiPlus }
      ]
    },
    { id: 'Reports', label: 'Reports', icon: HiDocumentReport },
    { id: 'Analysis', label: 'Analysis', icon: HiChartPie },
    { id: 'Settings', label: 'Settings', icon: HiCog },
  ]

  const handleClick = (itemId, hasSubmenu = false) => {
    if (hasSubmenu) {
      setIsCasesExpanded(!isCasesExpanded)
      // Also navigate to Cases when expanding
      setActive(itemId)
      if (onNavigate) {
        onNavigate(itemId)
      }
    } else {
      setActive(itemId)
      if (onNavigate) {
        onNavigate(itemId)
      }
    }
  }

  const handleSubmenuClick = (itemId) => {
    setActive(itemId)
    if (onNavigate) {
      onNavigate(itemId)
    }
  }

  return (
    <>
      {/* Sidebar - Hidden on mobile, visible on desktop */}
      <div className="hidden md:flex fixed left-0 top-0 w-64 h-screen flex-col z-40" style={{ backgroundColor: '#001F24' }}>
        {/* Brand/Logo Section */}
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-white">proofpath</h1>
        </div>

      {/* Navigation Links Section */}
      <nav className="flex-1 px-4">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.id}>
              <button
                onClick={() => handleClick(item.id, !!item.submenu)}
                className={`w-full text-left px-4 py-3 mb-1 rounded transition-colors flex items-center justify-between ${
                  active === item.id
                    ? 'text-white'
                    : 'text-white hover:opacity-80'
                }`}
                style={active === item.id ? { backgroundColor: '#2A4A4E' } : {}}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </div>
                {item.submenu && (
                  <span className="ml-2">
                    {isCasesExpanded ? (
                      <HiChevronDown className="w-4 h-4" />
                    ) : (
                      <HiChevronRight className="w-4 h-4" />
                    )}
                  </span>
                )}
              </button>
              {/* Submenu */}
              {item.submenu && isCasesExpanded && (
                <div className="ml-4 mb-1">
                  {item.submenu.map((subItem) => {
                    const SubIcon = subItem.icon
                    return (
                      <button
                        key={subItem.id}
                        onClick={() => handleSubmenuClick(subItem.id)}
                        className={`w-full text-left px-4 py-2 rounded transition-colors flex items-center gap-3 ${
                          active === subItem.id
                            ? 'text-white'
                            : 'text-gray-300 hover:text-white'
                        }`}
                        style={active === subItem.id ? { backgroundColor: '#2A4A4E' } : {}}
                      >
                        <SubIcon className="w-4 h-4" />
                        {subItem.label}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </nav>

        {/* User Profile Section */}
        <div className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-white font-semibold text-lg">
              M
            </div>
            <div>
              <p className="text-white font-medium">Mendonce</p>
              <p className="text-gray-400 text-xs mt-1">mendonce@proofpathai.co.uk</p>
              <button 
                onClick={onLogout}
                className="text-gray-400 hover:text-gray-300 text-sm"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Sidebar


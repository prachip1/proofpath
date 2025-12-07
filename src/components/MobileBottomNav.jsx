import { HiHome, HiFolder, HiDocumentReport, HiShieldCheck, HiCog, HiPlus } from 'react-icons/hi'

function MobileBottomNav({ activeItem, onNavigate }) {
  const navItems = [
    { id: 'Dashboard', icon: HiHome, label: 'Dashboard' },
    { id: 'Cases', icon: HiFolder, label: 'Cases' },
    { id: 'Reports', icon: HiDocumentReport, label: 'Reports' },
    { id: 'Compliance', icon: HiShieldCheck, label: 'Compliance' },
    { id: 'Settings', icon: HiCog, label: 'Settings' },
  ]

  const handleClick = (itemId) => {
    if (onNavigate) {
      onNavigate(itemId)
    }
  }

  // Show New Case button if we're on Cases or NewCase page
  const showNewCase = activeItem === 'Cases' || activeItem === 'NewCase'

  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50" style={{ backgroundColor: '#001F24', borderTop: '1px solid #1E3A3F' }}>
        <div className="flex items-center justify-around px-2 py-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeItem === item.id || (item.id === 'Cases' && activeItem === 'NewCase')
            
            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="flex flex-col items-center justify-center px-2 py-2 rounded-lg transition-colors min-w-0 flex-1"
                aria-label={item.label}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                <span className={`text-xs mt-1 truncate w-full text-center ${isActive ? 'text-white font-medium' : 'text-gray-400'}`}>
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
      
      {/* Floating New Case Button */}
      {showNewCase && (
        <button
          onClick={() => handleClick('NewCase')}
          className="md:hidden fixed bottom-20 right-4 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors"
          style={{ backgroundColor: '#10b981' }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#059669'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#10b981'}
          aria-label="New Case"
        >
          <HiPlus className="w-6 h-6 text-white" />
        </button>
      )}
    </>
  )
}

export default MobileBottomNav


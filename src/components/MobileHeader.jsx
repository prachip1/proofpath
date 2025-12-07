import { HiChevronDown } from 'react-icons/hi'
import { useState } from 'react'

function MobileHeader({ onLogout }) {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div className="md:hidden fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-4 z-30 shadow-md" style={{ backgroundColor: '#001F24' }}>
      <div className="flex-1">
        <h1 className="text-lg font-semibold text-white">proofpath</h1>
      </div>
      
      {/* User Account Section */}
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center gap-2 p-1 rounded-lg hover:opacity-80 transition-opacity"
          aria-label="User menu"
        >
          <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white font-semibold text-sm">
            S
          </div>
          <HiChevronDown className="w-4 h-4 text-gray-400" />
        </button>
        
        {/* Dropdown Menu */}
        {showDropdown && (
          <>
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setShowDropdown(false)}
            />
            <div className="absolute right-0 top-12 mt-2 w-48 rounded-lg shadow-lg z-50" style={{ backgroundColor: '#01242A', border: '1px solid #1E3A3F' }}>
              <div className="p-3 border-b" style={{ borderColor: '#1E3A3F' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white font-semibold">
                    S
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Sophie</p>
                    <p className="text-gray-400 text-xs">sophie@proofpath.com</p>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <button
                  onClick={() => {
                    if (onLogout) {
                      onLogout()
                    }
                    setShowDropdown(false)
                  }}
                  className="w-full text-left px-3 py-2 rounded text-gray-300 hover:text-white hover:bg-gray-700 transition-colors text-sm"
                >
                  Logout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default MobileHeader


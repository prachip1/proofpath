import { HiChevronDown, HiSearch, HiX } from 'react-icons/hi'
import { useState } from 'react'

function MobileHeader({ onLogout, onSearch }) {
  const [showDropdown, setShowDropdown] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearch, setShowSearch] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim())
    }
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    // Optional: trigger search on input change for real-time search
    if (onSearch) {
      onSearch(e.target.value.trim())
    }
  }

  return (
    <>
      {/* Main Header Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-4 z-30 shadow-md" style={{ backgroundColor: '#001F24' }}>
        <div className="flex-1">
          <h1 className="text-lg font-semibold text-white">proofpath</h1>
        </div>
        
        {/* Search Icon */}
        <button
          onClick={() => setShowSearch(!showSearch)}
          className="p-2 mr-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Search"
        >
          <HiSearch className="w-5 h-5" />
        </button>
        
        {/* User Account Section */}
        <div className="relative z-50">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-2 p-1 rounded-lg hover:opacity-80 transition-opacity"
            aria-label="User menu"
          >
            <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white font-semibold text-sm">
              M
            </div>
            <HiChevronDown className="w-4 h-4 text-gray-400" />
          </button>
          
          {/* Dropdown Menu */}
          {showDropdown && (
            <>
              <div 
                className="fixed inset-0 z-[45]" 
                onClick={() => setShowDropdown(false)}
              />
              <div className="fixed right-4 top-20 w-48 rounded-lg shadow-lg z-[100]" style={{ backgroundColor: '#01242A', border: '1px solid #1E3A3F' }}>
                <div className="p-3 border-b" style={{ borderColor: '#1E3A3F' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white font-semibold">
                      M
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Mendonce</p>
                      <p className="text-gray-400 text-xs">mendonce@proofpathai.co.uk</p>
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

      {/* Search Bar - Toggle (appears below header) */}
      {showSearch && (
        <div className="md:hidden fixed top-16 left-0 right-0 px-4 py-3 z-30 border-b" style={{ backgroundColor: '#001F24', borderColor: '#1E3A3F' }}>
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search cases..."
                className="w-full pl-9 pr-10 py-2 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                style={{ backgroundColor: '#01242A', border: '1px solid #1E3A3F' }}
                autoFocus
              />
              <button
                type="button"
                onClick={() => {
                  setShowSearch(false)
                  setSearchQuery('')
                  if (onSearch) {
                    onSearch('')
                  }
                }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <HiX className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default MobileHeader


import { useState } from 'react'
import { HiSearch, HiChevronDown } from 'react-icons/hi'

function DesktopHeader({ onLogout, onSearch }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)

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
    <div className="hidden md:flex fixed top-0 left-64 right-0 h-16 items-center justify-between px-6 z-30 shadow-md" style={{ backgroundColor: '#001F24', borderBottom: '1px solid #1E3A3F' }}>
      {/* Search Bar */}
      <div className="flex-1 max-w-2xl">
        <form onSubmit={handleSearch} className="relative">
          <div className="relative">
            <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search cases..."
              className="w-full pl-10 pr-4 py-2 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              style={{ backgroundColor: '#01242A', border: '1px solid #1E3A3F' }}
            />
          </div>
        </form>
      </div>

      {/* User Account Section */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:opacity-80 transition-opacity"
            aria-label="User menu"
          >
            <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white font-semibold text-sm">
              M
            </div>
            <span className="text-white font-medium text-sm">John Doe</span>
            <HiChevronDown className="w-4 h-4 text-gray-400" />
          </button>
          
          {/* Dropdown Menu */}
          {showDropdown && (
            <>
              <div 
                className="fixed inset-0 z-[45]" 
                onClick={() => setShowDropdown(false)}
              />
              <div className="absolute right-0 top-full mt-2 w-48 rounded-lg shadow-lg z-[100]" style={{ backgroundColor: '#01242A', border: '1px solid #1E3A3F' }}>
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
                    className="w-full text-left px-3 py-2 rounded text-gray-300 hover:text-white transition-colors text-sm"
                    style={{ backgroundColor: 'transparent' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#1E3A3F'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default DesktopHeader


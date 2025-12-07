import { useState } from 'react'

function CustomerSidebar({ activeItem = 'Dashboard' }) {
  const [active, setActive] = useState(activeItem)

  const menuItems = [
    // Menu items will be decided later - placeholder for now
    { id: 'Dashboard', label: 'Dashboard' },
  ]

  const handleClick = (itemId) => {
    setActive(itemId)
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
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`w-full text-left px-4 py-3 mb-1 rounded transition-colors ${
                active === item.id
                  ? 'text-white'
                  : 'text-white hover:opacity-80'
              }`}
              style={active === item.id ? { backgroundColor: '#2A4A4E' } : {}}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* User Profile Section */}
        <div className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-white font-semibold text-lg">
              U
            </div>
            <div>
              <p className="text-white font-medium">User</p>
              <button className="text-gray-400 hover:text-gray-300 text-sm">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomerSidebar


import { HiHome } from 'react-icons/hi'

function CustomerMobileBottomNav({ activeItem, onNavigate }) {
  const navItems = [
    { id: 'Dashboard', icon: HiHome, label: 'Dashboard' },
  ]

  const handleClick = (itemId) => {
    if (onNavigate) {
      onNavigate(itemId)
    }
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50" style={{ backgroundColor: '#001F24', borderTop: '1px solid #1E3A3F' }}>
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeItem === item.id
          
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
  )
}

export default CustomerMobileBottomNav


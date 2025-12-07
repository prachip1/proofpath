import Sidebar from '../Sidebar'
import MobileBottomNav from '../MobileBottomNav'
import MobileHeader from '../MobileHeader'

function Compliance({ onNavigate, onLogout }) {
  return (
    <div className="flex min-h-screen" style={{ background: 'linear-gradient(to right, #152E32 0%, #1A3A3F 50%, #152E32 100%)' }}>
      <Sidebar activeItem="Compliance" onNavigate={onNavigate} onLogout={onLogout} />
      
      {/* Mobile Header */}
      <MobileHeader onLogout={onLogout} />
      
      {/* Main Content Area */}
      <div className="flex-1 p-4 md:p-8 mt-16 md:mt-0 md:ml-64 pb-20 md:pb-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Compliance</h1>
          <p className="text-gray-400">Compliance management and monitoring</p>
        </div>

        <div className="rounded-lg p-6" style={{ backgroundColor: '#152E32' }}>
          <p className="text-white">Compliance content will be displayed here.</p>
        </div>
      </div>
      
      {/* Mobile Bottom Navigation */}
      <MobileBottomNav activeItem="Compliance" onNavigate={onNavigate} />
    </div>
  )
}

export default Compliance


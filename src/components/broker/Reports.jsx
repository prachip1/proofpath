import Sidebar from '../Sidebar'
import MobileBottomNav from '../MobileBottomNav'
import MobileHeader from '../MobileHeader'

function Reports({ onNavigate, onLogout }) {
  return (
    <div className="flex min-h-screen overflow-x-hidden w-full" style={{ background: 'linear-gradient(to right, #01151C 0%, #002025 50%, #01151C 100%)' }}>
      <Sidebar activeItem="Reports" onNavigate={onNavigate} onLogout={onLogout} />
      
      {/* Mobile Header */}
      <MobileHeader onLogout={onLogout} />
      
      {/* Main Content Area */}
      <div className="flex-1 p-4 md:p-8 mt-16 md:mt-0 md:ml-64 pb-20 md:pb-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Reports</h1>
          <p className="text-gray-400">View and manage reports</p>
        </div>

        <div className="rounded-lg p-6" style={{ backgroundColor: '#152E32' }}>
          <p className="text-white">Reports content will be displayed here.</p>
        </div>
      </div>
      
      {/* Mobile Bottom Navigation */}
      <MobileBottomNav activeItem="Reports" onNavigate={onNavigate} />
    </div>
  )
}

export default Reports


import Sidebar from '../Sidebar'

function Reports({ onNavigate }) {
  return (
    <div className="flex min-h-screen" style={{ background: 'linear-gradient(to right, #152E32 0%, #1A3A3F 50%, #152E32 100%)' }}>
      <Sidebar activeItem="Reports" onNavigate={onNavigate} />
      
      {/* Main Content Area */}
      <div className="flex-1 p-4 md:p-8 mt-16 md:mt-0 md:ml-64">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Reports</h1>
          <p className="text-gray-400">View and manage reports</p>
        </div>

        <div className="rounded-lg p-6" style={{ backgroundColor: '#152E32' }}>
          <p className="text-white">Reports content will be displayed here.</p>
        </div>
      </div>
    </div>
  )
}

export default Reports


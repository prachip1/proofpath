import Sidebar from '../Sidebar'

function Dashboard({ onNavigate, onCaseClick }) {
  const recentCases = [
    { id: '#123456', applicant: 'Eleanor Smith', submitted: 'Oct 23, 2023', status: 'Completed' },
    { id: '#123455', applicant: 'Benjamin Brown', submitted: 'Oct 20, 2023', status: 'In review' },
    { id: '#123454', applicant: 'Mohammed Ahmed', submitted: 'Oct 19, 2023', status: 'Pending' },
    { id: '#123453', applicant: 'Sophie Wilson', submitted: 'Oct 18, 2023', status: 'Completed' },
  ]

  const getStatusBadgeStyle = () => {
    return { backgroundColor: '#003935', color: 'white' }
  }

  return (
    <div className="flex min-h-screen" style={{ background: 'linear-gradient(to right, #01151C 0%, #002025 50%, #01151C 100%)' }}>
      <Sidebar activeItem="Dashboard" onNavigate={onNavigate} />
      
      {/* Main Content Area */}
      <div className="flex-1 p-4 md:p-8 mt-16 md:mt-0 md:ml-64">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Portfolio Summary</h1>
          <p className="text-gray-400">Source-of-funds verification at a glance</p>
        </div>

        {/* Summary Metrics and Chart Row */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Summary Cards */}
          <div className="flex-1 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 flex flex-col gap-4">
              <div className="rounded-lg p-6 h-40 flex flex-col justify-start items-start" style={{ backgroundColor: '#01242A' }}>
                <p className="text-gray-400 text-lg mb-1">Total cases</p>
                <p className="text-4xl md:text-5xl font-bold text-white">128</p>
              </div>
              {/* Pending Reviews Card */}
              <div className="rounded-lg p-6 flex items-start justify-start h-20 w-full" style={{ backgroundColor: '#01242A' }}>
                <div className='flex justify-between w-[20em]'>
                  <p className="text-gray-400 text-lg mb-1">Pending reviews</p>
                  <p className="text-3xl font-bold text-white">4</p>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-lg p-6 h-40 flex flex-col justify-start items-start" style={{ backgroundColor: '#01242A' }}>
              <p className="text-gray-400 text-lg mb-1">Low risk</p>
              <p className="text-4xl md:text-5xl font-bold text-white">85</p>
            </div>
            <div className="flex-1 rounded-lg p-6 h-40 flex flex-col justify-start items-start" style={{ backgroundColor: '#01242A' }}>
              <p className="text-gray-400 text-lg mb-1">Medium risk</p>
              <p className="text-4xl md:text-5xl font-bold text-white">27</p>
            </div>
            <div className="flex-1 rounded-lg p-6 h-40 flex flex-col justify-start items-start" style={{ backgroundColor: '#01242A' }}>
              <p className="text-gray-400 text-lg mb-1">High risk</p>
              <p className="text-4xl md:text-5xl font-bold text-white">16</p>
            </div>
          </div>

          {/* Risk Donut Chart */}
          <div className="w-full lg:w-64 rounded-lg p-6 flex flex-col items-center justify-center" style={{ backgroundColor: '#01242A' }}>
            <div className="relative w-48 h-48 mb-4">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Low risk - 66% */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#2dd4bf"
                  strokeWidth="8"
                  strokeDasharray={`${66 * 2.513} ${100 * 2.513}`}
                  strokeDashoffset="0"
                />
                {/* Medium risk - 21% */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#14b8a6"
                  strokeWidth="8"
                  strokeDasharray={`${21 * 2.513} ${100 * 2.513}`}
                  strokeDashoffset={`-${66 * 2.513}`}
                />
                {/* High risk - 13% */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#0d9488"
                  strokeWidth="8"
                  strokeDasharray={`${13 * 2.513} ${100 * 2.513}`}
                  strokeDashoffset={`-${87 * 2.513}`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Risk</span>
              </div>
            </div>
            <div className="space-y-3 w-full">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-teal-400"></div>
                  <span className="text-gray-300">Low</span>
                </div>
                <span className="text-white font-medium">66%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-teal-600"></div>
                  <span className="text-gray-300">Medium</span>
                </div>
                <span className="text-white font-medium">21%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-teal-700"></div>
                  <span className="text-gray-300">High</span>
                </div>
                <span className="text-white font-medium">13%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Cases Table */}
        <div className="rounded-lg p-6" style={{ backgroundColor: '#01242A' }}>
          <h2 className="text-2xl font-bold text-white mb-6">Recent Cases</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b" style={{ borderColor: '#1E3A3F' }}>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Case ID</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Applicant</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Submitted</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentCases.map((caseItem, index) => (
                  <tr 
                    key={index} 
                    onClick={() => onCaseClick && onCaseClick(caseItem.id)}
                    className="border-b last:border-0 cursor-pointer hover:opacity-80 transition-opacity" 
                    style={{ borderColor: '#1E3A3F', backgroundColor: '#01242A' }}
                  >
                    <td className="py-4 px-4 text-white">{caseItem.id}</td>
                    <td className="py-4 px-4 text-white">{caseItem.applicant}</td>
                    <td className="py-4 px-4 text-white">{caseItem.submitted}</td>
                    <td className="py-4 px-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium text-white" style={getStatusBadgeStyle()}>
                        {caseItem.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard


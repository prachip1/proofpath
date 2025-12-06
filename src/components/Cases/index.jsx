import Sidebar from '../Sidebar'

function Cases({ onNavigate, onCaseClick }) {
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
    <div className="flex min-h-screen" style={{ background: 'linear-gradient(to right, #152E32 0%, #1A3A3F 50%, #152E32 100%)' }}>
      <Sidebar activeItem="Cases" onNavigate={onNavigate} />
      
      {/* Main Content Area */}
      <div className="flex-1 p-4 md:p-8 mt-16 md:mt-0 md:ml-64">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Case Management</h1>
            <p className="text-xl text-white">Recent Cases</p>
          </div>
          <button
            onClick={() => onNavigate && onNavigate('NewCase')}
            className="px-6 py-3 rounded-md text-white font-medium transition-colors"
            style={{ backgroundColor: '#10b981' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#059669'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#10b981'}
          >
            + New Case
          </button>
        </div>

        {/* Recent Cases Table */}
        <div className="rounded-lg p-6" style={{ backgroundColor: '#152E32' }}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b" style={{ borderColor: '#1E3A3F' }}>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Case ID</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Applicant</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Submitted</th>
                </tr>
              </thead>
              <tbody>
                {recentCases.map((caseItem, index) => (
                  <tr 
                    key={index} 
                    onClick={() => onCaseClick && onCaseClick(caseItem.id)}
                    className="border-b last:border-0 cursor-pointer hover:opacity-80 transition-opacity" 
                    style={{ borderColor: '#1E3A3F', backgroundColor: '#152E32' }}
                  >
                    <td className="py-4 px-4 text-white">{caseItem.id}</td>
                    <td className="py-4 px-4 text-white">{caseItem.applicant}</td>
                    <td className="py-4 px-4 text-white">
                      <div className="flex items-center gap-3">
                        <span>{caseItem.submitted}</span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium text-white" style={getStatusBadgeStyle()}>
                          {caseItem.status}
                        </span>
                      </div>
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

export default Cases


import { useState } from 'react'
import { HiUser, HiLockClosed, HiBell, HiCog, HiShieldCheck } from 'react-icons/hi'
import Sidebar from '../Sidebar'
import MobileBottomNav from '../MobileBottomNav'
import MobileHeader from '../MobileHeader'
import DesktopHeader from '../DesktopHeader'

function Settings({ onNavigate, onLogout }) {
  const [activeSection, setActiveSection] = useState('profile')
  const [formData, setFormData] = useState({
    name: 'Mendonce',
    email: 'mendonce@proofpathai.co.uk',
    phone: '',
    organization: 'PrimeHome Mortgages Ltd',
    role: 'Broker'
  })

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    caseUpdates: true,
    riskAlerts: true,
    weeklyReports: false,
    systemUpdates: true
  })

  const [preferences, setPreferences] = useState({
    dateFormat: 'DD/MM/YYYY',
    timezone: 'Europe/London',
    itemsPerPage: '25',
    autoSave: true
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const handlePreferenceChange = (key, value) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const handleSave = () => {
    // In a real app, this would save to backend
    alert('Settings saved successfully!')
  }

  const settingsSections = [
    { id: 'profile', label: 'Profile', icon: HiUser },
    { id: 'security', label: 'Security', icon: HiLockClosed },
    { id: 'notifications', label: 'Notifications', icon: HiBell },
    { id: 'preferences', label: 'Preferences', icon: HiCog },
    { id: 'privacy', label: 'Privacy & Data', icon: HiShieldCheck }
  ]

  return (
    <div className="flex min-h-screen overflow-x-hidden w-full" style={{ background: 'linear-gradient(to right, #01151C 0%, #002025 50%, #01151C 100%)' }}>
      <Sidebar activeItem="Settings" onNavigate={onNavigate} onLogout={onLogout} />
      
      {/* Desktop Header */}
      <DesktopHeader onLogout={onLogout} />
      
      {/* Mobile Header */}
      <MobileHeader onLogout={onLogout} />
      
      {/* Main Content Area */}
      <div className="flex-1 p-4 md:p-6 lg:p-8 mt-16 md:mt-16 md:ml-64 pb-20 md:pb-8">
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">Settings</h1>
          <p className="text-sm md:text-base text-gray-400">Manage your account settings and preferences</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Settings Navigation - Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="rounded-lg p-4" style={{ backgroundColor: '#01242A' }}>
              <nav className="space-y-2">
                {settingsSections.map((section) => {
                  const Icon = section.icon
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-4 py-3 rounded transition-colors flex items-center gap-3 ${
                        activeSection === section.id
                          ? 'text-white'
                          : 'text-gray-400 hover:text-white'
                      }`}
                      style={activeSection === section.id ? { backgroundColor: '#1E3A3F' } : {}}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm md:text-base">{section.label}</span>
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Settings Content */}
          <div className="flex-1">
            <div className="rounded-lg p-4 md:p-6" style={{ backgroundColor: '#01242A' }}>
              {/* Profile Section */}
              {activeSection === 'profile' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Profile Information</h2>
                    <p className="text-gray-400 text-sm">Update your personal information</p>
                  </div>

                  {/* Profile Picture */}
                  <div className="flex items-center gap-4 pb-6 border-b" style={{ borderColor: '#1E3A3F' }}>
                    <div className="w-20 h-20 rounded-full bg-gray-600 flex items-center justify-center text-white font-semibold text-2xl">
                      {formData.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <button className="px-4 py-2 rounded-md text-white text-sm font-medium transition-colors" style={{ backgroundColor: '#1E3A3F' }}>
                        Change Photo
                      </button>
                      <p className="text-gray-400 text-xs mt-1">JPG, PNG or GIF. Max size 2MB</p>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        style={{ borderColor: '#1E3A3F' }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        style={{ borderColor: '#1E3A3F' }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+44 20 1234 5678"
                        className="w-full bg-transparent border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                        style={{ borderColor: '#1E3A3F' }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Organization</label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        style={{ borderColor: '#1E3A3F' }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Role</label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        style={{ borderColor: '#1E3A3F' }}
                      >
                        <option value="Broker" className="bg-gray-800">Broker</option>
                        <option value="Agent" className="bg-gray-800">Agent</option>
                        <option value="Admin" className="bg-gray-800">Admin</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleSave}
                      className="px-6 py-2.5 rounded-md text-white font-medium transition-colors"
                      style={{ backgroundColor: '#10b981' }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#059669'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#10b981'}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              )}

              {/* Security Section */}
              {activeSection === 'security' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Security Settings</h2>
                    <p className="text-gray-400 text-sm">Manage your password and security preferences</p>
                  </div>

                  <div className="space-y-4">
                    <div className="pb-4 border-b" style={{ borderColor: '#1E3A3F' }}>
                      <h3 className="text-lg font-semibold text-white mb-2">Change Password</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Current Password</label>
                          <input
                            type="password"
                            className="w-full bg-transparent border rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                            style={{ borderColor: '#1E3A3F' }}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">New Password</label>
                          <input
                            type="password"
                            className="w-full bg-transparent border rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                            style={{ borderColor: '#1E3A3F' }}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Confirm New Password</label>
                          <input
                            type="password"
                            className="w-full bg-transparent border rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                            style={{ borderColor: '#1E3A3F' }}
                          />
                        </div>
                        <button
                          className="px-6 py-2.5 rounded-md text-white font-medium transition-colors"
                          style={{ backgroundColor: '#10b981' }}
                          onMouseEnter={(e) => e.target.style.backgroundColor = '#059669'}
                          onMouseLeave={(e) => e.target.style.backgroundColor = '#10b981'}
                        >
                          Update Password
                        </button>
                      </div>
                    </div>

                    <div className="pb-4 border-b" style={{ borderColor: '#1E3A3F' }}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">Two-Factor Authentication</h3>
                          <p className="text-gray-400 text-sm">Add an extra layer of security to your account</p>
                        </div>
                        <button
                          className="px-4 py-2 rounded-md text-white text-sm font-medium transition-colors"
                          style={{ backgroundColor: '#1E3A3F' }}
                        >
                          Enable
                        </button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Active Sessions</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#001F24' }}>
                          <div>
                            <p className="text-white text-sm font-medium">Current Session</p>
                            <p className="text-gray-400 text-xs">Windows • Chrome • London, UK</p>
                            <p className="text-gray-400 text-xs">Last active: Just now</p>
                          </div>
                          <span className="px-2 py-1 rounded text-xs font-medium text-green-400" style={{ backgroundColor: '#003935' }}>
                            Active
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#001F24' }}>
                          <div>
                            <p className="text-white text-sm font-medium">Mobile Device</p>
                            <p className="text-gray-400 text-xs">iOS • Safari • London, UK</p>
                            <p className="text-gray-400 text-xs">Last active: 2 hours ago</p>
                          </div>
                          <button className="text-red-400 text-sm hover:text-red-300">Revoke</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Section */}
              {activeSection === 'notifications' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Notification Preferences</h2>
                    <p className="text-gray-400 text-sm">Choose how you want to be notified</p>
                  </div>

                  <div className="space-y-4">
                    {Object.entries(notifications).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between p-4 rounded-lg" style={{ backgroundColor: '#001F24' }}>
                        <div>
                          <p className="text-white font-medium">
                            {key === 'emailNotifications' && 'Email Notifications'}
                            {key === 'caseUpdates' && 'Case Updates'}
                            {key === 'riskAlerts' && 'Risk Alerts'}
                            {key === 'weeklyReports' && 'Weekly Reports'}
                            {key === 'systemUpdates' && 'System Updates'}
                          </p>
                          <p className="text-gray-400 text-xs mt-1">
                            {key === 'emailNotifications' && 'Receive notifications via email'}
                            {key === 'caseUpdates' && 'Get notified when cases are updated'}
                            {key === 'riskAlerts' && 'Receive alerts for high-risk cases'}
                            {key === 'weeklyReports' && 'Get weekly summary reports'}
                            {key === 'systemUpdates' && 'Notifications about system maintenance'}
                          </p>
                        </div>
                        <button
                          onClick={() => handleNotificationChange(key)}
                          className={`relative w-12 h-6 rounded-full transition-colors ${
                            value ? 'bg-green-500' : 'bg-gray-600'
                          }`}
                        >
                          <span
                            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                              value ? 'translate-x-6' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleSave}
                      className="px-6 py-2.5 rounded-md text-white font-medium transition-colors"
                      style={{ backgroundColor: '#10b981' }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#059669'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#10b981'}
                    >
                      Save Preferences
                    </button>
                  </div>
                </div>
              )}

              {/* Preferences Section */}
              {activeSection === 'preferences' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Application Preferences</h2>
                    <p className="text-gray-400 text-sm">Customize your application experience</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Date Format</label>
                      <select
                        value={preferences.dateFormat}
                        onChange={(e) => handlePreferenceChange('dateFormat', e.target.value)}
                        className="w-full bg-transparent border rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        style={{ borderColor: '#1E3A3F' }}
                      >
                        <option value="DD/MM/YYYY" className="bg-gray-800">DD/MM/YYYY</option>
                        <option value="MM/DD/YYYY" className="bg-gray-800">MM/DD/YYYY</option>
                        <option value="YYYY-MM-DD" className="bg-gray-800">YYYY-MM-DD</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Timezone</label>
                      <select
                        value={preferences.timezone}
                        onChange={(e) => handlePreferenceChange('timezone', e.target.value)}
                        className="w-full bg-transparent border rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        style={{ borderColor: '#1E3A3F' }}
                      >
                        <option value="Europe/London" className="bg-gray-800">Europe/London (GMT)</option>
                        <option value="America/New_York" className="bg-gray-800">America/New_York (EST)</option>
                        <option value="Asia/Dubai" className="bg-gray-800">Asia/Dubai (GST)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Items Per Page</label>
                      <select
                        value={preferences.itemsPerPage}
                        onChange={(e) => handlePreferenceChange('itemsPerPage', e.target.value)}
                        className="w-full bg-transparent border rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        style={{ borderColor: '#1E3A3F' }}
                      >
                        <option value="10" className="bg-gray-800">10</option>
                        <option value="25" className="bg-gray-800">25</option>
                        <option value="50" className="bg-gray-800">50</option>
                        <option value="100" className="bg-gray-800">100</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg" style={{ backgroundColor: '#001F24' }}>
                      <div>
                        <p className="text-white font-medium">Auto-save Forms</p>
                        <p className="text-gray-400 text-xs mt-1">Automatically save form progress</p>
                      </div>
                      <button
                        onClick={() => handlePreferenceChange('autoSave', !preferences.autoSave)}
                        className={`relative w-12 h-6 rounded-full transition-colors ${
                          preferences.autoSave ? 'bg-green-500' : 'bg-gray-600'
                        }`}
                      >
                        <span
                          className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                            preferences.autoSave ? 'translate-x-6' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleSave}
                      className="px-6 py-2.5 rounded-md text-white font-medium transition-colors"
                      style={{ backgroundColor: '#10b981' }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#059669'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#10b981'}
                    >
                      Save Preferences
                    </button>
                  </div>
                </div>
              )}

              {/* Privacy & Data Section */}
              {activeSection === 'privacy' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Privacy & Data</h2>
                    <p className="text-gray-400 text-sm">Manage your data and privacy settings</p>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-lg" style={{ backgroundColor: '#001F24' }}>
                      <h3 className="text-lg font-semibold text-white mb-2">Data Export</h3>
                      <p className="text-gray-400 text-sm mb-4">Download a copy of your account data</p>
                      <button
                        className="px-4 py-2 rounded-md text-white text-sm font-medium transition-colors"
                        style={{ backgroundColor: '#1E3A3F' }}
                      >
                        Export Data
                      </button>
                    </div>

                    <div className="p-4 rounded-lg" style={{ backgroundColor: '#001F24' }}>
                      <h3 className="text-lg font-semibold text-white mb-2">Data Retention</h3>
                      <p className="text-gray-400 text-sm mb-4">Your data is retained according to compliance regulations. Cases are archived after 7 years.</p>
                    </div>

                    <div className="p-4 rounded-lg border" style={{ backgroundColor: '#001F24', borderColor: '#dc2626' }}>
                      <h3 className="text-lg font-semibold text-red-400 mb-2">Danger Zone</h3>
                      <p className="text-gray-400 text-sm mb-4">Permanently delete your account and all associated data</p>
                      <button
                        className="px-4 py-2 rounded-md text-red-400 text-sm font-medium border transition-colors hover:bg-red-900/20"
                        style={{ borderColor: '#dc2626' }}
                      >
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Bottom Navigation */}
      <MobileBottomNav activeItem="Settings" onNavigate={onNavigate} />
    </div>
  )
}

export default Settings

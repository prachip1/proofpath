import Sidebar from '../Sidebar'
import MobileBottomNav from '../MobileBottomNav'
import MobileHeader from '../MobileHeader'
import DesktopHeader from '../DesktopHeader'

function Analysis({ onNavigate, onLogout }) {
  return (
    <div className="flex min-h-screen overflow-x-hidden w-full" style={{ background: 'linear-gradient(to right, #01151C 0%, #002025 50%, #01151C 100%)' }}>
      <Sidebar activeItem="Analysis" onNavigate={onNavigate} onLogout={onLogout} />
      
      {/* Desktop Header */}
      <DesktopHeader onLogout={onLogout} />
      
      {/* Mobile Header */}
      <MobileHeader onLogout={onLogout} />
      
      {/* Main Content Area */}
      <div className="flex-1 p-4 md:p-8 mt-16 md:mt-16 md:ml-64 pb-20 md:pb-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Automated Proof Narrative</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Narrative Text Section */}
          <div className="flex-1 space-y-6">
            <div className="rounded-lg p-6" style={{ backgroundColor: '#152E32' }}>
              <p className="text-white text-base leading-relaxed mb-4">
                Between Jan 2023 and Oct 2025, the applicant received consistent monthly salary payments (£3,000-£3,200) from "DesignCo Ltd". £40,000 of these earnings were retained as savings, evidenced by regular transfers to a linked savings account ending 8421.
              </p>
              <p className="text-white text-base leading-relaxed mb-4">
                On 2 Sept 2025, a £15,000 transfer was received from "Mr and Mrs Smith" (parents). This is supported by a signed Gift Letter and identification of the senders.
              </p>
              <p className="text-white text-base leading-relaxed mb-4">
                A £5,000 transfer on 10 Oct 2025 originated from a verified Coinbase account linked to the applicant. The crypto sale is supported by exchange statements showing GBP conversion through a UK-regulated platform.
              </p>
              <p className="text-white text-base leading-relaxed">
                The combined £60,000 deposit therefore comprises employment savings, a documented family gift, and regulated crypto proceeds. All funds were received via UK-based accounts in the applicant's name or immediate family, satisfying FCA CDD requirements under MLR 2017 Regs 28-33.
              </p>
            </div>
          </div>

          {/* Residual Risk Indicator */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="rounded-lg p-6" style={{ backgroundColor: '#152E32' }}>
              <h2 className="text-xl font-semibold text-white mb-6">Residual Risk</h2>
              <div className="flex flex-col items-center">
                {/* Semi-circular Gauge */}
                <svg width="280" height="160" viewBox="0 0 280 160" className="mb-4">
                  {/* Center at bottom: (140, 140), Radius: 100 */}
                  {/* Calculate points: x = 140 + 100*cos(angle), y = 140 - 100*sin(angle) */}
                  
                  {/* Green segment (low risk) - left third: 180° to 120° */}
                  <path
                    d="M 40 140 A 100 100 0 0 1 90 53.4"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="20"
                    strokeLinecap="round"
                  />
                  
                  {/* Yellow segment (medium risk) - middle third: 120° to 60° */}
                  <path
                    d="M 90 53.4 A 100 100 0 0 1 190 53.4"
                    fill="none"
                    stroke="#eab308"
                    strokeWidth="20"
                    strokeLinecap="round"
                  />
                  
                  {/* Orange segment (high risk) - right third: 60° to 0° */}
                  <path
                    d="M 190 53.4 A 100 100 0 0 1 240 140"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="20"
                    strokeLinecap="round"
                  />
                  
                  {/* Needle - from center bottom pointing upward into yellow segment */}
                  {/* Points to 90° (straight up) which is in the yellow segment */}
                  <line
                    x1="140"
                    y1="140"
                    x2="140"
                    y2="40"
                    stroke="#ffffff"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  
                  {/* Center pivot circle */}
                  <circle cx="140" cy="140" r="5" fill="#ffffff" />
                </svg>
                {/* Risk Level Text */}
                <p className="text-4xl font-bold text-white">MEDIUM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Bottom Navigation */}
      <MobileBottomNav activeItem="Analysis" onNavigate={onNavigate} />
    </div>
  )
}

export default Analysis


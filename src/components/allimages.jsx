import propSignIn1 from '../assets/prop-signin1.jpg'
import propBrokerPortfolioSummary from '../assets/prop-broker-portfolio-summary.jpg'

function AllImages() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">All Images</h1>
      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold mb-2">Sign In Page Reference</h2>
          <img 
            src={propSignIn1} 
            alt="Sign In Page Reference" 
            className="max-w-full h-auto rounded-lg border border-gray-300"
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Broker Portfolio Summary Reference</h2>
          <img 
            src={propBrokerPortfolioSummary} 
            alt="Broker Portfolio Summary Reference" 
            className="max-w-full h-auto rounded-lg border border-gray-300"
          />
        </div>
      </div>
    </div>
  )
}

export default AllImages

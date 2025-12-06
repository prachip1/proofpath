// This component displays reference images from the gitignored 'imagess' folder
// Since these files are gitignored, they won't be available in production builds
// This component will show a message in production that images are only available locally

function AllImages() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">All Images</h1>
      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold mb-2">Sign In Page Reference</h2>
          <p className="text-gray-500">
            Reference images are stored in the gitignored 'imagess' folder and are only available in local development.
            To view these images, ensure the files exist in <code className="bg-gray-100 px-2 py-1 rounded">src/assets/imagess/</code>
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Broker Portfolio Summary Reference</h2>
          <p className="text-gray-500">
            Reference images are stored in the gitignored 'imagess' folder and are only available in local development.
            To view these images, ensure the files exist in <code className="bg-gray-100 px-2 py-1 rounded">src/assets/imagess/</code>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AllImages

export default function RootLoading() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar skeleton */}
      <div className="bg-white border-b border-gray-200 h-16 w-full animate-pulse">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="h-8 w-40 bg-gray-200 rounded" />
          <div className="hidden md:flex gap-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-4 w-24 bg-gray-200 rounded" />
            ))}
          </div>
          <div className="h-10 w-32 bg-blue-200 rounded-lg" />
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="bg-blue-700 py-16 px-4 animate-pulse">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="h-10 w-3/4 bg-blue-600 rounded mx-auto" />
          <div className="h-6 w-1/2 bg-blue-600 rounded mx-auto" />
          <div className="flex gap-4 justify-center mt-6">
            <div className="h-12 w-36 bg-white/20 rounded-lg" />
            <div className="h-12 w-36 bg-white/20 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-12 w-full animate-pulse">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 space-y-3">
              <div className="h-6 w-3/4 bg-gray-200 rounded" />
              <div className="h-4 w-full bg-gray-100 rounded" />
              <div className="h-4 w-5/6 bg-gray-100 rounded" />
              <div className="h-10 w-full bg-gray-200 rounded-lg mt-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

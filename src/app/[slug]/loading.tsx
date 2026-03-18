export default function SlugPageLoading() {
  return (
    <div className="min-h-screen bg-gray-50 animate-pulse">
      {/* Breadcrumb skeleton */}
      <div className="bg-white border-b border-gray-200 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <div className="h-4 w-16 bg-gray-200 rounded" />
          <div className="h-4 w-4 bg-gray-200 rounded" />
          <div className="h-4 w-24 bg-gray-200 rounded" />
          <div className="h-4 w-4 bg-gray-200 rounded" />
          <div className="h-4 w-32 bg-gray-200 rounded" />
        </div>
      </div>

      {/* PageHeader skeleton */}
      <div className="bg-blue-700 py-14 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="h-9 w-2/3 bg-blue-600 rounded mx-auto" />
          <div className="h-5 w-1/2 bg-blue-600 rounded mx-auto" />
          <div className="h-5 w-2/5 bg-blue-600 rounded mx-auto" />
          <div className="flex gap-4 justify-center pt-4">
            <div className="h-12 w-40 bg-white/20 rounded-lg" />
            <div className="h-12 w-40 bg-white/20 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Trust badges skeleton */}
      <div className="bg-white border-b border-gray-100 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-6 w-6 bg-gray-200 rounded-full" />
              <div className="h-4 w-28 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* Main content skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Section heading */}
            <div className="space-y-3">
              <div className="h-7 w-1/2 bg-gray-200 rounded" />
              <div className="h-4 w-full bg-gray-100 rounded" />
              <div className="h-4 w-5/6 bg-gray-100 rounded" />
            </div>

            {/* Repair cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-gray-200 rounded-lg" />
                    <div className="h-5 w-3/4 bg-gray-200 rounded" />
                  </div>
                  <div className="h-4 w-full bg-gray-100 rounded" />
                  <div className="h-4 w-4/5 bg-gray-100 rounded" />
                  <div className="flex justify-between items-center pt-2">
                    <div className="h-5 w-20 bg-gray-200 rounded" />
                    <div className="h-9 w-28 bg-blue-200 rounded-lg" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: sidebar */}
          <div className="space-y-6">
            {/* Contact card */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
              <div className="h-6 w-3/4 bg-gray-200 rounded" />
              <div className="h-4 w-full bg-gray-100 rounded" />
              <div className="h-12 w-full bg-blue-200 rounded-lg" />
              <div className="h-12 w-full bg-gray-200 rounded-lg" />
            </div>

            {/* Info card */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-3">
              <div className="h-5 w-2/3 bg-gray-200 rounded" />
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-5 w-5 bg-gray-200 rounded-full flex-shrink-0" />
                  <div className="h-4 w-full bg-gray-100 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

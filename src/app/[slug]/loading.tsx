// Minimal loading state — avoids animate-pulse on full-screen which
// adds unnecessary paint work before content is ready.
export default function SlugPageLoading() {
  return <div className="min-h-screen bg-white" />
}

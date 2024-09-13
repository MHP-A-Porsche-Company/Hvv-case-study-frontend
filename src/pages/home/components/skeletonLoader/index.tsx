const SkeletonLoader = () => {
  return (
    <div className="p-14 space-y-10">
      <div className="space-y-4" style={{marginTop: "18px"}}>
        <div className="h-10 bg-gray-900 rounded w-3/4 animate-pulse"/>
        <div className="h-6 bg-gray-900 rounded w-1/2 animate-pulse"/>
      </div>
      <div className="space-y-3">
        <div className="h-3 bg-gray-900 rounded w-1/4 animate-pulse"/>
        <div className="h-1 bg-gray-900 rounded w-4/4 animate-pulse"/>
      </div>
      <div className="space-y-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-4 bg-gray-900 rounded animate-pulse"/>
        ))}
      </div>
      <div className="space-y-3">
        <div className="h-3 bg-gray-900 rounded w-1/4 animate-pulse"/>
        <div className="h-1 bg-gray-900 rounded w-4/4 animate-pulse"/>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-16 bg-gray-900 rounded w-full animate-pulse">
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkeletonLoader;
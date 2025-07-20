import { Skeleton } from "@/components/ui/skeleton"

export default function MunicipalitiesLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100" dir="rtl" aria-busy="true" aria-label="Loading...">
      {/* Header Skeleton */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-4">
              <Skeleton className="h-8 w-24 rounded-lg mb-2" />
              <div>
                <Skeleton className="h-8 w-64 rounded mb-2" />
                <Skeleton className="h-4 w-96 rounded" />
              </div>
            </div>
            <Skeleton className="h-10 w-32 rounded-lg" />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs Skeleton */}
        <Skeleton className="h-12 w-full rounded-lg mb-6" />
        {/* Statistics Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <Skeleton className="h-4 w-24 rounded mb-2" />
                  <Skeleton className="h-8 w-16 rounded" />
                </div>
                <Skeleton className="h-12 w-12 rounded-full" />
              </div>
            </div>
          ))}
        </div>
        {/* Content Skeleton */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <Skeleton className="h-6 w-48 rounded mb-4" />
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <div>
                    <Skeleton className="h-5 w-32 rounded mb-1" />
                    <Skeleton className="h-4 w-24 rounded" />
                  </div>
                </div>
                <div className="text-right">
                  <Skeleton className="h-6 w-12 rounded mb-1" />
                  <Skeleton className="h-3 w-16 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

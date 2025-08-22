"use client";

const LoadingState = () => (
  <section className="bg-gray-50 min-h-screen">
    <div className="w-full bg-blue-50 p-3 mt-6">
      <div className="animate-pulse h-6 bg-gray-200 rounded w-1/4"></div>
    </div>
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="animate-pulse bg-gray-200 rounded-lg h-[600px]"></div>
          <div className="space-y-4">
            <div className="animate-pulse h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="animate-pulse h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="animate-pulse h-4 bg-gray-200 rounded w-full"></div>
            <div className="animate-pulse h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="animate-pulse bg-gray-200 rounded-lg h-96"></div>
        </div>
      </div>
    </div>
  </section>
);

export default LoadingState;

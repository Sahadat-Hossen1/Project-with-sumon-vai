
export default function ProductSkeletonList() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <ProductSkeleton key={i} />
      ))}
    </div>
  );
}




 function ProductSkeleton() {
  return (
    <div className="w-72 rounded-2xl border border-gray-200 p-4 shadow animate-pulse">
      
      {/* Image skeleton */}
      <div className="h-40 w-full rounded-xl bg-gray-300" />

      {/* Title */}
      <div className="mt-4 h-4 w-3/4 rounded bg-gray-300" />

      {/* Price */}
      <div className="mt-3 h-4 w-1/3 rounded bg-gray-300" />

      {/* Button */}
      <div className="mt-5 h-10 w-full rounded-xl bg-gray-300" />
    </div>
  );
}

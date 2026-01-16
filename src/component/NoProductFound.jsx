
export default function NoProductFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex max-w-sm flex-col items-center rounded-2xl border border-gray-200 bg-white p-8 text-center shadow">
        
        {/* Icon */}
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h13M7 13h10M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
            />
          </svg>
        </div>

        {/* Text */}
        <h2 className="text-lg font-semibold text-gray-800">
          No Product Found
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Your cart is empty. Add some products to continue shopping.
        </p>

        {/* Button */}
        <button className="mt-6 rounded-xl bg-black px-6 py-2 text-sm font-medium text-white transition hover:bg-gray-800">
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

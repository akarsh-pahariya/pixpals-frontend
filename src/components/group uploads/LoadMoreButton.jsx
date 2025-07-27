import { ArrowRight, ArrowUp } from 'lucide-react';

const LoadMoreButton = ({
  hasMore,
  setLoadMore,
  totalImages,
  currentImages,
}) => {
  return (
    <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <span className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">
          Showing {currentImages} out of {totalImages}
        </span>

        <button
          onClick={() => setLoadMore(true)}
          disabled={!hasMore}
          className={`py-2 px-4 rounded-lg text-white transition-all duration-300 ${
            hasMore
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/20 transform hover:scale-105'
              : 'bg-gray-700 cursor-not-allowed opacity-50'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            Load More <ArrowRight className="w-4 h-4" />
          </div>
        </button>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="py-2 px-4 rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/20 transform hover:scale-105"
      >
        <div className="flex items-center justify-center gap-2">
          <ArrowUp className="w-4 h-4" /> Back to Top
        </div>
      </button>
    </div>
  );
};

export default LoadMoreButton;

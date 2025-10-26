import React from 'react';
import { Play, Info } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <img 
        src="https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451876377_d573d32a.webp" 
        alt="Hero" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent" />
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-6xl font-bold text-white mb-4 max-w-2xl">
            Discover Your Next Favorite
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-xl">
            Explore thousands of movies and TV shows. Read reviews, create your watchlist, and never miss a great story.
          </p>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-8 py-3 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600 transition-colors">
              <Play size={20} />
              Browse Now
            </button>
            <button className="flex items-center gap-2 px-8 py-3 bg-slate-800/80 text-white rounded-lg font-semibold hover:bg-slate-700 transition-colors">
              <Info size={20} />
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

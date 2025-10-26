import React from 'react';
import { Film, Tv, Star, TrendingUp } from 'lucide-react';

interface StatsProps {
  totalContent: number;
  movieCount: number;
  tvCount: number;
  avgRating: number;
}

export const Stats: React.FC<StatsProps> = ({ totalContent, movieCount, tvCount, avgRating }) => {
  return (
    <div className="bg-slate-800 rounded-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="text-center">
        <div className="flex justify-center mb-2">
          <TrendingUp className="text-amber-500" size={32} />
        </div>
        <div className="text-3xl font-bold text-white mb-1">{totalContent}</div>
        <div className="text-slate-400 text-sm">Total Titles</div>
      </div>
      <div className="text-center">
        <div className="flex justify-center mb-2">
          <Film className="text-amber-500" size={32} />
        </div>
        <div className="text-3xl font-bold text-white mb-1">{movieCount}</div>
        <div className="text-slate-400 text-sm">Movies</div>
      </div>
      <div className="text-center">
        <div className="flex justify-center mb-2">
          <Tv className="text-amber-500" size={32} />
        </div>
        <div className="text-3xl font-bold text-white mb-1">{tvCount}</div>
        <div className="text-slate-400 text-sm">TV Shows</div>
      </div>
      <div className="text-center">
        <div className="flex justify-center mb-2">
          <Star className="text-amber-500 fill-amber-500" size={32} />
        </div>
        <div className="text-3xl font-bold text-white mb-1">{avgRating.toFixed(1)}</div>
        <div className="text-slate-400 text-sm">Avg Rating</div>
      </div>
    </div>
  );
};

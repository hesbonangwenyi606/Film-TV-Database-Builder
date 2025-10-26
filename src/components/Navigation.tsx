import React from 'react';
import { Film, Bookmark, Home } from 'lucide-react';

interface NavigationProps {
  currentView: 'browse' | 'watchlist';
  onViewChange: (view: 'browse' | 'watchlist') => void;
  watchlistCount: number;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, onViewChange, watchlistCount }) => {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Film className="text-amber-500" size={32} />
            <span className="text-2xl font-bold text-white">CineVault</span>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => onViewChange('browse')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                currentView === 'browse' ? 'bg-amber-500 text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              <Home size={20} />
              Browse
            </button>
            <button
              onClick={() => onViewChange('watchlist')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors relative ${
                currentView === 'watchlist' ? 'bg-amber-500 text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              <Bookmark size={20} />
              Watchlist
              {watchlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {watchlistCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

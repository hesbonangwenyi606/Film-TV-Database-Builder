import React from 'react';
import { Content } from '../data/contentData';
import { Star, Plus, Check } from 'lucide-react';

interface ContentCardProps {
  content: Content;
  onSelect: (content: Content) => void;
  isInWatchlist: boolean;
  onToggleWatchlist: (id: number) => void;
}

export const ContentCard: React.FC<ContentCardProps> = ({ content, onSelect, isInWatchlist, onToggleWatchlist }) => {
  return (
    <div className="group relative bg-slate-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
      <div onClick={() => onSelect(content)}>
        <img src={content.poster} alt={content.title} className="w-full h-96 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <button
        onClick={(e) => { e.stopPropagation(); onToggleWatchlist(content.id); }}
        className={`absolute top-2 right-2 p-2 rounded-full ${isInWatchlist ? 'bg-amber-500' : 'bg-slate-700/80'} hover:scale-110 transition-transform`}
      >
        {isInWatchlist ? <Check size={20} className="text-white" /> : <Plus size={20} className="text-white" />}
      </button>
      <div className="p-4">
        <h3 className="text-white font-bold text-lg mb-1 truncate">{content.title}</h3>
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-400">{content.year} • {content.type}</span>
          <div className="flex items-center gap-1">
            <Star size={16} className="text-amber-500 fill-amber-500" />
            <span className="text-white font-semibold">{content.rating}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {content.genre.slice(0, 2).map(g => (
            <span key={g} className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded">{g}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

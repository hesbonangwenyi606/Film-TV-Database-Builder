import React, { useState, useMemo } from 'react';
import { finalContent } from '../data/finalContent';
import { Content, Review } from '../data/contentData';
import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { SearchBar } from './SearchBar';
import { FilterBar } from './FilterBar';
import { ContentCard } from './ContentCard';
import { DetailModal } from './DetailModal';
import { Stats } from './Stats';

const AppLayout: React.FC = () => {
  const [content, setContent] = useState<Content[]>(finalContent);
  const [watchlist, setWatchlist] = useState<number[]>([]);
  const [currentView, setCurrentView] = useState<'browse' | 'watchlist'>('browse');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedContent, setSelectedContent] = useState<Content | null>(null);

  const filteredContent = useMemo(() => {
    let filtered = currentView === 'watchlist' 
      ? content.filter(c => watchlist.includes(c.id))
      : content;

    if (searchQuery) {
      filtered = filtered.filter(c => 
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedGenre !== 'All') {
      filtered = filtered.filter(c => c.genre.includes(selectedGenre));
    }

    if (selectedType !== 'All') {
      filtered = filtered.filter(c => c.type === selectedType);
    }

    return filtered;
  }, [content, watchlist, currentView, searchQuery, selectedGenre, selectedType]);

  const toggleWatchlist = (id: number) => {
    setWatchlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const addReview = (contentId: number, review: Omit<Review, 'id'>) => {
    setContent(prev => prev.map(c => 
      c.id === contentId 
        ? { ...c, reviews: [...c.reviews, { ...review, id: Math.random() }] }
        : c
    ));
  };

  const stats = useMemo(() => ({
    totalContent: content.length,
    movieCount: content.filter(c => c.type === 'Movie').length,
    tvCount: content.filter(c => c.type === 'TV').length,
    avgRating: content.reduce((acc, c) => acc + c.rating, 0) / content.length
  }), [content]);

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation currentView={currentView} onViewChange={setCurrentView} watchlistCount={watchlist.length} />
      
      {currentView === 'browse' && <Hero />}
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <Stats {...stats} />
        </div>

        <div className="mb-6">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        <div className="mb-8">
          <FilterBar 
            selectedGenre={selectedGenre}
            selectedType={selectedType}
            onGenreChange={setSelectedGenre}
            onTypeChange={setSelectedType}
          />
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">
          {currentView === 'watchlist' ? 'My Watchlist' : 'All Content'}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredContent.map(item => (
            <ContentCard
              key={item.id}
              content={item}
              onSelect={setSelectedContent}
              isInWatchlist={watchlist.includes(item.id)}
              onToggleWatchlist={toggleWatchlist}
            />
          ))}
        </div>

        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">No content found</p>
          </div>
        )}
      </div>

      <DetailModal content={selectedContent} onClose={() => setSelectedContent(null)} onAddReview={addReview} />

      <footer className="bg-slate-900 border-t border-slate-800 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div><h3 className="text-white font-semibold mb-3">Genres</h3>
              <div className="space-y-2 text-slate-400 text-sm">
                <div>Action</div><div>Comedy</div><div>Drama</div></div></div>
            <div><h3 className="text-white font-semibold mb-3">Popular</h3>
              <div className="space-y-2 text-slate-400 text-sm">
                <div>Trending</div><div>New Releases</div><div>Top Rated</div></div></div>
            <div><h3 className="text-white font-semibold mb-3">About</h3>
              <div className="space-y-2 text-slate-400 text-sm">
                <div>About Us</div><div>Contact</div><div>FAQ</div></div></div>
            <div><h3 className="text-white font-semibold mb-3">Legal</h3>
              <div className="space-y-2 text-slate-400 text-sm">
                <div>Terms</div><div>Privacy</div><div>Cookies</div></div></div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
            © 2024 CineVault. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;

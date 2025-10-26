import React, { useState } from 'react';
import { Content, Review } from '../data/contentData';
import { X, Star, Clock, Calendar } from 'lucide-react';

interface DetailModalProps {
  content: Content | null;
  onClose: () => void;
  onAddReview: (contentId: number, review: Omit<Review, 'id'>) => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ content, onClose, onAddReview }) => {
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');
  const [author, setAuthor] = useState('');

  if (!content) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (author && reviewText) {
      onAddReview(content.id, { author, rating, text: reviewText, date: new Date().toISOString().split('T')[0] });
      setAuthor(''); setReviewText(''); setRating(5);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img src={content.poster} alt={content.title} className="w-full h-64 object-cover rounded-t-xl" />
          <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-slate-900/80 rounded-full hover:bg-slate-800">
            <X className="text-white" />
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-3xl font-bold text-white mb-2">{content.title}</h2>
          <div className="flex flex-wrap gap-4 text-slate-300 mb-4">
            <span className="flex items-center gap-1"><Calendar size={16}/>{content.year}</span>
            <span className="flex items-center gap-1"><Clock size={16}/>{content.runtime}</span>
            <span className="flex items-center gap-1"><Star size={16} className="fill-amber-500 text-amber-500"/>{content.rating}</span>
          </div>
          <div className="flex gap-2 mb-4">
            {content.genre.map(g => <span key={g} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm">{g}</span>)}
          </div>
          <p className="text-slate-300 mb-4">{content.description}</p>
          <div className="mb-4"><span className="text-amber-500 font-semibold">Director:</span> <span className="text-white">{content.director}</span></div>
          <div className="mb-6"><span className="text-amber-500 font-semibold">Cast:</span> <span className="text-white">{content.cast.join(', ')}</span></div>
          
          <h3 className="text-xl font-bold text-white mb-4">Reviews</h3>
          <div className="space-y-3 mb-6">
            {content.reviews.map(r => (
              <div key={r.id} className="bg-slate-800 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">{r.author}</span>
                  <div className="flex items-center gap-1">
                    <Star size={14} className="fill-amber-500 text-amber-500"/>
                    <span className="text-amber-500">{r.rating}</span>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">{r.text}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="bg-slate-800 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-3">Add Your Review</h4>
            <input value={author} onChange={e => setAuthor(e.target.value)} placeholder="Your name" className="w-full p-2 bg-slate-700 text-white rounded mb-2" required />
            <div className="flex gap-2 mb-2">
              {[1,2,3,4,5].map(s => <button type="button" key={s} onClick={() => setRating(s)} className={`p-2 ${rating >= s ? 'text-amber-500' : 'text-slate-600'}`}><Star size={20} className={rating >= s ? 'fill-amber-500' : ''}/></button>)}
            </div>
            <textarea value={reviewText} onChange={e => setReviewText(e.target.value)} placeholder="Your review" className="w-full p-2 bg-slate-700 text-white rounded mb-2 h-20" required />
            <button type="submit" className="w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600">Submit Review</button>
          </form>
        </div>
      </div>
    </div>
  );
};

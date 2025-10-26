import React from 'react';

interface FilterBarProps {
  selectedGenre: string;
  selectedType: string;
  onGenreChange: (genre: string) => void;
  onTypeChange: (type: string) => void;
}

const genres = ['All', 'Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Romance', 'Thriller'];
const types = ['All', 'Movie', 'TV'];

export const FilterBar: React.FC<FilterBarProps> = ({ selectedGenre, selectedType, onGenreChange, onTypeChange }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
      <div className="flex flex-wrap gap-2">
        <span className="text-slate-400 text-sm font-semibold mr-2">Genre:</span>
        {genres.map(genre => (
          <button
            key={genre}
            onClick={() => onGenreChange(genre)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedGenre === genre
                ? 'bg-amber-500 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        <span className="text-slate-400 text-sm font-semibold mr-2">Type:</span>
        {types.map(type => (
          <button
            key={type}
            onClick={() => onTypeChange(type)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedType === type
                ? 'bg-amber-500 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

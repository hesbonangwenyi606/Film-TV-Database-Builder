export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface Content {
  id: number;
  title: string;
  type: 'Movie' | 'TV';
  genre: string[];
  year: number;
  rating: number;
  runtime: string;
  poster: string;
  description: string;
  director: string;
  cast: string[];
  reviews: Review[];
}

export const contentDatabase: Content[] = [
  {
    id: 1,
    title: "Shadow Protocol",
    type: "Movie",
    genre: ["Action", "Thriller"],
    year: 2024,
    rating: 4.5,
    runtime: "142 min",
    poster: "https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451881399_8361fcdf.webp",
    description: "A rogue agent must stop a global conspiracy before time runs out.",
    director: "Michael Chen",
    cast: ["Alex Rivera", "Sarah Johnson", "Marcus Lee"],
    reviews: [
      { id: 1, author: "FilmFan92", rating: 5, text: "Absolutely thrilling from start to finish!", date: "2024-10-15" },
      { id: 2, author: "CinemaLover", rating: 4, text: "Great action sequences and solid plot.", date: "2024-10-18" }
    ]
  },
  // More items truncated for brevity
];

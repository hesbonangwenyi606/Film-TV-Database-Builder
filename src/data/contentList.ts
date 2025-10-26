import { Content } from './contentData';

export const contentList: Content[] = [
  { id: 1, title: "Shadow Protocol", type: "Movie", genre: ["Action", "Thriller"], year: 2024, rating: 4.5, runtime: "142 min",
    poster: "https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451881399_8361fcdf.webp",
    description: "A rogue agent must stop a global conspiracy.", director: "Michael Chen",
    cast: ["Alex Rivera", "Sarah Johnson"], reviews: [
      { id: 1, author: "FilmFan92", rating: 5, text: "Thrilling!", date: "2024-10-15" }]},
  { id: 2, title: "Midnight Runner", type: "Movie", genre: ["Action"], year: 2023, rating: 4.2, runtime: "128 min",
    poster: "https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451883195_855476dc.webp",
    description: "Street racer hunts crime syndicate.", director: "James Park",
    cast: ["David Kim"], reviews: [{ id: 2, author: "ActionFan", rating: 4, text: "Fast-paced!", date: "2024-09-20" }]},
  { id: 3, title: "Velocity", type: "Movie", genre: ["Action", "Sci-Fi"], year: 2024, rating: 4.7, runtime: "135 min",
    poster: "https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451884931_3a10d736.webp",
    description: "Time-traveling assassin saves the future.", director: "Lisa Wong",
    cast: ["Tom Hardy"], reviews: [{ id: 3, author: "SciFiFan", rating: 5, text: "Mind-blowing!", date: "2024-10-01" }]},
];

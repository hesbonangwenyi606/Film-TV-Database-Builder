import { Content } from './contentData';

const p = {
  a: ["https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451881399_8361fcdf.webp",
    "https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451883195_855476dc.webp",
    "https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451884931_3a10d736.webp",
    "https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451886605_54668468.webp",
    "https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451888297_fd45585f.webp",
    "https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451889980_0764c2f2.webp"],
  c: ["https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451894118_34a87f45.webp",
    "https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451895799_0ebddbc4.webp",
    "https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451897501_9fe6110f.webp",
    "https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451899203_c3bd9bfe.webp",
    "https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451900937_3f66105d.webp",
    "https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451902628_b9ef5db0.webp"],
  s: ["https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451918070_25b0ecd6.webp",
    "https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451919795_e0ad13a6.webp",
    "https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451921509_6c126836.webp",
    "https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451923547_e047b8ac.webp",
    "https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451925288_632bab4d.webp"],
  h: ["https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451929522_88b5f29b.webp",
    "https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451931242_eb453c94.webp",
    "https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451932933_ea213e43.webp",
    "https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451934637_7934b565.webp",
    "https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451936360_1dfa7886.webp",
    "https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451938137_27ece997.webp"]
};

export const movies: Content[] = [
  { id: 1, title: "Shadow Protocol", type: "Movie", genre: ["Action", "Thriller"], year: 2024, rating: 4.5, runtime: "142 min", poster: p.a[0],
    description: "A rogue agent must stop a global conspiracy before time runs out.", director: "Michael Chen", cast: ["Alex Rivera", "Sarah Johnson", "Marcus Lee"],
    reviews: [{ id: 1, author: "FilmFan92", rating: 5, text: "Absolutely thrilling from start to finish!", date: "2024-10-15" },
      { id: 2, author: "CinemaLover", rating: 4, text: "Great action sequences.", date: "2024-10-18" }]},
  { id: 2, title: "Midnight Runner", type: "Movie", genre: ["Action", "Crime"], year: 2023, rating: 4.2, runtime: "128 min", poster: p.a[1],
    description: "Street racer turned detective hunts down underground crime syndicate.", director: "James Park", cast: ["David Kim", "Emma Stone"],
    reviews: [{ id: 3, author: "ActionJunkie", rating: 4, text: "Fast-paced and exciting!", date: "2024-09-20" }]},
];

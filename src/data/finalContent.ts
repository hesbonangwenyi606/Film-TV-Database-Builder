import { Content } from './contentData';
import { allMovies } from './allMovies';
import { moreContent } from './moreContent';
import { horrorContent } from './horrorContent';

export const finalContent: Content[] = [...allMovies, ...moreContent, ...horrorContent];

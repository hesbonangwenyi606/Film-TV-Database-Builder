import { Content } from './contentData';

const h = ["https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451929522_88b5f29b.webp","https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451931242_eb453c94.webp","https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451932933_ea213e43.webp","https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451934637_7934b565.webp","https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451936360_1dfa7886.webp","https://d64gsuwffb70l.cloudfront.net/68fd9f39e2910efa48cab590_1761451938137_27ece997.webp"];

const r=(a:string,rt:number,t:string)=>({id:Math.random(),author:a,rating:rt,text:t,date:"2024-10-01"});

export const horrorContent: Content[] = [
{id:17,title:"Dark Shadows",type:"Movie" as const,genre:["Horror","Thriller"],year:2024,rating:4.3,runtime:"118min",poster:h[0],description:"Haunted mansion terror",director:"J.Wan",cast:["V.Farmiga"],reviews:[r("Scare",4,"Terrifying")]},
{id:18,title:"Nightmare House",type:"Movie" as const,genre:["Horror"],year:2023,rating:4.1,runtime:"105min",poster:h[1],description:"Family haunting",director:"M.Flanagan",cast:["K.Siegel"],reviews:[r("Fear",4,"Creepy")]},
{id:19,title:"The Ritual",type:"TV" as const,genre:["Horror","Mystery"],year:2024,rating:4.5,runtime:"42min",poster:h[2],description:"Cult mystery",director:"A.Aster",cast:["T.Collette"],reviews:[r("Dark",5,"Disturbing")]},
{id:20,title:"Silent Scream",type:"Movie" as const,genre:["Horror","Thriller"],year:2024,rating:4.2,runtime:"112min",poster:h[3],description:"Psychological horror",director:"D.Villeneuve",cast:["A.Adams"],reviews:[r("Psych",4,"Intense")]},
{id:21,title:"Blood Moon",type:"TV" as const,genre:["Horror","Drama"],year:2023,rating:4.4,runtime:"48min",poster:h[4],description:"Vampire saga",director:"G.DelToro",cast:["R.Perlman"],reviews:[r("Vamp",4,"Gothic")]},
{id:22,title:"The Haunting",type:"Movie" as const,genre:["Horror"],year:2024,rating:4.6,runtime:"125min",poster:h[5],description:"Classic ghost story",director:"T.Burton",cast:["J.Depp"],reviews:[r("Ghost",5,"Chilling")]},
{id:23,title:"Crimson Peak",type:"Movie" as const,genre:["Horror","Romance"],year:2023,rating:4.0,runtime:"119min",poster:h[0],description:"Gothic romance",director:"G.DelToro",cast:["M.Wasikowska"],reviews:[r("Gothic",4,"Beautiful")]},
{id:24,title:"Evil Within",type:"TV" as const,genre:["Horror","Thriller"],year:2024,rating:4.3,runtime:"45min",poster:h[1],description:"Demonic possession",director:"S.Raimi",cast:["B.Campbell"],reviews:[r("Demon",4,"Scary")]},
];


import { Movie } from "./movie";

let movie1: Movie= new Movie(1, "Napolean Dynamite", 2004, "PG", "Jared Hess");
let movie2: Movie= new Movie(2, "A Night at the Roxbury", 1998, "PG-13", "John Fortenberry");
let movie3: Movie= new Movie(3, "10 Things I Hate About You", 1999, "PG-13", "Gil Junger");
let movie4: Movie= new Movie(4, "The Fast and the Furious", 2001, "PG-13", "Rob Cohen");

let movies:Movie[]= [movie1, movie2, movie3, movie4];

let movie5: Movie=new Movie(5, "Breakfast at Tiffany's", 1961, "PG", "Blake Edwards");

movies.push(movie5);

console.log("List of Movies");
console.log(" Id ", " Title ", " Year ", " Rating ", " Director ");
movies.forEach(m => {
    console.log(m.id, m.title, m.year, m.rating, m.director);
});

//other way to loop
for(let m of movies) {
    console.log("Movie title= "+m.title);
}
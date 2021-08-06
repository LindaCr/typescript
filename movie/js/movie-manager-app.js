"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var movie_1 = require("./movie");
var movie1 = new movie_1.Movie(1, "Napolean Dynamite", 2004, "PG", "Jared Hess");
var movie2 = new movie_1.Movie(2, "A Night at the Roxbury", 1998, "PG-13", "John Fortenberry");
var movie3 = new movie_1.Movie(3, "10 Things I Hate About You", 1999, "PG-13", "Gil Junger");
var movie4 = new movie_1.Movie(4, "The Fast and the Furious", 2001, "PG-13", "Rob Cohen");
var movies = [movie1, movie2, movie3, movie4];
var movie5 = new movie_1.Movie(5, "Breakfast at Tiffany's", 1961, "PG", "Blake Edwards");
movies.push(movie5);
console.log("List of Movies");
console.log(" Id ", " Title ", " Year ", " Rating ", " Director ");
movies.forEach(function (m) {
    console.log(m.id, m.title, m.year, m.rating, m.director);
});
//other way to loop
for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
    var m = movies_1[_i];
    console.log("Movie title= " + m.title);
}

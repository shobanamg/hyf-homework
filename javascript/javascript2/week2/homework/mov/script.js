import { movies } from "./movies.js";

//1. Create an array of movies containing the movies with a short title (you define what short means)
const moviesWithShortTitle = movies.filter((movie) => movie.title.length <= 2);
console.log(moviesWithShortTitle);

//2. Create an array of movie titles with long movie titles
const longMovieTitles = movies
  .filter((movie) => movie.title.length >= 15)
  .map((movie) => movie.title);
console.log(longMovieTitles);

//3. Count the number of movies made between 1980-1989 (including both the years)
const moviesCount1980To1989 = movies.filter(
  (movie) => movie.year >= 1980 && movie.year <= 1989
).length;
console.log(moviesCount1980To1989);

//4. Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
const taggedMovies = movies.map((movie) => {
  if (movie.rating >= 7) {
    return { tag: "Good", ...movie };
  } else if (movie.rating >= 4 && movie.rating < 7) {
    return { tag: "Average", ...movie };
  } else if (movie.rating < 4) {
    return { tag: "Bad", ...movie };
  }
});
console.log(taggedMovies);

//5.Using chaining, first filter the movies array to only contain the movies rated higher than 6.
// Now map the movies array to only the rating of the movies.
const highRatings = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => movie.rating);
console.log(highRatings);

//6.Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin. So if there were 3 movies that contained
// Surfer, 1 with Alien and 2 with Benjamin, you would return 6. Can you make sure the search is case insensitive?

const totalMovies = movies.filter(
  (movie) =>
    movie.title.toLowerCase().includes("surfer") ||
    movie.title.toLowerCase().includes("alien") ||
    movie.title.toLowerCase().includes("benjamin")
).length;
console.log(totalMovies);

//7.Create an array of movies where a word in the title is duplicated. Fx "Star Wars: The Clone Wars" the word Wars is duplicated.
// Here are some madeup examples of movies with duplicated words in the title: "The three men and the pistol",
// "Chase three - The final chase"

const moviesWithDuplicatedWordsInTitle = movies.filter((movie) => {
  const words = movie.title.toLowerCase().split(" ");
  const uniqueWords = new Set(words);
  if (words.length !== uniqueWords.size) return movie;
});
console.log(moviesWithDuplicatedWordsInTitle);

//8. Calculate the average rating of all the movies using reduce. Optional
const averageRatingOfAllMovies =
  movies.map((movie) => movie.rating).reduce((acc, cur) => cur + acc, 0) /
  movies.length;
console.log(averageRatingOfAllMovies);

//9. Count the total number of Good, Average and Bad movies using reduce. A return could fx be {goodMovies: 33, averageMovies: 45,
// goodMovies: 123} Optional
const moviesTaggedBasedOnRating = taggedMovies.map((movie) => movie.tag);
console.log(moviesTaggedBasedOnRating);
const MovieOccurrences = moviesTaggedBasedOnRating.reduce((acc, cur) => {
  if (cur in acc) {
    acc[cur] = acc[cur] + 1;
  } else {
    acc[cur] = 1;
  }
  return acc;
}, {});

console.log(MovieOccurrences);

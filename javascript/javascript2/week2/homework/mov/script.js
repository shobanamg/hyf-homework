import {movies} from "./movies.js";

const moviesWithShortTitle = movies.filter(movie => movie.title.length <= 2);
console.log(moviesWithShortTitle);

const longMovieTitles = movies.filter(movie => movie.title.length >= 15).map(movie => movie.title);
console.log(longMovieTitles);

const moviesCount1980To1989 = movies.filter(movie => movie.year >= 1980 && movie.year <= 1989).length;
console.log(moviesCount1980To1989);

const taggedMovies = movies.map(movie => {
    if (movie.rating >= 7) {
        return {tag: 'Good', ...movie}
    } else if (movie.rating >= 4 && movie.rating < 7) {
        return {tag: 'Average', ...movie}
    } else if (movie.rating < 4) {
        return {tag: 'Bad', ...movie}
    }
});
console.log(taggedMovies);

const highRatings = movies.filter(movie => movie.rating > 6).map(movie => movie.rating);
console.log(highRatings);


const totalMovies = movies.filter(movie => movie.title.toLowerCase().includes('surfer') ||
    movie.title.toLowerCase().includes('alien') ||
    movie.title.toLowerCase().includes('benjamin')).length;
console.log(totalMovies);


const moviesWithDuplicatedWordsInTitle = movies.filter(movie => {
        const words = movie.title.toLowerCase().split(' ');
        const uniqueWords = new Set(words);
        if (words.length !== uniqueWords.size) return movie
    }
)
console.log(moviesWithDuplicatedWordsInTitle);

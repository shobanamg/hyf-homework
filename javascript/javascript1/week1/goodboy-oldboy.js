let dogYearOfBirth = 2017;
let dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearOfBirth;
let showResultInDogYears = dogYear * 7;
let showResultInHumanYears = dogYear;

let shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears) {
  console.log(showResultInDogYears);
} else {
  console.log(showResultInHumanYears);
}

console.log(
  `Your dog will be ${showResultInHumanYears} human years old in ${dogYearFuture} or Your dog will be ${showResultInDogYears} dog years old in ${dogYearFuture}`
);

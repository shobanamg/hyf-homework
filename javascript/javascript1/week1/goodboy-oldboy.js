const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
const showResultInDogYears = dogYear * 7;
const showResultInHumanYears = dogYear;

const shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears) {
  console.log(showResultInDogYears);
} else {
  console.log(showResultInHumanYears);
}

console.log(
  `Your dog will be ${showResultInHumanYears} human years old in ${dogYearFuture} or Your dog will be ${showResultInDogYears} dog years old in ${dogYearFuture}`
);

/*** Fibonacci Sequence ***/
const febNum = [0, 1];

function febSeqNum(sequence) {
    for (let i = 0; i < sequence - 2; i++) {
        let firstNumber = febNum[i]
        let secondNumber = febNum[i + 1]
        let curSeqNumb = firstNumber + secondNumber;
        febNum.push(curSeqNumb);
    }
    console.log(febNum);
}

febSeqNum(10);

/*** Exercise 1: Fizz buzz ***/
function fizzBuzz(a, b) {
    let number = 0;
    const array = [];
    for (i = 0; i < 100; i++) {
        number++;
        if (number % a === 0 && number % b === 0) {
            array.push("FizzBuzz");
        } else if (number % a === 0) {
            array.push("Fizz");
        } else if (number % b === 0) {
            array.push("Buzz");
        } else {
            array.push(number);
        }
    }
    return array;
}

console.log(fizzBuzz(3, 5));
console.log(fizzBuzz(4, 12));

/*** Exercise 2: Build a sentiment analyzer ***/
const positiveWordsInGeneral = [
    "love",
    "like",
    "enjoy",
    "happy",
    "satisfied",
    "super",
    "awesome",
    "succeed",
];
const negativeWordsInGeneral = ["hate", "dislike", "sad", "unhappy", "upset"];

function getSentimentScore(sentence) {
    let score = 0;
    let positiveWords = [];
    let negativeWords = [];
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (positiveWordsInGeneral.includes(words[i])) {
            score++;
            positiveWords.push(words[i]);
        } else if (negativeWordsInGeneral.includes(words[i])) {
            score--;
            negativeWords.push(words[i]);
        }
    }
    return ({score, positiveWords, negativeWords});
}

const sentimentScoreObject = getSentimentScore('I am mega super awesome happy');

console.log(sentimentScoreObject);

const sentimentScoreObject1 = getSentimentScore("I feel sad and happy"); //score: 0
console.log(sentimentScoreObject1);
const sentimentScoreObject2 = getSentimentScore("I'm so sad and I hate it"); //score: -2
console.log(sentimentScoreObject2);

/*** Exercise 3: Credit card number formatter ***/
function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, '$& ');
}

console.log(format(1234567890123456));

//Without regex, We can use map as well to achieve this
function formatCreditCardNumber(number) {
    const formatted = [...number].map((d, i) => i % 4 === 0 ? ' ' + d : d).join('').trim()
    return ({original: number, formatted: formatted})
}

const formattedCreditCardObject = formatCreditCardNumber('1234567890123456');
console.log(formattedCreditCardObject);


/*** Exercise 4: Character frequencies ***/
function getCharacterFrequencies(str) {
    characters = [];
    for (let i = 0; i < str.length; i++) {
        if (characters.length > 0) {
            let isFound = false;
            for (let obj of characters) {
                if (obj.character === str[i]) {
                    obj.count = Number(obj.count) + 1;
                    isFound = true;
                    break;
                }
            }
            if (!isFound) characters.push({character: str[i], count: 1});
        } else {
            characters.push({character: str[i], count: 1});
        }
    }
    return characters;
}

console.log(getCharacterFrequencies('happy'));

/*** Exercise 5: Palindromic substring ***/
function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}

function longest_palindrome(str) {

    let palindrome_arr = [];
    let substr = "";
    for (let i = 0; i < str.length; i++) {
        for (let j = 1; j < str.length; j++) {
            substr = str.substring(i, j);
            if (isPalindrome(substr) && substr !== "" && substr.length !== 1) palindrome_arr.push(substr);
        }
    }
    return palindrome_arr.sort(function (a, b) {
        if (a.length > b.length) return -1;
        if (a.length < b.length) return 1;
        else return 0;
    })[0];
}

console.log(longest_palindrome("bananas"));
console.log(longest_palindrome("abracadabra"));
console.log(longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"));

/*** Exercise 6: Credit card info  ***/
function getCardInfo(cardNumber) {
    const numToStr = cardNumber.toString();
    const array = numToStr.split("");
    let firstNumber = array[0];

    switch (firstNumber) {
        case "4":
            return "Visa";
        case "5":
            return "MasterCard";
        case "3":
            return "American Express";
        case "6":
            return "UnionPay";
        default:
            return "Error!";
    }
}

console.log(getCardInfo(411111111111111111));
console.log(getCardInfo(550000000000000004));
console.log(getCardInfo(340000000000000009));
console.log(getCardInfo(620000000000000007));

/*** Exercise 7: Tic Tac Toe ***/
const position = [
    ['x', 'o', ' '],
    [' ', 'o', ' '],
    [' ', 'o', 'x']
];

function getRenderedGame(position) {
    return position.forEach((e) => console.log(' *', e.join(' * '), '*'));
}

const renderedGame = getRenderedGame(position);
console.log(renderedGame);

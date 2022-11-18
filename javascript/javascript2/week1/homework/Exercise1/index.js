/*** 1.1. Find the shortest word ***/
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function findShortestWord(words) {
    let shortestWord = words[0];
    words.forEach((word) => {
        if (word.length < shortestWord.length) {
            shortestWord = word;
        }
    })
    return shortestWord;
}

console.log(findShortestWord(danishWords));

/*** 1.2. Find and count the Danish letters ***/
const danishString = "Jeg har en blå bil";

function findDanishLetter(characters, danishcharacter) {
    return characters.filter((char) => char === danishcharacter).length
}

function danishLetterCounter(danishString) {
    const characters = [...danishString.toLowerCase()];
    const dl1Count = findDanishLetter(characters, 'æ')
    const dl2Count = findDanishLetter(characters, 'ø')
    const dl3Count = findDanishLetter(characters, 'å')
    return {
        'æ': dl1Count, 'ø': dl2Count, 'å': dl3Count, 'total': dl1Count + dl2Count + dl3Count
    }
}


console.log(danishLetterCounter(danishString));

const danishString2 = "Blå grød med røde bær";
console.log(danishLetterCounter(danishString2));
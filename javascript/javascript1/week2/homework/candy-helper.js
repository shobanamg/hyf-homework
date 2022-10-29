/****** Exercis 5: Candy Helper ******/
const candyPriceTable = {
    sweet: 0.5,
    chocolate: 0.7,
    toffee: 1.1,
    chewingGum: 0.03
}
const boughtCandyPrices = []
const initialValue = 0;
const amountToSpend = Math.floor(Math.random() * 100);

function totalCandyPrice() {
    return boughtCandyPrices.reduce((previousValue, currentValue) => previousValue + currentValue,
        initialValue);
}


function canBuyMoreCandy(candyType, weight) {
    let priceForCandy = candyPriceTable[candyType] * weight;
    return priceForCandy <= amountToSpend - totalCandyPrice();
}

function addCandy(candyType, weight) {
    if (canBuyMoreCandy()) {
        boughtCandyPrices.push(candyPriceTable[candyType] * weight);
        console.log(`Total amount you can spend: ${amountToSpend}kr.
         The amount you can spend so far is ${totalCandyPrice()}kr,`);
    } else {
        console.log(`You don't have enough money to buy. Price for ${candyType} with weight ${weight} is ${candyPriceTable[candyType] * weight}kr.
         But you have only: ${amountToSpend - totalCandyPrice()}kr.`)
    }
}


addCandy('toffee', 20)
addCandy('toffee', 78)




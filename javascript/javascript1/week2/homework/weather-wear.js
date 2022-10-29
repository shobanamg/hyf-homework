/****** Exercise 3: Weather Wear ******/
function clothDecider(temperature) {
    if (temperature <= 12) {
        return "Winter Wear";
    } else if (temperature > 12 && temperature <= 20) {
        return "Spring/Fall Wear";
    }
    return "Summer Wear";
}

console.log(clothDecider(18)); // Logs out: "shorts and a t-shirt"


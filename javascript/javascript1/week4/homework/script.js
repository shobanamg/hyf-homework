/*** Voice assistant ***/
let myName = "";
const todo = [];

function getReply(command) {

    if (command.startsWith("Hello my name is") && myName === "") {
        const myArr = command.split(" ");
        myName = myArr[myArr.length - 1];
        return `Nice to meet you ${myName}`;
    } else if (command.includes("Hello my name is") && myName !== "") {
        return `${myName} Hi again`;
    } else if (command === "What is my name?") {
        if (typeof myName === "string" && myName !== "") {
            return `Your name is ${myName}`;
        } else {
            return `you haven\'t introduce yourself`;
        }
    } else if (command.startsWith("Add") && command.endsWith("to my todo")) {
        let itemToAdd = command.replace("Add", "").replace("to my todo", "");
        todo.push(itemToAdd);
        return `${itemToAdd} added to your todo!`;
    } else if (command.startsWith("Remove") && command.endsWith("from my todo")) {
        let itemToRemove = command.replace("Remove", "").replace("from my todo", "");
        for (let i = 0; i < todo.length; i++) {
            if (todo[i] === itemToRemove) {
                todo.splice(i, 1)
            }
        }
        return `${itemToRemove} removed from your todo`;
    } else if (command === "What is on my todo?") {
        return `${todo.join(', ')}`;
    } else if (command === "What day is it today?") {
        let today = new Date();
        let day = today.getDate();
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let month = today.getMonth();
        month = months[month]
        let year = today.getFullYear();
        return (`${day}th. of ${month} ${year}`)
    } else if (command.startsWith("What is")) {
        let array = command.replace("What is ", "").split(" ");
        if (array[1] === "+") {
            return parseInt(array[0]) + parseInt(array[2]);
        } else if (array[1] === "-") {
            return array[0] - array[2];
        } else if (array[1] === "*") {
            return array[0] * array[2];
        } else if (array[1] === "/") {
            return array[0] / array[2];
        } else {
            return `The Operator does not match`
        }
    } else if (command.startsWith("Set a timer for") && command.endsWith("minutes")) {
        const count = command.replace("Set a timer for", "").replace("minutes", "")
        setTimeout(startTimer, count * 60000);

        function startTimer() {
            console.log(`Timer Done`)
        }

        return `Timer set for ${count} minutes!`;
    } else {
        return `This command is not available`
    }
}

console.log(getReply("What is my name?"));
console.log(getReply("Hello my name is Shobana"));
console.log(getReply("Hello my name is Shobana"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Add riding on the cycle to my todo"));
console.log(todo)
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(todo)
console.log(getReply("What day is it today?"));
console.log(getReply("What is 3 + 3"));
console.log(getReply("What is 4 * 12"));
console.log(getReply("Set a timer for 1 minutes"));
console.log(getReply("play music"));
/****** Exercise 2: Event Application ******/
const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

function getEventWeekday(eventDay) {
    return days[(new Date().getDay() + eventDay) % 7]
}

console.log('Event day is ', getEventWeekday(345));
console.log('Event day is ', getEventWeekday(7));


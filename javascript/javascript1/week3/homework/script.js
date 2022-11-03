/**** Exercise1: Item array removal ****/
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
];

// using splice
const nameToRemove = "Ahmad";
for (let i = 0; i < names.length; i++) {
    if (names[i] === nameToRemove) {
        names.splice(i, 1);
    }
}
console.log(names);

// using filter without mutating the existing array
const nameToRemove2 = "Tala";
const filteredNames = names.filter((name) => name !== nameToRemove2);

console.log(filteredNames);

/**** Exercise2: When will we be there?? ****/
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

function findTravelTime(travelInformation) {
    const time = travelInformation.destinationDistance / travelInformation.speed;
    const timeUnits = time.toString().split('.');
    return `${timeUnits[0]} hours and ${Math.floor(Number(timeUnits[1]) * 60 / 100)} minutes`;
}

const travelTime = findTravelTime(travelInformation)
console.log(travelTime);

/**** Exercise3: Series duration of my life ****/
const seriesDurations = [
    {
        title: "Game of thrones",
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: "Sopranos",
        days: 3,
        hours: 14,
        minutes: 0,
    },
    {
        title: "The Wire",
        days: 2,
        hours: 12,
        minutes: 0,
    },
];


seriesDurations.push({
    title: "Virgin River",
    days: 1,
    hours: 7,
    minutes: 30,
})

console.log(seriesDurations)

function logOutSeriesText() {
    //approximately I'm considering 365 days per Year
    const lifeTimeInMinutes = 80 * 365 * 24 * 60;
    let totalSeriesDurationInPercentage = 0;
    seriesDurations.forEach((seriesDuration) => {
        const seriesDurationInMinutes = seriesDuration.days * 24 * 60 + seriesDuration.hours * 60 + seriesDuration.minutes;
        const seriesDurationInPercentage = (seriesDurationInMinutes / lifeTimeInMinutes) * 100;
        console.log(seriesDuration.title, "took", seriesDurationInPercentage.toFixed(3), "of my life");
        totalSeriesDurationInPercentage = totalSeriesDurationInPercentage + seriesDurationInPercentage;
    })
    console.log("In total that is", totalSeriesDurationInPercentage.toFixed(3), "of my life");
}

logOutSeriesText();


/**** Exercise4: NOnoN0nOYes (Note taking app) ****/
//set a note
const notes = [];

function saveNote(content, id) {
    notes.push({content, id})
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

//Get a note
function getNote(id) {
    if (id === undefined || isNaN(id)) {
        console.log(`Please enter a valid id`);
        return;
    }
    for (let note of notes) {
        if (id === note.id)
            return note;
    }
}

const firstNote = getNote(1);
getNote();

console.log(firstNote);

//Log out notes
function logOutNotesFormatted() {
    for (let note of notes) {
        console.log(`The note with id: ${note.id}, has the following note text: "${note.content}".`);
    }
}

logOutNotesFormatted();


/**** Exercise5: CactusIO-interactive (Smart phone usage app) optional ****/
//Adding an activity
const activities = [];

function getTotalDuration() {
    let totalDuration = 0;
    for (let activity of activities) {
        totalDuration += activity.duration;
    }
    return totalDuration;
}

function addActivity(activity, duration) {
    if (100 - getTotalDuration() < duration) {
        console.log(`You have reached your Limit, no more smartphoning for you`)
        return;
    }
    let a = {date: new Date(), activity, duration}
    activities.push(a);
}

addActivity("Youtube", 30);
addActivity("netflix", 30);
addActivity("movie", 18);
addActivity("netflix", 30);


console.log(activities);

//Show my status
function showStatus(activities) {
    if (activities.length === 0) {
        console.log("Add some activities before calling showStatus");

    } else {
        console.log(`You have added ${activities.length} activities. They amount to ${getTotalDuration()}min. of usage`);
    }
}

activities2 = []
showStatus(activities);
showStatus(activities2);

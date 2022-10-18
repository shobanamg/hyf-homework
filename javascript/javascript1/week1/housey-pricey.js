const peter = {
  wide: 8,
  deep: 10,
  high: 10,
  gardenSizeInM2: 100,
  houseCost: 2500000,
};

const julie = {
  wide: 5,
  deep: 11,
  high: 8,
  gardenSizeInM2: 70,
  houseCost: 1000000,
};

//peter's house price calculation
let volumeInMeters2 = peter.wide * peter.deep * peter.high;

let housePrice = volumeInMeters2 * 2.5 * 1000 + peter.gardenSizeInM2 * 300;

if (housePrice < peter.houseCost) {
  console.log(
    `Peter is paying too much. i.e ${
      peter.houseCost - housePrice
    } more than actual price of the house`
  );
} else {
  console.log(
    `Peter is paying too little. i.e ${
      housePrice - peter.houseCost
    } less than actual price of the house.`
  );
}

//julie's house price calculation
volumeInMeters2 = julie.wide * julie.deep * julie.high;

housePrice = volumeInMeters2 * 2.5 * 1000 + julie.gardenSizeInM2 * 300;

if (housePrice < julie.houseCost) {
  console.log(
    `Julie is paying too much. i.e ${
      julie.houseCost - housePrice
    } more than actual price of the house`
  );
} else {
  console.log(
    `Julie is paying too little. i.e ${
      housePrice - julie.houseCost
    } less than actual price of the house.`
  );
}

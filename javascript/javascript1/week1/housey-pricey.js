//Your friend Peter is considering a house that is 8m wide, 10m deep and 10m high. The garden size is 100m2. The house costs 2.500.000. Your friend Julia is considering a house that is 5m wide, 11m deep and 8m high. The garden size is 70m2. This house costs 1.000.000.

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

const volumeInMeters2 = peter.wide * peter.deep * peter.high;
console.log(volumeInMeters2);

const housePrice = volumeInMeters2 * 2.5 * 1000 + peter.gardenSizeInM2 * 300;
console.log(housePrice);

if (housePrice < peter.houseCost) {
  console.log(
    `peter is paying too much. i.e ${
      peter.houseCost - housePrice
    } more than actualprice of the house`
  );
} else {
  console.log(
    `peter is paying too little. i.e ${
      peter.houseCost - housePrice
    } less than actual price of the house.`
  );
}

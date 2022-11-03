function countDown(n) {
  for (i = n; i >= 0; i--) {
    if (i === 10) {
      console.log("OMG it started");
    } else if (i !== 0 && i !== 10) {
      console.log(i);
    } else if (i === 0) {
      console.log("Happy new year!");
    } else {
      console.log("it is not a new year");
    }
  }
}

countDown(10);

// A function to determine the index of the smallest value from the array

function findMinValueIndex(array) {
  let minValue;
  let minValueIndex;
  array.forEach((value, index) => {
    // Iterating through the array & updating minValue and minValueIndex if a smaller value is found
    if (minValue === undefined || value < minValue) {
      minValue = value;
      minValueIndex = index;
    }
  });
  return minValueIndex;
}

// Function to calculate total time taken for queue processing to fill up their water bottles

function calculateTimeForQueue(queueLengths, tapFlowRates, walkingTime) {
  // Initialize an array to store the total time spent at each tap

  let tapTimes = Array(tapFlowRates.length).fill(0);

  // Iterate through each bottle in the queue & find the tap with the minimum accumulated time spent
  queueLengths.forEach((bottleSize) => {
    let minIndexTap = findMinValueIndex(tapTimes);

    // Retrieve the flow rate of the tap with the minimum time spent
    let flow = tapFlowRates[minIndexTap];

    // Calculate the time taken to fill the current bottle
    let timeSpentFillingBottle = bottleSize / flow;

    // Update the total time spent at the selected tap, including walking time
    tapTimes[minIndexTap] += walkingTime + timeSpentFillingBottle;
  });

  /* Assuming the initial people in the queue do not have to walk to the tap so subtracting it
  from the maximum time needed to fill a bottle
  */
  return Math.max(...tapTimes) - walkingTime;
}

// Example input values to test the function
let queueLengthExample = [400, 750, 1000];
let flowRatesExample = [50, 200];
let walkTimeExample = 5;

console.log("-----");
console.log(
  calculateTimeForQueue(queueLengthExample, flowRatesExample, walkTimeExample)
);
console.log("-----");

// Scenario with increase of flow rate of at least one of the taps which will not increase the time of queue
let queueLengthExample2 = [1000, 1000, 1000]; // Three bottles each with 1000 ml
let flowRatesExample2 = [100, 100, 200]; // Initial flow rates of Tap 1, Tap 2, and Tap 3
let initialTime = calculateTimeForQueue(
  queueLengthExample2,
  flowRatesExample2,
  walkTimeExample
);

// Now, let's increase the flow rate of all three taps
flowRatesExample2[0] = 200;
flowRatesExample2[1] = 200;
flowRatesExample2[2] = 400;
let updatedTime = calculateTimeForQueue(
  queueLengthExample2,
  flowRatesExample2,
  walkTimeExample
);

console.log(
  "Initial time (with flow rates 100 ml/s, 100 ml/s, and 200 ml/s):",
  initialTime
);
console.log(
  "Updated time (with flow rates 200 ml/s, 200 ml/s, and 400 ml/s):",
  updatedTime
);
console.log("Time increased:", updatedTime > initialTime);

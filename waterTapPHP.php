<?php

// A function to determine the index of the smallest value from the array

function findMinValueIndex($array) {
    $minValue;
    $minValueIndex;
    foreach ($array as $index => $value) {
        // Iterating through the array & update minValue and minValueIndex if a smaller value is found
        if (!isset($minValue) || $value < $minValue) {
            $minValue = $value;
            $minValueIndex = $index;
        }
    }
    return $minValueIndex;
}

// Function to calculate total time taken for queue processing to fill up their water bottles

function calculateTimeForQueue($queueLengths, $tapFlowRates, $walkingTime) {
    // Initialize an array to store the total time spent at each tap

    $tapTimes = array_fill(0, count($tapFlowRates), 0);

  // Iterate through each bottle in the queue & find the tap with the minimum accumulated time spent
    foreach ($queueLengths as $index => $bottleSize) {
       
        $minIndexTap = findMinValueIndex($tapTimes);

        // Retrieve the flow rate of the tap with the minimum time spent
        $flow = $tapFlowRates[$minIndexTap];

        // Calculate the time taken to fill the current bottle
        $timeSpentFillingBottle = $bottleSize / $flow;

        // Update the total time spent at the selected tap, including walking time
        $tapTimes[$minIndexTap] += $walkingTime + $timeSpentFillingBottle;
    }

   /* Assuming the initial people in the queue do not have to walk to the tap so subtracting it
  from the maximum time needed to fill a bottle
  */
    return max($tapTimes) - $walkingTime;
}

// Example input values to test the function
$queueLengthExample = [400, 750, 1000];
$flowRatesExample = [50, 200];
$walkTimeExample = 5;

echo "-----\n";
echo calculateTimeForQueue($queueLengthExample, $flowRatesExample, $walkTimeExample) . "\n";
echo "-----\n";

?>
const moment = require("moment");
const readline = require("readline");

import { squareOf9 } from "./gannSquareOf9.js";

// Square of 52 Function (Calculates key weekly time intervals)
function squareOf52(startDate) {
  let dates = [];
  let start = moment(startDate);

  // Calculate 7th, 14th, 21st, 28th, 42nd, 52nd weeks (Gann's time points)
  for (let i = 7; i <= 52; i += 7) {
    let futureDate = start.clone().add(i, "weeks");
    dates.push({ week: i, date: futureDate.format("YYYY-MM-DD") });
  }

  return dates;
}

// Function to calculate date 90 days from startDate
function date90DaysFrom(startDate) {
  return moment(startDate).add(90, "days").format("YYYY-MM-DD");
}

// Function to run the analysis
function gannAnalysis(startDate, price) {
  console.log("Gann Square of 9 & 52 Analysis");

  // Square of 9 price projections at 45, 90, 180, 360 degrees
  const price45 = squareOf9(price, 45);
  const price90 = squareOf9(price, 90);
  const price180 = squareOf9(price, 180);
  const price360 = squareOf9(price, 360);

  console.log(`Price projections from ${price}:`);
  console.log(`45 degrees: ${price45.toFixed(4)}`);
  console.log(`90 degrees: ${price90.toFixed(4)}`);
  console.log(`180 degrees: ${price180.toFixed(4)}`);
  console.log(`360 degrees: ${price360.toFixed(4)}`);

  // Square of 52 time projections from startDate
  const weeks = squareOf52(startDate);
  console.log(`Key weekly time intervals from ${startDate}:`);
  weeks.forEach((week) => {
    console.log(`Week ${week.week}: ${week.date}`);
  });
  // Calculate and log the date 90 days from startDate
  const date90Days = date90DaysFrom(startDate);
  console.log(`90 Days out: ${date90Days}`);
}

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt for start date
rl.question("Input the start date (YYYY-MM-DD): ", (startDate) => {
  // Prompt for price
  rl.question("Input the price (significant high or low): ", (price) => {
    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice)) {
      console.log("Invalid input. Please enter a valid number.");
    } else {
      // Run Gann analysis
      gannAnalysis(startDate, parsedPrice);
    }
    rl.close();
  });
});

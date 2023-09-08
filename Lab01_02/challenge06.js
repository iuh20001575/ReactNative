// Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above
const calcTip = (bill) => bill * (bill >= 50 && bill <= 300 ? 0.15 : 0.2);

// Test the function using a bill value of 100
console.log('With a bill value of 100, the tip is', calcTip(100));

// And now let's use arrays! So create an array 'bills' containing the test data below
const bills = [125, 555, 44];

// Create an array 'tips' containing the tip value for each bill,
// calculated from the function you created before
const tips = bills.map(calcTip);
console.log(`Tips of bills ${bills.join(' ')} is ${tips.join(' ')}`);

// Bonus: Create an array 'total' containing the total values, so the bill + tip
const total = bills.map((item, index) => item + tips[index]);
console.log('Total values: ', total);

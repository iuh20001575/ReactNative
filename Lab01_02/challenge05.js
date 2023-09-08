// Data
const scoresOfDolphins1 = [44, 23, 71];
const scoresOfKoalas1 = [65, 54, 49];
const scoresOfDolphins2 = [85, 54, 41];
const scoresOfKoalas2 = [23, 34, 27];

// Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (...scores) =>
    scores.reduce((acc, num) => acc + num) / scores.length;

// Use the function to calculate the average for both teams
const avgScoreOfDolphins1 = calcAverage(...scoresOfDolphins1);
const avgScoreOfKoalas1 = calcAverage(...scoresOfKoalas1);
const avgScoreOfDolphins2 = calcAverage(...scoresOfDolphins2);
const avgScoreOfKoalas2 = calcAverage(...scoresOfKoalas2);

// Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
const checkWinner = (avgDolhins, avgKoalas) => {
    if (avgDolhins >= avgKoalas * 2)
        console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
    else if (avgDolhins >= avgKoalas * 2)
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
    else console.log('No team wins!');
};

// Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
checkWinner(avgScoreOfDolphins1, avgScoreOfKoalas1);
checkWinner(avgScoreOfDolphins2, avgScoreOfKoalas2);

// Ignore draws this time

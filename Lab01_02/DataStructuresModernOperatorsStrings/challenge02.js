const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
game.scored.forEach((name, index) => console.log(`Goal ${index + 1}: ${name}`));

// Use a loop to calculate the average odd and log it to the console
console.log();
console.log(
    'The average odd: ',
    (Object.values(game.odds).reduce((acc, num) => acc + num) / 3).toFixed(2),
);

// Print the 3 odds to the console, but in a nice formatted way
const { team1, team2, x: draw } = game.odds;
console.log();
console.log(`Odd of victory ${game.team1}: ${team1}`);
console.log(`Odd of draw: ${draw}`);
console.log(`Odd of victory ${game.team2}: ${team2}`);

// Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game
const scorers = game.scored.reduce((acc, name) => {
    if (acc[name]) acc[name] += 1;
    else acc[name] = 1;

    return acc;
}, {});

console.log();
console.log('🚀 ~ scorers ~ scorers:', scorers);

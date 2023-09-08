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

// Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;
console.log(`Players of ${game.team1} team is: ${players1.join(', ')}`);
console.log(`Players of ${game.team2} team is: ${players2.join(', ')}`);

// The first player in any player array is the goalkeeper and the others are field players.
// For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name,
// and one array ('fieldPlayers') with all the remaining 10 field players
const gk = players1[0];
const [, ...fieldPlayers] = players1;
console.log(
    new Array(125)
        .fill(null)
        .map(() => '=')
        .join(''),
);
console.log(`The goalkeeper's name of ${game.team1} team is: ${gk}`);
console.log(
    `The field players of ${game.team1} team is: ${fieldPlayers.join(', ')}`,
);

// Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];

console.log(
    new Array(125)
        .fill(null)
        .map(() => '=')
        .join(''),
);
console.log('All players of both teams:', allPlayers.join(', '));

// During the game, Bayern Munich (team 1) used 3 substitute players.
// So create a new array ('players1Final')
// containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

console.log(
    new Array(125)
        .fill(null)
        .map(() => '=')
        .join(''),
);
console.log('Players final of team 1:', players1Final.join(', '));

// Based on the game.odds object,
// create one variable for each odd (called 'team1', 'draw' and 'team2')
const { team1, team2, x: draw } = game.odds;

console.log(
    new Array(125)
        .fill(null)
        .map(() => '=')
        .join(''),
);
console.group('game.odds');
console.log('team1:', team1);
console.log('team2:', team2);
console.log('draw:', draw);
console.groupEnd();

// Write a function ('printGoals') that receives an arbitrary number of player names
// (not an array) and prints each of them to the console,
// along with the number of goals that were scored in total (number of player names passed in)
const printGoals = (...names) => {
    console.log('Player names: ', names.join(', '));
    console.log('The total number of goals scored is', names.length);
};

console.log(
    new Array(125)
        .fill(null)
        .map(() => '=')
        .join(''),
);
printGoals(...game.scored);

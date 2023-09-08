const getAverageScore = (...scores) => scores.reduce((acc, item) => acc + item) / 3

const scoreOfDolphins = [97, 112, 101]
const scoreOfKoalas = [109, 95, 106]

// Task 1:
const averageScoreOfDolphins = getAverageScore(...scoreOfDolphins).toFixed(2)
const averageScoreOfKoalas = getAverageScore(...scoreOfKoalas).toFixed(2)

console.log(`Average Score Of Dolphins is ${averageScoreOfDolphins}`)
console.log(`Average Score Of Koalas is ${averageScoreOfKoalas}`)

// Task 2:
if (averageScoreOfDolphins > averageScoreOfKoalas)
    console.log(`Dolphins' team is win`)
else if (averageScoreOfDolphins < averageScoreOfKoalas)
    console.log(`Koalas' team is win`)
else console.log(`Draw result`)

// Task 3:
if (averageScoreOfDolphins > averageScoreOfKoalas && averageScoreOfDolphins >= 100)
    console.log(`Dolphins' team is win`)
else if (averageScoreOfDolphins < averageScoreOfKoalas && averageScoreOfKoalas >= 100)
    console.log(`Koalas' team is win`)

// Task 4:
if (averageScoreOfDolphins > averageScoreOfKoalas && averageScoreOfDolphins >= 100)
    console.log(`Dolphins' team is win`)
else if (averageScoreOfDolphins < averageScoreOfKoalas && averageScoreOfKoalas >= 100)
    console.log(`Koalas' team is win`)
else if (Math.min(averageScoreOfKoalas, averageScoreOfDolphins) >= 100)
    console.log(`Draw result`)
else
    console.log(`No team wins the trophy`)
const mark = {
    height: 1.69,
    mass: 78
}

const john = {
    height: 1.95,
    mass: 92
}

// const mark = {
//     height: 1.88,
//     mass: 95
// }

// const john = {
//     height: 1.75,
//     mass: 85
// }

function getBMI(mass, height) {
    return mass / height ** 2;
}

const bmiOfMark = getBMI(mark.mass, mark.height).toFixed(1)
const bmiOfJohn = getBMI(john.mass, john.height).toFixed(1)

const markHigherBMI = bmiOfMark > bmiOfJohn

console.log(markHigherBMI && `Mark's BMI is higher than John's!` || `John's BMI is higher than Mark's!`)
console.log(markHigherBMI && `Mark's BMI (${bmiOfMark}) is higher than John's (${bmiOfJohn})!` || `John's BMI (${bmiOfJohn}) is higher than Mark's (${bmiOfMark}) !`)
// const mark = {
//     mass: 1.69,
//     height: 78
// }

// const john = {
//     mass: 1.95,
//     height: 92
// }

const mark = {
    mass: 1.88,
    height: 95
}

const john = {
    mass: 1.75,
    height: 85
}

function getBMI1(mass, height) {
    return mass / height ** 2;
}

function getBMI2(mass, height) {
    return mass / (height * height);
}

const bmiOfMark = getBMI1(mark.mass, mark.height)
const bmiOfJohn = getBMI2(john.mass, john.height)

console.log(`Marks weights ${mark.height} kg and is ${mark.mass} m tall. John weights ${john.height} kg and is ${john.mass}m tall`)
console.log(`BMI of Mark: ${bmiOfMark}`)
console.log(`BMI of John: ${bmiOfJohn}`)

const markHigherBMI = bmiOfMark > bmiOfJohn

console.log(`Mark has a higher BMI than John is`, markHigherBMI)
// For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
const dataOfMark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
};

const dataOfJohn = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
};

// Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
dataOfJohn.calcBMI = dataOfMark.calcBMI = function () {
    const calc = this.mass / this.height ** 2;

    this.bmiValue = calc;
    return calc;
};

dataOfMark.calcBMI();
dataOfJohn.calcBMI();

// Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
const data = [dataOfMark];
data[dataOfMark.bmiValue > dataOfJohn.bmiValue ? 'push' : 'unshift'](
    dataOfJohn,
);
console.log(
    `${data[0].fullName.split(' ')[0]}'s BMI (${data[0].bmiValue.toFixed(
        1,
    )}) is higher than ${
        data[1].fullName.split(' ')[0]
    }'s (${data[1].bmiValue.toFixed(1)})!`,
);

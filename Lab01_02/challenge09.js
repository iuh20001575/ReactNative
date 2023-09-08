const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
const printForecast = (arr) => {
    console.log(
        arr
            .map(
                (temperature, index) =>
                    `...${temperature}oC in ${index + 1} days`,
            )
            .join('') + '...',
    );
};

printForecast(data1);
printForecast(data2);

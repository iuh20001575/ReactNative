const answerBtn = document.querySelector('button');

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
};

// Create a method called 'registerNewAnswer' on the 'poll' object
poll.registerNewAnswer = function () {
    const input = +prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`,
    );

    if (input >= 0 && input <= 3) {
        this.answers[input]++;
    }
};

// Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
poll.displayResults = function (type) {
    if (type === 'array') console.log(this.answers);
    else console.log(`Poll results are ${this.answers}`);
};

// Call this method whenever the user clicks the "Answer poll" button
answerBtn.addEventListener('click', () => {
    poll.registerNewAnswer();
    poll.displayResults('string');
});

// Use the 'displayResults' method to display the 2 arrays in the test data;
poll.displayResults.call({ answers: [5, 2, 3] }, 'array');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

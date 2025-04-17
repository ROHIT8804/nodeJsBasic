const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter num1: ", (num1) => {
    if (isNaN(num1)) {
        console.log("Invalid number");
        r1.close();
        return;
    }

    r1.question("Enter num2: ", (num2) => {
        if (isNaN(num2)) {
            console.log("Invalid number");
            r1.close();
            return;
        }

        const sum = parseInt(num1) + parseInt(num2);
        console.log(`Sum: ${sum}`);
        r1.close();
    });
});

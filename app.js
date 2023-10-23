import inquirer from "inquirer";
inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "Enter your 1st number",
    },
    {
        type: "number",
        name: "num2",
        message: "Enter your 2nd number",
    },
    {
        type: "list",
        name: "operation",
        message: "Select which operation you want to do?",
        choices: ["+", "-", "*", "/"],
    },
])
    .then((answers) => {
    if (answers.operation == "+") {
        const result = answers.num1 + answers.num2;
        console.log("Sum = ", result);
    }
    else if (answers.operation == "-") {
        const result = answers.num1 - answers.num2;
        console.log("Subtraction = ", result);
    }
    else if (answers.operation == "*") {
        const result = answers.num1 * answers.num2;
        console.log("Multiplication = ", result);
    }
    else if (answers.operation == "/") {
        const result = answers.num1 / answers.num2;
        console.log("Division = ", result);
    }
})
    .catch((error) => {
    if (error.isTtyError) {
    }
    else { }
});

import inquirer from "inquirer";
let ans = await inquirer.prompt([
    {
        type: "number",
        name: "maxNum",
        message: "Enter the Maximum Number "
    },
    {
        type: "number",
        name: "guess",
        message: "Guess the Number"
    }
]);
const number = Math.floor((Math.random() * ans.maxNum) + 1);
while (true) {
    if (ans.guess == number) {
        console.log("You Guessed Correct !!");
        break;
    }
    else if (ans.guess > number) {
        console.log("Wrong Guess ! Try Again with Smaller Number ");
        ans = await inquirer.prompt([
            {
                type: "number",
                name: "guess",
                message: "Guess the Number"
            }
        ]);
    }
    else if (ans.guess < number) {
        console.log("Wrong Guess ! Try Again with Larger Number ");
        ans = await inquirer.prompt([
            {
                type: "number",
                name: "guess",
                message: "Guess the Number"
            }
        ]);
    }
}

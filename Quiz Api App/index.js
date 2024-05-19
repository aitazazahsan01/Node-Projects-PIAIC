import inquirer from "inquirer";
import chalk from "chalk";
let name = await inquirer.prompt([{
        type: "input",
        name: "fname",
        message: "Enter Your Name : "
    }]);
let n = await inquirer.prompt([{
        type: "number",
        name: "qs",
        message: "How Many Number of MCQs you want"
    }]);
let difficulty = await inquirer.prompt([{
        type: "list",
        name: "level",
        message: "Select Difficulty Level : ",
        choices: ["easy", "medium", "hard"]
    }]);
console.log("Category of Questions");
console.log("= = = = = = = = = = = = = = ");
console.log("Select 9 - for General Knowledge ");
console.log("Select 10 - for Books ");
console.log("Select 11 - for Movies ");
console.log("Select 17 - for Science & Nature");
console.log("Select 18 - for Computer Science ");
console.log("Select 19 - for Mathematics ");
console.log("Select 21 - for Sports");
console.log("Select 22 - for GeoGraphy ");
console.log("Select 23 - for History ");
console.log("Select 24 - for Politics ");
console.log("= = = = = = = = = = = = = = ");
console.log();
console.log();
let category = await inquirer.prompt([{
        type: "list",
        name: "option",
        message: "Select Category of Questions",
        choices: ["9", "10", "11", "17", "18", "19", "21", "22", "23", "24"]
    }]);
const API = `https://opentdb.com/api.php?amount=${n.qs}&category= ${category.option} &difficulty=${difficulty.level}&type=multiple`;
let fetchData = async (data) => {
    let fetchQuiz = await fetch(data);
    let response = await fetchQuiz.json();
    return response.results;
};
let data = await fetchData(API);
let startQuiz = async () => {
    let score = 0;
    for (let i = 0; i < n.qs; i++) {
        let answers = [...data[i].incorrect_answers, data[i].correct_answer];
        let ans = await inquirer.prompt([{
                type: "list",
                name: "quiz",
                message: data[i].question,
                choices: answers.map((val) => val)
            }]);
        if (ans.quiz == data[i].correct_answer) {
            ++score;
            console.log(chalk.bold.italic.blue("Correct"));
        }
        else {
            console.log(chalk.bold.yellowBright("OOPPs!!You are Wrong!!"));
            console.log(`Correct answer is ${chalk.bold.italic.red(data[i].correct_answer)}`);
        }
    }
    console.log(`Dear ${chalk.bold.green(name.fname)}, Your Score is ${chalk.bold.red(score)} out of ${chalk.bold.red(n.qs)}`);
};
startQuiz();

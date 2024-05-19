#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Oponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
let player = await inquirer.prompt([{
        name: "name",
        type: "string",
        message: "Enter name of Player : "
    }]);
player.name = player.name + "(You)";
let oponent = await inquirer.prompt([{
        name: "select",
        type: "list",
        message: "Choose your Oponent",
        choices: ["Saad", "Hassan", "Ehtisham"]
    }]);
let p1 = new Player(player.name);
let o1 = new Oponent(oponent.select);
let i = 1;
while (true) {
    if (oponent.select == "Saad") {
        if (i == 1) {
            console.log(`${chalk.bold.green(player.name)} VS ${chalk.bold.red(oponent.select)}`);
            i++;
        }
        let ask = await inquirer.prompt([{
                name: "opt",
                type: "list",
                message: `${chalk.bold.blue("Choose :")}`,
                choices: ["Attack", "Drink Portion", "Run for Life....", "Quit"]
            }]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${chalk.bold.red(p1.name)} fuel ${p1.fuel}`);
                console.log(`${chalk.bold.green(o1.name)} fuel ${o1.fuel}`);
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${chalk.bold.red(o1.name)} fuel ${o1.fuel}`);
                console.log(`${chalk.bold.green(p1.name)} fuel ${p1.fuel}`);
            }
            if (p1.fuel <= 0) {
                console.log();
                console.log();
                console.log(chalk.bold.whiteBright("✈✈-Game Over-✈✈"));
                console.log(chalk.bold.italic.redBright("☢☢-You Loose-☢☢"));
                break;
            }
            if (o1.fuel <= 0) {
                console.log();
                console.log();
                console.log(chalk.bold.whiteBright("✪✪-Congratulations-✪✪"));
                console.log(chalk.bold.italic.greenBright("♕♕-You Won-♕♕"));
                break;
            }
        }
        if (ask.opt == "Drink Portion") {
            if (p1.fuel < 100) {
                p1.fuelIncrease();
                console.log();
                console.log(chalk.bold.blue("Fuel Full"));
            }
            else {
                console.log();
                console.log(chalk.bold.blue("Fuel Already Full"));
            }
        }
        if (ask.opt == "Run for Life....") {
            console.log();
            console.log();
            console.log(chalk.bold.red("Game Over"));
            console.log(chalk.yellow.bold.italic("You Loose, Better Luck Next Time"));
            break;
        }
        if (ask.opt == "Quit") {
            console.log();
            {
                let confirm = await inquirer.prompt([{
                        name: "choose",
                        type: "list",
                        message: "Are You sure to Quit the Game",
                        choices: ["Yes", "No"]
                    }]);
                if (confirm.choose == "Yes") {
                    console.log();
                    console.log(chalk.bold.italic.red("You Quit"));
                    break;
                }
            }
        }
    }
    if (oponent.select == "Hassan") {
        if (i == 1) {
            console.log(`${chalk.bold.green(player.name)} VS ${chalk.bold.red(oponent.select)}`);
            i++;
        }
        let ask = await inquirer.prompt([{
                name: "opt",
                type: "list",
                message: `${chalk.bold.blue("Choose :")}`,
                choices: ["Attack", "Drink Portion", "Run for Life....", "Quit"]
            }]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${chalk.bold.red(p1.name)} fuel ${p1.fuel}`);
                console.log(`${chalk.bold.green(o1.name)} fuel ${o1.fuel}`);
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${chalk.bold.red(o1.name)} fuel ${o1.fuel}`);
                console.log(`${chalk.bold.green(p1.name)} fuel ${p1.fuel}`);
            }
            if (p1.fuel <= 0) {
                console.log();
                console.log();
                console.log(chalk.bold.whiteBright("✈✈-Game Over-✈✈"));
                console.log(chalk.bold.italic.redBright("☢☢-You Loose-☢☢"));
                break;
            }
            if (o1.fuel <= 0) {
                console.log();
                console.log();
                console.log(chalk.bold.whiteBright("✪✪-Congratulations-✪✪"));
                console.log(chalk.bold.italic.greenBright("♕♕-You Won-♕♕"));
                break;
            }
        }
        if (ask.opt == "Drink Portion") {
            if (p1.fuel < 100) {
                p1.fuelIncrease();
                console.log();
                console.log(chalk.bold.blue("Fuel Full"));
            }
            else {
                console.log();
                console.log(chalk.bold.blue("Fuel Already Full"));
            }
        }
        if (ask.opt == "Run for Life....") {
            console.log();
            console.log();
            console.log(chalk.bold.red("Game Over"));
            console.log(chalk.yellow.bold.italic("You Loose, Better Luck Next Time"));
            break;
        }
        if (ask.opt == "Quit") {
            console.log();
            {
                let confirm = await inquirer.prompt([{
                        name: "choose",
                        type: "list",
                        message: "Are You sure to Quit the Game",
                        choices: ["Yes", "No"]
                    }]);
                if (confirm.choose == "Yes") {
                    console.log();
                    console.log(chalk.bold.italic.red("You Quit"));
                    break;
                }
            }
        }
    }
    if (oponent.select == "Ehtisham") {
        if (i == 1) {
            console.log(`${chalk.bold.green(player.name)} VS ${chalk.bold.red(oponent.select)}`);
            i++;
        }
        let ask = await inquirer.prompt([{
                name: "opt",
                type: "list",
                message: `${chalk.bold.blue("Choose :")}`,
                choices: ["Attack", "Drink Portion", "Run for Life....", "Quit"]
            }]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${chalk.bold.red(p1.name)} fuel ${p1.fuel}`);
                console.log(`${chalk.bold.green(o1.name)} fuel ${o1.fuel}`);
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${chalk.bold.red(o1.name)} fuel ${o1.fuel}`);
                console.log(`${chalk.bold.green(p1.name)} fuel ${p1.fuel}`);
            }
            if (p1.fuel <= 0) {
                console.log();
                console.log();
                console.log(chalk.bold.whiteBright("✈✈-Game Over-✈✈"));
                console.log(chalk.bold.italic.redBright("☢☢-You Loose-☢☢"));
                break;
            }
            if (o1.fuel <= 0) {
                console.log();
                console.log();
                console.log(chalk.bold.whiteBright("✪✪-Congratulations-✪✪"));
                console.log(chalk.bold.italic.greenBright("♕♕-You Won-♕♕"));
                break;
            }
        }
        if (ask.opt == "Drink Portion") {
            if (p1.fuel < 100) {
                p1.fuelIncrease();
                console.log();
                console.log(chalk.bold.blue("Fuel Full"));
            }
            else {
                console.log();
                console.log(chalk.bold.blue("Fuel Already Full"));
            }
        }
        if (ask.opt == "Run for Life....") {
            console.log();
            console.log();
            console.log(chalk.bold.red("Game Over"));
            console.log(chalk.yellow.bold.italic("You Loose, Better Luck Next Time"));
            break;
        }
        if (ask.opt == "Quit") {
            console.log();
            {
                let confirm = await inquirer.prompt([{
                        name: "choose",
                        type: "list",
                        message: "Are You sure to Quit the Game",
                        choices: ["Yes", "No"]
                    }]);
                if (confirm.choose == "Yes") {
                    console.log();
                    console.log(chalk.bold.italic.red("You Quit"));
                    break;
                }
            }
        }
    }
}

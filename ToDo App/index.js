#! usr/bin/env node
import inquirer from "inquirer";
console.log("To Do App");
let ans = await inquirer.prompt([
    {
        type: "list",
        name: "select",
        message: "Select Your Choice ? ",
        choices: ["Add", "Remove", "List", "Quit"]
    }
]);
let todo = [];
while (1) {
    if (ans.select == "Quit") {
        console.log("Quitting App");
        break;
    }
    else if (ans.select == "Add") {
        let add = await inquirer.prompt([
            {
                type: "input",
                name: "task",
                message: "Enter the Task You want to Add",
            }
        ]);
        todo.push(add.task);
        console.log("Task Added");
    }
    else if (ans.select == "List") {
        console.log("----------TO-DO App------------");
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}- ${todo[i]}`);
        }
        console.log("------------The End------------");
    }
    else if (ans.select == "Remove") {
        let remove = await inquirer.prompt([
            {
                type: "number",
                name: "index",
                message: "Enter the Index of Task You want to Remove",
            }
        ]);
        todo.splice((remove.index), 1);
        console.log("Task Deleted");
    }
    else {
        console.log("Wrong Request...! Try Again");
    }
    ans = await inquirer.prompt([
        {
            type: "list",
            name: "select",
            message: "Select Your Choice ? ",
            choices: ["Add", "Remove", "List", "Quit"]
        }
    ]);
}

import inquirer from "inquirer";
const ans = await inquirer.prompt([
    {
        type: "input",
        name: "message",
        message: "Enter Your String "
    }
]);
let count = 0;
for (let i = 0; i < (ans.message).length; i++) {
    if (ans.message[i] == " ") {
        continue;
    }
    else {
        count++;
    }
}
console.log(`Character are equal to ${count}`);
let count2 = 1;
for (let i = 0; i < (ans.message).length; i++) {
    if (ans.message[i] == " " || ans.message[i] == '\0') {
        count2++;
    }
}
console.log(`Words are equal to ${count2}`);

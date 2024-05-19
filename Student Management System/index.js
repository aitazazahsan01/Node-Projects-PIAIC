import inquirer from "inquirer";
import chalk from "chalk";
console.log("Welcome to Aitazaz's School of IT Education");
console.log("Courses Offers by Us with Fee as well");
console.log("***  = = = = = = = = = = = = = =  ***");
console.log("1- FOP ----- Fee: @10$");
console.log("2- OOP ----- Fee: @15$");
console.log("3- DB ------ Fee: @20$");
console.log("4- OS ------ Fee: @30$");
console.log("5- GUI ----- Fee: @40$");
console.log("***  = = = = = = = = = = = = = =  ***");
let student = [];
let teacher = [];
let students = 0;
let teachers = 0;
var Totalfee = 0;
async function main() {
    let ask = await inquirer.prompt([{
            name: "option",
            type: "list",
            message: "Select Your Choice ",
            choices: ["Add Students", "Add Teacher", "Show Students List", "Show Teachers List", "Update Info", "Delete Student", "Quit"]
        }]);
    while (true) {
        if (ask.option == "Quit") {
            console.log("Thanks For Using Our Student Management System");
            break;
        }
        else if (ask.option == "Add Students") {
            let s = await inquirer.prompt([{
                    name: "name",
                    type: "input",
                    message: "Enter Student Name "
                },
                {
                    name: "age",
                    type: "number",
                    message: "Enter Students Age "
                },
                {
                    name: "course",
                    type: "checkbox",
                    message: "Choose Courses",
                    choices: ["FOP", "OOP", "DB", "OS", "GUI"]
                },
            ]);
            for (let i = 0; i < (s.course).length; i++) {
                if (s.course[i] == "FOP") {
                    Totalfee += 10;
                }
                if (s.course[i] == "OOP") {
                    Totalfee += 15;
                }
                if (s.course[i] == "DB") {
                    Totalfee += 20;
                }
                if (s.course[i] == "OS") {
                    Totalfee += 30;
                }
                if (s.course[i] == "GUI") {
                    Totalfee += 40;
                }
            }
            let h = await inquirer.prompt([{
                    type: "number",
                    name: "Balance",
                    message: "Enter Your Account Balance"
                }]);
            console.log("You Joined Following Courses :");
            for (let i = 0; i < (s.course).length; i++) {
                console.log(chalk.blue.bold(s.course[i]));
            }
            console.log(`And Your Total Fee is ${chalk.bold.red(Totalfee)}`);
            let f = await inquirer.prompt([
                {
                    name: "fee",
                    type: "list",
                    message: "Fee Payment : ",
                    choices: ["Yes", "No"],
                }
            ]);
            if (f.fee == "Yes") {
                if (h.Balance >= Totalfee) {
                    console.log(chalk.bold.greenBright("Your Fee has Been Paid"));
                    console.log(chalk.bold.gray(`Your Remaining Account Balance is ${h.Balance - Totalfee}`));
                    f.fee = "Yes";
                }
                else {
                    console.log(chalk.bold.redBright("Can't Pay Fee ! Your Account Has Not Enough Balance"));
                    console.log(chalk.bold.gray(`Your Account Balance is ${h.Balance}`));
                    f.fee = "No";
                }
            }
            // Adding in student[] array
            student.push({
                name: s.name,
                age: s.age,
                course: s.course,
                yourFee: Totalfee,
                feePaid: f.fee // Assuming you want to store the first choice from fee as string
            });
            students++;
            Totalfee = 0;
        }
        // Displaying Info of Aall Students 
        else if (ask.option == "Show Students List") {
            console.log(chalk.bold.italic.red.blue(`Total No. Students in School: ${students}`));
            console.log(chalk.bold.yellow.underline("Students Information :"));
            student.forEach((stud, index) => {
                console.log(chalk.bold.whiteBright(`Student ${(index + 1)}:`));
                console.log("--------------------------");
                console.log(`Name: ${stud.name}`);
                console.log(`Age: ${stud.age}`);
                console.log(`Courses: ${stud.course.join(', ')}`);
                console.log(`Your Total Fee: ${stud.yourFee}`);
                console.log(`Fee Paid: ${stud.feePaid}`);
                console.log("--------------------------");
            });
        }
        else if (ask.option == "Add Teacher") {
            let t = await inquirer.prompt([{
                    name: "name",
                    type: "input",
                    message: "Enter Teacher's Name "
                },
                {
                    name: "age",
                    type: "number",
                    message: "Enter Your Age "
                },
                {
                    name: "education",
                    type: "input",
                    message: "Enter Your Highest Education",
                },
                {
                    name: "email",
                    type: "input",
                    message: "Enter Your Email"
                }
            ]);
            teacher.push({
                name: t.name,
                age: t.age,
                education: t.education,
                email: t.email
            });
            teachers++;
        }
        // Displaying Info of Aall Teachers 
        else if (ask.option == "Show Teachers List") {
            console.log(chalk.bold.italic.red.blue(`Total No. Teachers in School: ${teachers}`));
            console.log(chalk.bold.yellow.underline("Teachers Information :"));
            teacher.forEach((stud, index) => {
                console.log(chalk.bold.whiteBright(`Teacher ${(index + 1)}:`));
                console.log("--------------------------");
                console.log(`Name: ${stud.name}`);
                console.log(`Age: ${stud.age}`);
                console.log(`Education : ${stud.education}`);
                console.log(`Email : ${stud.email}`);
                console.log("--------------------------");
            });
        }
        // Updating Student's Info
        else if (ask.option == "Update Info") {
            let opt = await inquirer.prompt([{
                    name: "name",
                    type: "input",
                    message: "Enter Name of Student whose info You want to update "
                }]);
            let studentIndex = student.findIndex((param) => param.name === opt.name);
            if (studentIndex === -1) {
                console.log(chalk.bold.redBright("Student not found!"));
            }
            else {
                let name = student[studentIndex];
                // Updating Info
                let s = await inquirer.prompt([{
                        name: "name",
                        type: "input",
                        message: "Enter Updated Student Name ",
                        default: name?.name
                    },
                    {
                        name: "age",
                        type: "number",
                        message: "Enter Updated Students Age ",
                        default: name?.age
                    },
                    {
                        name: "course",
                        type: "checkbox",
                        message: "Updated Courses",
                        choices: ["FOP", "OOP", "DB", "OS", "GUI"],
                        default: name?.course
                    },
                ]);
                Totalfee = 0; // Reset the Totalfee before calculating the new fee
                for (let i = 0; i < (s.course).length; i++) {
                    if (s.course[i] == "FOP") {
                        Totalfee += 10;
                    }
                    if (s.course[i] == "OOP") {
                        Totalfee += 15;
                    }
                    if (s.course[i] == "DB") {
                        Totalfee += 20;
                    }
                    if (s.course[i] == "OS") {
                        Totalfee += 30;
                    }
                    if (s.course[i] == "GUI") {
                        Totalfee += 40;
                    }
                }
                let h = await inquirer.prompt([{
                        type: "number",
                        name: "Balance",
                        message: "Enter Your Account Balance"
                    }]);
                console.log("You Joined Following Courses :");
                for (let i = 0; i < (s.course).length; i++) {
                    console.log(chalk.blue.bold(s.course[i]));
                }
                console.log(`And Your Total Fee is ${chalk.bold.red(Totalfee)}`);
                let f = await inquirer.prompt([{
                        name: "fee",
                        type: "list",
                        message: "Fee Payment : ",
                        choices: ["Yes", "No"],
                        default: name?.feePaid
                    }]);
                if (f.fee == "Yes") {
                    if (h.Balance >= Totalfee) {
                        console.log(chalk.bold.greenBright("Your Fee has Been Paid"));
                        console.log(chalk.bold.gray(`Your Remaining Account Balance is ${h.Balance - Totalfee}`));
                        f.fee = "Yes";
                    }
                    else {
                        console.log(chalk.bold.redBright("Can't Pay Fee ! Your Account Has Not Enough Balance"));
                        console.log(chalk.bold.gray(`Your Account Balance is ${h.Balance}`));
                        f.fee = "No";
                    }
                }
                // Updating the student information
                student[studentIndex] = {
                    name: s.name,
                    age: s.age,
                    course: s.course,
                    yourFee: Totalfee,
                    feePaid: f.fee
                };
                console.log(chalk.bold.green("Student information updated successfully."));
            }
        }
        else if (ask.option == "Delete Student") {
            let opt = await inquirer.prompt([{
                    name: "name",
                    type: "input",
                    message: "Enter Name of Student You Want to Remove "
                }]);
            let studentIndex = student.findIndex((param) => param.name === opt.name);
            student.splice(studentIndex, 1);
            console.log(`Student ${opt.name} has been removed from School`);
        }
        ask = await inquirer.prompt([{
                name: "option",
                type: "list",
                message: "Select Your Choice ",
                choices: ["Add Students", "Add Teacher", "Show Students List", "Show Teachers List", "Update Info", "Delete Student", "Quit"]
            }]);
    }
}
main();

import inquirer from "inquirer";
import { differenceInSeconds, DifferenceInSecondsOptions } from "date-fns/differenceInSeconds";

let input = await inquirer.prompt([{
    type: "number",
    name : "sec",
    message : "Enter the Amount of secs",
    validate : (inp)=>{
        if(isNaN(inp)){
            return "Please Enter amount of seconds"
        }
        else{
            return true;
        }
    }
}]);

function startTime(val:number){
    const initialTime = new Date().setSeconds(new Date().getSeconds() + val);
    const IntervalTime = new Date(initialTime);
    setInterval(()=> {
        const cuurentTime = new Date();
        const timeDifference = differenceInSeconds(IntervalTime,cuurentTime);

        if(timeDifference <= 0)
            {
                console.log("Timer has Expired");
                process.exit();
            }
        const minute = Math.floor(((timeDifference)%(3600*24)/3600));
        const seconds = Math.floor((timeDifference) % 60);
        console.log(`${minute.toString().padStart(2,"0")} : ${seconds.toString().padStart(2,"0")}`);
    },1000);
}

startTime(input.sec);

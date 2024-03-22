#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Your Name", type: "input", name: "firstenter" },
    { message: "Your Father Name", type: "input", name: "secondenter" },
    { message: "Your Class", type: "number", name: "thirdenter" },
    { message: "Your Roll Number", type: "number", name: "forthdenter" },
    { message: "Your Age ", type: "number", name: "fifthnumber" },
]);
if (answer.thirdenter < "10") {
    console.log("CONGRATULATION! you have under Matric class so you have suceessfull ");
}
else if (answer.thirdenter > "10")
    console.log("SORRY! you have not eligable fail");
if (answer.forthdenter < "50") {
    console.log("CONGRATULATION! wellcome for you comming");
}
else if (answer.forthdenter > "50")
    console.log("SORRY! you will comes to next day");
if (answer.fifthnumber < "20") {
    console.log("CONGRATULATION! you are eligible");
}
else if (answer.fifthnumber > "20")
    console.log("SORRY! you are not eligible");

//Define dependencies needed
var inq = require('inquirer');
var fs = require('fs');
const chalk = require('chalk');
//Define Basic Card and Cloze Card files:
var BasicFC = require('./BasicCard.js');
var ClozeFC = require('./ClozeCard.js');
//Define variables needed
var userChoice = "";
var userLock = 0;
var counter = 0;
var dataArr = [];

//define user input
initiator();


function initiator(){
//Always reinitialize userChoice, userLock and counter
userChoice = "";
userLock = 0;
counter = 0;
inq.prompt([
{   type: "list",
    message: "Please choose the card type:",
    choices: ["Basic","Cloze"],
    name: "selection"
}
]).then((answers)=>{
    userChoice = answers.selection;
    console.log("\n");
    console.log(chalk.yellow("You have chosen " + answers.selection));
    console.log("\n");
        // console.log(answers.selection);
    generateCard(userChoice);
})
}


function generateCard(userChoice){
    if(userLock != 0){
        readCard(userChoice);
    }
    else{
            switch(userChoice){
                case "Basic":
                createBasic();              
                break; 

                case "Cloze":
                createCloze();
                break;
            }

    }
}

function cardReader(data){
    dataArr = data.split(",");
    if(counter*2 + 1 < dataArr.length){
        inq.prompt([
            {   type: "list",
                message: dataArr[0 + 2*counter],
                choices: ["flip","skip"],
                name: "test"
            }
        ]).then((answers)=>{
                if(answers.test === "flip"){
                    console.log(dataArr[1 + 2*counter]);
                    console.log("\n");
                    counter++;
                    cardReader(data);
                }
                else{
                    console.log("\n");
                    counter++;
                    cardReader(data);
                }
        })
    }
    else{
        console.log(chalk.green("You went through all your flash cards!"));
        console.log('\n');
        inq.prompt([
        {   type: "list",
            message: "Try again with more cards?",
            choices: ["Yes Please!","Nope"],
            name: "startagain"
        }
    ]).then((answers)=>{
        if(answers.startagain === "Yes Please!"){
            console.log('\n');
            initiator();
        }
})
    }
}


function cardAdder(userChoice){
    inq.prompt([
                    { type:"confirm",
                     message: "Add another card?",
                    default: true,
                    name:"add"
                    }
                ]).then((answers)=>{
                    // console.log(answers.add);
                    if(answers.add === true){
                        console.log('\n');
                        generateCard(userChoice);
                    }
                    else{
                        userLock++;
                        console.log('\n');
                        generateCard(userChoice);
                    }
                })
};

function createBasic(){
inq.prompt([
                    {   type: "input",
                        message: chalk.cyan("Please enter the question you would like to ask on the front of the card:"),
                        name: "front"
                    },
                    {
                        type: "input",
                        message: chalk.cyan("Please enter the back of the card:"),
                        name: "back"
                    }
                    ]).then((answers)=>{
                        var bCard = BasicFC(answers.front, answers.back);
                        console.log('\n');
                        cardAdder(userChoice);
                    });
}

function createCloze(){
    inq.prompt([
                    {   type: "input",
                        message: chalk.magenta("Please enter the question you would like to ask on the front of the card:"),
                        name: "full"
                    },
                    {
                        type: "input",
                        message: chalk.magenta("Please enter the back of the card:"),
                        name: "cloze"
                    }
                    ]).then((answers)=>{
                        var clCard = ClozeFC(answers.full, answers.cloze);
                        console.log('\n');
                        cardAdder(userChoice);
                    });
}

function readCard(userChoice){
if(userChoice === "Basic"){
    fs.readFile('Bcards.txt', 'utf8',(error,data)=>{
                        if(error){
                            console.log(error);
                        }
                        else{
                            cardReader(data);
                        }
    });
}
else{
    fs.readFile('Ccards.txt', 'utf8',(error,data)=>{
                        if(error){
                            console.log(error);
                        }
                        else{
                            cardReader(data);
                        }
    });
}
};

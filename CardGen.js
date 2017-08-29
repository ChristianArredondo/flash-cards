//Define dependencies needed
var inq = require('inquirer');
var fs = require('fs');
const chalk = require('chalk');
//Define Basic Card and Cloze Card files:
var BasicFC = require('./BasicCard.js');
var ClozeFC = require('./clozeCard.js');
//Define variables needed
var userChoice = "";
var userLock = 0;

//define user input
initiator();


function initiator(){
//Always reinitialize userLock
userLock = 0;
inq.prompt([
{   type: "list",
    message: "Please choose the card type:",
    choices: ["Basic","Cloze"],
    name: "selection"
}
]).then((answers)=>{
    userChoice = answers.selection;
    console.log("\n");
    console.log("You have chosen " + answers.selection);
        // console.log('hi');
    generateCard(userChoice);
})
}





function generateCard(userChoice){
    if(userLock === 1){
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

function cardAdder(userChoice){
    inq.prompt([
                    { type:"confirm",
                     message: "Add another card?",
                    default: true,
                    name:"add"
                    }
                ]).then((answers)=>{
                    console.log(answers.add);
                    if(answers.add === true){
                        console.log("hi");
                        generateCard(userChoice);
                    }
                    else{
                        userLock = 1;
                    }
                })
};

function createBasic(){
inq.prompt([
                    {   type: "input",
                        message: "Please enter the question you would like to ask on the front of the card:",
                        name: "front"
                    },
                    {
                        type: "input",
                        message: "Please enter the back of the card:",
                        name: "back"
                    }
                    ]).then((answers)=>{
                        var bCard = BasicFC(answers.front, answers.back);
                        console.log(bCard);
                        cardAdder(userChoice);
                    });
}

function createCloze(){
    inq.prompt([
                    {   type: "input",
                        message: "Please enter the question you would like to ask on the front of the card:",
                        name: "full"
                    },
                    {
                        type: "input",
                        message: "Please enter the back of the card:",
                        name: "cloze"
                    }
                    ]).then((answers)=>{
                        var cCard = ClozeFC(answers.full, answers.cloze);
                        console.log(cCard);
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
                            
                        }
    });
}
else{
    fs.readFile('Ccards.txt', 'utf8',(error,data)=>{
                        if(error){
                            console.log(error);
                        }
                        else{
                            
                        }
    });
}
};
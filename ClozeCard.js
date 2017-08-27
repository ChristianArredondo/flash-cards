var fs = require('fs');
var cloze = "";
var fullText = "";
var partial = "";

//create function to check cloze, store as prototype

ClozeFC.prototype.clozeChecker = function(cloze,fullText){
    if(fullText.includes(cloze) === true){
        return fullText;
    }
    else{
        throw "Error! Cloze not found in text!";
    }

}

function ClozeFC(cloze,fullText){
    if(!(this instanceof ClozeFC)){
        return new ClozeFC(cloze,fullText);
        this.cloze = cloze;
        this.fullText = this.clozeChecker(cloze,fullText);
        this.partial = this.fullText.replace(cloze,"_________");
    }

}


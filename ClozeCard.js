var fs = require('fs');
var cloze = "";
var fullText = "";
var partial = "";

//create function to check cloze, store as prototype

ClozeFC.prototype.clozeChecker = function(fullText, cloze){
    if(fullText.includes(cloze) === true){
        return fullText;
    }
    else{
        throw "Error! Cloze not found in text!";
    }

}

function ClozeFC(fullText, cloze){
    if(!(this instanceof ClozeFC)){
        return new ClozeFC(fullText, cloze);
        this.cloze = cloze;
        this.fullText = this.clozeChecker(fullText, cloze);
        this.partial = this.fullText.replace(cloze,"_________");
        fs.appendFile('Ccards.txt', this.cloze + "," + this.partial + ",");
    }

}

module.exports = ClozeFC;
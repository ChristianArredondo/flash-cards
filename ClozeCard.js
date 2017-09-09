var fs = require('fs');
var cloze = "";
var fullText = "";
var partial = "";



function ClozeFC(fullText, cloze){

    //Actual ClozeFC constructor function
    if(!(this instanceof ClozeFC)){
        return new ClozeFC(fullText, cloze, partial);
    }

    //create function to check cloze, store as prototype
    ClozeFC.prototype.clozeChecker = function(fullText, cloze){
    if(fullText.includes(cloze) === true){
        return fullText;
    }
    else{
        throw "Error! Cloze not found in text!";
    }
}

        this.cloze = cloze;
        this.fullText = this.clozeChecker(fullText, cloze);
        if(this.fullText === fullText){
        this.partial = fullText.replace(cloze,"_________");
        fs.appendFile('Ccards.txt', this.partial + "," + this.cloze + ",");
    }

}

module.exports = ClozeFC;
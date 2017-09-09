var fs = require('fs');
var cloze = "";
var fullText = "";
var partial = "";



function ClozeFC(fullText, cloze){

    //create function to check cloze, store as prototype
    ClozeFC.prototype.clozeChecker = function(fullText, cloze){
    if(fullText.includes(cloze) === true){
        return fullText;
        console.log(hi);
    }
    else{
        throw "Error! Cloze not found in text!";
    }
}

    //Actual ClozeFC constructor function
    if(!(this instanceof ClozeFC)){
        return new ClozeFC(fullText, cloze, partial);
        this.cloze = cloze;
        console.log(this.cloze);
        this.fullText = this.clozeChecker(fullText, cloze);
        console.log(this.fullText);
        if(this.fullText === fullText){
        this.partial = fullText.replace(cloze,"_________");
        console.log(this.partial);
    }
        fs.appendFile('Ccards.txt', this.cloze + "," + this.partial + ",");
    }

}

module.exports = ClozeFC;
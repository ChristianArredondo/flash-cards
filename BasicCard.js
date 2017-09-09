
var fs = require('fs');
var front = "";
var back = "";

function BasicFC(front,back){
    //BasicFC constructor function
    if(!(this instanceof BasicFC)){
        return new BasicFC(front,back);
    }
    this.front = front;
    this.back = back;
    fs.appendFile('Bcards.txt', this.front + "," + this.back + ",");
}

module.exports = BasicFC;
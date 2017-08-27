
var fs = require('fs');
var front = "";
var back = "";

function BasicFC(front,back){
    if(!(this instanceof BasicFC)){
        return new BasicFC(front,back);
    }
    this.front = front;
    this.back = back;
}
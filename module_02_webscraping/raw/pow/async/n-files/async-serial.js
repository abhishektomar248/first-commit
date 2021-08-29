let fs = require("fs");
console.log("before");

//let files = ['./f1.txt','./f2.txt','./f3.txt','./f4.txt','./f5.txt'];
let files=["f1.txt","f2.txt","f3.txt","f4.txt","f5.txt"];
function SerialReader(i){
    if(i==files.length){
        return;

    }
    fs.readFile(files[i],function cb(err,data){
        console.log("data"+data);
        SerialReader(i+1);
    
    });
}
SerialReader(0);
console.log("after");
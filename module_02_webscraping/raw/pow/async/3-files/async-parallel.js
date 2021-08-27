let fs=require("fs");
console.log("before");
let content=fs.readFile("f1.txt",cb);
fs.readFile("f2.txt",cb1);
fs.readFile("f3.txt",cb2);
function cb(err,content){
    console.log("content"+content);//let us assume koi error nhi h

}
function cb1(err,content){
    console.log("content"+content);
    
}
function cb2(err,content){
    console.log("content"+content);
}
console.log("after");
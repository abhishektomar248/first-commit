let fs=require("fs");
console.log("before");
let content=fs.readFile("f1.txt",cb);
function cb(err,content){
    console.log("content"+content);//let us assume koi error nhi h
fs.readFile("f2.txt",cb1);//for next file k liye (serially) isi function k andar call karna padega
}
function cb1(err,content){
    console.log("content"+content);
    fs.readFile("f3.txt",cb2);
}
function cb2(err,content){
    console.log("content"+content);
}
console.log("after");
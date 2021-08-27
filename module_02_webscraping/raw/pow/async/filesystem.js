let fs=require("fs");
//let content=fs.readFileSync("cb.js");
//a js dev can't create an asynchronous function
//environment will give it to you
console.log("before");
//ensure
fs.readFile("callback.js",cb)
function cb(error,data){
    if(error){
        console.log("error:"+error)
        
    }else{
        console.log("content:"+data);

    }
    
}
console.log("after");
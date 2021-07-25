//implementation->files /folder interact
//directory
//files->read/write/update/delete
let fs= require("fs");
//let content=fs.readFileSync("f1.txt");
//buffer->video,audio,text so ,content gives us the txt form
//console.log("content :,content");
//+ ->concateniate ->string=> text
//console.log("content:" + content);
//write ->writeFileSync
//file does not exist ->file create,content put
//file doesn exist -> content override
//fs.writeFileSync("abc.txt","hum aaj khush nhi h");
//update
//fs.appendFileSync("abc.txt","bhai khush kyu nhi h");
//delete a file by passing its path
//fs.unlinkSync("abc.txt");
//console.log("File removed")


//folder
//input
//fs.mkdirSync("myDirectory");
//delete
//fs.rmdir("myDirectory");
//path ->check does it exist or not
let doesExist=fs.existsSync("fs1.js");
console.log("this path exists ?", doesExist);
//path ->belong to a directory or file
let statsOfAPath=fs.lstatSync("dirl");//fl tells that the path is a file or folder
console.log("isdirectory",statsOfAPath.isDirectory());
console.log("isFile?",statsOfAPath.isFile());
//directory ->content
/* let address= "C:\\Users\\Abhishek Singh Tomar\\Downloads\\code\\Lecture_2\\module_1_js";
let content=fs.readdirSync(address);
console.log("directory content",content); */
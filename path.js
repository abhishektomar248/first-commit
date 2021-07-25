let path =require("path");
let fs=require("fs");
//input
let inputArr =process.argv.slice(2);
let fileName =inputArr[0];
let content=inputArr[1];
console.log("fileName",fileName);
console.log("content",content);
//current path of directory
 let currentpath=process.cwd();
//console.log("currentPath",currentpath);
//path ->path for independent
  let filePath=path.join(current,"dirl",fileName);
console.log("filePath",filePath);
fs.writeFileSync(filePath,content)   
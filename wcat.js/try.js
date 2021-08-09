let fs= require("fs");

let inputArr = process.argv.slice(2);

// let srcPath = inputArr[0];
// let destPath = inputArr[1];

// fs.copyFileSync(srcPath, destPath);
// console.log("file copied");

let content="";
for(let i=0; i<inputArr.length ; i++){
    content = content + fs.readFileSync(inputArr[i])+"\r\n";
}
console.log(content);
fs.writeFileSync(inputArr[0], content);
let fs =require("fs");
let inputArr=process.argv.slice(2);
//console.log(inputArr);
let optionArr=[];
let filesArr=[];
//let filesArr = inputArr;
for(let i=0;i<inputArr.length;i++){
    let firstChar=inputArr[i].charAt(0);
    if(firstChar=="-"){
        optionArr.push(inputArr[i]);
    }else{
        filesArr.push(inputArr[i]);
    }
}
for(let i=0;i<filesArr.length;i++){
    let ans=fs.existsSync(filesArr[i]);
    if(ans==false){
        console.log("file does not exist");
        return;
    }
    //console.log(ans);
}
let content ="";
for(let i=0;i<filesArr.length;i++){
    content=content+fs.readFileSync(filesArr[i])+"\r\n";

}
//console.log(content.split("\r\n"));
//console.log(optionArr);
//-s check
let contentArr =content.split("\r\n")
let isSPresent = optionArr.includes("-s");
if(isSPresent){
    for(let i=1;i<contentArr.length;i++){
        if(contentArr[i]==""&&contentArr[i-1]==""){
            contentArr[i]=null;
        }else if(contentArr[i]==""&&contentArr[i-1]==null){
            contentArr[i]=null;
        }
    }
    let tempArr=[];
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i]!==null){
            tempArr.push(contentArr[i]);
        }
    }
    contentArr=tempArr;
}
console.log(contentArr.join("\n"));
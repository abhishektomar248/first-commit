let path = require("path");
let fs = require("fs");

let inputArr=process.argv.slice(2);
let filename=inputArr[0];
let address=path.join(process.cwd(),filename);

let isMainModulePresent = fs.existsSync(address);
if(isMainModulePresent){
    console.log("module is already present");
    return;
}else{
    console.log(address);
    fs.mkdirSync(address);

     for(let i=1;i<=3;i++){
        let subDir=path.join(address,inputArr[i]);
        fs.mkdirSync(subDir);
        console.log(inputArr[i]+" is created.");
        for(let j=1;j<=5;j++){
            let module="module_"+j;
            let modAdd=path.join(subDir,module);
            console.log(module+" is created.");
            fs.mkdirSync(modAdd);
            let subModfile=path.join(modAdd,"content.md");
            console.log("content.md is created in "+module);
             fs.writeFileSync(subModfile,"hello");
        }
        console.log();
    }
} 
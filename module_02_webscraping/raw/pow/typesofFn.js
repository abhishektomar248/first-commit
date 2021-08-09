// function fn(param){
//     console.log("param is", param);
//     console.log("''''''''''''''");
// }
// //value pass
// fn(10);
// fn("abhishek");
// fn([1,2,3,4,5]);
// fn({name:"jasbir"});

// //function statement
// function fn(){
//     console.log("i am a function");
// }
// //statement
// fn();
// //in js functions are treated as a variable
// //variable -> assign value/address
// //function address ->variable assign
// //for proving it is call by adress
// let b=a;
// console.log("b", b);
// a.pop();
// console.log("b", b);

// //function expression

let exp = function(){
    console.log("i am a function expression");
}
exp();

//IIFE -> immediately invoke function expression 
(function fn(){
    console.log("i m a IIFE i will callled immediately");
})();

// arrow function -> react
let arrowFN=()=>{
    console.log("i m a arrow function");
}
arrowFN();
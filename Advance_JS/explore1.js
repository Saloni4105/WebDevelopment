/*Asynchronous
having pause
1. network calls
2. write/ read files
3. time function
4. userinput
..... */

console.log("chaicode");

function sayHello(){
    console.log("I would like to say Hello");
}

setTimeout(() =>{
    sayHello();
}, 4000);

for (let index = 0; index < 10; index++) {
    console.log(index);
    
}
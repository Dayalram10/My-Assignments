const { log } = require("node:console");

console.log ("Print numbers divisible by 5 from 1 to 50")
for (let i = 1; i <= 50; i++) {
    if (i % 5 == 0) {
        console.log(i);
    }
}

console.log("Print Odd numbers from 1 to 20 ")
for (let i = 1; i <= 20; i ++) {
    if (i % 2 !== 0){
    console.log(i);
}
}
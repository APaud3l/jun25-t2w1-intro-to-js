console.log("Hello from a separate JS file!");

let randomString = "HelloWorld123";

console.log(randomString.length)
console.log(randomString.toLowerCase())

let name = "Alice";
// You can't change an individual character
name[0] = "M"; // No error, but has no effect.
name = "M" + name.slice(1); // Makes a new string 
console.log(name);

let isRaining = true;
let haveUmbrella = false;

if (isRaining && !haveUmbrella) {
    console.log("Better wait inside!");
}

console.log(false || true); // Picks the right value if the left value is null/undefined/false
console.log(null ?? true); // Picks the right value if the left value is null or undefined.

if (true) {
    var outside = "I escape blocks!";
    let inside = "I stay inside!";
}

console.log(outside);
// This gives Reference Error
// console.log(inside);
console.log("------------")

// Conditional Statements
let score = 85;

// If condition
if (score >=80) {
    console.log("You rock!");
} else if (score >= 60) {
    console.log("Solid effort!");
} else {
    console.log("Keep practicing!");
}
console.log("------------")

// Ternary Operator in action
score > 50 ? console.log("Pass") : console.log("Fail");
console.log("------------")

// Switch Case
let fruit = "apple";
switch(fruit) {
    case "apple":
        console.log("Crunchy and sweet!");
        break;
    case "banana":
        console.log("Peel and eat!");
        break;
    default:
        console.log("Mystery Fruit!");
}
console.log("------------")

for(let i = 1; i <= 5; i++){
    console.log("Step: " + i);
}
console.log("------------")

for (let i = 1; i <=9; i++){
    if (i % 2 !== 0) {
        console.log(i);
    }
}
console.log("------------")

let num = 3; 
while (num < 0) {
    console.log(num);
    num--;
}
console.log("------------")
do {
    console.log(num);
    num++;
} while (num < 3);
console.log("------------")
// FOR...OF (for arrays, strings)
let colors = ['red', 'yellow', 'green'];

for (let color of colors) {
    console.log(color);
}

for (let each of "Alice") {
    console.log(each);
}
console.log("------------")
// FOR...In (for objects/properties)
let car = {make: "Toyota", year: 2017};

for (let key in car){
    console.log(key + ": " + car[key]);
}
console.log("------------")
// forEach loop method
colors.forEach(abc => {
    console.log(abc);
});

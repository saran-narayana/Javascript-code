// 1.varibles has 3 declared ways

// var a=10; //globle scope
// var b=30;
// console.log(a+b);

// let a=20;  //block scope
// let b=10;
// console.log(a-b);

// const a=10; // once assigned a value we cannot reassign
// a=5;
// console.log(a);


//                      2. operators
       //assignment operator
// let text = "Hello";
// text += " World";
// console.log(text);
 
// let x = 30;
//  x -= 10;
//  x *= 4;
//  x /= 3;
//  x %= 7;  //modules
//  x ++; increment

// console.log(x);


//                       3. Data type
//let l=10;    // *number
// let w=20;
// console.log(l+w);

// let color= "yellow";  // *string
// let lastname= "sun";
// console.log(color+lastname);

// let x = 5;  // *booleans
// let y = 5;
// let z = 6;
// console.log(x == y);
// console.log(x == z);

// *objects
// const person = {firstName:"John", lastName:"Doe"};
// console.log(person);

// *arrays
// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars);



//               4 .Arrays
 const cars = new Array("Saab", "Volvo", "BMW");
 console.log(cars);

const car = ["Saab", "Volvo", "BMW"];
let car = car[0];
console.log(car);

//array methods//
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();    //remove last/
fruits.push("Kiwi");  // add/
fruits.shift();  
fruits.unshift("Lemon");


const fruit = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;
console.log("Apple is found in position  "+position);
fruits.includes("Mango");
console.log(fruits);



// // 5.conditional statement
//        // if and else   //
var time = 24;

   if(time < 30)
    {
        console.log('Good Day');
    }
    else{
        console.log('Good evening');
    }

             // else if //
const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting);

           // switch statement//

let day = 7;
if(day == 1){
    console.log("it is monday");
}

else if(day == 2){
    console.log("it is tuesday");
}
else if(day == 3){
    console.log("it is wednesday");
}
else if(day == 4){
    console.log("it is thursday");
}
else if(day == 5){
    console.log("it is friday");
}
else if(day == 6){
    console.log("it is saturday");
}
else{
    console.log("it is sunday");
}


//6.looping statement

//*for loop
// let i;
// for (let i = 0; i < 5; i++) {
//     console.log(i);  
// }

// for in loop
// const person = {fname:"John", lname:"Doe", age:25}; 
// for(let x in person){
//     console.log(person [x] + " " );
// }

//for of loop

// const cars = ["BMW", "Volvo", "Mini"];
// for (let x of cars) {
//  console.log (cars ) ;
// }

//while loop
// let i=0;
// while (i<10){
//     console.log(i);
//     i=i+2;
// }






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
/*
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
*/



// // 5.conditional statement
//        // if and else   //
/*var time = 24;

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
*/

//6.looping statement

//for loop
// let i;
// for (let i = -50; i < 0; i++) {
//     console.log(i);  
// }

// for in loop
// const person = {fname:"John", lname:"Doe", age:25}; 
// for(let x in person){
//     console.log(person [x] + " " );
// 

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

              //  7. break and continue statement  //
 
        //  for (i=0;i<10;i++)
        //     {
        //         console.log(i);
        //         if(i == 5){
        //             //break;
        //             continue;
        //         }
        //     }    
            
            // 8. set method()
              //add()method
//  const letter = new Set();
//  letter.add("a");
//  letter.add("b");
//  letter.add("c");

//  console.log("the set has "+ letter.size +" values.");


//  const letters = new Set(["a","b","c","d"]);
//  let text ="";
//  for(const x of letters){
//     console.log(text += x );
//  }
  
//*has()method//
// const letters = new Set(["a","b","c"]);
// answer = letters.has("d");
// console.log("The answer is " + answer);

// *forEach() method//
// const letter = new Set(["a","b","c"]);
// letters.forEach (function(value) {
//  console.log(value);
//   })

  //values() method//

  // const letter = new Set(["a","b","c"]);
  // const myIterator = letter.values();
  // for(const entry of myIterator){
  //   console.log(entry);
  // }


  // 9.map 
  //*new map()  passing tht array to new map()
//   const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
//   let numb = fruits.get("apples");
//   console.log("There are "+numb+" apples");

// //*set() and get() method
// const fruit = new Map();
// fruit.set("apples", 500);
// fruit.set("bananas", 300);
// fruit.set("oranges", 200);
// let num = fruit.get("oranges");
// console.log("There are "+num+ " oranges");

//map method

// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
  // * map.size() //
//fruits.size; 

//  *map.delete() //
//fruits.delete("apples");
//console.log(fruits);

// *map.entries() //
// for(const x of fruits.entries()){
//  console.log(x);
// }
  


// 10. type conversion //
 
//Implicit conversion - automatic
//Explicit conversion - manual

// let result;
// //Implicit conversion
// result = "3" + 2; 
// console.log(result, "-", typeof(result));

// result = "3" + true; 
// console.log(result, "-", typeof(result));

// result = "3" + null; 
// console.log(result, "-", typeof(result));


// // explicit conversion

// let x = "k";
// let y = "pizza";
// let z = "0";


// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);

// console.log(y, typeof y);

// console.log(z, typeof z);



// 11. errors
// const numerator= 100, denominator = a;

// try {  //
//      console.log(numerator/denominator);
    
//     console.log(a);
// }
// catch(error) { //
//     console.log('An error caught'); 
//     console.log('Error message: ' + error);  
// }

// finally{  //
//     console.log('Finally will execute every time');
// }

//throw
// const number = 40;
// try {
//     if(number > 50) {
//         console.log('Success');
//     }
//     else {
//         throw new Error('The number is low'); //
//     }
//     console.log('hello');
// }
// catch(error) {
//     console.log('An error caught'); 
//     console.log('Error message: ' + error);  
// }


// 12. this keyword

// this() inside the constructor
// function Person() {

//     this.name = 'Saran';
//     console.log(this);
// }
// let person1 = new Person();
// console.log(person1.name);

// //this keywork inside the object
// const person = {
//     name : 'Jack',
//     age: 25,
//     greet() {
//         console.log(this);
//         console.log(this.name);
//     }
// }

// person.greet();





//  13. Arrow function

// const addNumbers = (a, b) => a + b;
// const result = addNumbers(5, 3);
// console.log(result);

// //arrow function with no argument
// const sayHello = () => "Hello, World!";
// console.log(sayHello());  

// //arrow function with one argument
// const square = x => x * x;
// console.log(square(5));

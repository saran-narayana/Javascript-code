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
// for (let i = 50; i >= 1; i--) {
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
  


//10. type conversion //
 
// Implicit conversion - automatic
// Explicit conversion - manual

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
//  const numerator= 100, denominator = 'a';

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




// 14. classes - blueprints for object

//with classes
// class Person {
//   constructor(name, age) {
//       this.name = name;
//       this.age = age;
//   }
//   greet() {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// }
// let person1 = new Person("Jack", 30);
// let person2 = new Person("Tina", 33); 
// person1.greet();
// person2.greet();

// //without classes

// let person ={
//   name:"saran",
//   age: 23,
//   greet: function(){
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
//   }

//};
//person.greet();


// 15. constructor- is used to create initalize objects.

// function Person (){
//   this.name='saran',
//   this.age='23'
// }
// const person = new Person();
// console.log(person.name);
// console.log(person.age);

//*multiple object wiht constructor 

// function Person (){
//   this.name = 'john',
//   this.age = 20,

//   this.greet = function (){
//     console.log('hello');
//   }
// }

// const person1 = new Person();
// const person2 = new Person();

// console.log(person1.name); 
// console.log(person2.name);

//*constructor function paramenter

// function Person (person_name, person_age, person_gender) {
//    this.name = person_name,
//    this.age = person_age,
//    this.gender = person_gender,

//    this.greet = function () {
//        return (`Hi ${this.name}`);
//    }
// }
// const person1 = new Person("John", 23, "male");
// const person2 = new Person("Sam", 25, "female");

// console.log(person1.name); 
// console.log(person2.name);

//*build-in constructor

// use Object()
// const person = new Object({ name: "John", age: 30 });

// // use String() 
// const name = new String ("John");

// // use Number() 
// const number = new Number (57);

// //use boolean()
// const count = new Boolean(true);

// console.log(person);
// console.log(name);
// console.log(number);
// console.log(count);


//16. Inheritance-useful feature that allows code reusability

// parent class

// class Person { 
//   constructor(name) {
//       this.name = name;
//   }

//   greet() {
//       console.log(`Hello ${this.name}`);
//   }
// }
// // inheriting parent class
// class Student extends Person {
// }
// let student1 = new Student('Jack');
// student1.greet();


//*super() keyword

// class Person { 
//   constructor(name) {
//       this.name = name;
//   }
//   greet() {
//       console.log(`Hello ${this.name}`);
//   }
// }
// class Student extends Person {

//   constructor(name) {
  
//       console.log("Creating student class");
      
//       // call the super class constructor and pass in the name parameter
//       super(name);
//   }

// }
// let student1 = new Student('Jack');
// student1.greet();



// 17.Hoisting - function or variable

    //variable hoisting - variable is declared using (var,let,const)

    
    // console.log("this is javascript");
    // var message;

    // //function hoisting-allow to call the function before its declaration

    // greeting();

    // function greeting(){
    //   console.log("welcome to javascript.");

    // }

    // function Fruit() {
    //   this.name ="apple",
    //   this.rate =50;
    // }

    // const fruit = new Fruit();
    // console.log(fruit.name);
    // console.log(fruit.rate);


    //18. Getter and setter

          //*Getter*//
  //   const student = {
  //     firstName: 'Monica',
  //     get getName() {
  //         return this.firstName;
  //     }
  // };
  
  // console.log(student.firstName);
  
  // console.log(student.getName); 
  
  // console.log(student.getName());

          //*setter*//
//   const student = {
//     firstName: 'Monica',
//     set changeName(newName) {
//         this.firstName = newName;
//     }
// };

// console.log(student.firstName);

// student.changeName = 'Sarah';

// console.log(student.firstName);


// 19.Recursion

// function counter(count) {

//   console.log(count);

//   if(count > 1) {

//       count = count - 1;
//       counter(count);
//   } else {
//       return;
//   };
// };
// counter(5);


//20.Spread operator

//Spread operator inside array//
// let fruits = ["Apple", "Banana", "Cherry"];

// let moreFruits1 = ["Dragonfruit", fruits, "strawberry"];


// let moreFruits2 = ["Dragonfruit", ...fruits, "strawberry"];

// console.log(moreFruits1);
// console.log(moreFruits2);

//Spread operator with object

// let obj1 = { x : 1, y : 2 };
// let obj2 = { z : 3 };

// let obj3 = {...obj1, ...obj2};

// let obj4 = {obj1, obj2};

// console.log("obj3 =", obj3);
// console.log("obj4 =", obj4);

//spread operatop as part of function argument

// function sum(num1, num2 , num3) {
//   console.log(num1 + num2 + num3);
// }

// let num1 = [1, 3, 4, 5];

// sum(...num1); 


//21.Asynchronoes - allows your code to run in the background without blocking the execution of other code.

//1.set timerout()//

// function time() {
//   console.log('Hello world');
// }

// setTimeout(time, 3000);
// console.log('This message is shown first');

//cleartimerout()

// let count = 0 ;
// function increaseCount(){

//     count += 1;
//     console.log(count)
// }

// let id = setTimeout(increaseCount, 3000);
// clearTimeout(id); 
// console.log('setTimeout is stopped.');


//*2.callback function//

// function greet(name, callback) {
//   console.log('Hi' + ' ' + name);
//   callback();
// }

// function callMe() {
//   console.log('I am callback function');
// }
// greet('Peter', callMe)


//3.set interval() repeats a block of code//

// function greet() {
//   console.log('Hello world');
// }

// setInterval(greet, 1000);

//(2example)

// function showTime() {
//   let dateTime= new Date();

//   let time = dateTime.toLocaleTimeString();

//   console.log(time)
//
//}

//(3 example)

// let display = setInterval(showTime, 5000);

// function greet(name, lastName) {
//   console.log('Hello' + ' ' + name + ' ' + lastName);
// }

// setInterval(greet, 1000, 'John', 'Doe');



//22.oops concepts

  //(1*class)

// //Declaring class  
// class Employee  
//   {  
// //Initializing an object  
//     constructor(id,name)  
//     {  
//       this.id=id;  
//       this.name=name;  
//     }  
// //Declaring method  
//     detail()  
//     {  
//   console.log(this.id+" "+this.name)  
//     }  
//   }  
// //passing object to a variable   
// var e1=new Employee(101,"Martin Roy");  
// var e2=new Employee(102,"Duke William");  
// e1.detail(); 
// e2.detail();  

// (1*object) ()

// var emp=new Object();  
// emp.id=101;  
// emp.name="Ravi Malik";  
// emp.salary=50000;  
// console.log(emp.id+" "+emp.name+" "+emp.salary); 


      // (2*encaplusation)

// function Student(name,marks)  
// {  
//   var s_name=name;  
//   var s_marks=marks;  
//   Object.defineProperty(this,"name",{  
//     get:function()  
//     {  
//       return s_name;  
//     },  
//   set:function(s_name)  
//   {  
//     this.s_name=s_name;  
//   }  
    
// });  
   
//     Object.defineProperty(this,"marks",{  
//     get:function()  
//     {  
//       return s_marks;  
//     },  
//   set:function(s_marks)  
//   {  
//     this.s_marks=s_marks;  
//   }  
    
// });  
    
// }  
//   var stud=new Student("John",80);  
//   console.log(stud.name+" "+stud.marks);  


  //(3*polymorphism)

//   class A  
//   {  
//      display()  
//     {  
//       console.log("A is invoked");  
//     }  
//   }  
// class B extends A  
//   {  
//   }  
// var b=new B();  
// b.display(); 


// 23.Proxy -used to wrap an object and redefine various operation into object.

// let student = {
//   name: 'Jack',
//   age: 24
// }
// const handler = { };
// const proxy1 = new Proxy(student, {});

// console.log(proxy1);
// console.log(proxy1.name);

//get() handler
// let students = {
//   name: 'Jack',
//   age: 24
// }

// const handle = {
//   get(obj, prop) {

//       return obj[prop];
// }
// }
// const proxy = new Proxy(students, handle);
// console.log(proxy.name);

//set()handler
// let student = {
//   name: 'John'
// }
// let setNewValue = {
// set: function(obj, prop, value) {

//   obj[prop] = value;
//   return;
// }
// };
// let person = new Proxy(student, setNewValue);
// person.age = 25;
// console.log(person);

//24. Prototype

// function Car() {
//   console.log("Car instance created!");
// };
// Car.prototype.color = "Red";
// Car.prototype.drive = function () {
//   console.log(`Driving the car painted in ${this.color}...`);
// };

// console.log(`The car's color is: ${Car.prototype.color}`);
// Car.prototype.drive();
 
//prototype inheritance//
// function Car(model, year) {
//   this.model = model;
//   this.year = year;
// };

// let c1 = new Car("Mustang", 1964);
// let c2 = new Car("Corolla", 1966);

// Car.prototype.color = "Red";

// Car.prototype.drive = function() {
//   console.log(`Driving ${this.model}`);
// };

// console.log(`${c1.model} color: ${c1.color}`);  
// console.log(`${c2.model} color: ${c2.color}`);  
// c1.drive();
// c2.drive();

// 25.modules

//  import{Pi, getcircumference, getArea, getVolume } from './modules.js';
//  console.log(Pi);

//  const circumference = getcircumference(10);
//  const area = getArea(10);
//  const volume = getVolume(10);

//  console.log(`${circumference.toFixed(2)}cm`);
//  console.log(`${area.toFixed(2)}cm^2`);
//  console.log(`${volume.toFixed(2)}cm^3`);

//26. Array method()

//1* array length
     //syntax:Arr.lenght
// let city = ["California", "Barcelona", "Paris", "Kathmandu"];
// let len = city.length;
// console.log(len);


//2* concat()
   //Syntax: arr.concat(value1, value2, ..., valueN)
// let primeNumbers = [2, 3, 5, 7]
// let evenNumbers = [2, 4, 6, 8]
// let joinedArrays = primeNumbers.concat(evenNumbers);
// console.log(joinedArrays);

//3.constructor
  //syntax: Arr.constructor
  // let languages = ["JavaScript", "Java", "Python"];

  // let constructor = languages.constructor;
  // console.log(constructor);

  //4.copyord);within()
  //syntax:arr.copywithin(target,start,end)
//   let words = ["apple", "ball", "cat", "dog"];
//  words.copyWithin(3, 0);
// console.log(words);

//5.entries
//syntax:Arr.entries
// const alphabets = ["A", "B", "C"];
// let iterator = alphabets.entries();
// for (let entry of iterator) {
//   console.log(entry);
// }

//6.every()
//syntax:arr.every(callback(currentValue), thisArg)
// function checkAdult(age) {
//   return age >= 18;
// }
// const ageArray = [34, 23, 20, 26, 12]
// let check = ageArray.every(checkAdult);
// console.log(check);

//7.fill()
//syntax:arr.fill(value, start, end)
// var fruits = ['Apple', 'Banana', 'Grape'];
// fruits.fill("Cherry");
// console.log(fruits);

//8.filter()
//syntax:arr.filter(callback(element), thisArg)
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function checkEven(number) {
//   if (number % 2 == 0)
//     return true;
//   else
//     return false;
// }
// let evenNumbers = numbers.filter(checkEven);
// console.log(evenNumbers);

//9.find()
// let numbers = [1, 3, 4, 9, 8];
// function isEven(element) {
//   return element % 2 == 0;
// }
// let evenNumber = numbers.find(isEven);
// console.log(evenNumber);

//10.findindex()

// let numbers = [1, 3, 4, 9, 8];
// function isEven(element) {
//   return element % 2 == 0;
// }
// let evenNumber = numbers.find(isEven);
// console.log(evenNumber);

//11.flat()
// let numbers = [1, 2, [3, 4, [5, 6, [7, 8]]]]; 
// let flattenArray = numbers.flat(2);
// console.log(flattenArray);

//12.flatmap()
// let numbers = [1, 2, 3, 4, 5];
// const resultingArray = numbers.flatMap((x) => [x ** 2]);
// console.log(resultingArray);

//13.foreach()
// let numbers = [1, 3, 4, 9, 8];
// function computeSquare(element) {
//   console.log(element * element);
// }
// numbers.forEach(computeSquare);

//14.from()
// let array= Array.from("JavaScript");
// console.log(array); 

//15.inculdes();
// let languages = ["JavaScript", "Java", "C"];
// let check = languages.includes("Java");
// console.log(check);

//16.indexof()
// let languages = ["Java", "JavaScript", "Python", "JavaScript"];
// let index = languages.indexOf("JavaScript");
// console.log(index);

//17. isarray()
// let fruits = ["Apple", "Grapes", "Banana"];
// console.log(Array.isArray(fruits));

// let text = "Apple";
// console.log(Array.isArray(text));

//18.join()
// let message = ["JavaScript", "is", "fun."];
// let joinedMessage = message.join(" ");
// console.log(joinedMessage);

//19.keys()
// let alphabets = ["A", "B", "C"];
// let iterator = alphabets.keys();
// for (let key of iterator) {
//   console.log(key);
// }

//20.lastindexof()
// let priceList = [10, 8, 2, 31, 10, 31, 65];
// let lastIndex = priceList.lastIndexOf(31);
// console.log(lastIndex); 

//21.arraymap()
// let numbers = [2, 4, 6, 8, 10];
// function square(number) {
//   return number * number;
// }
// let square_numbers = numbers.map(square);
// console.log(square_numbers);

//22.push()
// let city = ["New York", "Madrid", "Kathmandu"];
// city.push("London");
// console.log(city);

//23.reverse()
// let numbers = [1, 2, 3, 4, 5];
// let reversedArray = numbers.reverse();
// console.log(reversedArray);

//24.reduceright()
//let numbers = [1, 2, 3, 4];
// function sum_reducer(accumulator, currentValue) {
//   return accumulator + currentValue;
// }
// let sum = numbers.reduceRight(sum_reducer);
// console.log(sum);

//25.pop()
// let cities = ["Madrid", "New York", "Kathmandu", "Paris"];
// let removedCity = cities.pop();

// console.log(cities);   
// console.log(removedCity);


//Problem Solving on Array method

//  var is_array = function(input) {
//   if (toString.call(input) === "[object Array]")
//     return true;
//   return false;   
//     };
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));


//map()
// let x = [1, 2, 3, 4];
// console.log("Original array:")
// console.log(x)
// let y = x.map(i => i);
// console.log("Clone of the said array:")
// console.log(y);

// filter()
// let x = [1, 2, 3, 4];
// console.log("Original array:")
// console.log(x)
// let y = x.filter(() => true);
// console.log("Clone of the said array:")
// console.log(y);

// toString(),join()
// myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.toString());
// console.log(myColor.join());
// console.log(myColor.join('+'));


//Arrow function
// const orders = [  
//   {id:1, item: "Smartphone", quantity:1},
//   {id:2, item: "A.C", quantity:2},
//   {id:3, item: "T.V", quantity:3},
// ]

// let result=orders.find((order) => order.id === 2)
// console.log(result);




//problem solving on looping

//1.example
// for(var x=0; x<=15; x++){
// if(x === 0){
//   console.log(x + " is even");
// }
// else if(x % 2 === 0){
//   console.log(x + " is even");
// }
// else{
//   console.log(x + " is old");
// }
// }

//2.example
// function compareNumbers(num1, num2) {
//   if (num1 > num2) {
//     return "The larger of " + num1 + " and " + num2 + " is " + num1 + ".";
//   } else if (num2 > num1) {
//     return "The larger of " + num1 + " and " + num2 + " is " + num2 + ".";
//   } else {
//     return "The values " + num1 + " and " + num2 + " are equal.";
//   }
// }
// var result = compareNumbers(5, 8);
// console.log(result);

// result = compareNumbers(10, 5);
// console.log(result);

// result = compareNumbers(7, 7);
// console.log(result); 

//example 3
// var a = 2154; 
// var b = 458;  
// var gcd;
// while (a!=b)
// {
// 	if (a>b)
// 	{
// 		a = a -b;
// 	}
// 	else
// 	{
// 		b = b - a;
// 	}
// }
// gcd = b;
// console.log(gcd);

//exapmle 4
// var sum = 0;
// for (var x = 0; x < 1000; x++) {
//     if (x % 3 === 0 || x % 5 === 0) {
//         sum += x;
//     }
// }
// console.log(sum); 

//exapmle 5
// var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

// var Avgmarks = 0;

// for (var i=0; i < students.length; i++) {
//         Avgmarks += students[i][1];
//         var avg = (Avgmarks/students.length);
// }

// console.log("Average grade: " + (Avgmarks)/students.length);
// if (avg < 60){
//  console.log("Grade : F");      
//  } 
//  else if (avg < 70) {
// console.log("Grade : D"); 
//  }
//  else if (avg < 80) 
//  {
//  console.log("Grade : C"); 
//   } 
//   else if (avg < 90) {
//   console.log("Grade : B"); 
//   } 
//    else if (avg < 100) {
//    console.log("Grade : A"); 
// }


//oops concept
  //1.inheritance- allow new class to inherit properties and method from existing class
                   // (help to code reusability)
//  class Animal{
//   alive = true;

//   eat(){
//     console.log(`this ${this.name} is eating.`);
//   }
//   sleep(){
//     console.log(`this ${this.name} is sleeping.`);
//   }
//  }
//  class Rabbit extends Animal{
//   name="rabbit";
//   run(){
//     console.log(`this ${this.name} is runnig`);
//   }
//  }
//  class Fish extends Animal{
//   name="fish";
//   swim(){
//     console.log(`this ${this.name} is swimming`);
//   }
//  }
//  class Hawk extends Animal{
//   name="hawk";
//   fly(){
//     console.log(`this ${this.name} is flying`);
//   }
//  }

//  const rabbit =new Rabbit();
//  const fish =new Fish();
//  const hawk =new Hawk();

//  console.log(fish.alive);
//  fish.eat();
//  fish.sleep();
//  fish.swim();

//2.Abstraction

// function Employee(name, age, baseSalary){
//   this.name = name;
//   this.age = age;
//   this.baseSalary = baseSalary;
//   let monthlyBonus = 1500;

//   let calculateFinalSalary = function(){
//       let finalSalary = baseSalary + monthlyBonus;
//       console.log ('Final Salary is : '+finalSalary);
//   }

//   this.getEmpDetails = function (){
//       console.log ('Name : '+this.name+' | Age : '+this.age);
//       calculateFinalSalary();
//   }
// }
// let emp1 = new Employee('John', 30, 2000);
// emp1.getEmpDetails();

// console.log ('abcd');


//3.Polymorphism - is ability to create a variable, a function, or an object that has more than one form.

// class Animal{

//   constructor(name){
//       this.name = name
//   }

//   eats(){
//       console.log (this.name+' eats food');
//   }
// }

// class Alligator extends Animal{
// eats(){
//       super.eats();
//       console.log (this.name+' eats fishes');
//   }
// }
// let murphy = new Alligator('Murphy');
// murphy.eats();

// //4.Encapsulation - is a process of binding the data (i.e. variables) with the functions acting on that data.
// class Employee{

//   setEmpDetails(name, id, phoneNo){
//       this.name = name;
//       this.id = id;
//       this.phoneNo = phoneNo;
//   }

//   getEmpName(){
//       return this.name;
//   }
//   getEmpId(){
//       return this.id;
//   }
//   getEmpPhoneNo(){
//       return this.phoneNo;
//   }

// }
// let emp1 = new Employee();
// emp1.setEmpDetails('John', 1001, 987890000);
// console.log (emp1.getEmpName());
// console.log (emp1.getEmpId());
// console.log (emp1.getEmpPhoneNo());
  

//Problem Solving on OOPS Concept
/*1.Write a JavaScript program to create a class called "Person" with properties for name, age and country. 
Include a method to display the person's details. Create two instances of the 'Person' class and display their details. */
// class Person{
//   constructor (name,age,country){
//     this.name = name;
//     this.age = age;
//     this.country=country;
//   }
//  displayDetails(){
//     console.log(`Name: ${this.name}`);
//     console.log(`Age: ${this.age}`);
//     console.log(`Country: ${this.country}`);
//   }
// }
// const person1 = new Person('Francisca Rohan', 23, 'USA');
// const person2 = new Person('Saran', 23, 'India');

// console.log('Person-1 Details:');
// person1.displayDetails();

// console.log('\n Person-2 Details:');
//  person2.displayDetails();

/*2.Write a JavaScript program to create a class called 'Rectangle' with properties for width and height.
 Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.*/

// class Rectangle{
//   constructor(width,height){
//     this.width = width;
//     this.height = height;
//   }

//   calculateArea(){
//     return this.width * this.height;
// }

// calculatePerimeter(){
//   return 2 * (this.width * this.height);
// }
// }
// const rectangle = new Rectangle(10,20);

// const area = rectangle.calculateArea();
// const perimeter = rectangle.calculatePerimeter();

// console.log(`Rectangle Area:${area}`);
// console.log(`Rectangle Perimeter:${perimeter}`);

/*3.Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. 
Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. 
Override the display method to include the number of doors. */
// class Vehicle{
//   constructor(make, model, year){
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

//   displayDetails(){
//     console.log(`Make: ${this.make}`);
//     console.log(`Model: ${this.model}`);
//     console.log(`Year: ${this.year}`);
//   }

// }
// class Car extends Vehicle {
// constructor(make, model, year, doors){
//   super(make, model, year);
//   this.doors = doors;
// }

// displayDetails(){
//   super.displayDetails();
//   console.log(`Doors: ${this.doors}`);
// }
// }

// const vehicle = new Vehicle('Ford', 'F-150', 2020);
// console.log('Vehile Details:');
// vehicle.displayDetails();

// const car = new Car('Honda', 'Accord', 2023, 4);

// console.log('\nCar Details:');
// car.displayDetails();

/*4.Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. 
Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class. */

// class Shape {
//   calculateArea() {
//     throw new Error("Method 'calculateArea()' must be overridden in subclasses");
//   }
// }

// class Circle extends Shape {
//   constructor(radius) {
//     super();
//     this.radius = radius;
//   }

//   calculateArea() {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// class Rectangle extends Shape {
//   constructor(width, height) {
//     super();
//     this.width = width;
//     this.height = height;
//   }

//   calculateArea() {
//     return this.width * this.height;
//   }
// }

// const circle = new Circle(7);
// const circleArea = circle.calculateArea();
// console.log(`Circle Area: ${circleArea}`);

// const rectangle = new Rectangle(8, 9);
// const rectangleArea = rectangle.calculateArea();
// console.log(`Rectangle Area: ${rectangleArea}`);

/* 5.Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. 
Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.*/ 

// class BankAccount {
//   constructor(accountNumber, balance) {
//     this.accountNumber = accountNumber;
//     this.balance = balance;
//     console.log(`A/c No.: ${accountNumber}`);
//     console.log(`Opening Balance: $${balance}`);    
//   }
//   deposit(amount) {
//     this.balance += amount;
//     console.log(`Deposited: $${amount}`);
//   }
//   withdraw(amount) {
//     if (amount <= this.balance) {
//       this.balance -= amount;
//       console.log(`Withdrawn: $${amount}`);
//     } 
//     else 
//     {
//       console.log(`Want to withdrawn: $${amount}`);
//       console.log('Insufficient balance');
//     }
//   }
//   displayBalance() {
//     console.log(`Account Balance: $${this.balance}`);
//   }
// }
// const account = new BankAccount('SB-123', 1500);
// account.deposit(500);
// account.withdraw(400);
// account.displayBalance();
// account.withdraw(1800);
// account.displayBalance();

/* 6.Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. 
Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. 
Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.*/
// class Shape {
//   calculateArea() {
//     throw new Error("Method 'calculateArea()' must be overridden in subclasses");
//   }
// }

// class Circle extends Shape {
//   constructor(radius) {
//     super();
//     this.radius = radius;
//   }

//   calculateArea() {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// class Rectangle extends Shape {
//   constructor(width, height) {
//     super();
//     this.width = width;
//     this.height = height;
//   }

//   calculateArea() {
//     return this.width * this.height;
//   }
// }
// const circle = new Circle(7);
// const circleArea = circle.calculateArea();
// console.log(`Circle Area: ${circleArea}`);

// const rectangle = new Rectangle(8, 9);
// const rectangleArea = rectangle.calculateArea();
// console.log(`Rectangle Area: ${rectangleArea}`);

/*7. Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. 
Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. 
Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.*/
// class Book {
//   constructor(title, author, publicationYear) {
//     this.title = title;
//     this.author = author;
//     this.publicationYear = publicationYear;
//   }
// displayDetails() {
//     console.log(`Title: ${this.title}`);
//     console.log(`Author: ${this.author}`);
//     console.log(`Publication Year: ${this.publicationYear}`);
//   }
// }
// class Ebook extends Book {
//   constructor(title, author, publicationYear, price) {
//     super(title, author, publicationYear);
//     this.price = price;
//   }
//   displayDetails() {
//     super.displayDetails();
//     console.log(`Price: $${this.price}`);
//   }
// }
// const ebook = new Ebook('Don Quixote', 'Miguel de Cervantes', 1605, 21.49);
//  ebook.displayDetails();

/*8.Write a JavaScript program that creates a class called 'Animal' with properties for species and sound. 
Include a method to make the animal's sound. Create a subclass called 'Dog' that inherits from the 'Animal' class and adds an additional property for color.
 Override the make sound method to include the dog's color. Create an instance of the 'Dog' class and make it make its sound. */
//  class Animal {
//   constructor(species, sound) {
//     this.species = species;
//     this.sound = sound;
//   }

//   makeSound() {
//     console.log(this.sound);
//   }
// }
// class Dog extends Animal {
//   constructor(species, sound, color) {
//     super(species, sound);
//     this.color = color;
//   }

//   makeSound() {
//     super.makeSound();
//     console.log(`Color: ${this.color}`);
//   }
// }
// const dog = new Dog('Dog', 'Woof woof!', 'Brown');

// dog.makeSound();

//objects methods//

//1.assign()  Syntax:  Object.assign(target, sources)  
// const obj1={
// a: 18,  
// b: 2,  
// c: 3  
// };  

// const obj2 = Object.assign({a: 3,c: 4, d: 5,g: 23,}, obj1);  

// console.log(obj2.c, obj2.d,obj2.g,obj2.a);  


//2.create()  Syntax: Object.create(prototype[, propertiesObject])  
// function fruits() {  
//   this.name = 'franco';  
//   }  
//  function fun() {  
//   fruits.call(this)  
// }  

//   fun.prototype = Object.create(fruits.prototype);  
//   const app = new fun();  
//   console.log(app.name);






//3.defineProperties()  Syntax:Object.defineProperties(obj, props)  
// const obj = {};  
// Object.defineProperties(obj, {  
//   property1: {  
//     value: 142,  
//     value: 422,  
//     value: 423,  
//     },  
//   property2: {  
//   value: 22,  
//   value: 12,}  
// });  
// console.log(obj.property1,obj.property2);  


//4.defineproperty()   Syntax:Object.defineProperty(obj, prop, descriptor)  
// const object1 = {};  
// Object.defineProperty(object1, 'property1', {  
//   value: 42,  
//   value: 52,  
//   value: 542,  
//   });  
// object1.property1 = 177;  
// console.log(object1.property1); 

// 5.entries  syntax:Object.entries(obj)  
// const obj = { 10: 'arry', 21: 'barry', 23: 'carry' };  
// console.log(Object.entries(obj)[2]);  

//6.values()     Syntax:Object.values(obj)  
// const object1 = {  
//   a: 'Rahul',  
//   b: 0,  
//   c:false  
// };  
// console.log(Object.values(object1));  

//7. is()     Syntax:Object.is(value1, value2);  
// const object1 = {};  
// console.log(Object.is(object1)); 

//8.freeze()  syntax:Object.freeze(obj)
// const object1 = {  
//   property1: 22  
// };  
// const object2 = Object.freeze(object1);  
// object2.property1 = 33;
// console.log(object2.property1);







//problem solving on conditional and looping statement

//1.Write a JavaScript program that displays the largest integer among two integers
// function compareNumbers(num1, num2) {
//   if (num1 > num2) {
//     return "The larger of " + num1 + " and " + num2 + " is " + num1 + ".";
//   } else if (num2 > num1) {
//     return "The larger of " + num1 + " and " + num2 + " is " + num2 + ".";
//   } else {
//     return "The values " + num1 + " and " + num2 + " are equal.";
//   }
// }
// var result = compareNumbers(5, 8);
// console.log(result);

// result = compareNumbers(10, 5);
// console.log(result);

// result = compareNumbers(7, 7);
// console.log(result);

//2.Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
// var x = -3;
// var y = 7;
// var z = 2;

// function getSign(value) {
//   if (value > 0) {
//     return "+";
//   } else if (value < 0) {
//     return "-";
//   } else {
//     return "zero";
//   }
// }
// var signX = getSign(x);
// var signY = getSign(y);
// var signZ = getSign(z);
// var overallSign = (signX === signY && signY === signZ) ? "+" : "-";

// console.log("The sign is " + overallSign); 

//3.Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results
// var x = 0;
// var y = -1;
// var z = 4;
// if (x > y && x > z) {
//     if (y > z) {
//         console.log(x + ", " + y + ", " + z);
//     } else {
//         console.log(x + ", " + z + ", " + y);
//     }
// } else if (y > x && y > z) {
//     if (x > z) {
//         console.log(y + ", " + x + ", " + z);
//     } else {
//         console.log(y + ", " + z + ", " + x);
//     }
// } else if (z > x && z > y) {
//     if (x > y) {
//         console.log(z + ", " + x + ", " + y);
//     } else {
//         console.log(z + ", " + y + ", " + x);
//     }
// }

//4.Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results. 
// var a = -5;
// var b = -2;
// var c = -6;
// var d = 0;
// var f = -1;

// if (a > b && a > c && a > d && a > f) {
//     console.log(a);
// } else if (b > a && b > c && b > d && b > f) {
//     console.log(b);
// } else if (c > a && c > b && c > d && c > f) {
//     console.log(c);
// } else if (d > a && d > c && d > b && d > f) {
//     console.log(d);
// } else {
//     console.log(f);
// } 

/*5.Write a JavaScript for loop that iterates from 0 to 15. For each iteration,
 it checks if the current number is odd or even, and displays a message on the screen. */
// for (var x = 0; x <= 15; x++) {
//   if (x === 0) {
//       console.log(x + " is even");
//   }
  
//   else if (x % 2 === 0) {
//       console.log(x + " is even");
//   }
  
//   else {
//       console.log(x + " is odd");
//   }
// } 

/*6.Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.*/
// var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

// var Avgmarks = 0;
// for (var i = 0; i < students.length; i++) {
//     Avgmarks += students[i][1];
//     var avg = (Avgmarks / students.length);
// }
// console.log("Average grade: " + (Avgmarks) / students.length);
// if (avg < 60) {
//     console.log("Grade: F");
// } else if (avg < 70) {
//     console.log("Grade: D");
// } else if (avg < 80) {
//     console.log("Grade: C");
// } else if (avg < 90) {
//     console.log("Grade: B");
// } else if (avg <= 100) {
//     console.log("Grade: A");
// } 

/*7.Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". 
For numbers multiples of both three and five print "FizzBuzz". */
// for (var i = 1; i <= 15; i++) {
//   // Check if the number is divisible by both 3 and 5
//   if (i % 3 === 0 && i % 5 === 0) {
//       console.log(i + " FizzBuzz");
//   }

//   else if (i % 3 === 0) {
//       console.log(i + " Fizz");
//   }
//   else if (i % 5 === 0) {
//       console.log(i + " Buzz");
//   }
//   else {
//       console.log(i);
//   }
// } 

/*8.Write a JavaScript program to construct the following pattern, using a nested for loop*/
// var x, y, chr;

// for (x = 1; x <= 6; x++) {

//     for (y = 1; y < x; y++) {
//         chr = chr + ("*");
//     }
//     console.log(chr);
//     chr = '';
// } 

/*9.Write a JavaScript program to find the Armstrong numbers of 3 digits. */

// function three_digit_armstrong_number() {
//   for (var i = 1; i < 10; ++i) {
//       for (var j = 0; j < 10; ++j) {
//           for (var k = 0; k < 10; ++k) {

//               var pow = Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3);
//               var plus = i * 100 + j * 10 + k
//               if (pow === plus) {
//                   console.log(pow);
//               }
//           }
//       }
//   }
// }

// three_digit_armstrong_number();



//(1).prototype//

//1.
// function display(n,a){
//   this.name=n;
//   this.age=a;

// }
// display.prototype.year="1st year";
// display.prototype.details=function(){
//   return this.name +" "+this.age+" "+this.year;
// };

// var s1=new display("Saran",23);
// var s2=new display("xyz",15);
// console.log(s1.details());

//2.
//function Car() {
//   this.color = "Red";
// };
// Car.prototype.color = "Blue";
// Car.prototype.wheels = 4;

// const c1 = new Car();

// console.log(`The car's color is ${c1.color}.`); 
// console.log(`The car has ${c1.wheels} wheels.`);

//3.
// function Employee(firstName,lastName)  
// {  
//   this.firstName=firstName;  
//   this.lastName=lastName;  
// }  
  
// Employee.prototype.fullName=function()  
//   {  
//     return this.firstName+" "+this.lastName;  
//   }  
  
// var employee1=new Employee("Martin","Roy");  
// var employee2=new Employee("Duke", "William");  
// console.log(employee1.fullName());  
// console.log(employee2.fullName());  



//(2).constructor method//

// class Employee {  
//   constructor() {  
//     this.id=101;  
//     this.name = "Martin Roy";  
//   }   
// }  
// var emp = new Employee();  
// console.log(emp.id+" "+emp.name);  

//example.
// class CompanyName  
// {  
//   constructor()  
//   {  
//     this.company="Javatpoint";  
//   }  
// }  
// class Employee extends CompanyName {  
//   constructor(id,name) {  
//    super();  
//     this.id=id;  
//     this.name=name;  
//   }   
// }     
// var emp = new Employee(1,"John");  
// console(emp.id+" "+emp.name+" "+emp.company);  




//(3). static method //
// class Test  
// {  
//   static display()  
//   {  
//     return "static method is invoked"  
//   }  
// }  
// console.log(Test.display());  

//example2
// class Test  
// {  
//   static display()  
//   {  
//     return "static method is invoked"  
//   }  
//   static display()  
//   {  
//     return "static method is invoked again"  
//   }  
// }  
// console.log(Test.display());  



//(4).type conversion//

 
//Implicit conversion - automatic
//Explicit conversion - manual

let result;
//Implicit conversion
// result = "3" + 2; 
// console.log(result, "-", typeof(result));

// result = "3" + true; 
// console.log(result, "-", typeof(result));

// result = "3" + null; 
// console.log(result, "-", typeof(result));


// explicit conversion

let x = "k";
let y = "pizza";
let z = "0";


x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);

console.log(y, typeof y);

console.log(z, typeof z);





//(5).Event handling

// const button = document.createElement('button');
// button.textContent = 'Click me';

// button.addEventListener('click', () => {
//   console.log('Button clicked!');
// });

// document.body.appendChild(button);

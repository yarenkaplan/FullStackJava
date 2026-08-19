// Single commet

/* multiple comment */

/*
1995 by Brendan Eich 
Single thread
web side running Nodejs structure then Server Side
*/

/*
Dynamics types
OOP
Cross Platform
Lightweight
*/

/*
Companies using JS
- Google
- eBay
- Facebook
- Linkedin
- Netflix
- PayPal
- E-Devlet
- Tesla
*/

/* JavaScript

Libraries            Framework
---------           -----------
jQuery              Angular
React               NodeJS
                    Vue js
*/

//**** output ****************************
// console.log('Console log');
// console.info('Console info');
// console.warn('Console warning');
// console.error('Console error');

// window.alert("Window alert")
// alert("test")

//**** USER ****************************
// var userVariable = prompt("Name and Surname");
// document.write("Name and Surname: " + userVariable+ "<br/>Next Line");

// "" double quotes
// '' single quotes
// `` backtick

//**** USER ****************************
// var globalVariable = 'Merhabalar';
// console.log(globalVariable);

// var globalVariable = 44;
// console.log(globalVariable);

// globalVariable = 44.23;
// console.log(globalVariable);

// globalVariable = true;
// console.log(globalVariable);

// Yapılmaz
// let localVariable = 44
// console.log(localVariable);

// let localVariable = 25;
// console.log(localVariable);

let localVariable = 44;
console.log(localVariable);

localVariable = 23;
console.log(localVariable);

const localVariable2 = 1453;
console.log(localVariable2);
localVariable2 = 99;
console.log(localVariable2);

//***** type *****
let data1 = "hello data!";
console.log(typeof data1);

let data2 = 44;
console.log(typeof data2);

let data3 = 44.32;
console.log(typeof data3);

let data4 = 3 > 1;
console.log(typeof data4);

//******* variable roles****
let $_data5 = "hello data!";
console.log($_data5);

//*****common object*****
let vocabulary = "I'm learning JS";
let condition = true;
let number = 44;
let floatingPoint = 44.32;
let object = {};
let arrayData = [4, 5, 6, 8, "hello", true];

//****** operators *****
let number1 = 23,
  number2 = 3;
console.log(number1 + number2);

//****** cast *****
let number6 = "20",
  number7 = 40;
console.log(Number(number6) + number7);
console.log(number6 + String(number7));

//****** string */
let vocabularyData = "hello, i am learning JS";
console.log(vocabularyData);

//***** function */

//1- without a parameter & void
function calculatorData1() {
  console.log("");
}
calculatorData();

//2-with parameter & void
function calculatorData2(data) {
  console.log("with param & void:" + data);
}
calculatorData2(data);

//3-with parameter & return
function calculatorData3(data) {
  return "with param & return:" + data;
}
const data10 = calculatorData3data(data);

//4-with parameter & return
function calculatorData4(data) {
    return "with param & void:" + data;
  }
  const data11 = calculatorData4(data);

  //**** FUNCTION INTERMEDIA ***************
// 1-Normal Function
function calculatorNormal() {
    console.log('Normal Function');
  }
  calculatorNormal();
  
  // 2-Anonymous Function
  const calculatorAnonymous = function () {
    console.log('Anonymous Function');
  };
  calculatorAnonymous();
  
  // 3-Arrow Function
  const calculatorArrowFunction=  () => {
    console.log('Arrow Function ');
  };
  calculatorArrowFunction();

  // 4-) Immedia Function
// ()(()=>{})

//condition
const condition2 = () => {  
    let number = 10;
    let result = number >0 ? "positive" : "negative";
}
condition2();

//array
const arrayDatas =() => {
    let city = ['İzmir', 'Ankara', 'İstanbul'];
    console.log(city);
    console.log(typeof city);
    for(let i=0; i < city.length; i++){
        console.log(city[i]);
    }
}
arrayDatas();

const arrayDatas2 = () => {
    let city = ["İzmir", "İstanbul", "Ankara"];
    city.sort();

    for(let temp in city){
        console.log(temp + " ==>" + city[temp]);

        console.log('${temp} ==> ${city[temp]}');
    }
}
arrayDatas2();

const arrayDatas3 = () => {
    let city = ["İzmir", "İstanbul", "Ankara"];
    city.sort();
    city.forEach((value, index,array) =>{
        console.log('${array}');
    })
};
arrayDatas3();


//object
const objectData = () => {
let person = {
    "name":"Yaren",
    "surname":"Kaplan",
    "number":123456789,
    "isLogin":true,
    "software":["Html5","Css3","Bootstrap5","Javascript"],
    "fullName": function (){
      console.log(`${this["name"]} ${this.surname}`);
      
    },
    "java":{
      name:"Java",
      year:26,
      version:25
    }
  };

  console.log(person);
  console.log(person.name);
  console.log(person.name.toUpperCase());
  console.log(person.java.name);

  for (let temp  in person){
    document.writeln(`${temp}: ${person[temp]}`)
  }
  
};
objectData();
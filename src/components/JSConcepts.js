
//Hoisting:
hoist =3;
console.log(hoist);
var hoist;

hoistingFunc();
function hoistingFunc() {
  console.log("This is a hoisting function");
}

function doSomething() {
  x=33;
  console.log(x)
  var x;
}

//higher order function
function higherOrder(fn){
  fn();
}
higherOrder(function(){console.log('hello world')});

function higherOrder2(){
  return function(){
    return 'do something';
  }
};
var x = higherOrder2();
x();

//this:
var obj={
  name:'pinky',
  getName: function() {
    console.log(this.name)
  }
}
obj.getName();

var getName = obj.getName;
var obj2 = {
name: 'pinky2',
getName
}
obj2.getName();

var obj3 = {
  address: 'Mumbai, india',
  getAddress: function() {
    console.log(this.address)
  }
}

obj3.getAddress();
var getAddress = obj3.getAddress;
var obj4 = {
  address: 'Mumbai, india'
}
obj4.getAddress(); //error

//call:
function sayHello(){
  return `Hello, ${this.name}`
}

var obj = {name:'Abhi'};
console.log(sayHello.call(obj))

//another call ex:
var person = {
  name: 'Abhi',
  age: 2,
  getAge:function(){
    console.log(this.age)
  }
}
var person2 = {
  age:3
}
person.getAge.call(person2);

//another ex:
function saySomething(message) {
  return this.name + 'is' + message;
}
var person3 = {name: 'John'};
saySomething.call(person3, 'awesome'); //john is awesome

//apply:
saySomething.call(person3, ['awesome']);

//bind:
//this methos returns a new function

// closures: are functions where the innerf unctions have access to the outer functions variables
function outer() {
    let name='abhi';
    function testName() {
        console.log(name);
    }
    return testName;
}

let result = outer();
console.log(outer);

//another ex:
function greet(){
    let name='john';
    function displayName(){
        console.log(name);
        let age=29;
        function displayAge(){
            console.log(age);
        }
        return displayAge;
    }
    return displayName;
}

let result1 = greet();

//callback functions:
function divideByHalf(sum){
console.log(sum/2);
}
function multiply(sum){
    console.log(sum * 2);
}
function calculate(num1, num2, callback){
    let sum = num1+num2;
    callback(sum)
}

divideByHalf(10);
multiply(10);
calculate(10, 20, divideByHalf);
calculate(10, 20, multiply);


//Promises:
const placeOrder = (drink) => {
    return new Promise((resolve, reject) => {
        if(drink === 'coffee'){
            resolve('coffee isarrived')
        } else {
            reject('coffee is not arrived')
        }
    })
}
placeOrder('coffee')
.then((res)=> console.log(res))
.catch((err)=> console.log(err));

//another ex:
const taxiArrives = (arrived) => {
    return new Promise((resolve, reject) => {
        if(arrived){
            resolve('taxi is arrived')
        } else {
            reject('taxi is not arrived')
        }
    })
}
taxiArrives('arrived')
.then((res) => console.log(res))
.catch((err) => console.log(err));
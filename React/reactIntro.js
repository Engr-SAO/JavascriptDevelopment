//ES6 in react 
// classes in React
class Car {
    constructor(name) {
      this.brand = name;
    } //constructor initialization

    present() {
        return 'I have a ' + this.brand;
      } // method present
  }

  const mycar = new Car("Ford"); //object creation: Note the case of the variables

  mycar.present(); //uses method

  //inheritance using extend
  class Model extends Car {
    constructor(name, mod) {
      super(name);
      this.model = mod;
    }  
    show() {
        return this.present() + ', it is a ' + this.model
    }
  }
  const mycar1 = new Model("Ford", "Mustang");
  mycar.show();

  //arrow function in Js
  hello = function() {
    return "Hello World!";
  }//Normal function

  hello = () => {
    return "Hello World!";
  } //can be replaced as a function like this

  hello = () => "Hello World!"; //a function with a statement can be replaced and written in this way

  hello = (val) => "Hello " + val; //a parameter can also be passed in the function

  //variable definition
  var k = 10; //has a function scope , not a block slope
  let g  = 6; //a block scope version of var..
  const v = 30; //a constant value; cannot be change

  //Array usage
  const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>) // use .map() to create item

//array destruction
const vehicles = ['mustang', 'f-150', 'expedition'];

// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];


//new way of assigning
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;

// the order is very important
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car,, suv] = vehicles;

//how array retun really come handy

function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
  
    return [add, subtract, multiply, divide];
  }
  
  const [add, subtract, multiply, divide] = calculate(4, 7);c

  // destructing array
  const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
  }
  
  myVehicle(vehicleOne);
  
  function myVehicle({type, color, brand, model}) {
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
  }

  //Nexted array destructing
  const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red',
    registration: {
      city: 'Houston',
      state: 'Texas',
      country: 'USA'
    }
  }
  
  myVehicle(vehicleOne)
  
  function myVehicle({ model, registration: { state } }) {
    const message = 'My ' + model + ' is registered in ' + state + '.';
  }
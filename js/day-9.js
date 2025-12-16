// // oops - object oriented programming   // inheritance

class Vehicle{
    constructor(name, year, color){
        this.name = name
        this.year = year
        this.color = color
    }

    info(){
        return `name is  ${this.name}, year is ${this.year} and color is ${this.color}`
    }
}
class Car extends Vehicle{
    display(){
        return `this is a car ${this.name}`
    } 
}
class Bus extends Vehicle{
    display2(){
        return `this is a car ${this.name}`
    } 
}

let car = new Car('BMW', 2020, 'red')
let car2 = new Vehicle('Benz', 2025, 'black')

console.log(car2.display())



// class Car {
//     constructor(make, model, year) {
//       this.make2 = make;
//       let _model = model;
//       let _year = year;
  
//       this.getCarDetails = function() {
//         return `${this.make2} ${_model}, ${_year}`;
//       };
  
//       this.updateModel = function(newModel) {
//         _model = newModel;
//       };
//     }
//   }
//   class Bus extends Car{
//     drive(){
//       return `${this.make2} ${this._model}, ${this._year}`;
//     }
//   }
//   const myCar = new Bus('Toyota', 'Corolla', 2020);
  
//   console.log(myCar.getCarDetails()); 
  
//   // myCar.updateModel('Camry');
  
//   console.log(myCar.getCarDetails()); 
  
//   // console.log(myCar.drive()); 
//   console.log(myCar._model)



// class CoffeeMachine {
//     #boilWater() {
//       console.log("Boiling water...");
//     }
  
//     #grindBeans() {
//       console.log("Grinding coffee beans...");
//     }
  
//     #brewCoffee() {
//       console.log("Brewing the coffee...");
//     }
  
//     #pourInCup(a, b) {
//       return a+b
//     }
  
//     makeCoffee() {
//       console.log("Boiling water...");
//       this.#boilWater();
//       this.#grindBeans();
//       this.#brewCoffee();
//       this.#pourInCup(23,45);
//       console.log("Your coffee is ready!");
//     }
//   }
//   class tea extends CoffeeMachine{
     
//   }
//   const myCoffeeMachine = new tea();
  
// //   myCoffeeMachine.makeCoffee();
  
//  console.log(myCoffeeMachine.boilWater())






// class Vehicle{
//     constructor(name, year, color){
//         this.name = name
//         this.year = year
//         this.color = color
//     }

//     info(){
//         return `name is  ${this.name}, year is ${this.year} and color is ${this.color}`
//     }
//     display(){
//         return `this is a car ${this.name}`
//     } 
// }
// class Car extends Vehicle{
//     display(){
//         return `this is a car child ${this.name}`
//     } 
// }
// class Bus extends Vehicle{
//     display(){
//         return `this is a car child ${this.name}`
//     } 
// }

// let car = new Car('BMW', 2020, 'red')
// let car2 = new Vehicle('Benz', 2025, 'black')

// console.log(car2.display())


// function add(n1, n2, n3){
//     if(n1 && n2 && n3){
//         return n1+ n2+ n3
//     }
//     else if(n1 && n2){
//         return n1 * n2
//     }
//     else{
//         return n1
//     }

// }
// console.log(add(2, 3, 5))
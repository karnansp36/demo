class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  fullname(){
    return this.name +" "+ this .year
  }    //methods

  add(a, b){
    return a+b
  }
}

const myCar = new Car("Ford", 2014);
let newCar = new Car("Benz", 2020);
console.log(newCar)
console.log(myCar.add(20,30))

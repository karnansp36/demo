// let obj = {name:'john', age:20, getname(){
//     console.log('hello john')
// }}


// obj.getname()



// const person = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
// }
// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }
// const person2 = {
//   firstName:"Mary",
//   lastName: "Doe"
// }

// // This will return "John Doe":
// let a = person.fullName.bind(person2)();
// console.log(a)
// let c = function(){

// }

// c()


//callback function

// c=10
// function add(a, b){
//     return a + b
    
// }

// function display(x,y,callback){
//     let total = callback(x,y)
//     console.log(total)

// }
// display(4,5,add)


// setTimeout 

// function greet(){
//     console.log('hello john')
// }


// console.log('start')
// setTimeout(greet,3000)
// console.log('end')


// function greet(){
//     console.log('hello john')
// }


// console.log('start')
// setInterval(greet,1000)
// clearInterval()

// let count =0
// let id = null
// console.log('start')
// id = setInterval(run,1000)
// function run(){
//     if(count >= 10){
//         clearInterval(id)
//     }
//     else{
//         console.log('hello john')
//         count++
//         console.log(count)
//     }
// }

// console.log('end')


// let a = 20

// function sum(){
//     let b = 30
//     console.log(a + b)
//     function add(){
//         let c = 40
//         console.log(a + b + c)
//     }
    
//     add()
// }
// sum()
// console.log(a+b)



let person1 ={name:'john', age:20}
let person2 ={name:'john', age:20}
let person3 ={name:'john', age:20}


class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    fullname(){
        return this.name + ' ' + this.age
    }

    info(){
        return `name is ${this.name} and age is ${this.age}`
    }

}

let p1 = new Person('john', 20)
let p2 = new Person('peter', 30)
console.log(p1)
console.log(p2.info())

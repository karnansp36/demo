
// a = 46
// b= 41
// console.log(a<=b)

// //primitive data types

// a = 34  // Numbers  
// b = "23" // string
// c = true // Boolean 
// d = null // null
// e = undefined //undefined

// // composite data types

// arr = [34,45,'john', true,34] // Array / object
//     // 0   1  2       3    4
// console.log(arr[2])

// obj = {name:'john', age:23, job:'developer', wroking:true} //objects
// console.log(obj.job)




// a = 41
// b= 41
// console.log('and :',a!=b && a>=b && a == 41)
// console.log('or :',a!=b|| a>=b || a == 42)
// console.log('not :',!(a!=b))
// // And  - &&
// // true * true = true
// // false * true = false 
// // true * false = false
// // false * false = false

// //Or  -  ||
// // true * true = true
// // false * true = true 
// // true * false = true
// // false * false = false

// // not -   !

// // true = false
// // false = true

// a =10
// b ="20"
// console.log(a+b)




//var  --  function scope, redclare and reassign

// var c =20
// var c = 50
// c= 200
// console.log(c)
// {

//    var c =50
//    console.log(c)
// }
// function add(){
//    var c =100
//    console.log(c)
// }
// add()

// console.log(c)


//let  --  block scope, reassign and cannot redaclare
// let c =20

// c= 200
// console.log(c)
// {

//    let c =50
//    console.log(c)
// }
// console.log(c)
// function add(){
//    let c =100
//    console.log(c)
// }
// add()

// console.log(c)




//const  --  block scope, cannot reassign and cannot redaclare
const c =20


console.log(c)
{

   
   console.log(c)
}
console.log(c)
function add(){
   const c =100
   console.log(c)
}
add()

console.log(c)
let a ='     Hello world     '

console.log(a.trim())
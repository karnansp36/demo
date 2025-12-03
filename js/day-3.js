// function add(a, b, box){   // parameter
//     console.log(a, b, box)

// }

// add(20, 10, 'big') // arguments
// add(30, 10, 'small') //  function invoking/ invocation/ triggering/ calling


// // Regular function
// function add(a, b){   
//     console.log(a, b)

// }

// add(10,10)

// // Anonymous function
// let sum = function (a){
//     console.log(a)
// }
// sum(30)

// //Arrow function    

// let sum2 = (a) =>{
//     console.log(a)
// } 

// sum2(50)

// self invoking
// (function add(a){
//     console.log(a)
// })(100)

// function add(a,b){
//     console.log(a+b)
//     console.log('after return')
//     return a
// }


// let total = add(30, 20)
// let avg = total/2
// console.log("average :", avg)

// console.log(Math.max(34,45,56,67,78,4))




// function add(a){
    
//     return a
// }


// let total = add(30, 20)



//  string and string methods

let a =' This is javascript '
let b= ' second string'
console.log(a.length)
console.log(a.charAt(2))
console.log(a.charCodeAt(0))
console.log(a.at(-2))
console.log(a.at(-2))
console.log(a[2])
console.log(a.slice(2,10 ))
console.log(a.substring(2,10))
console.log(a.substr(2,2))
console.log(a.toUpperCase())
console.log(a.toLowerCase())
console.log(a.concat(" string added", b))
console.log(a + " string added" + b)
console.log(a.trimStart())
console.log(a.trimEnd())
console.log(a.trim())
c = '24324'
console.log(c.padStart(15, 'X' ))
console.log(c.padEnd(15, 'X' ))


console.log(a.repeat(3))


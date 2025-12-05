// let arr =['Audi','Audi', 'BMW', 'Mercedes', 'Ferrari', 'Lamborghini','toyota','bus','car']
// let num =[34,100,9,67,3]
// // console.log(num.sort((a,b)=>b-a ))
// // console.log(num.reverse())
// console.log(num.toSorted((a,b)=>b-a ))
// console.log(num.toReversed())
// console.log(Math.min(34,56,67,78,7))
// console.log(Math.max(34,56,67,78,7))

// console.log(num)
// // 34 -100  = -66    [34,100,9,67,3]
// // 100 - 9  = 91      [3,9,34,67,100]
// // 100-67   = +            
// // 100 -3   = +     
// //34 -9     = + 
// // 34 -67  = -



// Array Iteration Methods

// let arr =[45,56,6,7,76]

// // for(let i=0; i<arr.length; i++){
// //     console.log(arr[i])
// // }

// arr.forEach((value, index, array)=>{
//     discount = value*0.05
//     console.log(value -discount)
// })

// function add(a,b,c){

// }

// add(23,0,[23,34,45])


product = [{name:"car", price:3000},{name:"bus", price:9000}]
product.forEach((value, index, array)=>{
    
    console.log(value.price)
})
console.log(product[0].price)




a ="car"
a += "bus"
a += "rocket"
console.log(a )

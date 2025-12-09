// let a =[34,45,6,76,78]

// let result = a.map((value, index,arr)=>{
//     console.log(value)
//     return value > 40

// })
// console.log(result)


// let a =['car', 'bus', 'train','flight','bus']
// let search ='bus'
// let result = a.filter((value, index,arr)=>{
//     console.log(value)
//     // if(value.includes(search)){

//     // }
//     return value.includes(search)

// })
// console.log(result)

// let a = [34,54,67,5,43]
// let sum = a.reduceRight((init, value, index,arr)=>{
//     return init += value

// })

// console.log(sum)



// let a = [34,54,67,5,43]
// let result = a.some((value, index)=>{
//     return value > 45
// })
// console.log(result)

// let a = Array.from("This is javascript")
// console.log(a)

// let c = [45,56,67,7]

// let key = c.entries()
// for(let [x,y] of key){

//     console.log(x,y)
// }

// let a =23456

// function Areverse(a){
//     return Number(a.toString().split('').reverse().join(''))

// }
// console.log(Areverse(a))

// let a =20.9
// console.log(Math.trunc(a))

// console.log(Math.floor(Math.random()*10000))

// let arr = ['better luck next time','you have won 5$ ', 'sorry you have bad luck','just for fun', 'you have won 0$', 'joker', 'hero', 'you are too kind', 'fake person', 'actor']
// let a = Math.floor(Math.random()*10)
// console.log(a)
// console.log(arr[a])

// let a = -9
// console.log(Math.sign(a))
// console.log(Math.pow(a, 3))
// console.log(Math.sqrt(a))
// console.log(Math.abs(a))


function checkNumber(num) {
  if (num <= 0) {
    throw new Error("Number must be greater than zero.");
  }
  return num * 2;
}

try {
  console.log(checkNumber(10)); // This will work
//   console.log(checkNumber(-5)); // This will throw an error
  console.log(checkNumber(20)); // This will work
  let x= 20
  console.log(b)

} catch (error) {
  console.error("Caught an error:", error.message);
} finally {
  console.log("Execution finished.");
}

// console.log(b)

console.log('hello world')
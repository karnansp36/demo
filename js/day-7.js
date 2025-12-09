// let obj = {name:'john', age:20, working:true, profession:'developer', age:50}
// obj.name = 'peter'
// obj.nationality = 'indian'
// delete obj.name
// console.log(obj)


// let obj = {name:'john', age:20, working:true, profession:'developer'}
// let obj2 ={nationality:'indian', vehicle:'car'}

// Object.assign(obj, obj2)
// let arr = Object.entries(obj)
// console.log(obj)
// console.log(arr)

// for(let [x,y] of arr){
//     console.log(x,y)
// }

// let arr = [
//   [ 'name', 'john' ],
//   [ 'age', 20 ],
//   [ 'working', true ],
//   [ 'profession', 'developer' ],
//   [ 'nationality', 'indian' ],
//   [ 'vehicle', 'car' ]
// ]

// let obj = Object.fromEntries(arr)
// console.log(obj)

// let obj = {name:'john', age:20, working:true, profession:'developer', age:50}

// let key = Object.keys(obj)
// let value = Object.values(obj)

// // console.log(key)
// // console.log(value)

// let arr =[34,56,67,78]

// for(let x of arr){

// }
// for(let x in obj){
//     console.log(obj[x])
// }


// let product =[
//     {name:'car', price:30000, color:'red'},
//     {name:'bus', price:50000, color:'green'},
//     {name:'train', price:40000, color:'blue'},
//     {name:'flight', price:20000, color:'pink'}
// ]

// function display({price}){
//     return price > 25000 ?  "luxury" : "cheap"       ;
// }

// let result = Object.groupBy(product, display)
// console.log(result)


let obj = {name:'john', age:20, working:true, profession:'developer'}


Object.defineProperty(obj, "name",{
    value: 'peter',
    writable: false,
    enumerable: false,
    configurable: false 
})

Object.defineProperties(obj,{
    "name":{
        value: 'peter',
        writable: false,
        enumerable: false,
        configurable: false 
    },
     "age":{
        value: 30,
        writable: false,
        enumerable: false,
        configurable: false 
    }
    
})
console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
obj.name ='spiderman'
delete obj.name
console.log(obj)


console.log(Object.getOwnPropertyDescriptors(obj))

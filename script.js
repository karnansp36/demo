let a ="leetcode"
let arr = a.split("")
target = 9

let count = 0
let ind = 0
a.map((value, index)=>{
    a.map((x, i)=>{
        if(index == i){

        }
        else if(index!=i){
           if(value != x){
               return index
           }
        }
    })
})


console.log([ind, count])
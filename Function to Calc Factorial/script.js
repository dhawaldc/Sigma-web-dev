let a=6
function factorial(number){
    let arr=Array.from(Array(number+1).keys())//To make a new array
    let c=arr.slice(1,).reduce((a,b)=>{
        return a*b;
    })
    return c
}
console.log(factorial(a))

function factOf(number){
    let fac=1;
    for (let index = 1; index <= array.length; index++) {
        fac = fac*index;
        
    }
    return fac;
}
console.log(factOf(a))

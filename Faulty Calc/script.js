let random=Math.random();
console.log(random);
let a=prompt("Enter the first number")
let b=prompt("Enter the operation")
let c=prompt("Enter the second number")
let obj={
    "+":"-",
    "-":"+",
    "*":"/",
    "/":"*",
}

if(random>0.1){
    alert(`The result is ${eval(`${a}${b}${c}`)}`)
}
else{
    c = obj[c]
    alert(`The result is ${eval(`${a}${b}${c}`)}`)
}
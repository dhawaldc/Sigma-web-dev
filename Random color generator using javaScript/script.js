let boxes=document.querySelector(".container").children;
console.log(boxes);

function getRandomColor(){
    let var1=Math.ceil(0+Math.random()*255);
    let val2=Math.ceil(0+Math.random()*255);
    let val3=Math.ceil(0+Math.random()*255);
    return `rgb(${var1}, ${val2}, ${val3})`

}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor=getRandomColor();
    e.style.color=getRandomColor();
})

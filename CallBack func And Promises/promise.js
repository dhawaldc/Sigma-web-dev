let prom1=new Promise((resolve, reject) => {
    let a=Math.random();
    if(a<0.5){
        reject("No the random number is less than 0.5")
    }
    else{
        
        setTimeout(()=>{
            console.log('Yes i am resolved');
            resolve("Dhawal")
        }, 2000);
    }
    })
let prom2=new Promise((resolve, reject) => {
    let a=Math.random();
    if(a<0.5){
        reject("No the random number is less than 0.5 (2)")
    }
    else{
        
        setTimeout(()=>{
            console.log('Yes i am resolved 2');
            resolve("Dhawal 2")
        }, 1000);
    }
    })
// prom1.then((a)=>{
//     console.log(a) 
// }).catch((err)=>{
//     console.log(err);
    
// })
// let p3=Promise.all([prom2, prom1]);//both promise needs to be resolved then only it will give the value of both the promises otherwise it will give e
// p3.then((a)=>{
//     console.log(a);
    
// }).catch((e)=>{
//     console.log("Error is "+ e)
// })
// let p4=Promise.allSettled([prom2, prom1]);
// p4.then((a)=>{
//     console.log(a);
    
// }).catch((e)=>{
//     console.log("Error is "+ e)
// })
let p5=Promise.race([prom2, prom1]);
p5.then((a)=>{
    console.log(a);
    
}).catch((e)=>{
    console.log(e)
})
//settle means it donesnot matter if promise resolves or reject it just needs to work and give the value of that promise
//race means whichever promise is resolved first its value will be given as a result



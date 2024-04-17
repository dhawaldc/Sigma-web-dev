async function getData(){
    let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')
      let data=await x.json();//it parse the data from the api
      
      return data

}
async function main() {
    console.log("Loading Modules...");
  
    console.log("Do something  here..");
  
    console.log("Load Data  from server here.."); 
    let data = await getData(); 
  
    console.log(data);
  
    console.log("process data and display it on the screen");
    console.log("Task 2: ");
  }
  main();
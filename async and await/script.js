async function getData() {
  //async means it will be keep running in the background
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455);
    }, 3000);
  });
}
async function main() {
  console.log("Loading Modules...");

  console.log("Do something  here..");

  console.log("Load Data  from server here.."); //it will come from getdata function above
  //it should wait here  for a while before it can proceed further
  //let data=getData();
  // data.then((value)=>{
  //     console.log(data);

  //     console.log("process data and display it on the screen");//to process the data it needs to get data first
  //     console.log('Task 2: ');
  // })

  //The above code is first approach using primises to wait for data and then run the further below  code after getting the required data

  let data = await getData(); //the await keyword will make sure that it waits

  console.log(data);

  console.log("process data and display it on the screen");
  console.log("Task 2: ");
}
main();

const { error } = require("console");
const fs = require("fs");
console.log("started");
fs.writeFile("text.txt", "Hello wordl", () => {
  console.log("Done writing file");
  fs.readFile("text.txt",(error,data)=>{
    console.log(error,data.toString());
  })
});
fs.appendFile("text.txt"," kuch nhi duniya meha bhai",(e)=>{
    console.log(e);
})
console.log("Finished running code");
// console.log("Dhawal is a Hacker"); //this willrun first in console log
// console.log("I am also a hacker"); //this will run second in console log
// setTimeout(() => {
//   console.log("Hello Dhawal");
// }, 3000); //3 seconds after execution of this line
// console.log("This is the end of this file"); //this will run before set timeout function

const callback = (arg) => {
  console.log(`${arg} is a coder`);
};

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = () => {
    callback("Dhawal");
  };
  document.head.append(sc);
};
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)

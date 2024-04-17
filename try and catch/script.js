let a=prompt("Enter first number")//promt take string not integer
let b=prompt("Enter second number")
if(isNaN(a)||isNaN(b)){
    throw Error("Please enter valid input");//we made a error our self
}
let sum = parseInt(a)+parseInt(b);//string is converted to integer using parseint function
let x=1;
function main(){
try {
    console.log('The sum of two numbers is',sum*x);
    return true;
} catch (error) {
    console.log('Error occured');//the error was caught by try and catch block whichthe browser console gave us
    return false;
}
finally{
    console.log("the server is being closed");//if i dont write final and the try and catch is returning some values then this line of code will not work if we want to compulsarly want to execute this line we will write finally
}
}
main()

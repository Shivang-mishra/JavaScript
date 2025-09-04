function saymyname()
{
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("v");
    console.log("a");
    console.log("n");
    console.log("g");
}
// saymyname()
// function addtwonum(number1,number2)
// {
//     console.log(number1+number2);
    
// }
// addtwonum(3,null)
function addtwonum(number1,number2)
 {
    //  const result=number1+number2;
    return number1+number2
 }
// const result=   addtwonum(3,4)
// console.log("result:" ,result);


function loginuser(username="sam"){
    if (!username) {
        console.log("please enter the username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginuser("shivang"))
console.log(loginuser(" "))
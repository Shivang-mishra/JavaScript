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
// console.log(loginuser(" "))


function caclulatecartprice(val1,...num1)
{
    return num1;
}
// console.log(caclulatecartprice(2,200,400))



const user ={
    username:"shivang",
    price : 999,
}
function handleobj(anyobject){
    console.log(`username is ${anyobject.username}, price is ${anyobject.price}`);
    
}
// handleobj(user)
handleobj(
    {
        username:"sam",
        price:999
    }
)


const myarray=[200,3000,400,5000]
function returnsecondvalue(getarray)
{
    return getarray[2]
}
console.log(returnsecondvalue(myarray));

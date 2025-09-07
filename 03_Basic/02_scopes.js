
// var c= 300
let a = 300
if (true) {
    const a= 30
let b= 40
var c= 40
// console.log("inner:", a);

}
// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username="shivang"
    function two()
    {
        const price=900;
        // console.log(username);
        
    }
    // console.log(price);
    
    two()
}
one()


if (true) {
    const username= "shivang"
    if (username=="shivang") {
        const price=999
        // console.log(username + price);
        
    }
    // console.log(price);
    
}

// console.log(username);



         
// ++++++++++++++++++++++++intresting++++++++++++++++++++
console.log(addone(5))
function addone(num1) {
    return num1+1
}


const addtwo=function (num1) {
    return num1 + 2
}

console.log(addtwo(6));

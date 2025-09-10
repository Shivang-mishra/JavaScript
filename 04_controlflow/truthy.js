const useremail = []
if (useremail) {
    // console.log("it is empty");
    
}else
{
    // console.log("not empty");
    
}

// falsy value 
// false, NaN,0," ",-0,BigInt,null,undefined 


// truthy value 
// true, " ", 'false',[],function(){},"0" 

if (useremail.length==0) {
    // console.log("array is empty");
    
}

const emptyobj= {}
if (Object.keys(emptyobj).length==0) {
    // console.log("object is empty");
    
}


// nullish coaleshing oprerator (??) : null undefined 
let val1 
val1= 5 ?? 10
// console.log(val1);


// ternery operrator 


const teapricce = 100;
teapricce<=80 ? console.log("less than 80") :console.log("more than 80");


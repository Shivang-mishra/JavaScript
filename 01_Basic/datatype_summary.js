// primitive datatype 


// 7 types : - String ,  Number , Boolean, null ,Symbol,BigInt; 
const score = 100;
const scorevalue= 100.3;
const id= Symbol('123');
const anotherid= Symbol('123')
console.log( id == anotherid);



// concpet of memory 
// primitive (stack)   , nonprimitive(heap)
let name = "shivang"
let anothername= name;
anothername="mishra"
console.log(name);
console.log(anothername);

let user1={
    email: "shiavng@gmail.com",
upi:"oksbi"
}
let user2= user1;
user2.email="rudra@gmail.com"
console.log(user1.email);
console.log(user2.email);




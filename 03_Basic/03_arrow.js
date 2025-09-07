  const user ={
    username:"shivang",
    price : 999,

    welcomemessage: function () {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
    }
  }
//   user.welcomemessage()
  user.username="sam"
//   user.welcomemessage()
// console.log(this);

function one() {
    let username="shivang"
    // console.log(this.username);
    
}
// one()

// const chai= function () {
//    let username = "shivang"
//    console.log(this.username);
   
// }
// chai()
const chai=  ()=> {
   let username = "shivang"
   console.log(this.username);
   
}
// chai()





// const addtwo = (num1,num2)=>{
//     return num1+num2
// }
const addtwo = (num1,num2)=>  (num1+num2)
   

console.log(addtwo(3,8));

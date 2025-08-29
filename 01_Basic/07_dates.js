// ***********DATE***************


const mydate= new Date()
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);

let createnewdate= new Date(2025,0,23,5,3)
console.log(createnewdate.toLocaleString());


let mytimestamp= Date.now()
// console.log(mytimestamp);
// console.log(createnewdate.getTime());
console.log(Math.floor(Date.now()/1000));

let newdate= new Date()
console.log(newdate.getMonth());
console.log(newdate.getFullYear());
console.log(newdate.getDay());







// immediate invoked function expression (IIFE)

(function chai(){
    //named iife
console.log(`db connected`);
} )();

((name)=>{
    console.log(`DB connected two ${name}`);
    
})("shivang")


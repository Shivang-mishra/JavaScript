const number = [1,2,3,4,5,6,7,8]
// const newnumber = number.map( (nums)=> {return nums+10} )

const newnumber= number 
                       .map( (nums)=> nums*10)
                       .map( (nums)=>nums+1 )
                       .filter( (nums)=>nums>40 ) 
console.log(newnumber);

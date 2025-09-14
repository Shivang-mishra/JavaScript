const mynumber= [1,2,3]
// const total= mynumber.reduce(function (acc,nums){
//     console.log(`acc: ${acc} and nums ${nums}`)
    
// return acc+ nums;
// },3)

const mytotal = mynumber.reduce( (acc,curr)=> acc+curr,0 )
console.log(mytotal);

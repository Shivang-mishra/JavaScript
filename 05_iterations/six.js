// const coding = ["shivang","sarvang","harsh","rupesh"];
// const values= coding.forEach( (item)=>{
//     // console.log(item)
//     return item         
// } )
// console.log(values);



const myums = [1,2,34,5,7,8,9]
// const newnums = myums.filter((nums)=> nums>4)
// console.log(newnums);

const newnums= []
myums.forEach( (nums)=>{
    if (nums>4) {
        newnums.push(nums)
    }
} )
// console.log(newnums);


const Books = [
    {title:'book one',genre : 'fiction', publish:'1981',editin:'2004'},
    {title:'book two',genre : 'history', publish:'1990',editin:'2007'},
    {title:'book three',genre : 'fiction', publish:'2000',editin:'2009'},
    {title:'book four',genre : 'science', publish:'2005',editin:'2010'},
    {title:'book five',genre : 'nonfiction', publish:'2007',editin:'2011'},
    {title:'book six',genre : 'history', publish:'20210',editin:'2015'},
    {title:'book seven',genre : 'science', publish:'2015',editin:'2004'},
    {title:'book eight',genre : 'nonfiction', publish:'2020',editin:'2004'},
    {title:'book nine',genre : 'fiction', publish:'2025',editin:'2004'},
]

let userbook = Books.filter( (bk)=> bk.genre==='fiction' )
 userbook = Books.filter( (bk)=> bk.publish>='2000' )
console.log(userbook);



// **************Array={}*******
const marvel_heros= ["IRONMAN","THOR","HULK","CAPTION"]
const dc_heros = ["FLASH","BATMAN","AQUAMAN"]
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[4][1]);


const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);

const all_new_heros= [...marvel_heros,...dc_heros]
// console.log(all_new_heros);


const anotherarray= [2,4,5,1,[4,9,2],0,12,14,[65,8,9],8]
const real_another_array= anotherarray.flat(Infinity)
console.log(real_another_array);
console.log(Array.isArray("shivang"));
console.log(Array.from("shivang"));
let score1= 100;
let score2= 300;
let score4=500
let score5= 800
console.log(Array.of(score1,score2,score4,score5));



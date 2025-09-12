// ************ for off *****************
const arr = [1,3,4,5]
for (const element of arr) {
    // console.log(element);
    
}

const greeting = "hello shivang"
for (const element of greeting) {
    // console.log(`greeting of : ${element}`);
    
}


// maps


const  map = new Map()
map.set('IN',"INDIA")
map.set('UK',"UNITED KINGDOM")
map.set('USA',"AMERIKA")
map.set('ING',"INGLAND")
// console.log(map);


for (const [key,value] of map) {
    // console.log(key,":-" ,value);
    
}

const myobj={
    'game1':"polo",
    'game2':"hockey"
}
for (const [element,value] of myobj) {
    console.log(element,value);
    
}
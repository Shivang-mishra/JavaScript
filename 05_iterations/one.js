// ************** for **************** 
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best number");

    }
    // console.log(element);

}

for (let i = 0; i < 10; i++) {
    // console.log(`outer  loop value: ${i}`);
    for (let j = 0; j < 10; j++) {
        //   console.log(`inner loop value: ${j} and inner loop value ${i} `);
        //   console.log( i + "*" + j + '=' + i*j);
    }
}

let myarray = ["ironman", "thor", "captain"]
console.log(myarray.length);
for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    console.log(element);
}

//  break and continue 
for (let i = 0; i < 10; i++) {
    if (i==5) {
        console.log("5 is the best number");
        break;
        
    }
    console.log(`value of i is: ${i}`);
    
    
}
for (let i = 0; i < 10; i++) {
    if (i==7) {
        console.log("7 is the detected");
       continue;
        
    }
    console.log(`value of i is: ${i}`);
    
    
}

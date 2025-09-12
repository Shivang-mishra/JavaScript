const coding = ["js", "ruby", "java", "python"]
coding.forEach(function (val) {
    // console.log(val);
})

// coding.forEach( (item) =>{
//     console.log(item);

// } )
function printme(item) {
    // console.log(item);

}
coding.forEach(printme)

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);

})


const mycoding = [
    {
        langaugename: "javascript",
        langaugefilename: "js"
    },
    {
        langaugename: "python",
        langaugefilename: "py"
    },
    {
        langaugename: "c++",
        langaugefilename: "cpp"
    }
]
mycoding.forEach( (item)=>{
    // console.log(item.langaugename);
    console.log(`${item.langaugename} file name is:${item.langaugefilename} ` );
    
})

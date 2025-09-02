// singleton
// Object.create()


const juser= {
    name: "shivang",
    emial: "shivang@gmail.com",
      age:18,
      location: "azamgarh",
      islogedin: false,
      lastloginis: ["monday","tuesday","wednesday"]
       
}
// console.log(juser.emial);
// console.log(juser["emial"]);
// console.log(juser.name);
// juser.emial="mishra@gmail.com"
// Object.freeze(juser)
// juser.emial="shiva@gmail.com"
// console.log(juser);
juser.greeting=function()
{
  console.log("hello shivang");
  
}
console.log(juser.greeting());

juser.greetingtwo=function()
{
  console.log(`hello js user,${this.name}`);
  
}
console.log(juser.greetingtwo());



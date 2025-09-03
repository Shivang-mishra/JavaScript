// const tinderuser = new Object(); singelton object


const tinderuser = {}   //non-singleton

tinderuser.id = "123abc"
tinderuser.name = "shivang"
tinderuser.islogedin = false

// console.log(tinderuser);

const regularuser = {
    email: "mishrashivang@gmail.com",
    fullname: {
        userfullname: {
            firstnmae: "shivang ",
            lastname: "mishra",

        }

    }
}
// console.log(regularuser.fullname.userfullname.firstnmae);




const obj1={1:'a',2:'b',3:'c'}
const obj2={1:'d',2:'e',3:'j'}

// const obj3= Object.assign(obj1,obj2)

const obj3= {...obj1,...obj2}

// console.log(obj3);


const user= [
    {
        id: 1,
        name:"shivang"
    },
    {
        id : 2,
        email : "mishrashivang"
    }
]
user[1].email
// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));


const course = {
    coursename : "javascript",
    price : 999,
    courseinstructer: "shivang"
};

// console.log(course.price);   // 999
// console.log(course.courseinstructer); // "shivang"


const {courseinstructer:instructer}=course
 console.log(instructer)


//  API function 

// {
//     coursename : "javascript",
//     price : 999,
//     courseinstructer: "shivang"
// };





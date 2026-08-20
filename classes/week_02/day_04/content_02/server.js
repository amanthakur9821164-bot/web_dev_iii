const express = require("express");
const app = express();

const PORT = 3000


const students = [
    { rollno : 1 , name : "Aman"} ,
    { rollno : 2 , name : "hamaz"} ,
    { rollno : 3 , name : "CP"} ,
    { rollno : 4 , name : "vaseem"} ,
];

// Read Operation
app.get("/students", (req,res) => {
    res.json(students)
})


app.listen(3000, ()=> console.log("Server is running on PORT 3000"));



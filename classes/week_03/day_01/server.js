const express = require("express");
// Express framework ko import kar rahe hain

const app = express();
// Express ka application/server object bana rahe hain

const PORT = 3000;
// Server ke liye port number set kar rahe hain


app.use(express.json());
// Middleware: incoming JSON data ko read/parse karne ke liye


// ================= req.params =================

app.get("/:id", (req, res) => {
// GET route banaya; URL mein :id dynamic parameter hai

    const id = req.params.id;
    // URL se id ki value nikal rahe hain

    // console.log(req.url);
    // Request ka URL terminal mein print karega

    // console.log(req.method);
    // Request ka HTTP method (GET/POST etc.) print karega

    // console.log(req.headers);
    // Request ke headers terminal mein print karega
    console.log(id);
    // VS Code terminal mein id print karega

    res.send(`Your ID is ${id}`);
    // Postman mein id ke saath response bhejega

    // res.send("Hello World");
    // Client/Postman ko response bhej rahe hain

});


// ================= req.query =================

app.get("/", (req, res) => {
// "/" URL par GET request handle kar raha hai

    console.log(req.query.name);
    // URL query se name ki value nikal raha hai

    console.log(req.query.age);
    // URL query se age ki value nikal raha hai

    res.send("Hello World Again");
    // Client/Postman ko response bhej raha hai

});


// ================= req.body =================

app.post("/", (req, res) => {
// "/" URL par POST request handle kar raha hai

    const data = req.body;
    // Request body se JSON data nikal rahe hain

    console.log(data);
    // Body ka data terminal mein print kar rahe hain

    res.send("Hello World");
    // Client/Postman ko response bhej rahe hain

});


// ================= SERVER =================

app.listen(PORT, () => {
// Server ko port 3000 par start kar rahe hain

    console.log("Server is running on port 3000");
    // Server successfully start hone ka message

});
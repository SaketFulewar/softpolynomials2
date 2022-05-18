const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// -----------------------------------------------------------------MY GLOBAL VARIABLES
let formData;
app.use(express.static("src"));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.post("/",(req,res)=>{
    formData = JSON.stringify(req.body);
})

app.get("/data",(req,res)=>{
    res.write(formData);
    res.send();
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Your Server Is Up And Running On Port 3000");
})
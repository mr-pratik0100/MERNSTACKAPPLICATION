const express = require("express");
const App = express();
const cors = require('cors');


const bodyparser = require("body-parser");
const router = require("./router/routers")


App.use(bodyparser.urlencoded({extended:false}));
App.use(bodyparser.json());

//const cors =require('cors');
//Instead of writing CORS code(of 4 lines) normal install package cors and use  like ..... app.use(cors());
App.use(cors());


App.use("/",router);

App.listen(5000,()=>{
    console.log("server is running on port no 5000")
});



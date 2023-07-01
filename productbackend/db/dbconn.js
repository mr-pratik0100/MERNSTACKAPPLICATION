const mysql = require("mysql");

const mysqlconnection = mysql.createConnection({
    "host":"127.0.0.1",
    "user":"root",
    "password":"pratik",
    "database":"webservice",
    "port":3306
})

mysqlconnection.connect((err)=>{
    if(err){
        console.log("connection failed"+JSON.stringify(err))
    }else{
        console.log("connection succcessfully");
    }
})

module.exports=mysqlconnection;
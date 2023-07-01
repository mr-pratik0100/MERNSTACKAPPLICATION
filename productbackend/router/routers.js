const express = require("express");
const router = express.Router();
const db = require("../db/dbconn");

router.get("/products",(req,res)=>{
    db.query("select * from products",(err,data)=>{
        if(err){
            res.status(500).send("product not found"+JSON.parse(err));
        }else{
            res.send(data);
        }
    })
})

router.get("/products/:pid",(req,res)=>{
   
    db.query("select * from products where pid=?",[req.params.pid],(err,data)=>{
        if(err){
            res.status(500).send("product not found "+JSON.stringify(err));
        }else{
            res.send(data);
        }
    })
})

router.post("/products/createprod",(req,res)=>{
    let pid=req.body.pid;
    let pnme=req.body.pnme;
    let pprice=req.body.pprice;
    let pexpdate=req.body.pexpdate;
    let pdesc=req.body.pdesc;
    db.query("insert into products values(?,?,?,?,?)",[pid,pnme,pprice,pexpdate,pdesc],(err,data)=>{
        console.log(data);
        if(err){
            res.status(500).send("product not created"+JSON.stringify(err))
        }else{
            res.send("product created successfully");
        }
    })
})

router.delete("/products/deleteprod/:pid",(req,res)=>{
    db.query("delete from products where pid=?",[req.params.pid],(err,data)=>{
        if(err){
           res.status(500).send("product not found "+JSON.stringify(err));
        }else{
            res.send("deleted product successfully");
        }
    })
})

router.put("/products/updateprod",(req,res)=>{
    let pid = req.body.pid;
    let pnme= req.body.pnme;
    let pprice=req.body.pprice;
    let pexpdate=req.body.pexpdate;
    let pdesc=req.body.pdesc;
  
    db.query("update products set pnme=?,pprice=?,pexpdate=?,pdesc=? where pid=?",[pnme,pprice,pexpdate,pdesc,pid],(err,data)=>{
        console.log(data);
        if(err){
            res.status(500).send("product not updated "+JSON.stringify(err));
        }else{
            res.send("updated dta successfully");
        }
    })
})






module.exports= router;
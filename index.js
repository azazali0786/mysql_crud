const connection = require("./connection");
const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json())

app.get('/employees/:id',(req,res)=>{
    connection.query('SELECT * FROM employee Where id=?',[req.params.id],(err,rows)=>{
        if(err){
            console.log(err)
        }else{
            // console.log(rows)
            res.send(rows)
        }
    })
}) 

app.listen(3000,()=>console.log('Express server is running on port 3000'))

//const express=require('express');
//const router=express.Router();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "service auto"
});

exports.register=(req,res)=>{
    console.log(req.body);

    const {name,email,password,passwordConfirm} = req.body;
    console.log(password,passwordConfirm);
    con.query('SELECT email FROM admins WHERE email =?',[email],(error,results)=>{
        if(error){
            console.log(error);
        }

        if(results.length>0){
            return res.render('register.ejs',{
                message: 'That email is already in use.'
            })

        }
        else if(password!==passwordConfirm){
            return res.render('register.ejs',{
                message: 'The passwords do not match.'
            });
        }
        con.query('INSERT INTO admins SET ?',{name: name, email:email,password:password},(error,results)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
            return res.render('register.ejs',{
                message: 'User registered'
            });
        }
    })
    });}
    

    exports.login=(req,res)=>{
    console.log(req.body);
    const {email,password} = req.body;
    console.log(password);
    con.query('SELECT email FROM admins WHERE email =? and password=?',[email,password],(error,results)=>{
        if(error){
            console.log(error);
        }

        if(results.length>0){
            return res.render('index',{
                //message: 'That email is already in use.'
            })

        }
        else{
            return res.render('login.ejs',{
                message: 'User or password not correct'
            });
        }
    });}
    //res.send("Form submitted");

//module.exports = router;
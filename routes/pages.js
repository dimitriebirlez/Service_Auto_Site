const express=require('express');

const router=express.Router();

router.get('/',(req,res) =>{
    res.render('homepage');
});
router.get('/clientpage',(req,res) =>{
    res.render('clientpage.ejs',{
                message: null
            });
});

router.get('/insertClients',(req,res) =>{
    res.render('index',{
                message: null
            });
});

router.get('/insertAngajati',(req,res) =>{
    res.render('GestionareAngajati.ejs',{
                message: null
            });
});

router.get('/deleteClients',(req,res) =>{
    res.render('index',{
                message: null
            });
});

router.get('/gestionareAngajati',(req,res) =>{
    res.render('GestionareAngajati.ejs',{
                message: null
            });
});

router.get('/updateAngajati',(req,res) =>{
    res.render('GestionareAngajati.ejs',{
                message: null
            });
});

router.get('/deleteAngajati',(req,res) =>{
    res.render('GestionareAngajati.ejs',{
                message: null
            });
});

router.get('/login',(req,res) =>{
    res.render('login.ejs',{
                message: null
            });
});
router.get('/register',(req,res) =>{
    res.render('register.ejs',{
                message: null
            });
});

router.get('/searchCar',(req,res) =>{
    res.render('AfisareMasiniAngajati.ejs',{
                message: null
            });
});

module.exports=router;
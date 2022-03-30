const express = require('express');
const app = express();
const path = require('path');
const port = 5000;                  
var mysql = require('mysql');
const cors=require('cors');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "service auto"
});

con.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    console.log('db ' + con.state);
});

//   con.query("SELECT * FROM clienti", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });

const publicDirectory = path.join(__dirname, './public');
//console.log(__dirname);
app.use(cors());
app.use(express.static(publicDirectory));

app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.engine('html', require('ejs').renderFile);
app.set('view engine','html');


// app.get('/', (req, res) => {        //get requests to the root ("/") will route here
// //    res.render('index');      //server responds by sending the index.html file to the client's browser
//     res.render('homepage');
// });

// app.get('/register', (req, res) => {        //get requests to the root ("/") will route here
// //    res.render('index');      //server responds by sending the index.html file to the client's browser
//     res.render('register');
// });

//Define Routes
app.use('/',require('./routes/pages'));
//app.use(app.router);
//routes.initialize(app);
app.use('/auth',require('./routes/auth'));
app.use('/op',require('./routes/op'));
//module.exports=router;



app.get('/AfisareAngajatiComenzi', (req, res) => {        
    con.query("select a.nume,a.prenume,count(ac.angajatid) as nrcomenzi from angajati a join angajaticomenzi ac on ac.angajatid=a.angajatid join comenzi c on c.comandaid=ac.comandaid group by ac.angajatid order by nrcomenzi desc", function (err, result, fields) {
    if (err) throw err;
    console.log("---------------------------------------");
    //res.json(result);
    //var result = res.json(result);
    res.render('AfisareAngajatiComenzi.ejs',{result:result});
    //console.log(result);
  });
});



app.get('/AfisareClienti', (req, res) => {        
    con.query("SELECT * FROM clienti", function (err, result, fields) {
    if (err) throw err;
    console.log("---------------------------------------");
    //res.json(result);
    //var result = res.json(result);
    res.render('AfisareClienti.ejs',{result:result});
    //console.log(result);
  });
});

app.get('/AfisareAngajati', (req, res) => {        
    con.query("SELECT * FROM angajati", function (err, result, fields) {
    if (err) throw err;
    console.log("---------------------------------------");
    //res.json(result);
    //var result = res.json(result);
    res.render('AfisareAngajati.ejs',{result:result});
    //console.log(result);
  });
});

app.get('/AfisareComandaMaxima', (req, res) => {        
    con.query("SELECT Convert(b.pretfinal, Signed INTEGER) as pretmax,c.numecomanda,m.marca FROM bonuri b join masini m on b.masinaid=m.masinaid join comenzi c on c.masinaid=m.masinaid WHERE  Convert(b.pretfinal, Signed INTEGER) >= ALL(SELECT Convert(b2.pretfinal, Signed INTEGER) FROM bonuri b2 where pretfinal>0);", function (err, result, fields) {
    if (err) throw err;
    console.log("---------------------------------------");
    //res.json(result);
    //var result = res.json(result);
    res.render('AfisareComandaMaxima.ejs',{result:result});
    //console.log(result);
  });
});

app.get('/AfisareClientiComenzi', (req, res) => {        
    con.query("select cl.nume,cl.prenume,c.numecomanda from clienti cl join masini m on cl.ClientID=m.ClientID join comenzi c on m.MasinaID=c.masinaid ", function (err, result, fields) {
    if (err) throw err;
    console.log("---------------------------------------");
    //res.json(result);
    //var result = res.json(result);
    res.render('AfisareClientiComenzi.ejs',{result:result});
    //console.log(result);
  });
});

app.get('/AfisareMasiniPiese', (req, res) => {        
    con.query("select m.marca,m.model,p.numepiesa,p.producator,p.pretpiesa from masini m join comenzi c on c.masinaid=m.masinaid join piesecomenzi pc on pc.comandaid=c.comandaid join piese p on pc.piesaid=p.piesaid ", function (err, result, fields) {
    if (err) throw err;
    console.log("---------------------------------------");
    //res.json(result);
    //var result = res.json(result);
    res.render('AfisareMasiniPiese.ejs',{result:result});
    //console.log(result);
  });
});

app.get('/AfisarePieseSubJumate', (req, res) => {        
    con.query("SELECT numepiesa,producator,pretpiesa FROM piese p1 WHERE PretPiesa<=(SELECT AVG(pretpiesa) FROM piese where p1.NumePiesa=NumePiesa) ", function (err, result, fields) {
    if (err) throw err;
    console.log("---------------------------------------");
    //res.json(result);
    //var result = res.json(result);
    res.render('AfisarePieseSubJumate.ejs',{result:result});
    console.log(result);
  });
});

app.get('/AfisarePreturiFinale', (req, res) => {        
    con.query("select b.pretfinal, b.data, m.marca,m.model,cl.nume,cl.prenume from bonuri b join masini m on b.masinaid=m.masinaid join clienti cl on cl.clientid=m.clientid  ", function (err, result, fields) {
    if (err) throw err;
    console.log("---------------------------------------");
    //res.json(result);
    //var result = res.json(result);
    res.render('AfisarePreturiFinale.ejs',{result:result});
    //console.log(result);
  });
});

app.get('/AfisareAngajati', (req, res) => {        
      con.query("select a.Nume,a.Prenume,a.Salariu from Angajati a Inner Join AngajatiComenzi ac on a.AngajatID=ac.AngajatID", function (err, result, fields) {
    if (err) throw err;
    console.log("---------------------------------------");
    console.log(result);
  });
});

app.get('/AfisareAngajatiInutili', (req, res) => {        
      con.query("select a.nume, a.prenume from angajati a where a.angajatid not in (select distinct a2.angajatid from angajati a2, angajaticomenzi ac where a2.angajatid = ac.angajatid) and ManagerID is not null", function (err, result, fields) {
    if (err) throw err;
    console.log("---------------------------------------");
    console.log(result);
    res.render('AfisareAngajatiInutili.ejs',{result:result});
  });
});

app.get('/AfisareProcentaj', (req, res) => {        
      con.query(" SELECT Nume,Prenume, CONCAT(ROUND((salariu*100)/(SELECT sum(salariu) FROM angajati), 0), '%') as 'Procentaj din salariul tuturor angajatilor' FROM angajati", function (err, result, fields) {
    if (err) throw err;
    console.log("---------------------------------------");
    console.log(result);
    res.render('AfisareProcentaj.ejs',{result:result});
  });
});

app.get('/AfisareComenzi', (req, res) => {        
      con.query("SELECT * FROM comenzi", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
app.get('/AfisarePiese', (req, res) => {        
      con.query("SELECT * FROM piese", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.render('AfisarePiese.ejs',{result:result});
  });
});
app.get('/AfisareMasini', (req, res) => {        
      con.query("SELECT * FROM masini", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.render('AfisareMasini.ejs',{result:result});
  });
});
app.get('/AfisareMixt', (req, res) => {        
      con.query("SELECT * FROM clienti", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
var nr=200;
// app.post('/insertClients', (request, response) => {
//     const { name,prenume,email,nrtelefon} = request.body;
//     console.log(request.body);
//     const result = con.query("INSERT INTO clienti(nume,prenume,email,nrtelefon) VALUES(?,?,?,?);",[name,prenume,email,nrtelefon]);
//     //const result = con.query("INSERT INTO clienti(clientID,comandaid, nume,prenume,email,nrtelefon) VALUES(200,2,?,'X','X','X');",[name]);
//     result
//     .then(data => response.json({ data: data}))
//     .catch(err => console.log(err));
// });

app.post('/delete', (request, response) => {
    const { name } = request.body;
    console.log(request.body);
    const result = con.query("DELETE FROM clienti WHERE nume = ?",[name]);
    result
    .then(data => response.json({ data: data}))
    .catch(err => console.log(err));
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});

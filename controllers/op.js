var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "service auto"
});

exports.insertClients=(req,res)=>{
    console.log(req.body);
    const {name,prenume,email,nrtelefon} = req.body;
    const result = con.query("INSERT INTO clienti(nume,prenume,email,nrtelefon) VALUES(?,?,?,?);",[name,prenume,email,nrtelefon]);
    //const result = con.query("INSERT INTO clienti(clientID,comandaid, nume,prenume,email,nrtelefon) VALUES(200,2,?,'X','X','X');",[name]);
    //result
    //.then(data => response.json({ data: data}))
    //.catch(err => console.log(err));
    return res.render('index.html');
}


exports.insertAngajati=(req,res)=>{
    console.log(req.body);
    const {name,prenume,cnp,oras,judet,sex,datanasterii,dataangajarii,salariu} = req.body;
    const result = con.query("INSERT INTO angajati(nume,prenume,cnp,oras,judet,sex,datanasterii,dataangajarii,salariu) VALUES(?,?,?,?,?,?,?,?,?);",[name,prenume,cnp,oras,judet,sex,datanasterii,dataangajarii,salariu]);
    //const result = con.query("INSERT INTO clienti(clientID,comandaid, nume,prenume,email,nrtelefon) VALUES(200,2,?,'X','X','X');",[name]);
    //result
    //.then(data => response.json({ data: data}))
    //.catch(err => console.log(err));
    return res.render('GestionareAngajati.ejs');
}

exports.deleteClients=(req,res)=>{
    console.log(req.body);
    const {name,prenume} = req.body;
    const result = con.query("DELETE FROM clienti WHERE nume = ? and prenume=?;",[name,prenume]);
    
    return res.render('index.html');
}

exports.deleteAngajati=(req,res)=>{
    console.log(req.body);
    const {name,prenume} = req.body;
    const result = con.query("DELETE FROM angajati WHERE nume = ? and prenume=?;",[name,prenume]);  
    return res.render('GestionareAngajati.ejs');
}

exports.updateAngajati=(req,res)=>{
    console.log(req.body);
    const {name,prenume,salariu} = req.body;
    const result = con.query("Update angajati SET salariu=? WHERE nume = ? and prenume=?;",[salariu,name,prenume]);  
    return res.render('GestionareAngajati.ejs');
}

exports.updateClients=(req,res)=>{
    console.log(req.body);
    const {name,prenume,nrtelefon} = req.body;
    const result = con.query("Update clienti SET nrtelefon=? WHERE nume = ? and prenume=?;",[nrtelefon,name,prenume]);  
    return res.render('index');
}

exports.searchCar=(req,res)=>{
    console.log(req.body);
    const {name,prenume} = req.body;
    con.query("select m.marca,m.model,a.nume,a.prenume from masini m join comenzi c on m.masinaid=c.masinaid join angajaticomenzi ac on ac.comandaid=c.comandaid join angajati a on a.angajatid=ac.angajatid join clienti cl on cl.clientid=m.clientid where cl.nume = ? and cl.prenume = ?",[name,prenume],function (err, result, fields) {
    if (err) throw err;
    console.log("---------------------------------------");
    //res.json(result);
    //var result = res.json(result);
    res.render('AfisareMasiniAngajati.ejs',{result:result});
    console.log(result);
  });
    
}


exports.verifyCar=(req,res)=>{
    console.log(req.body);
    const {nrkm} = req.body;
    con.query("select m.marca,m.model,m.nrkilometri,c.numecomanda from masini m join comenzi c on m.masinaid=c.masinaid where m.nrkilometri>=?",[nrkm],function (err, result, fields) {
    if (err) throw err;
    console.log("---------------------------------------");
    //res.json(result);
    //var result = res.json(result);
    res.render('AfisareComandaNrKm.ejs',{result:result});
    //console.log(result);
  });
    
}
//module.exports = router;
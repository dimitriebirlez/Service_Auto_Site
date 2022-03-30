document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:5000')
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
    
});
var data= "<%= result %>";
const searchBtn = document.querySelector('#search-btn');
const searchBtn2 = document.querySelector('#search-btn2');
const searchBtn3= document.querySelector('#search-btn3');
const searchBtn4 = document.querySelector('#search-btn4');
const searchBtn5 = document.querySelector('#search-btn5');
const searchBtn6 = document.querySelector('#search-btn6');

searchBtn.onclick = function(){
  //fetch('http://localhost:5000/AfisareClienti');
   window.location.href = "http://localhost:5000/AfisareClienti";
  //location.reload();
}
module.exports=router;








searchBtn2.onclick = function(){
  fetch('http://localhost:5000/AfisareAngajati');
  location.reload();
}
searchBtn3.onclick = function(){
  fetch('http://localhost:5000/AfisareComenzi');
  location.reload();
}
searchBtn4.onclick = function(){
  fetch('http://localhost:5000/AfisarePiese');
  location.reload();
}
searchBtn5.onclick = function(){
  fetch('http://localhost:5000/AfisareMasini');
  location.reload();
}
searchBtn6.onclick = function(){
  fetch('http://localhost:5000/AfisareMixt');
  location.reload();
}







const addBtn = document.querySelector('#add-name-btn');
const deleteBtn= document.querySelector('#delete-name-btn');

addBtn.onclick = function () {
    const nameInput = document.querySelector('#name-input');
    const prenumeInput = document.querySelector('#name2-input');
    const emailInput = document.querySelector('#email-input');
    const nrtelefonInput = document.querySelector('#nrtel-input');
    const name = nameInput.value;
    const prenume = prenumeInput.value;
    const email = emailInput.value;
    const nrtelefon = nrtelefonInput.value;
    nameInput.value = "";
    prenumeInput.value = "";
    emailInput.value="";
    nrtelefonInput.value="";

    // fetch('http://localhost:5000/insert', {
    //     headers: {
    //         'Content-type': 'application/json'
    //     },
    //     method: 'POST',
    //     body: JSON.stringify({ name : name,prenume: prenume,email:email,nrtelefon:nrtelefon})
    // })
    // .then(response => response.json())
    // .then(data => insertRowIntoTable(data['data']));

    router.post('/insert',(req,res) =>{
    res.render('AfisareMasiniPiese.ejs',{
                message: null
            });
    body: JSON.stringify({ name : name,prenume: prenume,email:email,nrtelefon:nrtelefon})
}).then(response => response.json())
    .then(data => insertRowIntoTable(data['data']));
}


deleteBtn.onclick = function () {
    const nameInput = document.querySelector('#name-inputdelete');
    const name = nameInput.value;
    nameInput.value = "";
    fetch('http://localhost:5000/delete', {
              headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ name : name})
    })
    .then(response => response.json())
    .then(data => insertRowIntoTable(data['data']));;
}
// function Show(){
//   fetch('http://localhost:5000/AfisareClienti');
// }

console.log(data);
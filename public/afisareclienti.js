document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:5000/AfisareClienti')
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
    
});

module.exports=router;
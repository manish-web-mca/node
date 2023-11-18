console.log('client side js loaded..');
/*fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data);
    })
    
})

fetch('http://localhost:3000/weather?address=mumbai').then((response) => {
    response.json().then((data) => {
        console.log(data);
    })
    
})*/

const weatherSearch = document.querySelector('form');
const search = document.querySelector('input');

weatherSearch.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
    fetch('http://localhost:3000/weather?address='+location).then((response) => {
        response.json().then((data) => {
            console.log(data);
           document.getElementById('locdata').innerHTML = data;
        })
    
    })
});


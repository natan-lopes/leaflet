/*let myCustomColourUser = 'background-color: red';
const markerHtml = `
whidth: 3rem;
height: 3rem;
display: block;
left: -1.5rem;
top: -1.5rem;
position: relative;
border-radius: 3rem 3rem 0;
transform: rotate(45deg);*/


var map = L.map('map').fitWorld();
map.locate({setView: true, maxZoom: 16});
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    
}).addTo(map);








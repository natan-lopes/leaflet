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


/*var map = L.map('map').fitWorld();
var qq = map.locate({ setView: true, maxZoom: 100 });
console.log(qq)


function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);
*/

		// Personalizar css no mapa
		let myCustomColourUser = 'background-color: red;'
		const markerHtml = `
			width: 3rem;
			height: 3rem;
			display: block;
			left: -1.5rem;
			top: -1.5rem;
			position: relative;
			border-radius: 3rem 3rem 0;
			transform: rotate(45deg);
			border: 3px solid #FFFFFF;`
        
        
		// Coordenadas do Ponto A - Táxi
const coordTaxi = [-30.0272807, -52.9103464];
// Coordenadas do Ponto B - Usuário
const coordUser = [-30.022, -52.905];

// Iniciar o mapa com coordenadas do ponto A
const map = L.map('map').setView(coordTaxi, 10);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

// Personalizar Ponto na mapa com imagem do táxi.
const taxiIcon = L.icon({
    className: "taxi-pointers",
    iconUrl: './img/taxi.png',
    iconSize: [45, 45]
})
const taxiMarker = L.marker(coordTaxi, { icon: taxiIcon }).addTo(map);

// Personalizar Ponto na mapa com imagem do Usuário.
const userIcon = L.divIcon({
    className: "pointers",
    iconAnchor: [0, 24],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="${markerHtml}${myCustomColourUser}" />`
})
const userMarker = L.marker(coordUser, { icon: userIcon }).addTo(map);

function startService() {
    // Identifica a melhor rota para iniciar a viagem.
    L.Routing.control({
        waypoints: [
            L.latLng(coordTaxi[0], coordTaxi[1]),
            L.latLng(coordUser[0], coordUser[1])
        ]
    }).on('routesfound', function (e) {
        const route = e.routes[0];
        const routeCoordinates = route.coordinates;

        // Move o marcador do táxi ao longo da rota
        routeCoordinates.forEach(function (coord, index) {
            setTimeout(function () {
                taxiMarker.setLatLng([coord.lat, coord.lng]);
                // Identifica o final da viagem.
                if (index === routeCoordinates.length - 1) {
                    alert('Seu táxi acabou de chegar!')
                }
            }, 2000 * index)
        });

    }).addTo(map);
}

startService();







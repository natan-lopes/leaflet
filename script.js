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
map.locate({ setView: true, maxZoom: 100 });
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {

}).addTo(map);

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
        
        
		// Coordenadas do Ponta A - Táxi
		const coordTaxi = [-11.732997565990585, -61.78596675395966];
		// Coordenadas do Ponta B - Usuário
		const coordUser = [-11.73094, -61.7925];
        
		// Iniciar o mapa com coordenadas do ponto A
		const map = L.map('map').setView(coordTaxi, 10);

		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);


		// Personalizar Ponto na mapa com imagem do táxi.
		const taxiIcon = L.icon({
			className: "taxi-pointers",
			iconUrl: './img/taxi.png',
			iconSize: [45, 45]
		})
		const marker = L.marker(coordTaxi, { icon: taxiIcon }).addTo(map);

		function startService () {
			// Array de coordenadas. Simula o táxi enviando a localização para o APP.
			const latlng = [
				{ lat: -11.733, lng: -61.78595 },
				{ lat: -11.73379, lng: -61.78597 },
				{ lat: -11.73379, lng: -61.78597 },
				{ lat: -11.73381, lng: -61.78605 },
				{ lat: -11.73383, lng: -61.78613 },
				{ lat: -11.7338, lng: -61.78649 },
				{ lat: -11.7338, lng: -61.78659 },
				{ lat: -11.73383, lng: -61.78687 },
				{ lat: -11.7338, lng: -61.78715 },
				{ lat: -11.7338, lng: -61.78724 },
				{ lat: -11.73381, lng: -61.78808 },
				{ lat: -11.7338, lng: -61.79009 },
				{ lat: -11.73378, lng: -61.79223 },
				{ lat: -11.73378, lng: -61.79223 },
				{ lat: -11.73291, lng: -61.79224 },
				{ lat: -11.73291, lng: -61.79224 },
				{ lat: -11.7328, lng: -61.79223 },
				{ lat: -11.73279, lng: -61.79303 },
				{ lat: -11.73279, lng: -61.79303 },
				{ lat: -11.73094, lng: -61.79298 },
				{ lat: -11.73094, lng: -61.79298 },
				{ lat: -11.73094, lng: -61.7925 }
			]

		   // Personalizar Ponto na mapa com imagem do Usuário.
			const icon = L.divIcon({
				className: "pointers",
				iconAnchor: [0, 24],
				labelAnchor: [-6, 0],
				popupAnchor: [0, -36],
				html: `<span style="${markerHtml}${myCustomColourUser}" />`
			})
			var newMarker = L.marker([coordUser[0], coordUser[1]], { icon }).addTo(map);

			// Identifica a melhor rota para iniciar a viagem.
			L.Routing.control({
				waypoints: [
					L.latLng(coordTaxi[0], coordTaxi[1]),
					L.latLng(coordUser[0], coordUser[1])
				]
			}).on('routesfound', function (e) {
				// Loop de coordenadas. Simula o táxi enviando a localização para o APP.
				latlng.forEach(function (coord, index) {
					setTimeout(function () {
						marker.setLatLng([coord.lat, coord.lng]);
						// Identifica o final da viagem.
						if (coord.lat === coordUser[0] && coord.lng === coordUser[1]) {
							alert('Seu táxi acabou de chegar!')
						}
					}, 2000 * index)
				})

			}).addTo(map);
		};

		startService()






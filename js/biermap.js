
let map = L.map('biermap').setView([51.24296118765395, 4.438330635754], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var bierIcon = L.icon({
    iconUrl: './images/bier-icon.png',
 

    iconSize:     [40 ,40], // size of the icon

    iconAnchor:   [30, 30], // point of the icon which will correspond to marker's location

    popupAnchor:  [-10, -30] // point from which the popup should open relative to the iconAnchor
    
});



let marker = L.marker([51.24296118765395, 4.438330635754],{icon: bierIcon}).addTo(map);
marker.bindPopup("<strong>Bierwereld</strong><br>bierproeverij").openPopup()

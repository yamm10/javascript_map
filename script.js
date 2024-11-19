// JavaScript

console.log('Hello world!');

const map = L.map('map').setView([33.673559602452166, 130.4413491901698], 15);

//L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
   // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(map);

L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',}).addTo(map);

// Open Street Map hot
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
  }).addTo(map);

  const circle = L.circle([33.673559602452166, 130.4413491901698], {
    color: '#5f9ea0', //円の輪郭線の色
    fillColor: '#20b2aa', //円の塗りつぶしの色
    fillOpacity: 0.3, //塗りつぶしの不透明度
    radius: 400 //半径、メートルで指定
  }).addTo(map);

  circle.bindPopup("半径1kmの範囲");

  // 多角形の表示
const polygon = L.polygon([
    [33.711620473366594, 130.44901151508355],
    [33.67256444144832, 130.45060558589088],
    [33.68906279759082, 130.4295525898908]
  ], {
    color: '#808000',
    fillColor: '#6b8e23',
    fillOpacity: 0.3
  }).addTo(map);

  // クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);

//アイコン
const whiteIcon = L.icon({
    iconUrl: 'images/ico.png',
    shadowUrl: 'images/ico_shadow.png',
  
  iconSize:     [40, 40], // size of the icon
  shadowSize:   [40, 40], // size of the shadow
  iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
  shadowAnchor: [20, 40],  // the same for the shadow
  popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
  });
  
  L.marker([33.673559602452166, 130.4413491901698], { icon: whiteIcon }).addTo(map).bindPopup('こんにちは！<br><img src="images/img01.png" alt="img">').openPopup();

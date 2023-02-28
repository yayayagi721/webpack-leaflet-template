import L from "leaflet";
import "leaflet-css";
import "./style.scss";

var map = L.map("map-container");
map.setView([35.4, 136], 5);
L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png", {
  attribution:
    "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>",
}).addTo(map);

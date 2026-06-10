"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import { CITIES, COMPANY } from "@/lib/data";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const mainIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function LeafletMap() {
  return (
    <MapContainer
      center={[COMPANY.lat, COMPANY.lng]}
      zoom={12}
      style={{ height: "420px", width: "100%", borderRadius: "16px" }}
      aria-label="Carte des zones d'intervention d'Irshad Services"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      {/* Service radius circle */}
      <Circle
        center={[COMPANY.lat, COMPANY.lng]}
        radius={15000}
        pathOptions={{ color: "#0056B3", fillColor: "#0056B3", fillOpacity: 0.05, weight: 1.5 }}
      />

      {/* Markers for all cities */}
      {CITIES.map((city) => (
        <Marker key={city.name} position={[city.lat, city.lng]} icon={mainIcon}>
          <Popup>
            <div className="font-sans text-sm">
              <strong className="text-primary">{city.name}</strong>
              <br />
              <span className="text-neutral-500">Zone d&apos;intervention Irshad Services</span>
            </div>
          </Popup>
        </Marker>
      ))}

      {/* Main office marker with richer popup */}
      <Marker position={[COMPANY.lat, COMPANY.lng]} icon={mainIcon}>
        <Popup>
          <div className="font-sans text-sm min-w-[180px]">
            <strong className="text-primary text-base">{COMPANY.name}</strong>
            <br />
            {COMPANY.address}
            <br />
            {COMPANY.postalCode} {COMPANY.city}
            <br />
            <a href={`tel:${COMPANY.phoneTel}`} className="text-primary font-semibold">
              ☎ {COMPANY.phone}
            </a>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

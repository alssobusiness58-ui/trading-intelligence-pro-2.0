import React, { useState } from "react";

const markets = [
  { name: "US30", category: "INDICES", price: "En attente", change: "—" },
  { name: "US100", category: "INDICES", price: "En attente", change: "—" },
  { name: "US500", category: "INDICES", price: "En attente", change: "—" },
  { name: "XAUUSD", category: "MÉTAUX", price: "En attente", change: "—" },
  { name: "EURUSD", category: "FOREX", price: "En attente", change: "—" },
  { name: "BTCUSD", category: "CRYPTO", price: "En attente", change: "—" },
  { name: "WTI", category: "ÉNERGIE", price: "En attente", change: "—" },
];

const panel = {
  background: "#111c2e",
  border: "1px solid #263750",
  borderRadius: 8,
  padding: 16,
};

export default function App() {
  const [active, setActive] = useState("Dashboard");
  const [search, setSearch] = useState("");

  const filtered = markets.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  const tabs = [
    "Dashboard", "Marchés", "Actualités",
    "Calendrier", "COT", "Corrélations",
    "Boomrang", "Smart Money", "Risk Management"
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080d18",
      color: "#e5e7eb",
      fontFamily: "Arial, sans-serif",
      padding: 20
    }}>
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 15,
        borderBottom: "1px solid #263750",
        paddingBottom: 20
      }}>
        <div>
          <h1 style={{ color: "#36d399", margin: 0 }}>
            TRADING INTELLIGENCE PRO 2.0
          </h1>
          <p style={{ color: "#8290a8" }}>
            Institutional Multi-Market Intelligence Terminal
          </p>
        </div>
        <div style={{ color: "#fbbf24" }}>
          ● MODE DÉMONSTRATION
          <p style={{ color: "#8290a8", fontSize: 12 }}>
            Données réelles non connectées
          </p>
        </div>
      </header>

      <nav style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        margin: "20px 0"
      }}>
        {tabs.map(tab => (
          <button key={tab}
            onClick={() => setActive(tab)}
            style={{
              padding: "10px 14px",
              background: active === tab ? "#176b58" : "#172338",
              color: "#fff",
              border: "1px solid #263750",
              borderRadius: 6,
              cursor: "pointer"
            }}>
            {tab}
          </button>
        ))}
      </nav>

      <h2 style={{ color: "#36d399" }}>{active}</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
        gap: 12,
        marginBottom: 20
      }}>
        {[
          ["MARCHÉS", "7 instruments"],
          ["ACTUALITÉS", "En préparation"],
          ["COT INSTITUTIONNEL", "En préparation"],
          ["CORRÉLATIONS", "En préparation"]
        ].map(([title, value]) => (
          <div key={title} style={panel}>
            <small style={{ color: "#8290a8" }}>{title}</small>
            <h3 style={{ color: "#36d399" }}>{value}</h3>
          </div>
        ))}
      </div>

      <section style={{ ...panel, marginBottom: 20 }}>
        <h3 style={{ color: "#36d399" }}>
          Surveillance multi-marchés
        </h3>

        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Rechercher un instrument..."
          style={{
            padding: 12,
            width: "100%",
            maxWidth: 350,
            background: "#080d18",
            color: "white",
            border: "1px solid #34445e",
            borderRadius: 6,
            marginBottom: 15
          }}
        />

        <div style={{ overflowX: "auto" }}>
          <table style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left"
          }}>
            <thead>
              <tr style={{ color: "#36d399" }}>
                <th style={{ padding: 12 }}>Instrument</th>

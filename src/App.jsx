import React from "react";

export default function App() {
  const markets = [
    { name: "US30", price: "En attente", trend: "Neutre" },
    { name: "US500", price: "En attente", trend: "Neutre" },
    { name: "USTEC", price: "En attente", trend: "Neutre" },
    { name: "XAUUSD", price: "En attente", trend: "Neutre" },
    { name: "BTCUSD", price: "En attente", trend: "Neutre" },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080d18",
      color: "#e8edf7",
      fontFamily: "Arial, sans-serif",
      padding: "24px"
    }}>
      <header style={{ borderBottom: "1px solid #263247", paddingBottom: 20 }}>
        <h1 style={{ color: "#36d399" }}>TRADING INTELLIGENCE PRO 2.0</h1>
        <p>Plateforme intelligente de trading multi-marchés</p>
        <span style={{ color: "#fbbf24" }}>Mode : Démonstration — données non connectées</span>
      </header>

      <h2>Tableau de bord</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: 16
      }}>
        {[
          ["Marchés", "Multi-actifs"],
          ["Analyse IA", "En préparation"],
          ["Smart Money", "En préparation"],
          ["Gestion du risque", "En préparation"]
        ].map(([title, value]) => (
          <div key={title} style={{
            background: "#121c2e",
            padding: 20,
            borderRadius: 12,
            border: "1px solid #263247"
          }}>
            <h3>{title}</h3>
            <p style={{ color: "#36d399" }}>{value}</p>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: 32 }}>Surveillance des marchés</h2>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ color: "#36d399", textAlign: "left" }}>
              <th style={{ padding: 12 }}>Instrument</th>
              <th style={{ padding: 12 }}>Prix</th>
              <th style={{ padding: 12 }}>Tendance</th>
            </tr>
          </thead>
          <tbody>
            {markets.map((market) => (
              <tr key={market.name} style={{ borderTop: "1px solid #263247" }}>
                <td style={{ padding: 12 }}>{market.name}</td>
                <td style={{ padding: 12 }}>{market.price}</td>
                <td style={{ padding: 12 }}>{market.trend}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer style={{ marginTop: 40, color: "#8290a8" }}>
        Trading Intelligence Pro 2.0 — Analyse, discipline et gestion du risque.
      </footer>
    </div>
  );
}

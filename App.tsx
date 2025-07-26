
import { useState } from "react";

const models = [
  {
    id: "media",
    name: "Intelligente Medienautorität",
    description: [
      "Aufdeckung von Desinformationen.",
      "Analyse von Bildern und Artikeln mit Faktenabgleich.",
      "Erstellung objektiver Wissensberichte."
    ]
  },
  {
    id: "justice",
    name: "Intelligente Justiz",
    description: [
      "Analyse juristischer Dokumente im Vergleich zu früheren Urteilen.",
      "Rechtliche Empfehlungen für Richter oder Anwälte.",
      "Analyse von Beweisen und Bildern mit juristischem Kontext."
    ]
  },
  {
    id: "industry",
    name: "Intelligente Industrie",
    description: [
      "Analyse von Produktionslinien und Ressourceneffizienz.",
      "Auswertung von technischen Zeichnungen.",
      "Präzise industrielle Empfehlungen."
    ]
  },
  {
    id: "tech",
    name: "Intelligente Technologie",
    description: [
      "Analyse von Technologieprojekten und Software.",
      "Vorschläge für effiziente und sichere Lösungen.",
      "Innovationsüberwachung und Ressourcenverknüpfung."
    ]
  }
];

export function App() {
  const [selectedModel, setSelectedModel] = useState("media");

  return (
    <div style={{ padding: "2rem", backgroundColor: "black", color: "white", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", marginBottom: "1rem" }}>
        Intelligente Modelle
      </h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "1.5rem" }}>
        {models.map((model) => (
          <button
            key={model.id}
            onClick={() => setSelectedModel(model.id)}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: selectedModel === model.id ? "#2563eb" : "#1f2937",
              borderRadius: "1rem",
              border: "none",
              color: "white",
              cursor: "pointer"
            }}
          >
            {model.name}
          </button>
        ))}
      </div>
      {models.map((model) =>
        model.id === selectedModel ? (
          <div key={model.id} style={{ backgroundColor: "#111827", borderRadius: "1.5rem", padding: "1.5rem", boxShadow: "0 0 15px rgba(0,0,0,0.5)" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.75rem" }}>{model.name}</h2>
            <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
              {model.description.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
            <div style={{ marginTop: "1.5rem" }}>
              <textarea placeholder="Text zur Analyse hier eingeben..." style={{ width: "100%", padding: "1rem", backgroundColor: "#1f2937", border: "1px solid #374151", color: "white" }} />
              <button style={{ marginTop: "1rem", backgroundColor: "#2563eb", padding: "0.5rem 1rem", color: "white", border: "none" }}>
                Mit KI analysieren
              </button>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}

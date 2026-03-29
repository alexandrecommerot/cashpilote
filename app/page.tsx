export default function CashPiloteLandingPage() {
  const quizQuestions = [
    "Vous avez de bons revenus mais vous terminez souvent le mois à zéro ou en négatif.",
    "Vous ne savez pas précisément où part votre argent chaque mois.",
    "Votre train de vie s’est installé sans vraie décision consciente.",
    "Vous repoussez régulièrement le moment de regarder vos comptes en détail.",
    "Vous avez déjà reçu une somme importante sans savoir quoi en faire réellement.",
    "Vous aimeriez épargner davantage mais l’argent disparaît avant.",
  ];

  return (
    <div style={{ fontFamily: "Arial", padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h1>CashPilote</h1>
      <h2>Vous gagnez bien votre vie. Mais vous ne la pilotez pas vraiment.</h2>

      <p>
        Transformer un budget subi en un budget piloté, avec une capacité d’épargne et de décision retrouvée.
      </p>

      <button style={{ padding: "10px 20px", marginTop: "10px" }}>
        Faire le diagnostic
      </button>

      <hr />

      <h2>Le problème n’est pas votre revenu. C’est votre pilotage.</h2>

      <p>
        Beaucoup de cadres et familles gagnent bien leur vie mais n’ont aucune visibilité financière.
      </p>

      <ul>
        <li>Pas de visibilité</li>
        <li>Dérive du train de vie</li>
        <li>Budget subi</li>
      </ul>

      <hr />

      <h2>L’offre CashPilote</h2>

      <ul>
        <li><strong>Audit :</strong> analyse complète</li>
        <li><strong>Plan :</strong> arbitrages clairs</li>
        <li><strong>Suivi :</strong> accompagnement</li>
      </ul>

      <hr />

      <h2>Diagnostic</h2>

      {quizQuestions.map((q, i) => (
        <div key={i}>
          <input type="checkbox" /> {q}
        </div>
      ))}

      <h3 style={{ marginTop: "20px" }}>Recevez votre diagnostic</h3>

      <input placeholder="Prénom" style={{ display: "block", marginTop: "10px" }} />
      <input placeholder="Email" style={{ display: "block", marginTop: "10px" }} />

      <button style={{ marginTop: "10px", padding: "10px 20px" }}>
        Recevoir mon diagnostic
      </button>
    </div>
  );
}

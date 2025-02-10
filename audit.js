function submitAudit() {
    // Récupérer les valeurs du formulaire
    const environment = parseInt(document.getElementById("environment").value);
    const social = parseInt(document.getElementById("social").value);
    const governance = parseInt(document.getElementById("governance").value);
    const diversity = parseInt(document.getElementById("diversity").value);
    const energy = parseInt(document.getElementById("energy").value);
    const waste = parseInt(document.getElementById("waste").value);
    const health = parseInt(document.getElementById("health").value);
    const community = parseInt(document.getElementById("community").value);
    const ethical = parseInt(document.getElementById("ethical").value);
    const transparency = parseInt(document.getElementById("transparency").value);

    // Calculer le score total
    const totalScore = environment + social + governance + diversity + energy + waste + health + community + ethical + transparency;

    // Rediriger vers la page des résultats en incluant le score
    window.location.href = `resultats.html?score=${totalScore}`;
}

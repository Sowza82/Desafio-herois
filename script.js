const btn = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");
const textoResultado = resultado.querySelector(".texto");

btn.addEventListener("click", () => {
    const nomeHeroi = document.getElementById("nome").value.trim();
    const xpHeroi = Number(document.getElementById("xp").value);
    let nivelHeroi = "";
    let classeNivel = "";
    let icone = "";

    if (!nomeHeroi || isNaN(xpHeroi)) {
        alert("Por favor, preencha corretamente o nome e a XP do herói!");
        return;
    }

    if (xpHeroi < 1000) { nivelHeroi = "Ferro"; classeNivel="nivel-ferro"; icone="🪨"; }
    else if (xpHeroi >= 1001 && xpHeroi <= 2000) { nivelHeroi = "Bronze"; classeNivel="nivel-bronze"; icone="🥉"; }
    else if (xpHeroi >= 2001 && xpHeroi <= 5000) { nivelHeroi = "Prata"; classeNivel="nivel-prata"; icone="🥈"; }
    else if (xpHeroi >= 5001 && xpHeroi <= 7000) { nivelHeroi = "Ouro"; classeNivel="nivel-ouro"; icone="🥇"; }
    else if (xpHeroi >= 7001 && xpHeroi <= 8000) { nivelHeroi = "Platina"; classeNivel="nivel-platina"; icone="💎"; }
    else if (xpHeroi >= 8001 && xpHeroi <= 9000) { nivelHeroi = "Ascendente"; classeNivel="nivel-ascendente"; icone="🚀"; }
    else if (xpHeroi >= 9001 && xpHeroi <= 10000) { nivelHeroi = "Imortal"; classeNivel="nivel-imortal"; icone="👑"; }
    else if (xpHeroi >= 10001) { nivelHeroi = "Radiante"; classeNivel="nivel-radiante"; icone="✨"; }

    resultado.className = `badge ${classeNivel} show`;
    textoResultado.innerHTML = `${icone} O Herói <strong>${nomeHeroi}</strong> está no nível de <strong>${nivelHeroi}</strong>`;
});
const btn = document.getElementById('btnCalcular');
const resultado = document.getElementById('resultado');
const textoResultado = resultado.querySelector('.texto');
const toast = document.getElementById('toast');

function showToast(message, type = 'info') {
  toast.textContent = message;
  toast.style.background =
    type === 'error' ? '#d32f2f' : type === 'success' ? '#388e3c' : '#7b2cbf';

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

btn.addEventListener('click', () => {
  const nomeHeroi = document.getElementById('nome').value.trim();
  const xpValor = document.getElementById('xp').value.trim();
  const xpHeroi = Number(xpValor);

  // Checa cada campo individualmente
  if (!nomeHeroi && (xpValor === '' || isNaN(xpHeroi) || xpHeroi < 0)) {
    showToast('Por favor, preencha o nome e a XP do herói!', 'error');
    return;
  }

  if (!nomeHeroi) {
    showToast('Por favor, preencha o nome do herói!', 'error');
    return;
  }

  if (xpValor === '' || isNaN(xpHeroi) || xpHeroi < 0) {
    showToast('Por favor, preencha uma XP válida do herói!', 'error');
    return;
  }

  let nivelHeroi = '';
  let classeNivel = '';
  let icone = '';

  if (xpHeroi < 1000) { nivelHeroi = 'Ferro'; classeNivel='nivel-ferro'; icone='🪨'; }
  else if (xpHeroi <= 2000) { nivelHeroi = 'Bronze'; classeNivel='nivel-bronze'; icone='🥉'; }
  else if (xpHeroi <= 5000) { nivelHeroi = 'Prata'; classeNivel='nivel-prata'; icone='🥈'; }
  else if (xpHeroi <= 7000) { nivelHeroi = 'Ouro'; classeNivel='nivel-ouro'; icone='🥇'; }
  else if (xpHeroi <= 8000) { nivelHeroi = 'Platina'; classeNivel='nivel-platina'; icone='💎'; }
  else if (xpHeroi <= 9000) { nivelHeroi = 'Ascendente'; classeNivel='nivel-ascendente'; icone='🚀'; }
  else if (xpHeroi <= 10000) { nivelHeroi = 'Imortal'; classeNivel='nivel-imortal'; icone='👑'; }
  else { nivelHeroi = 'Radiante'; classeNivel='nivel-radiante'; icone='✨'; }

  resultado.className = `badge ${classeNivel} show`;
  textoResultado.innerHTML = `${icone} O Herói <strong>${nomeHeroi}</strong> está no nível <strong>${nivelHeroi}</strong>`;

  showToast('Herói classificado com sucesso!', 'success');
});

// Efeito de digitação das palavras
const words = ['amo ler', 'sou programadora', 'sou desenvolvedora', 'amo aprender'];
let index = 0;
let currentWord = '';
let isDeleting = false;

function typeEffect() {
  const span = document.getElementById('palavras');
  if (!span) return;
  if (!isDeleting) {
    if (currentWord === words[index]) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    } else {
      currentWord = words[index].substring(0, currentWord.length + 1);
    }
  } else {
    if (currentWord === '') {
      isDeleting = false;
      index = (index + 1) % words.length;
    } else {
      currentWord = currentWord.substring(0, currentWord.length - 1);
    }
  }
  span.textContent = currentWord;
  setTimeout(typeEffect, 150);
}
window.onload = typeEffect;
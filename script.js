const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
const respostas = document.querySelectorAll('.resposta');
const resultado = document.querySelector('#resultado');

menuButton.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  menuButton.setAttribute('aria-expanded', aberto);
});

respostas.forEach((resposta) => {
  resposta.addEventListener('click', () => {
    respostas.forEach((opcao) => {
      opcao.disabled = true;
    });

    if (resposta.dataset.certa === 'true') {
      resposta.classList.add('certa');
      resultado.textContent = 'Resposta correta!';
    } else {
      resposta.classList.add('errada');
      document.querySelector('[data-certa="true"]').classList.add('certa');
      resultado.textContent = 'Resposta errada. A resposta era Manchester City.';
    }
  });
});
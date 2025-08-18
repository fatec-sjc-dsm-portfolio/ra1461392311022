// projetos.js
const projects = [
  {
    title: "API 1° semestre - Covidinho",
    image: "./public/imgs/projetos/api-1semestre.png",
    description: "API do 1° semestre de DSM de 2023 sobre a Covid Longa.",
    sobre: `Projeto desenvolvido para a API (Aprendizagem por Projeto Integrado) do 1° semestre de Desenvolvimento de 
Software Multiplataforma (DSM) em parceria com a Vanguarda sobre dados relacionados à covid longa no Vale do Paraíba 
para um site de uso jornalístico.

Nosso projeto consiste em um site focado em dados relacionados a Covid-19, seus efeitos e seus sintômas prolongados, 
ou Covid longa de acordo com a Organização Mundial da Saúde (OMS). Este projeto é destinado à usuários jornalistas 
da rede Vanguarda com a necessidade de um site de fácil acesso à dados e informações sobre a Covid longa na região 
do Vale do Paraíba, visando criar novas matérias para o jornal.`,
    technologies: [
      "Figma", "GitHub", "Trello", "Chart.js", "HTML5", "CSS3", "Python", "JavaScript", "MySQL"
    ],
    link: 'https://github.com/Equipe-01-DSM-2023/API-2023.1',
    hardSkil: [
      'Manipulação de dados com Python',
      'Criação dos gráficos com JavaScript',
      'Estilização com HTML',
      'Estilização com CSS',
      'Criação do banco de dados e armazenamento de dados com o MySQL'
    ],
    softSkil: [
      'Trabalho em equipe', 'Comunicação', 'Proatividade', 'Autonomia',
      'Entrega de Resultados', 'Adaptabilidade', 'Flexibilidade'
    ],
    contribuicoesPessoais: `Neste projeto, atuei como membro da equipe de desenvolvimento seguindo a metodologia Scrum. Contribuí 
no desenvolvimento tanto do front-end quanto do back-end. Além disso, realizei a manipulação de dados obtidos através da 
raspagem do site DataSusTabnet, integrando-os aos gráficos que desenvolvi, a fim de facilitar a visualização e interpretação dessas 
informações. 
Participei também das etapas de pesquisa e coleta de dados para a execução do nosso projeto.`
  }
];

function createCard(project, idx) {
  return `
    <div class="card-wrapper">
      <div class="card" style="cursor:pointer" data-idx="${idx}" data-bs-toggle="modal" data-bs-target="#projectModal">
        <img src="${project.image}" class="card-img-top" alt="Imagem do projeto">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.description}</p>
        </div>
      </div>
    </div>
  `;
}

function renderCards() {
  const container = document.getElementById('card-container');
  container.innerHTML = projects.map((p, i) => createCard(p, i)).join('');
}

function renderModal(idx) {
  const project = projects[idx];
  const modalBody = document.getElementById('modal-body');
  modalBody.innerHTML = `
    <p><b>Sobre o projeto:</b></p>
    <p>${project.sobre.replace(/\n/g, '<br>')}</p>
    <hr>
    <div class="skills" style="display:flex;gap:30px;">
      <div class="hardSkill">
        <p><b>Hard Skills:</b></p>
        <ul>${project.hardSkil.map(s => `<li>${s}</li>`).join('')}</ul>
      </div>
      <div class="softSkill">
        <p><b>Soft Skills:</b></p>
        <ul>${project.softSkil.map(s => `<li>${s}</li>`).join('')}</ul>
      </div>
    </div>
    <p><b>Contribuições pessoais:</b></p>
    <p>${project.contribuicoesPessoais.replace(/\n/g, '<br>')}</p>
    <p><b>Tecnologias utilizadas:</b></p>
    <div class="tecnologias" style="display:flex;flex-wrap:wrap;gap:10px;">
      ${project.technologies.map(t => `<span class="badge bg-secondary">${t}</span>`).join(' ')}
    </div>
    <a href="${project.link}" target="_blank" class="btn btn-primary mt-3">Ver Projeto</a>
  `;
}

document.addEventListener('DOMContentLoaded', function() {
  renderCards();
  document.getElementById('card-container').addEventListener('click', function(e) {
    const card = e.target.closest('.card');
    if (card) {
      const idx = card.getAttribute('data-idx');
      renderModal(idx);
    }
  });
});
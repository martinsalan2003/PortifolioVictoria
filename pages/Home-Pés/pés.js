function toggleMenu() {
    var nav = document.getElementById('navigation');
    // Alterna a exibição do menu
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
    }
}

// função que exibe o detalhe
function mostrarDetalhes(tipo) {
    var detalhes = {
        Spa: "Proporcione aos seus pés o cuidado que eles merecem! Oferecemos esfoliação, hidratação profunda, massagem relaxante, promovendo alívio do cansaço, maciez, melhor circulação e bem-estar.",
      Plastica: "Elimine calosidades, rachaduras e ressecamento com um tratamento que hidrata profundamente, suaviza e deixa seus pés macios e renovados.",
    };
  
    // Exibe o conteúdo de detalhes
    var detalhesContainer = document.getElementById("detalhes-container");
    detalhesContainer.style.display = "block";
    detalhesContainer.innerHTML = "<h2 style=color:#ccb786>Detalhes do Serviço</h2><p style=color:#153c5b>" + detalhes[tipo] + "</p>";
  }


/* script.js */
const cards = document.querySelectorAll('.card'); 
const modal = document.getElementById('modal'); // Modal
const modalImg = document.getElementById('modal-img'); 
const closeModalBtn = document.querySelector('.close'); 

// Abre o modal ao clicar em um card
cards.forEach(card => {
  card.addEventListener('click', () => {
    const img = card.querySelector('img'); // Imagem do card clicado

    
    modalImg.src = img.src;


  
    modal.style.display = 'flex';
  });
});


closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
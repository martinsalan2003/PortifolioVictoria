// exibe o menu no celular menu no celular 
function toggleMenu() {
  var nav = document.getElementById('navigation');
  if (nav.style.display === 'block') {
      nav.style.display = 'none';
  } else {
      nav.style.display = 'block';
      
  }
}

// função que exibe o detalhe
function mostrarDetalhes(tipo) {
    var detalhes = {
      hena: "Design de sobrancelhas com henna. Ideal para quem busca definição e durabilidade. A henna proporciona um efeito natural e pode durar até 12 dias.",
      "sem-hena": "Design de sobrancelhas natural, utilizando técnicas manuais como pinça, cera e tesoura. Ideal para quem prefere uma Sobrancelha mais discreta.",
      microblading: "No momento, ainda não estou atendendo nesta especialidade, pois estou me dedicando ao aprendizado e aperfeiçoamento nessa área.",
    };
  
    // Exibe o conteúdo de detalhes
    var detalhesContainer = document.getElementById("detalhes-container");
    detalhesContainer.style.display = "block";
    detalhesContainer.innerHTML = "<h2 style=color:#ccb786>Detalhes do Serviço</h2><p style=color:#153c5b>" + detalhes[tipo] + "</p>";
  }



//   modal das imagens 
const cards = document.querySelectorAll('.card'); 
const modal = document.getElementById('modal'); 
const modalImg = document.getElementById('modal-img'); 
const closeModalBtn = document.querySelector('.close'); 

// Abre o modal ao clicar em um card
cards.forEach(card => {
  card.addEventListener('click', () => {
    const img = card.querySelector('img'); 

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
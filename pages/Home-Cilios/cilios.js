// exibe o menu no celular menu no celular 
function toggleMenu() {
  var nav = document.getElementById('navigation');
  if (nav.style.display === 'block') {
      nav.style.display = 'none';
  } else {
      nav.style.display = 'block';
  }
}


// modal das imagens
function openModal(img) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
  
    modal.style.display = 'flex';
    modalImg.src = img.src;
  }
  
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }


// detalhes dos serviços
function mostrarDetalhes(tipo) {
    var detalhes = {
      'brasileiro': "Ideal para quem busca um olhar mais intenso e sofisticado. A técnica proporciona volume natural com um efeito elegante e discreto.",
      'russo': "Ideal para quem busca um olhar marcante, proporcionando volume e definição. ",
      'fioafio' : "ideal para quem busca um olhar mais alongado e natural, proporcionando um efeito discreto e elegante. ",
    };
  
    // Exibe o conteúdo de detalhes
    var detalhesContainer = document.getElementById("detalhes-container");
    detalhesContainer.style.display = "block";
    detalhesContainer.innerHTML = "<h2 style=color:#ccb786>Detalhes do Serviço</h2><p style=color:#153c5b>" + detalhes[tipo] + "</p>" + "<h3 style=color:#FF0000>ATENÇÃO</h3><p>Valor sujeito a alteração </p>";
  }
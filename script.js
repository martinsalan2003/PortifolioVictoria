function toggleMenu() {
    var nav = document.getElementById('navigation');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
        
    }
  }


// funções do modal 
document.addEventListener("DOMContentLoaded", () => {
    const modals = document.querySelectorAll(".modal");
    const images = document.querySelectorAll(".space-image");
    const closeButtons = document.querySelectorAll(".close");

    // Abrir modal ao clicar na imagem
    images.forEach(image => {
        image.addEventListener("click", () => {
            const modalId = image.dataset.modal;
            const modal = document.getElementById(modalId);
            modal.style.display = "block";
        });
    });

    // Fechar modal ao clicar no botão de fechar
    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.closest(".modal").style.display = "none";
        });
    });

    // Fechar modal ao clicar fora do conteúdo
    modals.forEach(modal => {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});

// Função para exibir a imagem em tamanho maior no modal
function showImage(imgSrc) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    
    // Definir a imagem do modal
    modalImage.src = imgSrc;

    // Exibir o modal
    modal.style.display = 'flex';
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
}
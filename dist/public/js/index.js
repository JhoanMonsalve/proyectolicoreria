document.addEventListener('DOMContentLoaded', () => {
    const buttonSmirnoff = document.getElementById("ver-smirnoff");
    const imageSmirnoff = document.querySelector("#smirnoff img");
    const modalSmirnoff = document.getElementById("modal-smirnoff");
    const modalTitle = modalSmirnoff.querySelector("h2");
    const modalImage = modalSmirnoff.querySelector("img");
    const modalPrice = modalSmirnoff.querySelector("p");
    const closeModal = document.querySelector(".close");

    // Información del producto Smirnoff
    const productoSmirnoff = {
        title: "Smirnoff",
        image: "/img/cerveza/smirnoff.jpg",
        price: "$16.000",
        description: "El Smirnoff es el aliado perfecto para los momentos de celebración y desconexión. Con su sabor suave y equilibrado, este vodka premium es ideal para disfrutar solo, con hielo, o en tus cócteles favoritos."
    };

    // Función para abrir el modal 
    function abrirModal() {
        modalTitle.textContent = productoSmirnoff.title;
        modalImage.src = productoSmirnoff.image;
        modalPrice.textContent = `Precio: ${productoSmirnoff.price}`;
        modalSmirnoff.querySelector("p").textContent = productoSmirnoff.description + " " + modalPrice.textContent;

        // Mostrar el modal
        modalSmirnoff.style.display = "flex";

        // Agregar estado para la navegación hacia atrás
        history.pushState(null, '', window.location.href);
    }

    // Eventos para abrir el modal
    buttonSmirnoff.addEventListener("click", abrirModal);
    imageSmirnoff.addEventListener("click", abrirModal);

    // Cerrar el modal
    closeModal.addEventListener('click', () => {
        modalSmirnoff.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modalSmirnoff) {
            modalSmirnoff.style.display = 'none';
        }
    });

    // Manejar la navegación hacia atrás
    window.addEventListener('popstate', function () {
        modalSmirnoff.style.display = 'none';
    });
});

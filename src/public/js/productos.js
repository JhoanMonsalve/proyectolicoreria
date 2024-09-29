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
        description: "Smirnoff para pasar un rato agradable. Precio: $16.000"
    };

    // Función para abrir el modal 
    function abrirModal() {
        modalTitle.textContent = productoSmirnoff.title;
        modalImage.src = productoSmirnoff.image;
        modalPrice.textContent = productoSmirnoff.price;
        modalSmirnoff.querySelector("p").textContent = productoSmirnoff.description;

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

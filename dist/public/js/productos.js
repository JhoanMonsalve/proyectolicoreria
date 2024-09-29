document.addEventListener('DOMContentLoaded', () => {
    const botonesVerProducto = document.querySelectorAll('.btn-comprar');
    const imagenSmirnoff = document.querySelector("#smirnoff img");
    const modalSmirnoff = document.getElementById("modal-smirnoff");
    const modalTitle = modalSmirnoff.querySelector("h2");
    const modalImage = modalSmirnoff.querySelector("img");
    const modalPrice = modalSmirnoff.querySelector(".precio");
    const modalDescription = modalSmirnoff.querySelector("p");
    const closeModal = document.querySelector(".close");

    // Información de los productos
    const productos = {
        'smirnoff': {
            title: "Smirnoff",
            image: "/img/cerveza/smirnoff.jpg",
            price: "$16.000",
            description: "El Smirnoff es el aliado perfecto para los momentos de celebración y desconexión. Con su sabor suave y equilibrado, este vodka premium es ideal para disfrutar solo, con hielo, o en tus cócteles favoritos."
        }
    };

    // Función para abrir el modal
    function abrirModal(productoId) {
        const productoInfo = productos[productoId];

        modalTitle.textContent = productoInfo.title;
        modalImage.src = productoInfo.image;
        modalPrice.textContent = productoInfo.price;
        modalDescription.textContent = productoInfo.description;

        // Mostrar el modal
        modalSmirnoff.style.display = 'flex';

        // Agregar el evento para la navegación hacia atrás
        history.pushState(null, '', window.location.href);
    }

    // Eventos para abrir el modal
    botonesVerProducto.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const productoId = 'smirnoff'; // Solo Smirnoff
            abrirModal(productoId);
        });
    });

    imagenSmirnoff.addEventListener("click", () => {
        abrirModal('smirnoff');
    });

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

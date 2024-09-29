document.addEventListener('DOMContentLoaded', () => {
    const botonesVerProducto = document.querySelectorAll('.btn-comprar');
    const imagenesProducto = document.querySelectorAll('.producto img');
    const modal = document.getElementById('modal-producto');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalPrice = document.getElementById('modal-price');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close');

    // Información de los productos
    const productos = {
        'smirnoff': {
            title: 'Smirnoff',
            image: '/img/cerveza/smirnoff.jpg',
            price: '$16.000',
            description: 'El Smirnoff es el aliado perfecto para los momentos de celebración y desconexión. Con su sabor suave y equilibrado, este vodka premium es ideal para disfrutar solo, con hielo, o en tus cócteles favoritos.'
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
        modal.style.display = 'flex';

        // Agregar el evento para la navegación hacia atrás
        history.pushState(null, '', window.location.href);
    }

    botonesVerProducto.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const productoId = e.target.parentElement.id;
            abrirModal(productoId);
        });
    });

    imagenesProducto.forEach(imagen => {
        imagen.addEventListener('click', (e) => {
            const productoId = e.target.parentElement.id;
            abrirModal(productoId);
        });
    });

    const buttonSmirnoff = document.getElementById("ver-smirnoff");
    const imageSmirnoff = document.querySelector("#smirnoff img");
    const modalSmirnoff = document.getElementById("modal-smirnoff");

    // Función para abrir el modal de Smirnoff
    function abrirModalSmirnoff() {
        modalSmirnoff.querySelector("h2").textContent = productoSmirnoff.title;
        modalSmirnoff.querySelector("img").src = productoSmirnoff.image;
        modalSmirnoff.querySelector("p").textContent = productoSmirnoff.description;
        modalSmirnoff.style.display = "flex";
    }

    // Eventos para el producto Smirnoff
    buttonSmirnoff.addEventListener("click", abrirModalSmirnoff);
    imageSmirnoff.addEventListener("click", abrirModalSmirnoff);

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        modalSmirnoff.style.display = 'none'; // Cerrar el modal Smirnoff
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal || e.target === modalSmirnoff) {
            modal.style.display = 'none';
            modalSmirnoff.style.display = 'none'; // Cerrar el modal Smirnoff
        }
    });

    // Manejar la navegación hacia atrás
    window.addEventListener('popstate', function () {
        modal.style.display = 'none';
        modalSmirnoff.style.display = 'none'; // Cerrar el modal Smirnoff
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const botonesVerProducto = document.querySelectorAll('.btn-comprar');
    const imagenesProducto = document.querySelectorAll('.producto img');
    const modal = document.getElementById('modal-producto');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalPrice = document.getElementById('modal-price');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close');

    // Información de productos de micheladas
    const productos = {
        "michelada-varios-sabores": {
            title: "Michelada saborizada con cerveza",
            image: "/img/micheladas/micheladacerveza.jpg",
            price: "$15.000",
            description: "SABORES: precio: $15.000."
        },
        "soda-micheladasaborizada": {
            title: "Michelada saborizada con soda",
            image: "/img/micheladas/micheladasoda2.jpg",
            price: "$15.000",
            description: "SABORES: precio: $15.000."
        },
        "michelada-soda": {
            title: "michelada sencilla de soda",
            image: "/img/micheladas/micheladasoda.jpg",
            price: "$6.000",
            description: "SABORES: Precio: $10.000."
        },
        "michelada-quatro": {
            title: "Michelada sencilla con quatro",
            image: "/img/micheladas/",
            price: "$7.000",
            description: "SABORES: Precio: $10.000."
        }
    };

    // Función para abrir el modal
    function abrirModal(productoId) {
        const producto = productos[productoId];

        modalTitle.textContent = producto.title;
        modalImage.src = producto.image;
        modalPrice.textContent = producto.price;
        modalDescription.textContent = producto.description;

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

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Manejar la navegación hacia atrás
    window.addEventListener('popstate', function () {
        modal.style.display = 'none';
    });
});

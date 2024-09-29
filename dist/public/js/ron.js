document.addEventListener('DOMContentLoaded', () => {
    const botonesVerProducto = document.querySelectorAll('.btn-comprar');
    const imagenesProducto = document.querySelectorAll('.producto img');
    const modal = document.getElementById('modal-producto');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalPrice = document.getElementById('modal-price');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close');

    // Información de productos
    const productos = {
        "ron-litro": {
            title: "Ron Litro",
            image: "/img/ron/RonMedia.jpeg",
            price: "$90.000",
            description: "El Ron Litro ofrece la cantidad justa para quienes disfrutan del sabor intenso y refinado de un buen ron. Perfecto para reuniones o fiestas, este formato de mayor tamaño asegura que nunca falte una copa. Precio por copa: $7.000"
        },
        "ron-botella": {
            title: "Ron Botella 8 Años",
            image: "/img/ron/RonLitro.jpeg",
            price: "$170.000",
            description: "El Ron de 8 Años en botella es una bebida exclusiva que destaca por su sabor madurado. Ideal para momentos especiales, es el acompañamiento perfecto para ocasiones elegantes. Precio por copa: $7.000"
        },
        "ron-garrafa": {
            title: "Ron Garrafa",
            image: "/img/ron/RonBotella.jpeg",
            price: "$200.000",
            description: "Para las grandes celebraciones, el Ron Garrafa es la opción ideal. Este formato extra grande está pensado para compartir en eventos y fiestas donde el buen ron no puede faltar. Precio por copa: $7.000"
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

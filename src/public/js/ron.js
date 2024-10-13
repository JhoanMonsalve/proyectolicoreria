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
            title: "Ron Media",
            image: "/img/ron/RonMedia.jpeg",
            price: "$60.000",
            description: "El Ron Media ofrece la cantidad justa para quienes disfrutan del sabor intenso y refinado de un buen ron. Perfecto para reuniones o fiestas, este formato de mayor tamaño asegura que nunca falte una copa. Precio por copa: $7.000"
        },
        "ron-botella": {
            title: "Ron Botella",
            image: "/img/ron/RonLitro.jpeg",
            price: "$110.000",
            description: "El Ron de botella es una bebida exclusiva que destaca por su sabor madurado. Ideal para momentos especiales, es el acompañamiento perfecto para ocasiones elegantes. Precio por copa: $7.000"
        },
        "ron-garrafa": {
            title: "Ron Garrafa",
            image: "/img/ron/RonBotella.jpeg",
            price: "$200.000",
            description: "Para las grandes celebraciones, el Ron Garrafa es la opción ideal. Este formato extra grande está pensado para compartir en eventos y fiestas donde el buen ron no puede faltar. Precio por copa: $7.000"
        },
        "ron-botella8años": {
            title: "Ron botella 8 años",
            image: "/img/ron/RonLitro8años.png",
            price: "$170.000",
            description: "Déjate seducir por la riqueza y complejidad de un ron que ha madurado pacientemente durante 8 años. Con cada sorbo, descubrirás notas profundas de caramelo, vainilla y roble, acompañadas por un suave toque de especias que evocan el calor del trópico. Precio por copa: $7.000"
        },
        "ron-Litro8años": {
            title: "Ron Litro 8 años",
            image: "/img/ron/RonBotella8años.png",
            price: "$90.000",
            description: "Déjate seducir por la riqueza y complejidad de un ron que ha madurado pacientemente durante 8 años. Con cada sorbo, descubrirás notas profundas de caramelo, vainilla y roble, acompañadas por un suave toque de especias que evocan el calor del trópico. Precio por copa: $7.000"
        },
        "copa-ron": {
            title: "Copa Ron",
            image: "/img/ron/RonBotella.jpeg",
            price: "$7.000 doble: 14.000",
            description: "Copa de ron a $7.000 doble $14.000"
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

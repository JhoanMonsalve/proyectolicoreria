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
        'coca-cola': {
            title: 'Coca-Cola Botella',
            image: '/img/bebidas/cocacola.png',
            price: '$5.000',
            description: 'Refresco clásico en botella, ideal para cualquier ocasión.'
        },
        'soda': {
            title: 'Soda',
            image: '/img/bebidas/soda.png',
            price: '$4.500',
            description: 'Soda refrescante, perfecta para acompañar tus comidas.'
        },
        'quatro': {
            title: 'Quatro',
            image: '/img/bebidas/quatro.jpeg',
            price: '$5.000',
            description: 'Bebida refrescante cítrica con un sabor único.'
        },
        'redbull': {
            title: 'RedBull',
            image: '/img/bebidas/redbull.jpeg',
            price: '$13.000',
            description: 'La famosa bebida energética que te da alas.'
        },
        'electrolit': {
            title: 'Electrolit',
            image: '/img/bebidas/electrolit.png',
            price: '$14.000',
            description: 'Hidratación avanzada con electrolitos para recuperar energía.'
        },
        'gatorade': {
            title: 'Gatorade',
            image: '/img/bebidas/gatorade.jpg',
            price: '$10.000',
            description: 'Energía líquida que te ayuda a seguir adelante.'
        },
        'aguacongas': {
            title: 'Agua con gas',
            image: '/img/bebidas/aguacongas.png',
            price: '$5.000',
            description: 'Agua mineral con gas para una refrescante sensación.'
        },
        'aguasingas': {
            title: 'Agua sin gas',
            image: '/img/bebidas/aguasingas.png',
            price: '$3.500',
            description: 'Agua pura sin gas, ideal para la hidratación diaria.'
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

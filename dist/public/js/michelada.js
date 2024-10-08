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
        "michelada-normal": {
            title: "Michelada Normal con cerveza",
            image: "/img/micheladas/micheladanormal.png",
            price: "$10.000",
            description: "La Michelada Normal con Cerveza es la combinación perfecta de frescura y sabor. Con el equilibrio justo entre cerveza fría, limón, sal y un toque de salsa, esta bebida es ideal para refrescarte en cualquier ocasión."
        },
        "michelada-varios-sabores": {
            title: "Michelada de varios sabores con cerveza",
            image: "/img/micheladas/micheladanormal.png",
            price: "$15.000",
            description: "La Michelada de Varios Sabores es una explosión de frescura y creatividad en cada sorbo. Disfruta de la mezcla de sabores frutales únicos, que complementan perfectamente la clásica combinación de limón y cerveza."
        },
        "soda-michelada": {
            title: "Soda Michelada",
            image: "/img/micheladas/sodamichelada.png",
            price: "$10.000",
            description: "Descubre la Soda Michelada, una bebida que redefine la forma de disfrutar la frescura. Esta deliciosa mezcla combina la chispa de una soda burbujeante con el clásico sabor de la michelada, creando una experiencia única que despierta tus sentidos."
        },
        "michelada": {
            title: "Michelada",
            image: "/img/micheladas/micheladanormal.png",
            price: "$10.000",
            description: "La Michelada Normal es la bebida refrescante por excelencia. Con su mezcla clásica de limón, sal y salsas, acompañada de hielo y tu bebida favorita, esta opción es perfecta para quienes disfrutan de lo tradicional."
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

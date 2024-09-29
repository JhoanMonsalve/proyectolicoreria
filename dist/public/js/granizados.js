document.addEventListener("DOMContentLoaded", function () {
    const botonesVerProducto = document.querySelectorAll(".btn-comprar");
    const imagenesProducto = document.querySelectorAll(".producto img");
    const modal = document.getElementById("modal-producto");
    const modalTitle = document.getElementById("modal-title");
    const modalImage = document.getElementById("modal-image");
    const modalPrice = document.getElementById("modal-price");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.querySelector(".close");

    // Información de productos de granizados
    const productos = {
        "granizado-6onzas": {
            title: "Granizado 6 onzas",
            image: "/img/granizados/6onzas.jpg",
            price: "$6.000",
            description: "El Granizado de 6 Onzas es perfecto para esos momentos en los que solo necesitas un pequeño respiro refrescante. Con su tamaño compacto, es ideal para llevar contigo a cualquier lugar y disfrutar de una explosión de sabor helado en cada sorbo."
        },
        "granizado-8onzas": {
            title: "Granizado 8 onzas",
            image: "/img/granizados/8onzas.jpg",
            price: "$8.000",
            description: "El Granizado de 8 Onzas ofrece un poco más de frescura y sabor, convirtiéndose en la porción ideal para quienes buscan un refrigerio refrescante de tamaño medio."
        },
        "granizado-10onzas": {
            title: "Granizado 10 onzas",
            image: "/img/granizados/10onzas.jpg",
            price: "$10.000",
            description: "Disfruta de la frescura en su máxima expresión con el Granizado de 10 Onzas. Este tamaño es perfecto para quienes quieren saborear más de la dulzura y la frescura que solo un buen granizado puede ofrecer."
        },
        "granizado-12onzas": {
            title: "Granizado 12 onzas",
            image: "/img/granizados/12onzas.jpeg",
            price: "$12.000",
            description: "El Granizado de 12 Onzas es la opción más grande para los verdaderos amantes del sabor helado. Con la porción perfecta para mantenerte fresco por más tiempo, este granizado te ofrece un torbellino de sabores que te revitaliza con cada trago."
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
        modal.style.display = "flex";

        // Agregar el evento para la navegación hacia atrás
        history.pushState(null, '', window.location.href);
    }

    botonesVerProducto.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const productoId = e.target.parentElement.id;
            abrirModal(productoId);
        });
    });

    imagenesProducto.forEach(imagen => {
        imagen.addEventListener("click", (e) => {
            const productoId = e.target.parentElement.id;
            abrirModal(productoId);
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = 'none';
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Manejar la navegación hacia atrás
    window.addEventListener('popstate', function () {
        modal.style.display = 'none';
    });
});

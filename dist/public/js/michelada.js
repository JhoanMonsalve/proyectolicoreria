document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn-comprar");
    const images = document.querySelectorAll(".producto img"); 
    const modal = document.getElementById("modal-producto");
    const modalTitle = document.getElementById("modal-title");
    const modalImage = document.getElementById("modal-image");
    const modalPrice = document.getElementById("modal-price");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.querySelector(".close");

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
        "michelada-varios-sabores-bretaña": {
            title: "Michelada de varios sabores con bretaña",
            image: "/img/micheladas/micheladanormal.png",
            price: "$10.000",
            description: "La Michelada de Varios Sabores con Bretaña es una versión innovadora que combina la refrescante agua Bretaña con los sabores frutales que tanto amas. Esta michelada sin alcohol es perfecta para quienes desean disfrutar de una bebida fresca y deliciosa, sin la cerveza."
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

        if (producto) {
            modalTitle.textContent = producto.title;
            modalImage.src = producto.image;
            modalPrice.textContent = producto.price;
            modalDescription.textContent = producto.description;

            
            history.pushState({ modalOpen: true }, null, `#${productoId}`);

            
            modal.style.display = "flex";
        }
    }

    // Función para cerrar el modal
    function cerrarModal() {
        modal.style.display = "none";

        
        history.replaceState(null, null, window.location.pathname);
    }

    
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const productoId = this.parentNode.id;
            abrirModal(productoId);
        });
    });

    
    images.forEach((image) => {
        image.addEventListener("click", function () {
            const productoId = this.parentNode.id;
            abrirModal(productoId);
        });
    });

    
    closeModal.addEventListener("click", cerrarModal);

    
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            cerrarModal();
        }
    });

    // Detectar el evento de "popstate" cuando el usuario presiona "atrás" en el móvil
    window.addEventListener("popstate", function (event) {
        if (event.state && event.state.modalOpen) {
            cerrarModal();
        }
    });
});

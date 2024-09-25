document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".btn-comprar");
    const modal = document.getElementById("modal-producto");
    const modalTitle = document.getElementById("modal-title");
    const modalImage = document.getElementById("modal-image");
    const modalPrice = document.getElementById("modal-price");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.querySelector(".close");

    // Información de productos
    const productos = {
        "ron-Media": {
            title: "Ron Media",
            image: "/img/ron/RonMedia.jpeg",
            price: "$50.000",
            description: "Un ron clásico de sabor suave y un cuerpo medio."
        },
        "ron-Litra": {
            title: "Ron Litro",
            image: "/img/ron/RonLitro.jpeg",
            price: "$70.000",
            description: "Ron litro premium con sabor complejo y profundo."
        },
        "ron-Botella": {
            title: "Ron Botella",
            image: "/img/ron/RonBotella.jpeg",
            price: "$100.000",
            description: "Ron botella edición limitada, perfecto para coleccionistas y conocedores."
        },
        "ron-Garrafa": {
            title: "Ron Garrafa",
            image: "/img/ron/rongarrafa.jpg",
            price: "$200.000",
            description: "Ron Garrafa edición limitada, perfecto para pasar un rato agradable."
        }
        // Puedes agregar más productos aquí si lo necesitas
    };

    // Función para abrir el modal con los datos del producto
    function abrirModal(productoId) {
        const producto = productos[productoId];

        if (producto) {
            modalTitle.textContent = producto.title;
            modalImage.src = producto.image;
            modalPrice.textContent = producto.price;
            modalDescription.textContent = producto.description;

            // Mostrar el modal
            modal.style.display = "flex";
        }
    }

    // Asignar eventos a cada botón de "Ver Producto"
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const productoId = this.parentNode.id;
            abrirModal(productoId);
        });
    });

    // Cerrar el modal cuando se hace clic en la "X"
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });


    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

});

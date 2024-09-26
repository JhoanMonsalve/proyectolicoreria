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
        "ron-litro": {
            title: "Ron Litro",
            image: "/img/ron/RonMedia.jpeg",
            price: "$90.000",
            description: "El Ron Litro ofrece la cantidad justa para quienes disfrutan del sabor intenso y refinado de un buen ron. Perfecto para reuniones o fiestas, este formato de mayor tamaño asegura que nunca falte una copa. precio por copa: $7.000"
        },
        "ron-botella": {
            title: "Ron Botella 8 Años",
            image: "/img/ron/RonLitro.jpeg",
            price: "$170.000",
            description: "ron de un litro, una bebida que transforma cualquier reunión en una experiencia inolvidable. precio por copa: $7.000"
        },
        "ron-garrafa": {
            title: "Ron Garrafa",
            image: "/img/ron/RonBotella.jpeg",
            price: "$200.000",
            description: "Para las grandes celebraciones, el Ron Garrafa es la opción ideal. Este formato extra grande está pensado para compartir en eventos y fiestas donde el buen ron no puede faltar. precio por copa: $7.000"
        }
        
    };

    
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

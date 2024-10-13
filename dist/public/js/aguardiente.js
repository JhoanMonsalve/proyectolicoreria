document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn-comprar");
    const images = document.querySelectorAll(".img-producto");
    const modal = document.getElementById("modal-producto");
    const modalTitle = document.getElementById("modal-title");
    const modalImage = document.getElementById("modal-image");
    const modalPrice = document.getElementById("modal-price");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.querySelector(".close");

    // Información de productos
    const productos = {
        "aguardiente-azul": {
            title: "Aguardiente Tapa Azul Litro",
            image: "/img/aguardiente/aguardientetapaazul.jpg",
            price: "$110.000", 
            description: "Para quienes buscan una experiencia premium, el Aguardiente Tapa Azul es la mejor opción. Con un sabor más suave, refinado y sin azúcar añadido, este aguardiente es la elección perfecta para aquellos que prefieren un licor puro y delicado. Precio por copa: $6.000. Doble: $12.000."
        },
        "aguardiente-rojo": {
            title: "Aguardiente Tapa Roja Litro",
            image: "/img/aguardiente/aguardientetaparoja.png",
            price: "$110.000", 
            description: "El Aguardiente Tapa Roja es la elección ideal para quienes buscan una experiencia más intensa y vibrante. Con un sabor robusto y una mayor graduación alcohólica. Precio por copa: $6.000. Doble: $12.000."
        },
        "aguardiente-verde": {
            title: "Aguardiente Tapa Verde Litro",
            image: "/img/aguardiente/aguardientetapaverde.jpeg",
            price: "$100.000", 
            description: "Descubre el inconfundible sabor del Aguardiente Tapa Verde, un licor tradicional colombiano con un toque suave y fresco. Con una combinación perfecta de anís y un contenido moderado de alcohol. Precio por copa: $6.000. Doble: $12.000."
        },
        "aguardiente-verde-media": {
            title: "Aguardiente Tapa Verde Media",
            image: "/img/aguardiente/aguardientemediaverde.png",
            price: "$60.000", 
            description: "La misma suavidad y frescura del Aguardiente Tapa Verde, en una presentación más pequeña. Perfecto para compartir en cualquier ocasión. Precio por copa: $6.000. Doble: $12.000."
        },
        "aguardiente-rojo-media": {
            title: "Aguardiente Tapa Roja Media",
            image: "/img/aguardiente/aguardientemediaroja.png",
            price: "$60.000", 
            description: "El Aguardiente Tapa Roja, con su característico sabor fuerte y vibrante, ahora disponible en media botella. Precio por copa: $6.000. Doble: $12.000."
        },
        "aguardiente-azul-media": {
            title: "Aguardiente Tapa Azul Media",
            image: "/img/aguardiente/aguardientemediaazul.png",
            price: "$60.000", 
            description: "La versión de media botella del Aguardiente Tapa Azul, para quienes prefieren un licor suave y refinado sin azúcar añadido. Precio por copa: $6.000. Doble: $12.000."
        }
    };

    
    function abrirModal(productoId) {
        const producto = productos[productoId];
        
        
        modalTitle.textContent = producto.title;
        modalImage.src = producto.image;
        modalPrice.textContent = producto.price;
        modalDescription.textContent = producto.description;

        
        modal.style.display = "flex";

        (null, '', window.location.href);
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

     
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    
    window.addEventListener("popstate", function () {
        modal.style.display = "none";
    });
});

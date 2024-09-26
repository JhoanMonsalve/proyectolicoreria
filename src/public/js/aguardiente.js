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
        "aguardiente-azul": {
            title: "Aguardiente Tapa Azul Litro",
            image: "/img/aguardiente/aguardientetapaazul.jpg",
            price: "$100.000",
            description: "Para quienes buscan una experiencia premium, el Aguardiente Tapa Azul es la mejor opción. Con un sabor más suave, refinado y sin azúcar añadido, este aguardiente es la elección perfecta para aquellos que prefieren un licor puro y delicado. precio por copa: $6.000"
        },
        "aguardiente-rojo": {
            title: "Aguardiente Tapa Roja Litro",
            image: "/img/aguardiente/aguardientetaparoja.png",
            price: "$100.000",
            description: "El Aguardiente Tapa Roja es la elección ideal para quienes buscan una experiencia más intensa y vibrante. Con un sabor robusto y una mayor graduación alcohólica. precio por copa $6.000"
        },
        "aguardiente-verde": {
            title: "Aguardiente Tapa Verde Litro",
            image: "/img/aguardiente/aguardientetapaverde.jpeg",
            price: "$90.000",
            description: "Descubre el inconfundible sabor del Aguardiente Tapa Verde, un licor tradicional colombiano con un toque suave y fresco. Con una combinación perfecta de anís y un contenido moderado de alcohol. precio por copa $6.000"
        }
       
    };

    
    function abrirModal(productoId) {
        const producto = productos[productoId];

        if (producto) {
            modalTitle.textContent = producto.title;
            modalImage.src = producto.image;  
            modalPrice.textContent = producto.price;
            modalDescription.textContent = producto.description;

            
            modal.style.display = "flex";
        }
    }

    
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
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

});

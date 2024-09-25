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
            title: "Aguardiente Tapa Azul",
            image: "/img/aguardiente/aguardientetapaazul.jpg",
            price: "$70.000",
            description: "Un aguardiente suave con sabor a anís y un toque dulce."
        },
        "aguardiente-rojo": {
            title: "Aguardiente Tapa Roja",
            image: "/img/aguardiente/aguardientetaparoja.png",
            price: "$70.000",
            description: "El clásico aguardiente tapa roja, conocido por su sabor fuerte."
        },
        "aguardiente-verde": {
            title: "Aguardiente Tapa Verde",
            image: "/img/aguardiente/aguardientetapaverde.jpeg",
            price: "$70.000",
            description: "Un aguardiente extra fuerte, ideal para quienes prefieren un sabor intenso."
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

document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".btn-comprar");
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
            description: "Un refrescante granizado de 6 onzas."
        },
        "granizado-8onzas": {
            title: "Granizado 8 onzas",
            image: "/img/granizados/8onzas.jpg",
            price: "$8.000",
            description: "Delicioso granizado de 8 onzas, ideal para el calor."
        },
        "granizado-10onzas": {
            title: "Granizado 10 onzas",
            image: "/img/granizados/10onzas.jpg",
            price: "$10.000",
            description: "Granizado de 10 onzas, el equilibrio perfecto entre sabor y cantidad."
        },
        "granizado-12onzas": {
            title: "Granizado 12 onzas",
            image: "/img/granizados/12onzas.jpeg",
            price: "$12.000",
            description: "Granizado de 12 onzas, perfecto para compartir."
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

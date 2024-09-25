document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".btn-comprar");
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
            price: "$15.000",
            description: "Disfruta de nuestra deliciosa michelada normal con cerveza."
        },
        "michelada-varios-sabores": {
            title: "Michelada de varios sabores con cerveza",
            image: "/img/micheladas/micheladanormal.png",
            price: "$10.000",
            description: "Una refrescante michelada con una mezcla de varios sabores."
        },
        "michelada-varios-sabores-bretaña": {
            title: "Michelada de varios sabores con bretaña",
            image: "/img/micheladas/micheladanormal.png",
            price: "$10.000",
            description: "Una michelada única con bretaña y varios sabores."
        },
        "michelada": {
            title: "Michelada de varios sabores refrescante",
            image: "/img/micheladas/micheladanormal.png",
            price: "$10.000",
            description: "Una michelada refrescante ideal para cualquier ocasión."
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

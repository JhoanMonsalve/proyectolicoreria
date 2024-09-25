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
        cervezapilsen: {
            title: "Cerveza Pilsen",
            image: "/img/cerveza/cervezapilsen.jpeg",
            price: "$5.000",
            description: "Una cerveza clásica de sabor refrescante."
        },
        cervezaaguila: {
            title: "Cerveza Aguila",
            image: "/img/cerveza/cervezaaguila.jpg",
            price: "$5.000",
            description: "Una cerveza rubia de gran sabor, perfecta para cualquier ocasión."
        },
        cervezaheineken: {
            title: "Cerveza Heineken",
            image: "/img/cerveza/cervezaheineken.jpg",
            price: "$5.000",
            description: "Cerveza negra premium con un sabor inconfundible."
        },
        cervezapoker: {
            title: "Cerveza Poker",
            image: "/img/cerveza/cervezapoker.jpg",
            price: "$5.000",
            description: "Ideal para compartir entre amigos, una cerveza fuerte y deliciosa."
        },
        cervezacostenita: {
            title: "Cerveza Costeñita",
            image: "/img/cerveza/cervezacostenita.jpeg",
            price: "$4.000",
            description: "Cerveza costeña con un toque tropical refrescante."
        },
        cervezacorona: {
            title: "Cerveza Corona",
            image: "/img/cerveza/cervezacorona.jpg",
            price: "$9.000",
            description: "La cerveza más reconocida internacionalmente, ligera y refrescante."
        },
        "cervezaclub-colombia": {
            title: "Cerveza Club Colombia",
            image: "/img/cerveza/cervezaclubcolombia.jpg",
            price: "$6.000",
            description: "Cerveza premium con cuerpo y un sabor característico."
        },
        "cervezaaguila-light": {
            title: "Cerveza Aguila-light",
            image: "/img/cerveza/aguilalight.jpg",
            price: "$5.000",
            description: "Una versión ligera de la cerveza Aguila, ideal para disfrutar sin remordimientos."
        }
    };

    
    function abrirModal(productoId) {
        const producto = productos[productoId];

        if (producto) {
            modalTitle.textContent = producto.title;
            modalImage.src = producto.image;
            modalPrice.textContent = producto.price;
            modalDescription.textContent = producto.description;

            
            modal.style.display = "block";
        }
    }

    
    buttons.forEach((button, index) => {
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

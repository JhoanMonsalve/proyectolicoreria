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
            description: "Disfruta del auténtico sabor de la Cerveza Pilsen, una de las más queridas por nosotros los colombianos. Su frescura y cuerpo ligero la convierten en la opción perfecta para acompañar cualquier ocasión, desde reuniones casuales hasta grandes celebraciones."
        },
        cervezaaguila: {
            title: "Cerveza Aguila",
            image: "/img/cerveza/cervezaaguila.jpg",
            price: "$5.000",
            description: "La Cerveza Águila es sinónimo de celebración y alegría en nuestro pais. Con su equilibrio perfecto entre sabor y suavidad, esta cerveza ligera y refrescante es ideal para compartir con amigos en cualquier ocasión."
        },
        cervezaheineken: {
            title: "Cerveza Heineken",
            image: "/img/cerveza/cervezaheineken.jpg",
            price: "$5.000",
            description: "La mundialmente conocida Cerveza Heineken es sinónimo de calidad premium. Con su sabor único, ligeramente amargo y un aroma fresco, esta cerveza de origen holandés es la elección perfecta para aquellos que buscan algo especial."
        },
        cervezapoker: {
            title: "Cerveza Poker",
            image: "/img/cerveza/cervezapoker.jpg",
            price: "$5.000",
            description: "La Cerveza Poker es la compañera perfecta para los momentos de amistad y diversión. Con su cuerpo suave y su sabor refrescante, esta cerveza colombiana invita a relajarse y disfrutar del presente."
        },
        cervezacostenita: {
            title: "Cerveza Costeñita",
            image: "/img/cerveza/cervezacostenita.jpeg",
            price: "$4.000",
            description: "Fresca, ligera y con un toque tropical, la Cerveza Costeñita es la favorita en la costa colombiana. Su sabor suave y refrescante la convierte en la opción ideal para esos días de calor junto al mar o las fiestas en la playa."
        },
        cervezacorona: {
            title: "Cerveza Corona",
            image: "/img/cerveza/cervezacorona.jpg",
            price: "$9.000",
            description: "La Cerveza Corona es la cerveza perfecta para disfrutar de momentos relajados y refrescantes reconocida en todo el mundo, su sabor suave, ligeramente cítrico, y su presentación característica con una rodaja de limón la convierten en la elección preferida para acompañar los días soleados y las noches tranquilas."
        },
        "cervezaclub-colombia": {
            title: "Cerveza Club Colombia",
            image: "/img/cerveza/cervezaclubcolombia.jpg",
            price: "$6.000",
            description: "Con la Cerveza Club Colombia, cada trago es una celebración de la excelencia. Esta cerveza premium es apreciada por su sabor profundo, bien equilibrado, y su cuerpo robusto, resultado de la combinación de los mejores ingredientes y un cuidadoso proceso de elaboración."
        },
        "cervezaaguila-light": {
            title: "Cerveza Aguila light",
            image: "/img/cerveza/aguilalight.jpg",
            price: "$5.000",
            description: "Para aquellos que prefieren una opción más ligera sin sacrificar el sabor, la Cerveza Águila Light es perfecta. Con menos calorías y alcohol, pero manteniendo el mismo carácter refrescante de Águila, es ideal para quienes desean disfrutar de una cerveza sin exceso."
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

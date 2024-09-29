document.addEventListener('DOMContentLoaded', () => {
    const buttonSmirnoff = document.getElementById("ver-smirnoff");
    const imageSmirnoff = document.querySelector("#smirnoff img");
    const modalSmirnoff = document.getElementById("modal-smirnoff");
    const closeModal = document.querySelector(".close");

    
    const productoSmirnoff = {
        title: "Smirnoff",
        image: "/img/cerveza/smirnoff.jpg",
        price: "$16.000",
        description: "El Smirnoff es el aliado perfecto para los momentos de celebración y desconexión. Con su sabor suave y equilibrado, este vodka premium es ideal para disfrutar solo, con hielo, o en tus cócteles favoritos."
    };

    // Función para abrir el modal 
    function abrirModal() {
        modalSmirnoff.querySelector("h2").textContent = productoSmirnoff.title;
        modalSmirnoff.querySelector("img").src = productoSmirnoff.image;
        modalSmirnoff.querySelector("p").textContent = productoSmirnoff.description + " Precio: " + productoSmirnoff.price;
        
        modalSmirnoff.style.display = "flex";

        // Agregar estado para la navegación hacia atrás
        history.pushState(null, '', window.location.href);
    }

    // Eventos para abrir el modal
    buttonSmirnoff.addEventListener("click", abrirModal);
    imageSmirnoff.addEventListener("click", abrirModal);

    // Cerrar el modal
    closeModal.addEventListener('click', () => {
        modalSmirnoff.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modalSmirnoff) {
            modalSmirnoff.style.display = 'none';
        }
    });

    // Manejar la navegación hacia atrás
    window.addEventListener('popstate', function (event) {
        if (event.state && event.state.modalOpen) {
            modalSmirnoff.style.display = 'none'; // Cerrar el modal si está abierto
        }
    });
});

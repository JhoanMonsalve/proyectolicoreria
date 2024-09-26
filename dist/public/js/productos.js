document.addEventListener("DOMContentLoaded", function () {

    const buttonSmirnoff = document.getElementById("ver-smirnoff");

    const modal = document.getElementById("modal-smirnoff");
    const closeModal = document.querySelector(".close");

    // Información del producto Smirnoff
    const productoSmirnoff = {
        title: "Smirnoff",
        image: "/img/cerveza/smirnoff.jpg",
        price: "$16.000",
        description: "Smirnoff para pasar un rato agradable. Precio: $16.000"
    };

    function abrirModal() {
        // Actualiza el contenido del modal
        modal.querySelector("h2").textContent = productoSmirnoff.title;
        modal.querySelector("img").src = productoSmirnoff.image;
        modal.querySelector("p").textContent = productoSmirnoff.description;

        // Muestra el modal
        modal.style.display = "flex";
    }

    buttonSmirnoff.addEventListener("click", function () {
        abrirModal(); // Llama a la función para abrir el modal
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none"; // Cierra el modal al hacer clic en la "X"
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Cierra el modal si se hace clic fuera
        }
    });

});

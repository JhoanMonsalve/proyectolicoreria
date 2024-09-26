document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".btn-comprar");

    const modal = document.getElementById("modal-producto");
    const modalTitle = document.getElementById("modal-title");
    const modalImage = document.getElementById("modal-image");
    const modalPrice = document.getElementById("modal-price");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.querySelector(".close");

    // Información del producto Smirnoff
    const productoSmirnoff = {
        title: "Smirnoff",
        image: "/img/cerveza/smirnoff.jpg", // Asegúrate de que la ruta de la imagen sea correcta
        price: "$8.000",
        description: "Vodka de calidad superior con un sabor suave y puro, perfecto para cócteles."
    };

    function abrirModal() {
        // Usamos el objeto de Smirnoff directamente
        modalTitle.textContent = productoSmirnoff.title;
        modalImage.src = productoSmirnoff.image;
        modalPrice.textContent = productoSmirnoff.price;
        modalDescription.textContent = productoSmirnoff.description;

        modal.style.display = "flex"; // Muestra el modal
    }

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            // Asumimos que el botón de Smirnoff es el único en la página
            abrirModal(); // Llama a abrirModal sin necesidad de pasar un ID
        });
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

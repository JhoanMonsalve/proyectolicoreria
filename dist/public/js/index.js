document.addEventListener("DOMContentLoaded", function () {

    const buttonSmirnoff = document.getElementById("ver-smirnoff");
    const modal = document.getElementById("modal-smirnoff");
    const closeModal = document.querySelector(".close");

    function abrirModal() {
        modal.style.display = "flex"; // Muestra el modal
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

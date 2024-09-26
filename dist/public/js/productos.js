document.addEventListener("DOMContentLoaded", function () {

    const buttonSmirnoff = document.getElementById("ver-smirnoff");

    const modal = document.getElementById("modal-smirnoff");
    const closeModal = document.querySelector(".close");

    
    const productoSmirnoff = {
        title: "Smirnoff",
        image: "/img/cerveza/smirnoff.jpg",
        price: "$16.000",
        description: "El Smirnoff es el aliado perfecto para los momentos de celebración y desconexión. Con su sabor suave y equilibrado, este vodka premium es ideal para disfrutar solo, con hielo, o en tus cócteles favoritos."
    };

    function abrirModal() {
        
        modal.querySelector("h2").textContent = productoSmirnoff.title;
        modal.querySelector("img").src = productoSmirnoff.image;
        modal.querySelector("p").textContent = productoSmirnoff.description;

        
        modal.style.display = "flex";
    }

    buttonSmirnoff.addEventListener("click", function () {
        abrirModal(); 
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

document.addEventListener("DOMContentLoaded", function () {

    const buttonSmirnoff = document.getElementById("ver-smirnoff");

    const modal = document.getElementById("modal-smirnoff");
    const closeModal = document.querySelector(".close");

    
    const productoSmirnoff = {
        title: "Smirnoff",
        image: "/img/cerveza/smirnoff.jpg",
        price: "$16.000",
        description: "Smirnoff para pasar un rato agradable. Precio: $16.000"
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

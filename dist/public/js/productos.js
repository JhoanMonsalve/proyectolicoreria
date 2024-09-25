
const modal = document.getElementById("modal-smirnoff");
const btnSmirnoff = document.getElementById("ver-smirnoff");
const spanClose = document.getElementsByClassName("close")[0];


btnSmirnoff.onclick = function() {
    modal.style.display = "block";
}


spanClose.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

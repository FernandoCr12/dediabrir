function abrirImagen(src) {
    const overlay = document.getElementById("imagenOverlay");
    const imagenAmpliada = document.getElementById("imagenAmpliada");

    imagenAmpliada.src = src;
    overlay.style.display = "flex";
}

function cerrarImagen() {
    const overlay = document.getElementById("imagenOverlay");
    overlay.style.display = "none";
}
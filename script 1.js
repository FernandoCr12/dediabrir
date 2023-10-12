function abrirImagen(src) {
    const overlay = document.getElementById("imagenOverlay");
    const imagenAmpliada = document.getElementById("imagenAmpliada");

    imagenAmpliada.src = src;
    overlay.style.display = "flex";

    // Añade la animación de corazón
    const tarjeta = document.getElementById("tarjeta1");
    const imagen = tarjeta.querySelector("img");

    const rectTarjeta = tarjeta.getBoundingClientRect();
    const rectImagen = imagen.getBoundingClientRect();

    const topOffset = rectImagen.top - rectTarjeta.top;
    const leftOffset = rectImagen.left - rectTarjeta.left;

    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.top = topOffset + "px";
    heart.style.left = leftOffset + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = "scale(1.3)";
        heart.style.opacity = "0";
    }, 10);

    setTimeout(() => {
        heart.remove();
    }, 500);
}

function cerrarImagen() {
    const overlay = document.getElementById("imagenOverlay");
    overlay.style.display = "none";
}

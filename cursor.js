document.addEventListener("DOMContentLoaded", () => {
    const cursorImg = document.getElementById("cursor-img");
    let mouseX = 0, mouseY = 0; // Posición del cursor
    let imgX = 0, imgY = 0; // Posición de la imagen

    document.addEventListener("mousemove", (event) => {
        mouseX = event.clientX - 10; // Ajusta estos valores para acercarlo más
        mouseY = event.clientY - 10;

    });

    function animate() {
        // Ajusta la velocidad (0.1 = lento, 0.2 = más rápido)
        imgX += (mouseX - imgX) * 0.15;
        imgY += (mouseY - imgY) * 0.15;

        cursorImg.style.left = `${imgX}px`;
        cursorImg.style.top = `${imgY}px`;

        requestAnimationFrame(animate);
    }

    animate();
});


document.addEventListener("DOMContentLoaded", () => {
    const cursorImg = document.getElementById("cursor-img");
    let mouseX = 0, mouseY = 0; // Posición del mouse
    let imgX = 0, imgY = 0; // Posición de la imagen

    document.addEventListener("mousemove", (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    function animate() {
        // Ajusta la velocidad del seguimiento (cuanto menor el número, más lento)
        imgX += (mouseX - imgX) * 0.1;
        imgY += (mouseY - imgY) * 0.1;

        cursorImg.style.transform = `translate(${imgX}px, ${imgY}px)`;
        requestAnimationFrame(animate);
    }

    animate();
});

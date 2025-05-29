document.addEventListener("DOMContentLoaded", () => {
    const cursorImg = document.getElementById("cursor-img");

    let mouseX = 0, mouseY = 0;
    let imgX = 0, imgY = 0;
    let lastX = 0, lastY = 0;
    let speedFactor = 0.1; // Factor de velocidad inicial

    document.addEventListener("mousemove", (event) => {
        mouseX = event.clientX - 10;
        mouseY = event.clientY - 10;

        // Calcular velocidad del movimiento del cursor
        const deltaX = Math.abs(event.clientX - lastX);
        const deltaY = Math.abs(event.clientY - lastY);
        const speed = Math.sqrt(deltaX ** 2 + deltaY ** 2);

        // Ajustar el factor de distancia según la velocidad del cursor
        speedFactor = Math.min(0.5, Math.max(0.1, speed / 50));

        // Almacenar posición anterior
        lastX = event.clientX;
        lastY = event.clientY;
    });

    function animate() {
        imgX += (mouseX - imgX) * speedFactor;
        imgY += (mouseY - imgY) * speedFactor;

        cursorImg.style.transform = `translate(${imgX}px, ${imgY}px)`;

        requestAnimationFrame(animate);
    }

    animate();
});





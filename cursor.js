document.addEventListener("DOMContentLoaded", () => {
    const cursorImg = document.getElementById("cursor-img");
    const navbar = document.querySelector("header");
    const footer = document.querySelector("footer");

    let mouseX = 0, mouseY = 0;
    let imgX = 0, imgY = 0;
    let lastMouseX = 0, lastMouseY = 0;
    let speedFactor = 0.2; // Factor base de velocidad

    document.addEventListener("mousemove", (event) => {
        const navbarHeight = navbar.offsetHeight;
        const footerTop = footer.offsetTop - 50;

        mouseX = Math.max(0, event.clientX - 10);
        mouseY = Math.min(Math.max(event.clientY - 10, navbarHeight), footerTop);

        // Calcular velocidad del cursor
        const deltaX = Math.abs(event.clientX - lastMouseX);
        const deltaY = Math.abs(event.clientY - lastMouseY);
        const speed = Math.sqrt(deltaX ** 2 + deltaY ** 2);

        // Ajustar velocidad dinámica
        speedFactor = 0.08 + Math.min(0.5, speed / 100);

        lastMouseX = event.clientX;
        lastMouseY = event.clientY;
    });

    function animate() {
        imgX += (mouseX - imgX) * speedFactor;
        imgY += (mouseY - imgY) * speedFactor;

        cursorImg.style.transform = `translate(${imgX}px, ${imgY}px)`;

        requestAnimationFrame(animate);
    }

    animate();
});






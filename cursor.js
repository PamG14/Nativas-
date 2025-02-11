document.addEventListener("DOMContentLoaded", () => {
    const cursorImg = document.getElementById("cursor-img");
    const navbar = document.querySelector("header"); // Navbar
    const footer = document.querySelector("footer"); // Footer

    let mouseX = 0, mouseY = 0;
    let imgX = 0, imgY = 0;

    document.addEventListener("mousemove", (event) => {
        const navbarHeight = navbar.offsetHeight; // Altura de la navbar
        const footerTop = footer.offsetTop; // Posición superior del footer

        mouseX = event.clientX - 10;
        mouseY = event.clientY - 10;

        // Limitar el área de movimiento
        if (mouseY < navbarHeight) {
            mouseY = navbarHeight; // No sube más arriba de la navbar
        }
        if (mouseY > footerTop - 50) { 
            mouseY = footerTop - 50; // No baja más allá del footer
        }
    });

    function animate() {
        imgX += (mouseX - imgX) * 0.3;
        imgY += (mouseY - imgY) * 0.3;

        cursorImg.style.left = `${imgX}px`;
        cursorImg.style.top = `${imgY}px`;

        requestAnimationFrame(animate);
    }

    animate();
});




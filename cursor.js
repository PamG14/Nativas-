document.addEventListener("DOMContentLoaded", () => {
    const cursorImg = document.getElementById("cursor-img");
    const navbar = document.querySelector("header");
    const footer = document.querySelector("footer");

    let mouseX = 0, mouseY = 0;
    let imgX = 0, imgY = 0;

    const navbarHeight = navbar.offsetHeight;
    const footerTop = footer.offsetTop - 50; // Ajuste directo para el margen inferior

    document.addEventListener("mousemove", ({ clientX, clientY }) => {
        mouseX = Math.max(0, clientX - 10);
        mouseY = Math.min(Math.max(clientY - 10, navbarHeight), footerTop);
    });

    function animate() {
        imgX += (mouseX - imgX) * 0.3;
        imgY += (mouseY - imgY) * 0.3;

        cursorImg.style.transform = `translate(${imgX}px, ${imgY}px)`;

        requestAnimationFrame(animate);
    }

    animate();
});





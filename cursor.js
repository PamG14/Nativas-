document.addEventListener("DOMContentLoaded", () => {
    const cursorImg = document.getElementById("cursor-img");
    let mouseX = 0, mouseY = 0; 
    let imgX = 0, imgY = 0; 

    document.addEventListener("mousemove", (event) => {
        mouseX = event.clientX - 25; // Centra la imagen respecto al cursor
        mouseY = event.clientY - 25;
    });

    function animate() {
        imgX += (mouseX - imgX) * 0.2; // Ajusta la velocidad de seguimiento
        imgY += (mouseY - imgY) * 0.2;

        cursorImg.style.transform = `translate(${imgX}px, ${imgY}px)`;
        requestAnimationFrame(animate);
    }

    animate();
});


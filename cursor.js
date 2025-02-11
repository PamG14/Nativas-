document.addEventListener("mousemove", (event) => {
    const cursorImg = document.getElementById("cursor-img");
    cursorImg.style.left = `${event.clientX}px`;
    cursorImg.style.top = `${event.clientY}px`;
});

document.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("mouseover", () => {
    anime({
      targets: box,
      rotate: "1turn",
      easing: "easeInOutQuad",
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".whatsapp-btn, .logo img, h1, .footer-container"
  );

  elements.forEach((el, index) => {
    el.classList.add("animate-in");

    setTimeout(() => {
      el.classList.add("visible");
    }, 200 * index);
  });
});

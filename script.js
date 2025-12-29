
(function () {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("lightboxClose");

  if (!lightbox || !img || !closeBtn) {
    console.warn("Lightbox: missing HTML elements (#lightbox, #lightboxImg, #lightboxClose)");
    return;
  }

  function openLightbox(src, alt) {
    img.src = src;
    img.alt = alt || "";
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    img.src = "";
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".gallery img").forEach((el) => {
    el.style.cursor = "zoom-in";
    el.addEventListener("click", (event) => {
      event.preventDefault();
      openLightbox(el.currentSrc || el.src, el.alt);
    });
  });

  img.addEventListener("click", closeLightbox);
  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("is-open")) closeLightbox();
  });
})();


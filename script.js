
(function () {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("lightboxClose");

  // Si le HTML de la lightbox n'existe pas, on sort proprement
  if (!lightbox || !img || !closeBtn) {
    console.warn("Lightbox: éléments HTML manquants (#lightbox, #lightboxImg, #lightboxClose)");
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
    el.addEventListener("click", () => openLightbox(el.src, el.alt));
  });

  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("is-open")) closeLightbox();
  });
})();


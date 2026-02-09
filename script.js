
(function () {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");
  const galleryImages = Array.from(document.querySelectorAll(".gallery img"));
  let currentIndex = -1;

  if (lightbox && img && closeBtn) {
    function showImage(index) {
      if (!galleryImages.length) return;
      const total = galleryImages.length;
      currentIndex = (index + total) % total;
      const target = galleryImages[currentIndex];
      img.src = target.currentSrc || target.src;
      img.alt = target.alt || "";
    }

    function openLightbox(index) {
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      showImage(index);
    }

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      img.src = "";
      currentIndex = -1;
      document.body.style.overflow = "";
    }

    function showNext() {
      if (!galleryImages.length) return;
      showImage(currentIndex + 1);
    }

    function showPrev() {
      if (!galleryImages.length) return;
      showImage(currentIndex - 1);
    }

    if (galleryImages.length < 2) {
      if (prevBtn) prevBtn.hidden = true;
      if (nextBtn) nextBtn.hidden = true;
    }

    galleryImages.forEach((el, index) => {
      el.style.cursor = "zoom-in";
      el.addEventListener("click", (event) => {
        event.preventDefault();
        openLightbox(index);
      });
    });

    img.addEventListener("click", closeLightbox);
    closeBtn.addEventListener("click", closeLightbox);
    if (prevBtn) {
      prevBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        showPrev();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        showNext();
      });
    }
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") {
        closeLightbox();
        return;
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        showNext();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        showPrev();
      }
    });
  } else {
    console.warn("Visionneuse : éléments HTML manquants (#lightbox, #lightboxImg, #lightboxClose)");
  }
})();

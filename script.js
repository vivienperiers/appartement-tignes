
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
    console.warn("Lightbox: missing HTML elements (#lightbox, #lightboxImg, #lightboxClose)");
  }

  const translations = {
    en: {
      title: "Apartment for rent - Tignes le Lac",
      meta_description: "Apartment for rent in Tignes le Lac - photos, amenities, location, contact.",
      hero_title: "Tignes le Lac",
      hero_subtitle: "Dual-aspect apartment - 3 bedrooms - sleeps 8",
      action_photos: "View photos",
      action_contact: "Contact",
      section_info: "Key info",
      label_area: "Area",
      label_rooms: "Bedrooms",
      label_furnished: "Sleeps",
      places: "8",
      label_rent: "Bathrooms / WC",
      outside: "Terrace",
      price: "Rental price",
      value_price: "On request",
      section_description: "Description",
      desc_text: "Beautiful 75 m2 apartment on the 6th floor, fully renovated, with a south-facing terrace and no overlooking. Beautiful views of Lake Tignes 2100 and the Grande Motte Glacier. Ideal for skiers and very pleasant for non-skiers. Living room/dining room. Open-plan kitchen, fully equipped. 3 bedrooms (2 double beds, 4 single beds). 2 bathrooms and 2 WCs.",
      section_space: "Amenities",
      space_text: "TV, WiFi, microwave, dishwasher, induction cooktop, Nespresso machine, coffee maker, kettle, toaster, fondue and raclette sets, hair dryer...",
      ski_space: "Ski locker",
      ski_text: "Secure ski locker on the ground floor, closed at night.",
      section_access: "Parking",
      access_text: "P3 parking, Tignes le Lac (recommended).",
      section_photos: "Photos",
      photos_living: "Living room",
      photos_kitchen: "Kitchen",
      photos_bedroom: "Bedroom",
      photos_bathroom: "Bathroom",
      photos_view: "View",
      alt_living_1: "Living room 1",
      alt_living_2: "Living room 2",
      alt_living_4: "Living room 4",
      alt_kitchen_1: "Kitchen 1",
      alt_kitchen_2: "Kitchen 2",
      alt_kitchen_3: "Kitchen 3",
      alt_bedroom_1: "Bedroom 1",
      alt_bedroom_2: "Bedroom 2",
      alt_bedroom_3: "Bedroom 3",
      alt_bathroom_1: "Bathroom 1",
      alt_bathroom_2: "Bathroom 2",
      alt_bathroom_3: "Bathroom 3",
      alt_view_1: "View 1",
      alt_view_2: "View 2",
      alt_view_3: "View 3",
      alt_slopes_1: "Ski slopes 1",
      section_location: "Location",
      location_text: "Le Lac, Tignes. 1 min from the slopes, close to ski rental.",
      section_contact: "Contact",
      contact_line: "For reservations:",
      contact_email: "Email",
      contact_phone: "Phone",
      footer_text: "Apartment for rent",
      lightbox_close: "Close",
      lightbox_prev: "Previous photo",
      lightbox_next: "Next photo",
      lang_toggle_label: "Switch to French",
      link: "See all webcams on tignes.net"
    },
    fr: {
      title: "Appartement \u00e0 louer - Tignes le Lac",
      meta_description: "Appartement \u00e0 louer \u00e0 Tignes le Lac - photos, \u00e9quipements, localisation, contact.",
      hero_title: "Tignes le Lac",
      hero_subtitle: "Appartement traversant - 3 chambres - 8 personnes",
      action_photos: "Photos",
      action_contact: "Contacter",
      section_info: "Infos",
      label_area: "Surface",
      label_rooms: "Chambres",
      label_furnished: "couchages",
      places: "8",
      label_rent: "Salles d'eau - WC",
      outside: "Terasse",
      price: "prix loacation",
      value_price: "sur demande",
      section_description: "Description",
      desc_text: "Bel appartement de 75 m2 au 6e \u00e9tage, enti\u00e8rement r\u00e9nov\u00e9, avec terrasse plein sud, sans vis-\u00e0-vis. Belle vue sur le lac de Tignes 2100 et le glacier de la Grande Motte. Emplacement id\u00e9al pour les skieurs et tr\u00e8s agr\u00e9able pour les non-skieurs. S\u00e9jour/salle a manger. Cuisine ouverte, enti\u00e8rement \u00e9quip\u00e9. 3 chambres (2 lits doubles, 4 lits simples). 2 salles de bain et 2 WC",
      section_space: "Equipements",
      space_text: "TV, WiFi, micro-ondes, lave vaisselle, plaques \u00e0 induction, machine Nespresso, percolateur, bouilloire, grille-pain, sets \u00e0 fondue et raquelette, s\u00e8che-cheveux...",
      ski_space: "Local \u00e0 skis",
      ski_text: "Local \u00e0 skis securis\u00e9 au rez-de-chauss\u00e9e et ferm\u00e9 la nuit.",
      section_access: "Parking",
      access_text: "Parking P3 Tignes le Lac (recommand\u00e9)",
      section_photos: "Photos",
      photos_living: "Salon",
      photos_kitchen: "Cuisine",
      photos_bedroom: "Chambre",
      photos_bathroom: "Salle de bain",
      photos_view: "Vue",
      alt_living_1: "Salon 1",
      alt_living_2: "Salon 2",
      alt_living_4: "Salon 4",
      alt_kitchen_1: "Cuisine 1",
      alt_kitchen_2: "Cuisine 2",
      alt_kitchen_3: "Cuisine 3",
      alt_bedroom_1: "Chambre 1",
      alt_bedroom_2: "Chambre 2",
      alt_bedroom_3: "Chambre 3",
      alt_bathroom_1: "Salle de bain 1",
      alt_bathroom_2: "Salle de bain 2",
      alt_bathroom_3: "Salle de bain 3",
      alt_view_1: "Vue 1",
      alt_view_2: "Vue 2",
      alt_view_3: "Vue 3",
      alt_slopes_1: "Pistes 1",
      section_location: "Localisation",
      location_text: "Le Lac, Tignes. 1 min des pistes, proche de la location de skis.",
      section_contact: "Contact",
      contact_line: "Pour les r\u00e9servations :",
      contact_email: "Email",
      contact_phone: "T\u00e9l\u00e9phone",
      footer_text: "Appartement \u00e0 louer",
      lightbox_close: "Fermer",
      lightbox_prev: "Photo pr\u00e9c\u00e9dente",
      lightbox_next: "Photo suivante",
      lang_toggle_label: "Passer en anglais",
      link: "Voir toutes les webcams sur tignes.net"
    }
  };

  const langToggle = document.getElementById("langToggle");

  function setLanguage(lang) {
    const strings = translations[lang] || translations.en;
    const metaDescription = document.querySelector('meta[name="description"]');

    document.documentElement.lang = lang;
    document.title = strings.title;
    if (metaDescription) metaDescription.setAttribute("content", strings.meta_description);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!Object.prototype.hasOwnProperty.call(strings, key)) return;
      const value = strings[key];
      const attr = el.getAttribute("data-i18n-attr");
      if (attr) {
        el.setAttribute(attr, value);
      } else {
        el.textContent = value;
      }
    });

    if (langToggle) {
      const nextLang = lang === "en" ? "fr" : "en";
      langToggle.textContent = nextLang.toUpperCase();
      langToggle.setAttribute("aria-label", strings.lang_toggle_label);
    }

    try {
      localStorage.setItem("lang", lang);
    } catch (error) {
      console.warn("Language preference could not be saved.");
    }
  }

  let savedLang = null;
  try {
    savedLang = localStorage.getItem("lang");
  } catch (error) {
    savedLang = null;
  }

  const initialLang = savedLang && translations[savedLang]
    ? savedLang
    : (document.documentElement.lang || "en");
  setLanguage(initialLang);

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const nextLang = document.documentElement.lang === "en" ? "fr" : "en";
      setLanguage(nextLang);
    });
  }
})();

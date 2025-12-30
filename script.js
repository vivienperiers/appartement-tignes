
(function () {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("lightboxClose");

  if (lightbox && img && closeBtn) {
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
  } else {
    console.warn("Lightbox: missing HTML elements (#lightbox, #lightboxImg, #lightboxClose)");
  }

  const translations = {
    en: {
      title: "Apartment for rent - Tignes le Lac",
      meta_description: "Apartment for rent in Tignes le Lac - photos, amenities, location, contact.",
      hero_title: "Tignes le Lac",
      hero_subtitle: "3-bedroom / 70 m2 - Bright - Ski-in/ski-out - Sunday to Sunday",
      action_photos: "View photos",
      action_contact: "Contact",
      section_info: "Key info",
      label_area: "Area",
      label_rooms: "Rooms",
      label_furnished: "Furnished",
      label_rent: "Rent",
      label_utilities: "Utilities",
      label_availability: "Availability",
      value_yes: "Yes",
      value_now: "Now",
      section_description: "Description",
      desc_text: "Beautiful 76 m2 duplex apartment on the 6th floor, completely renovated, with a south-facing terrace, not overlooked. Beautiful views of Lake Tignes 2000 and the Grande Motte Glacier. Ideal location for skiers and very pleasant for non-skiers. Living room/kitchen, fully equipped. 3 bedrooms (2 double beds, 4 single beds).",
      section_space: "The space",
      space_text: "Ski locker located in the ski room on the ground floor and closed at night.",
      section_access: "Guest access",
      access_text: "Tip: book parking (P2 or P3) a few weeks before arrival (especially in high season) on tignes.net.",
      amenities_text: "Amenities: TV, WiFi, kitchenette, microwave, fridge, freezer, coffee machine, kettle, toaster, hair dryer.",
      section_photos: "Photos",
      photos_living: "Living room",
      photos_kitchen: "Kitchen",
      photos_bedroom: "Bedroom",
      photos_bathroom: "Bathroom",
      photos_view: "View",
      alt_living_1: "Living room 1",
      alt_living_2: "Living room 2",
      alt_living_3: "Living room 3",
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
      contact_line: "For reservations contact:",
      contact_email: "Email",
      contact_phone: "Phone",
      footer_text: "Apartment for rent",
      lightbox_close: "Close",
      lang_toggle_label: "Switch to French",
      link:"See all webcams on tignes.net"
    },
    fr: {
      title: "Appartement \u00e0 louer - Tignes le Lac",
      meta_description: "Appartement \u00e0 louer \u00e0 Tignes le Lac - photos, \u00e9quipements, localisation, contact.",
      hero_title: "Tignes le Lac",
      hero_subtitle: "T4 / 70 m2 - Lumineux - Au pied des pistes - Dimanche au dimanche",
      action_photos: "Voir les photos",
      action_contact: "Contacter",
      section_info: "Infos cl\u00e9s",
      label_area: "Surface",
      label_rooms: "Pi\u00e8ces",
      label_furnished: "Meubl\u00e9",
      label_rent: "Loyer",
      label_utilities: "Charges",
      label_availability: "Disponibilit\u00e9",
      value_yes: "Oui",
      value_now: "Disponible",
      section_description: "Description",
      desc_text: "Bel appartement duplex de 76 m2 au 6e \u00e9tage, enti\u00e8rement r\u00e9nov\u00e9, avec terrasse plein sud, sans vis-\u00e0-vis. Belle vue sur le lac de Tignes 2000 et le glacier de la Grande Motte. Emplacement id\u00e9al pour les skieurs et tr\u00e8s agr\u00e9able pour les non-skieurs. S\u00e9jour/cuisine, enti\u00e8rement \u00e9quip\u00e9. 3 chambres (2 lits doubles, 4 lits simples).",
      section_space: "Le logement",
      space_text: "Casier \u00e0 skis situ\u00e9 dans le local \u00e0 skis au rez-de-chauss\u00e9e, ferm\u00e9 la nuit.",
      section_access: "Acc\u00e8s voyageurs",
      access_text: "Conseil : r\u00e9server le parking (P2 ou P3) quelques semaines avant l'arriv\u00e9e (surtout en haute saison) sur tignes.net.",
      amenities_text: "\u00c9quipements : TV, WiFi, kitchenette, micro-ondes, frigo, cong\u00e9lateur, machine \u00e0 caf\u00e9, bouilloire, grille-pain, s\u00e8che-cheveux.",
      section_photos: "Photos",
      photos_living: "Salon",
      photos_kitchen: "Cuisine",
      photos_bedroom: "Chambre",
      photos_bathroom: "Salle de bain",
      photos_view: "Vue",
      alt_living_1: "Salon 1",
      alt_living_2: "Salon 2",
      alt_living_3: "Salon 3",
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
      lang_toggle_label: "Passer en anglais",
      link:"Voir toutes les webcams sur tignes.net"
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


// Tout ce que vous modifiez souvent est ici : liens, images, spectacles, textes.
// Les images doivent être dans le dossier images/ avec EXACTEMENT ces noms.
window.SITE = {
  email: "booking@exemple.com", // À REMPLACER par votre courriel de booking/presse
  tagline: "Americana en français. Des histoires de route, de poussière et de feu de camp.",

  links: {
    spotify: "https://open.spotify.com/artist/5urUT2CJnCT29Qy6wGP13h?si=95YSGFdlRfuw_PPJ0QmruQ",
    apple: "https://music.apple.com/ca/artist/pierro/1552223893",
    deezer: "https://www.deezer.com/fr/artist/418074082",
    youtube: "https://www.youtube.com/@pierro7522",
    instagram: "", // optionnel : ajoutez l’URL pour afficher le lien
    facebook: "",
    tiktok: ""
  },

  images: {
    hero: "images/SPOTIFY - bannerv67.jpg",
    profile: "images/SPOTIFY PROFILE PIC.jpg"
  },

  // Chaque sortie peut avoir son propre lien "url" (sinon : page Spotify de l’artiste).
  releases: [
    { title: "Balles de plomb", image: "images/Offical released COVER - Balles de plomb - compressd.jpg", alt: "Pochette de Balles de plomb", url: "" },
    { title: "Rouge ou gris", image: "images/RG-3000X3000.jpg", alt: "Pochette de Rouge ou gris", url: "" },
    { title: "10K écoutes", image: "images/10K streams.jpg", alt: "Visuel des 10 000 écoutes", url: "" }
  ],

  promo: { image: "images/Offical released COVER - Balles de plomb - compressd.jpg", alt: "Pochette de Balles de plomb" },

  gallery: [
    { image: "images/IMG_1686.jpg", alt: "PIERRO sur scène" },
    { image: "images/IMG_1675.jpg", alt: "PIERRO en spectacle" },
    { image: "images/IMG_1689.jpg", alt: "PIERRO en concert" },
    { image: "images/IMG_1676.jpg", alt: "PIERRO en répétition" }
  ],

  // Exemple : { date: "2026-12-05", dateLabel: "5 décembre 2026", venue: "Salle X", city: "Montréal", tickets: "https://..." }
  shows: []
};

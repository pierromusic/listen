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
    hero: "SPOTIFY - bannerv67.jpg",
    profile: "SPOTIFY PROFILE PIC.png"
  },

  // Chaque sortie peut avoir son propre lien "url" (sinon : page Spotify de l’artiste).
  releases: [
    { title: "Balles de plomb", image: "Offical released COVER - Balles de plomb - compressd.jpg", alt: "Pochette de Balles de plomb", url: "" },
    { title: "Rouge ou gris", image: "RG-3000X3000.png", alt: "Pochette de Rouge ou gris", url: "" },
    { title: "10K écoutes", image: "10K streams.jpg", alt: "Visuel des 10 000 écoutes", url: "" }
  ],

  promo: { image: "Offical released COVER - Balles de plomb - compressd.jpg", alt: "Pochette de Balles de plomb" },

  gallery: [
    { image: "IMG_1686.JPG", alt: "PIERRO sur scène" },
    { image: "IMG_1675.JPG", alt: "PIERRO en spectacle" },
    { image: "IMG_1680.JPG", alt: "PIERRO en concert" },
    { image: "IMG_1676.JPG", alt: "PIERRO en répétition" }
  ],

  // Exemple : { date: "2026-12-05", dateLabel: "5 décembre 2026", venue: "Salle X", city: "Montréal", tickets: "https://..." }
  shows: []
};

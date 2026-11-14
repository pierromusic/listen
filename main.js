(() => {
  const S = window.SITE;
  const $ = s => document.querySelector(s);
  const url = p => encodeURI(p); // gère les espaces dans les noms de fichiers
  const ext = { target: "_blank", rel: "noopener" };
  const el = (t, a = {}, ...kids) => {
    const n = document.createElement(t);
    for (const [k, v] of Object.entries(a)) n.setAttribute(k, v);
    n.append(...kids);
    return n;
  };
  const pic = (p, alt) => {
    const i = el("img", { src: url(p), alt, loading: "lazy" });
    i.addEventListener("error", () => { i.style.visibility = "hidden"; });
    return i;
  };

  $(".hero").style.setProperty("--hero", `url("${url(S.images.hero)}")`);
  $("#tagline").textContent = S.tagline;

  const platforms = [["spotify", "Spotify"], ["apple", "Apple Music"], ["deezer", "Deezer"], ["youtube", "YouTube"]];
  document.querySelectorAll("[data-platforms]").forEach(box =>
    platforms.forEach(([k, label]) => S.links[k] && box.append(el("a", { class: "btn ghost", href: S.links[k], ...ext }, label))));

  S.releases.forEach(r => $("#releases").append(
    el("article", { class: "release" }, pic(r.image, r.alt), el("h3", {}, r.title),
      el("a", { class: "link", href: r.url || S.links.spotify, ...ext }, "Écouter"))));

  const list = $("#shows");
  if (!S.shows.length) {
    list.replaceWith(el("p", { class: "empty" }, "Aucune date annoncée pour l’instant. Suivez PIERRO pour connaître les prochains spectacles."));
  } else {
    S.shows.forEach(s => list.append(el("li", {},
      el("time", { datetime: s.date }, s.dateLabel), el("span", {}, `${s.venue}, ${s.city}`),
      s.tickets ? el("a", { class: "link", href: s.tickets, ...ext }, "Billets") : "")));
  }

  const dlg = $("#lightbox"), big = dlg.querySelector("img");
  S.gallery.forEach(g => {
    const b = el("button", { type: "button", "aria-label": "Agrandir la photo" }, pic(g.image, g.alt));
    b.addEventListener("click", () => { big.src = url(g.image); big.alt = g.alt; dlg.showModal(); });
    $("#gallery").append(b);
  });
  dlg.addEventListener("click", () => dlg.close());

  $("#promo-cover").append(pic(S.promo.image, S.promo.alt));

  const labels = { spotify: "Spotify", apple: "Apple Music", deezer: "Deezer", youtube: "YouTube", instagram: "Instagram", facebook: "Facebook", tiktok: "TikTok" };
  Object.entries(S.links).forEach(([k, v]) => v && $("#socials").append(el("a", { href: v, ...ext }, labels[k] || k)));
  const mail = $("#mail"); mail.href = `mailto:${S.email}`; mail.textContent = S.email;
  $("#year").textContent = new Date().getFullYear();

  const nav = $(".nav"), tg = $(".nav-toggle");
  tg.addEventListener("click", () => tg.setAttribute("aria-expanded", nav.classList.toggle("open")));
  nav.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => { nav.classList.remove("open"); tg.setAttribute("aria-expanded", "false"); }));
})();

// Footer year
document.getElementById("year")?.appendChild(
  document.createTextNode(String(new Date().getFullYear()))
);

// If arriving with a hash (#project1), scroll neatly and highlight it a bit
window.addEventListener("load", () => {
  const id = window.location.hash?.slice(1);
  if (!id) return;

  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth", block: "start" });

  el.style.transition = "outline 250ms ease, box-shadow 250ms ease";
  el.style.outline = "2px solid rgba(124,58,237,.6)";
  el.style.boxShadow = "0 0 0 6px rgba(124,58,237,.15)";

  setTimeout(() => {
    el.style.outline = "none";
    el.style.boxShadow = "";
  }, 1400);
});

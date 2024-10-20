document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  function revealSections() {
    const windowHeight = window.innerHeight;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < windowHeight - 150) {
        section.classList.add("visible");
      }
    });
  }

  // Appelle la fonction pour révéler les sections au chargement
  revealSections();

  // Écoute le défilement
  window.addEventListener("scroll", revealSections);
});

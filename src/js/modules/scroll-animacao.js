export default function animationScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.8;

    function animarScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;

        if (isSectionVisible) {
          section.classList.add("ativo");
        }
        else{
          section.classList.remove("ativo");
        }
      });
    }
    animarScroll()
    window.addEventListener("scroll", animarScroll);
  }
}

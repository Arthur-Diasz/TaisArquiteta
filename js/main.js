window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    // Altere o valor para ajustar quando o fundo deve aparecer
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const animateElements = document.querySelectorAll(".animate");

  function animateOnScroll() {
    animateElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Checa se o elemento está visível (ajuste o valor de 150 conforme necessário)
      if (elementTop < windowHeight - 150) {
        element.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Chama a função para o caso do elemento já estar na tela
});





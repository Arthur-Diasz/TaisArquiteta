// Função para detectar quando os elementos entram na tela
function scrollAnimation() {
  const elements = document.querySelectorAll("[data-scroll]");
  elements.forEach((element) => {
    const position = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (position - windowHeight <= -50) {
      element.classList.add("visible");
    }
  });
}

// Ativar animação ao rolar a página
window.addEventListener("scroll", scrollAnimation);
window.addEventListener("load", scrollAnimation);

AOS.init({
  duration: 1000, // Duração da animação em milissegundos
  easing: "ease-in-out", // Tipo de easing para a animação
  once: true, // Executa a animação apenas uma vez ao rolar a página
});

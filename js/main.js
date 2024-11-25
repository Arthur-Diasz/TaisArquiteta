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

//NUMEROS

function animateNumber(targetElement, startValue, endValue, duration) {
  let startTime = null;

  // Função de animação
  function animate(time) {
    if (!startTime) startTime = time;
    const progress = time - startTime;
    const currentValue = Math.min(
      startValue + (endValue - startValue) * (progress / duration),
      endValue
    );
    targetElement.innerText = Math.floor(currentValue);

    if (progress < duration) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

// Função para iniciar a animação quando a seção estiver visível
function startAnimation() {
  // Definir o valor final e iniciar a animação
  const counterElement = document.getElementById("counterProjetos");
  animateNumber(counterElement, 0, 157, 3500);

  const counterElementAnos = document.getElementById("counterAnos");
  animateNumber(counterElementAnos, 0, 7, 3500);

  const counterElementPremios = document.getElementById("counterPremios");
  animateNumber(counterElementPremios, 0, 21, 3500);
}

// Configurando o Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startAnimation(); // Iniciar a animação quando a seção aparecer na tela
        observer.unobserve(entry.target); // Parar de observar após a animação começar
      }
    });
  },
  { threshold: 0.5 }
); // 50% da seção precisa estar visível

const section = document.getElementById("conquistas");
observer.observe(section); // Observar a seção com a animação

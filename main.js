/* Funções para a SideBar */

/* Botão Hamburguer */
document.getElementById("btn-mobile").addEventListener('click', function(event){
  event.preventDefault()
});

const ActionBtn = document.getElementById('btn-mobile');

function SideBar() {
	const SideBar = document.getElementById('links');
	SideBar.classList.toggle('active')
	console.log('clickou no botão hamburguer')
}

ActionBtn.addEventListener('click', SideBar);
/* Fim Botão Hamburguer */

/* Botão Close */
document.getElementById("sair").addEventListener("click", function(event){
  event.preventDefault()
});
const SairSideBar = document.getElementById("sair");
SairSideBar.addEventListener('click', SideBar);
/* Fim Botão Close */

/* Fim Funções para a SideBar */






/* Animação da parte de compras */

/* debounce para diminuir a ocorrência de chama da função */
const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
/* debounce para diminuir a ocorrência de chama da função */

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 3.6);
  target.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
}

animeScroll();

if(target.length) {
  window.addEventListener('scroll', debounce(function() {
    animeScroll();
  }, 50));
}
/* Animação da parte de compras */
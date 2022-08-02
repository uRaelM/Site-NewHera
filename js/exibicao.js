/* Funções para a SideBar */
document.getElementById("btn-mobile").addEventListener('click', function(event){
  event.preventDefault()
  document.querySelector('#side-bar').classList.add('active');
  document.querySelector('#escurecer').classList.add('active');
  document.querySelector('.img-principal').classList.add('active');
});

document.getElementById("sair").addEventListener("click", function(event){
  event.preventDefault()
  document.querySelector('#side-bar').classList.remove('active');
  document.querySelector('#escurecer').classList.remove('active');
  document.querySelector('.img-principal').classList.remove('active');
});
/* Fim Funções para a SideBar */


/* Funções para Barra de opções do Usuário */
document.querySelector(".btn-usuario").addEventListener('click', function(event){
  event.preventDefault()
});

const AreaUsuario = document.querySelector('#area-usuario');
const ListaUsuario = document.querySelector('#bar-list-active');

function AtivaLista() {
  ListaUsuario.classList.add('active')
}
function SairLista() {
  ListaUsuario.classList.remove('active')
}

AreaUsuario.addEventListener('mouseover', AtivaLista);
AreaUsuario.addEventListener('mouseout', SairLista);


document.querySelector(".btn-sacola").addEventListener('click', function(event){
  event.preventDefault()
});
/* Fim das Funções para Barra de opções do Usuário */

/* Funções para Sacola */
const AreaSacola = document.querySelector('#area-sacola');
const ActiveSacola = document.querySelector('#area-sacola-active');

function Ativa() {
  ActiveSacola.classList.add('active')
}
function Sai() {
  ActiveSacola.classList.remove('active')
}

AreaSacola.addEventListener('mouseover', Ativa);
AreaSacola.addEventListener('mouseout', Sai);
/* Fim das Funções para Sacola */



/* Funções para PopUp de Login/Cadastro */
document.querySelector('#btn-popup').addEventListener('click', function(event){
  event.preventDefault();
  document.querySelector('#popup-login-cadastro').classList.add('active');
  document.querySelector('#escurecer').classList.add('active');
  document.querySelector('.img-principal').classList.add('active');
});

document.querySelector('#btn-sair-popup').addEventListener('click', function(event){
  event.preventDefault();
  document.querySelector('#popup-login-cadastro').classList.remove('active');
  document.querySelector('#escurecer').classList.remove('active');
  document.querySelector('.img-principal').classList.remove('active');
});
/* Fim Funções para PopUp de Login/Cadastro */


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
  }, 100));
}
/* Fim Animação da parte de compras */

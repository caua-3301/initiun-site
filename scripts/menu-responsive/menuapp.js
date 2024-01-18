//Active responsive menu
const buttomMenu = document.querySelector('#botao-menu')
buttomMenu.addEventListener('click', e => {
    buttomMenu.classList.toggle('ativo')
    const menuContent = document.querySelector("#just-toggle");
    menuContent.classList.toggle("effect-menu-bar");
})
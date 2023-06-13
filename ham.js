const botaoAbrirMenu = document.querySelector('#menu-ham')

function clickMenu(){
    const divNav = document.querySelector('#nav-oculta')
    divNav.classList.toggle('nav-o')
}

botaoAbrirMenu.addEventListener('click', clickMenu)
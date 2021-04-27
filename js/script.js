const navBar = document.querySelector('.fa-bars');
const navCross = document.querySelector('.fa-times');
const navDesktop = document.querySelector('.nav-desktop');
const desktopView = window.matchMedia('screen and (min-width: 576px)');

navBar.addEventListener('click', function() {
    navDesktop.style.display = 'block';
    navCross.style.display = 'block';
    navBar.style.display = 'none';
})

navCross.addEventListener('click', function(){
    if(desktopView.matches) {
        navDesktop.style.display = 'block';
    } else {
        navDesktop.style.display = 'none';
    }
    navBar.style.display = 'block';
    navCross.style.display = 'none';
})
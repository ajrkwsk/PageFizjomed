const navBar = document.querySelector('.fa-bars');
const navCross = document.querySelector('.fa-times');
const navDesktop = document.querySelector('.nav-desktop');

navBar.addEventListener('click', function() {
    navDesktop.style.display = 'block';
    navCross.style.display = 'block';
    navBar.style.display = 'none';
})

navCross.addEventListener('click', function(){
    navDesktop.style.display = 'none';
    navBar.style.display = 'block';
    navCross.style.display = 'none';
})
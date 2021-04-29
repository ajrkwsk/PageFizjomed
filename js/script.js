const navBar = document.querySelector('.fa-bars');
const navCross = document.querySelector('.fa-times');
const navDesktop = document.querySelector('.nav-desktop');
const desktopView = window.matchMedia('screen and (min-width: 576px)');
const card = document.querySelectorAll('.card');

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

let counter = 0;
function changeCard() {
    for(let i = 0; i < card.length; i++) {
        card[i].style.display = 'none';
    }
    counter++;
    if(counter > card.length) {
        counter = 1;
    }
    card[counter - 1].style.display = 'block';
    setTimeout(changeCard, 3000);

}

// changeCard();
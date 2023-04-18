const container = document.querySelector('.hamburger-container');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    container.classList.toggle('show-menu');
});

function showMobile() {
    let mobileMenu = document.querySelector('.mobile-menu');

    if(mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open')
        document.querySelector('.icon').src="img/icon-arrow-down.svg"
    }else{
        mobileMenu.classList.add('open')
        document.querySelector('.icon').src="img/icon-arrow-up.svg"
    }
};

function showMobile2() {
    let mobileMenu2 = document.querySelector('.mobile-menu-2');

    if(mobileMenu2.classList.contains('open-2')) {
        mobileMenu2.classList.remove('open-2')
        document.querySelector('.icon-2').src="img/icon-arrow-down.svg"
    }else{
        mobileMenu2.classList.add('open-2')
        document.querySelector('.icon-2').src="img/icon-arrow-up.svg"
    }
};

function showDesktop() {
    let desktopMenu = document.querySelector('.desktop-menu');

    if(desktopMenu.classList.contains('open-3')) {
        desktopMenu.classList.remove('open-3')
        document.querySelector('.icon-3').src="img/icon-arrow-down.svg"
    }else{
        desktopMenu.classList.add('open-3')
        document.querySelector('.icon-3').src="img/icon-arrow-up.svg"
    }
};

function showDesktop2() {
    let desktopMenu2 = document.querySelector('.desktop-menu-2');

    if(desktopMenu2.classList.contains('open-4')) {
        desktopMenu2.classList.remove('open-4')
        document.querySelector('.icon-4').src="img/icon-arrow-down.svg"
    }else{
        desktopMenu2.classList.add('open-4')
        document.querySelector('.icon-4').src="img/icon-arrow-up.svg"
    }
};
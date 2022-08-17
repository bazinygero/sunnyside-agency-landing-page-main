const nav = document.querySelector('nav');
const burger = document.querySelector('.burger-btn');
const navlist = nav.querySelector('ul');

function mobileNav(a) {
    nav.classList[a ? 'add' : 'remove']('mobile-menu');
    if (nav.classList.contains('mobile-menu')) {
        navlist.style.display = 'none';
        burger.addEventListener('click', function(){

            navlist.style.display = navlist.style.display === 'none' ? 'flex' : 'none';
        });
    } else {
        navlist.style.display = 'flex';
    }
}
      
window.onresize = function() {
    mobileNav(this.innerWidth < 697);  
}
window.onresize();

"use strict";var nav=document.querySelector("nav"),burger=document.querySelector(".burger-btn"),navlist=nav.querySelector("ul");function mobileNav(e){nav.classList[e?"add":"remove"]("mobile-menu"),nav.classList.contains("mobile-menu")?(navlist.style.display="none",burger.addEventListener("click",(function(){navlist.style.display="none"===navlist.style.display?"flex":"none"}))):navlist.style.display="flex"}window.onresize=function(){mobileNav(this.innerWidth<697)},window.onresize();
//# sourceMappingURL=script.js.map
var navOpen = false;
var hamburger = document.getElementById('hamburger');
var mobileNav = document.getElementById('mobileNav');
var mobileNavLine1 = document.getElementById('mobileNavLine1');
var mobileNavLine2 = document.getElementById('mobileNavLine2');
var mobileNavBg = document.getElementById('mobileNavBg');

hamburger.onclick = function () {

    mobileNavBg.style.display = 'block';
    mobileNav.style.display = 'block';
    mobileNav.style.transform = 'translateX(0%)';
    mobileNavLine1.style.transform = 'rotate(45deg) translateY(225%)';
    mobileNavLine2.style.transform = 'rotate(-45deg) translateY(-225%)';
};

mobileNavBg.onclick = function () {
    mobileNav.style.transform = 'translateX(100%)';
    mobileNavLine1.style.transform = 'rotate(0deg) translateY(0%)';
    mobileNavLine2.style.transform = 'rotate(0deg) translateY(0%)';
    mobileNavBg.style.display = 'none';
};
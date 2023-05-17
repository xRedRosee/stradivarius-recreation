// create variables
var line1 = document.querySelector('#line1');
var line2 = document.querySelector('#line2');
var line3 = document.querySelector('#line3');
var exit = document.querySelector('#exit');
var wishlist = document.querySelector('.wishlist-icon');
var popupmenu = document.querySelector('.popup-menu');
var payMethod = document.querySelector('.payment-methods img');

// default styling
line1.style.setProperty('display', 'flex');
line2.style.setProperty('display', 'flex');
line3.style.setProperty('display', 'flex');
exit.style.setProperty('display', 'none');
popupmenu.style.setProperty('display', 'none');
payMethod.style.setProperty('opacity', '0.4');

// opening pop up menu
document.querySelector('.hamburger-menu').addEventListener('click', function(event){
    line1.style.setProperty('display', 'none');
    line2.style.setProperty('display', 'none');
    line3.style.setProperty('display', 'none');
    exit.style.setProperty('display', 'flex');
    wishlist.style.setProperty('display', 'block');
    popupmenu.style.setProperty('display', 'flex');
    payMethod.style.setProperty('opacity', '0');
})

//Closing pop up menu
document.querySelector('.hamburger-popup').addEventListener('click', function(event){
    line1.style.setProperty('display', 'flex');
    line2.style.setProperty('display', 'flex');
    line3.style.setProperty('display', 'flex');
    exit.style.setProperty('display', 'none');
    popupmenu.style.setProperty('display', 'none');
    payMethod.style.setProperty('opacity', '0.4');
})

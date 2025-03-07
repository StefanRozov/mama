const menuBtn = document.querySelector('.menu');
const mobilemenu = document.querySelector('.header__menu');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('open');
    mobilemenu.classList.toggle('active');
});
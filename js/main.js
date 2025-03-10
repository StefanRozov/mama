const menuBtn = document.querySelector('.menu-btn');
const mobilemenu = document.querySelector('.header__mobile');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('open');
    mobilemenu.classList.toggle('active');
});
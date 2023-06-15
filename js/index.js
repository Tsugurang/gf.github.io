const toggleBtn = document.querySelector('.btn');
const menu = document.querySelector('.mainmenubar_1');

toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
});
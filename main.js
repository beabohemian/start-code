const togglbtn = document.querySelector('.navbar_togglbtn');
const menu = document.querySelector('.navbar_menu');

togglbtn.addEventListener('click', () => {
   menu.classList.toggle('active');
});

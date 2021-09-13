const toggleButton = document.querySelector('.ham-toggle');
const navbarLinks = document.getElementsByClassName('navbar_parent')[0];
toggleButton.addEventListener('click', () => {
    console.log('hii');
    navbarLinks.classList.toggle('active')
})
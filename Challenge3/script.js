const toggler = document.querySelector('#navbar-toggler');
const navbar = document.querySelector('.nav');
const topButton = document.querySelector('.top');
let state = 0;

toggler.onclick = () => {
    if (state == 0) {
        navbar.classList.toggle('navbar-collapsed');
        toggler.classList.remove('collapse');
        toggler.classList.add('collapsed');
        state++;
    } else {
        navbar.classList.toggle('navbar-collapsed');
        toggler.classList.add('collapse');
        toggler.classList.remove('collapsed');
        state--;
    }
}

topButton.onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// navbar scroll
window.addEventListener('scroll', function () {
    let navbar = this.document.querySelector('.navbar');
    if (this.window.scrollY > 20) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
});

//scroll up
document.querySelector('#to-top').addEventListener('click', () => {
    let topinterval = setInterval(() => {

    }, interval);
})
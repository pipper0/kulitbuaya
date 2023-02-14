// navbar
const sidenav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sidenav);
// slider
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 450,
    transition: 500,
    interval: 2500
});
// paralax
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);
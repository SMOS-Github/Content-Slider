const mySlider = document.querySelectorAll('.items');
const slide = document.querySelector('.slider');

let isDown = false;
let startX;
let scrollLeft;

const link = document.querySelector("a");

mySlider.forEach(contents => contents.addEventListener('mousedown', () => {
    isDown = true;
    contents.classList.add('activate');
    startX = e.pageX - slide.offsetLeft;
    scrollLeft = slide.scrollLeft;
}));
mySlider.forEach(contents => contents.addEventListener('mouseup', () => {
    isDown = false;
    contents.classList.remove('activate');
}));
mySlider.forEach(contents => contents.addEventListener('mouseleave', () => {
    isDown = false;
    contents.classList.remove('activate');
}));
mySlider.forEach(contents => contents.addEventListener('mousemove', () => {
    if (!isDown) { return; }
    e.preventDefault();
    const x = e.pageX - slide.offsetLeft;
    const walk = (x - startX);
    slide.scrollLeft = scrollLeft - walk;
}));


slide.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slide.offsetLeft;
    scrollLeft = slide.scrollLeft;
});
slide.addEventListener('mouseup', () => {
    isDown = false;
    
});
slide.addEventListener('mouseleave', () => {
    isDown = false;
    
});
slide.addEventListener('mousemove', (e) => {
    if (!isDown) { return; }
    e.preventDefault();
    const x = e.pageX - slide.offsetLeft;
    const walk = (x - startX)*4;
    slide.scrollLeft = scrollLeft -walk;
});

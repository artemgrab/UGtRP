// let slider = document.querySelector('.slider');
// let innerSlider = document.querySelector('.slider-inner');

// let pressed = false;
// let startx;
// let x;

// slider.addEventListener('mousedown', (e)=>{
//     pressed = true;
//     startx = e.offsetX - innerSlider.offsetLeft;
//     slider.style.cursor = 'grabbing';
// });

// slider.addEventListener('mouseenter', ()=>{
//     slider.style.cursor = 'grab';
// });

// slider.addEventListener('mouseup', ()=> {
//     slider.style.cursor = 'grab';
// });

// window.addEventListener('mouseup', ()=> {
//     pressed = false;
// });

// slider.addEventListener('mousemove', (e)=>{
//     if(!pressed) return;
//     e.preventDefault();

//     x = e.offsetX

//     innerSlider.style.left = `${x-startx}px`;

//     checkboundary()
// });

// function checkboundary(){
//     let outer = slider.getBoundingClientRect();
//     let inner = innerSlider.getBoundingClientRect();

//     if(parseInt(innerSlider.style.left)>0){
//         innerSlider.style.left = '0px';
//     }
//     else if (inner.right < outer.right){
//         innerSlider.style.left = `-${inner.width - outer.width}px`
//     }
// }

// checkboundary()


const slider = document.querySelector('.slider-inner');
const progressBar = document.querySelector('.prog-bar-inner');

let sliderGrabbed = false;

slider.parentElement.addEventListener('scroll', (e) => {
    progressBar.style.width  = `${getScrollPercentage()}%`
})

slider.addEventListener('mousedown', (e) => {
    sliderGrabbed = true;
    slider.style.cursor = 'grabbing';
})

slider.addEventListener('mouseup', (e) => {
    sliderGrabbed = false;
    slider.style.cursor = 'grab';
})

slider.addEventListener('mouseleave', (e) => {
    sliderGrabbed = false;
})

slider.addEventListener('mousemove', (e) => {
    if(sliderGrabbed){
        slider.parentElement.scrollLeft -= e.movementX;
    }
})

slider.addEventListener('wheel', (e) =>{
    e.preventDefault()
    slider.parentElement.scrollLeft += e.deltaY;
})

function getScrollPercentage(){
   return ((slider.parentElement.scrollLeft / (slider.parentElement.scrollWidth - slider.parentElement.clientWidth) ) * 100);
}
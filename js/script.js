let guns = document.querySelector('.desc_block_guns')
let furniture = document.querySelector('.desc_block_furniture')
let partners = document.querySelector('.layout_grid')
let button = document.querySelector('#button-partners')

function f1() {
    console.log(1)
    guns.classList.remove('hide');
    furniture.classList.add('hide');
    

}


function f2() {
    console.log(2)
    guns.classList.add('hide');
    furniture.classList.remove('hide');
}


function f3() {

    console.log(1)
    guns.classList.remove('hide');
    furniture.classList.add('hide');

    
}
function f4() {
    console.log(2)
    guns.classList.add('hide');
    furniture.classList.remove('hide');
}
function f5() {
    partners.classList.toggle('none')
}




document.querySelector('#b-1').onclick = f1;
document.querySelector('#b-2').onclick = f2;
document.querySelector('#b2-1').onclick = f3;
document.querySelector('#b2-2').onclick = f4;
document.querySelector('#button-partners').onclick = f5;


let news = document.querySelectorAll('.new')


new Swiper('.swiper-slider')

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
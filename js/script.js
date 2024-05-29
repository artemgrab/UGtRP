let guns = document.querySelector('.desc_block_guns')
let cloth = document.querySelector('.desc_block_cloth')


function f1() {
    console.log(1)
    guns.classList.remove('hide');
    cloth.classList.add('hide');
}


function f2() {
    console.log(2)
    guns.classList.add('hide');
    cloth.classList.remove('hide');
}


function f3() {

}





document.querySelector('#b-1').onclick = f1;
document.querySelector('#b-2').onclick = f2;


// window.onscroll = function() {myFunction()};

// // Get the header
// let header = document.getElementById("header");

// // Get the offset position of the navbar
// let sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
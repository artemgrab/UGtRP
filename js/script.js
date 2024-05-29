let guns = document.querySelectorAll('.desc_block_guns')
let furniture = document.querySelectorAll('.desc_block_furniture')


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

}





document.querySelectorAll('#b-1').onclick = f1;
document.querySelectorAll('#b-2').onclick = f2;



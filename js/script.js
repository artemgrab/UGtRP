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




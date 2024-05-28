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
function f4() {
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } 
    else if (document.body.onclick) {
        dropdownContent.style.display = "none";
    }
    else {
        dropdownContent.style.display = "block";
    }
    
}


// function f5() {
//     dropdownContent.style.display = "none";
// }



document.querySelector('#b-1').onclick = f1;
document.querySelector('#b-2').onclick = f2;
document.querySelector('#dropdownImg').onclick = f4;
document.body.onclick = f5;




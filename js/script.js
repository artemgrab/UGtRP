let guns = document.querySelector('.desc_block_guns')
let furniture = document.querySelector('.desc_block_furniture')
let partner1 = document.querySelector('.block-partner-1')
let partner2 = document.querySelector('.block-partner-2')
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


// function f5() {
//     if (partner2.classList.contains('none')) {
//         partner1.classList.toggle('none')
//         partner1.classList.add('last')
//     }
//     else if(partner1.classList.contains('none')){
//         partner2.classList.toggle('none')
//         partner2.classList.add('last')
//     }
//     else if (partner2.classList.contains('last') && partner1.classList.contains('none') && partner2.classList.contains('none')){
//         partner2.classList.toggle('none')
//         partner2.classList.remove('last')
//     }
//     else if (partner1.classList.contains('last') && partner2.classList.contains('none')){
//         partner1.classList.toggle('none')
//         partner1.classList.remove('last')
//     }
    
// }

// document.getElementById('button-partners').addEventListener('click', function() {
//     var partnersList = document.getElementById('list');
//     if (partnersList.classList.contains('show')) {
//         partnersList.classList.remove('show');
//         this.setAttribute('aria-expanded', 'false');
//     } else {
//         partnersList.classList.add('show');
//         this.setAttribute('aria-expanded', 'true');
//     }
// });



document.addEventListener('DOMContentLoaded', function() {
    const buttonPartners = document.getElementById('button-partners');
    const blockPartner1 = document.querySelector('.block-partner-1');
    const blockPartner2 = document.querySelector('.block-partner-2');
    const block1Button = document.getElementById('block-1');
    const block2Button = document.getElementById('block-2');
    const block1_2Button = document.getElementById('block-1-2');
    const block2_2Button = document.getElementById('block-2-2');

    let currentBlock = 'block-partner-1';
    let isOpen = false;

    const openDropdown = () => {
        document.querySelector(`.${currentBlock}`).classList.add('show');
        buttonPartners.setAttribute('aria-expanded', 'true');
        buttonPartners.classList.add('rotated');
        isOpen = true;
    };

    const closeDropdown = () => {
        document.querySelector(`.${currentBlock}`).classList.remove('show');
        buttonPartners.setAttribute('aria-expanded', 'false');
        buttonPartners.classList.remove('rotated');
        isOpen = false;
    };

    const switchBlock = (blockToShow) => {
        if (currentBlock !== blockToShow) {
            document.querySelector(`.${currentBlock}`).classList.remove('show');
            document.querySelector(`.${blockToShow}`).classList.add('show');
            currentBlock = blockToShow;
        }
    };

    buttonPartners.addEventListener('click', function() {
        if (isOpen) {
            closeDropdown();
        } else {
            openDropdown();
        }
    });

    const handleBlockSwitch = (blockToShow) => {
        if (!isOpen) {
            openDropdown();
        }
        switchBlock(blockToShow);
    };

    block1Button.addEventListener('click', () => handleBlockSwitch('block-partner-1'));
    block2Button.addEventListener('click', () => handleBlockSwitch('block-partner-2'));
    block1_2Button.addEventListener('click', () => handleBlockSwitch('block-partner-1'));
    block2_2Button.addEventListener('click', () => handleBlockSwitch('block-partner-2'));
});







function f6() {
    partner1.classList.remove('none')
    partner2.classList.add('none')
}
function f7() {
    partner1.classList.add('none')
    partner2.classList.remove('none')
}
function f8() {
    partner1.classList.remove('none')
    partner2.classList.add('none')
}
function f9() {
    partner1.classList.add('none')
    partner2.classList.remove('none')
}




document.querySelector('#b-1').onclick = f1;
document.querySelector('#b-2').onclick = f2;
document.querySelector('#b2-1').onclick = f3;
document.querySelector('#b2-2').onclick = f4;
// document.querySelector('#button-partners').onclick = f5;

document.querySelector('#block-1').onclick = f6;
document.querySelector('#block-2').onclick = f7;
document.querySelector('#block-1-2').onclick = f8;
document.querySelector('#block-2-2').onclick = f9;



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
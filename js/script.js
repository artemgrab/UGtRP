let guns = document.querySelector('.desc_block_guns')
let furniture = document.querySelector('.desc_block_furniture')
let clothes = document.querySelector('.desc_block_clothes')
let partner1 = document.querySelector('.block-partner-1')
let partner2 = document.querySelector('.block-partner-2')
let button = document.querySelector('#button-partners')

let b1 = document.querySelectorAll('#b-1');
let b2 = document.querySelectorAll('#b-2');
let b3 = document.querySelectorAll('#b-3');

function showBlock(blockIndex) {
    if (blockIndex === 1) {
        console.log(1);
        guns.classList.remove('hide');
        furniture.classList.add('hide');
        clothes.classList.add('hide');
    } else if (blockIndex === 2) {
        console.log(2);
        guns.classList.add('hide');
        furniture.classList.remove('hide');
        clothes.classList.add('hide');
    } else if (blockIndex === 3) {
        console.log(3);
        guns.classList.add('hide');
        furniture.classList.add('hide');
        clothes.classList.remove('hide');
    }
}

let currentBlock = 1;
let totalBlocks = 3;

function cycleBlocks() {
    showBlock(currentBlock);
    currentBlock++;
    if (currentBlock > totalBlocks) {
        currentBlock = 1;
    }
}

// Initially show the first block
showBlock(currentBlock);

// Set up the interval to cycle through blocks every 20 seconds
setInterval(cycleBlocks, 8000);

// Optional: add event listeners if you still want manual control
for (let i = 0; i < b1.length; i++) {
    b1[i].addEventListener('click', function() {
        currentBlock = 1;
        showBlock(currentBlock);
    });
}
for (let i = 0; i < b2.length; i++) {
    b2[i].addEventListener('click', function() {
        currentBlock = 2;
        showBlock(currentBlock);
    });
}
for (let i = 0; i < b3.length; i++) {
    b3[i].addEventListener('click', function() {
        currentBlock = 3;
        showBlock(currentBlock);
    });
}


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






document.querySelector('#block-1').onclick = f6;
document.querySelector('#block-2').onclick = f7;
document.querySelector('#block-1-2').onclick = f8;
document.querySelector('#block-2-2').onclick = f9;



let news = document.querySelectorAll('.new')



var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  
const hasVisited = localStorage.getItem('hasVisited');

if(!hasVisited) {
  
    localStorage.setItem('hasVisited', true)
  
    // Do something
  
} else {
  
    // Do something else
  
}
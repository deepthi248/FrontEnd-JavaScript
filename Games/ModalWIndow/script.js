'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close-modal');
const show = document.querySelectorAll('.show-modal'); // to select similar elements

const displayFunction = function() {
    modal.classList.remove('hidden'); // to remove the hidden property of that class
    overlay.classList.remove('hidden');
};
const closingFunction = function() {
    modal.classList.add('hidden'); //to add hidden property
    overlay.classList.add('hidden');
};


for (let i = 0; i < show.length; i++)
    show[i].addEventListener('click', displayFunction);

close.addEventListener('click', closingFunction);
overlay.addEventListener('click', closingFunction);


//Adding Esc
document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden'))
            closingFunction();
    }

);
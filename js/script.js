/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

var section = document.getElementsByClassName('filtersection')[0];
var button = document.getElementsByClassName('filterbutton')[0];
let currenstate = 'show';


function toggle(e) {
    e.preventDefault();
    section.classList.toggle('filter-active');

    if (currenstate  == 'Hide') {
        document.getElementsByClassName('filterbutton')[0].innerHTML = 'Filter';
        currenstate = 'Show';
    } else {
        document.getElementsByClassName('filterbutton')[0].innerHTML = 'Verberg filter';
        currenstate = 'Hide'
}
}

button.addEventListener('click', toggle);

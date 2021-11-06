

var header_switch = document.querySelector('.page.projet header');

header_switch.addEventListener('click', function(e){

    var t = e.target;
    if(t.classList.contains('one')){header_switch.classList.remove('s');}
    else if(t.classList.contains('two')){header_switch.classList.add('s');}

}, {passive: true});
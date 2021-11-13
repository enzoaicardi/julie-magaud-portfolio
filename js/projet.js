

var page_projet = $('.page.projet');
var header_switch = $('.page.projet header');
var section_masters = $('.page.projet #sec-masters');
var section_metiers = $('.page.projet #sec-metiers');

var page_offset, destination_offset;
var scrollTo_animation = crimson({
    duration: 800,
    easing: EASING.easeOutCubic,
    animation: function(p){
        page_projet.scrollTo(0, (p*(destination_offset-page_offset)+page_offset)-(p*100));
    }
});


header_switch.addEventListener('click', function(e){

    var t = e.target;

    if(!scrollTo_animation.status().play){

        page_offset = page_projet.scrollTop;

        if(t.classList.contains('one')){
            header_switch.classList.remove('s');
            destination_offset = section_masters.offsetTop;
        }
        else if(t.classList.contains('two')){
            header_switch.classList.add('s');
            destination_offset = section_metiers.offsetTop;
        }

        scrollTo_animation.play();

    }

}, {passive: true});
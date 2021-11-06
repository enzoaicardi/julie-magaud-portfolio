
// biographie qui prend la place du titre

var bio_up = document.querySelector('.page.accueil .text .button-up');

bio_up.addEventListener('click', function(e){

    var text_bio = document.querySelector('.page.accueil .text');

    if(text_bio.classList.contains('bio')){
        text_bio.classList.remove('bio');
    }else{
        text_bio.classList.add('bio');
    }

}, {passive: true});
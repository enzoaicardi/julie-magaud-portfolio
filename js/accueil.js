
// biographie qui prend la place du titre

var bio_up = $('.page.accueil .text .button-up');
var text_bio = $('.page.accueil .text');

bio_up.addEventListener('click', function(e){

    if(text_bio.classList.contains('bio')){
        text_bio.classList.remove('bio');
    }else{
        text_bio.classList.add('bio');
    }

}, {passive: true});

function resetBio(){
    setTimeout(() => {
        if(text_bio.classList.contains('bio')){
            text_bio.classList.remove('bio');
        }
    }, 500);
}
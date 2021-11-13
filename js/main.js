function $(str) { return document.querySelector(str); }
function $$(str) { return document.querySelectorAll(str); }

var menuButton = $('.menu-button');
var menuPage = $('nav.menu');
var menuLinks = $('nav.menu .links');
var nav_animation = crimson({
    duration: 800,
    easing: EASING.easeOutCubic,
    animation: function(p){
        menuPage.style.backgroundImage = 'radial-gradient(circle at top right, var(--color-1) '+(p*130)+'px, var(--color-0) '+(p*130)+'px, var(--color-0) '+(p*100)+'%, transparent '+(p*100)+'%)';
    }
});

menuButton.addEventListener('click', menuOpen, {passive:true});
menuLinks.addEventListener('click', menuOpen, {passive:true});

function menuOpen(e){
    if(menuButton.classList.contains('v')){
        menuButton.classList.remove('v');
        menuPage.classList.remove('v');
        nav_animation.reverse(true);
        nav_animation.play()
    }else{
        menuButton.classList.add('v');
        menuPage.classList.add('v');
        nav_animation.reverse(false);
        nav_animation.play();
    }
    if(e.currentTarget === menuLinks){
        resetBio();
        resetExp();
    }
}

var page_increment = 1;

function changePage(num){

    var pages = $$('section.page');
    var current = $('section.page.v') || pages[0];

    var next = pages[num];
    next.scrollTo(0, 0);
    page_increment = page_increment < pages.length-1 ? num+1 : 0;

    if(current !== next){

        current.classList.remove('v');
        next.classList.add('v');

        if(next.classList.contains('etudes')){
            resetEtudes();
        }

    }

}

/* document.body.addEventListener('click', function(){
    changePage(page_increment);
}, {passive:true}); */
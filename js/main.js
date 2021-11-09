

var menuButton = document.querySelector('.menu-button');
var menuPage = document.querySelector('nav.menu');
var nav_animation = crimson({
    duration: 800,
    easing: EASING.easeOutCubic,
    animation: function(p){
        menuPage.style.backgroundImage = 'radial-gradient(circle at top right, var(--color-1) '+(p*130)+'px, var(--color-0) '+(p*130)+'px, var(--color-0) '+(p*100)+'%, var(--color-1) '+(p*100)+'%)';
    }
});

menuButton.addEventListener('click', function(){

    if(menuButton.classList.contains('v')){
        menuButton.classList.remove('v');
        // menuPage.classList.remove('v');
        nav_animation.reverse(true);
        nav_animation.play()
    }else{
        menuButton.classList.add('v');
        // menuPage.classList.add('v');
        nav_animation.reverse(false);
        nav_animation.play();
    }

}, {passive:true});
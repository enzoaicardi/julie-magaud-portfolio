
var etudes_progress_bar = document.querySelectorAll('.page.etudes .progress .group .bar');

var bar_indent = 0;

var bar_animation = crimson({
    duration: 500,
    easing: EASING.easeOutCubic,
    animation: function(p){
        var el = etudes_progress_bar[bar_indent].querySelector('div');
        var pp = p*(Number(el.dataset.percent) || 100);
        el.style.backgroundImage = 'linear-gradient(to right, var(--color-main) '+pp+'%, transparent '+pp+'%)';
    },
    onfinish: function(){
        etudes_progress_bar[bar_indent].classList.add('v');
        if(etudes_progress_bar[bar_indent+1]){
            bar_indent++;
            setTimeout(() => {
                bar_animation.play();
            }, 300);
        }
    }
});

bar_animation.play();
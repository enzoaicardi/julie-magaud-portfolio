
var etudes_progress_bar = $$('.page.etudes .progress .group .bar');

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

function resetEtudes(){
    bar_indent = 0;

    var ep = etudes_progress_bar;
    ep[0].classList.remove('v');
    ep[1].classList.remove('v');
    ep[2].classList.remove('v');

    ep[0].querySelector('div').style.backgroundImage = 
    ep[1].querySelector('div').style.backgroundImage =
    ep[2].querySelector('div').style.backgroundImage ='linear-gradient(to right, var(--color-main) 0%, transparent 0%)';
    
    setTimeout(() => {
        bar_animation.play();
    }, 1000);
}
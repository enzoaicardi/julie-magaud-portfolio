
var single = $$('.page.competences .single');
for(var i=0; i<single.length; i++){
    
    let el = single[i];
    let text = el.querySelector('svg text');
    let circle = el.querySelector('svg circle');
    let percent = Number(el.dataset.percent) || 100;

    let single_animation = crimson({
        easing: EASING.easeOutCubic,
        animation: function(p){
            let pp = p*percent;
            text.textContent = Math.round(pp) + '%';
            circle.style.strokeDashoffset = 100 - (pp);
        }
    });

    el.addEventListener('click', function(){
        
        if(el.classList.contains('v')){
            el.classList.remove('v');
            single_animation.change({duration: 800});
            single_animation.reverse(true);
            single_animation.play();
        }else{
            el.classList.add('v');
            single_animation.change({duration: 1400});
            single_animation.reverse(false);
            single_animation.play();
        }

    }, {passive: true});
}

var slide_increment = 0;

// slide dots
var dots_dot = $$('.page.experiences .dots .dot');
var dots_line = $$('.page.experiences .dots .line');
var slide_next_button = $('.page.experiences .button-next.next'),
slide_replay_button = $('.page.experiences .button-next.replay');

// slide image
var slide_img = $('.page.experiences .shadow .img'),
slide_img_height = 400, slide_img_url,
sibool = true;

var slide_img_animation = crimson({
    duration: 800,
    easing: EASING.easeOutCubic,
    animation: function(p){
        slide_img.style.height = (slide_img_height*Math.abs(1-p*2)) + 'px';
        if(p >= 0.5 && sibool){
            sibool = false;
            slide_img.style.backgroundImage = slide_img_url;
        }
    },
    onfinish: function(){sibool=true;}
});

// slide content
var slide_content = $('.page.experiences article'),
slide_content_title = $('.page.experiences article h3'),
slide_content_sub = $('.page.experiences article .subtitle p'),
slide_content_text = $('.page.experiences article .p'),
slide_content_button = $('.page.experiences .button-next.next p');

function slideTo(int){

    // DOTS

    var v = $$('.page.experiences .dots .v, .page.experiences .dots .line.v2');
    v[0].classList.remove('v');
    v[1].classList.remove('v');
    v[2].classList.remove('v2');

    if(int === 0){
        var d = $$('.page.experiences .dots .dot.v2');
        for(const dot of d){
            dot.classList.remove('v2');
        }
    }

    dots_dot[int].classList.add('v');
    dots_dot[int-1]?.classList.add('v2');
    dots_line[int].classList.add('v');
    dots_line[int+1].classList.add('v2');

    // IMG

    slide_img_url = 'url(./assets/img/'+ (slider_array[int]?.url || 'rocher.jpg') +')';
    slide_img_animation.play();

    // CONTENT

    // slide_content_animation.play();
    slide_content.classList.add('o0');
    setTimeout(() => {
        slide_content.classList.add('o1');
        replaceSlideContent(slide_increment);
        setTimeout(() => {
            slide_content.classList.remove('o0');
            slide_content.classList.remove('o1');
        }, 50);
    }, 400);

}

function replaceSlideContent(int){

    var a = slider_array[int];
    slide_content_title.textContent = a.name;
    slide_content_sub.textContent = a.sub;
    slide_content_text.textContent = a.desc;

    if(slide_increment >= dots_dot.length-1){
        slide_content_button.textContent = 'Continuer';
        slide_content.classList.add('end');
    }else if(slide_increment === 0){
        slide_content_button.textContent = 'Suivant';
        slide_content.classList.remove('end');
    }

}

function slideClick(){
    if(!slide_img_animation.status().play && slide_increment < dots_dot.length-1){
        slide_increment++;
        slideTo(slide_increment);
    }else if(slide_increment >= dots_dot.length-1){
        changePage(3);
        resetExp();
    }
}

function resetExp(){
    setTimeout(() => {
        if(slide_increment > 0){
            slide_increment = -1; slideClick();
        }
    }, 1000);
}

slide_next_button.addEventListener('click', slideClick, {passive:true});
slide_replay_button.addEventListener('click', function(){slide_increment = -1; slideClick();}, {passive:true});

var slider_array = [
    {
        url: "rocher.jpg",
        name: "Le rocher Saint-Michel d’Aiguilhe",
        sub: "Puy-en-Velay (2020 - 2021)",
        desc: "Ce stage de quatre semaines m’a permis de réaliser des missions d’accueil, billetterie, boutique et d’information aux touristes. J’ai participé à la réalisation d’un forum de tourisme, de visites guidées et des premières étapes de préparation d’un projet d’audioguide."
    },
    {
        url: "ecole.jpg",
        name: "Garde d'enfant, emploi étudiant",
        sub: "Clermont-Ferrand (2019 - 2021)",
        desc: "Cet emploi a consisté en la garde d’un enfant sur le temps du repas de midi durant la première année. Aujourd’hui il consiste essentiellement à de l’aide aux devoirs à domicile."
    },
    {
        url: "cloitre.jpg",
        name: "Cloître et ensemble cathédral",
        sub: "Puy-en-Velay (2019 - 2020)",
        desc: "J’ai occupé cet emploi durant trois saisons estivales. Il consiste en la vente de billets d’entrée et de produits d’une boutique pour le monument. J’ai eu pour mission le conseil et l’information aux touristes des différents lieux touristiques de la ville du Puy-en-Velay."
    },
    {
        url: "gym2.jpg",
        name: "Bénévolat ASM GYM TRAMPO",
        sub: "Puy-en-Velay (2017 - 2019)",
        desc: "Entraînement des plus jeunes deux fois par semaine en tant que service rendu au club de gymnastique. J’ai préparé différents cours comprenant des échauffements et des ateliers, permettant des apprentissages divers. J’ai encadré des jeunes filles entre 8 et 13 ans par groupe de 5 à 10."
    }
];
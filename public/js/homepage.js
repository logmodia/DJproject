// ---------- CONSTANTS ----------
const partnersSliderControllers = [...document.querySelectorAll(".partners-sponsors__contents__interactive-block__slider__controller")];
const partners = [...document.querySelectorAll(".partners-sponsors__contents__interactive-block__partners-list__partner")];
const playButton = document.querySelector(".fa-play");
const currentTime = document.querySelector(".header__new-single__contents__audio-player__timer__current-time");

// ---------- FUNCTIONS ----------
//PARTNERS SLIDER
const slide = e => {
    let partnerIndex = 0;
    if (e.target.classList.contains("partners-sponsors__contents__interactive-block__slider__controller--active")) {}
    else {
        for (let sliderController of partnersSliderControllers) {
            if (sliderController.classList.contains("partners-sponsors__contents__interactive-block__slider__controller--active")) {
                sliderController.classList.remove("partners-sponsors__contents__interactive-block__slider__controller--active");
            }
        }
        e.target.classList.add("partners-sponsors__contents__interactive-block__slider__controller--active");
        for (let sliderController of partnersSliderControllers) {
            if (sliderController.classList.contains("partners-sponsors__contents__interactive-block__slider__controller--active")) {
                partnerIndex = partnersSliderControllers.indexOf(sliderController);
                break;
            }
        }
        for (let partner of partners) {
            if (!partner.classList.contains("partners-sponsors__contents__interactive-block__partners-list__partner--hidden")) {
                partner.classList.add("partners-sponsors__contents__interactive-block__partners-list__partner--hidden");
                break;
            }
        }
        partners[partnerIndex].classList.remove("partners-sponsors__contents__interactive-block__partners-list__partner--hidden");
    }
};

//AUDIO PLAYER
const playEvent = e => {
    if (e.target.classList.contains("fa-play")) {
        e.target.classList.add("fa-pause");
        e.target.classList.remove("fa-play");
    } else {
        e.target.classList.add("fa-play");
        e.target.classList.remove("fa-pause");
    }
}

//AUDIO PROGRESS BAR


// ---------- EVENT LISTENERS ----------
//PARTNERS SLIDER
for (let sliderController of partnersSliderControllers) {
    sliderController.addEventListener("click", slide);
}

//AUDIO PLAYER
playButton.addEventListener("click", playEvent);

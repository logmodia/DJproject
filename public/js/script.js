// ---------- CONSTANTS ----------
const partnersSliderControllers = document.querySelectorAll(".partners-sponsors__contents__interactive-block__slider__controller")
const 

// ---------- FUNCTIONS ----------
const slide = e => {
    if (e.target.classList.contains("partners-sponsors__contents__interactive-block__slider__controller--active")) {}
    else for (let sliderController of partnersSliderControllers) {
        if (sliderController.classList.contains("partners-sponsors__contents__interactive-block__slider__controller--active")) {
            sliderController.classList.remove("partners-sponsors__contents__interactive-block__slider__controller--active");
            e.target.classList.add("partners-sponsors__contents__interactive-block__slider__controller--active");
        }
    }
};

// ---------- EVENT LISTENERS ----------
for (let sliderController of partnersSliderControllers) {
    sliderController.addEventListener("click", slide);
}

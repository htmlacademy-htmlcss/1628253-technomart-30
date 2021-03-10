/* Верхний слайдер */

const slider = document.querySelector(".slider");
const btnLeft = slider.querySelector(".button-left");
const btnRight = slider.querySelector(".button-right");
const slideOne = slider.querySelector(".slider-one");
const slideTwo = slider.querySelector(".slider-two");
const btnOne = slider.querySelector(".slider-button-one");
const btnTwo = slider.querySelector(".slider-button-two");

function slideChangeArrows() {
    slideOne.classList.toggle("slider-current");
    slideTwo.classList.toggle("slider-current");
    btnOne.classList.toggle("top-slider-current");
    btnTwo.classList.toggle("top-slider-current");
};

function slideChangeCircles()  {
    slideOne.classList.toggle("slider-current");
    slideTwo.classList.toggle("slider-current");
    btnOne.classList.toggle("top-slider-current");
    btnTwo.classList.toggle("top-slider-current");
};

btnOne.addEventListener("click", slideChangeCircles);
btnTwo.addEventListener("click", slideChangeCircles);
btnLeft.addEventListener("click", slideChangeArrows);
btnRight.addEventListener("click", slideChangeArrows);

/* Нижний слайдер */

const bottomSlider = document.querySelector(".services");
const sliderDeliveryLink = bottomSlider.querySelector(".slider-delivery");
const sliderGuaranteeLink = bottomSlider.querySelector(".slider-guarantee");
const sliderCreditLink = bottomSlider.querySelector(".slider-credit");
const slideDelivery = bottomSlider.querySelector(".services-slide-delivery");
const slideGuarantee = bottomSlider.querySelector(".services-slide-guarantee");
const slideCredit = bottomSlider.querySelector(".services-slide-credit");

sliderDeliveryLink.addEventListener("click", function(bottomSlideChange) {
    bottomSlideChange.preventDefault();
    sliderDeliveryLink.classList.add("services-link-current");
    sliderGuaranteeLink.classList.remove("services-link-current");
    sliderCreditLink.classList.remove("services-link-current");
    slideDelivery.classList.add("services-slider-current");
    slideGuarantee.classList.remove("services-slider-current");
    slideCredit.classList.remove("services-slider-current");
});

sliderGuaranteeLink.addEventListener("click", function(bottomSlideChange) {
    bottomSlideChange.preventDefault();
    sliderDeliveryLink.classList.remove("services-link-current");
    sliderGuaranteeLink.classList.add("services-link-current");
    sliderCreditLink.classList.remove("services-link-current");
    slideDelivery.classList.remove("services-slider-current");
    slideGuarantee.classList.add("services-slider-current");
    slideCredit.classList.remove("services-slider-current");
});

sliderCreditLink.addEventListener("click", function(bottomSlideChange) {
    bottomSlideChange.preventDefault();
    sliderDeliveryLink.classList.remove("services-link-current");
    sliderGuaranteeLink.classList.remove("services-link-current");
    sliderCreditLink.classList.add("services-link-current");
    slideDelivery.classList.remove("services-slider-current");
    slideGuarantee.classList.remove("services-slider-current");
    slideCredit.classList.add("services-slider-current");
});

/* Карта */

const mapImage = document.querySelector(".contacts-img");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

mapImage.addEventListener("click", function(mapOpen) {
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(mapClose) {
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(mapClose) {
    if (mapClose.keyCode === 27) {
        if (mapPopup.classList.contains("modal-show")) {
            mapClose.preventDefault();
            mapPopup.classList.remove("modal-show");
        }
    }
});

/* Обратная связь */

const feedbackLink = document.querySelector(".contacts-link");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackClose = feedbackPopup.querySelector(".modal-close");
const feedbackForm = feedbackPopup.querySelector(".modal-form");
const feedbackName = feedbackPopup.querySelector(".feedback-name");
const feedbackEmail = feedbackPopup.querySelector(".feedback-email");
const feedbackMessage = feedbackPopup.querySelector(".feedback-message");

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("name");
} catch (err) {
    isStorageSupport = false;
};

feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-show");

    if (storage) {
        feedbackName.value = storage;
        feedbackEmail.focus();
    } else {
        feedbackName.focus();
    }
});

feedbackClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-show");
    feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function(evt) {
    if (!feedbackName.value || !feedbackEmail.value || !feedbackMessage.value) {
        evt.preventDefault();
        feedbackPopup.classList.remove("modal-error");
        feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
        feedbackPopup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
        localStorage.setItem("name", feedbackName.value);
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (feedbackPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        feedbackPopup.classList.remove("modal-show");
        feedbackPopup.classList.remove("modal-error");
        }
    }
});
const orderLink = document.querySelectorAll(".order-button");
const orderPopup = document.querySelector(".modal-order");
const orderClose = orderPopup.querySelector(".modal-close");
const orderContinue = orderPopup.querySelector(".modal-order-continue");

const orderShow = (evt) => {
    evt.preventDefault();
    orderPopup.classList.add("modal-show");
};

const orderHide = (evt) => {
    evt.preventDefault();
    orderPopup.classList.remove("modal-show");
};

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (orderPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        orderPopup.classList.remove("modal-show");
        orderPopup.classList.remove("modal-error");
        }
    }
});

orderLink.forEach(nodeItem => {
    nodeItem.addEventListener("click", orderShow)
});

orderClose.addEventListener("click", orderHide);
orderContinue.addEventListener("click", orderHide);
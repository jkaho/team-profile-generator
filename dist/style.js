const cardTop = document.querySelectorAll(".card-top");

if (window.innerWidth <= 768) {
    responsiveCardHeight();
    window.document.addEventListener("resize", responsiveCardHeight);
}

function responsiveCardHeight() {
    for (var i = 0; i < cardTop.length; i++) {
        let cardHeight = cardTop[i].parentElement.offsetHeight;
        cardTop[i].setAttribute("style", `height: ${cardHeight}px`);
    }
}
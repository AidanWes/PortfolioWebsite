let card = document.getElementById('card');
let link = document.getElementById('slide-link');
let urls = ["https://codepen.io/AidanWes/full/oNxKpoN", "https://codepen.io/AidanWes/full/JjXgrXX",
            "https://codepen.io/AidanWes/full/dyMrQZG", "https://codepen.io/AidanWes/full/ExKqoqY",
            "https://codepen.io/AidanWes/full/JjXzyNN", "https://codepen.io/AidanWes/full/ExKrjVp"];
let urlTexts = ["Password Generator", "Trivia Quiz", "Tic-Tac-Toe", "Palette Generator", "Gradient Generator", "Simon Says"];
let currentSlide = 0;

document.getElementById('right').addEventListener("click", rightClick);
function rightClick() {
    if (currentSlide === 5)
        currentSlide = 0;
    else
        currentSlide++;
    link.innerHTML = urlTexts[currentSlide];
    link.href = urls[currentSlide];
    
    card.style.background = "url(ProjectPics/projectImg-" + (currentSlide + 1) + ".png) center no-repeat";
    card.style.backgroundSize = "cover";
    
}

document.getElementById('left').onclick = function (){
    if (currentSlide === 0)
        currentSlide = 5;
    else
        currentSlide--;
    link.innerHTML = urlTexts[currentSlide];
    link.href = urls[currentSlide];
    
    card.style.background = "url(ProjectPics/projectImg-" + (currentSlide + 1) + ".png) center no-repeat";
    card.style.backgroundSize = "cover";
};
var carouselSlide = document.querySelector(".carousel-slide");
var carouselImg = document.querySelectorAll(".carousel-slide img");

var prev = document.querySelector(".prev");
var next = document.querySelector(".next");

const width = carouselImg[0].clientWidth;
let counter = 1; //for counting on which images we currently are.

carouselSlide.style.transform = "translateX(" + (-width * counter) +"px)"; //for moving the image ahead. //think how it was done or thought.

next.addEventListener("click", function(){
    if (counter >= carouselImg.length - 1)
        {
            return;
        }
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + (-width * counter) + "px)";
});

prev.addEventListener("click", function(){
    if (counter <= 0)
        {
            return;
        }
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = "translateX(" + (-width * counter) + "px)";
});

carouselSlide.addEventListener("transitionend", ()=>{
    if (carouselImg[counter].className === "lastImg")
        {
            carouselSlide.style.transition = "none"; //we add this none so that we cannot have an ugly transition back to the first image.
            counter = carouselImg.length - 2; //-2 because there are two images which are extra.
            carouselSlide.style.transform = "translateX(" + (-width * counter) + "px)";
        }

    else if (carouselImg[counter].className === "FirstImg")
        {
            carouselSlide.style.transition = "none";
            counter = carouselImg.length - counter;
            carouselSlide.style.transform = "translateX(" + (-width * counter) + "px)";
        }
});
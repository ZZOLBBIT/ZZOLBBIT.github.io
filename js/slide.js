//slide
const firstSlide = document.querySelector(".slidePic:first-child");
const lastSlide = document.querySelector(".slidePic:last-child");

function rightSlide(){
  let explanationText = document.querySelector(".slidePic.showing .explanation");
  explanationText.classList.remove("spread");
  const currentSlide = document.querySelector(".showing");
  if(currentSlide){
    currentSlide.classList.remove("showing");
    const nextSlide = currentSlide.nextElementSibling;
    if(nextSlide){
      nextSlide.classList.add("showing");
    }else{
      firstSlide.classList.add("showing");
    }
  }
  explanationText = document.querySelector(".slidePic.showing .explanation");
  explanationText.classList.add("spread");
}
const rightArrow = document.querySelector(".rightArrow");
rightArrow.addEventListener("click", rightSlide);

function leftSlide(){
  let explanationText = document.querySelector(".slidePic.showing .explanation");
  explanationText.classList.remove("spread");
  const currentSlide = document.querySelector(".showing");
  if(currentSlide){
    currentSlide.classList.remove("showing");
    const prevSlide = currentSlide.previousElementSibling;
    if(prevSlide){
      prevSlide.classList.add("showing");
    }else{
      lastSlide.classList.add("showing");
    }
  }
  explanationText = document.querySelector(".slidePic.showing .explanation");
  explanationText.classList.add("spread");
}
const leftArrow = document.querySelector(".leftArrow");
leftArrow.addEventListener("click", leftSlide);
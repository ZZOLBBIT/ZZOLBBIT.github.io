// bar
const hamburger = document.querySelector(".hamburgerWrapper");
const NavigationMenuWrapper = document.querySelector(".NavigationMenuWrapper");
hamburger.addEventListener("click", function(){
    NavigationMenuWrapper.classList.toggle("active");
    hamburger.classList.toggle("active");
});

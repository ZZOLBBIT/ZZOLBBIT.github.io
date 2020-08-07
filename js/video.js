//  Youtube
const extendList = document.querySelector(".extendList");
const youtubeList = document.querySelector(".linkBringer ul");
extendList.addEventListener("click", function(){
    youtubeList.classList.toggle("active");
});    

// Youtube aspect ratio
const mainYoutube = document.querySelector(".mainYoutube");
function FindWidth (){
    mainYoutube.style.height = mainYoutube.offsetWidth * 0.5625 + "px";
}    
window.addEventListener("resize", FindWidth);
FindWidth();


//  function input_Text(){
//     let takeLink = document.querySelector(".youtubeLink").value;    
//     linkRegEx = /.+watch\?v=/g;
//     let result = takeLink.replace(linkRegEx, "");
//     document.querySelector(".mainYoutube").src="https://www.youtube.com/embed/"+result+"?autoplay=1&modestbranding=1";  
// }

//  function onKeyDown(){
//     if(event.keyCode == 13){
//         input_Text();    
//     }
// }


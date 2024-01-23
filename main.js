const photoContainer = document.getElementById("slideContainer");
const container = document.getElementById("container");
const thumbnailsContainer = document.getElementById("thumbnailsContainer");
const next = document.getElementById("next");
const back = document.getElementById("back");
const allPhotosthums = document.getElementsByClassName("box");
const allPhotosSlides = document.getElementsByClassName("slide");


//* On Load 
let fotoLibrary = ["01.webp","02.webp","03.webp","04.webp","05.webp"];
let ultimaFoto = fotoLibrary.length;
let activeImage = 0;
let velocitaScroll;


generoPhoto();

//** sul click del next
next.addEventListener("click", function(){
     //goToSlide("next");
     autoScroll();
    
});
// Todo: adattare la funzione goToSlide anche per il pulsante back
//** sul click del back
back.addEventListener("click", function(){
    goToSlide("back"); 
})

//** Stop autoscroll quando il mouse entra nel container
photoContainer.addEventListener("mouseenter", function() {
    stopAutoScroll();
});

//*** Funzioni */

//* genero photo
function generoPhoto(){
    let thumbHtml = "";
    let photoHtml = '';
    for(i = 0; i <= ultimaFoto - 1; i++ ){
        const image = fotoLibrary[i];
        if(i == 0){
            photoHtml += `<div class="slide active-slide"><img src="./img/${image}" alt=""></div>`;
            thumbHtml += `<div class="box active-box"><img src="./img/${image}" alt=""></div>`;
        
        }else if(i != 2 && i != 3){
            photoHtml += `<div class="slide"><img src="./img/${image}" alt=""></div>`;
            thumbHtml += `<div class=" box"><img src="./img/${image}" alt=""></div>`;
        }else{
            photoHtml += `<div class="slide special"><img src="./img/${image}" alt=""></div>`;
            thumbHtml += `<div class=" box special"><img src="./img/${image}" alt=""></div>`;
        };
    };
    photoContainer.innerHTML = photoHtml;
    thumbnailsContainer.innerHTML = thumbHtml;
};

//* go to slide succesiva
function goToSlide(direction){
    console.log(direction);
    if(direction === "next"){
        direction = 1;
        console.log(direction);

    };
    
    let oldActiveImage;
    let newActiveImage;
    
    oldActiveImage = activeImage;
    newActiveImage = activeImage + direction ;
    
    console.log(newActiveImage);

    //* elemento presente
    allPhotosSlides[oldActiveImage ].classList.remove("active-slide");
    allPhotosthums[oldActiveImage ].classList.remove("active-box");
    if (newActiveImage === ultimaFoto) {
        newActiveImage = 0;
    }
    console.log(allPhotosSlides[oldActiveImage]);
    console.log("-----------------------")
    //* elemento seguente
    allPhotosSlides[newActiveImage].classList.add("active-slide");
    allPhotosthums[newActiveImage].classList.add("active-box");
    console.log(allPhotosSlides[newActiveImage]);
    activeImage = activeImage + direction;
    if(activeImage === ultimaFoto){
        activeImage = 0;
    };
    
};
//* outoscroll 
function autoScroll(){
    velocitaScroll = setInterval(function (){
        goToSlide("next");
     } , 3000);
}
//* stop outoscroll 
function stopAutoScroll() {
    clearInterval(velocitaScroll);
}

    
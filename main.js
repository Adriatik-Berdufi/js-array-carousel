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
generoPhoto();




//* genero photo
function generoPhoto(){
    let thumbHtml = "";
    let photoHtml = '';
    for(i = 0; i <= ultimaFoto - 1; i++ ){
        const image = fotoLibrary[i];
        if(i == 0){
            photoHtml += `<div class="slide active-slide"><img src="./img/${image}" alt=""></div>`;
            thumbHtml += `<div class="box active-box"><img src="./img/${image}" alt=""></div>`;
        /*}
        else if(i != 3 && i != 4){
            photoHtml += `<div class="slide"><img src="./img/${image}" alt=""></div>`;
            thumbHtml += `<div class=" box"><img src="./img/${image}" alt=""></div>`;*/
        }else{
            photoHtml += `<div class="slide"><img src="./img/${image}" alt=""></div>`;
            thumbHtml += `<div class=" box special"><img src="./img/${image}" alt=""></div>`;
        };
    };
    photoContainer.innerHTML = photoHtml;
    thumbnailsContainer.innerHTML = thumbHtml;
};



//** sul click del next
next.addEventListener("click", function(){
    
     goToSlide(next);

    
    /*
    if(activeImage == fotoLibrary.length){
        //* elemento presente
        allPhotosSlides[fotoLibrary.length -1].classList.remove("active-slide");
        allPhotosthums[fotoLibrary.length -1].classList.remove("active-box");
        //* elemento seguente
        allPhotosSlides[0].classList.add("active-slide");
        allPhotosthums[0].classList.add("active-box");
        activeImage = 0;
        
    }else{
        //* elemento presente
        allPhotosSlides[activeImage - 1].classList.remove("active-slide");
        allPhotosthums[activeImage -1].classList.remove("active-box");

        //* elemento seguente
        allPhotosSlides[activeImage].classList.add("active-slide");
        allPhotosthums[activeImage].classList.add("active-box");
    };

   

    activeImage ++;
    console.log(activeImage);*/
   
});



//** sul click del back
back.addEventListener("click", function(){
   // goToSlide();
    
})

//*** Funzioni */

function goToSlide(direction){
    let oldActiveImage;
    let newActiveImage;
    
    oldActiveImage = activeImage;
    newActiveImage = activeImage + 1 ;
    
    console.log(activeImage);

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
    activeImage ++;
    if(activeImage === ultimaFoto){
        activeImage = 0;
    };
    
};
// Todo: riscrivere la funzione per generare le img
    
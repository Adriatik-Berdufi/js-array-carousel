const photoContainer = document.getElementById("slideContainer");
const container = document.getElementById("container");
const thumbnailsContainer = document.getElementById("thumbnailsContainer");
const next = document.getElementById("next");
const back = document.getElementById("back");
const allPhotos = document.getElementsByClassName("box");

//* On Load 
let fotoLibrary = ["01.webp","02.webp","03.webp","04.webp","05.webp"];
let activeImage = 0;
container.addEventListener("mouseout", function(){
    console.log("mouse over");
    clearInterval(loop);
});
//* genero photo

const activeImageUrl = fotoLibrary[activeImage];
const photoHtml =`<img src="./img/${activeImageUrl}" alt="">`;
photoContainer.innerHTML = photoHtml;

//*gerenero foto nel thumbnails
let thumbHtml = "";
for(i = 0; i < fotoLibrary.length; i++ ){
    const image = fotoLibrary[i];
    if(i == 0){
        thumbHtml += `<div class=" box "><img src="./img/${image}" alt=""></div>`;
    }
    else if(i != 2 && i != 3){
        thumbHtml += `<div class=" box in-active-box"><img src="./img/${image}" alt=""></div>`;
    }else{
        thumbHtml += `<div class=" box special in-active-box"><img src="./img/${image}" alt=""></div>`;
    }
};
thumbnailsContainer.innerHTML = thumbHtml;



//** sul click del next
const loop = next.addEventListener("click", function(){

    setInterval(function(){
        goToSlide(); 
    }, 1000);
   
});



//** sul click del back
back.addEventListener("click", function(){
    if(activeImage == 0){
        activeImage = fotoLibrary.length   ;
    }
    activeImage --;
    const activeImageUrl = fotoLibrary[activeImage];
    const photoHtml =`<img src="./img/${activeImageUrl}" alt="">`;
    photoContainer.innerHTML += photoHtml;
    //*thumbImg
    if(activeImage == fotoLibrary.length  - 1){
        allPhotos[0].classList.add("in-active-box");
    }
    allPhotos[activeImage].classList.remove("in-active-box");
    allPhotos[activeImage + 1 ].classList.add("in-active-box");
    
});

//*** Funzioni */

function goToSlide(){
    activeImage ++;
    //*img
    const activeImageUrl = fotoLibrary[activeImage];
    //* slide img
    const photoHtml =`<img src="./img/${activeImageUrl}" alt="">`;
    photoContainer.innerHTML += photoHtml;
    //*thumbImg
    allPhotos[activeImage].classList.remove("in-active-box");
    if(activeImage == 0){
        allPhotos[fotoLibrary.length - 1].classList.add("in-active-box");  
    }
    allPhotos[activeImage -1 ].classList.add("in-active-box");

    if(activeImage == fotoLibrary.length - 1){
        activeImage = -1;
    }

}
// Todo: riscrivere la funzione per generare le img
    
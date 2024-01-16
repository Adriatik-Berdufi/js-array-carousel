const photoContainer = document.getElementById("slideContainer")
const thumbnailsContainer = document.getElementById("thumbnailsContainer")
const next = document.getElementById("next");
const back = document.getElementById("back");
const allPhotos = document.getElementsByClassName("slide");

//* On Load 
let fotoLibrary = ["01.webp","02.webp","03.webp","04.webp","05.webp"];
let activeImage = 0;

//* genero photo

const activeImageUrl = fotoLibrary[activeImage];
const photoHtml =`<img src="./img/${activeImageUrl}" alt="">`;
photoContainer.innerHTML = photoHtml;

//*gerenero foto nel thumbnails
let thumbHtml = "";
for(i = 0; i < fotoLibrary.length; i++ ){
    const image = fotoLibrary[i];
    if(i != 2 && i != 3){
        thumbHtml += `<div class="brd box "><img src="./img/${image}" alt=""></div>`;
    }else{
        thumbHtml += `<div class="brd box special"><img src="./img/${image}" alt=""></div>`;
    }
};
thumbnailsContainer.innerHTML = thumbHtml;


//** sul click del next
next.addEventListener("click", function(){
    activeImage ++;
    const activeImageUrl = fotoLibrary[activeImage];
    const photoHtml =`<img src="./img/${activeImageUrl}" alt="">`;
    photoContainer.innerHTML = photoHtml;
    if(activeImage == fotoLibrary.length - 1){
        activeImage = -1;
    }
});
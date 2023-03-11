let photogallery = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg',
    'img/img6.jpg', 'img/img7.jpg', 'img/img8.jpg', 'img/img9.jpg', 'img/img10.jpg', 'img/img11.jpg', 'img/img12.jpg', 'img/img13.jpg',
    'img/img14.jpg', 'img/img15.jpg', 'img/img16.jpg', 'img/img17.jpg', 'img/img18.jpg', 'img/img19.jpg', 'img/img20.jpg',
    'img/img21.jpg', 'img/img22.jpg'];

let diashowActive = false;

/* --- Photo Gallery --- */
function load() {
    for (let i = 0; i < photogallery.length; i++) {
        document.getElementById('photogallerySection').innerHTML += photoGalleryTemplate(i);
    }
}

function openPhoto(i) {
    document.getElementById('photogallerySection').innerHTML = openPhotoTemplate(i);
    load();
}

function closePhoto() {
    document.getElementById("popupSection").classList.add(`dnone-photo`);
    if (diashowActive) {
        clearTimeout(myTimer);
    }
}

function nextPhoto(i) {
    i++;
    if (i >= photogallery.length) {
        i = 0;
    }
    if (diashowActive) {
        clearTimeout(myTimer);
    }
    openPhoto(i);
}

function previousPhoto(i) {
    i--;
    if (i < 0) {
        i = photogallery.length - 1;
        //i = 19;
    }
    if (diashowActive) {
        clearTimeout(myTimer);
    }
    openPhoto(i);
}

function diashow(i) {
    diashowActive = true;
    i++;
    if (i >= photogallery.length) {
        i = 0;
    }
    myTimer = setTimeout(function(){diashow(i)}, 3000);
    openPhoto(i);
}

/* --- Toggle Button --- */
function active() {
    document.getElementById("show").classList.toggle(`active`);
}

/* --- Template --- */
function photoGalleryTemplate(i) {
    return /*html*/`
    <div class="photo-box" id="openPhoto" onclick="openPhoto(${i})"><img src="${photogallery[i]}"></div>
    `;
}

function openPhotoTemplate(i) {
    return /*html*/ `
   <div class="popup-section" id="popupSection">
        <img class="symbol" onclick="previousPhoto(${i})" src="img/logo/left.jpg" als="Previous Photo">
        <div class="column">
            <img class="symbol2" onclick="closePhoto()" src="img/logo/close.jpg" alt="Close">
            <img class="popup-photo" src="${photogallery[i]}">
            <img class="symbol2" onclick="diashow(${i})" src="img/logo/play.jpg" alt="play Diashow">
        </div>
        <img class="symbol" onclick="nextPhoto(${i})" src="img/logo/right.jpg" alt="Next Photo">
    </div>
    `;
}
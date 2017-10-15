(function(){
  var theImages = document.querySelectorAll('.image-holder'),
  theHeading = document.querySelector('.heading'),
  theSubhead = document.querySelector('.main-copy h2'),
  theSeasonText = document.querySelector('.main-copy p'),
  appliedClass;

  function changeElements() {
    // make sure event handling  is working
       //debugger;
    let subImages = document.querySelector('.subImagesContainer');
    let objectIndex = dynamicContent[this.id];

    while (subImages.firstChild) {
      subImages.removeChild(subImages.firstChild);
    }
//remove all subImages
    objectIndex.images.forEach(function(image, index) {
      var newSubImg = document.createElement('img');
      //add a new class to it
      //add a source
      newSubImg.src = "images/"+ objectIndex.images[index];
      //add it to the page
      newSubImg.className += " thumb";
      newSubImg.dataset.index = index;
      subImages.appendChild(newSubImg);
      //add some images at the bottom of the page
      newSubImg.addEventListener('click', function() {popLightBox(index, objectIndex); }, false);

    });
// remove the last css class applied
    theSubhead.classList.remove(appliedClass);
    theHeading.classList.remove(appliedClass);
// change the color of the text elements
    theSubhead.firstChild.nodeValue = objectIndex.headline;
    theSeasonText.firstChild.nodeValue = objectIndex.text;
//change the color of text elements
//firstCild .nodeValue is the same as innerHTML

    appliedClass = this.id;

    theSubhead.classList.add(this.id);

  }

  theImages.forEach(function(image, index){
    //loop through the images and add event handling to each one
    image.addEventListener('click', changeElements, false);
  });
//theSubhead.firstCild.nodeValue = dynamicContent['spring'].headline;
//document.querySelector('#spring').click();
  function popLightBox(currentIndex, currentObject) {
    window.scrollTo(0,0);
    document.body.style.overflow = 'hidden';
    let lightbox = document.querySelector('.lightbox');
    let lightboxImg =lightbox.querySelector('img');
    let lightboxDesc = lightbox.querySelector('p');
    let lightBoxClose = document.querySelector('.close-lightbox');
    lightbox.style.display = 'block';
    lightboxImg.src = "images/"+ currentObject.images[currentIndex];
    lightboxDesc.innerHTML = currentObject.imageDescription[currentIndex];
    lightBoxClose.addEventListener('click', closeLightbox, false);
  }

  function closeLightbox(){
    let lightbox = document.querySelector('.lightbox');
    lightbox.style.display = "none";
    document.body.style.overflow = "scroll";



  }

})();


export const gunnarGallery = (function(){
  const galleryImages = document.querySelectorAll('.blocks-gallery-item');
  const galleryClasses = [
    'image-shift__01',
    'image-shift__02',
    'image-shift__03',
    'image-shift__04',
  ];

  galleryImages.forEach( (image) => {
    image.classList.add(galleryClasses[Math.floor(Math.random() * galleryClasses.length)])
  });

})();
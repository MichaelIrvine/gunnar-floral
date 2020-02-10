
export const gunnarGallery = (function(){
  const galleryImages = document.querySelectorAll('.blocks-gallery-item');
  const galleryClasses = [
    'image-shift__01',
    'image-shift__02',
    'image-shift__03',
    'image-shift__04',
    'image-shift__05',
    'image-shift__06',
    'image-shift__07',
    'image-shift__08',
    'image-shift__09',
    'image-shift__10',
  ];

  galleryImages.forEach( (image) => {
    image.classList.add(galleryClasses[Math.floor(Math.random() * galleryClasses.length)])
  });

})();
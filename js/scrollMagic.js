
const controller = new ScrollMagic.Controller();

const galleryBlocks = document.querySelectorAll(".blocks-gallery-grid");

for (let i = 0; i < galleryBlocks.length; i++) {
  
  new ScrollMagic.Scene({
    triggerElement: galleryBlocks[i], 
    offset: 50, 
    triggerHook: 0.9,
    reverse: false
  })
    .setClassToggle(galleryBlocks[i].childNodes, "fade-in") 
    .addTo(controller);
}


const controller = new ScrollMagic.Controller();

const galleryBlocks = document.querySelectorAll(".blocks-gallery-grid");

for (let i = 0; i < galleryBlocks.length; i++) {
  
  // create a scene for each element
  new ScrollMagic.Scene({
    triggerElement: galleryBlocks[i], // y value not modified, so we can use element as trigger as well
    offset: 50, // start a little later
    triggerHook: 0.9,
    reverse: false
  })
    .setClassToggle(galleryBlocks[i].childNodes, "fade-in") // add class toggle
    .addTo(controller);
}

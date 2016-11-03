
var thumbnailSliderOptions =
{
    sliderId: "thumbnail-slider",
    orientation: "horizontal",
    thumbWidth: "auto",
    thumbHeight: "340px",
    showMode: 1,
    autoAdvance: true,
    selectable: false,
    slideInterval: 3000,
    transitionSpeed: 6500,
    shuffle: false,
    startSlideIndex: 0, //0-based
    pauseOnHover: false,
    initSliderByCallingInitFunc: false,
    rightGap: 0,
    keyboardNav: false,
    mousewheelNav: false,
    before: null,
};

var mcThumbnailSlider = new ThumbnailSlider(thumbnailSliderOptions);

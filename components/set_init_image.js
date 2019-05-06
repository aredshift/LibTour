// Hardcode the starting location facing direction and the visibility of 4-direction arrows
if (current === img_c04 || current === img_e16) {
    document.getElementById('camera').setAttribute("rotation", "0 90 0");
}
if (current === img_c04 || current === img_0006) {
    document.getElementById('goRightLink').setAttribute("visible", false);
}
if (current === img_c04 || current === img_0006 || current === img_e16) {
    document.getElementById('goForwardLink').setAttribute("visible", true);
    document.getElementById('goBackwardLink').setAttribute("visible", true);
}
var url = window.location;
var queryString = url.search;
var curImagePath = "/LibTour/assets/imgs/middle_passage_and_horizontal/1406.jpg";
if (queryString === "?tube") {
    current = img_1906;
    curImagePath = "/LibTour/assets/imgs/middle_passage_and_horizontal/1906.jpg";
} else if (queryString === "?west") {
    current = img_0006;
    curImagePath = "/LibTour/assets/imgs/west_one/0006.jpg";
} else if (queryString === "?chamber") {
    current = img_c04;
    curImagePath = "/LibTour/assets/imgs/chamber/4.jpg";
} else if (queryString === "?east") {
    current = img_e16;
    curImagePath = "/LibTour/assets/imgs/east/16.jpg";
}
document.querySelector('#this-image').setAttribute("src", curImagePath);
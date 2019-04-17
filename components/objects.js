// Create each image object with its respective img source
var img_0000 = {img:"/assets/imgs/south_one/0000.jpg"};
var img_0100 = {img:"/assets/imgs/south_one/0100.jpg"};
var img_0200 = {img:"/assets/imgs/south_one/0200.jpg"};
var img_0300 = {img:"/assets/imgs/south_one/0300.jpg"};
var img_0400 = {img:"/assets/imgs/south_one/0400.jpg"};
var img_0500 = {img:"/assets/imgs/south_one/0500.jpg"};
var img_0600 = {img:"/assets/imgs/south_one/0600.jpg"};
var img_0700 = {img:"/assets/imgs/south_one/0700.jpg"};
var img_0800 = {img:"/assets/imgs/south_one/0800.jpg"};
var img_0900 = {img:"/assets/imgs/south_one/0900.jpg"};
var img_1000 = {img:"/assets/imgs/south_one/1000.jpg"};


// Link each image object to its right, left, forward, and backward destination
//img_0000.right = null;
//img_0000.left = null;
//img_0000.backward = img_0100;
//img_0000.forward = null;
//
//img_0100.right = null;
//img_0100.left = null;
//img_0100.backward = img_0200;
//img_0100.forward = img_0000;
//
//img_0200.right = null;
//img_0200.left = null;
//img_0200.backward = img_0300;
//img_0200.forward = img_0100;
//
//img_0300.right = null;
//img_0300.left = null;
//img_0300.backward = img_0400;
//img_0300.forward = img_0200;
//
//img_0400.right = null;
//img_0400.left = null;
//img_0400.backward = img_0500;
//img_0400.forward = img_0300;
//
//img_0500.right = null;
//img_0500.left = null;
//img_0500.backward = img_0600;
//img_0500.forward = img_0400;
//
//img_0600.right = null;
//img_0600.left = null;
//img_0600.backward = img_0700;
//img_0600.forward = img_0500;
//
//img_0700.right = null;
//img_0700.left = null;
//img_0700.backward = img_0800;
//img_0700.forward = img_0600;
//
//img_0800.right = null;
//img_0800.left = null;
//img_0800.backward = img_0900;
//img_0800.forward = img_0700;
//
//img_0900.right = null;
//img_0900.left = null;
//img_0900.backward = img_1000;
//img_0900.forward = img_0800;

img_0000.right = null;
img_0000.left = img_0100;
img_0000.backward = null;
img_0000.forward = null;

img_0100.right = img_0000;
img_0100.left = img_0200;
img_0100.backward = null;
img_0100.forward = null;

img_0200.right = img_0100;
img_0200.left = img_0300;
img_0200.backward = null;
img_0200.forward = null;

img_0300.right = img_0200;
img_0300.left = img_0400;
img_0300.backward = null;
img_0300.forward = null;

img_0400.right = img_0300;
img_0400.left = img_0500;
img_0400.backward = null;
img_0400.forward = null;

img_0500.right = img_0400;
img_0500.left = img_0600;
img_0500.backward = null;
img_0500.forward = null;

img_0600.right = img_0500;
img_0600.left = img_0700;
img_0600.backward = null;
img_0600.forward = null;

img_0700.right = img_0600;
img_0700.left = img_0800;
img_0700.backward = null;
img_0700.forward = null;

img_0800.right = img_0700;
img_0800.left = img_0900;
img_0800.backward = null;
img_0800.forward = null;

img_0900.right = img_0800;
img_0900.left = img_1000;
img_0900.backward = null;
img_0900.forward = null;


// Set an image to be the starting image
var start = img_0000;
var current = start;

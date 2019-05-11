# LibraryVR
Welcome to the virtual tour of Main Library Book Stacks at the University of Illinois.<br />
This project is based on [Undergraduate Library Virtual tour at UIUC project](https://github.com/jdiffor/LibraryVR).

## What we added
- We added images of main library book stacks and their wirings (see components/object.js).
- We allow starting location choosing requested by query (see components/initialize_image.js & set_init_image.js).
- We added images preloading triggerd by image transition (see components/set-image.js).
- We added an information display system for the places of interests including audio explanation and text presentation. An example we built could be seen at the pneumatic tube spot. (see components/audio.js)
- We allow users to explore the tour with different methods such as computer, vr environment and smartphone. 
## What you may want to know
- You may want to start from UGL VRTour Documentation to get basics of the project.
- We compressed original images we shoot to get a low latency during transition. The image size drops 50% while keeps 95% quality. If you have a better way to deal with latency, you can use original images in assests/original_imgs for higher quality images.
- The images in the east section are shot in the order labelled in east.JPG. The images in the west section are renamed. As is shown in west.png, the image of top-left location is renamed to 0000.jpg. The top-right image is renamed to 0012.jpg. The bottom-left image is renamed to 2700.jpg. The first two numbers represent vertical coordinate while the last two numbers represent horizontal coordinate. For the images in the horizontal passages, the horizontal coordinate increases by 1.5 between neighbouring images. You can see it in west.png.
- The starting location can be chosen by query. For the query, simply add ?location to original url. For example, sredman97.github.io/LibTour?east will direct to east section spot. We offer options including default stair spot, west section spot(query: ?west), east section spot(query: ?east), chamber spot(query: ?chamber), tube spot(query: ?tube). The exact location can be found on spot.png.
- To view an info, simply place the mouse on the yellow text box，or point the black cursor towards it with VR headset or touch screen. The text box would then expand to present the text information. To play the audio explanation, click on the text box and an indication of "Audio is playing" would be displayed on the screen. When the audio is finished, the indication would stop as well.
## Potential future work
- Preload all images using graph search algorithm instead of just possible neighbouring images.
- Create a homepage that offer links containing requests to choose starting location.

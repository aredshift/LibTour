
// Function called when an arrow is chosen
function changeImage(direction) {

    // Check to make sure the direction chosen is valid
    if(current[direction] != null) {

        // Fade image to black
        document.querySelector('#image-current').emit('startFade');

        // Wait for fade to complete.
        setTimeout(function () {
            // Set the new image
            document.querySelector('#image-current').setAttribute('material', 'src', current[direction].img);

            // Maintain a pointer to the previous location - not currently used
            var previous = current;
            // Set current to the new location 
            current = current[direction];
            //preload(current);
            async(function() {preload(current)}, null);

            // Make arrows visible or invisible based on the directions possible from the new location
            if(current.right == null)document.querySelector('#goRightLink').setAttribute("visible", false);
            else document.getElementById('goRightLink').setAttribute("visible", true);
            if(current.left == null) document.getElementById('goLeftLink').setAttribute("visible", false);
            else document.getElementById('goLeftLink').setAttribute("visible", true);
            if(current.forward == null) document.getElementById('goForwardLink').setAttribute("visible", false);
            else document.getElementById('goForwardLink').setAttribute("visible", true);
            if(current.backward == null) document.getElementById('goBackwardLink').setAttribute("visible", false);
            else document.getElementById('goBackwardLink').setAttribute("visible", true);

            // Now that the fade out has completed and the new image has been insterted, fade back in
            document.querySelector('#image-current').emit('endFade');
        }, 800);
    }
}

function preload(cur) {
    if (cur['left'] != null){document.querySelector('#this-image-east').setAttribute('src', cur['left'].img);}
    if (cur['right'] != null){document.querySelector('#this-image-west').setAttribute('src', cur['right'].img);}
    if (cur['backward'] != null){document.querySelector('#this-image-north').setAttribute('src', cur['backward'].img)};
    if (cur['forward'] != null){document.querySelector('#this-image-south').setAttribute('src', cur['forward'].img)};
}

function async(your_function, callback) {
    setTimeout(function() {
        your_function();
        if (callback) {callback();}
    }, 3000);
}

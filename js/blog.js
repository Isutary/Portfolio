function changeImage(image) {
    for (let im in images) {
        document.getElementById(im).style.border = 0;
    }
    image.style.border = "5px solid darkcyan";
    document.getElementById("mainImage").src = images[image.id];
}

var images = {
    "image1": "../image/blog/eloquent.png", 
    "image2": "../image/blog/procsharp.png", 
    "image3": "../image/blog/aspnet.png",
    "image4": "../image/blog/react.png", 
    "image5": "../image/blog/html5.png", 
    "image6": "../image/blog/css.png",
    "image7": "../image/blog/ydkjs.png", 
    "image8": "../image/blog/design.png", 
    "image9": "../image/blog/jwt.png"
}
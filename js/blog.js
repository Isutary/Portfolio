function changeImage(image) {
    for (let im in images) {
        document.getElementById(im).style.border = 0;
    }
    image.style.border = "2px solid darkcyan";
    document.getElementById("mainImage").src = images[image.id];
}

var images = {
    "image1": "https://via.placeholder.com/900x600", 
    "image2": "https://via.placeholder.com/900x600", 
    "image3": "https://via.placeholder.com/900x600",
    "image4": "https://via.placeholder.com/900x600", 
    "image5": "https://via.placeholder.com/900x600", 
    "image6": "https://via.placeholder.com/900x600",
    "image7": "https://via.placeholder.com/900x600", 
    "image8": "https://via.placeholder.com/900x600", 
    "image9": "https://via.placeholder.com/900x600",
    "image10": "https://via.placeholder.com/900x600", 
    "image11": "https://via.placeholder.com/900x600", 
    "image12": "https://via.placeholder.com/900x600"
}
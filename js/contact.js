function focusHandler(label) {
    let object = document.getElementById(label);
    object.style.transform = "translateY(-27px)";
    object.style.background = "linear-gradient(0deg, rgba(255,255,255,1) 35%, rgba(255,255,255,1) 35%, rgba(0,255,255,1) 35%, rgba(0,255,255,1) 100%)";
    object.style.color = "black";
}

function blurHandler(input, label) {
    if (input.value == "") {
        document.getElementById(label).style.transform = "translateY(0)";
        document.getElementById(label).style.background = "white";
        document.getElementById(label).style.color = "grey";
    }
}
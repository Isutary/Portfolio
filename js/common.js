function slide(element, boundingElement, className) {
    let x = document.getElementsByClassName(element);
    let y = document.getElementById(boundingElement).getBoundingClientRect();
    if (y.top >= 0 && y.bottom <= window.innerHeight) {
        for (let i of x) {
            i.classList.add(className);
        }
    }
}

window.addEventListener('scroll', (e) => {
    slide("skill-wrapper", "skills", "isVisibleSkill");
    slide("profile-image-wrapper", "about-me-wrapper", "isVisibleProfile");
    slide("about-me", "about-me-wrapper", "isVisibleAboutMe");
});
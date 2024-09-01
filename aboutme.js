setTimeout(function () {
    document.getElementById('nav').style.visibility = "visible";
}, 3000);

var typed = new Typed(".auto-type", {
    strings: ["Welcome to" + "<br>" + "my corner of the web!"],
    typeSpeed: 50,
    loop: false
})

setTimeout(function () {
    document.getElementById('cds').style.visibility = "visible";
}, 3000);

const paragraphs2 = document.querySelectorAll(".cd");

document.addEventListener("scroll", function () {
    paragraphs2.forEach((paragraph) => {
        if (isInView(paragraph)) {
            paragraph.classList.add("cd--visible");
        }
    });
});

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 && rect.top < (window.innerHeight - 100 || document.documentElement.clientHeight - 100)
    );
}
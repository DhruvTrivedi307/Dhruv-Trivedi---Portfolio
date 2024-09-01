setTimeout(function () {
    document.getElementById('nav').style.visibility = "visible";
}, 1000);

var typed = new Typed(".auto-type", {
    strings: ["Get in Touch"],
    typeSpeed: 50,
    loop: false
})

setTimeout(function () {
    document.getElementById('desc').style.visibility = "visible";
}, 1500);

const paragraphs = document.querySelectorAll(".txt-1");

document.addEventListener("scroll", function () {
    paragraphs.forEach((paragraph) => {
        if (isInView(paragraph)) {
            paragraph.classList.add("txt-1--visible");
        }
    });
});

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 && rect.top < (window.innerHeight - 100 || document.documentElement.clientHeight - 100)
    );
}

const paragraphs2 = document.querySelectorAll(".txt-2");

document.addEventListener("scroll", function () {
    paragraphs2.forEach((paragraph) => {
        if (isInView(paragraph)) {
            paragraph.classList.add("txt-2--visible");
        }
    });
});

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 && rect.top < (window.innerHeight - 100 || document.documentElement.clientHeight - 100)
    );
}
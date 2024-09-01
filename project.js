setTimeout(function () {
    document.getElementById('nav').style.visibility = "visible";
}, 1000);

var typed = new Typed(".auto-type", {
    strings: ["My Projects"],
    typeSpeed: 50,
    loop: false
})

setTimeout(function () {
    document.getElementById('desc').style.visibility = "visible";
}, 1000);

const paragraphs = document.querySelectorAll(".project-1");

document.addEventListener("scroll", function () {
    paragraphs.forEach((paragraph) => {
        if (isInView(paragraph)) {
            paragraph.classList.add("project-1--visible");
        }
    });
});

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 && rect.top < (window.innerHeight - 100 || document.documentElement.clientHeight - 100)
    );
}

const paragraphs2 = document.querySelectorAll(".project-2");

document.addEventListener("scroll", function () {
    paragraphs2.forEach((paragraph) => {
        if (isInView(paragraph)) {
            paragraph.classList.add("project-2--visible");
        }
    });
});

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 && rect.top < (window.innerHeight - 100 || document.documentElement.clientHeight - 100)
    );
}

const paragraphs3 = document.querySelectorAll(".project-3");

document.addEventListener("scroll", function () {
    paragraphs3.forEach((paragraph) => {
        if (isInView(paragraph)) {
            paragraph.classList.add("project-3--visible");
        }
    });
});

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 && rect.top < (window.innerHeight - 100 || document.documentElement.clientHeight - 100)
    );
}
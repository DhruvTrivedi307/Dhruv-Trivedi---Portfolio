var typed = new Typed(".auto-type", {
    strings: ["Hey," + "<br>" + "I'm Dhruv"],
    typeSpeed: 50,
    loop: false
})

setTimeout(function () {
    document.getElementById('desc').style.visibility = "visible";
}, 1500);
setTimeout(function () {
    document.getElementById('image').style.visibility = "visible";
}, 1500);
setTimeout(function () {
    document.getElementById('nav').style.visibility = "visible";
}, 1500);

const paragraphs = document.querySelectorAll(".para");

document.addEventListener("scroll", function () {
    paragraphs.forEach((paragraph) => {
        if (isInView(paragraph)) {
            paragraph.classList.add("para--visible");
        }
    });
});

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 && rect.top < (window.innerHeight - 100 || document.documentElement.clientHeight - 100)
    );
}

const paragraphs2 = document.querySelectorAll(".pg");

document.addEventListener("scroll", function () {
    paragraphs2.forEach((paragraph) => {
        if (isInView(paragraph)) {
            paragraph.classList.add("pg--visible");
        }
    });
});

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 && rect.top < (window.innerHeight - 100 || document.documentElement.clientHeight - 100)
    );
}

const paragraphs4 = document.querySelectorAll(".bt");

document.addEventListener("scroll", function () {
    paragraphs4.forEach((paragraph) => {
        if (isInView(paragraph)) {
            paragraph.classList.add("bt--visible");
        }
    });
});

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 && rect.top < (window.innerHeight - 100 || document.documentElement.clientHeight - 100)
    );
}

const paragraphs3 = document.querySelectorAll(".sig");

document.addEventListener("scroll", function () {
    paragraphs3.forEach((paragraph) => {
        if (isInView(paragraph)) {
            paragraph.classList.add("sig--visible");
        }
    });
});

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 && rect.top < (window.innerHeight - 100 || document.documentElement.clientHeight - 100)
    );
}
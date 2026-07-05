// navbar scroll effect 
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});
// animated text 
new Typed("#typing", {
    strings: [
        "Aspiring Full Stack Developer",
        "Frontend Developer",
        "Problem Solver",
        "Lifelong Learner"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});
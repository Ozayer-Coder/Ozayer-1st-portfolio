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
// live clock 
 function updateClock() {
            const now = new Date();
            // Format to 12-hour or 24-hour time
            document.getElementById('live-clock').textContent = now.toLocaleTimeString();
        }
        // Update the clock every 1000 milliseconds (1 second)
        setInterval(updateClock, 1000);
        // Initialize the clock immediately on page load
        updateClock();
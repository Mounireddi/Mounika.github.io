document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Change header background on scroll
    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Display alert on project click
    document.querySelectorAll("#projects ul li").forEach(item => {
        item.addEventListener("click", function () {
            alert("You clicked on: " + this.innerText);
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });
});
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.page').forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
}

// Set Home Page as Default
document.addEventListener("DOMContentLoaded", function() {
    showSection('home');
});

//animations
    document.addEventListener("DOMContentLoaded", function () {
        function revealSections() {
            let sections = document.querySelectorAll("section");
            let windowHeight = window.innerHeight;

            sections.forEach(section => {
                let sectionTop = section.getBoundingClientRect().top;
                if (sectionTop < windowHeight - 100) {
                    section.classList.add("show");
                }
            });
        }

        // Run on scroll
        window.addEventListener("scroll", revealSections);

        // Run immediately on page load
        revealSections();
    });

//hmtl scroll
document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll('.scroll-reveal');
    
    function revealOnScroll() {
        elements.forEach(el => {
            let position = el.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            if (position < windowHeight - 100) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
/* hightlight the button on click */
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", function () {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});
//toggle button
document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("darkModeToggle");
    const body = document.body;

    // Check for Dark Mode preference in Local Storage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        toggleSwitch.checked = true;
    }

    // Toggle Dark/Light Mode on all pages
    toggleSwitch.addEventListener("change", function () {
        if (toggleSwitch.checked) {
            document.documentElement.classList.add("dark-mode"); // Apply to all pages
            localStorage.setItem("darkMode", "enabled");
        } else {
            document.documentElement.classList.remove("dark-mode"); // Remove from all pages
            localStorage.setItem("darkMode", "disabled");
        }
    });
});
//for home page toggle
document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("darkModeToggle");
    const body = document.body;
    const homeText = document.querySelector("#home h1, #home p, #home nav ul li a"); // Select Home Page text

    // Check for Dark Mode preference in Local Storage
    if (localStorage.getItem("darkMode") === "enabled") {
        document.documentElement.classList.add("dark-mode");
        toggleSwitch.checked = true;
        updateHomeTextColor("white");
    } else {
        updateHomeTextColor("black");
    }

    // Toggle Dark/Light Mode
    toggleSwitch.addEventListener("change", function () {
        if (toggleSwitch.checked) {
            document.documentElement.classList.add("dark-mode"); // Apply Dark Mode
            localStorage.setItem("darkMode", "enabled");
            updateHomeTextColor("white"); // Set text color to white
        } else {
            document.documentElement.classList.remove("dark-mode"); // Remove Dark Mode
            localStorage.setItem("darkMode", "disabled");
            updateHomeTextColor("black"); // Set text color to black
        }
    });

    function updateHomeTextColor(color) {
        document.querySelectorAll("#home h1, #home p, #home nav ul li a").forEach(el => {
            el.style.color = color;
        });
    }
});







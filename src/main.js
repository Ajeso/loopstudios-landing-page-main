const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar a");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})

// alert("Please enter yourself");

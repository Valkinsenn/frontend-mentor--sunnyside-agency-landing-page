// Clears the console
console.clear()

// DOM Queries
const menuBtn = document.querySelector(".menu-btn")

// Sets the default value for the menu button's status:
let menuOpen = false

// Adds a click event listener to the menu button, so that if the menuOpen variable is vault, it adds the .open class to the menuBtn element, but if it's true, takes it away:
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open")
    menuOpen = true
  } else {
    menuBtn.classList.remove("open")
    menuOpen = false
  }
})

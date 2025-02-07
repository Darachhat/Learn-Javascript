
const heading = document.querySelector(".heading")
const btn = document.querySelector(".btn")

btn.onclick = function () {
    if (heading.style.display === "none") {
        heading.style.display = "block"
        btn.textContent = "Hide"
    } else {
        heading.style.display = "none"
        btn.textContent = "Show"
    }
}


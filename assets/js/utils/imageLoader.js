const images = document.querySelectorAll(".postImg")
if (images.length > 0) {
  images.forEach(p => {
    if (p.complete) {
      p.nextElementSibling.remove()
      p.classList.add("opacity-100")
      p.classList.remove("opacity-0")
    } else {
      p.addEventListener("load", (e) => {
        p.nextElementSibling.remove()
        p.classList.add("opacity-100")
        p.classList.remove("opacity-0")
      }, { once: true })
    }
  })
}

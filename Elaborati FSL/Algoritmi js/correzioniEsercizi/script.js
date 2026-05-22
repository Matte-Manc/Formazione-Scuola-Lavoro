let h2 = document.createElement("h2")
h2.innerText = "sottotitolo da js"
document.body.appendChild(h2)
let insertPoint = document.querySelector("h1").nextElementSibling
document.body.insertBefore(h2, insertPoint)

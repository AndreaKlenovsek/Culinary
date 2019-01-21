const contContainer = document.querySelector(".hero")

contContainer.addEventListener("click", e => {
const contBtnop = e.target.closest(".btn-open")
const contBtncl = e.target.closest(".btn-close")


if (contBtnop) {
  contBtnop.parentNode.classList.add("cont-open")
}

if (contBtncl) {
  contBtncl.parentNode.classList.remove("cont-open")
}






})

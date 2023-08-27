function modal() {
  let modal = document.querySelector(".modal");
  modal.classList.toggle("dp");
}
function close() {
  let modal = document.querySelector(".modal");
  let fin = document.querySelector(".finalizado");
  fin.style.backgroundColor = "red"
}
let total = 0;
let count = 0;
let countLS = 1;
const items = []
const images = []
const valores = []

function add(btn_id, itemName, value, image) {
  let btnAdd = document.querySelector(`#${btn_id}`);
  let preco = document.querySelector("#preco-final");
  let removeButton = document.createElement("button");
  let countPopup = document.querySelector("#popup");
  items.push(itemName)
  images.push(image)
  valores.push(value)
  
  localStorage.setItem("name", itemName)
  localStorage.setItem("items", items)
  localStorage.setItem("images", images)
  localStorage.setItem("valores", valores)
  if (btnAdd.value == "Adicionar") {
    btnAdd.style.backgroundColor = "green";
    btnAdd.value = "Adicionado ✔";
    count++;
    countPopup.style.display = "inline";
    countPopup.innerHTML = count;
    localStorage.setItem("times", countLS++)
    total += value;
    newItem.href = "#";
    newItem.id = "pizzinha";
    newItem.textContent = itemName;
    removeButton.textContent = "X";
    preco.style.display = "block";
    preco.textContent = "Total: R$ " + total;
  } else {
    count--;
    localStorage.setItem("times", countLS--)
    if (count === 0) {
      countPopup.style.display = "none";
    } else {
      countPopup.style.display = "inline";
      countPopup.innerHTML = count;
    }
    localStorage.setItem("times", countLS--)
    btnAdd.value = "Adicionar";
    btnAdd.style.backgroundColor = "rgb(255, 56, 56)";
    dropdownContent.removeChild(document.querySelector("#pizzinha"));
    total -= value;
    preco.style.display = "block";
    preco.textContent = "Total: R$ " + total;
  }
}

let countLS = localStorage.getItem("times")

function cart() {
  let cart = document.querySelector(".cart-pedidos");
  let carrinho = document.querySelector(".carrinho");
  let empty = document.querySelector(".empty-cart");
  let countItem = localStorage.getItem("times");
  const itemNames = localStorage.getItem("items").split(",");
  const images = localStorage.getItem("images").split(",");
  const valores = localStorage.getItem("valores").split(",");

  if (itemNames.length > 0) {
    carrinho.removeChild(empty)
  }
  // let itemName = localStorage.getItem("name");
  for (const [i, item] of itemNames.entries()) {
    const img = images[i % images.length]
    const value = valores[i % valores.length]
    cart.innerHTML += `
      <div class="item-pedido" id="1">
            <i class="fa-solid fa-trash" onclick="deleteItem()"></i>
            <div class="pedido-title">
              <h1>${item}</h1>
              <img src="./imagens/${img}" alt="" srcset="" width="200px" height="120px">
            </div>
            <div class="pedido-qtd">
              <h1>Quantidade</h1>
              <h2 id="qtd-produto">1</h2>
            </div>
            <div class="pedido-total">
              <h1>Subtotal</h2>
              <h2 id="valor-pedido">R$${value},00</h2>
            </div>
      </div>
    `;
  }
}

cart();

function deleteItem() {
  let cart = document.querySelector(".cart-pedidos")
  let item = document.getElementById("1")
  cart.removeChild(item)
  localStorage.setItem("times", countLS--)
}

function limparCart() {
  let carrinho = document.querySelector(".carrinho")
  let cartPedidos = document.querySelector(".cart-pedidos")
  carrinho.removeChild(cartPedidos)
  carrinho.innerHTML = `
  <h1>Carrinho vazio</h1>
  <button id="btnVoltar" onclick="location.href='index.html'">Voltar a comprar</button>
  `
}
import { criarItemDaLista } from "../scripts/criarItemDaLista.js";
import { configurarData } from "../utils/configurarData.js";
<<<<<<< HEAD
import { verificarListaVazia } from "../utils/verificarListaVazia.js";
=======
<<<<<<< HEAD
import { verificarListaVazia } from "../utils/verificarListaVazia.js";
=======
>>>>>>> 01cdb36aeed9048860138d7db191b9fe205d0d26
>>>>>>> d005601da85a58af4f184bd778632e0ecd5f2172
import { adicionarComportamentoDeCompra } from "../scripts/adicionarComportamentoDeCompra.js";

const campoItem = document.querySelector("#campo-item");
const listaCompras = document.querySelector("#lista-compras");
const botaoAdicionar = document.querySelector("#botao-adicionar");
const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

let contador = 0;

<<<<<<< HEAD
verificarListaVazia(listaCompras, mensagemListaVazia);
=======
<<<<<<< HEAD
verificarListaVazia(listaCompras, mensagemListaVazia);
=======
verificarListaVazia();
>>>>>>> 01cdb36aeed9048860138d7db191b9fe205d0d26
>>>>>>> d005601da85a58af4f184bd778632e0ecd5f2172

botaoAdicionar.addEventListener("click", (evento) => {
  evento.preventDefault();

  if (campoItemVazio()) {
    alert("Por favor, insira um item.");
    return;
  }

  const novoItem = criarItemDaLista(campoItem.value, contador++, adicionarComportamentoDeCompra);
  adicionarDataAoItem(novoItem);
  adicionarItemNaLista(novoItem);
<<<<<<< HEAD
  verificarListaVazia(listaCompras, mensagemListaVazia);
=======
<<<<<<< HEAD
  verificarListaVazia(listaCompras, mensagemListaVazia);
=======
  verificarListaVazia();
>>>>>>> 01cdb36aeed9048860138d7db191b9fe205d0d26
>>>>>>> d005601da85a58af4f184bd778632e0ecd5f2172
  limparCampo();
  focarNoCampo();
});

function campoItemVazio() {
  return campoItem.value.trim() === "";
}

function adicionarDataAoItem(item) {
  const dataCompleta = configurarData();

  const dataItem = document.createElement("p");
  dataItem.classList.add("texto-data");
  dataItem.innerText = dataCompleta;

  item.appendChild(dataItem);
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
function verificarListaVazia() {
  const quantidadeItens = listaCompras.querySelectorAll("li").length;
  if (quantidadeItens === 0) {
    mensagemListaVazia.classList.remove("invisivel");
  } else {
    mensagemListaVazia.classList.add("invisivel");
  }
}

>>>>>>> 01cdb36aeed9048860138d7db191b9fe205d0d26
>>>>>>> d005601da85a58af4f184bd778632e0ecd5f2172
function adicionarItemNaLista(item) {
  listaCompras.appendChild(item);
}

function limparCampo() {
  campoItem.value = "";
}

function focarNoCampo() {
  campoItem.focus();
}

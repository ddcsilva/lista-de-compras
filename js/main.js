import { criarItemDaLista } from "../scripts/criarItemDaLista.js";
import { configurarData } from "../utils/configurarData.js";
import { adicionarComportamentoDeCompra } from "../scripts/adicionarComportamentoDeCompra.js";

const campoItem = document.querySelector("#campo-item");
const listaCompras = document.querySelector("#lista-compras");
const botaoAdicionar = document.querySelector("#botao-adicionar");
const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

let contador = 0;

verificarListaVazia();

botaoAdicionar.addEventListener("click", (evento) => {
  evento.preventDefault();

  if (campoItemVazio()) {
    alert("Por favor, insira um item.");
    return;
  }

  const novoItem = criarItemDaLista(campoItem.value, contador++, adicionarComportamentoDeCompra);
  adicionarDataAoItem(novoItem);
  adicionarItemNaLista(novoItem);
  verificarListaVazia();
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

function verificarListaVazia() {
  const quantidadeItens = listaCompras.querySelectorAll("li").length;
  if (quantidadeItens === 0) {
    mensagemListaVazia.classList.remove("invisivel");
  } else {
    mensagemListaVazia.classList.add("invisivel");
  }
}

function adicionarItemNaLista(item) {
  listaCompras.appendChild(item);
}

function limparCampo() {
  campoItem.value = "";
}

function focarNoCampo() {
  campoItem.focus();
}

import { criarItemDaLista } from "../scripts/criarItemDaLista.js";
import { configurarData } from "../utils/configurarData.js";
import { verificarListaVazia, mensagemListaVazia } from "../utils/verificarListaVazia.js";
import { adicionarComportamentoDeCompra } from "../scripts/adicionarComportamentoDeCompra.js";

const campoItem = document.querySelector("#campo-item");
const listaCompras = document.querySelector("#lista-compras");
const botaoAdicionar = document.querySelector("#botao-adicionar");

let contador = 0;

verificarListaVazia(listaCompras, mensagemListaVazia);

botaoAdicionar.addEventListener("click", (evento) => {
  evento.preventDefault();

  if (campoItemVazio()) {
    alert("Por favor, insira um item.");
    return;
  }

  const novoItem = criarItemDaLista(campoItem.value, contador++, adicionarComportamentoDeCompra);
  adicionarDataAoItem(novoItem);
  adicionarItemNaLista(novoItem);
  verificarListaVazia(listaCompras, mensagemListaVazia);
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

function adicionarItemNaLista(item) {
  listaCompras.appendChild(item);
}

function limparCampo() {
  campoItem.value = "";
}

function focarNoCampo() {
  campoItem.focus();
}

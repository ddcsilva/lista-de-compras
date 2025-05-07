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

  const novoItem = criarItemDaLista(campoItem.value);
  adicionarDataAoItem(novoItem);
  adicionarItemNaLista(novoItem);
  verificarListaVazia();
  limparCampo();
  focarNoCampo();
});

function campoItemVazio() {
  return campoItem.value.trim() === "";
}

function criarItemDaLista(nome) {
  const li = document.createElement("li");

  const container = document.createElement("div");
  container.classList.add("container-item-lista");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `item-${contador++}`;

  const paragrafo = document.createElement("p");
  paragrafo.innerText = nome;

  adicionarComportamentoDeCompra(checkbox, paragrafo);

  container.appendChild(checkbox);
  container.appendChild(paragrafo);
  li.appendChild(container);

  return li;
}

function configurarData() {
  const agora = new Date();
  const localizacao = "pt-BR";

  const diaSemana = agora.toLocaleDateString(localizacao, {
    weekday: "long",
  });

  const data = agora.toLocaleDateString(localizacao);

  const hora = agora.toLocaleTimeString(localizacao, {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${diaSemana} (${data}) às ${hora}`;
}

function adicionarDataAoItem(item) {
  const dataCompleta = configurarData();

  const dataItem = document.createElement("p");
  dataItem.classList.add("texto-data");
  dataItem.innerText = dataCompleta;

  item.appendChild(dataItem);
}

function adicionarComportamentoDeCompra(checkbox, item) {
  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      item.classList.add("item-comprado");
    } else {
      item.classList.remove("item-comprado");
    }
  });
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

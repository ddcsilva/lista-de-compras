import { Item } from "./Item.js";

export class ListaDeCompras {
  constructor(listaComprasSelector, campoSelector, botaoSelector, listaCompradosSelector) {
    this.listaCompras = document.querySelector(listaComprasSelector);
    this.campoNovoItem = document.querySelector(campoSelector);
    this.botaoSalvarItem = document.querySelector(botaoSelector);
    this.listaItensComprados = document.querySelector(listaCompradosSelector);

    this.inicializar();
  }

  inicializar() {
    this.botaoSalvarItem.addEventListener("click", (evento) => this.adicionarItem(evento));
  }

  adicionarItem(evento) {
    evento.preventDefault();

    const nomeItem = this.campoNovoItem.value.trim();
    if (nomeItem === "") {
      alert("Por favor, digite um item válido!");
      return;
    }

    const item = new Item(nomeItem, this);
    this.listaCompras.appendChild(item.elemento);
    this.campoNovoItem.value = "";
  }

  moverParaComprados(item) {
    this.listaItensComprados.appendChild(item);
    item.querySelector(".descricao-item").style.textDecoration = "line-through";
  }

  moverParaNaoComprados(item) {
    this.listaCompras.appendChild(item);
    item.querySelector(".descricao-item").style.textDecoration = "none";
  }

  removerItem(item) {
    item.remove();
  }

  editarItem(item) {
    const nomeItem = item.querySelector(".descricao-item");
    const novoNome = prompt("Editar item:", nomeItem.textContent);

    if (novoNome && novoNome.trim() !== "") {
      nomeItem.textContent = novoNome.trim();
    }
  }
}

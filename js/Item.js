import { gerarDataAtual } from "./Utils.js";

export class Item {
  constructor(nome, listaDeCompras) {
    this.nome = nome;
    this.dataCriacao = gerarDataAtual();
    this.listaDeCompras = listaDeCompras;
    this.elemento = this.criarElemento();
  }

  criarElemento() {
    const itemDaLista = document.createElement("li");

    const containerItem = document.createElement("div");
    containerItem.classList.add("lista-item-container");

    const containerNomeItem = document.createElement("div");
    containerNomeItem.appendChild(this.criarCheckbox(itemDaLista));

    const descricaoItem = document.createElement("p");
    descricaoItem.classList.add("descricao-item");
    descricaoItem.textContent = this.nome;
    containerNomeItem.appendChild(descricaoItem);

    const containerBotoes = this.criarBotoesItem(itemDaLista);

    const dataAdicaoItem = document.createElement("p");
    dataAdicaoItem.classList.add("texto-data");
    dataAdicaoItem.innerText = this.dataCriacao;

    containerItem.appendChild(containerNomeItem);
    containerItem.appendChild(containerBotoes);
    itemDaLista.appendChild(containerItem);
    itemDaLista.appendChild(dataAdicaoItem);

    return itemDaLista;
  }

  criarCheckbox(itemDaLista) {
    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("container-checkbox");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("input-checkbox");

    const labelCheckbox = document.createElement("label");

    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    checkbox.addEventListener("change", () => {
      checkboxCustomizado.classList.toggle("checked", checkbox.checked);

      if (checkbox.checked) {
        this.listaDeCompras.moverParaComprados(itemDaLista);
      } else {
        this.listaDeCompras.moverParaNaoComprados(itemDaLista);
      }
    });

    labelCheckbox.appendChild(checkbox);
    labelCheckbox.appendChild(checkboxCustomizado);
    containerCheckbox.appendChild(labelCheckbox);

    return containerCheckbox;
  }

  criarBotoesItem(itemDaLista) {
    const containerBotoes = document.createElement("div");

    const botaoRemover = this.criarBotao("/assets/images/delete.svg", "Remover item", () =>
      this.listaDeCompras.removerItem(itemDaLista)
    );

    const botaoEditar = this.criarBotao("/assets/images/edit.svg", "Editar item", () =>
      this.listaDeCompras.editarItem(itemDaLista)
    );

    containerBotoes.appendChild(botaoRemover);
    containerBotoes.appendChild(botaoEditar);

    return containerBotoes;
  }

  criarBotao(imagemSrc, altTexto, acao) {
    const botao = document.createElement("button");
    botao.classList.add("item-lista-button");

    const imagem = document.createElement("img");
    imagem.src = imagemSrc;
    imagem.alt = altTexto;

    botao.appendChild(imagem);
    botao.addEventListener("click", acao);

    return botao;
  }
}

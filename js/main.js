class ListaDeCompras {
  constructor(listaComprasSelector, campoSelector, botaoSelector) {
    this.listaCompras = document.querySelector(listaComprasSelector);
    this.campoNovoItem = document.querySelector(campoSelector);
    this.botaoSalvarItem = document.querySelector(botaoSelector);
    this.listaItensComprados = document.querySelector("#lista-comprados");
    this.contador = 0;

    this.inicializar();
  }

  inicializar() {
    this.botaoSalvarItem.addEventListener("click", (evento) => this.adicionarItem(evento));
  }

  adicionarItem(evento) {
    evento.preventDefault();

    const item = this.campoNovoItem.value.trim();

    if (item === "") {
      alert("Por favor, digite um item válido!");
      return;
    }

    const itemDaLista = this.criarElementoItem(item);
    this.listaCompras.appendChild(itemDaLista);

    this.campoNovoItem.value = "";
  }

  criarElementoItem(item) {
    const itemDaLista = document.createElement("li");
    itemDaLista.appendChild(this.criarConteudoItem(item));
    return itemDaLista;
  }

  criarConteudoItem(item) {
    const itemDaLista = document.createElement("li");
    const containerItem = document.createElement("div");
    containerItem.classList.add("lista-item-container");

    const containerNomeItem = document.createElement("div");
    containerNomeItem.appendChild(this.criarCheckbox(itemDaLista));

    const nomeDoItem = document.createElement("p");
    nomeDoItem.id = "descricao-item";
    nomeDoItem.textContent = item;
    containerNomeItem.appendChild(nomeDoItem);

    const containerBotoes = this.criarBotoesItem();

    containerItem.appendChild(containerNomeItem);
    containerItem.appendChild(containerBotoes);
    itemDaLista.appendChild(containerItem);

    return itemDaLista;
  }

  criarCheckbox(itemDaLista) {
    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("container-checkbox");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("input-checkbox");
    checkbox.id = `checkbox-${this.contador++}`;

    const labelCheckbox = document.createElement("label");
    labelCheckbox.setAttribute("for", checkbox.id);

    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    checkbox.addEventListener("change", () => {
      checkboxCustomizado.classList.toggle("checked", checkbox.checked);

      const descricaoItem = itemDaLista.querySelector("#descricao-item");

      if (checkbox.checked) {
        this.listaItensComprados.appendChild(itemDaLista);
        descricaoItem.style.textDecoration = "line-through";
      } else {
        this.listaCompras.appendChild(itemDaLista);
        descricaoItem.style.textDecoration = "none";
      }
    });

    labelCheckbox.appendChild(checkbox);
    labelCheckbox.appendChild(checkboxCustomizado);
    containerCheckbox.appendChild(labelCheckbox);

    return containerCheckbox;
  }

  criarBotoesItem() {
    const containerBotoes = document.createElement("div");

    const botaoRemover = this.criarBotao("/img/delete.svg", "Remover item", () =>
      this.removerItem(containerBotoes.parentElement.parentElement)
    );

    const botaoEditar = this.criarBotao("/img/edit.svg", "Editar item", () =>
      this.editarItem(containerBotoes.parentElement)
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

  removerItem(item) {
    item.remove();
  }

  editarItem(containerItem) {
    const nomeItem = containerItem.querySelector("p");
    const novoNome = prompt("Editar item:", nomeItem.textContent);

    if (novoNome && novoNome.trim() !== "") {
      nomeItem.textContent = novoNome.trim();
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new ListaDeCompras("#lista-compras", "#campo-item", "#botao-adicionar", "#lista-comprados");
});

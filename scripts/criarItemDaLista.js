export function criarItemDaLista(nome, contador, adicionarComportamentoDeCompra) {
  const li = document.createElement("li");

  const container = document.createElement("div");
  container.classList.add("container-item-lista");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `item-${contador}`;

  const paragrafo = document.createElement("p");
  paragrafo.innerText = nome;

  adicionarComportamentoDeCompra(checkbox, paragrafo);

  container.appendChild(checkbox);
  container.appendChild(paragrafo);
  li.appendChild(container);

  return li;
}

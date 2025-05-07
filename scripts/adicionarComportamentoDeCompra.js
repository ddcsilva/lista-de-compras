export function adicionarComportamentoDeCompra(checkbox, itemTexto) {
  checkbox.addEventListener("click", () => {
    itemTexto.classList.toggle("item-comprado", checkbox.checked);
  });
}

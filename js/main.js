import { ListaDeCompras } from "./ListaDeCompras.js";

document.addEventListener("DOMContentLoaded", () => {
  new ListaDeCompras("#lista-compras", "#campo-item", "#botao-adicionar", "#lista-comprados");
});

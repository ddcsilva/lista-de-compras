export const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

export function verificarListaVazia(listaDeCompras) {
  const temItens = listaDeCompras.querySelectorAll("li").length > 0;

  mensagemListaVazia.classList.toggle("invisivel", temItens);
}

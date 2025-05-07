export function verificarListaVazia(lista, mensagem) {
  const quantidadeItens = lista.querySelectorAll("li").length;
  if (quantidadeItens === 0) {
    mensagem.classList.remove("invisivel");
  } else {
    mensagem.classList.add("invisivel");
  }
}

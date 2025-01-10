export function gerarDataAtual() {
  const dataAtual = new Date();
  const dataFormatada = dataAtual.toLocaleDateString("pt-BR", { weekday: "long" });
  const horaFormatada = dataAtual.toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric" });

  return `${dataFormatada} (${dataAtual.toLocaleDateString("pt-BR")}) às ${horaFormatada}`;
}

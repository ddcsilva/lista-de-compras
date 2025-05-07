export function configurarData() {
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

function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
  return capitalInicial + capitalInicial * taxaJuros * tempoAplicacao;
}
function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
  return capitalInicial * (1 + taxaJuros) ** tempoAplicacao;
}
console.log('Juros simples: '+jurosSimples(1000, 0.2, 2));
console.log('Juros compostos: '+jurosCompostos(1000, 0.2, 2));

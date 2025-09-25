export class Boletim {

  constructor() {
    this.notas = [];
  }

  adicionarNota(nota) {
    this.#validarNumero(nota)

    this.notas.push(nota);
  }

  calcularMedia() {
    if (this.notas.length === 0) {
      return 0;
    }

    const somatoria = this.notas.reduce((soma, valor) => soma + valor, 0);
    return somatoria / this.notas.length;
  }

  verificarAprovacao(mediaMinima = 7) {
    this.#validarNumero(mediaMinima)
    
    return this.calcularMedia() >= mediaMinima;
  }

  #validarNumero(numero){
    if (typeof numero !== "number" || Number.isNaN(numero)) {
      throw new TypeError(`O valor "${numero}" não é um número válido`);
    }
    if (numero < 0 || numero > 10) {
      throw new Error("Número deve estar entre 0 e 10");
    }
  }

}

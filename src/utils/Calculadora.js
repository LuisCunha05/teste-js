export class Calculadora {

  /**
   * 
   * @param {number} a 
   * @param {number} b 
   * @returns number
   * @throws Throws TypeError quando um parâmetro é inválido
   */
  somar(a, b) {
    this.#validarNumero(a);
    this.#validarNumero(b);

    return a + b;
  }

  /**
   * 
   * @param {number} a 
   * @param {number} b 
   * @returns number
   * @throws Throws TypeError quando um parâmetro é inválido
   */
  subtrair(a, b) {
    this.#validarNumero(a);
    this.#validarNumero(b);

    return a - b;
  }

  /**
   * 
   * @param {number} a 
   * @param {number} b 
   * @returns number
   * @throws Throws TypeError quando um parâmetro é inválido
   */
  multiplicar(a, b) {
    this.#validarNumero(a);
    this.#validarNumero(b);

    return a * b;
  }

  /**
   * 
   * @param {number} a 
   * @param {number} b 
   * @returns number
   * @throws Throws TypeError quando um parâmetro é inválido
   */
  dividir(a, b) {
    this.#validarNumero(a);
    this.#validarNumero(b);
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida");
    }

    return a / b;
  }

  // M = C * i * t
  /**
   * Calcula M = C * i * t
   * @param {number} capital 
   * @param {number} taxa 
   * @param {number} tempo 
   * @returns number
   * @throws Throws TypeError quando um parâmetro é inválido
   */
  jurosSimples(capital, taxa, tempo) {
    this.#validarNumero(capital);
    this.#validarNumero(taxa);
    this.#validarNumero(tempo);

    return capital * taxa * tempo;
  }

  // M = C * (1 + i)^t
   /**
   * Calcula M = C * (1 + i)^t
   * @param {number} capital 
   * @param {number} taxa 
   * @param {number} tempo 
   * @returns number
   * @throws Throws TypeError quando um parâmetro é inválido
   */
  jurosCompostos(capital, taxa, tempo) {
    this.#validarNumero(capital);
    this.#validarNumero(taxa);
    this.#validarNumero(tempo);

    return capital * Math.pow(1 + taxa, tempo);
  }

   /**
   * 
   * @param {number} valor
   * @param {number} percentual
   * @returns number
   * @throws Throws TypeError quando um parâmetro é inválido
   */
  descontoPercentual(valor, percentual) {
    this.#validarNumero(valor);
    this.#validarNumero(percentual);
    if (percentual < 0 || percentual > 1) {
      throw new Error("Percentual deve estar entre 0 e 1");
    }

    return (1 - percentual) * valor;
  }

   /**
   * 
   * @param {number} valor
   * @param {number} desconto
   * @returns number
   * @throws Throws TypeError quando um parâmetro é inválido
   */
  descontoFixo(valor, desconto) {
    this.#validarNumero(valor);
    this.#validarNumero(desconto);
    if (desconto > valor) {
      throw new Error("Desconto maior que o valor");
    }

    return valor - desconto;
  }

  /**
   * 
   * @param {number} valor
   * @throws TypeError - Throws TypeError quando um parâmetro é inválido
   */
  #validarNumero(valor) {
    if (typeof valor !== "number" || Number.isNaN(valor) || !Number.isFinite(valor)) {
      throw new TypeError(`O valor "${valor}" não é um número válido`);
    }
  }

}

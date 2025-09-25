//@ts-check
import { Calculadora } from "../../src/utils/Calculadora"


describe('Testes para Classe Calculadora', () => {
    let calculadora;
    beforeEach(() => {
        calculadora = new Calculadora()
    })
    test('Deve somar 1 + 1', () => {
        expect(calculadora.somar(1, 1)).toBe(2)
    })
})
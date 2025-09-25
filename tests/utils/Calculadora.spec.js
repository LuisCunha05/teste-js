//@ts-check
import { Calculadora } from "../../src/utils/Calculadora"

const NUMS = {
    ZERO:0,
    UM:1,
    DOIS: 2,
    TRES: 3,
    CINCO: 5,
    DEZ: 10,
    VINTE: 20,
    TRINTA: 30,
    CEM: 100,
}

describe('Testes para Classe Calculadora', () => {
    let calculadora;
    beforeEach(() => {
        calculadora = new Calculadora()
    })

    describe('Teste função somar', () => {
        test('Deve somar dois números positivos', () => {
            expect(calculadora.somar(NUMS.UM, NUMS.CEM)).toBe(101)
        })

        test('Deve somar dois números negativos', () => {
            expect(calculadora.somar(-NUMS.UM, -NUMS.CEM)).toBe(-101)
        })

        test('Deve somar um número positivo com negativo', () => {
            expect(calculadora.somar(NUMS.UM, -NUMS.CEM)).toBe(-99)
        })

        test('Deve somar um número negativo com positivo', () => {
            expect(calculadora.somar(-NUMS.UM, NUMS.CEM)).toBe(99)
        })

        test('Deve somar um número positivo com zero', () => {
            expect(calculadora.somar(NUMS.UM, NUMS.ZERO)).toBe(1)
        })

        test('Deve somar um número negativo com zero', () => {
            expect(calculadora.somar(-NUMS.UM, NUMS.ZERO)).toBe(-1)
        })

        test('Deve somar um número zero com um número positivo', () => {
            expect(calculadora.somar(NUMS.ZERO, NUMS.DEZ)).toBe(10)
        })

        test('Deve somar um número zero com um número negativo', () => {
            expect(calculadora.somar(NUMS.ZERO, -NUMS.DEZ)).toBe(-10)
        })

        describe('Deve testar parâmetros inválidos', () => {
            test('Não deve aceitar string no primeiro param', () => {
                expect(() => calculadora.somar('', NUMS.CEM)).toThrow(TypeError)
            })
            
            test('Não deve aceitar boolean no primeiro param', () => {
                expect(() => calculadora.somar(false, NUMS.CEM)).toThrow(TypeError)
            })

            test('Não deve aceitar Date no primeiro param', () => {
                expect(() => calculadora.somar(new Date(), NUMS.CEM)).toThrow(TypeError)
            })

            test('Não deve aceitar Array no primeiro param', () => {
                expect(() => calculadora.somar([], NUMS.CEM)).toThrow(TypeError)
            })

            test('Não deve aceitar null no primeiro param', () => {
                expect(() => calculadora.somar(null, NUMS.CEM)).toThrow(TypeError)
            })

            test('Não deve aceitar objeto no primeiro param', () => {
                expect(() => calculadora.somar({}, NUMS.CEM)).toThrow(TypeError)
            })
            
            test('Não deve aceitar undefined no primeiro param', () => {
                expect(() => calculadora.somar(undefined, NUMS.CEM)).toThrow(TypeError)
            })
            
            test('Não deve aceitar NaN no primeiro param', () => {
                expect(() => calculadora.somar(NaN, NUMS.CEM)).toThrow(TypeError)
            })

            test('Não deve aceitar Infinity no primeiro param', () => {
                expect(() => calculadora.somar(Infinity, NUMS.CEM)).toThrow(TypeError)
            })

            test('Não deve aceitar string no segundo param', () => {
                expect(() => calculadora.somar(NUMS.CEM, '')).toThrow(TypeError)
            })
            
            test('Não deve aceitar boolean no segundo param', () => {
                expect(() => calculadora.somar(NUMS.CEM, false)).toThrow(TypeError)
            })

            test('Não deve aceitar Date no segundo param', () => {
                expect(() => calculadora.somar(NUMS.CEM, new Date())).toThrow(TypeError)
            })

            test('Não deve aceitar Array no segundo param', () => {
                expect(() => calculadora.somar(NUMS.CEM, [])).toThrow(TypeError)
            })

            test('Não deve aceitar null no segundo param', () => {
                expect(() => calculadora.somar(NUMS.CEM, null)).toThrow(TypeError)
            })

            test('Não deve aceitar objeto no segundo param', () => {
                expect(() => calculadora.somar(NUMS.CEM, {})).toThrow(TypeError)
            })
            
            test('Não deve aceitar undefined no segundo param', () => {
                expect(() => calculadora.somar(NUMS.CEM, undefined)).toThrow(TypeError)
            })
            
            test('Não deve aceitar NaN no segundo param', () => {
                expect(() => calculadora.somar(NUMS.CEM, NaN)).toThrow(TypeError)
            })

            test('Não deve aceitar Infinity no segundo param', () => {
                expect(() => calculadora.somar(NUMS.CEM, Infinity)).toThrow(TypeError)
            })
        })

        

    })

})
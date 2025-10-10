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
    /** 
     * @type {Calculadora}
     */
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
                //@ts-expect-error
                expect(() => calculadora.somar('', NUMS.CEM)).toThrow(TypeError)
            })
            
            test('Não deve aceitar boolean no primeiro param', () => {
                //@ts-expect-error
                expect(() => calculadora.somar(false, NUMS.CEM)).toThrow(TypeError)
            })

            test('Não deve aceitar Date no primeiro param', () => {
                //@ts-expect-error
                expect(() => calculadora.somar(new Date(), NUMS.CEM)).toThrow(TypeError)
            })

            test('Não deve aceitar Array no primeiro param', () => {
                //@ts-expect-error
                expect(() => calculadora.somar([], NUMS.CEM)).toThrow(TypeError)
            })

            test('Não deve aceitar null no primeiro param', () => {
                //@ts-expect-error
                expect(() => calculadora.somar(null, NUMS.CEM)).toThrow(TypeError)
            })

            test('Não deve aceitar objeto no primeiro param', () => {
                //@ts-expect-error
                expect(() => calculadora.somar({}, NUMS.CEM)).toThrow(TypeError)
            })
            
            test('Não deve aceitar undefined no primeiro param', () => {
                //@ts-expect-error
                expect(() => calculadora.somar(undefined, NUMS.CEM)).toThrow(TypeError)
            })
            
            test('Não deve aceitar NaN no primeiro param', () => {
                expect(() => calculadora.somar(NaN, NUMS.CEM)).toThrow(TypeError)
            })

            test('Não deve aceitar Infinity no primeiro param', () => {
                expect(() => calculadora.somar(Infinity, NUMS.CEM)).toThrow(TypeError)
            })

            test('Não deve aceitar string no segundo param', () => {
                //@ts-expect-error
                expect(() => calculadora.somar(NUMS.CEM, '')).toThrow(TypeError)
            })
            
            test('Não deve aceitar boolean no segundo param', () => {
                //@ts-expect-error
                expect(() => calculadora.somar(NUMS.CEM, false)).toThrow(TypeError)
            })

            test('Não deve aceitar Date no segundo param', () => {
                //@ts-expect-error
                expect(() => calculadora.somar(NUMS.CEM, new Date())).toThrow(TypeError)
            })

            test('Não deve aceitar Array no segundo param', () => {
                //@ts-expect-error
                expect(() => calculadora.somar(NUMS.CEM, [])).toThrow(TypeError)
            })

            test('Não deve aceitar null no segundo param', () => {
                //@ts-expect-error
                expect(() => calculadora.somar(NUMS.CEM, null)).toThrow(TypeError)
            })

            test('Não deve aceitar objeto no segundo param', () => {
                //@ts-expect-error
                expect(() => calculadora.somar(NUMS.CEM, {})).toThrow(TypeError)
            })
            
            test('Não deve aceitar undefined no segundo param', () => {
                //@ts-expect-error
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

    describe('Teste função subtrair', () => {
        test('Deve subtrair dois números positivos', () => {
            expect(calculadora.subtrair(NUMS.UM, NUMS.CEM)).toBe(NUMS.UM - NUMS.CEM)
        })

        test('Deve subtrair dois números negativos', () => {
            expect(calculadora.subtrair(-NUMS.UM, -NUMS.CEM)).toBe((-NUMS.UM) - (-NUMS.CEM))
        })

        test('Deve subtrair um número positivo com negativo', () => {
            expect(calculadora.subtrair(NUMS.UM, -NUMS.CEM)).toBe(NUMS.UM - (-NUMS.CEM))
        })

        test('Deve subtrair um número negativo com positivo', () => {
            expect(calculadora.subtrair(-NUMS.UM, NUMS.CEM)).toBe(-NUMS.UM - NUMS.CEM)
        })

        test('Deve subtrair um número positivo com zero', () => {
            expect(calculadora.subtrair(NUMS.UM, NUMS.ZERO)).toBe(NUMS.UM - NUMS.ZERO)
        })

        test('Deve subtrair um número negativo com zero', () => {
            expect(calculadora.subtrair(-NUMS.UM, NUMS.ZERO)).toBe(-NUMS.UM - NUMS.ZERO)
        })

        test('Deve subtrair um número zero com um número positivo', () => {
            expect(calculadora.subtrair(NUMS.ZERO, NUMS.DEZ)).toBe(NUMS.ZERO - NUMS.DEZ)
        })

        test('Deve subtrair um número zero com um número negativo', () => {
            expect(calculadora.subtrair(NUMS.ZERO, -NUMS.DEZ)).toBe(NUMS.ZERO - (-NUMS.DEZ))
        })

        describe('Deve testar parâmetros inválidos', () => {
            test('Não deve aceitar string no primeiro param', () => {
                //@ts-expect-error
                expect(() => calculadora.subtrair('', NUMS.CEM)).toThrow(TypeError)
            })
            
            test('Não deve aceitar boolean no primeiro param', () => {
                //@ts-expect-error
                expect(() => calculadora.subtrair(false, NUMS.CEM)).toThrow(TypeError)
            })

            test('Não deve aceitar Date no primeiro param', () => {
                //@ts-expect-error
                expect(() => calculadora.subtrair(new Date(), NUMS.CEM)).toThrow(TypeError)
            })

            test('Não deve aceitar Array no primeiro param', () => {
                //@ts-expect-error
                expect(() => calculadora.subtrair([], NUMS.CEM)).toThrow(TypeError)
            })

            test('Não deve aceitar null no primeiro param', () => {
                //@ts-expect-error
                expect(() => calculadora.subtrair(null, NUMS.CEM)).toThrow(TypeError)
            })

            test('Não deve aceitar objeto no primeiro param', () => {
                //@ts-expect-error
                expect(() => calculadora.subtrair({}, NUMS.CEM)).toThrow(TypeError)
            })
            
            test('Não deve aceitar undefined no primeiro param', () => {
                //@ts-expect-error
                expect(() => calculadora.subtrair(undefined, NUMS.CEM)).toThrow(TypeError)
            })
            
            test('Não deve aceitar NaN no primeiro param', () => {
                expect(() => calculadora.subtrair(NaN, NUMS.CEM)).toThrow(TypeError)
            })

            test('Não deve aceitar Infinity no primeiro param', () => {
                expect(() => calculadora.subtrair(Infinity, NUMS.CEM)).toThrow(TypeError)
            })

            test('Não deve aceitar string no segundo param', () => {
                //@ts-expect-error
                expect(() => calculadora.subtrair(NUMS.CEM, '')).toThrow(TypeError)
            })
            
            test('Não deve aceitar boolean no segundo param', () => {
                //@ts-expect-error
                expect(() => calculadora.subtrair(NUMS.CEM, false)).toThrow(TypeError)
            })

            test('Não deve aceitar Date no segundo param', () => {
                //@ts-expect-error
                expect(() => calculadora.subtrair(NUMS.CEM, new Date())).toThrow(TypeError)
            })

            test('Não deve aceitar Array no segundo param', () => {
                //@ts-expect-error
                expect(() => calculadora.subtrair(NUMS.CEM, [])).toThrow(TypeError)
            })

            test('Não deve aceitar null no segundo param', () => {
                //@ts-expect-error
                expect(() => calculadora.subtrair(NUMS.CEM, null)).toThrow(TypeError)
            })

            test('Não deve aceitar objeto no segundo param', () => {
                //@ts-expect-error
                expect(() => calculadora.subtrair(NUMS.CEM, {})).toThrow(TypeError)
            })
            
            test('Não deve aceitar undefined no segundo param', () => {
                //@ts-expect-error
                expect(() => calculadora.subtrair(NUMS.CEM, undefined)).toThrow(TypeError)
            })
            
            test('Não deve aceitar NaN no segundo param', () => {
                expect(() => calculadora.subtrair(NUMS.CEM, NaN)).toThrow(TypeError)
            })

            test('Não deve aceitar Infinity no segundo param', () => {
                expect(() => calculadora.subtrair(NUMS.CEM, Infinity)).toThrow(TypeError)
            })
        })

    })

    describe('Teste função multiplicar', () => {
        test('Deve multiplicar dois números positivos', () => {
            expect(calculadora.multiplicar(NUMS.UM, NUMS.CEM)).toBe(NUMS.UM * NUMS.CEM)
        })

        test('Deve multiplicar dois números negativos', () => {
            expect(calculadora.multiplicar(-NUMS.UM, -NUMS.CEM)).toBe((-NUMS.UM) * (-NUMS.CEM))
        })

        test('Deve multiplicar um número positivo com negativo', () => {
            expect(calculadora.multiplicar(NUMS.UM, -NUMS.CEM)).toBe(NUMS.UM * (-NUMS.CEM))
        })

        test('Deve multiplicar um número negativo com positivo', () => {
            expect(calculadora.multiplicar(-NUMS.UM, NUMS.CEM)).toBe(-NUMS.UM * NUMS.CEM)
        })

        test('Deve multiplicar um número positivo com zero', () => {
            expect(calculadora.multiplicar(NUMS.UM, NUMS.ZERO)).toBe(NUMS.UM * NUMS.ZERO)
        })

        test('Deve multiplicar um número negativo com zero', () => {
            expect(calculadora.multiplicar(-NUMS.UM, NUMS.ZERO)).toBe(-NUMS.UM * NUMS.ZERO)
        })

        test('Deve multiplicar um número zero com um número positivo', () => {
            expect(calculadora.multiplicar(NUMS.ZERO, NUMS.DEZ)).toBe(NUMS.ZERO * NUMS.DEZ)
        })

        test('Deve multiplicar um número zero com um número negativo', () => {
            expect(calculadora.multiplicar(NUMS.ZERO, -NUMS.DEZ)).toBe(NUMS.ZERO * (-NUMS.DEZ))
        })

        describe('Deve testar parâmetros inválidos', () => {
            test('Não deve aceitar string no primeiro param', () => {
                //@ts-expect-error
                expect(() => calculadora.multiplicar('', NUMS.CEM)).toThrow(TypeError)
            })
            
            test('Não deve aceitar boolean no primeiro param', () => {
                //@ts-expect-error
                expect(() => calculadora.multiplicar(false, NUMS.CEM)).toThrow(TypeError)
            })

            test('Não deve aceitar Date no primeiro param', () => {
                //@ts-expect-error
                expect(() => calculadora.multiplicar(new Date(), NUMS.CEM)).toThrow(TypeError)
            })

            test('Não deve aceitar Array no primeiro param', () => {
                //@ts-expect-error
                expect(() => calculadora.multiplicar([], NUMS.CEM)).toThrow(TypeError)
            })

            test('Não deve aceitar null no primeiro param', () => {
                //@ts-expect-error
                expect(() => calculadora.multiplicar(null, NUMS.CEM)).toThrow(TypeError)
            })

            test('Não deve aceitar objeto no primeiro param', () => {
                //@ts-expect-error
                expect(() => calculadora.multiplicar({}, NUMS.CEM)).toThrow(TypeError)
            })
            
            test('Não deve aceitar undefined no primeiro param', () => {
                //@ts-expect-error
                expect(() => calculadora.multiplicar(undefined, NUMS.CEM)).toThrow(TypeError)
            })
            
            test('Não deve aceitar NaN no primeiro param', () => {
                expect(() => calculadora.multiplicar(NaN, NUMS.CEM)).toThrow(TypeError)
            })

            test('Não deve aceitar Infinity no primeiro param', () => {
                expect(() => calculadora.multiplicar(Infinity, NUMS.CEM)).toThrow(TypeError)
            })

            test('Não deve aceitar string no segundo param', () => {
                //@ts-expect-error
                expect(() => calculadora.multiplicar(NUMS.CEM, '')).toThrow(TypeError)
            })
            
            test('Não deve aceitar boolean no segundo param', () => {
                //@ts-expect-error
                expect(() => calculadora.multiplicar(NUMS.CEM, false)).toThrow(TypeError)
            })

            test('Não deve aceitar Date no segundo param', () => {
                //@ts-expect-error
                expect(() => calculadora.multiplicar(NUMS.CEM, new Date())).toThrow(TypeError)
            })

            test('Não deve aceitar Array no segundo param', () => {
                //@ts-expect-error
                expect(() => calculadora.multiplicar(NUMS.CEM, [])).toThrow(TypeError)
            })

            test('Não deve aceitar null no segundo param', () => {
                //@ts-expect-error
                expect(() => calculadora.multiplicar(NUMS.CEM, null)).toThrow(TypeError)
            })

            test('Não deve aceitar objeto no segundo param', () => {
                //@ts-expect-error
                expect(() => calculadora.multiplicar(NUMS.CEM, {})).toThrow(TypeError)
            })
            
            test('Não deve aceitar undefined no segundo param', () => {
                //@ts-expect-error
                expect(() => calculadora.multiplicar(NUMS.CEM, undefined)).toThrow(TypeError)
            })
            
            test('Não deve aceitar NaN no segundo param', () => {
                expect(() => calculadora.multiplicar(NUMS.CEM, NaN)).toThrow(TypeError)
            })

            test('Não deve aceitar Infinity no segundo param', () => {
                expect(() => calculadora.multiplicar(NUMS.CEM, Infinity)).toThrow(TypeError)
            })
        })

    })

    describe('Teste função dividir', () => {
        test('Deve dividir dois números positivos', () => {
            expect(calculadora.dividir(NUMS.UM, NUMS.CEM)).toBe(NUMS.UM / NUMS.CEM)
        })

        test('Deve dividir dois números negativos', () => {
            expect(calculadora.dividir(-NUMS.UM, -NUMS.CEM)).toBe((-NUMS.UM) / (-NUMS.CEM))
        })

        test('Deve dividir um número positivo com negativo', () => {
            expect(calculadora.dividir(NUMS.UM, -NUMS.CEM)).toBe(NUMS.UM / (-NUMS.CEM))
        })

        test('Deve dividir um número negativo com positivo', () => {
            expect(calculadora.dividir(-NUMS.UM, NUMS.CEM)).toBe(-NUMS.UM / NUMS.CEM)
        })

        test('Não deve dividir um número positivo com zero', () => {
            expect(() => calculadora.dividir(NUMS.UM, NUMS.ZERO)).toThrow(Error)
        })

        test('Não deve dividir um número negativo com zero', () => {
            expect(() => calculadora.dividir(-NUMS.UM, NUMS.ZERO)).toThrow(Error)
        })

        test('Deve dividir um número zero com um número positivo', () => {
            expect(calculadora.dividir(NUMS.ZERO, NUMS.DEZ)).toBe(NUMS.ZERO / NUMS.DEZ)
        })

        test('Deve dividir um número zero com um número negativo', () => {
            expect(calculadora.dividir(NUMS.ZERO, -NUMS.DEZ)).toBe(NUMS.ZERO / (-NUMS.DEZ))
        })

        describe('Deve testar parâmetros inválidos', () => {
            test('Não deve aceitar string no primeiro param', () => {
                //@ts-expect-error
                expect(() => calculadora.dividir('', NUMS.CEM)).toThrow(TypeError)
            })
            
            test('Não deve aceitar boolean no primeiro param', () => {
                //@ts-expect-error
                expect(() => calculadora.dividir(false, NUMS.CEM)).toThrow(TypeError)
            })

            test('Não deve aceitar Date no primeiro param', () => {
                //@ts-expect-error
                expect(() => calculadora.dividir(new Date(), NUMS.CEM)).toThrow(TypeError)
            })

            test('Não deve aceitar Array no primeiro param', () => {
                //@ts-expect-error
                expect(() => calculadora.dividir([], NUMS.CEM)).toThrow(TypeError)
            })

            test('Não deve aceitar null no primeiro param', () => {
                //@ts-expect-error
                expect(() => calculadora.dividir(null, NUMS.CEM)).toThrow(TypeError)
            })

            test('Não deve aceitar objeto no primeiro param', () => {
                //@ts-expect-error
                expect(() => calculadora.dividir({}, NUMS.CEM)).toThrow(TypeError)
            })
            
            test('Não deve aceitar undefined no primeiro param', () => {
                //@ts-expect-error
                expect(() => calculadora.dividir(undefined, NUMS.CEM)).toThrow(TypeError)
            })
            
            test('Não deve aceitar NaN no primeiro param', () => {
                expect(() => calculadora.dividir(NaN, NUMS.CEM)).toThrow(TypeError)
            })

            test('Não deve aceitar Infinity no primeiro param', () => {
                expect(() => calculadora.dividir(Infinity, NUMS.CEM)).toThrow(TypeError)
            })

            test('Não deve aceitar string no segundo param', () => {
                //@ts-expect-error
                expect(() => calculadora.dividir(NUMS.CEM, '')).toThrow(TypeError)
            })
            
            test('Não deve aceitar boolean no segundo param', () => {
                //@ts-expect-error
                expect(() => calculadora.dividir(NUMS.CEM, false)).toThrow(TypeError)
            })

            test('Não deve aceitar Date no segundo param', () => {
                //@ts-expect-error
                expect(() => calculadora.dividir(NUMS.CEM, new Date())).toThrow(TypeError)
            })

            test('Não deve aceitar Array no segundo param', () => {
                //@ts-expect-error
                expect(() => calculadora.dividir(NUMS.CEM, [])).toThrow(TypeError)
            })

            test('Não deve aceitar null no segundo param', () => {
                //@ts-expect-error
                expect(() => calculadora.dividir(NUMS.CEM, null)).toThrow(TypeError)
            })

            test('Não deve aceitar objeto no segundo param', () => {
                //@ts-expect-error
                expect(() => calculadora.dividir(NUMS.CEM, {})).toThrow(TypeError)
            })
            
            test('Não deve aceitar undefined no segundo param', () => {
                //@ts-expect-error
                expect(() => calculadora.dividir(NUMS.CEM, undefined)).toThrow(TypeError)
            })
            
            test('Não deve aceitar NaN no segundo param', () => {
                expect(() => calculadora.dividir(NUMS.CEM, NaN)).toThrow(TypeError)
            })

            test('Não deve aceitar Infinity no segundo param', () => {
                expect(() => calculadora.dividir(NUMS.CEM, Infinity)).toThrow(TypeError)
            })
        })

    })

    describe('Teste função jurosSimples', () => {
        test('Deve calcular juros simples', () => {
            expect(calculadora.jurosSimples(NUMS.CEM, 1 / NUMS.CINCO, NUMS.DEZ)).toBe(200)
        })

        test('Não deve aceitar o primeiro parâmetro diferente de número', () => {
            //@ts-expect-error
            expect(() => calculadora.jurosSimples("0", 1 / NUMS.CINCO, NUMS.DEZ)).toThrow(TypeError)
        })

        test('Não deve aceitar o segundo parâmetro diferente de número', () => {
            //@ts-expect-error
            expect(() => calculadora.jurosSimples(NUMS.CEM, "0", NUMS.DEZ)).toThrow(TypeError)
        })

        test('Não deve aceitar o terceiro parâmetro diferente de número', () => {
            //@ts-expect-error
            expect(() => calculadora.jurosSimples(NUMS.CEM, 1 / NUMS.CINCO, "0")).toThrow(TypeError)
        })

    })

    describe('Teste função jurosCompostos', () => {
        test('Deve calcular juros compostos', () => {
            expect(calculadora.jurosCompostos(NUMS.DOIS, NUMS.UM, NUMS.TRES)).toBe(16)
        })

        test('Não deve aceitar o primeiro parâmetro diferente de número', () => {
            //@ts-expect-error
            expect(() => calculadora.jurosCompostos("0", 1 / NUMS.CINCO, NUMS.DEZ)).toThrow(TypeError)
        })

        test('Não deve aceitar o segundo parâmetro diferente de número', () => {
            //@ts-expect-error
            expect(() => calculadora.jurosCompostos(NUMS.CEM, "0", NUMS.DEZ)).toThrow(TypeError)
        })

        test('Não deve aceitar o terceiro parâmetro diferente de número', () => {
            //@ts-expect-error
            expect(() => calculadora.jurosCompostos(NUMS.CEM, 1 / NUMS.CINCO, "0")).toThrow(TypeError)
        })

    })

    describe('Teste função descontoPercentual', () => {
        test('Deve calcular desconto percentual', () => {
            expect(calculadora.descontoPercentual(NUMS.CEM, 1/NUMS.DOIS)).toBe(50)
        })

        test('Não deve aceitar o primeiro parâmetro diferente de número', () => {
            //@ts-expect-error
            expect(() => calculadora.descontoPercentual("0", 1 / NUMS.CINCO, NUMS.DEZ)).toThrow(TypeError)
        })

        test('Não deve aceitar o segundo parâmetro diferente de número', () => {
            //@ts-expect-error
            expect(() => calculadora.descontoPercentual(NUMS.CEM, "0")).toThrow(TypeError)
        })

        test('Não deve aceitar o segundo parâmetro menor que zero', () => {
            expect(() => calculadora.descontoPercentual(NUMS.CEM, -(1 / NUMS.CINCO))).toThrow(Error)
        })

        test('Não deve aceitar o segundo parâmetro maior que um', () => {
            expect(() => calculadora.descontoPercentual(NUMS.CEM, 1.1)).toThrow(Error)
        })
    
    })

    describe('Teste função descontoFixo', () => {
        test('Deve calcular desconto fixo', () => {
            expect(calculadora.descontoFixo(NUMS.CEM, NUMS.DEZ)).toBe(90)
        })

        test('Não deve aceitar o primeiro parâmetro diferente de número', () => {
            //@ts-expect-error
            expect(() => calculadora.descontoFixo("0", 1 / NUMS.CINCO, NUMS.DEZ)).toThrow(TypeError)
        })

        test('Não deve aceitar o segundo parâmetro diferente de número', () => {
            //@ts-expect-error
            expect(() => calculadora.descontoFixo(NUMS.CEM, "0")).toThrow(TypeError)
        })

        test('Não deve aceitar o segundo parâmetro maior que o primeiro', () => {
            expect(() => calculadora.descontoFixo(NUMS.DEZ, NUMS.CEM)).toThrow(Error)
        })

    })
})
//@ts-check
import { ContaBancaria } from "../../src/utils/ContaBancaria"


describe('Testes para Classe Calculadora', () => {
    let conta;
    beforeEach(() => {
        conta = new ContaBancaria("Luis")
    })
    

    describe('Teste construtor', () => {
        test('Deve receber nome do titular', () => {
            const novaConta = new ContaBancaria('IO', 100)

            expect(novaConta.titular).toBe("IO")
        })

        test('Deve receber saldo do titular', () => {
            const novaConta = new ContaBancaria('IO', 100)

            expect(novaConta.saldo).toBe(100)
        })

        test('Não deve aceitar conta sem nome do titular ', () => {
            expect(() => new ContaBancaria()).toThrow(Error)
        })

        test('Deve ter saldo padrão de zero', () => {
            const novaConta = new ContaBancaria('IO')

            expect(novaConta.saldo).toBe(0)
        })
    })

    describe("Teste da função depositar", () =>{
        test("Deve adicionar o saldo", () => {
            conta.depositar(10)
            conta.depositar(10)

            expect(conta.saldo).toBe(20)
        })

        test("Não deve depositar saldo negativo", () => {
            expect(() => conta.depositar(-77)).toThrow(Error)
        })

    })

     describe("Teste da função sacar", () =>{
        test("Deve sacar o saldo", () => {
            const novaConta = new ContaBancaria('IO', 100)

            novaConta.sacar(10)

            expect(novaConta.saldo).toBe(90)
        })

        test("Não deve depositar saldo negativo", () => {
            expect(() => conta.depositar(-77)).toThrow(Error)
        })

    })
})
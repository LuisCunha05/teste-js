//@ts-check
import { Boletim } from "../../src/utils/Boletim"

let boletim;

beforeEach(() => {
    boletim = new Boletim()
})

describe('Testes para Classe Boletim', () => {

    describe('Não deve aceitar entrada diferente de number', () => {
        test('Não deve aceitar string', () => {
            expect(() => boletim.adicionarNota('')).toThrow(TypeError)
        })
        
        test('Não deve aceitar boolean', () => {
            expect(() => boletim.adicionarNota(false)).toThrow(TypeError)
        })

        test('Não deve aceitar Date', () => {
            expect(() => boletim.adicionarNota(new Date())).toThrow(TypeError)
        })

        test('Não deve aceitar Array', () => {
            expect(() => boletim.adicionarNota([])).toThrow(TypeError)
        })

        test('Não deve aceitar null', () => {
            expect(() => boletim.adicionarNota(null)).toThrow(TypeError)
        })

        test('Não deve aceitar objeto', () => {
            expect(() => boletim.adicionarNota({})).toThrow(TypeError)
        })
        
        test('Não deve aceitar undefined', () => {
            expect(() => boletim.adicionarNota()).toThrow(TypeError)
        })
        
        test('Não deve aceitar NaN', () => {
            expect(() => boletim.adicionarNota(NaN)).toThrow(TypeError)
        })
        
    })

    describe('verificarAprovacao: não deve aceitar entrada diferente de número', () => {

        test('verificarAprovacao: não deve aceitar string', () =>{
            boletim.adicionarNota(7)
            expect(() => boletim.verificarAprovacao('')).toThrow(TypeError)
        })

        test('verificarAprovacao: não deve aceitar boolean', () =>{
            boletim.adicionarNota(7)
            expect(() => boletim.verificarAprovacao(false)).toThrow(TypeError)
        })

        test('verificarAprovacao: não deve aceitar Date', () =>{
            boletim.adicionarNota(7)
            expect(() => boletim.verificarAprovacao(new Date())).toThrow(TypeError)
        })

        test('verificarAprovacao: não deve aceitar Array', () =>{
            boletim.adicionarNota(7)
            expect(() => boletim.verificarAprovacao([])).toThrow(TypeError)
        })

        test('verificarAprovacao: não deve aceitar null', () =>{
            boletim.adicionarNota(7)
            expect(() => boletim.verificarAprovacao(null)).toThrow(TypeError)
        })

        test('verificarAprovacao: não deve aceitar objeto', () =>{
            boletim.adicionarNota(7)
            expect(() => boletim.verificarAprovacao({})).toThrow(TypeError)
        })

        test('verificarAprovacao: não deve aceitar NaN', () =>{
            boletim.adicionarNota(7)
            expect(() => boletim.verificarAprovacao(NaN)).toThrow(TypeError)
        })

    })
    
    test('Não deve aceitar entrada menor que 0', () => {
        expect(() => boletim.adicionarNota(-3.14)).toThrow(Error)
    })

    test('Não deve aceitar entrada maior que 10', () => {
        expect(() => boletim.adicionarNota(10.1)).toThrow(Error)
    })

    test('Deve aceitar um number', () => {
        boletim.adicionarNota(6.7)
        boletim.adicionarNota(9)
        expect(boletim.notas.length).toBe(2)
    })

    test('calcularMedia: Deve retornar 0 quando sem notas', () => {
        expect(boletim.calcularMedia()).toBe(0)
    })

    test('calcularMedia: Deve calcular a média com notas', () => {
        boletim.adicionarNota(7)
        boletim.adicionarNota(8)
        boletim.adicionarNota(9)

        expect(boletim.calcularMedia()).toBe(8)
    })

    test('verificarAprovacao: deve ter média padrão de 7', () =>{
        boletim.adicionarNota(7)
        expect(boletim.verificarAprovacao()).toBe(true)
    })

    test('verificarAprovacao: não deve aceitar número negativo', () =>{
        boletim.adicionarNota(7)
        expect(() => boletim.verificarAprovacao(-3.14)).toThrow(Error)
    })

    test('verificarAprovacao: não deve aceitar número maior que 10', () =>{
        boletim.adicionarNota(7)
        expect(() => boletim.verificarAprovacao(32)).toThrow(Error)
    })

    describe('verificarAprovacao: deve receber parâmetro de média mínima', () => {
        
        test('verificar média mínima maior', () => {
            boletim.adicionarNota(7)
            expect(boletim.verificarAprovacao(9)).toBe(false)
        })

        test('verificar média mínima menor', () => {
            boletim.adicionarNota(7)
             expect(boletim.verificarAprovacao(5)).toBe(true)
        })

        test('verificar média mínima igual', () => {
            boletim.adicionarNota(7)
            expect(boletim.verificarAprovacao(7)).toBe(true)
        })
    })

})
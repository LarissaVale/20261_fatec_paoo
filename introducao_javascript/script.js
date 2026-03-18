//declaração de variáveis
//const, let e var

//const nome = 'José'
//console.log(nome)

//let nome = 'Maria'
//console.log(nome)
//nome = `Meu nome é ${nome}.`

//console.log('Antes do for')
//for (const i = 0; i< 10; i = i + 1){
//    console.log('for com const...')
//}
//console.log('Depois do for')

//var linguagem = 'Javascript'
//console.log(`Aprendendo ${linguagem}`)
//var linguagem = 'Java'
//console.log('Aprendendo ' + linguagem)

//var idade = 18
//console.log(`Oi, ${nome}`)
//if(idade >= 18){
//    var nome = 'Maria'
//    console.log(`Parabéns, ${nome}. Você pode dirigir.`)
//}
//console.log('Até mais, ' + nome + '.' )

//tipos
//js é dinamicamente tipado
//let a = 2
//console.log(typeof(a))
//a = true
//console.log(typeof(a))

//coerção implicita
//const n1 = 2
//const n2 = '3'
//const n3 = n1 + n2
//console.log(`${n1} + ${n2} = ${n3}`)

//coerção explicita
//const n1 = 2
//const n2 = '3'
//const n3 = n1 + Number(n2)
//console.log(`${n1} + ${n2} = ${n3}`)

//comparação por igualdade
//java: ==, Python: ==
//javascript: == ou ===(usamos apenas esse)
//console.log(1 == 1) true
//console.log(1 === 1) false - são de tipos iguais? se sim, compara valor, se não, não compara valor
//console.log(1 == '1') true
//console.log(true == 1) true
//console.log(1 == [1]) true
//console.log(null == null) true
//null e undefined
//exemplos:
//a = null
//b = undefined
//console.log(a === b)
//console.log(false == []) true
//console.log([] == []) false                  

//v1 = []
//console.log(v1.length)
//v1[0] = 3.4
//console.log(v1.length)
//v1[10] = 'abc'
//console.log(v1)
//for(let i=0; i<v1.length; i++){
//    console.log(v1[i])
//}

//funções
//functions e arrow functions
//function hello(){
//    console.log("oii")
//}

//hello()

//function hello(nome){
//    console.log('oii, ' + nome)
//}

//hello('Ana')

//function somar(a, b){
//    return a + b
//}
//console.log(somar(2,3))

//const dobrar = function (n){
//    return 2 * n
//}

//const hello = nome => console.log('Oi, ' + nome) //apenas uma instrução no corpo pode omitir as chaves
//hello('ana');

//const dobrar = n = 2 * n //não coloca chaves = não coloca return

//escreva uma função que decida se um valor é par ou não

//const numeroPar = (numero) => numero % 2 === 0
//numeroPar(4)

//const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
//const apenasComA = nomes.filter((n) => {return n.startsWith('A')})
//console.log(apenasComA)
//const apenasComA = nomes.filter(n => n.startsWith('A')) //syntax sugar
//console.log(apenasComA)

//const res = nomes.map(nome => nome.charAt(0)) //devolve vetor de nomes apenas com a 1 letra
//console.log(res) 

//const todosComecamComA = nomes.every(n => n.startsWith('A')) //pergunta se todos comecam com A
//const algumComecaComA = nomes.some(n => n.startsWith('A')) //pergunta se algum comeca com A

//const valores = [1, 2, 3, 4]
//const soma = valores.reduce((ac, v) => ac + v)
//console.log(soma)

//closure
//let umaFuncao = function(){
//   console.log('Fui armazenada numa variavel')
//}

//umaFuncao()

//function f (funcao){
//    funcao()
//}

//f(umaFuncao)

//function g(){
//    function outraFuncao(){
//        console.log('Fui criada pela g')
//        return () => console.log('E agora?')
//    }
//    return outraFuncao
//}

//f(g())
//f(g() () ())

//const gResult = g()
//gResult()
//g()()

//function f(){
//    let nome = 'João'
//    function g(){
//        console.log(nome)
//    }
//    g()
//}

//f()

//function saudacoesFactory(saudacao, nome){
//    return function(){
//        console.log(`${saudacao}, ${nome}`)
//    }
//}

//let olaJoao = saudacoesFactory('Oi', 'João')
//let tchauJoao = saudacoesFactory('tchau', 'João')

//olaJoao()
//tchauJoao()

//function eAgora(){ //função interna que acessa uma variável do corpo externo = closure
//    let cont = 1
//    function f1(){
//        console.log(cont)
//    }
//    cont++
//    function f2(){
//        console.log(cont)
//    }
//    count++
//    return {f1, f2}
//}

//let res = eAgora()
//res.f1()
//res.f2

//OBJETOS JAVASCRIPT
//uma pessoa cujo nome é joão e tem 17 anos

//let pessoa = {
//    nome: 'João',
//    idade: 17
//}

//let pessoa2 = {
//    nome: 'Maria',
//    idade: 21,
//    endereco: {
//        logradouro: 'Rua B',
//        numero: 20,
//        bairro: 'Vila J'
//    }
//}

//console.log(`${pessoa.nome} mora na ${pessoa.endereco.logradouro}`)
//console.log(`${pessoa['nome']} tem ${pessoa[`idade`]} anos. Ela mora na ${pessoa.endereco['logradouro']}, 
//numero ${pessoa['endereco'].numero}.`)

//objetos Javascript
//let calculadora = {
//    somar: (a,b) => a + b,
//    subtrair: function(a,b){return a - b}
//}

//let res1 = calcularoda.somar(1, 2)
//console.log(res1)
//console.log(calculadora.subtrair(2, 1))
//console.log(calculadora['subtrair'](2, 1))

/* //uma concessionario tem cnpj e um endereço. Ela possui alguns carros em estoque. cada carro tem marca, modelo e ano de fabricação

let concessionaria = {
    CNPJ: '18.715.383/0001-40',
    endereco: {
        logradouro: 'Avenida Afonso Pena',
        numero: 1212,
        bairro: 'Centro, BH'
    },
    carros: [
        {marca: "Fiat",  modelo: "Siena",  ano: 2008, proprietarios: [
            {
                nome: 'João', telefone: 65656565
            },
            {
                nome: 'Rodrigo', telefone: 5555555
            }
        ]},
        {marca: "Ford",  modelo: "Fusion",  ano: 2015, proprietarios: 0},
        {marca: "Chevrolet",  modelo: "Onix",  ano: 2025, proprietarios: 0},
        {marca: "Volkswagen",  modelo: "Golf GT",  ano: 2018, proprietarios: 0}
    ]
} */

//represente uma calculadora como objeto JS, ela sabe somar e subtrair dois valores
//agende a execução da soma para daqui 5 segundos
//agende a execução da subtração para daqui meio segundo
//claro, exiba os valores no final
//no formato: 2 + 3 = 5
//1 - 1 = 0

/* function demorada(tempo){
    const atualMaisTempo = new Date().getTime() + tempo
    while(new Date().getTime() <= atualMaisTempo);
    const d = 8 + 4
    console.log(`Tempo: ${tempo}`)
    return d
}
setTimeout(() => {demorada(2000)}, 2000)
setTimeout(() => {demorada(1000)}, 1000)*/

/* setTimeout(() => {
    console.log("executada pela setTimeout")
}, 0)

const a = new Date() .getTime() + 5000
while(new Date() .getTime() <= a); 
console.log('Terminando o script principal') */

/* const a = 7 + 1 * 4
const b = 8 * 1

setTimeout(() => {
    const d = demorada()
    console.log(`d: ${d}`)
}, 1000)

const e = a + b
console.log(`e: ${e}`) */

/* const a = 7 + 6
const b = 7 + 1

const d = demorada()

const e = 2 + b + a 
console.log(`e: ${e}`) */

/* const a = 2 + 7
const b = 6 + 5
console.log(a + b) */

/* console.log('eu primeiro')
console.log('agora eu...')
console.log("sempre vou ser a última...:(") */

/*const fs = require('fs')
const nomeArquivo = 'arquivo.txt'
//função callback
const exibirConteudo = (erro, conteudo) => {
    console.log('A')
    if(erro){
        console.log(`Deu erro: ${erro}`)
    }
    else{
        console.log(conteudo.toString())
        const dobro = Number(conteudo.toString()) * 2
        const finalizar = (erro) => {
            console.log(erro ? "Deu erro tentando salvar o dobro" : "Salvou o dobro com sucesso")
            console.log('C')
        }
    }
}

fs.readFile(nomeArquivo, exibirConteudo)
console.log('B') */

//promises
//somar os valores 1, 2, 3 ..., n, sendo um valor passado como parâmetro
//defini-la com o nome calculoDemorado

/*const calculoDemorado = (n) => {
    return new Promise((resolve, reject) => {
        let res = 0
        for(let i = 1; i <= n; i++) res += i
        return res
        resolve(res)
    })
}

const resultado = calculoDemorado(100)
//then e catch
resultado
.then((res) => {console.log(res)})
.catch(erro => console.log(`Falhou: ${erro}`))
console.log('Fim do script principal') */

// function calculaRapidinho(numero){
//     return numero >= 0 ? Promise.resolve((numero + 1) * (numero / 2)) : Promise.reject("Somento números positivos por favor")
// }
// const resultado = calculaRapidinho(100)

// resultado
// .then((res) => console.log(res))
// .catch(erro => console.log(res))

// const resultado2 = calculaRapidinho(-500)
// resultado2.then(res => console.log(res)).catch(erro)

// const calculoDemorado = (n) => {
//     let cont = 0;
//     for(let i = 1; i <= n; i++)
//         cont += i
//     return cont
// }


// const resultado = calculoDemorado(1000)
// console.log(resultado)
//console.log('script principal terminado...')

// const calculoDemorado = (n) => {
//     return new Promise((resolve, reject) => {
//         if(n <= 0){
//             reject('Apenas valores positivos')
//         }
//         else{
//             let ac = 0
//             for(let i = 1; i <= n; i++)
//                 ac += i
//             resolve(ac)
//         }
//     })
// }
//then/catch
// const promiseResultante = calculoDemorado(1000)
// promiseResultante
// .then((res) => {console.log('Resultado: ' + res)})
// .catch((err) => {console.log('Erro: ' + err)})

//se n <= 0, então rejeitar dizendo "Apenas valores positivos"
//caso contrário, fazer a conta e devolver o resultado

// const calculoRapidinho = (n) => {
//     return n > 0 ? Promise.resolve((n * (n + 1) / 2)) : Promise.reject('Apenas valores positivos')
// }
// calculoRapidinho(10)
// .then(res => {console.log(`Resultado: ${res}`)})
// .catch(err => console.log(`Erro: ${err}`))
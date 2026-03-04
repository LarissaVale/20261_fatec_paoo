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

function eAgora(){ //função interna que acessa uma variável do corpo externo = closure
    let cont = 1
    function f1(){
        console.log(cont)
    }
    cont++
    function f2(){
        console.log(cont)
    }
    count++
    return {f1, f2}
}

let res = eAgora()
res.f1()
res.f2


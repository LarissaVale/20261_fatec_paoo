const axios = require('axios')

const baseURL = 'https://api.openweathermap.org/data/2.5/forecast'

const q = 'Itu'

const appid = 'ef0b0973b783e0614ac87612ec04344b'
//const appid = '2012c5b81ccc4e0fc62af55d0f8ff37d'

const units = 'metric'

const lang = 'pt_br'

const cnt = 3

const url = `${baseURL}?q=${q}&appid=${appid}&units=${units}&lang=${lang}&cnt=${cnt}`

axios.get(url)
.then(res => {
    console.log(res)
    console.log("---------------------")
    return res.data
})
.then(res => {
    console.log(res)
    console.log("---------------------")
    return res
})
.then(abc => {
    console.log(abc.cnt)
    console.log("---------------------")
    return abc
})
//complete o then para exibir o objeto que se encontra na primeira posicao do list
.then(teste => {
    console.log(teste.list[0])
    console.log("---------------------")
    return list[0].main
})
.then(list => {
    console.log(res.temp_max)
    console.log("---------------------")
    return list

})


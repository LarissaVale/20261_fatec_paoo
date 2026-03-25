require('dotenv').config()
const axios = require('axios')

console.log(process.env.APPID)
const baseURL = 'https://api.openweathermap.org/data/2.5/forecast'

const q = 'Itu'

const appid = ''
//const appid = '2012c5b81ccc4e0fc62af55d0f8ff37d'

const units = 'metric'

const lang = 'pt_br'

const cnt = 3

const url = `${baseURL}?q=${q}&appid=${appid}&units=${units}&lang=${lang}&cnt=${cnt}`

const exercicioComAsyncAwait = async() => {
    try{
    const res = await axios.get(url)
    console.log(res)
    console.log("--------------------")
    console.log(res.data)
    console.log("--------------------")
    console.log(res.data.cnt)
    console.log("--------------------")
    console.log(res.data.list[0])
    console.log("--------------------")
    console.log(res.data.list[0].main.temp_max)
 
    let previsoes = res.data.list
    for (let previsao of previsoes) {
      console.log(`
        tempMin: ${previsao.main.temp_min},
        tempMax: ${previsao.main.temp_max},
        weather: ${previsao.weather[0].description}
      `)
      console.log("--------------------")
    }
  }
  catch(erro){
    console.log(`erro: ${erro}`)
  }
}

exercicioComAsyncAwait()
  
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
    return teste
})
.then(list => {
    console.log(res.temp_max)
    console.log("---------------------")
    return list
})
.then(previsoes => {
    for(let previsao of previsoes){
        console.log(`
            Temp min: ${previsao.main.temp_min} 
            Temp max: ${previsao.main.temp_max}
            Description: ${previsao.weather[0].description}
        `)
        console.log("---------------------")
    }
})



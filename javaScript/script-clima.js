async function getWeather(){

    //Nesta linha estamos fazendo uma chamada a API usando a biblioteca Axios. A URL inclui informações de localização (Mogi das Cruzes) e a unidade de medida (Celsiue) e a chave da API (API-KEY)

    let pesquisar = document.querySelector('#pesquisar').value
    console.log('pesquisar')
    //Troca o 'pesquisar' para a localização
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${pesquisar}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`)


    //pegando a Temperatura
    const tempCelsius = response.data.main.temp;

    //imprimindo c/ temp
    document.querySelector('#temperatura').innerHTML = `A temperatura atual é de ${tempCelsius}°C.`;
    
}

getWeather();
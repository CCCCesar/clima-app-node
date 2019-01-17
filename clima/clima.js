const axios = require('axios');



const getClima = async(lat, lng)=>{
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=2ece883f3085b370dc35b8088aadfa03`)


    return resp.data.main.temp;
}
module.exports={
    getClima
}
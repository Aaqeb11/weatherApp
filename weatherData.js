const request=require('request')
const constants=require(__dirname+'/config.js')

const weatherData=(address,callback)=>{
    const unit = "metric";
    const url=constants.openWeatherMap.BASE_URL + encodeURIComponent(address) +'&appid='+constants.openWeatherMap.SECERET_KEY +"&units=" +
    unit;
   
    request({url,json:true},(error,{body})=>{
        console.log(body);
        if(error){
            callback("can't fetch data from weather app",undefined)

        }
        else{
            callback(undefined,{
                temperature:body.main.temp,
                description:body.weather[0].description,
                cityName:body.name,
                humidity:body.main.humidity,
                windSpeed:body.wind.speed,
                icon:body.weather[0].icon
            })
        }
    })
}
module.exports=weatherData;
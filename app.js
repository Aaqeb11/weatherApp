const express=require("express")
const app=express();
const https=require("https")
const path=require("path")
const bodyParser=require("body-parser")
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "js")));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const weatherData=require(__dirname+"/weatherData")

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
// app.post("/",(req,res)=>{
//     const city = req.body.searchText;
//   const unit = "metric";
//   const appKey = "27b87244a07012b524d4538efe36d9e1";
//   const url =
//     "https://api.openweathermap.org/data/2.5/weather?q=" +
//     city +
//     "&appid=" +
//     appKey +
//     "&units=" +
//     unit;
//     https.get(url,(response)=>{
//         console.log(response.statusCode);
//         response.on('data',(data)=>{
//             const weatherData=JSON.parse(data);
//             const temp = weatherData.main.temp;
//         const desc = weatherData.weather[0].description;
//         const city = weatherData.name;
//         const icon = weatherData.weather[0].icon;
//         res.status(200).send(desc)
//         })
//     })
// })


app.get('/weather',(req,res)=>{
    const address=req.query.address
    if(!address){
        return res.send({
            error:'enter a city'
        })
    }
    weatherData(address,(error,{temperature,description,cityName,humidity,windSpeed,icon})=>{
        if(error){
            return res.send('please enter correct')
        }
        console.log(temperature,description,cityName,humidity,windSpeed,icon);
        res.send({
            temperature,
            description,
            cityName,
            humidity,
            windSpeed,
            icon
        })
    })
})
// app.get("*",(req,res)=>{
//     res.send("Page not found.")
// })

app.listen(3000,()=>{
    console.log("server started on 3000");
});
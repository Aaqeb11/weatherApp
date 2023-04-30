
var fetchWeather="/weather"

const weatherForm=document.querySelector('form');
const search=document.querySelector('.text');
const temp=document.querySelector('.temperature')
const desc=document.querySelector('.description')
const hum=document.querySelector('.humText span')
const wind=document.querySelector('.winText span')
const container=document.querySelector('.container')
const notFound=document.querySelector('.notFound')
const det=document.querySelector('.weather-details')
const des=document.querySelector('.weather-desc')
const desImg=document.querySelector('.weather-desc img')


weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(search.value);
    try {
        
      }
      catch(err) {
        document.getElementById("demo").innerHTML = err.message;
      }
    const locationApi=fetchWeather + "?address=" + search.value
    fetch(locationApi).then(response=>{
        response.json().then(data =>{
            console.log(data);
            if(data.error){
                console.log(data.message);
            } 
            else{
                notFound.style.display="none"
                notFound.classList.remove('fadeIn')
                container.style.height="602px"
                det.style.opacity="1"
                det.style.scale="1"
                des.style.opacity="1"
                des.style.scale="1"
                temp.textContent=""
                desc.textContent=""
                temp.textContent=data.temperature +"℃"
                desc.textContent=data.description
                hum.innerHTML=data.humidity+"%"
                wind.innerHTML=data.windSpeed+"km/h"
                const imgUrl = "https://openweathermap.org/img/wn/" + data.icon + "@2x.png";
                desImg.src=imgUrl

            }
        })
    })

    

})
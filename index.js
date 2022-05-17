// var input = document.getElementById('input')
// //we are going to  use the promises that help to call the function
// //.then  .fetch .finally
// //these are the server lifecycle 
// //promises (resolve reset)
// let promises = new promises();
// const p =400000;
// if(p>500000){
//     console.log(promises)

// }

const input = document.getElementById('input1');
const searchbutton = document.getElementById('btn');
const dcity = document.getElementById('displaycity');
const dtemp = document.getElementById('displaytemp');
const dminmaxtemp = document.getElementById('displayminmaxtemp');
const displayimg = document.getElementById('imgid');

let cityName = 'delhi';
const apiKey = 'ba7c396bdfbd6b6931bfec7fd43cf59d';

searchbutton.addEventListener('click', functioncall);
function functioncall() {
   let cityName = input.value;
   input.value = "delhi";
   dcity.innerText = cityName;
   
   const data = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
   
   fetch(data)
      .then((response) => { return response.json() })
      .then((data) => {
         console.log(data);
         dtemp.innerText = data.main.temp+"°C";
         let iconno  = data.weather[0].icon;
         displayimg.src =`http://openweathermap.org/img/wn/${iconno}@2x.png`;
         dminmaxtemp.innerText="mintemp: "+data.main.temp_min+"°C | maxtemp : "+data.main.temp_max+"°C";
      })
   
   //.then((data) => { console.log(data.main) })

   //.then((data)=>{console.log(data.main.temp)})  
   //    dtemp = data.main.temp;
   //    console.log(dtemp)
   //.then((data)=>{dtemp=data.main.temp + '°C';})
   //  .then((data) => {
   //   console.log(data.main);
   //   const cityData = data.main;
   //   dtemp.innerText = `${cityData.temp}°C`;
   // dMaxMinTemp.innerText = `Min ${cityData.temp_min}°C | Max ${cityData.temp_max}°C`;
   // cloudType.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
   //})

}

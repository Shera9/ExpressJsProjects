const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");

const city_outPut = document.getElementById("city_outPut");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const dataHide = document.querySelector('.middle_layer');



const getInfo = async(event) =>{
    event.preventDefault();
   let cityVal = cityName.value;
   
       if(cityVal==="")
       {
        city_outPut.innerText=`Please write the city name before search.`;
        dataHide.classList.add("data_hide");
       }
       else{
           try{
               let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=18e5189b34e8eaf53129c4f5454e873c`;
              const response = await fetch(url);
              const data = await response.json();

              const arrData = [data];
              city_outPut.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;
              temp_real_val.innerText=arrData[0].main.temp;
              
            const tempMood = arrData[0].weather[0].main;
            if(tempMood=="Clear"){
                temp_status.innerHTML=
                "<i class='fas fa-sun' style='color:#eccc68;'></i>"
            }
            else if(tempMood=="Clouds"){
                temp_status.innerHTML=
                "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
            }
            else if(tempMood=="Rain"){
                temp_status.innerHTML=
                "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>"
            }
            else{
                temp_status.innerHTML=
                "<i class='fas fa-sun' style='color:#eccc68;'></i>"
            }
            dataHide.classList.remove("data_hide");

           }catch{
            city_outPut.innerText=`Please write the city name properly.`;
            dataHide.classList.add("data_hide");
           }
        
    }
}

submitBtn.addEventListener('click', getInfo);
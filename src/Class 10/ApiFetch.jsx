import React, { useState } from 'react'

const ApiFetch = () => {
    let [city,setCity]=useState("");
    let [temperature,setTemp]=useState("");
    
    async function getWeatherInfo(){
        // step 1
        let firstApi=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`)
        let returnData=await firstApi.json();
        console.log(returnData);

        let {latitude,longitude,name}=returnData.results[0];
        // step 2

        let secondApi=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`)
        let returnData1=await secondApi.json();
        
        console.log(returnData1.current.temperature_2m);
        setTemp(returnData1.current.temperature_2m);
        console.log(temperature);
    }
  return (
    <div>
    <h1>Fetch Api</h1>
      <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} placeholder="Enter City" />
      <button onClick={()=>{getWeatherInfo()}}>Get Weather</button>
      <div>
        {}
      </div>
    </div>
  )
}

export default ApiFetch

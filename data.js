// single call, local JSON file

// axios.get("UltravioletIndexUVI.json")
// .then((response)=>{
//     console.log(response.data)
// })
// .catch((err)=>{
//     console.log("error retrieving data: ", err);
// })
// .finally(
//     console.log("Fetching data")
// )


let uvAPI = "https://beta.data.gov.sg/datasets/d_1b676cd174a9af4704fdb3f9aa58ff5e/view/uv"
let weatherAPI = "https://api.data.gov.sg/v1/environment/4-day-weather-forecast"
let date = "?date=2024-07-22"

// single call, real-time API

// axios.get(weatherAPI + date)
// .then((response)=>{
//     console.log(response.data)
// })
// .catch((err)=>{
//     console.log("error retrieving data: ", err);
// })
// .finally(
//     console.log("Fetching UV data")
// )



let call_uv = axios.get("UltravioletIndexUVI.json");
let call_weather = axios.get(weatherAPI);

// multiple calls, local JSON and real-time API

Promise.all([call_uv, call_weather])
.then((one,two)=>{
    console.log(one)
    console.log(two)

})

//example 1
//


// const URL = "https://catfact.ninja/facts";
// const factsContainer = document.querySelector(".my-cats-facts")

// fetch(URL)
//     .then((Response) => Response.json())
//     .then((data) => {
//         console.log(data.data)
//         const myCatFactsArr = data.data;
//         for (let i = 0; i < myCatFactsArr.length; i++){
//             console.log(myCatFactsArr[i].fact);

//             factsContainer.innerHTML += `<li>${myCatFactsArr[i].fact}</li>`
//             if (i ===4){
//                 break;
//             }
//         }
//     })
//     .catch((error) => {
//         console.log(error)
//     })



// const weatherURL = "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.863072&lon=8.552333"

// const weatherContainer = document.querySelector(".weather-container")

// fetch(weatherURL)
//     .then((Response) => Response.json())
//     .then((yr) => {
//         console.log(yr)
//     })
//     .catch((error) => {
//         console.log(error)
//     })


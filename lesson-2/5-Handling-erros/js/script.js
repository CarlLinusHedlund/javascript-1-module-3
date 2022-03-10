const URL = "https://catnja/facts";
const factsContainer = document.querySelector(".my-cats-facts")

fetch(URL)
    .then((Response) => Response.json())
    .then((data) => {
        console.log(data.data)
        const myCatFactsArr = data.data;
        for (let i = 0; i < myCatFactsArr.length; i++){
            console.log(myCatFactsArr[i].fact);

            factsContainer.innerHTML += `<li>${myCatFactsArr[i].fact}</li>`
            if (i ===4){
                break;
            }
        }
    })
    .catch((error) => {
        console.log(error)
        factsContainer.innerHTML = displayError()
    })
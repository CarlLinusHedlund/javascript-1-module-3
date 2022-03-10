// my point
//

const APIUrl = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=100"


//select the pokemons class container
const pokemonsContainer = document.querySelector(".pokemons")


// async function kitchen(){

//     try{
// // Let's create a fake problem
//         await abc;
//     }

//     catch(error){
//         console.log("abc does not exist", error)
//     }
// }

// kitchen();  // run the code


async function getPokemonsNames(){
    try {
       const response = await fetch(APIUrl);
    //    console.log(response)
       const responseJSON = await response .json();//convert the response data to json data
        // console.log(responseJSON)
        const pokemonsData = responseJSON.results;
        // console.log(pokemonsData)
        for(let i = 0; i < pokemonsData.length; i ++){
            console.log(pokemonsData[i])
            pokemonsContainer.innerHTML += `<li><span>${pokemonsData[i].name}</span></li>`
        }
    }
    catch (error){
        console.log("some error happened :(", error)
        pokemonsContainer.innerHTML += `<li><span>sorry a error happened</span></li>`
    }
};
getPokemonsNames();






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

pokemonsContainer.innerHTML = "";
    




async function getPokemonsNames(){
    try {
    const response = await fetch(APIUrl);
    const responseJSON = await response .json();//convert the response data to json data
    const pokemonsData = responseJSON.results;
    pokemonsContainer.innerHTML = "";
        for(let i = 0; i < pokemonsData.length; i ++){
            console.log(pokemonsData[i])
            pokemonsContainer.innerHTML += `<li><span><a href="pokemon-details.html?name=${pokemonsData[i].name}">${pokemonsData[i].name}</a></span></li>`
        }
    }
    catch (error){
        console.log("some error happened :(", error)
        pokemonsContainer.innerHTML += `<li class="error"><span>sorry a error happened</span></li>`
    }
};
getPokemonsNames();
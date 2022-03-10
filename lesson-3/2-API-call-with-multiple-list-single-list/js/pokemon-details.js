console.log(document.location.search); //?school=noroff

const pokemonsContainer = document.querySelector(".pokemon-details")

const queryString = document.location.search;

//in order to get the value
const params = new URLSearchParams(queryString)

console.log(params);
console.log(params.get("name"))

const pokemonName = (params.get("name"));

const singlePokemonURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
console.log(singlePokemonURL)
async function singlePokemonsNames(){
    try {
    const response = await fetch(singlePokemonURL);
    const responseJSON = await response .json();//convert the response data to json data
    const pokemonsData = responseJSON.weight;
    const pokemonAbilities = responseJSON.abilities;
    const pokemonMoves = responseJSON.moves;

    pokemonsContainer.innerHTML = "";
    // console.log(pokemonsData)

    pokemonsContainer.innerHTML += `<li>${pokemonName}'s weight: ${pokemonsData} kg</li>` 


    for (i = 0; i < pokemonAbilities.length; i++){
        // console.log(pokemonAbilities[i].ability.name)
        pokemonsContainer.innerHTML += `<li>Abilities: ${pokemonAbilities[i].ability.name}</li>`
    }

    // const pokemonLocation = ``;
    // console.log(pokemonLocation)

    const pokemonLocationAPI = responseJSON.location_area_encounters;
    console.log(pokemonLocationAPI)

    const pokemonLocationApiFetched = await fetch (pokemonLocationAPI);
    console.log(pokemonLocationApiFetched)
    const pokemonLocationJSON = await pokemonLocationApiFetched.json();
    // console.log(pokemonLocationJSON)
    const result = pokemonLocationJSON;
    console.log(result)

    
    //     try {
    //         const locationResponse = await fetch (pokemonLocationAPI)
    //         const locationResponseJSON = await locationResponse .json();

    //     }

    // } 

    for (i = 0; i < pokemonMoves.length; i++){
        
        if (i >= 5){
            break;
        }
        pokemonsContainer.innerHTML += `<li>Moves: ${pokemonMoves[i].move.name}</li>`
        // console.log(pokemonMoves[i].move.name)
    } 

    }
    catch (error){
        console.log("some error happened :(", error)
        pokemonsContainer.innerHTML += `<li class="error"><span>sorry a error happened</span></li>`
    }
};
singlePokemonsNames();



async function go() {
    try {
      // but first, coffee
      const coffee = await getCoffee();
      console.log(coffee); // ☕
      // then we grab some data over an Ajax request
      const wes = await axios('https://api.github.com/users/wesbos');
      console.log(wes.data); // mediocre code
      // many requests should be concurrent - don't slow things down!
      // fire off three requests and save their promises
      const wordPromise = axios('http://www.setgetgo.com/randomword/get.php');
      const userPromise = axios('https://randomuser.me/api/');
      const namePromise = axios('https://uinames.com/api/');
      // await all three promises to come back and destructure the result into their own variables
      const [word, user, name] = await Promise.all([wordPromise, userPromise, namePromise]);
      console.log(word.data, user.data, name.data); // cool, {...}, {....}
    } catch (e) {
      console.error(e); // 💩
    }
  }
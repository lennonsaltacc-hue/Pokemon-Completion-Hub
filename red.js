const pokemon = [

"Bulbasaur",
"Ivysaur",
"Venusaur",

"Charmander",
"Charmeleon",
"Charizard",

"Squirtle",
"Wartortle",
"Blastoise",

"Caterpie",
"Metapod",
"Butterfree",

"Weedle",
"Kakuna",
"Beedrill",

"Pidgey",
"Pidgeotto",
"Pidgeot",

"Rattata",
"Raticate",

"Spearow",
"Fearow",

"Ekans",
"Arbok",

"Pikachu",
"Raichu",

"Sandshrew",
"Sandslash",

"Nidoran♀",
"Nidorina",
"Nidoqueen",

"Nidoran♂",
"Nidorino",
"Nidoking",

"Clefairy",
"Clefable"

];


let caught = JSON.parse(
localStorage.getItem("redPokemon") || "[]"
);



function save(){

localStorage.setItem(
"redPokemon",
JSON.stringify(caught)
);

}



function togglePokemon(name){

if(caught.includes(name)){

caught = caught.filter(
pokemon => pokemon !== name
);

}

else{

caught.push(name);

}


save();

displayPokemon();

}



function displayPokemon(){

let list = document.getElementById(
"pokemonList"
);


let search = document
.getElementById("search")
.value
.toLowerCase();



list.innerHTML = "";



pokemon
.filter(p => 
p.toLowerCase().includes(search)
)
.forEach(p => {


let checked = caught.includes(p);



let card = document.createElement("div");

card.className = "game-card";



card.innerHTML = `

<label>

<input 
type="checkbox"
${checked ? "checked" : ""}
onclick="togglePokemon('${p}')"
>

${p}

</label>

`;



list.appendChild(card);



});



let percent = Math.round(
(caught.length / 151) * 100
);



document.getElementById(
"dexProgress"
).style.width = percent + "%";



document.getElementById(
"dexPercentage"
).innerText =
`${caught.length} / 151 Pokémon (${percent}%)`;

}



displayPokemon();

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
p => p !== name
);

}

else{

caught.push(name);

}

save();
displayPokemon();

}



function displayPokemon(){

let list = document.getElementById("pokemonList");

let search = document
.getElementById("search")
.value
.toLowerCase();


list.innerHTML = "";


pokemon
.filter(p => 
p.name.toLowerCase().includes(search)
)
.forEach(p => {


let checked = caught.includes(p.name);


let card = document.createElement("div");

card.className = "game-card";


card.innerHTML = `

<h3>#${String(p.number).padStart(3, "0")} ${p.name}</h3>

<p>Type: ${p.type}</p>

<p>Method: ${p.method}</p>

<p>Location: ${p.location}</p>

<p>Evolution: ${p.evolution}</p>

<label>

<input 
type="checkbox"
${checked ? "checked" : ""}
onclick="togglePokemon('${p.name}')"
>

Caught

</label>

`;


list.appendChild(card);


});


let percent = Math.round(
(caught.length / pokemon.length) * 100
);


document.getElementById(
"dexProgress"
).style.width =
percent + "%";


document.getElementById(
"dexPercentage"
).innerText =
`${caught.length} / ${pokemon.length} Pokémon (${percent}%)`;

}


displayPokemon();

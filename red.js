let caught = JSON.parse(
localStorage.getItem("redPokemon") || "[]"
);
let currentFilter = "all";

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

function setFilter(filter){

currentFilter = filter;

document
.querySelectorAll(".filter-btn")
.forEach(btn => btn.classList.remove("active"));

event.target.classList.add("active");

displayPokemon();

}

function getTypeBadges(typeString){

return typeString
.split("/")
.map(type => {

type = type.trim();

return `<span class="type ${type.toLowerCase()}">${type}</span>`;

})
.join("");

}


function displayPokemon(){

let list = document.getElementById("pokemonList");

let search = document
.getElementById("search")
.value
.toLowerCase();


list.innerHTML = "";


pokemon
.filter(p => {

const searchText = search.trim().toLowerCase();

const number = String(p.number);
const padded = String(p.number).padStart(3,"0");

const matchesSearch =

p.name.toLowerCase().includes(searchText) ||

number === searchText ||

padded === searchText ||

("#"+number) === searchText ||

("#"+padded) === searchText;

let matchesFilter = true;

switch(currentFilter){

case "caught":

matchesFilter = caught.includes(p.name);

break;

case "missing":

matchesFilter = !caught.includes(p.name);

break;

case "legendary":

matchesFilter = p.method === "Legendary";

break;

case "gift":

matchesFilter = p.method === "Gift";

break;

case "trade":

matchesFilter =

(p.method || "").includes("Trade") ||

(p.location || "").includes("Trade") ||

(p.evolution || "").includes("Trade");

break;

case "stone":

matchesFilter =

(p.location || "").includes("Stone") ||

(p.evolution || "").includes("Stone");

break;

case "fossil":

matchesFilter =
p.method === "Fossil";

break;

}

return matchesSearch && matchesFilter;

})
.forEach(p => {

let checked = caught.includes(p.name);


let card = document.createElement("div");

card.className = "game-card";

card.innerHTML = `

<div class="pokemon-header">

<img
class="pokemon-sprite"
src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.number}.png"
alt="${p.name}"
>

<div>

<h3>#${String(p.number).padStart(3, "0")} ${p.name}</h3>

</div>

</div>

<div class="type-container">

${getTypeBadges(p.type)}

</div>

<p><strong>Method:</strong> ${p.method}</p>

<p><strong>Location:</strong> ${p.location}</p>

<p><strong>Evolution:</strong> ${p.evolution}</p>

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

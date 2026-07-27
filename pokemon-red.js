const pokemon = [

{
number: 1,
name: "Bulbasaur",
type: "Grass / Poison",
method: "Starter",
location: "Professor Oak",
evolution: "Lv16 → Ivysaur → Lv32 → Venusaur"
},

{
number: 2,
name: "Ivysaur",
type: "Grass / Poison",
method: "Evolution",
location: "Evolve Bulbasaur",
evolution: "Lv32 → Venusaur"
},

{
number: 3,
name: "Venusaur",
type: "Grass / Poison",
method: "Evolution",
location: "Evolve Ivysaur",
evolution: "Final Evolution"
},

{
number: 4,
name: "Charmander",
type: "Fire",
method: "Starter",
location: "Professor Oak",
evolution: "Lv16 → Charmeleon → Lv36 → Charizard"
},

{
number: 5,
name: "Charmeleon",
type: "Fire",
method: "Evolution",
location: "Evolve Charmander",
evolution: "Lv36 → Charizard"
},

{
number: 6,
name: "Charizard",
type: "Fire / Flying",
method: "Evolution",
location: "Evolve Charmeleon",
evolution: "Final Evolution"
},

{
number: 7,
name: "Squirtle",
type: "Water",
method: "Starter",
location: "Professor Oak",
evolution: "Lv16 → Wartortle → Lv36 → Blastoise"
},

{
number: 8,
name: "Wartortle",
type: "Water",
method: "Evolution",
location: "Evolve Squirtle",
evolution: "Lv36 → Blastoise"
},

{
number: 9,
name: "Blastoise",
type: "Water",
method: "Evolution",
location: "Evolve Wartortle",
evolution: "Final Evolution"
},

{
number: 10,
name: "Caterpie",
type: "Bug",
method: "Catch",
location: "Viridian Forest",
evolution: "Lv7 → Metapod → Lv10 → Butterfree"
},

{
number: 11,
name: "Metapod",
type: "Bug",
method: "Evolution",
location: "Evolve Caterpie",
evolution: "Lv10 → Butterfree"
},

{
number: 12,
name: "Butterfree",
type: "Bug / Flying",
method: "Evolution",
location: "Evolve Metapod",
evolution: "Final Evolution"
},

{
number: 13,
name: "Weedle",
type: "Bug / Poison",
method: "Catch",
location: "Viridian Forest",
evolution: "Lv7 → Kakuna → Lv10 → Beedrill"
},

{
number: 14,
name: "Kakuna",
type: "Bug / Poison",
method: "Evolution",
location: "Evolve Weedle",
evolution: "Lv10 → Beedrill"
},

{
number: 15,
name: "Beedrill",
type: "Bug / Poison",
method: "Evolution",
location: "Evolve Kakuna",
evolution: "Final Evolution"
},

{
number: 16,
name: "Pidgey",
type: "Normal / Flying",
method: "Catch",
location: "Routes 1, 2, 3",
evolution: "Lv18 → Pidgeotto → Lv36 → Pidgeot"
},

{
number: 17,
name: "Pidgeotto",
type: "Normal / Flying",
method: "Evolution",
location: "Evolve Pidgey",
evolution: "Lv36 → Pidgeot"
},

{
number: 18,
name: "Pidgeot",
type: "Normal / Flying",
method: "Evolution",
location: "Evolve Pidgeotto",
evolution: "Final Evolution"
},

{
number: 19,
name: "Rattata",
type: "Normal",
method: "Catch",
location: "Many Routes",
evolution: "Lv20 → Raticate"
},

{
number: 20,
name: "Raticate",
type: "Normal",
method: "Evolution",
location: "Evolve Rattata",
evolution: "Final Evolution"
},

{
number: 21,
name: "Spearow",
type: "Normal / Flying",
method: "Catch",
location: "Routes 3, 4, 9, 16",
evolution: "Lv20 → Fearow"
},

{
number: 22,
name: "Fearow",
type: "Normal / Flying",
method: "Evolution",
location: "Evolve Spearow",
evolution: "Final Evolution"
},

{
number: 23,
name: "Ekans",
type: "Poison",
method: "Catch",
location: "Routes 4, 8, 9, 11",
evolution: "Lv22 → Arbok"
},

{
number: 24,
name: "Arbok",
type: "Poison",
method: "Evolution",
location: "Evolve Ekans",
evolution: "Final Evolution"
},

{
number: 25,
name: "Pikachu",
type: "Electric",
method: "Catch",
location: "Viridian Forest / Power Plant",
evolution: "Thunder Stone → Raichu"
},

{
number: 26,
name: "Raichu",
type: "Electric",
method: "Evolution",
location: "Evolve Pikachu",
evolution: "Thunder Stone"
},

{
number: 27,
name: "Sandshrew",
type: "Ground",
method: "Catch",
location: "Routes 4, 8, 9, 10",
evolution: "Lv22 → Sandslash"
},

{
number: 28,
name: "Sandslash",
type: "Ground",
method: "Evolution",
location: "Evolve Sandshrew",
evolution: "Final Evolution"
},

{
number: 29,
name: "Nidoran♀",
type: "Poison",
method: "Catch",
location: "Route 22 / Safari Zone",
evolution: "Lv16 → Nidorina → Moon Stone → Nidoqueen"
},

{
number: 30,
name: "Nidorina",
type: "Poison",
method: "Evolution",
location: "Evolve Nidoran♀",
evolution: "Moon Stone → Nidoqueen"
},

{
number: 31,
name: "Nidoqueen",
type: "Poison / Ground",
method: "Evolution",
location: "Moon Stone",
evolution: "Final Evolution"
},

{
number: 32,
name: "Nidoran♂",
type: "Poison",
method: "Catch",
location: "Route 22 / Safari Zone",
evolution: "Lv16 → Nidorino → Moon Stone → Nidoking"
},

{
number: 33,
name: "Nidorino",
type: "Poison",
method: "Evolution",
location: "Evolve Nidoran♂",
evolution: "Moon Stone → Nidoking"
},

{
number: 34,
name: "Nidoking",
type: "Poison / Ground",
method: "Evolution",
location: "Moon Stone",
evolution: "Final Evolution"
},

{
number: 35,
name: "Clefairy",
type: "Normal",
method: "Catch",
location: "Mt. Moon",
evolution: "Moon Stone → Clefable"
},

{
number: 36,
name: "Clefable",
type: "Normal",
method: "Evolution",
location: "Moon Stone",
evolution: "Final Evolution"
},

{
number: 37,
name: "Vulpix",
type: "Fire",
method: "Catch",
location: "Routes 7, 8",
evolution: "Fire Stone → Ninetales"
},

{
number: 38,
name: "Ninetales",
type: "Fire",
method: "Evolution",
location: "Fire Stone",
evolution: "Final Evolution"
},

{
number: 39,
name: "Jigglypuff",
type: "Normal",
method: "Catch",
location: "Routes 3, 4, 5, 6",
evolution: "Moon Stone → Wigglytuff"
},

{
number: 40,
name: "Wigglytuff",
type: "Normal",
method: "Evolution",
location: "Moon Stone",
evolution: "Final Evolution"
},

{
number: 41,
name: "Zubat",
type: "Poison / Flying",
method: "Catch",
location: "Mt. Moon, Rock Tunnel, Caves",
evolution: "Lv22 → Golbat"
},

{
number: 42,
name: "Golbat",
type: "Poison / Flying",
method: "Evolution",
location: "Evolve Zubat",
evolution: "Final Evolution"
},

{
number: 43,
name: "Oddish",
type: "Grass / Poison",
method: "Catch",
location: "Routes 24, 25",
evolution: "Lv21 → Gloom"
},

{
number: 44,
name: "Gloom",
type: "Grass / Poison",
method: "Evolution",
location: "Evolve Oddish",
evolution: "Leaf Stone → Vileplume"
},

{
number: 45,
name: "Vileplume",
type: "Grass / Poison",
method: "Evolution",
location: "Leaf Stone",
evolution: "Final Evolution"
},

{
number: 46,
name: "Paras",
type: "Bug / Grass",
method: "Catch",
location: "Mt. Moon, Safari Zone",
evolution: "Lv24 → Parasect"
},

{
number: 47,
name: "Parasect",
type: "Bug / Grass",
method: "Evolution",
location: "Evolve Paras",
evolution: "Final Evolution"
},

{
number: 48,
name: "Venonat",
type: "Bug / Poison",
method: "Catch",
location: "Routes 24, 25, Safari Zone",
evolution: "Lv31 → Venomoth"
},

{
number: 49,
name: "Venomoth",
type: "Bug / Poison",
method: "Evolution",
location: "Evolve Venonat",
evolution: "Final Evolution"
},

{
number: 50,
name: "Diglett",
type: "Ground",
method: "Catch",
location: "Diglett's Cave",
evolution: "Lv26 → Dugtrio"

}

];

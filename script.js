const games = [
{
    name: "Red",
    save: "redPokemon",
    total: 151,
    progressId: "redProgress"
}
];

function updateProgress(){

let overallCaught = 0;
let overallTotal = 0;

games.forEach(game => {

const caught = JSON.parse(
localStorage.getItem(game.save) || "[]"
);

const percent = Math.round(
(caught.length / game.total) * 100
);

overallCaught += caught.length;
overallTotal += game.total;

const gameProgress = document.getElementById(game.progressId);

if(gameProgress){

gameProgress.innerText =
`Progress: ${percent}%`;

}

});

const overallPercent = Math.round(
(overallCaught / overallTotal) * 100
);

document.getElementById("overallProgress").style.width =
overallPercent + "%";

document.getElementById("percentage").innerText =
overallPercent + "% Complete";

}

updateProgress();

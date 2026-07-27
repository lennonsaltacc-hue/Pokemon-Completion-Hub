let completion = 0;


function updateProgress(){

    document.getElementById("overallProgress").style.width =
        completion + "%";


    document.getElementById("percentage").innerText =
        completion + "% Complete";

}


updateProgress();

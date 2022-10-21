const playButton = document.getElementsByClassName("play")[0];
playButton.addEventListener("mouseover",(event)=>{
    event.target.style.setProperty("background","radial-gradient(ellipse, rgba(255,249,249,1) 6%, rgba(255,205,0,1) 100%)");
    event.target.style.setProperty("background-color","rgb(255,249,249)");
});
playButton.addEventListener("mouseout",(event)=>{
    event.target.style.removeProperty("background");
    event.target.style.removeProperty("background-color");
});

const playerName = document.getElementById("playerName");
playerName.innerText = prompt("Input Your name:");

rollBandit();

function rollBandit(){
    var matrix = [
        Array(),  Array(),  Array()
    ];
for(var i=0; i<3; i++){

     var temp1="Slots/"+parseInt(Math.random()*(5-1)+1)+".png";
     var temp2="Slots/"+parseInt(Math.random()*(5-1)+1)+".png";
     var temp3="Slots/"+parseInt(Math.random()*(5-1)+1)+".png";

    while(matrix[0].indexOf(temp1) != -1){
        temp1="Slots/"+parseInt(Math.random()*(5-1)+1)+".png";
    }
    matrix[0][i]=temp1;

    while(matrix[1].indexOf(temp2) != -1){
        temp2="Slots/"+parseInt(Math.random()*(5-1)+1)+".png";
    }
    matrix[1][i]=temp2;

    while(matrix[2].indexOf(temp3) != -1){
        temp3="Slots/"+parseInt(Math.random()*(5-1)+1)+".png";
    }
    matrix[2][i]=temp3;

    const box = document.querySelector(".banditBox");
    for(var j = 0; j < 3; j++){
        box.children[j].children[i].setAttribute("src",matrix[j][i]);
    }
}



var numOfTries = parseInt(document.getElementById("currTry").innerText);

numOfTries++;
document.getElementById("currTry").innerText=numOfTries;
if(numOfTries == 0) return;

for(var i=0; i<3; i++){
    if(matrix[0][i] == matrix[1][i] && matrix[0][i] == matrix[2][i] && matrix[1][i] == matrix[2][i]){
        alert(`Congratulations, ${playerName.innerText}, You won!`);
        playButton.toggleAttribute("disabled");
        playButton.toggleAttribute("style");
        document.querySelector(".banditBox").style.setProperty("box-shadow","0 0 5px lime, 0 0 20px lime");
        return;
    }
}
if(numOfTries==3){ 
    alert("You lost!");
    playButton.toggleAttribute("disabled");
    playButton.toggleAttribute("style");

    document.querySelector(".banditBox").style.setProperty("box-shadow","0 0 5px red, 0 0 20px red");
}
}

playButton.addEventListener("click",rollBandit);
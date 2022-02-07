console.log("It's JK GAME ")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "1"
let isgameover = false;
let gamestate = false;
let counter = 0;

// Function to change the turn
const changeTurn = ()=>{
    return turn === "1"? "0": "1"
}

// Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Win"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })

    return isgameover
}
// Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            gamestate = checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
                counter++;
                //console.log(counter);
                if(counter==9) {
                    // document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Match draw"
                    document.querySelector('.info').innerText = "Match Draw" 
                    isgameover = true;
                    document.querySelector('.gameover').getElementsByTagName('img')[0].style.width = "200px";
                    //document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
                    //document.querySelector(".line").style.width = "20vw";
            }
            } 
            
        }
       
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "1"; 
    counter=0;
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.gameover').getElementsByTagName('img')[0].style.width = "0px"
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"

})


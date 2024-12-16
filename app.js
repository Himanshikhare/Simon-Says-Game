let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let h4=document.querySelector("h4");
h4.innerText=0;

let btns=["red","green","yellow","puple"];

let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function userBtnFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },200);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    //random btn click
    let randomIdx=Math.floor(Math.random()*3);
    let randomClr=btns[randomIdx];
    gameSeq.push(randomClr);
    let randombtn=document.querySelector(`.${randomClr}`);
    gameFlash(randombtn);
}

function checkAns(idx){
    if(gameSeq[idx]===userSeq[idx]){
        console.log(gameSeq);
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! your score was <b>${level}</b> <br>Press any key to start the game.`;
        if(h4.innerText<level){
            h4.innerText=level;
        }
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";
        }, 150);
        reset();
    }
}

function btnpress(){
    let btn=this;
    userBtnFlash(btn);
    let userClr= btn.getAttribute("id");
    userSeq.push(userClr);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnpress);
}

function reset(){
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
}




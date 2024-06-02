let boxs=document.querySelectorAll (".box");
let rb=document.querySelector("#resetbutton");
let newbtn=document.querySelector("#new-btn");
let msgcon=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turno=true;

const wp=[[0,1,2],[1,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText="0";
            turno=false;
        }else{
            box.innerText="X";
            turno=true;
        }

        box.disabled=true;

        checkWinner();
    });     
});
const disableBoxes=()=>{
    for(let box of  boxs){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText=`congratulations, winner is ${winner}`;
    msgcon.classList.remove("hide");
    disableBoxes();
};
function checkWinner() {
    for (p of wp) {
        let pos1 = boxs[p[0]].innerText;
        let pos2 = boxs[p[1]].innerText;
        let pos3 = boxs[p[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            }
        }
    }
};
const resetGame=()=>{
    turno=true;
    enableBoxes();
    msgcon.classList.add("hide");
};
newbtn.addEventListener("click",resetGame);
rb.addEventListener("click",resetGame);
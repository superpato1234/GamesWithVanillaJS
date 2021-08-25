const Robot = document.querySelector('#Robot');
const Reset  = document.querySelector('#Reset');
const p1R = document.querySelector('#p1R');
const p1P = document.querySelector('#p1P');
const p1S = document.querySelector('#p1S');
const p2R = document.querySelector('#p2R');
const p2P = document.querySelector('#p2P');
const p2S = document.querySelector('#p2S');
const score = document.querySelector('#score');
const playerOne = document.querySelector('#playerOne');
const playerTwo = document.querySelector('#playerTwo');

let vsRobot= true;
let winList=['sp','pr','rs']
let pointsp1 = 0;
let pointsp2 = 0;

Robot.addEventListener('click',()=>{
    vsRobot=true;
})
Reset.addEventListener('click',()=>{
    location.reload();
})
p1R.addEventListener('click',()=>{
    playerOne.src="./images/rock.png";
    if(vsRobot){
        const result= PlayVsRobot('r');
        result==='win'
        ? changeScore(1)
        :result==='lose'
        ? changeScore(2)
        :null
    }
})
p1P.addEventListener('click',()=>{
    playerOne.src="./images/paper.png";
    if(vsRobot){
        const result= PlayVsRobot('p');
        result==='win'
        ? changeScore(1)
        :result==='lose'
        ? changeScore(2)
        :null
    }
})
p1S.addEventListener('click',()=>{
    playerOne.src="./images/scissors.png";
    if(vsRobot){
        const result= PlayVsRobot('s');
        result==='win'
        ? changeScore(1)
        :result==='lose'
        ? changeScore(2)
        :null
    }
})
const PlayVsRobot = (option) => { 
    let robot=Math.floor(Math.random()*(3)+1);
    robot===1?robot='r':robot===2? robot='p':robot='s';
    robot==='r'? playerTwo.src="./images/rock.png"
    :robot==='p'? playerTwo.src="./images/paper.png"
    :playerTwo.src="./images/scissors.png"
    if(option===robot){
        return 'tie'
    }
    if(winList.includes(option+robot)){
        return 'win'
    }
    return 'lose'
}
const changeScore = (player) => {
    if(player===1){
        pointsp1+=1;
        score.innerHTML=`${pointsp1}-${pointsp2}`;
    }
    else{
        pointsp2+=1;
        score.innerHTML=`${pointsp1}-${pointsp2}`;
    }
}



const rendertictactoe = () => {
    return`
    <div class="frame">
    <div class="score">
        <div class="score-numbers">
            <p class="scoret" id="score">0-0</p>
        </div>
        <div class="score-bar">
            <div class="bar"></div>
        </div>
    </div>
    <div class="game-mode">
        <button id="Robot">
            <img src="./images/robot.png" alt="">
            <p>Vs Robot</p>
        </button>
        <button id="Reset">
            <img src="./images/again.png" alt="">
            <p>Reset</p>
        </button>
    </div>

    <div class="players">
        <div class="player-one">
            <div class="options">
                <div class="option">
                    <button id="p1R">
                        <img src="./images/rock.png" alt="Rock">
                    </button>
                </div>
                <div class="option">
                    <button id="p1P">
                        <img src="./images/paper.png" alt="Paper">
                    </button>
                </div>
                <div class="option">
                    <button id="p1S">
                        <img src="./images/scissors.png" alt="Scissors">
                    </button>
                </div>
            </div>
            <div class="selected">
                <div class="default-selected"><img src="./images/dog.png" alt="playerone" id="playerOne"></div>
            </div>
        </div>
        <div class="player-two">
            <div class="selected">
                <div class="default-selected"><img src="./images/cat.png" alt="playertwo"  id="playerTwo"></div>
            </div>
            <div class="options">
                <div class="option">
                    <button id="p2R">
                        <img src="./images/rock.png" alt="Rock">
                    </button>
                </div>
                <div class="option">
                    <button id="p2P">
                        <img src="./images/paper.png" alt="Paper">
                    </button>
                </div>
                <div class="option">
                    <button id="p2S">
                        <img src="./images/scissors.png" alt="Scissors">
                    </button>
                </div>
            </div>
        </div>
    </div>


</div>
    `
}
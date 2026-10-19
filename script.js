let playerHP = 100;
let enemyHP = 100;

const questions = [
    {q:"25 + 17", a:"42"},
    {q:"56 - 18", a:"38"},
    {q:"8 x 7", a:"56"},
    {q:"72 ÷ 8", a:"9"}
];

let currentQuestion;

function getQuestion(){
    currentQuestion =
    questions[Math.floor(Math.random()*questions.length)];

    return currentQuestion;
}

function pick(player){

    let q = getQuestion();

    document.getElementById("game").innerHTML=`

    <h2>${player} dipilih</h2>

    <h3>⚔ Pertempuran Bermula</h3>

    <p>HP Pemain:
    <span id="playerHP">${playerHP}</span></p>

    <p>HP Musuh:
    <span id="enemyHP">${enemyHP}</span></p>

    <p id="question">${q.q} = ?</p>

    <input id="answer">

    <button onclick="attack()">
        Jawab
    </button>

    <div id="result"></div>

    `;

}

function attack(){

    let ans =
    document.getElementById("answer").value;

    if(ans == currentQuestion.a){

        enemyHP -= 20;

        document.getElementById("result").innerHTML =
        "🔥 Serangan berjaya!";

    }else{

        playerHP -= 20;

        document.getElementById("result").innerHTML =
        "💥 Musuh menyerang!";
    }

    document.getElementById("playerHP").innerText =
    playerHP;

    document.getElementById("enemyHP").innerText =
    enemyHP;

    if(enemyHP <= 0){

        document.getElementById("result").innerHTML =
        "🏆 Anda Menang!";

        return;
    }

    if(playerHP <= 0){

        document.getElementById("result").innerHTML =
        "❌ Anda Kalah!";

        return;
    }

    let nextQ = getQuestion();

    document.getElementById("question").innerHTML =
    nextQ.q + " = ?";

    document.getElementById("answer").value="";
}

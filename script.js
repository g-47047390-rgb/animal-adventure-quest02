let playerHP = 100;
let enemyHP = 100;

const questions = [
    { q: "2560 + 170", a: "2730" },
    { q: "56 - 18", a: "38" },
    { q: "8 x 7", a: "56" },
    { q: "72 ÷ 8", a: "9" },
    { q: "125 + 75", a: "200" },
    { q: "90 - 45", a: "45" },
    { q: "12 x 6", a: "72" },
    { q: "81 ÷ 9", a: "9" }
];

const enemies = [
    "🐇 Arnab Liar",
    "🦌 Rusa Hutan",
    "🐺 Serigala Alpha"
];

let currentQuestion;
let currentEnemy = 0;
let capturedAnimals = [];

function getQuestion() {

    const randomIndex =
        Math.floor(Math.random() * questions.length);

    currentQuestion = questions[randomIndex];

    return currentQuestion;
}

function loadBattle(player) {

    let q = getQuestion();

    document.getElementById("game").innerHTML = `

    <h2>${player}</h2>

    <h3>⚔ Melawan ${enemies[currentEnemy]}</h3>

    <p>❤️ HP Pemain:
    <span id="playerHP">${playerHP}</span></p>

    <p>💀 HP Musuh:
    <span id="enemyHP">${enemyHP}</span></p>

    <p id="question">${q.q} = ?</p>

    <input id="answer" type="number">

    <button onclick="attack('${player}')">
        Jawab
    </button>

    <div id="result"></div>

    <hr>

    <h3>🎯 Haiwan Ditangkap</h3>

    <div id="collection">
        ${capturedAnimals.join("<br>")}
    </div>

    `;
}

function pick(player) {

    playerHP = 100;
    enemyHP = 100;
    currentEnemy = 0;
    capturedAnimals = [];

    window.selectedPlayer = player;

    loadBattle(player);
}

function attack(player) {

    let ans =
        document.getElementById("answer").value;

    if (ans == currentQuestion.a) {

        enemyHP -= 20;

        document.getElementById("result").innerHTML =
            "🔥 Serangan berjaya!";

    } else {

        playerHP -= 20;

        document.getElementById("result").innerHTML =
            "💥 Musuh menyerang!";
    }

    document.getElementById("playerHP").innerText =
        playerHP;

    document.getElementById("enemyHP").innerText =
        enemyHP;

    if (enemyHP <= 0) {

        capturedAnimals.push(enemies[currentEnemy]);

        currentEnemy++;

        if (currentEnemy >= enemies.length) {

            document.getElementById("game").innerHTML = `

            <h2>🏆 Tahniah!</h2>

            <p>Anda berjaya menewaskan semua musuh.</p>

            <h3>Haiwan Ditangkap</h3>

            <ul>
                ${capturedAnimals.map(x => `<li>${x}</li>`).join("")}

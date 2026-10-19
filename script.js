let playerHP = 100;
let enemyHP = 100;

function pick(player){

    const question1 = {
        question: "25 + 17 = ?",
        answer: "42"
    };

    document.getElementById("game").innerHTML = `
        <h2>${player} dipilih</h2>

        <h3>⚔ Pertempuran Bermula</h3>

        <p>HP Pemain: <span id="playerHP">${playerHP}</span></p>

        <p>HP Musuh: <span id="enemyHP">${enemyHP}</span></p>

        <p>${question1.question}</p>

        <input id="answer" type="number">

        <button onclick="attack('${question1.answer}')">
            Jawab
        </button>

        <div id="result"></div>
    `;
}

function attack(correct){

    let ans = document.getElementById("answer").value;

    if(ans === correct){

        enemyHP -= 20;

        document.getElementById("result").innerHTML =
        "🔥 Serangan berjaya!";

    } else {

        playerHP -= 20;

        document.getElementById("result").innerHTML =
        "💥 Musuh menyerang!";

    }

    document.getElementById("playerHP").innerText = playerHP;
    document.getElementById("enemyHP").innerText = enemyHP;

    if(enemyHP <= 0){

        document.getElementById("result").innerHTML =
        "🏆 Anda Menang!";

    }

    if(playerHP <= 0){

        document.getElementById("result").innerHTML =
        "❌ Anda Kalah!";

    }
}

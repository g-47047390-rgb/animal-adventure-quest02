let playerHP = 100;
let enemyHP = 100;

const questions = [
  { q: "2560 + 170", a: "2730" },
  { q: "98600 - 39211", a: "59389" },
  { q: "8 x 7", a: "56" },
  { q: "72 ÷ 8", a: "9" },
  { q: "125 + 75", a: "200" },
  { q: "90 - 45", a: "45" },
  { q: "12 x 6", a: "72" },
  { q: "81 ÷ 9", a: "9" }
];

let currentQuestion;
let currentIndex = -1;

function getQuestion() {

  let newIndex;

  do {
    newIndex = Math.floor(Math.random() * questions.length);
  } while (newIndex === currentIndex);

  currentIndex = newIndex;
  currentQuestion = questions[newIndex];

  return currentQuestion;
}

function pick(player) {

  playerHP = 100;
  enemyHP = 100;

  const q = getQuestion();

  document.getElementById("game").innerHTML = `
    <h2>${player} dipilih</h2>

    <h3>⚔ Pertempuran Bermula</h3>

    <p>❤️ HP Pemain: <span id="playerHP">${playerHP}</span></p>

    <p>💀 HP Musuh: <span id="enemyHP">${enemyHP}</span></p>

    <p id="question">${q.q} = ?</p>

    <input id="answer" type="number">

    <button onclick="attack()">
      Jawab
    </button>

    <div id="result"></div>
  `;
}

function attack() {

  const ans = document.getElementById("answer").value;

  if (ans == currentQuestion.a) {

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

  if (enemyHP <= 0) {

    document.getElementById("result").innerHTML =
      "🏆 Anda Menang!";

    return;
  }

  if (playerHP <= 0) {

    document.getElementById("result").innerHTML =
      "❌ Anda Kalah!";

    return;
  }

  const nextQ = getQuestion();

  document.getElementById("question").innerText =
    nextQ.q + " = ?";

  document.getElementById("answer").value = "";
}

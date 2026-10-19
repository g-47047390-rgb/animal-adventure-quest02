let playerHP = 100;
let enemyHP = 100;

const questions = [
  { q: "2560 + 170", a: "2730" },
  { q: "20000 + 9267", a: "29267" },
  { q: "18 x 731", a: "13158" },
  { q: "60384 ÷ 8", a: "7548" },
  { q: "34625 + 75 - 869", a: "33831" },
  { q: "90019 - 455 + 2897", a: "92461" },
  { q: "122 x 25", a: "3050" },
  { q: "81096 ÷ 12", a: "6758" }
];

const locations = [
{
  name:"🌲 Hutan Permulaan",
  enemies:["🐇 Arnab Liar","🐿️ Tupai Hutan","🐺 Serigala Alpha"]
},
{
  name:"🌿 Padang Rumput Hijau",
  enemies:["🐐 Kambing Padang","🦌 Rusa Muda","🦬 Bison Hijau"]
},
{
  name:"💎 Sungai Kristal",
  enemies:["🐟 Ikan Kristal","🦆 Itik Air","🐊 Buaya Sungai"]
},
{
  name:"🪨 Gua Batu",
  enemies:["🦇 Kelawar Gelap","🦂 Kala Batu","🦍 Gorilla Gua"]
},
{
  name:"🌋 Gunung Berapi Mini",
  enemies:["🦎 Cicak Lava","🔥 Salamander Api","🐉 Drake Berapi"]
},
{
  name:"🌫️ Tasik Berkabus",
  enemies:["🐸 Katak Kabus","🦢 Angsa Putih","🐍 Ular Air"]
},
{
  name:"🌳 Hutan Gelap",
  enemies:["🕷️ Labah Gelap","🦉 Burung Hantu","🐻 Beruang Hutan"]
},
{
  name:"🦕 Bandar Haiwan Purba",
  enemies:["🦖 Raptor Purba","🦕 Triceratops","🦴 Rex Purba"]
},
{
  name:"☁️ Menara Langit",
  enemies:["🐦 Helang Muda","🦅 Helang Langit","🔥 Phoenix Awan"]
},
{
  name:"🏰 Istana Penjinak Haiwan",
  enemies:["🐲 Dragon Guardian","👑 Dragon Elite","🐉 Dragon Emperor"]
}
];

let currentLocation = 0;
let currentEnemy = 0;
let currentQuestion;
let currentIndex = -1;
let capturedAnimals = [];

function getQuestion(){

  let newIndex;

  do{
    newIndex = Math.floor(Math.random() * questions.length);
  }while(newIndex === currentIndex);

  currentIndex = newIndex;
  currentQuestion = questions[newIndex];

  return currentQuestion;
}

function pick(player){

  playerHP = 100;
  enemyHP = 100;
  currentLocation = 0;
  currentEnemy = 0;
  capturedAnimals = [];

  loadBattle(player);
}

function loadBattle(player){

  let q = getQuestion();

  let enemy =
  locations[currentLocation].enemies[currentEnemy];

  document.getElementById("game").innerHTML = `

    <h2>${player}</h2>

    <h3>
      📍 Lokasi ${currentLocation + 1}/10
    </h3>

    <h3>
      ${locations[currentLocation].name}
    </h3>

    <h3>
      ⚔ Melawan ${enemy}
    </h3>

    <p>
      ❤️ HP Pemain:
      <span id="playerHP">${playerHP}</span>
    </p>

    <p>
      💀 HP Musuh:
      <span id="enemyHP">${enemyHP}</span>
    </p>

    <p id="question">
      ${q.q} = ?
    </p>

    <input id="answer" type="number">

    <button onclick="attack('${player}')">
      Jawab
    </button>

    <div id="result"></div>

    <hr>

    <h3>
      🎯 Haiwan Ditangkap
    </h3>

    <p>
      ${capturedAnimals.length}/30
    </p>

    <div>
      ${capturedAnimals.join("<br>")}
    </div>

  `;
}

function attack(player){

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

    let defeated =
    locations[currentLocation].enemies[currentEnemy];

    capturedAnimals.push(defeated);

    alert(
      "🎯 Haiwan berjaya ditangkap!\n\n" +
      defeated
    );

    currentEnemy++;

    if(currentEnemy >= 3){

      currentLocation++;
      currentEnemy = 0;

      if(currentLocation >= 10){

        document.getElementById("game").innerHTML = `

          <h1>
            🏆 ANIMAL TAMER SPECIALIST
          </h1>

          <h2>⭐⭐⭐</h2>

          <p>
            Tahniah!
          </p>

          <p>
            Anda berjaya menangkap semua haiwan.
          </p>

          <p>
            Jumlah Haiwan:
            ${capturedAnimals.length}/30
          </p>

          <h3>Senarai Haiwan</h3>

          <div>
            ${capturedAnimals.join("<br>")}
          </div>

        `;

        return;
      }

      enemyHP = 100;

      alert(
        "✅ Lokasi selesai!\n\n" +
        "Menuju ke:\n" +
        locations[currentLocation].name
      );

      loadBattle(player);

      return;
    }

    enemyHP = 100;

    loadBattle(player);

    return;
  }

  if(playerHP <= 0){

    document.getElementById("game").innerHTML = `

      <h1>❌ Anda Kalah</h1>

      <p>
        Haiwan ditangkap:
        ${capturedAnimals.length}/30
      </p>

      <button onclick="pick('${player}')">
        Main Semula
      </button>

    `;

    return;
  }

  let nextQuestion = getQuestion();

  document.getElementById("question").innerText =
  nextQuestion.q + " = ?";

  document.getElementById("answer").value = "";
}

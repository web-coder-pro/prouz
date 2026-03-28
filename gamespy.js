// =======================
// GLOBAL O'ZGARUVCHILAR
// =======================
let userName = "";

// LocalStorage bazasi: foydalanuvchilar va ularning olmoslari
let users = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : {};

// Testlar
const allQuiz = [
  {q:"232 + 276 ?", a:["508","508","518"], c:1},       // 232+276=508
  {q:"458 + 372 ?", a:["830","820","830"], c:1},       // 458+372=830
  {q:"924 - 376 ?", a:["548","550","546"], c:0},       // 924-376=548
  {q:"832 - 415 ?", a:["417","425","427"], c:0},       // 832-415=417
  {q:"123 * 3 ?", a:["369","366","372"], c:0},         // 123*3=369
  {q:"245 * 4 ?", a:["980","985","990"], c:0},         // 245*4=980
  {q:"840 : 7 ?", a:["120","115","125"], c:0},         // 840/7=120
  {q:"672 : 8 ?", a:["84","86","80"], c:0},            // 672/8=84
  {q:"345 + 678 ?", a:["1013","1020","1023"], c:0},    // 345+678=1023
  {q:"789 - 432 ?", a:["357","358","360"], c:0},       // 789-432=357
  {q:"123 * 7 ?", a:["861","860","865"], c:0},         // 123*7=861
  {q:"504 / 6 ?", a:["84","85","82"], c:0},            // 504/6=84
  {q:"678 + 321 ?", a:["999","1000","998"], c:0},      // 678+321=999
  {q:"876 - 345 ?", a:["531","530","535"], c:0},       // 876-345=531
  {q:"234 * 5 ?", a:["1170","1165","1175"], c:0},      // 234*5=1170
  {q:"960 : 8 ?", a:["120","118","125"], c:0},         // 960/8=120
  {q:"432 + 567 ?", a:["999","1000","995"], c:0},      // 432+567=999
  {q:"875 - 432 ?", a:["443","445","440"], c:0},       // 875-432=443
  {q:"321 * 3 ?", a:["963","960","966"], c:0},         // 321*3=963
  {q:"980 : 7 ?", a:["140","138","142"], c:0},
  {q:"O'zbekistonning poytaxti qayer?", a:["Toshkent", "Samarqand", "Navoiy"], c:0},          // 980/7=140
  {q:"Britaniya poytaxti qayer?", a:["Leyla", "London", "angliya"], c:1},
  {q:"Polshaning poytaxti qayer?", a:["Stokkolem", "London", "Varshava"], c:1},
  {q:"Yaponiyaning poytaxti qayer?", a:["Stokkolem", "Pekin", "Tokio"], c:2},
  {q:"Rossiyaning poytaxti qayer", a:["Stokkolem", "Sank-Peterburg", "Moskva"], c:2}
];

// =======================
// RANDOM TEST TANLASH
// =======================
function getRandomQuiz(arr, n){
    let shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

// =======================
let quiz = [];
let i = 0;
let score = 0;
let time = 10;
let interval = null;

// =======================
// ISM SAQLASH
// =======================
function saveName(){
    let input = document.getElementById("username");
    let name = input.value.trim();

    if(name === ""){
        alert("Iltimos, ismingizni kiriting!");
        return;
    }

    userName = name;

    // Yangi user yaratish
    if(!users[userName]){
        users[userName] = {
            olmos: 0,
            history: [],
            claimed: false  // bonus uchun
        };
    }

    startGame();
}

// =======================
// O'YINNI BOSHLASH
// =======================
function startGame(){
    quiz = getRandomQuiz(allQuiz, 20);
    i = 0;
    score = 0;
    loadQuestion();
}

// =======================
// SAVOL YUKLASH
// =======================
function loadQuestion(){
    if(i >= quiz.length){
        let today = new Date().toLocaleString();

        // Olmos qo'shish
        users[userName].olmos += score;

        // History qo'shish
        users[userName].history.push({
            score: score,
            date: today
        });

        // Saqlash
        localStorage.setItem("users", JSON.stringify(users));

        // BOT LINK: 150+ olmos
        let botHTML = "";
        if(users[userName].olmos >= 150 && !users[userName].claimed){
            botHTML = `
            <div style="margin-top:20px;padding:15px;background:#022c22;border-radius:10px;color:white;">
                <h3>🎁 Bonus ochildi!</h3>
                <p>Tabriklaymiz! Siz 150💎 yig‘dingiz</p>
                <a href="https://t.me/YOUR_BOT_USERNAME" target="_blank">
                    <button style="padding:10px 20px;font-size:18px;cursor:pointer;">🤖 Telegram botga o'tish</button>
                </a>
            </div>
            `;
            users[userName].claimed = true; // bir martalik
            localStorage.setItem("users", JSON.stringify(users));
        }

        document.getElementById("game").innerHTML = `
            <h1>🏁 Test tugadi!</h1>
            <h2>${userName}, natija: ${score}/15</h2>
            <h2>💎 Olmos: ${users[userName].olmos}</h2>
            ${botHTML}
            <button onclick="startGame()">🔄 Qayta o‘ynash</button><br><br>
            <button onclick="showHistory()">📊 Tarix</button><br><br>
            <button onclick="logout()">👤 Boshqa foydalanuvchi</button>
        `;
        return;
    }

    time = 10;

    document.getElementById("game").innerHTML = `
        <div class="title">🎮 TEST GAME</div>
        <div class="timer">
            <div class="timer-bar" id="bar"></div>
        </div>
        <h3>${i+1}/20</h3>
        <div id="question">${quiz[i].q}</div>
        <div id="answers"></div>
    `;

    let html = "";
    quiz[i].a.forEach((ans, index)=>{
        html += `<button onclick="check(${index})">${ans}</button>`;
    });

    document.getElementById("answers").innerHTML = html;
    startTimer();
}

// =======================
// TIMER
// =======================
function startTimer(){
    let bar = document.getElementById("bar");
    let width = 100;

    interval = setInterval(()=>{
        time--;
        width -= 100 / 10;
        bar.style.width = width + "%";

        if(time <= 0){
            clearInterval(interval);
            i++;
            loadQuestion();
        }
    },1000);
}

// =======================
// JAVOB TEKSHIRISH
// =======================
function check(answer){
    clearInterval(interval);

    if(answer === quiz[i].c){
        score++;
    }

    i++;
    loadQuestion();
}

// =======================
// HISTORY KO'RISH
// =======================
function showHistory(){
    let history = users[userName].history;
    let html = `<h1>📊 ${userName} tarixi</h1>`;

    if(history.length === 0){
        html += "<p>Hali test ishlanmagan</p>";
    } else {
        history.slice().reverse().forEach((h, index)=>{
            html += `
                <div style="margin:10px;padding:10px;background:#0f172a;color:white;border-radius:10px;">
                    <b>#${index+1}</b><br>
                    Natija: ${h.score}/20<br>
                    Sana: ${h.date}
                </div>
            `;
        });
    }

    html += `<button onclick="startGame()">⬅ Orqaga</button><br><br>
             <button onclick="logout()">👤 Boshqa foydalanuvchi</button>`;
    document.getElementById("game").innerHTML = html;
}

// =======================
// LOGOUT
// =======================
function logout(){
    location.reload();
}
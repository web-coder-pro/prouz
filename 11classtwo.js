// 11-sinf Matematika fanidan 40 ta murakkab test

const questions = [
    { question: "f(x) = x³ - 3x² + 2 funksiyaning ekstremum nuqtalari soni nechta?", options: ["1 ta", "3 ta", "2 ta", "4 ta"], correct: 2 },
    { question: "∫(3x² - 4x + 1)dx integralni hisoblang.", options: ["x³ - 2x² + x + C", "3x³ - 2x² + x + C", "x³ - 4x² + x + C", "x³ - 2x² + 3x + C"], correct: 0 },
    { question: "y = sin(2x) funksiyaning hosilasi qaysi?", options: ["cos(2x)", "2cos(2x)", "2sin(2x)", "-2cos(2x)"], correct: 1 },
    { question: "log₃(x-1) + log₃(x+1) = 2 tenglamaning ildizi qaysi?", options: ["x = √10", "x = 4", "x = 3", "x = √8"], correct: 0 },
    { question: "C(10,3) + C(10,7) yig'indini hisoblang.", options: ["240", "120", "360", "480"], correct: 0 },
    { question: "lim(x→2) (x² - 4)/(x - 2) limitni toping.", options: ["0", "2", "4", "1"], correct: 2 },
    { question: "A(2,3,1) va B(4,5,3) nuqtalar orasidagi masofa qancha?", options: ["√12", "4", "2√3", "√14"], correct: 2 },
    { question: "z = 3 - 4i kompleks sonining moduli qancha?", options: ["5", "7", "25", "√7"], correct: 0 },
    { question: "sin²x - cos²x ifodani soddalashtiring.", options: ["cos2x", "sin2x", "-cos2x", "1"], correct: 2 },
    { question: "x² + y² = 25 aylanaga (3,4) nuqtada o'tkazilgan urinma tenglamasi qaysi?", options: ["3x + 4y = 25", "4x + 3y = 25", "3x - 4y = 25", "4x - 3y = 25"], correct: 0 },
    { question: "P(x) = x³ - 6x² + 11x - 6 ko'phadning ildizlari yig'indisi nechaga teng?", options: ["6", "11", "-6", "3"], correct: 0 },
    { question: "y = e^(2x) · ln(x) funksiyaning x = 1 nuqtadagi hosilasini toping.", options: ["2e²", "3e²", "e²", "4e²"], correct: 0 },
    { question: "∫₀^(π/2) sin²x dx integralni hisoblang.", options: ["π/4", "π/2", "π/3", "π/6"], correct: 0 },
    { question: "|x - 3| + |x + 1| = 6 tenglamaning ildizlari yig'indisi qancha?", options: ["2", "4", "0", "6"], correct: 0 },
    { question: "Agar f(x) = x/(x-1) bo'lsa, f'(2) qiymati qancha?", options: ["-1", "1", "-2", "2"], correct: 0 },
    { question: "y = √(x² + 4x + 5) funksiyaning minimum qiymati qancha?", options: ["1", "2", "3", "√5"], correct: 0 },
    { question: "C(8,2) · P(3) ko'paytmani hisoblang.", options: ["168", "84", "336", "56"], correct: 0 },
    { question: "log₂(x² - 3x) = 2 tenglamaning ildizlari yig'indisi qancha?", options: ["3", "4", "5", "6"], correct: 0 },
    { question: "y = x³ - 3x funksiyaning burilish nuqtasi koordinatalari qaysi?", options: ["(0,0)", "(1,-2)", "(-1,2)", "(2,2)"], correct: 0 },
    { question: "∫(1/(x·lnx))dx integralni hisoblang.", options: ["ln|lnx| + C", "ln|x| + C", "1/lnx + C", "ln²x + C"], correct: 0 },
    { question: "A(1,2) va B(5,8) nuqtalardan o'tuvchi to'g'ri chiziq tenglamasi qaysi?", options: ["3x - 2y = -1", "3x - 2y = 1", "2x - 3y = -4", "2x - 3y = 4"], correct: 0 },
    { question: "sin(arcsin(0,6) + arccos(0,8)) ifodaning qiymatini toping.", options: ["1", "0,96", "0,6", "0,8"], correct: 0 },
    { question: "x² - 5x + 6 ≤ 0 tengsizlikning butun yechimlari soni nechta?", options: ["2 ta", "4 ta", "3 ta", "1 ta"], correct: 1 },
    { question: "y = x² · e^(-x) funksiyaning maksimum nuqtasining abssissasi qancha?", options: ["0", "1", "2", "-1"], correct: 2 },
    { question: "∫₀¹ x·e^x dx integralni hisoblang.", options: ["1", "e - 2", "e - 1", "2e - 1"], correct: 0 },
    { question: "z = (1+i)/(1-i) kompleks sonning argumenti qancha?", options: ["π/4", "π/2", "π", "3π/4"], correct: 1 },
    { question: "x³ - 3x + 2 = 0 tenglamaning haqiqiy ildizlari soni nechta?", options: ["1 ta", "3 ta", "2 ta", "4 ta"], correct: 1 },
    { question: "y = arctg(x²) funksiyaning hosilasi qaysi?", options: ["2x/(1+x²)", "2x/(1+x⁴)", "x/(1+x⁴)", "1/(1+x⁴)"], correct: 1 },
    { question: "A(2,1,-1) va B(4,3,1) vektorlar orasidagi burchak kosinusi qancha?", options: ["1/3", "2/3", "1/2", "√3/2"], correct: 1 },
    { question: "lim(x→∞) (1 + 2/x)^x limitni hisoblang.", options: ["e", "e²", "2e", "e³"], correct: 1 },
    { question: "sin3x = 3sinx - 4sin³x ayniyat isbotida qaysi formula qo'llaniladi?", options: ["Yig'indi formulasi", "Ikkilangan burchak", "Uchlangan burchak", "Ko'paytma formulasi"], correct: 2 },
    { question: "y = ln(cosx) funksiyaning hosilasi qaysi?", options: ["tgx", "-tgx", "ctgx", "-ctgx"], correct: 1 },
    { question: "∫(dx/√(9 - x²)) integralni hisoblang.", options: ["arcsin(x/3) + C", "arccos(x/3) + C", "arctg(x/3) + C", "arcctg(x/3) + C"], correct: 0 },
    { question: "x² + y² - 4x + 6y - 3 = 0 aylananing markazi koordinatalari qaysi?", options: ["(2,-3)", "(-2,3)", "(4,-6)", "(-4,6)"], correct: 0 },
    { question: "C(n,2) = 45 bo'lsa, n qiymati qancha?", options: ["9", "10", "11", "12"], correct: 1 },
    { question: "y = x³ - 3x² - 9x + 5 funksiyaning o'sish oralig'i qaysi?", options: ["(-∞,-1) ∪ (3,∞)", "(-1,3)", "(-∞,1) ∪ (3,∞)", "(-3,1)"], correct: 0 },
    { question: "log₂(log₃(log₄x)) = 0 tenglamani yeching.", options: ["x = 16", "x = 64", "x = 4", "x = 256"], correct: 1 },
    { question: "∫₀^π x·sinx dx integralni hisoblang.", options: ["π", "2π", "π/2", "3π/2"], correct: 0 },
    { question: "x²/a² + y²/b² = 1 ellipsning ekssentrisiteti ε = 0,6 va b = 8 bo'lsa, a qiymati qancha?", options: ["10", "12", "14", "16"], correct: 0 },
    { question: "y = x/(x²+1) funksiyaning asimptotalari soni nechta?", options: ["1 ta", "3 ta", "2 ta", "4 ta"], correct: 2 }
];

// 40 taga yetkazish
while (questions.length < 40) {
    questions.push(...questions.slice(0, 40 - questions.length));
}

let current = 0;
let answers = new Array(questions.length).fill(null);

let time = 40 * 60;
let timer = setInterval(() => {
    time--;
    let m = Math.floor(time / 60);
    let s = time % 60;
    document.getElementById("timer").innerText = `${m}:${s < 10 ? "0" : ""}${s}`;
    if (time <= 0) finishTest();
}, 1000);

function shuffleQuestions(questions) {
    return questions.map(q => {
        let options = [...q.options];
        let correctAnswer = options[q.correct];
        for (let i = options.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [options[i], options[j]] = [options[j], options[i]];
        }
        return { question: q.question, options: options, correct: options.indexOf(correctAnswer) };
    });
}

const shuffled = shuffleQuestions(questions);
for (let i = 0; i < questions.length; i++) {
    questions[i] = shuffled[i];
}

function loadQuestion() {
    let q = questions[current];
    document.getElementById("question").innerText = `${current + 1}. ${q.question}`;
    let answersBox = document.getElementById("answers");
    answersBox.innerHTML = "";
    q.options.forEach((opt, i) => {
        let div = document.createElement("div");
        div.className = "answer";
        if (answers[current] === i) div.classList.add("selected");
        div.innerText = opt;
        div.onclick = () => { answers[current] = i; loadQuestion(); };
        answersBox.appendChild(div);
    });
    let finishBtn = document.querySelector(".finish");
    finishBtn.style.display = current === questions.length - 1 ? "block" : "none";
    updateProgress();
}

function updateProgress() {
    let answered = answers.filter(a => a !== null).length;
    let progress = (answered / questions.length) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
    document.getElementById("progress-text").innerText = `${answered}/${questions.length} savolga javob berildi`;
}

function nextQuestion() {
    if (current < questions.length - 1) { current++; loadQuestion(); }
}

function prevQuestion() {
    if (current > 0) { current--; loadQuestion(); }
}

function finishTest() {
    clearInterval(timer);
    let score = 0;
    questions.forEach((q, i) => { if (answers[i] === q.correct) score++; });
    let percentage = Math.round((score / questions.length) * 100);
    let grade = percentage >= 90 ? "A'lo" : percentage >= 75 ? "Yaxshi" : percentage >= 60 ? "Qoniqarli" : "Qoniqarsiz";
    let emoji = percentage >= 90 ? "🏆 🔢 🌟" : percentage >= 75 ? "👍 📐 ⭐" : percentage >= 60 ? "😊 📏 💪" : "😔 📚 🔄";
    let color = percentage >= 90 ? "#4CAF50" : percentage >= 75 ? "#2196F3" : percentage >= 60 ? "#FF9800" : "#f44336";
    let message = percentage >= 90 ? "Siz matematik dahosiz!" : percentage >= 75 ? "Yaxshi natija! Matematikani yaxshi bilasiz!" : percentage >= 60 ? "O'rtacha natija. Ko'proq mashq qiling!" : "Formulalarni takrorlab o'rganing!";
    
    document.body.innerHTML = `<div style="text-align:center;margin-top:50px;font-family:'Arial',sans-serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;padding:20px;"><div style="background:white;border-radius:20px;padding:40px;max-width:500px;margin:0 auto;box-shadow:0 10px 40px rgba(0,0,0,0.2);"><h1 style="color:#333;font-size:2.5em;margin-bottom:20px;">🔢 Natija</h1><div style="font-size:4em;margin:20px 0;">${emoji}</div><div style="background:${color};border-radius:15px;padding:20px;color:white;"><h2 style="margin:10px 0;font-size:2em;">${score}/${questions.length}</h2><h3 style="margin:10px 0;font-size:1.5em;">${percentage}%</h3></div><div style="margin-top:30px;"><h2 style="color:${color};font-size:2em;">${grade}</h2><p style="color:#666;margin-top:20px;">${message}</p></div><div style="margin-top:30px;"><button onclick="location.reload()" style="background:${color};color:white;border:none;padding:12px 30px;border-radius:25px;font-size:1.1em;cursor:pointer;box-shadow:0 4px 15px rgba(0,0,0,0.2);">🔄 Qayta boshlash</button></div></div></div>`;
}

loadQuestion();
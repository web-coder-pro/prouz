let questions = [
    {
        question: "y = x² - 6x + 8 funksiyaning nol nuqtalari?",
        options: ["2 va 4", "1 va 8", "3 va 5", "2 va 6"],
        correct: 0
    },
    {
        question: "y = 2x² - 4x + 1 parabola uch nuqtasi?",
        options: ["(1; -1)", "(2; 1)", "(1; 1)", "(0;1)"],
        correct: 0
    },
    {
        question: "x² - 7x + 10 ≤ 0 yechim?",
        options: ["2 ≤ x ≤ 5", "x<2", "x>5", "x≤0"],
        correct: 0
    },
    {
        question: "x² + 4x + 5 = 0 tenglama ildizlari?",
        options: ["Haqiqiy ildiz yo‘q", "2 va 3", "-1 va -5", "1 va -5"],
        correct: 0
    },
    {
        question: "sin 30° qiymati?",
        options: ["1/2", "√3/2", "1", "0"],
        correct: 0
    },
    {
        question: "cos 60° qiymati?",
        options: ["1/2", "√3/2", "0", "1"],
        correct: 0
    },
    {
        question: "tg 45° qiymati?",
        options: ["1", "0", "√3", "-1"],
        correct: 0
    },
    {
        question: "sin²x + cos²x ifoda qiymati?",
        options: ["1", "0", "2", "-1"],
        correct: 0
    },
    {
        question: "Arifmetik progressiyada a1=3, d=2, a10?",
        options: ["21", "20", "23", "18"],
        correct: 0
    },
    {
        question: "Geometrik progressiyada b1=2, q=3, b4?",
        options: ["54", "18", "24", "81"],
        correct: 0
    },
    {
        question: "x² - 9 ≥ 0 yechim?",
        options: ["x≤-3 yoki x≥3", "-3<x<3", "x≥0", "x≤0"],
        correct: 0
    },
    {
        question: "y = x² + 2x + 1 parabola uch nuqtasi?",
        options: ["(-1;0)", "(1;0)", "(0;1)", "(1;1)"],
        correct: 0
    },
    {
        question: "sin 90° qiymati?",
        options: ["1", "0", "-1", "1/2"],
        correct: 0
    },
    {
        question: "cos 0° qiymati?",
        options: ["1", "0", "-1", "1/2"],
        correct: 0
    },
    {
        question: "x² - 4x + 4 = 0 ildiz?",
        options: ["2", "1", "4", "0"],
        correct: 0
    },
    {
        question: "x² - 2x - 3 = 0 ildizlari?",
        options: ["3 va -1", "1 va 3", "2 va -3", "0 va 3"],
        correct: 0
    },
    {
        question: "Arifmetik progressiyada a1=5, d=5, a6?",
        options: ["30", "25", "35", "20"],
        correct: 0
    },
    {
        question: "Geometrik progressiyada b1=3, q=2, b5?",
        options: ["48", "32", "24", "16"],
        correct: 0
    },
    {
        question: "x² + x - 6 > 0 yechim?",
        options: ["x<-3 yoki x>2", "-3<x<2", "x>0", "x<0"],
        correct: 0
    },
    {
        question: "sin 0° qiymati?",
        options: ["0", "1", "-1", "1/2"],
        correct: 0
    },
    {
        question: "cos 180° qiymati?",
        options: ["-1", "1", "0", "1/2"],
        correct: 0
    },
    {
        question: "tg 0° qiymati?",
        options: ["0", "1", "-1", "aniqlanmagan"],
        correct: 0
    },
    {
        question: "x² - x - 2 = 0 ildizlari?",
        options: ["2 va -1", "1 va 2", "-2 va 1", "0 va 2"],
        correct: 0
    },
    {
        question: "y = x² parabola uchi?",
        options: ["(0;0)", "(1;1)", "(-1;1)", "(0;1)"],
        correct: 0
    },
    {
        question: "Arifmetik progressiyada a1=1, d=1, a100?",
        options: ["100", "99", "101", "98"],
        correct: 0
    },
    {
        question: "Geometrik progressiyada b1=1, q=2, b6?",
        options: ["32", "16", "64", "8"],
        correct: 0
    },
    {
        question: "x² ≥ 0 yechim?",
        options: ["Barcha x", "x≥0", "x≤0", "yo‘q"],
        correct: 0
    },
    {
        question: "sin 45° qiymati?",
        options: ["√2/2", "1/2", "1", "0"],
        correct: 0
    },
    {
        question: "cos 45° qiymati?",
        options: ["√2/2", "1/2", "1", "0"],
        correct: 0
    },
    {
        question: "tg 60° qiymati?",
        options: ["√3", "1", "0", "1/2"],
        correct: 0
    },
    {
        question: "x² - 16 = 0 ildizlari?",
        options: ["±4", "±8", "±2", "4"],
        correct: 0
    },
    {
        question: "x² + 6x + 9 = 0 ildiz?",
        options: ["-3", "3", "±3", "0"],
        correct: 0
    },
    {
        question: "Arifmetik progressiyada a1=4, d=3, a7?",
        options: ["22", "25", "20", "18"],
        correct: 0
    },
    {
        question: "Geometrik progressiyada b1=2, q=2, b7?",
        options: ["128", "64", "32", "256"],
        correct: 0
    },
    {
        question: "sin 180° qiymati?",
        options: ["0", "1", "-1", "1/2"],
        correct: 0
    },
    {
        question: "cos 90° qiymati?",
        options: ["0", "1", "-1", "1/2"],
        correct: 0
    },
    {
        question: "tg 90° qiymati?",
        options: ["aniqlanmagan", "0", "1", "-1"],
        correct: 0
    },
    {
        question: "x² - 3x = 0 ildizlari?",
        options: ["0 va 3", "1 va 3", "0 va -3", "3"],
        correct: 0
    },
    {
        question: "x² + 2x ≥ 0 yechim?",
        options: ["x≤-2 yoki x≥0", "-2<x<0", "x≥0", "x≤0"],
        correct: 0
    },
    {
        question: "y = -x² parabola yo‘nalishi?",
        options: ["pastga", "tepaga", "o‘ngga", "chapga"],
        correct: 0
    }
];
// 40 taga yetkazamiz (copy qilib ko'paytiramiz)
while (questions.length < 40) {
    questions.push(...questions.slice(0, 40 - questions.length));
}

let current = 0;
let answers = new Array(questions.length).fill(null);

/* TIMER */
let time = 40 * 40;
let timer = setInterval(() => {
    time--;
    let m = Math.floor(time / 40);
    let s = time % 40;
    document.getElementById("timer").innerText =
        `${m}:${s < 10 ? "0" : ""}${s}`;

    if (time <= 0) finishTest();
}, 1000);

/* LOAD QUESTION */
function loadQuestion() {
    let q = questions[current];
    document.getElementById("question").innerText =
        `${current + 1}. ${q.question}`;

    let answersBox = document.getElementById("answers");
    answersBox.innerHTML = "";

    q.options.forEach((opt, i) => {
        let div = document.createElement("div");
        div.className = "answer";

        if (answers[current] === i) {
            div.classList.add("selected");
        }

        div.innerText = opt;

        div.onclick = () => {
            answers[current] = i;
            loadQuestion();
        };

        answersBox.appendChild(div);
    });

    /* YAKUNLASH BUTTON CONTROL */
    let finishBtn = document.querySelector(".finish");

    if (current === questions.length - 1) {
        finishBtn.style.display = "block";
    } else {
        finishBtn.style.display = "none";
    }
}

function shuffleQuestions(questions) {
    return questions.map(q => {
        let options = [...q.options];
        let correctAnswer = options[q.correct];

        // shuffle
        for (let i = options.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [options[i], options[j]] = [options[j], options[i]];
        }

        return {
            question: q.question,
            options: options,
            correct: options.indexOf(correctAnswer)
        };
    });
}

/* NAVIGATION */
function nextQuestion() {
    if (current < questions.length - 1) {
        current++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (current > 0) {
        current--;
        loadQuestion();
    }
}

/* FINISH */
function finishTest() {
    clearInterval(timer);
    
    let score = 0;
    questions.forEach((q, i) => {
        if (answers[i] === q.correct) score++;
    });
    
    let percentage = Math.round((score / questions.length) * 100);
    let grade = "";
    let emoji = "";
    let color = "";
    
    if (percentage >= 90) {
        grade = "A'lo";
        emoji = "🏆 🎉 🌟";
        color = "#4CAF50";
    } else if (percentage >= 75) {
        grade = "Yaxshi";
        emoji = "👍 ⭐ 🎈";
        color = "#2196F3";
    } else if (percentage >= 60) {
        grade = "Qoniqarli";
        emoji = "😊 📚 💪";
        color = "#FF9800";
    } else {
        grade = "Qoniqarsiz";
        emoji = "😔 📖 🔄";
        color = "#f44336";
    }
    
    document.body.innerHTML = `
        <div style="text-align:center;margin-top:50px;font-family:'Arial',sans-serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;padding:20px;">
            <div style="background:white;border-radius:20px;padding:40px;max-width:500px;margin:0 auto;box-shadow:0 10px 40px rgba(0,0,0,0.2);">
                <h1 style="color:#333;font-size:2.5em;margin-bottom:20px;">📊 Natija</h1>
                <div style="font-size:4em;margin:20px 0;">${emoji}</div>
                <div style="background:${color};border-radius:15px;padding:20px;color:white;">
                    <h2 style="margin:10px 0;font-size:2em;">${score}/${questions.length}</h2>
                    <h3 style="margin:10px 0;font-size:1.5em;">${percentage}%</h3>
                </div>
                <div style="margin-top:30px;">
                    <h2 style="color:${color};font-size:2em;">${grade}</h2>
                    <p style="color:#666;margin-top:20px;">
                        ${percentage >= 60 ? '🎯 Ajoyib natija! Davom eting!' : '💪 Tashvishlanmang, keyingi safar albatta yaxshiroq bo\'ladi!'}
                    </p>
                </div>
                <div style="margin-top:30px;">
                    <button onclick="location.reload()" style="background:${color};color:white;border:none;padding:12px 30px;border-radius:25px;font-size:1.1em;cursor:pointer;box-shadow:0 4px 15px rgba(0,0,0,0.2);">
                        🔄 Qayta boshlash
                    </button>
                </div>
            </div>
        </div>
    `;
}

/* START */
loadQuestion();
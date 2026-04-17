// ==================== ADABIYOT FANIDAN 40 TA TEST ====================
// 9-sinf Adabiyot darsligi asosida tuzilgan

const questions = [
    // 1-10: O'zbek xalq og'zaki ijodi va Mumtoz adabiyot
    { question: "\"Alpomish\" dostonida Alpomish necha yil zindonda yotadi?", options: ["5 yil", "7 yil", "10 yil", "12 yil"], correct: 1 },
    { question: "\"Go'ro'g'li\" turkum dostonlarining bosh qahramoni kim?", options: ["Alpomish", "Go'ro'g'li", "Avazxon", "Ravshan"], correct: 1 },
    { question: "Mahmud Qoshg'ariyning mashhur asari qaysi?", options: ["Qutadg'u bilig", "Devonu lug'otit turk", "Hibat ul-haqoyiq", "Qisasi Rabg'uziy"], correct: 1 },
    { question: "Yusuf Xos Hojibning \"Qutadg'u bilig\" asari kimga bag'ishlangan?", options: ["Tavg'ach Bug'roxonga", "Sulton Mahmudga", "Alp Tekinga", "Qoraxoniylar hukmdoriga"], correct: 0 },
    { question: "Ahmad Yassaviyning \"Devoni hikmat\" asari qaysi tilda yozilgan?", options: ["Fors tilida", "Arab tilida", "Turkiy tilda", "O'zbek tilida"], correct: 2 },
    { question: "Alisher Navoiyning birinchi devoni qaysi?", options: ["G'aroyib us-sig'ar", "Navodir ush-shabob", "Badoye' ul-vasat", "Favoyid ul-kibar"], correct: 0 },
    { question: "\"Xamsa\" tarkibidagi qaysi doston ishq-muhabbat mavzusida?", options: ["Hayrat ul-abror", "Farhod va Shirin", "Layli va Majnun", "Saddi Iskandariy"], correct: 2 },
    { question: "Zahiriddin Muhammad Boburning \"Boburnoma\" asari necha qismdan iborat?", options: ["2 qism", "3 qism", "4 qism", "5 qism"], correct: 1 },
    { question: "\"Ravshan\" dostoni qaysi turkumga mansub?", options: ["Alpomish turkumi", "Go'ro'g'li turkumi", "Oshiq G'arib turkumi", "Kuntug'mish turkumi"], correct: 1 },
    { question: "Abu Rayhon Beruniyning \"Qadimgi xalqlardan qolgan yodgorliklar\" asari nechanchi yilda yozilgan?", options: ["1000-yilda", "1005-yilda", "1010-yilda", "1020-yilda"], correct: 0 },

    // 11-20: Jadid adabiyoti va 20-asr adabiyoti
    { question: "Abdulla Qodiriyning \"O'tkan kunlar\" romanidagi bosh qahramonlar kimlar?", options: ["Otabek va Kumush", "Anvar va Ra'no", "Mirzakarim va Oysha", "Yusuf va Zulayho"], correct: 0 },
    { question: "\"Mehrobdan chayon\" romanida Anvarning sevgilisi kim?", options: ["Ra'no", "Kumush", "Zaynab", "Oysha"], correct: 0 },
    { question: "Cho'lponning \"Kecha va kunduz\" romanining birinchi qismi qanday nomlanadi?", options: ["Kecha", "Kunduz", "Tong", "Oqshom"], correct: 0 },
    { question: "Abdulla Qahhorning \"Sinchalak\" qissasidagi bosh qahramon kim?", options: ["Saidiy", "O'tar bobo", "Norqo'zi", "Turg'unboy"], correct: 0 },
    { question: "Oybekning \"Navoiy\" romani nechanchi yilda yozilgan?", options: ["1944-yilda", "1945-yilda", "1946-yilda", "1947-yilda"], correct: 0 },
    { question: "G'afur G'ulomning \"Shum bola\" qissasidagi bosh qahramonning ismi nima?", options: ["G'ofur", "Qoravoy", "Toshpo'lat", "Eson"], correct: 1 },
    { question: "Hamid Olimjonning \"Zaynab va Omon\" dostoni qaysi yilda yozilgan?", options: ["1938-yilda", "1940-yilda", "1942-yilda", "1945-yilda"], correct: 0 },
    { question: "Mirtemirning qaysi she'ri xalq orasida mashhur?", options: ["Surat", "O'zbekiston", "Seni kuylayman", "Tong nafasi"], correct: 0 },
    { question: "Usmon Nosirning qaysi she'ri qatag'on qurboni bo'lishiga sabab bo'lgan?", options: ["Yurak", "Naxot", "Ko'ngil", "Sadoqat"], correct: 0 },
    { question: "Abdulla Oripovning \"O'zbekiston\" she'ri qachon yozilgan?", options: ["1968-yilda", "1970-yilda", "1972-yilda", "1975-yilda"], correct: 0 },

    // 21-30: Jahon adabiyoti
    { question: "Uilyam Shekspirning \"Romeo va Julyetta\" asarida voqealar qayerda sodir bo'ladi?", options: ["Veronada", "Venetsiyada", "Florensiyada", "Rimda"], correct: 0 },
    { question: "Servantesning \"Don Kixot\" romanida Don Kixotning otining ismi nima?", options: ["Rosinant", "Busefal", "Pegas", "Gulzor"], correct: 0 },
    { question: "Gyotening \"Faust\" asarida Faust kim bilan shartnoma tuzadi?", options: ["Mefistofel", "Vagner", "Gretxen", "Gomunkul"], correct: 0 },
    { question: "Balzakning \"Gorio ota\" romanidagi bosh qahramon kim?", options: ["Ejen Rastinyak", "Gorio ota", "Voten", "Delfina"], correct: 1 },
    { question: "Stendalning \"Qizil va qora\" romanidagi bosh qahramon kim?", options: ["Jyulen Sorel", "Jan Valjan", "Rastinyak", "Lyusen"], correct: 0 },
    { question: "Dikkensning qaysi romanida Oliver Tvist bosh qahramon?", options: ["Oliver Tvist", "Devid Kopperfild", "Katta umidlar", "Ikki shahar qissasi"], correct: 0 },
    { question: "Dostoyevskiyning \"Jinoyat va jazo\" romanida Raskolnikov kimni o'ldiradi?", options: ["Sudxo'r kampirni", "Politsiyachini", "Amaldorni", "Savdogarni"], correct: 0 },
    { question: "Tolstoyning \"Urush va tinchlik\" romanidagi bosh qahramonlardan biri kim?", options: ["Andrey Bolkonskiy", "Rodion Raskolnikov", "Yevgeniy Onegin", "Grigoriy Pechorin"], correct: 0 },
    { question: "Chexovning \"Vanya amaki\" pyesasidagi professor kim?", options: ["Serebryakov", "Astrov", "Voynitskiy", "Telegin"], correct: 0 },
    { question: "Mark Tvenning \"Tom Soyerning boshidan kechirganlari\" romanida Tom va Gek kimni dafn marosimida ko'rishadi?", options: ["O'zlarini", "Muff Potterni", "Injun Joni", "Sudya Techerni"], correct: 0 },

    // 31-40: Adabiyot nazariyasi va Zamonaviy adabiyot
    { question: "Qaysi janr lirik turga mansub?", options: ["G'azal", "Roman", "Qissa", "Drama"], correct: 0 },
    { question: "Aruz vaznida nechta asosiy bahr mavjud?", options: ["12 ta", "16 ta", "19 ta", "24 ta"], correct: 2 },
    { question: "Barmoq vazni nima asosida o'lchanadi?", options: ["Hijolar soni", "Bo'g'inlar soni", "Urg'ular soni", "Tovushlar soni"], correct: 1 },
    { question: "Tuyuq janri necha misradan iborat bo'ladi?", options: ["2 misra", "4 misra", "6 misra", "8 misra"], correct: 1 },
    { question: "Erkin Vohidovning qaysi dostoni mashhur?", options: ["Ruhlar isyoni", "Nido", "O'zbegim", "Barchasi"], correct: 3 },
    { question: "O'tkir Hoshimovning qaysi asari avtobiografik xarakterga ega?", options: ["Daftar hoshiyasidagi bitiklar", "Tushda kechgan umrlar", "Ikki eshik orasi", "Bahor qaytmaydi"], correct: 1 },
    { question: "Shukur Xolmirzayevning qaysi qissasi qishloq mavzusida?", options: ["O'zbeklar", "So'nggi bekat", "Yo'lovchi", "Qora kamar"], correct: 0 },
    { question: "Tog'ay Murodning qaysi romani mashhur?", options: ["Otamdan qolgan dalalar", "Yulduzlar mangu yonadi", "Oydinda yurgan odamlar", "Momo yer qo'shig'i"], correct: 0 },
    { question: "Xurshid Do'stmuhammadning qaysi hikoyasi 9-sinf darsligiga kiritilgan?", options: ["Bozor", "Jajman", "Bevatan", "Qushlar"], correct: 0 },
    { question: "Adabiyotda \"detal\" nima?", options: ["Badiiy detal", "Kichik asar", "She'riy parcha", "So'ngso'z"], correct: 0 }
];

// ==================== ASOSIY KOD ====================

// 40 taga yetkazamiz (copy qilib ko'paytiramiz)
while (questions.length < 40) {
    questions.push(...questions.slice(0, 40 - questions.length));
}

let current = 0;
let answers = new Array(questions.length).fill(null);

/* TIMER */
let time = 40 * 60; // 40 daqiqa (soniyalarda)
let timer = setInterval(() => {
    time--;
    let m = Math.floor(time / 60);
    let s = time % 60;
    document.getElementById("timer").innerText = 
        `${m}:${s < 10 ? "0" : ""}${s}`;
    
    if (time <= 0) finishTest();
}, 1000);

/* SAVOLLARNI ARALASHTIRISH FUNKSIYASI */
function shuffleQuestions(questionsArray) {
    return questionsArray.map(q => {
        let options = [...q.options];
        let correctAnswer = options[q.correct];
        
        // Aralashtirish
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

// Savollarni aralashtirish
const shuffledQuestions = shuffleQuestions(questions);

// Savollarni yangilash (aralashtirilgan versiyaga)
for (let i = 0; i < questions.length; i++) {
    questions[i] = shuffledQuestions[i];
}

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
    
    // Progress bar yangilash
    updateProgress();
}

/* PROGRESS BAR */
function updateProgress() {
    let answered = answers.filter(a => a !== null).length;
    let progress = (answered / questions.length) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
    document.getElementById("progress-text").innerText = 
        `${answered}/${questions.length} savolga javob berildi`;
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
    let message = "";
    
    if (percentage >= 90) {
        grade = "A'lo";
        emoji = "🏆 📚 🌟";
        color = "#4CAF50";
        message = "Siz ajoyib adabiyot bilimdonisiz!";
    } else if (percentage >= 75) {
        grade = "Yaxshi";
        emoji = "👍 📖 ⭐";
        color = "#2196F3";
        message = "Yaxshi natija! Yana ko'proq o'qing!";
    } else if (percentage >= 60) {
        grade = "Qoniqarli";
        emoji = "😊 📚 💪";
        color = "#FF9800";
        message = "O'rtacha natija. Adabiyotga ko'proq e'tibor bering!";
    } else {
        grade = "Qoniqarsiz";
        emoji = "😔 📖 🔄";
        color = "#f44336";
        message = "Ko'proq kitob o'qish kerak!";
    }
    
    document.body.innerHTML = `
        <div style="text-align:center;margin-top:50px;font-family:'Arial',sans-serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;padding:20px;">
            <div style="background:white;border-radius:20px;padding:40px;max-width:500px;margin:0 auto;box-shadow:0 10px 40px rgba(0,0,0,0.2);">
                <h1 style="color:#333;font-size:2.5em;margin-bottom:20px;">📚 Natija</h1>
                <div style="font-size:4em;margin:20px 0;">${emoji}</div>
                <div style="background:${color};border-radius:15px;padding:20px;color:white;">
                    <h2 style="margin:10px 0;font-size:2em;">${score}/${questions.length}</h2>
                    <h3 style="margin:10px 0;font-size:1.5em;">${percentage}%</h3>
                </div>
                <div style="margin-top:30px;">
                    <h2 style="color:${color};font-size:2em;">${grade}</h2>
                    <p style="color:#666;margin-top:20px;">${message}</p>
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
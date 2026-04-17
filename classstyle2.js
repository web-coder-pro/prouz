const questions = [
    // 1-10: Fonetika va Orfoepiya
    { question: "Qaysi so'zda urg'u noto'g'ri qo'yilgan?", options: ["Bog'bon", "O'qituvchi", "Kutubxona", "Qahramon"], correct: 0 },
    { question: "Qaysi qatorda faqat jarangli undoshlar berilgan?", options: ["b, v, g, d", "p, f, k, t", "m, n, l, r", "s, sh, ch, x"], correct: 2 },
    { question: "Qaysi so'zda singarmonizm qonuniyati buzilgan?", options: ["O'zbekiston", "Bolalar", "Kitoblar", "Qalamlar"], correct: 0 },
    { question: "Qaysi so'zda tovush tushishi hodisasi kuzatiladi?", options: ["O'g'il", "Singil", "Opa", "Aka"], correct: 0 },
    { question: "Qaysi so'zda qo'sh undosh noto'g'ri talaffuz qilinadi?", options: ["Million", "Gramm", "Kilogramm", "Kollej"], correct: 1 },
    { question: "Qaysi so'zda 'ng' harf birikmasi bir tovushni ifodalaydi?", options: ["Ming", "Tong", "Rang", "Barchasi"], correct: 3 },
    { question: "Qaysi so'zda urg'u ma'no farqlash vazifasini bajarmaydi?", options: ["Olma", "Atlas", "Yozma", "Terma"], correct: 3 },
    { question: "Qaysi so'zda unlilar uyg'unligi to'liq saqlangan?", options: ["Keldi", "Bordi", "Ko'rdi", "Barchasi"], correct: 3 },
    { question: "Qaysi qatorda jarangsiz undoshlarning jaranglilashuvi kuzatiladi?", options: ["Kitob", "Maktab", "Daftar", "Qalam"], correct: 1 },
    { question: "Qaysi so'zda tovush ortishi hodisasi mavjud?", options: ["O'g'il", "Singil", "Bola", "Qiz"], correct: 0 },
    
    // 11-20: Leksikologiya va Frazeologiya
    { question: "Qaysi iboraning ma'nosi 'aldamoq' fe'li bilan bog'liq?", options: ["Ko'z bo'yamoq", "Qo'l uzatmoq", "Bosh egmoq", "Ko'ngil olmoq"], correct: 0 },
    { question: "Qaysi qatorda paronimlar berilgan?", options: ["She'r-sher", "Kitob-kutubxona", "Ota-ona", "Yer-osmon"], correct: 0 },
    { question: "Qaysi so'zning ma'nosi 'qadimgi turkiy tildagi bitig' so'ziga borib taqaladi?", options: ["Yozuv", "Bitik", "Kitob", "Barchasi"], correct: 3 },
    { question: "Qaysi ibora 'bo'lar-bo'lmas gaplar' ma'nosida qo'llaniladi?", options: ["Og'izdagi gap", "Quloqdagi so'z", "Tildagi so'z", "Ko'ngildagi gap"], correct: 0 },
    { question: "Qaysi so'z omonim hisoblanadi?", options: ["O't", "Suv", "Havo", "Yer"], correct: 0 },
    { question: "Qaysi qatorda faqat ko'chma ma'noli so'zlar berilgan?", options: ["Tosh yurak, oltin qo'l", "Oq qog'oz, qora siyoh", "Baland bino, keng ko'cha", "Shirin olma, nordon uzum"], correct: 0 },
    { question: "Qaysi frazeologizm 'haddan tashqari qo'rqmoq' ma'nosini bildiradi?", options: ["Yuragi yorilmoq", "Ko'zi ochilmoq", "Qo'li uzun", "Og'zi qulog'ida"], correct: 0 },
    { question: "Qaysi so'z arab tilidan o'zlashgan?", options: ["Kitob", "Qalam", "Daftar", "Barchasi"], correct: 3 },
    { question: "Qaysi qatorda antonimlar juftligi berilgan?", options: ["Kecha-kunduz", "Yaxshi-yomon", "Oq-qora", "Barchasi"], correct: 3 },
    { question: "Qaysi ibora 'hech narsani tushunmaslik' ma'nosini anglatadi?", options: ["Quloq solmoq", "Quloq bermoq", "Qulog'i og'ir", "Quloqqa olmoq"], correct: 2 },
    
    // 21-30: Morfologiya va So'z turkumlari
    { question: "Qaysi qo'shimcha so'z yasovchi hisoblanadi?", options: ["-chi", "-da", "-ga", "-ni"], correct: 0 },
    { question: "Qaysi gapda ravishning daraja shakli qo'llangan?", options: ["Juda tez yugurdi", "Tez yugurdi", "Tezroq yugurdi", "Barchasi"], correct: 2 },
    { question: "Qaysi fe'lning o'timli-o'timsizlik ma'nosi kontekstga bog'liq?", options: ["Yozmoq", "O'qimoq", "Bormoq", "Kulmoq"], correct: 0 },
    { question: "Qaysi qatorda faqat yordamchi so'zlar berilgan?", options: ["Bilan, uchun, kabi", "Yaxshi, yomon, chiroyli", "Men, sen, u", "Besh, o'n, yuz"], correct: 0 },
    { question: "Qaysi sifatning orttirma darajasi noto'g'ri yasalgan?", options: ["Qip-qizil", "Yam-yashil", "Oppoq", "To'ppa-to'g'ri"], correct: 1 },
    { question: "Qaysi fe'l maylining nomi to'g'ri berilgan?", options: ["Bormoqchi - niyat mayli", "Boradi - buyruq mayli", "Borgan - shart mayli", "Borsa - aniq mayl"], correct: 0 },
    { question: "Qaysi so'zda egalik qo'shimchasi otning shaxs-sonini bildirmaydi?", options: ["Kitobim", "Maktabing", "Daftari", "Qalamlar"], correct: 3 },
    { question: "Qaysi qatorda taqlid so'zlar berilgan?", options: ["Gumbur-gumbur", "Tez-tez", "O'ylanib-o'ylanib", "Bora-bora"], correct: 0 },
    { question: "Qaysi olmoshning kelishik shakli noto'g'ri?", options: ["Mening", "Sening", "Uning", "Bizning"], correct: 2 },
    { question: "Qaysi sonning tuzilishiga ko'ra turi to'g'ri ko'rsatilgan?", options: ["O'n besh - murakkab", "Besh - sodda", "Yigirma - sodda", "Barchasi"], correct: 3 },
    
    // 31-40: Sintaksis va Gap tuzilishi
    { question: "Qaysi gapda kesim ot bilan ifodalangan?", options: ["Men talabaman", "U keldi", "Biz o'qiymiz", "Siz borsangiz"], correct: 0 },
    { question: "Qaysi qatorda bog'lovchisiz qo'shma gap berilgan?", options: ["Keldi, ko'rdi, g'olib bo'ldi", "Men keldim va u ketdi", "Agar kelsang, ko'rasan", "Chunki u aqlli"], correct: 0 },
    { question: "Qaysi gapda ega umumlashgan ma'noda qo'llangan?", options: ["Aytgan so'z - otilgan o'q", "Men keldim", "U o'qiydi", "Biz boramiz"], correct: 0 },
    { question: "Qaysi qo'shma gap tarkibida sabab-to'siqsiz munosabat ifodalangan?", options: ["Keldimki, ko'rdim", "Keldim, chunki chaqirding", "Kelsam ham, ko'rmadim", "Keldim va ketdim"], correct: 0 },
    { question: "Qaysi gapda inversiya hodisasi kuzatiladi?", options: ["Keldi u bugun", "U bugun keldi", "Bugun u keldi", "U keldi bugun"], correct: 0 },
    { question: "Qaysi qatorda undalmaning tinish belgilari to'g'ri qo'yilgan?", options: ["Aziz o'quvchi, diqqat qil!", "Aziz o'quvchi! Diqqat qil", "Aziz, o'quvchi diqqat qil", "Aziz o'quvchi diqqat qil"], correct: 0 },
    { question: "Qaysi gapda kirish so'z mavjud?", options: ["Menimcha, u keladi", "U keldi", "Biz bordik", "Siz o'qidingiz"], correct: 0 },
    { question: "Qaysi qo'shma gap ergash gapli hisoblanadi?", options: ["Agar yomg'ir yog'sa, bormaymiz", "Yomg'ir yog'di va biz bormadik", "Yomg'ir yog'di-yu, biz bormadik", "Yomg'ir yog'di: biz bormadik"], correct: 0 },
    { question: "Qaysi gapda ajratilgan bo'laklar mavjud?", options: ["U, aziz do'stim, keldi", "U aziz do'stim keldi", "U keldi, aziz do'stim", "Barchasi"], correct: 0 },
    { question: "Qaysi qatorda ko'chirma gapli qo'shma gap tinish belgilari to'g'ri qo'yilgan?", options: ["U: \"Men kelaman\", - dedi", "U - \"Men kelaman\", dedi", "U, \"Men kelaman\" dedi", "U: \"Men kelaman\" dedi"], correct: 0 }
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
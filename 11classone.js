// 11-sinf Ona tili fanidan 40 ta murakkab test

const questions = [
    { question: "Qaysi gapda murakkab qo'shma gap berilgan?", options: ["U keldi va biz ketdik", "U keldi, biz ketdik", "U kelgach, biz ketdik", "U kelgan edi, biz ketdik"], correct: 2 },
    { question: "Qaysi qatorda faqat sifat yasovchi qo'shimchalar berilgan?", options: ["-chi, -dosh, -li", "-li, -siz, -gi", "-kor, -gar, -paz", "-ish, -moq, -uv"], correct: 1 },
    { question: "\"Yozilmoq\" fe'lining nisbat shakli qaysi?", options: ["Aniq nisbat", "O'zlik nisbat", "Majhul nisbat", "Birgalik nisbat"], correct: 2 },
    { question: "Qaysi gapda ega vazifasida harakat nomi kelgan?", options: ["O'qish foydali", "Men o'qiyman", "O'qigan kitob", "O'qib chiqdim"], correct: 0 },
    { question: "Qaysi qatorda orttirma darajadagi sifatlar to'g'ri berilgan?", options: ["Qip-qizil, to'q qizil", "Yam-yashil, tim qora", "Oppoq, qip-qizil", "Qizg'ish, sarg'ish"], correct: 2 },
    { question: "Qaysi gapda izohlovchi ajratilgan holda qo'llangan?", options: ["Shoir Navoiy buyuk shaxs", "Navoiy, buyuk shoir, ko'p asar yozgan", "Buyuk shoir Navoiy", "Navoiy buyuk shoir edi"], correct: 1 },
    { question: "Qaysi qo'shma gap tarkibida shart ergash gap bor?", options: ["U kelsa, biz boramiz", "U keldi va biz bordik", "U kelgani uchun bordik", "U bilan birga bordik"], correct: 0 },
    { question: "\"Kitob o'qimoq\" birikmasida so'zlarning bog'lanish usuli qaysi?", options: ["Moslashuv", "Boshqaruv", "Bitishuv", "Tobelanish"], correct: 1 },
    { question: "Qaysi qatorda faqat ko'makchi fe'llar berilgan?", options: ["yozmoq, olmoq", "bormoq, kelmoq", "qaramoq, tashlamoq", "qo'ymoq, yubormoq"], correct: 3 },
    { question: "Qaysi gapda uyushiq bo'laklar mavjud?", options: ["U aqlli, bilimdon", "U keldi, ketdi", "U aqlli va bilimdon", "Barchasi"], correct: 3 },
    { question: "\"Juda\" so'zi qaysi so'z turkumiga mansub?", options: ["Sifat", "Ravish", "Yuklama", "Bog'lovchi"], correct: 1 },
    { question: "Qaysi gapda undov so'z qo'llangan?", options: ["Eh, qanday go'zal!", "Voy, nima bo'ldi?", "Oh, yurak!", "Barchasi"], correct: 3 },
    { question: "Qaysi qo'shimcha so'zning grammatik ma'nosini o'zgartiradi?", options: ["-lar", "-ning", "-da", "-chi"], correct: 3 },
    { question: "Qaysi gapda kesim fe'lning xabar maylida berilgan?", options: ["U keladi", "U kelsin", "U kelsa", "U kelayotir"], correct: 3 },
    { question: "\"Gapning ikkinchi darajali bo'laklari\" qaysi qatorda to'g'ri ko'rsatilgan?", options: ["Ega, kesim", "Aniqlovchi, to'ldiruvchi, hol", "Undalma, kirish so'z", "Ajratilgan bo'laklar"], correct: 1 },
    { question: "Qaysi qatorda faqat sof ko'makchilar berilgan?", options: ["bilan, uchun, kabi", "tomon, sayin, qadar", "tufayli, sababli, haqida", "Barchasi"], correct: 3 },
    { question: "\"Uyga ketdim\" gapida hol qaysi ma'noda?", options: ["Payt holi", "O'rin holi", "Sabab holi", "Maqsad holi"], correct: 1 },
    { question: "Qaysi gapda to'liqsiz gap berilgan?", options: ["Men - talaba", "Men talabaman", "Men talaba edim", "Men talaba bo'laman"], correct: 0 },
    { question: "Qaysi gapda modal so'z mavjud?", options: ["Albatta, u keladi", "U, albatta, keladi", "U albatta keladi", "Barchasi"], correct: 3 },
    { question: "Qaysi qatorda qo'shma gaplarning bog'langan turi berilgan?", options: ["U keldi va biz ketdik", "U keldi, biz ketdik", "U kelgani uchun ketdik", "U kelgach, ketdik"], correct: 0 },
    { question: "\"Ishlamoq\" fe'lining o'tgan zamon shakli qaysi?", options: ["Ishlayapti", "Ishlaydi", "Ishlagan", "Ishlar"], correct: 2 },
    { question: "Qaysi gapda qaratqich kelishigidagi so'z mavjud?", options: ["Kitobning varag'i", "Kitobni o'qidim", "Kitobda yozuv bor", "Kitobdan oldim"], correct: 0 },
    { question: "Qaysi qo'shma gap ergashtiruvchi bog'lovchi yordamida bog'langan?", options: ["U keldi va biz ketdik", "U kelsa, biz ketamiz", "Chunki u kelmadi", "B va C"], correct: 3 },
    { question: "Qaysi qatorda faqat teng bog'lovchilar berilgan?", options: ["va, hamda, ammo", "chunki, negaki, shuning uchun", "agar, basharti, mabodo", "go'yo, xuddi, naq"], correct: 0 },
    { question: "\"Gap bo'laklarining odatdagi tartibi\" nima deb ataladi?", options: ["Inversiya", "To'g'ri tartib", "Teskari tartib", "Erkin tartib"], correct: 1 },
    { question: "Qaysi gapda qo'shma kesim mavjud?", options: ["U shifokor edi", "U shifokor", "U shifokor bo'ldi", "A va C"], correct: 3 },
    { question: "Qaysi qatorda barcha so'zlar omonim?", options: ["ot, o't, o't", "yuz, qo'l, bosh", "suv, havo, tuproq", "olma, nok, uzum"], correct: 0 },
    { question: "Qaysi gapda aniqlovchi ajratilgan?", options: ["Yosh, go'zal qiz keldi", "Go'zal yosh qiz keldi", "Qiz, yosh va go'zal, keldi", "Yosh go'zal qiz keldi"], correct: 2 },
    { question: "\"Ham\" yuklamasi qaysi ma'noni bildiradi?", options: ["Inkor", "So'roq", "Kuchaytiruv", "Aniqlovchi"], correct: 2 },
    { question: "Qaysi gapda bog'lovchisiz ergash gapli qo'shma gap berilgan?", options: ["Aytdim: kel", "Aytdimki, kel", "Aytdim va kel", "Aytib, kel"], correct: 0 },
    { question: "Qaysi qatorda fe'lning sifatdosh shakli berilgan?", options: ["O'qigan bola", "O'qib chiqdi", "O'qimoqchi", "O'qisa"], correct: 0 },
    { question: "Qaysi gapda kirish birikma mavjud?", options: ["Aytishlaricha, u kelgan", "U aytishicha kelgan", "Uning aytishicha", "Barchasi"], correct: 0 },
    { question: "\"Baland\" va \"past\" so'zlari qanday munosabatda?", options: ["Sinonim", "Antonim", "Omonim", "Paronim"], correct: 1 },
    { question: "Qaysi gapda harakat nomi ega vazifasida?", options: ["Yugurish foydali", "Yugurib keldim", "Yugurgan bola", "Yuguraman"], correct: 0 },
    { question: "Qaysi qatorda faqat so'z yasovchi qo'shimchalar berilgan?", options: ["-chi, -dosh, -paz", "-lar, -ning, -ni", "-da, -ga, -dan", "-mi, -chi, -da"], correct: 0 },
    { question: "\"Uni ko'rib, hayron qoldim\" gapida hol qaysi ma'noda?", options: ["Sabab holi", "Payt holi", "O'rin holi", "Ravish holi"], correct: 0 },
    { question: "Qaysi gapda murakkab to'ldiruvchi mavjud?", options: ["Kitob o'qimoq", "Kitobni o'qimoq", "O'qishni xohlamoq", "Barchasi"], correct: 2 },
    { question: "Qaysi qatorda fe'lning ravishdosh shakli berilgan?", options: ["O'qib", "O'qigan", "O'qimoq", "O'quv"], correct: 0 },
    { question: "Qaysi gapda ajratilgan bo'laklar mavjud emas?", options: ["U, mening do'stim, keldi", "U mening do'stim keldi", "Mening do'stim, u keldi", "U keldi, mening do'stim"], correct: 1 },
    { question: "Qaysi qatorda so'z birikmasi to'g'ri tahlil qilingan?", options: ["Qizil olma - moslashuv", "Kitob o'qimoq - boshqaruv", "Tez yugurmoq - bitishuv", "Barchasi to'g'ri"], correct: 3 }
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
    let emoji = percentage >= 90 ? "🏆 📝 🌟" : percentage >= 75 ? "👍 📚 ⭐" : percentage >= 60 ? "😊 ✏️ 💪" : "😔 📖 🔄";
    let color = percentage >= 90 ? "#4CAF50" : percentage >= 75 ? "#2196F3" : percentage >= 60 ? "#FF9800" : "#f44336";
    let message = percentage >= 90 ? "Siz ajoyib ona tili bilimdonisiz!" : percentage >= 75 ? "Yaxshi natija! Ona tilingizni yaxshi bilasiz!" : percentage >= 60 ? "O'rtacha natija. Yana ko'proq mashq qiling!" : "Qoidalarni takrorlab o'rganing!";
    
    document.body.innerHTML = `<div style="text-align:center;margin-top:50px;font-family:'Arial',sans-serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;padding:20px;"><div style="background:white;border-radius:20px;padding:40px;max-width:500px;margin:0 auto;box-shadow:0 10px 40px rgba(0,0,0,0.2);"><h1 style="color:#333;font-size:2.5em;margin-bottom:20px;">📝 Natija</h1><div style="font-size:4em;margin:20px 0;">${emoji}</div><div style="background:${color};border-radius:15px;padding:20px;color:white;"><h2 style="margin:10px 0;font-size:2em;">${score}/${questions.length}</h2><h3 style="margin:10px 0;font-size:1.5em;">${percentage}%</h3></div><div style="margin-top:30px;"><h2 style="color:${color};font-size:2em;">${grade}</h2><p style="color:#666;margin-top:20px;">${message}</p></div><div style="margin-top:30px;"><button onclick="location.reload()" style="background:${color};color:white;border:none;padding:12px 30px;border-radius:25px;font-size:1.1em;cursor:pointer;box-shadow:0 4px 15px rgba(0,0,0,0.2);">🔄 Qayta boshlash</button></div></div></div>`;
}

loadQuestion();
// 11-sinf O'zbekiston tarixi fanidan 40 ta murakkab test

const questions = [
    { question: "O'zbekiston Respublikasi qachon BMTga a'zo bo'lgan?", options: ["1991-yil 31-dekabr", "1992-yil 2-mart", "1992-yil 21-dekabr", "1991-yil 1-sentabr"], correct: 1 },
    { question: "Mustaqil O'zbekistonning birinchi Konstitutsiyasi qachon qabul qilingan?", options: ["1991-yil 31-avgust", "1993-yil 1-yanvar", "1992-yil 8-dekabr", "1994-yil 1-yanvar"], correct: 2 },
    { question: "O'zbekiston Respublikasining birinchi Prezidenti Islom Karimov qaysi yili tug'ilgan?", options: ["1938-yil", "1940-yil", "1937-yil", "1942-yil"], correct: 0 },
    { question: "\"O'zbekiston Respublikasining Davlat mustaqilligi to'g'risida\"gi Qonun qachon qabul qilingan?", options: ["1991-yil 1-sentabr", "1991-yil 31-avgust", "1991-yil 20-iyun", "1991-yil 29-dekabr"], correct: 1 },
    { question: "O'zbekiston Respublikasining Davlat madhiyasi qachon qabul qilingan?", options: ["1992-yil 10-dekabr", "1991-yil 31-avgust", "1993-yil 1-yanvar", "1992-yil 8-dekabr"], correct: 0 },
    { question: "O'zbekiston Respublikasi Oliy Majlisi ikki palatali parlamentga qachon o'tgan?", options: ["2005-yil", "2002-yil", "2000-yil", "2008-yil"], correct: 0 },
    { question: "Islom Karimov \"O'zbekistonning o'z istiqlol va taraqqiyot yo'li\" asarini qachon yozgan?", options: ["1992-yil", "1993-yil", "1991-yil", "1994-yil"], correct: 0 },
    { question: "O'zbekiston Respublikasi qachon Shanxay Hamkorlik Tashkilotiga a'zo bo'lgan?", options: ["2001-yil", "2000-yil", "2002-yil", "1999-yil"], correct: 0 },
    { question: "1992-yil yanvar oyida Toshkentda bo'lib o'tgan talabalar noroziligi qanday nom bilan tarixga kirgan?", options: ["Toshkent voqealari", "Yanvar fojiasi", "Talabalar qo'zg'oloni", "Mustaqillik sadosi"], correct: 0 },
    { question: "O'zbekiston Respublikasining milliy valyutasi - so'm qachon muomalaga kiritilgan?", options: ["1994-yil 1-iyul", "1993-yil 15-noyabr", "1995-yil 1-yanvar", "1992-yil 1-yanvar"], correct: 0 },
    { question: "O'zbekiston Respublikasi qachon Mustaqil Davlatlar Hamdo'stligiga a'zo bo'lgan?", options: ["1991-yil 21-dekabr", "1992-yil 2-mart", "1991-yil 8-dekabr", "1992-yil 1-yanvar"], correct: 0 },
    { question: "O'zbekiston Respublikasida ko'ppartiyaviylik tizimi qachon joriy etilgan?", options: ["1996-yil", "1995-yil", "1992-yil", "1991-yil"], correct: 2 },
    { question: "Qatag'on qurbonlari xotirasi muzeyi Toshkentda qachon ochilgan?", options: ["2000-yil", "2002-yil", "2001-yil", "1999-yil"], correct: 2 },
    { question: "O'zbekiston Respublikasi qachon YUNESKOga a'zo bo'lgan?", options: ["1993-yil", "1991-yil", "1995-yil", "1992-yil"], correct: 3 },
    { question: "\"O'zbektelekom\" milliy kompaniyasi qachon tashkil etilgan?", options: ["1992-yil", "1993-yil", "1995-yil", "1997-yil"], correct: 1 },
    { question: "O'zbekiston Respublikasining \"Ta'lim to'g'risida\"gi Qonuni qachon qabul qilingan?", options: ["1997-yil", "1992-yil", "1998-yil", "1995-yil"], correct: 0 },
    { question: "Kadrlar tayyorlash milliy dasturi qachon qabul qilingan?", options: ["1997-yil", "1998-yil", "1999-yil", "2000-yil"], correct: 0 },
    { question: "O'zbekiston Respublikasi Qurolli Kuchlari qachon tashkil etilgan?", options: ["1992-yil 14-yanvar", "1991-yil 31-avgust", "1993-yil 1-yanvar", "1994-yil 1-iyul"], correct: 0 },
    { question: "O'zbekiston Respublikasida 9-may qanday kun sifatida nishonlanadi?", options: ["G'alaba kuni", "Xotira va Qadrlash kuni", "Mustaqillik kuni", "Konstitutsiya kuni"], correct: 1 },
    { question: "O'zbekiston Respublikasining \"Davlat tili to'g'risida\"gi Qonuni qachon yangi tahrirda qabul qilingan?", options: ["1995-yil", "1989-yil", "1993-yil", "1997-yil"], correct: 0 },
    { question: "O'zbekiston Respublikasi Markaziy Osiyo davlatlari orasida birinchi bo'lib qaysi tashkilotga a'zo bo'lgan?", options: ["MDH", "BMT", "YUNESKO", "YeXHT"], correct: 2 },
    { question: "1999-yil fevral oyida Toshkentda sodir bo'lgan terroristik harakatlar kimlarga qarshi qaratilgan edi?", options: ["Prezident devoniga", "Hukumat binolariga", "Xalqaro mehmonlarga", "Barchasi"], correct: 0 },
    { question: "O'zbekiston Respublikasida birinchi marta Prezident saylovi qachon o'tkazilgan?", options: ["1991-yil dekabr", "1992-yil yanvar", "1990-yil mart", "1991-yil avgust"], correct: 0 },
    { question: "O'zbekiston Respublikasi qachon Yevropa Xavfsizlik va Hamkorlik Tashkilotiga a'zo bo'lgan?", options: ["1992-yil", "1991-yil", "1993-yil", "1994-yil"], correct: 0 },
    { question: "O'zbekistonda \"Navro'z\" umumxalq bayrami sifatida qachon tiklandi?", options: ["1990-yil", "1991-yil", "1989-yil", "1992-yil"], correct: 2 },
    { question: "O'zbekiston Respublikasining \"Fuqarolik kodeksi\" qachon qabul qilingan?", options: ["1995-1996", "1997-1998", "1993-1994", "1999-2000"], correct: 0 },
    { question: "Andijon viloyatida \"Andijon mashinasozlik zavodi\" qachon tashkil etilgan?", options: ["1994-yil", "1992-yil", "1996-yil", "1998-yil"], correct: 0 },
    { question: "O'zbekistonda birinchi marta Referendum qachon o'tkazilgan?", options: ["1995-yil", "1991-yil", "2002-yil", "1997-yil"], correct: 0 },
    { question: "O'zbekiston Respublikasi qachon Islom Hamkorlik Tashkilotiga a'zo bo'lgan?", options: ["1995-yil", "1992-yil", "1996-yil", "1993-yil"], correct: 1 },
    { question: "\"O'zbekinvest\" milliy sug'urta kompaniyasi qachon tashkil etilgan?", options: ["1993-yil", "1994-yil", "1995-yil", "1992-yil"], correct: 0 },
    { question: "O'zbekistonda fermer xo'jaliklarini rivojlantirish bo'yicha birinchi qonun qachon qabul qilingan?", options: ["1992-yil", "1994-yil", "1993-yil", "1995-yil"], correct: 0 },
    { question: "O'zbekiston Respublikasi Fanlar akademiyasi qachon qayta tashkil etilgan?", options: ["1991-yil", "1992-yil", "1990-yil", "1993-yil"], correct: 1 },
    { question: "Toshkent shahrida birinchi metropoliten qachon ishga tushirilgan?", options: ["1977-yil", "1980-yil", "1975-yil", "1985-yil"], correct: 0 },
    { question: "O'zbekistonda \"Kamolot\" yoshlar tashkiloti qachon tuzilgan?", options: ["2001-yil", "1996-yil", "1998-yil", "2000-yil"], correct: 0 },
    { question: "O'zbekiston Respublikasida xususiylashtirish jarayoni qachon boshlangan?", options: ["1991-yil", "1992-yil", "1993-yil", "1994-yil"], correct: 1 },
    { question: "\"O'zbekneftgaz\" milliy xolding kompaniyasi qachon tashkil etilgan?", options: ["1992-yil", "1993-yil", "1994-yil", "1995-yil"], correct: 0 },
    { question: "O'zbekiston Respublikasi qachon NATOning \"Tinchlik yo'lidagi hamkorlik\" dasturiga qo'shilgan?", options: ["1994-yil", "1995-yil", "1993-yil", "1996-yil"], correct: 0 },
    { question: "O'zbekistonda birinchi marta Konstitutsiyaviy sud qachon tashkil etilgan?", options: ["1995-yil", "1992-yil", "1993-yil", "1994-yil"], correct: 1 },
    { question: "O'zbekiston Respublikasi Oliy Majlisining birinchi sessiyasi qachon bo'lib o'tgan?", options: ["1995-yil", "1994-yil", "1996-yil", "1993-yil"], correct: 0 },
    { question: "O'zbekiston Respublikasida soliq tizimi qachon isloh qilingan?", options: ["1992-yil", "1993-yil", "1994-yil", "1995-yil"], correct: 0 }
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
    let emoji = percentage >= 90 ? "🏆 🏛️ 🌟" : percentage >= 75 ? "👍 📜 ⭐" : percentage >= 60 ? "😊 🗿 💪" : "😔 📚 🔄";
    let color = percentage >= 90 ? "#4CAF50" : percentage >= 75 ? "#2196F3" : percentage >= 60 ? "#FF9800" : "#f44336";
    let message = percentage >= 90 ? "Siz ajoyib tarix bilimdonisiz!" : percentage >= 75 ? "Yaxshi natija! Tarixni yaxshi bilasiz!" : percentage >= 60 ? "O'rtacha natija. Yana ko'proq o'qing!" : "Tarixni chuqurroq o'rganing!";
    
    document.body.innerHTML = `<div style="text-align:center;margin-top:50px;font-family:'Arial',sans-serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;padding:20px;"><div style="background:white;border-radius:20px;padding:40px;max-width:500px;margin:0 auto;box-shadow:0 10px 40px rgba(0,0,0,0.2);"><h1 style="color:#333;font-size:2.5em;margin-bottom:20px;">🏛️ Natija</h1><div style="font-size:4em;margin:20px 0;">${emoji}</div><div style="background:${color};border-radius:15px;padding:20px;color:white;"><h2 style="margin:10px 0;font-size:2em;">${score}/${questions.length}</h2><h3 style="margin:10px 0;font-size:1.5em;">${percentage}%</h3></div><div style="margin-top:30px;"><h2 style="color:${color};font-size:2em;">${grade}</h2><p style="color:#666;margin-top:20px;">${message}</p></div><div style="margin-top:30px;"><button onclick="location.reload()" style="background:${color};color:white;border:none;padding:12px 30px;border-radius:25px;font-size:1.1em;cursor:pointer;box-shadow:0 4px 15px rgba(0,0,0,0.2);">🔄 Qayta boshlash</button></div></div></div>`;
}

loadQuestion();
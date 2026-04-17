// O'zbekiston tarixi fanidan 40 ta test (9-sinf)

const questions = [
    { question: "O'rta Osiyoda ilk shaharlar qaysi davrda paydo bo'lgan?", options: ["Enolit davrida", "Bronza davrida", "Temir davrida", "Tosh davrida"], correct: 1 },
    { question: "Qaysi qadimgi Baqtriya poytaxti hisoblangan?", options: ["Marokanda", "Baqtra", "Niso", "Kesh"], correct: 1 },
    { question: "Avesto kitobi necha qismdan iborat?", options: ["21 qism", "18 qism", "24 qism", "12 qism"], correct: 0 },
    { question: "Qaysi shahar Sug'diyona poytaxti bo'lgan?", options: ["Buxoro", "Samarqand", "Kesh", "Xiva"], correct: 1 },
    { question: "Iskandar Zulqarnayn O'rta Osiyoga qachon bostirib kirgan?", options: ["Mil.avv. 334-327", "Mil.avv. 329-327", "Mil.avv. 350-340", "Mil.avv. 400-390"], correct: 1 },
    { question: "Spitamen qo'zg'oloni qachon bo'lib o'tgan?", options: ["Mil.avv. 329-327", "Mil.avv. 334-330", "Mil.avv. 300-295", "Mil.avv. 250-245"], correct: 0 },
    { question: "Yunon-Baqtriya podsholigi qachon vujudga kelgan?", options: ["Mil.avv. III asr", "Mil.avv. II asr", "Mil.avv. IV asr", "Mil. I asr"], correct: 0 },
    { question: "Kushon podsholigi qaysi sulola davrida eng gullagan?", options: ["Kadfizlar", "Kanishka", "Vima", "Xuvishka"], correct: 1 },
    { question: "Eftaliylar davlati qachon tashkil topgan?", options: ["IV asr", "V asr", "VI asr", "VII asr"], correct: 1 },
    { question: "Turk xoqonligi qachon tashkil topgan?", options: ["551 yil", "552 yil", "553 yil", "550 yil"], correct: 1 },
    { question: "Arab xalifaligi O'rta Osiyoga qachon bostirib kirgan?", options: ["VII asr", "VIII asr", "IX asr", "VI asr"], correct: 0 },
    { question: "Qutayba ibn Muslim qachon Movarounnahrni bosib olgan?", options: ["704-715", "710-720", "700-710", "715-725"], correct: 0 },
    { question: "Muqanna qo'zg'oloni qachon bo'lib o'tgan?", options: ["776-783", "780-785", "770-775", "790-795"], correct: 0 },
    { question: "Somoniylar davlati qachon tashkil topgan?", options: ["875 yil", "892 yil", "900 yil", "819 yil"], correct: 0 },
    { question: "Ismoil Somoniy qachon hokimiyat tepasiga kelgan?", options: ["892 yil", "875 yil", "900 yil", "907 yil"], correct: 0 },
    { question: "Qoraxoniylar davlati qachon tashkil topgan?", options: ["942 yil", "840 yil", "999 yil", "1000 yil"], correct: 0 },
    { question: "G'aznaviylar davlati qachon tashkil topgan?", options: ["962 yil", "977 yil", "997 yil", "1030 yil"], correct: 0 },
    { question: "Saljuqiylar Movarounnahrni qachon egallagan?", options: ["XI asr", "XII asr", "XIII asr", "X asr"], correct: 0 },
    { question: "Xorazmshohlar davlati qachon mustaqil bo'lgan?", options: ["XII asr", "XI asr", "XIII asr", "X asr"], correct: 0 },
    { question: "Muhammad Xorazmshoh qachon hokimiyat tepasiga kelgan?", options: ["1200 yil", "1194 yil", "1212 yil", "1220 yil"], correct: 0 },
    { question: "Chingizxon Movarounnahrga qachon bostirib kirgan?", options: ["1219 yil", "1220 yil", "1218 yil", "1221 yil"], correct: 0 },
    { question: "Mahmud Tarobiy qo'zg'oloni qachon bo'lib o'tgan?", options: ["1238 yil", "1240 yil", "1235 yil", "1245 yil"], correct: 0 },
    { question: "Amir Temur qachon tug'ilgan?", options: ["1336 yil", "1330 yil", "1340 yil", "1328 yil"], correct: 0 },
    { question: "Amir Temur qachon hokimiyat tepasiga kelgan?", options: ["1370 yil", "1365 yil", "1375 yil", "1380 yil"], correct: 0 },
    { question: "Amir Temurning Anqara jangi qachon bo'lgan?", options: ["1402 yil", "1400 yil", "1405 yil", "1398 yil"], correct: 0 },
    { question: "Mirzo Ulug'bek qachon hukmronlik qilgan?", options: ["1409-1449", "1410-1450", "1405-1445", "1415-1455"], correct: 0 },
    { question: "Mirzo Ulug'bek qachon o'ldirilgan?", options: ["1449 yil", "1450 yil", "1448 yil", "1451 yil"], correct: 0 },
    { question: "Shayboniylar sulolasi qachon hokimiyat tepasiga kelgan?", options: ["1500 yil", "1501 yil", "1499 yil", "1505 yil"], correct: 0 },
    { question: "Bobur qachon Kobulni egallagan?", options: ["1504 yil", "1500 yil", "1510 yil", "1498 yil"], correct: 0 },
    { question: "Buxoro xonligi qachon tashkil topgan?", options: ["XVI asr", "XV asr", "XVII asr", "XIV asr"], correct: 0 },
    { question: "Xiva xonligi qachon tashkil topgan?", options: ["XVI asr", "XVII asr", "XV asr", "XVIII asr"], correct: 0 },
    { question: "Qo'qon xonligi qachon tashkil topgan?", options: ["1709 yil", "1710 yil", "1700 yil", "1720 yil"], correct: 0 },
    { question: "Chor Rossiyasi O'rta Osiyoni qachon bosib olgan?", options: ["XIX asr", "XVIII asr", "XX asr", "XVII asr"], correct: 0 },
    { question: "Toshkent qachon Rossiya tomonidan bosib olingan?", options: ["1865 yil", "1860 yil", "1870 yil", "1855 yil"], correct: 0 },
    { question: "Jadidchilik harakati qachon vujudga kelgan?", options: ["XIX asr oxiri", "XX asr boshi", "XIX asr o'rtasi", "XX asr 20-yillari"], correct: 0 },
    { question: "Qachon O'zbekiston SSR tashkil topgan?", options: ["1924 yil", "1918 yil", "1920 yil", "1930 yil"], correct: 0 },
    { question: "Qatag'on siyosati qaysi yillarda avj olgan?", options: ["1937-1938", "1930-1932", "1940-1942", "1928-1930"], correct: 0 },
    { question: "O'zbekiston qachon mustaqillikka erishgan?", options: ["1991 yil 31 avgust", "1991 yil 1 sentabr", "1991 yil 20 iyun", "1991 yil 8 dekabr"], correct: 1 },
    { question: "O'zbekiston qachon BMTga a'zo bo'lgan?", options: ["1992 yil 2 mart", "1991 yil 31 dekabr", "1992 yil 1 yanvar", "1993 yil 1 mart"], correct: 0 },
    { question: "O'zbekiston Konstitutsiyasi qachon qabul qilingan?", options: ["1992 yil 8 dekabr", "1991 yil 31 avgust", "1993 yil 1 yanvar", "1992 yil 1 sentabr"], correct: 0 }
];

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
    let emoji = percentage >= 90 ? "🏆 📜 🌟" : percentage >= 75 ? "👍 🏛️ ⭐" : percentage >= 60 ? "😊 📚 💪" : "😔 📖 🔄";
    let color = percentage >= 90 ? "#4CAF50" : percentage >= 75 ? "#2196F3" : percentage >= 60 ? "#FF9800" : "#f44336";
    let message = percentage >= 90 ? "Siz ajoyib tarix bilimdonisiz!" : percentage >= 75 ? "Yaxshi natija! Tarixni yaxshi bilasiz!" : percentage >= 60 ? "O'rtacha natija. Yana ko'proq o'qing!" : "Tarixni chuqurroq o'rganish kerak!";
    
    document.body.innerHTML = `<div style="text-align:center;margin-top:50px;font-family:'Arial',sans-serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;padding:20px;"><div style="background:white;border-radius:20px;padding:40px;max-width:500px;margin:0 auto;box-shadow:0 10px 40px rgba(0,0,0,0.2);"><h1 style="color:#333;font-size:2.5em;margin-bottom:20px;">🏛️ Natija</h1><div style="font-size:4em;margin:20px 0;">${emoji}</div><div style="background:${color};border-radius:15px;padding:20px;color:white;"><h2 style="margin:10px 0;font-size:2em;">${score}/${questions.length}</h2><h3 style="margin:10px 0;font-size:1.5em;">${percentage}%</h3></div><div style="margin-top:30px;"><h2 style="color:${color};font-size:2em;">${grade}</h2><p style="color:#666;margin-top:20px;">${message}</p></div><div style="margin-top:30px;"><button onclick="location.reload()" style="background:${color};color:white;border:none;padding:12px 30px;border-radius:25px;font-size:1.1em;cursor:pointer;box-shadow:0 4px 15px rgba(0,0,0,0.2);">🔄 Qayta boshlash</button></div></div></div>`;
}

loadQuestion();
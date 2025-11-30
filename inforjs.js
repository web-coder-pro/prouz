let testData = {


theme1: [
  {
    savol: "Yordamchi qurilmalar nima uchun ishlatiladi?",
    variantlar: [
      "Asosiy qurilmalarga yordam berish, ma’lumotlarni saqlash va uzatish",
      "Faqat dasturlarni ishlatish uchun",
      "Faqat internetga ulanish uchun",
      "Faqat kompyuterni o‘chirish uchun"
    ],
    javob: "Asosiy qurilmalarga yordam berish, ma’lumotlarni saqlash va uzatish"
  },
  {
    savol: "Kompyuterning tashqi xotira qurilmasiga misol nima?",
    variantlar: [
      "Fleshka, qattiq disk, CD/DVD",
      "Protsessor",
      "Operativ xotira",
      "Monitor"
    ],
    javob: "Fleshka, qattiq disk, CD/DVD"
  },
  {
    savol: "Kiritish qurilmalari nima vazifani bajaradi?",
    variantlar: [
      "Ma’lumotlarni kompyuterga kiritish",
      "Ma’lumotlarni saqlash",
      "Kompyuterni himoya qilish",
      "Internetga ulanish"
    ],
    javob: "Ma’lumotlarni kompyuterga kiritish"
  },
  {
    savol: "Chiqarish qurilmalari qanday ishlaydi?",
    variantlar: [
      "Kompyuterdagi ma’lumotlarni inson uchun tushunarli shaklga chiqaradi",
      "Ma’lumotlarni internetga yuboradi",
      "Ma’lumotlarni boshqa kompyuterga saqlaydi",
      "Kompyuterni o‘chiradi"
    ],
    javob: "Kompyuterdagi ma’lumotlarni inson uchun tushunarli shaklga chiqaradi"
  },
  {
    savol: "Yordamchi qurilmalar qaysi turlarga bo‘linadi?",
    variantlar: [
      "Kiritish, chiqarish, tashqi xotira va tarmoqqa ulanish qurilmalari",
      "Faqat kiritish va chiqarish",
      "Faqat internet qurilmalari",
      "Faqat protsessor va xotira"
    ],
    javob: "Kiritish, chiqarish, tashqi xotira va tarmoqqa ulanish qurilmalari"
  },
  {
    savol: "Fleshka qaysi turdagi qurilmaga kiradi?",
    variantlar: [
      "Tashqi xotira qurilmasi",
      "Kiritish qurilmasi",
      "Chiqarish qurilmasi",
      "Protsessor"
    ],
    javob: "Tashqi xotira qurilmasi"
  },
  {
    savol: "Printer qaysi turdagi qurilma?",
    variantlar: [
      "Chiqarish qurilmasi",
      "Kiritish qurilmasi",
      "Tashqi xotira",
      "Protsessor"
    ],
    javob: "Chiqarish qurilmasi"
  },
  {
    savol: "Skanner nima vazifani bajaradi?",
    variantlar: [
      "Qog‘ozdagi ma’lumotlarni raqamli shaklga o‘tkazadi",
      "Ma’lumotlarni chop qiladi",
      "Internetga ulanishni ta’minlaydi",
      "Kompyuterni himoya qiladi"
    ],
    javob: "Qog‘ozdagi ma’lumotlarni raqamli shaklga o‘tkazadi"
  },
  {
    savol: "Kiritish qurilmalariga misollar berilsin?",
    variantlar: [
      "Klaviatura, sichqoncha, skanner, mikrofon",
      "Printer, monitor, proyektor",
      "Qattiq disk, fleshka",
      "Protsessor, anakart"
    ],
    javob: "Klaviatura, sichqoncha, skanner, mikrofon"
  },
  {
    savol: "Chiqarish qurilmalariga misollar?",
    variantlar: [
      "Monitor, printer, proyektor",
      "Klaviatura, sichqoncha",
      "Fleshka, qattiq disk",
      "Mikrofon, web-kamera"
    ],
    javob: "Monitor, printer, proyektor"
  },
  {
    savol: "Tashqi xotira qurilmalari nima uchun ishlatiladi?",
    variantlar: [
      "Ma’lumotlarni uzoq muddat saqlash",
      "Faqat ma’lumotlarni kiritish",
      "Faqat ma’lumotlarni chop etish",
      "Faqat internetga ulanish"
    ],
    javob: "Ma’lumotlarni uzoq muddat saqlash"
  },
  {
    savol: "Web-kamera qaysi turga kiradi?",
    variantlar: [
      "Kiritish qurilmasi",
      "Chiqarish qurilmasi",
      "Tashqi xotira",
      "Protsessor"
    ],
    javob: "Kiritish qurilmasi"
  },
  {
    savol: "Proyektor qaysi turdagi qurilma?",
    variantlar: [
      "Chiqarish qurilmasi",
      "Kiritish qurilmasi",
      "Tashqi xotira",
      "Protsessor"
    ],
    javob: "Chiqarish qurilmasi"
  },
  {
    savol: "Mikrofon qaysi turga kiradi?",
    variantlar: [
      "Kiritish qurilmasi",
      "Chiqarish qurilmasi",
      "Tashqi xotira",
      "Protsessor"
    ],
    javob: "Kiritish qurilmasi"
  },
  {
    savol: "Qattiq disk nima vazifani bajaradi?",
    variantlar: [
      "Ma’lumotlarni uzoq muddat saqlash",
      "Ma’lumotlarni chop etish",
      "Ma’lumotlarni internetga uzatish",
      "Kiritish vazifasi"
    ],
    javob: "Ma’lumotlarni uzoq muddat saqlash"
  },
  {
    savol: "Tashqi yordamchi qurilmalar nimani ta’minlaydi?",
    variantlar: [
      "Kompyuterning asosiy funksiyalarini kengaytirish va qulay ishlashini",
      "Faqat internetga ulanish",
      "Faqat ma’lumotlarni chop qilish",
      "Faqat ish tezligini oshirish"
    ],
    javob: "Kompyuterning asosiy funksiyalarini kengaytirish va qulay ishlashini"
  },
  {
    savol: "Kiritish va chiqarish qurilmalari qanday ishlaydi?",
    variantlar: [
      "Ma’lumotlarni kompyuterga kiritadi va chiqaradi",
      "Faqat ma’lumotlarni saqlaydi",
      "Faqat internetga uzatadi",
      "Faqat protsessor bilan bog‘lanadi"
    ],
    javob: "Ma’lumotlarni kompyuterga kiritadi va chiqaradi"
  },
  {
    savol: "Chiqarish qurilmalari nima uchun zarur?",
    variantlar: [
      "Kompyuterdagi ma’lumotni inson uchun tushunarli shaklga chiqarish",
      "Ma’lumotlarni kompyuterga kiritish",
      "Ma’lumotlarni saqlash",
      "Internetga ulanish"
    ],
    javob: "Kompyuterdagi ma’lumotni inson uchun tushunarli shaklga chiqarish"
  },
  {
    savol: "Fleshka va qattiq diskni qaysi turdagi qurilma bilan solishtirish mumkin?",
    variantlar: [
      "Tashqi xotira qurilmalari",
      "Kiritish qurilmalari",
      "Chiqarish qurilmalari",
      "Protsessorlar"
    ],
    javob: "Tashqi xotira qurilmalari"
  },
  {
    savol: "Klaviatura va sichqoncha nima vazifani bajaradi?",
    variantlar: [
      "Ma’lumotlarni kompyuterga kiritish",
      "Ma’lumotlarni chop etish",
      "Ma’lumotlarni uzoq muddat saqlash",
      "Internetga ulanish"
    ],
    javob: "Ma’lumotlarni kompyuterga kiritish"
  }
],





theme2: [
  {
    savol: "Kompyuter turlari qanday asosiy guruhlarga bo‘linadi?",
    variantlar: [
      "Shaxsiy (PC), noutbuk, server, superkompyuter",
      "Faqat shaxsiy va internet",
      "Faqat mobil va planshet",
      "Faqat ofis va uy kompyuteri"
    ],
    javob: "Shaxsiy (PC), noutbuk, server, superkompyuter"
  },
  {
    savol: "Shaxsiy kompyuterning asosiy vazifasi nima?",
    variantlar: [
      "Shaxsiy ishlash va ma’lumotlarni qayta ishlash",
      "Faqat internetga ulanish",
      "Faqat ma’lumotlarni chop etish",
      "Faqat o‘yin o‘ynash"
    ],
    javob: "Shaxsiy ishlash va ma’lumotlarni qayta ishlash"
  },
  {
    savol: "Noutbukning asosiy afzalligi nima?",
    variantlar: [
      "Portativlik va qulay ko‘chirish imkoniyati",
      "Faqat yuqori tezlik",
      "Faqat katta ekran",
      "Faqat server vazifasi"
    ],
    javob: "Portativlik va qulay ko‘chirish imkoniyati"
  },
  {
    savol: "Superkompyuter nima uchun ishlatiladi?",
    variantlar: [
      "Katta hajmdagi hisob-kitob va ilmiy tadqiqotlar uchun",
      "Faqat o‘yin o‘ynash uchun",
      "Faqat internetga ulanish uchun",
      "Faqat matn yozish uchun"
    ],
    javob: "Katta hajmdagi hisob-kitob va ilmiy tadqiqotlar uchun"
  },
  {
    savol: "Server kompyuterning vazifasi nima?",
    variantlar: [
      "Tarmoq orqali ma’lumotlarni saqlash va tarqatish",
      "Faqat o‘yin o‘ynash",
      "Faqat matn tahrirlash",
      "Faqat internetga ulanish"
    ],
    javob: "Tarmoq orqali ma’lumotlarni saqlash va tarqatish"
  },
  {
    savol: "Kompyuter turlari qaysi mezon bo‘yicha farqlanadi?",
    variantlar: [
      "Maqsad, tezlik, quvvat va ko‘lam bo‘yicha",
      "Faqat narx bo‘yicha",
      "Faqat dizayn bo‘yicha",
      "Faqat internet tezligi bo‘yicha"
    ],
    javob: "Maqsad, tezlik, quvvat va ko‘lam bo‘yicha"
  },
  {
    savol: "Planshet kompyuteri qaysi turga kiradi?",
    variantlar: [
      "Shaxsiy portativ kompyuter",
      "Server",
      "Superkompyuter",
      "Asosiy kompyuter"
    ],
    javob: "Shaxsiy portativ kompyuter"
  },
  {
    savol: "Stol usti kompyuteri (desktop) nima uchun ishlatiladi?",
    variantlar: [
      "Uydagi yoki ofisdagi keng qamrovli ishlarga",
      "Faqat ko‘chma ishlarga",
      "Faqat o‘yin o‘ynashga",
      "Faqat internetga ulanishga"
    ],
    javob: "Uydagi yoki ofisdagi keng qamrovli ishlarga"
  },
  {
    savol: "Kompyuterlarni ishlash tezligiga qarab qanday guruhlarga bo‘lish mumkin?",
    variantlar: [
      "Shaxsiy, minikompyuter, superkompyuter, mega kompyuter",
      "Faqat tez va sekin",
      "Faqat mobil va ofis",
      "Faqat o‘yin va ish"
    ],
    javob: "Shaxsiy, minikompyuter, superkompyuter, mega kompyuter"
  },
  {
    savol: "Kompyuter turlari qaysi mezon bo‘yicha farqlanadi?",
    variantlar: [
      "Ishlash tezligi, xotira hajmi va quvvatga qarab",
      "Faqat ekran o‘lchami bo‘yicha",
      "Faqat narx bo‘yicha",
      "Faqat tashqi dizayn bo‘yicha"
    ],
    javob: "Ishlash tezligi, xotira hajmi va quvvatga qarab"
  },
  {
    savol: "Server kompyuterlar ko‘pincha qayerda ishlatiladi?",
    variantlar: [
      "Korporativ tarmoqlar va ma’lumot markazlarida",
      "Faqat uyda",
      "Faqat o‘yin markazlarida",
      "Faqat matn tahririda"
    ],
    javob: "Korporativ tarmoqlar va ma’lumot markazlarida"
  },
  {
    savol: "Superkompyuterning asosiy xususiyati nima?",
    variantlar: [
      "Tezlik va katta hajmdagi hisoblash quvvati",
      "Portativlik",
      "Kam energiya sarfi",
      "Kichik o‘lcham"
    ],
    javob: "Tezlik va katta hajmdagi hisoblash quvvati"
  },
  {
    savol: "Shaxsiy kompyuterlar qayerda ishlatiladi?",
    variantlar: [
      "Uyda, ofisda va ta’lim muassasalarida",
      "Faqat laboratoriyada",
      "Faqat superkompyuterlar bilan",
      "Faqat server markazida"
    ],
    javob: "Uyda, ofisda va ta’lim muassasalarida"
  },
  {
    savol: "Mobil kompyuterlar qaysi turga kiradi?",
    variantlar: [
      "Portativ kompyuterlar",
      "Serverlar",
      "Superkompyuterlar",
      "Mega kompyuterlar"
    ],
    javob: "Portativ kompyuterlar"
  },
  {
    savol: "Kompyuter turlarini ishlash maydoni bo‘yicha qanday guruhga ajratish mumkin?",
    variantlar: [
      "Shaxsiy, ilmiy, korporativ, sanoat",
      "Faqat internet va o‘yin",
      "Faqat matn va grafik",
      "Faqat tarmoq va mobil"
    ],
    javob: "Shaxsiy, ilmiy, korporativ, sanoat"
  },
  {
    savol: "Superkompyuterlar ko‘pincha qaysi sohalarda ishlatiladi?",
    variantlar: [
      "Ilmiy tadqiqotlar, aerokosmik hisob-kitoblar, iqlim modellashtirish",
      "Faqat internet ishlari",
      "Faqat o‘yin markazlarida",
      "Faqat ofis ishlarida"
    ],
    javob: "Ilmiy tadqiqotlar, aerokosmik hisob-kitoblar, iqlim modellashtirish"
  },
  {
    savol: "Kompyuter turlarining asosiy mezoni nima?",
    variantlar: [
      "Ishlash maqsadi, tezligi, quvvati va o‘lchami",
      "Faqat narxi",
      "Faqat dizayni",
      "Faqat internet tezligi"
    ],
    javob: "Ishlash maqsadi, tezligi, quvvati va o‘lchami"
  },
  {
    savol: "Noutbuk va planshetning asosiy farqi nima?",
    variantlar: [
      "Planshet sensorli ekran bilan ishlaydi, noutbuk klaviatura bilan",
      "Noutbuk internetga ulangan, planshet ulangan emas",
      "Noutbuk tezroq, planshet sekinroq",
      "Planshet faqat o‘yin uchun"
    ],
    javob: "Planshet sensorli ekran bilan ishlaydi, noutbuk klaviatura bilan"
  },
  {
    savol: "Shaxsiy kompyuterlarning ko‘p ishlatilish sababi nima?",
    variantlar: [
      "Qulayligi, nisbatan arzonligi va ko‘p turdagi dasturlarni ishlata olishi",
      "Faqat tezligi uchun",
      "Faqat ekran o‘lchami uchun",
      "Faqat internet tezligi uchun"
    ],
    javob: "Qulayligi, nisbatan arzonligi va ko‘p turdagi dasturlarni ishlata olishi"
  },
  {
    savol: "Server kompyuterning asosiy afzalligi nima?",
    variantlar: [
      "Tarmoqdagi ma’lumotlarni markazlashgan boshqarish",
      "Faqat o‘yin o‘ynash",
      "Faqat matn tahrir qilish",
      "Faqat internet tezligini oshirish"
    ],
    javob: "Tarmoqdagi ma’lumotlarni markazlashgan boshqarish"
  }
],






theme3: [
  {
    savol: "C diski kompyuterda nima uchun ishlatiladi?",
    variantlar: [
      "Operatsion tizim va dasturlarni o‘rnatish uchun",
      "Ma’lumotlarni saqlash uchun",
      "Faqat internet fayllari uchun",
      "Faqat o‘yin fayllari uchun"
    ],
    javob: "Operatsion tizim va dasturlarni o‘rnatish uchun"
  },
  {
    savol: "D diski odatda nima uchun ishlatiladi?",
    variantlar: [
      "Fayllarni, hujjatlarni va media ma’lumotlarini saqlash uchun",
      "Operatsion tizim o‘rnatish uchun",
      "Kompyuterni ishga tushirish uchun",
      "Dasturlarni o‘rnatish uchun"
    ],
    javob: "Fayllarni, hujjatlarni va media ma’lumotlarini saqlash uchun"
  },
  {
    savol: "C va D disklar qaysi turdagi qurilmada mavjud?",
    variantlar: [
      "Qattiq disk (HDD) yoki SSD",
      "Monitor",
      "Printer",
      "Kiritish qurilmasi"
    ],
    javob: "Qattiq disk (HDD) yoki SSD"
  },
  {
    savol: "C diskini to‘ldirib yuborsa, nima sodir bo‘ladi?",
    variantlar: [
      "Operatsion tizim ishlashida muammolar paydo bo‘ladi",
      "Ma’lumotlar yo‘qoladi",
      "Internet ishlamay qoladi",
      "Monitor ishlamay qoladi"
    ],
    javob: "Operatsion tizim ishlashida muammolar paydo bo‘ladi"
  },
  {
    savol: "D diskini to‘ldirib yuborsa, nima sodir bo‘ladi?",
    variantlar: [
      "Fayllarni saqlash imkoniyati kamayadi",
      "Operatsion tizim ishlamay qoladi",
      "Kompyuter o‘chadi",
      "Internet ishlamay qoladi"
    ],
    javob: "Fayllarni saqlash imkoniyati kamayadi"
  },
  {
    savol: "C diskida nima saqlanishi kerak emas?",
    variantlar: [
      "Katta hajmdagi shaxsiy fayllar",
      "Operatsion tizim fayllari",
      "Dastur fayllari",
      "Tizim kutubxonalari"
    ],
    javob: "Katta hajmdagi shaxsiy fayllar"
  },
  {
    savol: "D diskini bo‘shatishning asosiy usuli nima?",
    variantlar: [
      "Fayllarni boshqa joyga ko‘chirish yoki o‘chirish",
      "Operatsion tizimni qayta o‘rnatish",
      "Dasturlarni yangilash",
      "Kompyuterni qayta ishga tushirish"
    ],
    javob: "Fayllarni boshqa joyga ko‘chirish yoki o‘chirish"
  },
  {
    savol: "C diskini defragmentatsiya qilish nima uchun kerak?",
    variantlar: [
      "Operatsion tizimning tez ishlashini ta’minlash uchun",
      "Ma’lumotlarni yo‘qotish uchun",
      "Internet tezligini oshirish uchun",
      "Printer ishlashini yaxshilash uchun"
    ],
    javob: "Operatsion tizimning tez ishlashini ta’minlash uchun"
  },
  {
    savol: "D diskini defragmentatsiya qilish nima uchun foydali?",
    variantlar: [
      "Fayllarga tezroq kirish imkonini beradi",
      "Operatsion tizimni o‘rnatadi",
      "Internet tezligini oshiradi",
      "Kompyuterni o‘chiradi"
    ],
    javob: "Fayllarga tezroq kirish imkonini beradi"
  },
  {
    savol: "C diskining o‘lchami odatda D diskidan qanday farq qiladi?",
    variantlar: [
      "C disk kichikroq, D disk katta hajmga ega bo‘ladi",
      "C disk kattaroq, D disk kichikroq bo‘ladi",
      "Ikkalasi ham har doim bir xil hajmga ega",
      "Faqat SSD da farq bor"
    ],
    javob: "C disk kichikroq, D disk katta hajmga ega bo‘ladi"
  },
  {
    savol: "C va D disklarni nomlash nimaga yordam beradi?",
    variantlar: [
      "Fayllarni tartibli saqlash va tizimni boshqarish",
      "Internet tezligini oshirish",
      "Printer bilan bog‘lash",
      "Kompyuterni tezlashtirish"
    ],
    javob: "Fayllarni tartibli saqlash va tizimni boshqarish"
  },
  {
    savol: "C diskini haddan tashqari to‘ldirish qaysi muammoga olib keladi?",
    variantlar: [
      "Kompyuter sekin ishlaydi va dasturlar xatolik beradi",
      "Fayllar avtomatik o‘chadi",
      "Internet ishlamay qoladi",
      "Monitor o‘chadi"
    ],
    javob: "Kompyuter sekin ishlaydi va dasturlar xatolik beradi"
  },
  {
    savol: "D diskida saqlash uchun nimalar mos keladi?",
    variantlar: [
      "Hujjatlar, rasm, video va boshqa shaxsiy fayllar",
      "Operatsion tizim fayllari",
      "Dastur o‘rnatish fayllari",
      "Tizim kutubxonalari"
    ],
    javob: "Hujjatlar, rasm, video va boshqa shaxsiy fayllar"
  },
  {
    savol: "C diskida qaysi turdagi fayllarni ko‘proq saqlash tavsiya etiladi?",
    variantlar: [
      "Tizim va dastur fayllari",
      "Shaxsiy fayllar",
      "Video va musiqa fayllari",
      "Arxiv fayllari"
    ],
    javob: "Tizim va dastur fayllari"
  },
  {
    savol: "D diskini ko‘pincha qaysi holatda bo‘shatish kerak?",
    variantlar: [
      "Shaxsiy fayllar ko‘p bo‘lganda",
      "Operatsion tizim ishlamay qolganda",
      "Dasturlar o‘rnatilmay qolganda",
      "Monitor ishlamay qolganda"
    ],
    javob: "Shaxsiy fayllar ko‘p bo‘lganda"
  },
  {
    savol: "C diskidagi dasturlarni D diskiga ko‘chirish mumkinmi?",
    variantlar: [
      "Ba’zi dasturlarni, ammo tizim fayllarini emas",
      "Hammasini ko‘chirsa bo‘ladi",
      "Hech narsani ko‘chirish mumkin emas",
      "Faqat operatsion tizimni ko‘chirish mumkin"
    ],
    javob: "Ba’zi dasturlarni, ammo tizim fayllarini emas"
  },
  {
    savol: "C va D disklarni himoya qilish nima uchun muhim?",
    variantlar: [
      "Ma’lumotlarni yo‘qotishdan va tizim xatolaridan saqlash uchun",
      "Internet tezligini oshirish uchun",
      "Printer ishlashini yaxshilash uchun",
      "Monitor sifatini oshirish uchun"
    ],
    javob: "Ma’lumotlarni yo‘qotishdan va tizim xatolaridan saqlash uchun"
  },
  {
    savol: "C va D disklarni bo‘lishning asosiy maqsadi nima?",
    variantlar: [
      "Tizim fayllari va shaxsiy fayllarni ajratish",
      "Faqat tezlikni oshirish",
      "Faqat internet ishlashini yaxshilash",
      "Faqat dastur o‘rnatishni boshqarish"
    ],
    javob: "Tizim fayllari va shaxsiy fayllarni ajratish"
  },
  {
    savol: "D diskida katta hajmdagi fayllarni saqlashning afzalligi nima?",
    variantlar: [
      "C diskini to‘ldirmasdan saqlash imkoniyati",
      "Operatsion tizim tezligini oshirish",
      "Dastur o‘rnatishni osonlashtirish",
      "Internet tezligini oshirish"
    ],
    javob: "C diskini to‘ldirmasdan saqlash imkoniyati"
  },
  {
    savol: "C va D disklar kompyuterda qaysi qurilma orqali mavjud bo‘ladi?",
    variantlar: [
      "Qattiq disk (HDD) yoki SSD orqali",
      "Monitor orqali",
      "Printer orqali",
      "Klaviatura orqali"
    ],
    javob: "Qattiq disk (HDD) yoki SSD orqali"
  }
],






theme4: [
  {
    savol: "Kompyuter tizimi nima?",
    variantlar: [
      "Ma’lumotlarni qabul qilish, saqlash, qayta ishlash va chiqarish uchun mo‘ljallangan qurilmalar majmui",
      "Faqat internet ishlashi uchun qurilma",
      "Faqat o‘yin o‘ynash uchun qurilma",
      "Faqat fayllarni saqlash uchun qurilma"
    ],
    javob: "Ma’lumotlarni qabul qilish, saqlash, qayta ishlash va chiqarish uchun mo‘ljallangan qurilmalar majmui"
  },
  {
    savol: "Kompyuter tizimining asosiy komponentlari qaysilar?",
    variantlar: [
      "Kiritish qurilmalari, chiqarish qurilmalari, markaziy protsessor, xotira, dasturiy ta’minot",
      "Faqat monitor va klaviatura",
      "Faqat printer va internet",
      "Faqat server va mobil qurilmalar"
    ],
    javob: "Kiritish qurilmalari, chiqarish qurilmalari, markaziy protsessor, xotira, dasturiy ta’minot"
  },
  {
    savol: "Kompyuter tizimining kiritish qurilmalari nima uchun ishlatiladi?",
    variantlar: [
      "Ma’lumotlarni tizimga kiritish uchun",
      "Ma’lumotlarni chiqarish uchun",
      "Tizimni tezlashtirish uchun",
      "Internet tezligini oshirish uchun"
    ],
    javob: "Ma’lumotlarni tizimga kiritish uchun"
  },
  {
    savol: "Kompyuter tizimining chiqarish qurilmalari qaysilar?",
    variantlar: [
      "Monitor, printer, proyektor",
      "Klaviatura, sichqoncha",
      "Qattiq disk, SSD",
      "Router, modem"
    ],
    javob: "Monitor, printer, proyektor"
  },
  {
    savol: "Markaziy protsessor (CPU) nima qiladi?",
    variantlar: [
      "Ma’lumotlarni qayta ishlaydi va hisob-kitoblarni bajaradi",
      "Fayllarni saqlaydi",
      "Internet tezligini oshiradi",
      "Printer bilan ishlaydi"
    ],
    javob: "Ma’lumotlarni qayta ishlaydi va hisob-kitoblarni bajaradi"
  },
  {
    savol: "Kompyuter tizimining asosiy turlari qaysilar?",
    variantlar: [
      "Shaxsiy kompyuter, server, superkompyuter, noutbuk",
      "Faqat mobil va planshet",
      "Faqat ofis va uy kompyuteri",
      "Faqat internet va o‘yin kompyuteri"
    ],
    javob: "Shaxsiy kompyuter, server, superkompyuter, noutbuk"
  },
  {
    savol: "RAM nima vazifani bajaradi?",
    variantlar: [
      "Ma’lumotlarni vaqtincha saqlash va tezkor ishlashni ta’minlash",
      "Operatsion tizimni o‘rnatish",
      "Fayllarni doimiy saqlash",
      "Printer ishlashini boshqarish"
    ],
    javob: "Ma’lumotlarni vaqtincha saqlash va tezkor ishlashni ta’minlash"
  },
  {
    savol: "ROM nima vazifani bajaradi?",
    variantlar: [
      "Doimiy ma’lumotlarni saqlash, operatsion tizim boshlanishi uchun",
      "Vaqtincha fayllarni saqlash",
      "Internet tezligini oshirish",
      "Monitor sifatini boshqarish"
    ],
    javob: "Doimiy ma’lumotlarni saqlash, operatsion tizim boshlanishi uchun"
  },
  {
    savol: "Qattiq disk (HDD) va SSD nima uchun ishlatiladi?",
    variantlar: [
      "Ma’lumotlarni uzoq muddatli saqlash uchun",
      "Operatsion tizimni tezlashtirish uchun",
      "Internet tezligini oshirish uchun",
      "Printer bilan ishlash uchun"
    ],
    javob: "Ma’lumotlarni uzoq muddatli saqlash uchun"
  },
  {
    savol: "Kompyuter tizimida tashqi qurilmalar qaysilar?",
    variantlar: [
      "Printer, scanner, modem, proyektor",
      "RAM va ROM",
      "CPU va chipset",
      "Monitorning ichki komponentlari"
    ],
    javob: "Printer, scanner, modem, proyektor"
  },
  {
    savol: "Kiritish qurilmalari qaysi vazifani bajaradi?",
    variantlar: [
      "Foydalanuvchi tomonidan ma’lumot kiritish",
      "Ma’lumotlarni chiqarish",
      "Ma’lumotlarni saqlash",
      "Internet tezligini oshirish"
    ],
    javob: "Foydalanuvchi tomonidan ma’lumot kiritish"
  },
  {
    savol: "Kompyuter tizimining dasturiy ta’minoti nima vazifani bajaradi?",
    variantlar: [
      "Kompyuterning ishlashini boshqarish va foydalanuvchi bilan o‘zaro ishlashni ta’minlash",
      "Ma’lumotlarni doimiy saqlash",
      "Internet tezligini oshirish",
      "Printer sifatini yaxshilash"
    ],
    javob: "Kompyuterning ishlashini boshqarish va foydalanuvchi bilan o‘zaro ishlashni ta’minlash"
  },
  {
    savol: "Server kompyuter tizimi nima vazifani bajaradi?",
    variantlar: [
      "Tarmoq orqali ma’lumotlarni saqlash va tarqatish",
      "Faqat o‘yin o‘ynash",
      "Faqat matn tahrir qilish",
      "Faqat internet tezligini oshirish"
    ],
    javob: "Tarmoq orqali ma’lumotlarni saqlash va tarqatish"
  },
  {
    savol: "Superkompyuter qaysi sohalarda ishlatiladi?",
    variantlar: [
      "Ilmiy tadqiqotlar, aerokosmik hisob-kitoblar, iqlim modellashtirish",
      "Faqat o‘yinlar",
      "Faqat internet serverlari",
      "Faqat ofis ishlari"
    ],
    javob: "Ilmiy tadqiqotlar, aerokosmik hisob-kitoblar, iqlim modellashtirish"
  },
  {
    savol: "Kompyuter tizimining ichki komponentlariga nimalar kiradi?",
    variantlar: [
      "CPU, RAM, ROM, qattiq disk, anakart",
      "Monitor va printer",
      "Klaviatura va sichqoncha",
      "Proyektor va scanner"
    ],
    javob: "CPU, RAM, ROM, qattiq disk, anakart"
  },
  {
    savol: "Tashqi komponentlar nima uchun muhim?",
    variantlar: [
      "Foydalanuvchi bilan o‘zaro ishlashni ta’minlash va ma’lumotlarni chiqarish",
      "Fayllarni tezkor saqlash",
      "Operatsion tizimni o‘rnatish",
      "CPU ishlashini tezlashtirish"
    ],
    javob: "Foydalanuvchi bilan o‘zaro ishlashni ta’minlash va ma’lumotlarni chiqarish"
  },
  {
    savol: "Kompyuter tizimining maqsadi nima?",
    variantlar: [
      "Ma’lumotlarni qayta ishlash, saqlash va foydalanuvchiga chiqarish",
      "Faqat internetga ulanish",
      "Faqat o‘yin o‘ynash",
      "Faqat matn tahrir qilish"
    ],
    javob: "Ma’lumotlarni qayta ishlash, saqlash va foydalanuvchiga chiqarish"
  },
  {
    savol: "Kompyuter tizimi turlarini tanlash nimaga bog‘liq?",
    variantlar: [
      "Ishlash maqsadi, tezlik, quvvat va ko‘lamga",
      "Faqat dizayn va rangga",
      "Faqat narxga",
      "Faqat internet tezligiga"
    ],
    javob: "Ishlash maqsadi, tezlik, quvvat va ko‘lamga"
  },
  {
    savol: "Noutbuk kompyuter tizimi qaysi turga kiradi?",
    variantlar: [
      "Shaxsiy portativ kompyuter",
      "Server",
      "Superkompyuter",
      "Mega kompyuter"
    ],
    javob: "Shaxsiy portativ kompyuter"
  },
  {
    savol: "Kompyuter tizimi ishlashini boshqaradigan asosiy dastur nima?",
    variantlar: [
      "Operatsion tizim",
      "Ofis dasturi",
      "Internet brauzer",
      "Video pleer"
    ],
    javob: "Operatsion tizim"
  }
],








theme5: [
  {
    savol: "Xotira qurilmalari nima vazifani bajaradi?",
    variantlar: [
      "Ma’lumotlarni saqlash va qayta ishlash uchun",
      "Internet tezligini oshirish uchun",
      "Fayllarni chiqarish uchun",
      "Printer ishlashini boshqarish uchun"
    ],
    javob: "Ma’lumotlarni saqlash va qayta ishlash uchun"
  },
  {
    savol: "Kompyuterning tezkor xotirasi nima deb ataladi?",
    variantlar: ["RAM", "ROM", "HDD", "Flash disk"],
    javob: "RAM"
  },
  {
    savol: "Doimiy saqlash uchun ishlatiladigan qurilmalar qaysilar?",
    variantlar: ["HDD, SSD, CD, DVD", "RAM va Cache", "Monitor va Printer", "Klaviatura va sichqoncha"],
    javob: "HDD, SSD, CD, DVD"
  },
  {
    savol: "USB flesh disk qaysi turdagi xotira hisoblanadi?",
    variantlar: ["Portativ doimiy xotira", "Tezkor xotira", "Ichki xotira", "Cache"],
    javob: "Portativ doimiy xotira"
  },
  {
    savol: "ROM nima vazifani bajaradi?",
    variantlar: ["Doimiy ma’lumotlarni saqlash", "Vaqtincha fayllarni saqlash", "Internet tezligini oshirish", "Printer sifatini boshqarish"],
    javob: "Doimiy ma’lumotlarni saqlash"
  },
  {
    savol: "Ma’lumot almashish vositalari nima uchun ishlatiladi?",
    variantlar: [
      "Ma’lumotlarni kompyuterlar yoki qurilmalar orasida uzatish uchun",
      "Ma’lumotlarni tezkor saqlash uchun",
      "Tizim ishini tezlashtirish uchun",
      "Printer sifatini oshirish uchun"
    ],
    javob: "Ma’lumotlarni kompyuterlar yoki qurilmalar orasida uzatish uchun"
  },
  {
    savol: "Kompyuterlar orasida ma’lumot uzatishning eng tezkor vositasi qaysi?",
    variantlar: ["LAN (mahalliy tarmoq)", "HDD", "ROM", "CD-ROM"],
    javob: "LAN (mahalliy tarmoq)"
  },
  {
    savol: "Internet orqali ma’lumot almashish qaysi turga kiradi?",
    variantlar: ["Uzoq masofali ma’lumot almashish", "Ichki xotira", "Tezkor xotira", "Cache"],
    javob: "Uzoq masofali ma’lumot almashish"
  },
  {
    savol: "Cache xotira nima uchun ishlatiladi?",
    variantlar: [
      "Ma’lumotlarga tezkor kirish imkonini oshirish",
      "Doimiy saqlash uchun",
      "Tarmoq tezligini oshirish uchun",
      "Printerni boshqarish uchun"
    ],
    javob: "Ma’lumotlarga tezkor kirish imkonini oshirish"
  },
  {
    savol: "SSD qattiq diskdan qanday afzallikka ega?",
    variantlar: [
      "Tezkor ishlash va kamroq shovqin",
      "Ko‘proq ma’lumot saqlash",
      "Kamroq quvvat sarfi, lekin sekin ishlash",
      "Fayllarni faqat internetda saqlash"
    ],
    javob: "Tezkor ishlash va kamroq shovqin"
  },
  {
    savol: "CD va DVD qaysi turdagi xotira hisoblanadi?",
    variantlar: ["Optik doimiy xotira", "Tezkor xotira", "RAM", "Cache"],
    javob: "Optik doimiy xotira"
  },
  {
    savol: "Ma’lumot almashish vositalariga nimalar kiradi?",
    variantlar: ["Kabel, USB, tarmoq kartasi, Wi-Fi", "HDD, SSD", "RAM, ROM", "CPU, GPU"],
    javob: "Kabel, USB, tarmoq kartasi, Wi-Fi"
  },
  {
    savol: "Xotira qurilmalari qanday turlarga bo‘linadi?",
    variantlar: ["Tezkor (RAM), doimiy (HDD, SSD), optik (CD/DVD), portativ (Flash)", "Fayl va dastur", "Monitor va printer", "Klaviatura va sichqoncha"],
    javob: "Tezkor (RAM), doimiy (HDD, SSD), optik (CD/DVD), portativ (Flash)"
  },
  {
    savol: "RAM qachon ma’lumotni saqlay olmaydi?",
    variantlar: ["Kompyuter o‘chirilganda", "Fayl o‘chirganda", "Internet uzilganda", "Printer ishlamay qolganda"],
    javob: "Kompyuter o‘chirilganda"
  },
  {
    savol: "Ma’lumotlarni USB orqali uzatishning afzalligi nima?",
    variantlar: ["Portativ va oson ulanish", "Tezkor xotira bilan ishlash", "Operatsion tizimni tezlashtirish", "Printerni boshqarish"],
    javob: "Portativ va oson ulanish"
  },
  {
    savol: "Wi-Fi tarmog‘i qaysi turga kiradi?",
    variantlar: ["Simsiz ma’lumot almashish vositasi", "Tezkor xotira", "Doimiy xotira", "Cache"],
    javob: "Sim-siz ma’lumot almashish vositasi"
  },
  {
    savol: "HDD va SSD ma’lumotni qaysi asosda saqlaydi?",
    variantlar: ["Doimiy saqlash asosida", "Vaqtincha saqlash asosida", "Internet orqali saqlash", "Monitor orqali saqlash"],
    javob: "Doimiy saqlash asosida"
  },
  {
    savol: "Xotira qurilmasining tezligi nimaga bog‘liq?",
    variantlar: ["Texnologiya turi va interfeysga", "Monitor rangi va o‘lchami", "Printer turi", "Internet tezligi"],
    javob: "Texnologiya turi va interfeysga"
  },
  {
    savol: "Ma’lumot almashish vositalari qaysi qurilmalar orqali amalga oshadi?",
    variantlar: ["Kabel, USB, tarmoq adapteri, Wi-Fi moduli", "CPU, RAM, ROM", "HDD, SSD", "Monitor, printer"],
    javob: "Kabel, USB, tarmoq adapteri, Wi-Fi moduli"
  },
  {
    savol: "Portativ xotira qurilmalariga misol keltiring?",
    variantlar: ["USB flash disk, tashqi HDD, SD karta", "RAM, ROM", "CPU, GPU", "Monitor, proyektor"],
    javob: "USB flash disk, tashqi HDD, SD karta"
  }
],






theme6: [
  {
    savol: "Axborot texnologiyalari nima vazifani bajaradi?",
    variantlar: [
      "Ma’lumotlarni tezkor qayta ishlash va uzatish",
      "Faqat matn yozish",
      "Faqat o‘yin o‘ynash",
      "Faqat fayllarni saqlash"
    ],
    javob: "Ma’lumotlarni tezkor qayta ishlash va uzatish"
  },
  {
    savol: "Axborot texnologiyalarining jamiyatga ijobiy ta’siri nima?",
    variantlar: [
      "Ma’lumot almashish tezligini oshirish va samarali ishlash imkonini yaratadi",
      "Faqat dam olish imkonini oshiradi",
      "Faqat o‘yinlar bilan shug‘ullanishni kuchaytiradi",
      "Faqat matnlarni avtomatik yozadi"
    ],
    javob: "Ma’lumot almashish tezligini oshirish va samarali ishlash imkonini yaratadi"
  },
  {
    savol: "Axborot texnologiyalari ta’lim sohasida qanday yordam beradi?",
    variantlar: [
      "Online darslar va elektron resurslar orqali bilim olishni osonlashtiradi",
      "Faqat test yozishni osonlashtiradi",
      "Faqat kitoblarni ko‘paytiradi",
      "Faqat o‘quvchilarning uy vazifasini bajaradi"
    ],
    javob: "Online darslar va elektron resurslar orqali bilim olishni osonlashtiradi"
  },
  {
    savol: "Axborot texnologiyalarining salbiy ta’siri qaysi?",
    variantlar: [
      "Internetda noto‘g‘ri ma’lumotlar tarqalishi va vaqtni behuda sarflash",
      "Ma’lumot tezkor uzatiladi",
      "Xotira qurilmalari ishlaydi",
      "Kompyuter tezroq ishlaydi"
    ],
    javob: "Internetda noto‘g‘ri ma’lumotlar tarqalishi va vaqtni behuda sarflash"
  },
  {
    savol: "Axborot texnologiyalari ish faoliyatini qanday osonlashtiradi?",
    variantlar: [
      "Ma’lumotlarni tezkor qayta ishlash va saqlash orqali",
      "Fayllarni faqat chop etish orqali",
      "Faqat elektron pochta ishlatish orqali",
      "Faqat o‘yin o‘ynash orqali"
    ],
    javob: "Ma’lumotlarni tezkor qayta ishlash va saqlash orqali"
  },
  {
    savol: "Onlayn platformalarning ijobiy ta’siri nima?",
    variantlar: [
      "Uzoq masofadagi insonlar bilan tezkor muloqot va hamkorlik imkonini yaratadi",
      "Faqat o‘yin o‘ynash imkonini oshiradi",
      "Faqat kitob o‘qish imkonini beradi",
      "Faqat xotirani oshiradi"
    ],
    javob: "Uzoq masofadagi insonlar bilan tezkor muloqot va hamkorlik imkonini yaratadi"
  },
  {
    savol: "Axborot texnologiyalari sog‘liq uchun qanday salbiy ta’sir ko‘rsatishi mumkin?",
    variantlar: [
      "Ko‘z charchashi, orqa va bo‘yin og‘rig‘i, uzoq vaqt ekran qarash",
      "Ma’lumot tezroq saqlanadi",
      "Ish samaradorligi oshadi",
      "Kompyuter tezroq ishlaydi"
    ],
    javob: "Ko‘z charchashi, orqa va bo‘yin og‘rig‘i, uzoq vaqt ekran qarash"
  },
  {
    savol: "Axborot texnologiyalari biznes jarayonlarini qanday osonlashtiradi?",
    variantlar: [
      "Ma’lumotlarni tezkor saqlash, elektron to‘lovlar va marketing vositalari orqali",
      "Fayllarni chop etish orqali",
      "Faqat ishchilarni kuzatish orqali",
      "Faqat email jo‘natish orqali"
    ],
    javob: "Ma’lumotlarni tezkor saqlash, elektron to‘lovlar va marketing vositalari orqali"
  },
  {
    savol: "Axborot texnologiyalari ta’limda qanday vositalarni yaratadi?",
    variantlar: [
      "Virtual laboratoriyalar, onlayn kurslar, interaktiv darsliklar",
      "Faqat qog‘ozli kitoblar",
      "Faqat qoralama yozuvlar",
      "Faqat audio darslar"
    ],
    javob: "Virtual laboratoriyalar, onlayn kurslar, interaktiv darsliklar"
  },
  {
    savol: "Axborot texnologiyalarining kommunikatsiyaga ta’siri qanday?",
    variantlar: [
      "Tezkor muloqot va global tarmoqlar orqali doimiy aloqani ta’minlaydi",
      "Faqat telefon orqali muloqot qiladi",
      "Faqat xat yozadi",
      "Faqat matnli chat bilan ishlaydi"
    ],
    javob: "Tezkor muloqot va global tarmoqlar orqali doimiy aloqani ta’minlaydi"
  },
  {
    savol: "Axborot texnologiyalaridan foydalanish xavfsizligi nima uchun muhim?",
    variantlar: [
      "Shaxsiy ma’lumotlar va tizimlarni himoya qilish uchun",
      "Faqat kompyuter tezligini oshirish uchun",
      "Faqat internet tezligini oshirish uchun",
      "Faqat fayl o‘qishni tezlashtirish uchun"
    ],
    javob: "Shaxsiy ma’lumotlar va tizimlarni himoya qilish uchun"
  },
  {
    savol: "Tezkor axborot texnologiyalarining ijobiy ta’siri nima?",
    variantlar: [
      "Ma’lumotlarni bir zumda uzatish va tezkor qaror qabul qilish imkonini yaratadi",
      "Fayllarni faqat chop etish imkonini beradi",
      "Faqat xotirani oshiradi",
      "Faqat kitob o‘qishni osonlashtiradi"
    ],
    javob: "Ma’lumotlarni bir zumda uzatish va tezkor qaror qabul qilish imkonini yaratadi"
  },
  {
    savol: "Axborot texnologiyalari ish vaqti samaradorligini qanday oshiradi?",
    variantlar: [
      "Avtomatlashtirilgan jarayonlar va tezkor hisob-kitoblar orqali",
      "Faqat qo‘lda hisoblash orqali",
      "Faqat qog‘ozli hujjat orqali",
      "Faqat email jo‘natish orqali"
    ],
    javob: "Avtomatlashtirilgan jarayonlar va tezkor hisob-kitoblar orqali"
  },
  {
    savol: "Axborot texnologiyalarining salbiy ta’siri ijtimoiy sohada nimani keltirib chiqarishi mumkin?",
    variantlar: [
      "Ijtimoiy izolyatsiya va kam harakatlilik",
      "Doimiy aloqani oshirish",
      "Tezkor ish jarayoni",
      "Ma’lumotlarni tezkor saqlash"
    ],
    javob: "Ijtimoiy izolyatsiya va kam harakatlilik"
  },
  {
    savol: "Ma’lumotlarni axborot texnologiyalari orqali uzatishning afzalligi nima?",
    variantlar: [
      "Uzoq masofaga tezkor va samarali uzatish imkonini beradi",
      "Faqat qisqa masofaga uzatadi",
      "Faqat qog‘oz orqali uzatadi",
      "Faqat telefon orqali uzatadi"
    ],
    javob: "Uzoq masofaga tezkor va samarali uzatish imkonini beradi"
  },
  {
    savol: "Axborot texnologiyalarining tibbiyot sohasidagi foydasi nimada?",
    variantlar: [
      "Elektron sog‘liq kartalari va masofaviy maslahatlar orqali",
      "Faqat matnli hisobotlar",
      "Faqat qog‘ozli arxiv",
      "Faqat oddiy termometr ishlatish"
    ],
    javob: "Elektron sog‘liq kartalari va masofaviy maslahatlar orqali"
  },
  {
    savol: "Axborot texnologiyalari iqtisodiy sohada qanday yordam beradi?",
    variantlar: [
      "Elektron tijorat, moliyaviy hisobotlar va tezkor analiz orqali",
      "Faqat qog‘ozli hisob-kitob orqali",
      "Faqat marketing reklama bilan",
      "Faqat telefon orqali sotuv"
    ],
    javob: "Elektron tijorat, moliyaviy hisobotlar va tezkor analiz orqali"
  },
  {
    savol: "Axborot texnologiyalaridan foydalanish ijtimoiy hayotga qanday ta’sir ko‘rsatadi?",
    variantlar: [
      "Doimiy muloqot, ma’lumot almashish va global aloqani rivojlantiradi",
      "Faqat uyda qolishni oshiradi",
      "Faqat o‘yin o‘ynashni kuchaytiradi",
      "Faqat elektron pochta orqali ishlaydi"
    ],
    javob: "Doimiy muloqot, ma’lumot almashish va global aloqani rivojlantiradi"
  }
],






theme7: [
  {
    savol: "AKT nima vazifani bajaradi?",
    variantlar: [
      "Ma’lumotlarni tezkor qayta ishlash, saqlash va uzatish",
      "Faqat matn yozish",
      "Faqat o‘yin o‘ynash",
      "Faqat fayllarni chop etish"
    ],
    javob: "Ma’lumotlarni tezkor qayta ishlash, saqlash va uzatish"
  },
  {
    savol: "Ta’lim sohasida AKT qanday qo‘llaniladi?",
    variantlar: [
      "Elektron darsliklar, onlayn kurslar va virtual laboratoriyalar orqali",
      "Faqat qog‘ozli kitoblar bilan",
      "Faqat sinov testlari yozish orqali",
      "Faqat yozma ishlarni tekshirish orqali"
    ],
    javob: "Elektron darsliklar, onlayn kurslar va virtual laboratoriyalar orqali"
  },
  {
    savol: "Tibbiyotda AKT qanday foyda keltiradi?",
    variantlar: [
      "Elektron sog‘liq kartalari va masofaviy konsultatsiyalar orqali",
      "Faqat qog‘ozli arxiv orqali",
      "Faqat dorilarni kuzatish orqali",
      "Faqat laboratoriya ishlarini kuzatish orqali"
    ],
    javob: "Elektron sog‘liq kartalari va masofaviy konsultatsiyalar orqali"
  },
  {
    savol: "Biznes sohasida AKT qanday yordam beradi?",
    variantlar: [
      "Elektron tijorat, moliyaviy hisobotlar va marketing vositalari orqali",
      "Faqat telefon qo‘ng‘iroqlari orqali",
      "Faqat qog‘ozli hujjatlar orqali",
      "Faqat reklama plakatlari orqali"
    ],
    javob: "Elektron tijorat, moliyaviy hisobotlar va marketing vositalari orqali"
  },
  {
    savol: "AKTning qishloq xo‘jaligida qo‘llanilishi nimaga xizmat qiladi?",
    variantlar: [
      "Hosildorlikni monitoring qilish va resurslarni boshqarish",
      "Faqat urug‘larni saqlash",
      "Faqat fermerlar ishini kuzatish",
      "Faqat suvni taqsimlash"
    ],
    javob: "Hosildorlikni monitoring qilish va resurslarni boshqarish"
  },
  {
    savol: "Davlat boshqaruvida AKT qanday ishlatiladi?",
    variantlar: [
      "Elektron hukumat va ma’lumotlarni tezkor almashish",
      "Faqat qonunlarni chop etish",
      "Faqat xatlarni yuborish",
      "Faqat arxivni saqlash"
    ],
    javob: "Elektron hukumat va ma’lumotlarni tezkor almashish"
  },
  {
    savol: "Transport sohasida AKTning foydasi nimada?",
    variantlar: [
      "Yo‘l harakati monitoringi va transportni boshqarish",
      "Faqat avtomobil ishlab chiqarish",
      "Faqat yo‘l xaritasi chizish",
      "Faqat yo‘l belgilarini o‘rnatish"
    ],
    javob: "Yo‘l harakati monitoringi va transportni boshqarish"
  },
  {
    savol: "Sanoat sohasida AKT qaysi jarayonni yaxshilaydi?",
    variantlar: [
      "Avtomatlashtirilgan ishlab chiqarish va sifat nazorati",
      "Faqat ishchilarni kuzatish",
      "Faqat xomashyo sotib olish",
      "Faqat omborni boshqarish"
    ],
    javob: "Avtomatlashtirilgan ishlab chiqarish va sifat nazorati"
  },
  {
    savol: "Axborot texnologiyalarini sog‘liqni saqlashda joriy etishning afzalligi nima?",
    variantlar: [
      "Tezkor tashxis, davolash va masofaviy maslahatlar",
      "Faqat dorilarni kuzatish",
      "Faqat bemorlarni ro‘yxatdan o‘tkazish",
      "Faqat kasalxona xarajatlarini kamaytirish"
    ],
    javob: "Tezkor tashxis, davolash va masofaviy maslahatlar"
  },
  {
    savol: "Energetika sohasida AKT qanday yordam beradi?",
    variantlar: [
      "Energiya iste’molini monitoring qilish va samaradorlikni oshirish",
      "Faqat elektr tarmog‘ini qurish",
      "Faqat gaz quvurlarini tekshirish",
      "Faqat hisob-kitoblarni qog‘ozda yuritish"
    ],
    javob: "Energiya iste’molini monitoring qilish va samaradorlikni oshirish"
  },
  {
    savol: "Turizm sohasida AKT qanday qo‘llaniladi?",
    variantlar: [
      "Onlayn bron qilish, virtual sayohatlar va ma’lumotlarni uzatish",
      "Faqat qog‘ozli broshyuralar",
      "Faqat avtobus xaritalari",
      "Faqat mehmonxonani qurish"
    ],
    javob: "Onlayn bron qilish, virtual sayohatlar va ma’lumotlarni uzatish"
  },
  {
    savol: "AKT qishloq xo‘jaligida qanday resurslarni boshqaradi?",
    variantlar: [
      "Sug‘orish, o‘g‘itlash va hosildorlik monitoringi",
      "Faqat urug‘larni saqlash",
      "Faqat chorvachilikni kuzatish",
      "Faqat qishloq yo‘llarini qurish"
    ],
    javob: "Sug‘orish, o‘g‘itlash va hosildorlik monitoringi"
  },
  {
    savol: "Axborot tizimlari madaniyat va san’at sohasida qanday foyda keltiradi?",
    variantlar: [
      "Raqamli arxivlar, virtual ekskursiyalar va onlayn namoyishlar",
      "Faqat qog‘ozli kataloglar",
      "Faqat suratlarni ko‘rsatish",
      "Faqat teatrlarga chipta sotish"
    ],
    javob: "Raqamli arxivlar, virtual ekskursiyalar va onlayn namoyishlar"
  },
  {
    savol: "Sog‘liqni saqlashda masofaviy maslahatlar AKT orqali qanday amalga oshadi?",
    variantlar: [
      "Video qo‘ng‘iroq va elektron sog‘liq kartalari orqali",
      "Faqat telefon orqali",
      "Faqat qog‘ozli hisobot orqali",
      "Faqat bemorni klinikaga yuborish orqali"
    ],
    javob: "Video qo‘ng‘iroq va elektron sog‘liq kartalari orqali"
  },
  {
    savol: "Ta’limda virtual laboratoriyalar AKT orqali nima imkoniyat yaratadi?",
    variantlar: [
      "Uyda tajribalarni o‘tkazish va bilimlarni amalda mustahkamlash",
      "Faqat kitob o‘qish",
      "Faqat yozma ishlarni topshirish",
      "Faqat darsni yozib olish"
    ],
    javob: "Uyda tajribalarni o‘tkazish va bilimlarni amalda mustahkamlash"
  },
  {
    savol: "Transportda yo‘l harakati monitoringi AKT orqali qanday amalga oshadi?",
    variantlar: [
      "Sensorlar va GPS tizimlari orqali real vaqt kuzatuv",
      "Faqat yo‘l belgilari qo‘yish",
      "Faqat yo‘l xaritasi chizish",
      "Faqat yo‘l qurilishini kuzatish"
    ],
    javob: "Sensorlar va GPS tizimlari orqali real vaqt kuzatuv"
  },
  {
    savol: "Energetika tizimida samaradorlikni oshirish AKT orqali qanday bo‘ladi?",
    variantlar: [
      "Energiya iste’molini monitoring qilish va avtomatlashtirilgan boshqaruv orqali",
      "Faqat elektr tarmog‘ini qurish",
      "Faqat gaz quvurlarini tekshirish",
      "Faqat qog‘ozli hisob-kitob"
    ],
    javob: "Energiya iste’molini monitoring qilish va avtomatlashtirilgan boshqaruv orqali"
  },
  {
    savol: "AKT biznes jarayonlarini qanday tezlashtiradi?",
    variantlar: [
      "Avtomatlashtirilgan hisobotlar va elektron to‘lovlar orqali",
      "Faqat qog‘ozli hujjatlar bilan",
      "Faqat telefon orqali",
      "Faqat marketing reklama bilan"
    ],
    javob: "Avtomatlashtirilgan hisobotlar va elektron to‘lovlar orqali"
  },
  {
    savol: "AKTni sog‘liqni saqlashda joriy etish natijasi nima?",
    variantlar: [
      "Tezkor tashxis va masofaviy maslahatlar imkonini oshiradi",
      "Faqat dorilarni kuzatadi",
      "Faqat bemorlarni ro‘yxatdan o‘tkazadi",
      "Faqat klinika xarajatlarini kamaytiradi"
    ],
    javob: "Tezkor tashxis va masofaviy maslahatlar imkonini oshiradi"
  },
  {
    savol: "Turizm sohasida AKT qaysi jarayonni soddalashtiradi?",
    variantlar: [
      "Onlayn bron qilish va ma’lumot almashish",
      "Faqat mehmonxona qurish",
      "Faqat avtobus xaritalari",
      "Faqat qog‘ozli broshyuralar"
    ],
    javob: "Onlayn bron qilish va ma’lumot almashish"
  }
],








theme8: [
  {
    savol: "Tizimning xizmat davri nima?",
    variantlar: [
      "Tizim ishlash vaqti davomida samarali faoliyat ko‘rsatish muddati",
      "Faqat tizimning ishlash boshlanishi",
      "Faqat tizimni o‘rnatish vaqti",
      "Faqat tizimni yangilash vaqti"
    ],
    javob: "Tizim ishlash vaqti davomida samarali faoliyat ko‘rsatish muddati"
  },
  {
    savol: "Tizimning xizmat davrini belgilash nimaga yordam beradi?",
    variantlar: [
      "Texnik xizmat ko‘rsatish va resurslarni rejalashtirish",
      "Faqat tizimni o‘rnatishga",
      "Faqat foydalanuvchi ishini kuzatishga",
      "Faqat kompyuter tezligini oshirishga"
    ],
    javob: "Texnik xizmat ko‘rsatish va resurslarni rejalashtirish"
  },
  {
    savol: "Tizim xizmat davrini uzaytirish uchun nima qilish kerak?",
    variantlar: [
      "Doimiy texnik xizmat va yangilashlar",
      "Faqat tizimni tezroq ishlatish",
      "Faqat foydalanuvchi sonini kamaytirish",
      "Faqat tizimni o‘chirib qo‘yish"
    ],
    javob: "Doimiy texnik xizmat va yangilashlar"
  },
  {
    savol: "Tizimning xizmat davri tugagach nima qilinadi?",
    variantlar: [
      "Tizimni yangilash yoki almashtirish",
      "Faqat tizimni o‘chirish",
      "Faqat ishlashni davom ettirish",
      "Faqat foydalanuvchi ma’lumotlarini o‘chirish"
    ],
    javob: "Tizimni yangilash yoki almashtirish"
  },
  {
    savol: "Tizim xizmat davriga nimalar ta’sir qiladi?",
    variantlar: [
      "Texnik xizmat ko‘rsatish, foydalanish shartlari va yuklama",
      "Faqat foydalanuvchi soni",
      "Faqat tizim dasturi turi",
      "Faqat kompyuter markasi"
    ],
    javob: "Texnik xizmat ko‘rsatish, foydalanish shartlari va yuklama"
  },
  {
    savol: "Texnik xizmat tizimning xizmat davrini qanday oshiradi?",
    variantlar: [
      "Nosozliklarni vaqtida bartaraf etish orqali",
      "Faqat tizimni tezroq ishlatish orqali",
      "Faqat foydalanuvchini cheklash orqali",
      "Faqat tizimni yangilamasdan ishlatish orqali"
    ],
    javob: "Nosozliklarni vaqtida bartaraf etish orqali"
  },
  {
    savol: "Tizim xizmat davrini rejalashtirish nima uchun muhim?",
    variantlar: [
      "Resurslarni samarali boshqarish va xarajatlarni kamaytirish",
      "Faqat foydalanuvchilarni kuzatish uchun",
      "Faqat tizim tezligini oshirish uchun",
      "Faqat yangi dastur o‘rnatish uchun"
    ],
    javob: "Resurslarni samarali boshqarish va xarajatlarni kamaytirish"
  },
  {
    savol: "Tizimning xizmat davrini qisqartadigan omil nima bo‘lishi mumkin?",
    variantlar: [
      "Nosozliklar, haddan tashqari yuklama va noto‘g‘ri foydalanish",
      "Doimiy texnik xizmat",
      "Foydalanuvchi sonini kamaytirish",
      "Tizimni yangilash"
    ],
    javob: "Nosozliklar, haddan tashqari yuklama va noto‘g‘ri foydalanish"
  },
  {
    savol: "Tizim xizmat davri davomida nimani hisobga olish kerak?",
    variantlar: [
      "Texnik xizmat, yangilanish va yuklamani",
      "Faqat foydalanuvchi sonini",
      "Faqat dastur turini",
      "Faqat qurilma markasini"
    ],
    javob: "Texnik xizmat, yangilanish va yuklamani"
  },
  {
    savol: "Yangi tizimni joriy qilishda xizmat davrini qanday baholash mumkin?",
    variantlar: [
      "Texnik ko‘rsatkichlar va foydalanish shartlariga asoslanib",
      "Faqat ishlab chiqaruvchi kafolati bilan",
      "Faqat foydalanuvchi soni bilan",
      "Faqat dastur turi bilan"
    ],
    javob: "Texnik ko‘rsatkichlar va foydalanish shartlariga asoslanib"
  },
  {
    savol: "Tizimning xizmat davri tugashi natijasida nima yuz beradi?",
    variantlar: [
      "Nosozliklar ko‘payadi va samaradorlik pasayadi",
      "Tizim tezligi oshadi",
      "Foydalanuvchi soni kamayadi",
      "Dastur avtomatik yangilanadi"
    ],
    javob: "Nosozliklar ko‘payadi va samaradorlik pasayadi"
  },
  {
    savol: "Doimiy yangilanish tizim xizmat davriga qanday ta’sir qiladi?",
    variantlar: [
      "Uzoq muddat davomida samarali ishlashni ta’minlaydi",
      "Faqat ishlashni to‘xtatadi",
      "Faqat foydalanuvchini cheklaydi",
      "Faqat xarajatni oshiradi"
    ],
    javob: "Uzoq muddat davomida samarali ishlashni ta’minlaydi"
  },
  {
    savol: "Tizim xizmat davrini uzaytirish uchun eng samarali vosita nima?",
    variantlar: [
      "Texnik xizmat, yangilash va foydalanuvchi ko‘rsatmalariga rioya qilish",
      "Faqat tizimni tezroq ishlatish",
      "Faqat foydalanuvchi sonini kamaytirish",
      "Faqat qurilmani almashtirish"
    ],
    javob: "Texnik xizmat, yangilash va foydalanuvchi ko‘rsatmalariga rioya qilish"
  },
  {
    savol: "Nosozliklarni vaqtida bartaraf etish tizim xizmat davriga qanday ta’sir qiladi?",
    variantlar: [
      "Uzoq muddat samarali ishlashni ta’minlaydi",
      "Faqat tez ishlashni oshiradi",
      "Faqat foydalanuvchi sonini oshiradi",
      "Faqat xarajatni kamaytiradi"
    ],
    javob: "Uzoq muddat samarali ishlashni ta’minlaydi"
  },
  {
    savol: "Tizim xizmat davrini qisqartadigan noto‘g‘ri foydalanish nima?",
    variantlar: [
      "Ortiqcha yuklash, sharoitga mos kelmas ishlatish",
      "Faqat tizimni o‘chirish",
      "Faqat dastur yangilash",
      "Faqat foydalanuvchi sonini oshirish"
    ],
    javob: "Ortiqcha yuklash, sharoitga mos kelmas ishlatish"
  },
  {
    savol: "Tizim xizmat davri tugaganda nimani rejalashtirish muhim?",
    variantlar: [
      "Yangilash yoki almashtirish",
      "Faqat ishlashni davom ettirish",
      "Faqat foydalanuvchi sonini kamaytirish",
      "Faqat qurilmani o‘chirish"
    ],
    javob: "Yangilash yoki almashtirish"
  },
  {
    savol: "Tizim xizmat davrini baholashda qaysi omil muhim?",
    variantlar: [
      "Texnik ko‘rsatkichlar, ishlatilish shartlari va yuklama",
      "Faqat foydalanuvchi soni",
      "Faqat dastur turi",
      "Faqat qurilma markasi"
    ],
    javob: "Texnik ko‘rsatkichlar, ishlatilish shartlari va yuklama"
  },
  {
    savol: "Tizimning xizmat davri davomida foydalanuvchi nima qilishi kerak?",
    variantlar: [
      "Foydalanuvchi ko‘rsatmalariga rioya qilish va tizimni to‘g‘ri ishlatish",
      "Faqat tez ishlatish",
      "Faqat qurilmani almashtirish",
      "Faqat nosozlikni kutish"
    ],
    javob: "Foydalanuvchi ko‘rsatmalariga rioya qilish va tizimni to‘g‘ri ishlatish"
  },
  {
    savol: "Tizim xizmat davrini rejalashtirish natijasi nima?",
    variantlar: [
      "Samarali ishlash, xarajatni kamaytirish va nosozliklarni kamaytirish",
      "Faqat ish jarayonini tezlashtirish",
      "Faqat foydalanuvchi sonini oshirish",
      "Faqat dastur yangilanishini ta’minlash"
    ],
    javob: "Samarali ishlash, xarajatni kamaytirish va nosozliklarni kamaytirish"
  },
  {
    savol: "Texnik xizmat ko‘rsatmaslik tizim xizmat davriga qanday ta’sir qiladi?",
    variantlar: [
      "Nosozliklar tezroq yuz beradi va xizmat muddati qisqaradi",
      "Tizim samarali ishlaydi",
      "Faqat foydalanuvchi soni oshadi",
      "Faqat dastur tezligi oshadi"
    ],
    javob: "Nosozliklar tezroq yuz beradi va xizmat muddati qisqaradi"
  }
],







theme9: [
  {
    savol: "Xavfsizlik texnikasi qoidalari nima uchun zarur?",
    variantlar: [
      "Ish joyida va uyda jarohatlardan himoyalanish uchun",
      "Faqat ish tezligini oshirish uchun",
      "Faqat hujjatlarni tartibga solish uchun",
      "Faqat qurilmalarni tez ishlatish uchun"
    ],
    javob: "Ish joyida va uyda jarohatlardan himoyalanish uchun"
  },
  {
    savol: "Kompyuter bilan ishlashda xavfsizlikni qanday ta’minlash mumkin?",
    variantlar: [
      "Elektr toki va jihozlardan ehtiyotkorlik bilan foydalanish orqali",
      "Faqat tezroq ishlash orqali",
      "Faqat dastur o‘rnatish orqali",
      "Faqat foydalanuvchi sonini kamaytirish orqali"
    ],
    javob: "Elektr toki va jihozlardan ehtiyotkorlik bilan foydalanish orqali"
  },
  {
    savol: "Xavfsizlik qoidalariga rioya qilmaslik natijasi nima bo‘lishi mumkin?",
    variantlar: [
      "Jarohatlar yoki qurilmalar buzilishi",
      "Faqat ish tezligi oshadi",
      "Faqat foydalanuvchi soni oshadi",
      "Faqat hujjatlarning noto‘g‘ri bo‘lishi"
    ],
    javob: "Jarohatlar yoki qurilmalar buzilishi"
  },
  {
    savol: "Elektr jihozlari bilan ishlashda qanday ehtiyot choralari kerak?",
    variantlar: [
      "Qurilma o‘chirilgan holda ishlash, qurilmalarni to‘g‘ri ulash",
      "Faqat tezroq ishlatish",
      "Faqat internetdan foydalanish",
      "Faqat foydalanuvchi sonini oshirish"
    ],
    javob: "Qurilma o‘chirilgan holda ishlash, qurilmalarni to‘g‘ri ulash"
  },
  {
    savol: "Xavfsizlik ko‘zoynaklari qachon ishlatiladi?",
    variantlar: [
      "Laboratoriya va texnik ishlar vaqtida ko‘zlarni himoya qilish uchun",
      "Faqat kompyuterda ishlaganda",
      "Faqat dars kitoblarini o‘qishda",
      "Faqat telefon ishlatishda"
    ],
    javob: "Laboratoriya va texnik ishlar vaqtida ko‘zlarni himoya qilish uchun"
  },
  {
    savol: "Ish joyida xavfsizlik belgilariga e’tibor berish nima uchun kerak?",
    variantlar: [
      "Potentsial xavflardan xabardor bo‘lish uchun",
      "Faqat ish tezligini oshirish uchun",
      "Faqat ishchilar sonini nazorat qilish uchun",
      "Faqat hujjatlarni tartibga solish uchun"
    ],
    javob: "Potentsial xavflardan xabardor bo‘lish uchun"
  },
  {
    savol: "Qurilmalarni noto‘g‘ri ishlatish xavfi nima?",
    variantlar: [
      "Jarohat yoki qurilma buzilishi",
      "Faqat ishlash tezligi pasayadi",
      "Faqat foydalanuvchi soni oshadi",
      "Faqat kompyuter sekinlashadi"
    ],
    javob: "Jarohat yoki qurilma buzilishi"
  },
  {
    savol: "Yong‘in xavfsizligini ta’minlash uchun nima qilish kerak?",
    variantlar: [
      "Yong‘inga qarshi vositalardan foydalanish va xavfli materiallarni xavfsiz saqlash",
      "Faqat eshiklarni yopish",
      "Faqat elektrni o‘chirish",
      "Faqat telefon qo‘ng‘iroqlari orqali"
    ],
    javob: "Yong‘inga qarshi vositalardan foydalanish va xavfli materiallarni xavfsiz saqlash"
  },
  {
    savol: "Elektr toki bilan ishlashda qanday kiyim kiyish tavsiya etiladi?",
    variantlar: [
      "Izolyatsiyalangan va quruq kiyim",
      "Nam kiyim",
      "Faqat shippak kiyish",
      "Faqat mato kiyish"
    ],
    javob: "Izolyatsiyalangan va quruq kiyim"
  },
  {
    savol: "Xavfsizlik texnikasini o‘rganishning maqsadi nima?",
    variantlar: [
      "Shaxs va boshqalarni jarohatlardan himoya qilish",
      "Faqat ish tezligini oshirish",
      "Faqat kompyuter ishlashini yaxshilash",
      "Faqat ish tartibini o‘rganish"
    ],
    javob: "Shaxs va boshqalarni jarohatlardan himoya qilish"
  },
  {
    savol: "Qurilmalarni ishlatishdan oldin nima qilish kerak?",
    variantlar: [
      "Texnik holatini tekshirish",
      "Faqat darhol ishlatish",
      "Faqat dastur o‘rnatish",
      "Faqat foydalanuvchi sonini oshirish"
    ],
    javob: "Texnik holatini tekshirish"
  },
  {
    savol: "Laboratoriyada xavfsizlik uchun qanday jihozlar ishlatiladi?",
    variantlar: [
      "Ko‘zoynak, qo‘lqop, lab coat",
      "Faqat ko‘ylak",
      "Faqat etiklar",
      "Faqat telefon"
    ],
    javob: "Ko‘zoynak, qo‘lqop, lab coat"
  },
  {
    savol: "Kompyuterni xavfsiz ishlatish uchun nima qilish kerak?",
    variantlar: [
      "Elektr toki xavfsizligini tekshirish va jihozlarni to‘g‘ri ulash",
      "Faqat tez ishlatish",
      "Faqat dastur o‘rnatish",
      "Faqat foydalanuvchi sonini oshirish"
    ],
    javob: "Elektr toki xavfsizligini tekshirish va jihozlarni to‘g‘ri ulash"
  },
  {
    savol: "Ish joyida xavfsizlik qoidalariga amal qilmaslik oqibatlari nima?",
    variantlar: [
      "Jarohat, qurilma buzilishi va ish to‘xtashi",
      "Faqat ish tezligi oshadi",
      "Faqat foydalanuvchi soni oshadi",
      "Faqat dastur yangilanadi"
    ],
    javob: "Jarohat, qurilma buzilishi va ish to‘xtashi"
  },
  {
    savol: "Favqulodda vaziyatda nima qilish kerak?",
    variantlar: [
      "Xavfsizlik belgilariga amal qilib, tezkor chora ko‘rish",
      "Faqat telefon qilish",
      "Faqat ishlashni davom ettirish",
      "Faqat joyida turish"
    ],
    javob: "Xavfsizlik belgilariga amal qilib, tezkor chora ko‘rish"
  },
  {
    savol: "Elektr toki bilan ishlaganda qanday xatolik eng xavflidir?",
    variantlar: [
      "Nam qo‘l bilan jihozni ishlatish",
      "Faqat tez ishlatish",
      "Faqat dastur o‘rnatish",
      "Faqat foydalanuvchi sonini oshirish"
    ],
    javob: "Nam qo‘l bilan jihozni ishlatish"
  },
  {
    savol: "Xavfsizlik texnikasi qoidalarini bilish kimga kerak?",
    variantlar: [
      "Barcha foydalanuvchilar va ishchilarga",
      "Faqat boshliqlarga",
      "Faqat texniklarga",
      "Faqat talabalar uchun"
    ],
    javob: "Barcha foydalanuvchilar va ishchilarga"
  },
  {
    savol: "Xavfsizlikni ta’minlash uchun qanday sharoit yaratish muhim?",
    variantlar: [
      "Toza, tartibli va jihozlar xavfsiz ishlaydigan muhit",
      "Faqat tez ishlash muhitini yaratish",
      "Faqat foydalanuvchi sonini cheklash",
      "Faqat telefonlar ishlamasligi"
    ],
    javob: "Toza, tartibli va jihozlar xavfsiz ishlaydigan muhit"
  },
  {
    savol: "Kompyuter bilan ishlashdan oldin nimani tekshirish zarur?",
    variantlar: [
      "Elektr toki xavfsizligi va kabellar holati",
      "Faqat dastur o‘rnatish",
      "Faqat tez ishlashni",
      "Faqat foydalanuvchi sonini"
    ],
    javob: "Elektr toki xavfsizligi va kabellar holati"
  },
  {
    savol: "Xavfsizlik texnikasiga amal qilish natijasi nima?",
    variantlar: [
      "Jarohatsiz va samarali ishlash",
      "Faqat tezroq ishlash",
      "Faqat foydalanuvchi soni oshadi",
      "Faqat qurilma buzilishi"
    ],
    javob: "Jarohatsiz va samarali ishlash"
  }
],







theme10: [
  {
    savol: "Dunyoning birinchi elektron kompyuteri qachon yaratildi?",
    variantlar: [
      "1940-yillarda",
      "1930-yillarda",
      "1950-yillarda",
      "1960-yillarda"
    ],
    javob: "1940-yillarda"
  },
  {
    savol: "Kompyuterning miyasiga tenglashtiriladigan qismi qaysi?",
    variantlar: [
      "Markaziy protsessor (CPU)",
      "Qattiq disk (HDD)",
      "Monitor",
      "Klavishlar"
    ],
    javob: "Markaziy protsessor (CPU)"
  },
  {
    savol: "Kompyuterda ma’lumot saqlash uchun ishlatiladigan eng tezkor xotira qaysi?",
    variantlar: [
      "RAM",
      "HDD",
      "CD",
      "Floppy disk"
    ],
    javob: "RAM"
  },
  {
    savol: "“Bug” atamasi dasturiy xatolikni ifodalaydi. Bu atama qanday paydo bo‘lgan?",
    variantlar: [
      "Kompyuter ichidan haqiqatda qurt topilgani sababli",
      "Dasturchining ismi bilan",
      "Kompyuter ishlab chiqaruvchisi tomonidan",
      "Matematika formulasidan kelib chiqqan"
    ],
    javob: "Kompyuter ichidan haqiqatda qurt topilgani sababli"
  },
  {
    savol: "Dunyo bo‘yicha eng ko‘p ishlatiladigan operatsion tizim qaysi?",
    variantlar: [
      "Windows",
      "Linux",
      "MacOS",
      "DOS"
    ],
    javob: "Windows"
  },
  {
    savol: "Kompyuter klaviaturasida eng ko‘p ishlatiladigan tugma qaysi?",
    variantlar: [
      "Space (Bo‘shliq)",
      "Enter",
      "Shift",
      "Ctrl"
    ],
    javob: "Space (Bo‘shliq)"
  },
  {
    savol: "Kompyuter viruslari nima maqsadda yaratiladi?",
    variantlar: [
      "Ma’lumotlarni buzish yoki tizimga zarar yetkazish",
      "Faqat fayl o‘chirish uchun",
      "Faqat tez ishlashni oshirish uchun",
      "Faqat internetni bloklash uchun"
    ],
    javob: "Ma’lumotlarni buzish yoki tizimga zarar yetkazish"
  },
  {
    savol: "Dasturlash tillarining birinchi va mashhurlari qaysi?",
    variantlar: [
      "Fortran, COBOL",
      "Python, Java",
      "C++, JavaScript",
      "HTML, CSS"
    ],
    javob: "Fortran, COBOL"
  },
  {
    savol: "Kompyuter tarmoqlari orqali ma’lumot uzatish uchun qaysi qurilma ishlatiladi?",
    variantlar: [
      "Router",
      "Monitor",
      "Printer",
      "Klavatura"
    ],
    javob: "Router"
  },
  {
    savol: "Internetning ixtirochisi kim hisoblanadi?",
    variantlar: [
      "Tim Berners-Lee",
      "Bill Gates",
      "Steve Jobs",
      "Mark Zuckerberg"
    ],
    javob: "Tim Berners-Lee"
  },
  {
    savol: "Kompyuter virusining tarqalish tezligi nima bilan bog‘liq?",
    variantlar: [
      "Internet ulanish tezligi va foydalanuvchi ehtiyotsizligi",
      "Faqat RAM xotira bilan",
      "Faqat qattiq disk bilan",
      "Faqat ekran bilan"
    ],
    javob: "Internet ulanish tezligi va foydalanuvchi ehtiyotsizligi"
  },
  {
    savol: "Dasturiy ta’minot qaysi turga kiradi?",
    variantlar: [
      "Soft (dastur)",
      "Hard (qurilma)",
      "Peripheral",
      "Network"
    ],
    javob: "Soft (dastur)"
  },
  {
    savol: "Kompyuter grafikasi bilan ishlaydigan dastur qaysi?",
    variantlar: [
      "Adobe Photoshop",
      "Microsoft Word",
      "Excel",
      "PowerPoint"
    ],
    javob: "Adobe Photoshop"
  },
  {
    savol: "Qattiq diskdagi ma’lumotlarni vaqtincha saqlashga nima ishlatiladi?",
    variantlar: [
      "RAM",
      "Monitor",
      "Printer",
      "Klaviatura"
    ],
    javob: "RAM"
  },
  {
    savol: "Kompyuterning birinchi shaxsiy modeli qachon chiqarilgan?",
    variantlar: [
      "1970-yillarda",
      "1960-yillarda",
      "1980-yillarda",
      "1990-yillarda"
    ],
    javob: "1970-yillarda"
  },
  {
    savol: "Kompyuter ishlash tezligini oshirish uchun qaysi qurilma yangilanadi?",
    variantlar: [
      "RAM yoki protsessor",
      "Monitor",
      "Printer",
      "Klavitura"
    ],
    javob: "RAM yoki protsessor"
  },
  {
    savol: "Internetda xavfsiz ishlash uchun nima qilish muhim?",
    variantlar: [
      "Parolni himoyalash va shubhali saytlar bilan ishlamaslik",
      "Faqat tez ishlatish",
      "Faqat kompyuterni o‘chirish",
      "Faqat dastur o‘rnatish"
    ],
    javob: "Parolni himoyalash va shubhali saytlar bilan ishlamaslik"
  },
  {
    savol: "Kompyuter tarixidagi eng mashhur superkompyuter qaysi?",
    variantlar: [
      "Fugaku",
      "Macintosh",
      "IBM PC",
      "Cray-1"
    ],
    javob: "Fugaku"
  },
  {
    savol: "Kiberxavfsizlik nima bilan shug‘ullanadi?",
    variantlar: [
      "Ma’lumotlarni himoya qilish va tarmoqlarni xavfsiz qilish",
      "Faqat dastur o‘rnatish",
      "Faqat klaviatura ishlashini oshirish",
      "Faqat printer ishlashini nazorat qilish"
    ],
    javob: "Ma’lumotlarni himoya qilish va tarmoqlarni xavfsiz qilish"
  },
  {
    savol: "Kompyuterda 0 va 1 belgilaridan tashkil topgan tizim nima deb ataladi?",
    variantlar: [
      "Ikki lik tizim (binary system)",
      "O‘nlik tizim (decimal system)",
      "O‘n oltilik tizim (hexadecimal)",
      "Octal tizim"
    ],
    javob: "Ikki lik tizim (binary system)"
  }
],





theme11: [
  {
    savol: "Websayt yaratishda qaysi til asosiy hisoblanadi?",
    variantlar: [
      "HTML",
      "Python",
      "C++",
      "Java"
    ],
    javob: "HTML"
  },
  {
    savol: "Web sahifaga uslub berish uchun qaysi til ishlatiladi?",
    variantlar: [
      "CSS",
      "HTML",
      "JavaScript",
      "PHP"
    ],
    javob: "CSS"
  },
  {
    savol: "Websaytga interaktivlik qo‘shish uchun qaysi til ishlatiladi?",
    variantlar: [
      "JavaScript",
      "HTML",
      "CSS",
      "SQL"
    ],
    javob: "JavaScript"
  },
  {
    savol: "Websayt server qismi uchun eng ko‘p ishlatiladigan dasturlash tili qaysi?",
    variantlar: [
      "PHP",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    javob: "PHP"
  },
  {
    savol: "Websayt fayllarini saqlash va ulash uchun nima ishlatiladi?",
    variantlar: [
      "Server",
      "Monitor",
      "Klaviatura",
      "Printer"
    ],
    javob: "Server"
  },
  {
    savol: "Responsive dizayn nima degani?",
    variantlar: [
      "Websayt turli qurilmalarda to‘g‘ri ko‘rinishi",
      "Faqat kompyuterda ishlash",
      "Faqat telefon uchun dizayn",
      "Faqat matnli sayt"
    ],
    javob: "Websayt turli qurilmalarda to‘g‘ri ko‘rinishi"
  },
  {
    savol: "Hyperlink nima?",
    variantlar: [
      "Boshqa sahifaga yoki saytga havola",
      "Rasm fayli",
      "Video fayl",
      "Shaxsiy fayl"
    ],
    javob: "Boshqa sahifaga yoki saytga havola"
  },
  {
    savol: "Domain nomi nima uchun ishlatiladi?",
    variantlar: [
      "Sayt manzilini aniqlash uchun",
      "Fayl nomi uchun",
      "Rasm fayli uchun",
      "Video fayli uchun"
    ],
    javob: "Sayt manzilini aniqlash uchun"
  },
  {
    savol: "Websayt yaratishda foydalanuvchi tajribasi (UX) nimani anglatadi?",
    variantlar: [
      "Foydalanuvchi sayt bilan qulay ishlashi",
      "Faqat dizayn go‘zalligi",
      "Faqat rasm yuklash",
      "Faqat matn yozish"
    ],
    javob: "Foydalanuvchi sayt bilan qulay ishlashi"
  },
  {
    savol: "HTML fayllarining kengaytmasi qanday bo‘ladi?",
    variantlar: [
      ".html",
      ".css",
      ".js",
      ".php"
    ],
    javob: ".html"
  },
  {
    savol: "CSS fayllarining kengaytmasi qanday bo‘ladi?",
    variantlar: [
      ".css",
      ".html",
      ".js",
      ".php"
    ],
    javob: ".css"
  },
  {
    savol: "JavaScript fayllarining kengaytmasi qanday bo‘ladi?",
    variantlar: [
      ".js",
      ".html",
      ".css",
      ".php"
    ],
    javob: ".js"
  },
  {
    savol: "Websaytni test qilish va tekshirish uchun nima ishlatiladi?",
    variantlar: [
      "Brauzer",
      "Klaviatura",
      "Printer",
      "Klavishlar"
    ],
    javob: "Brauzer"
  },
  {
    savol: "CMS nima degani?",
    variantlar: [
      "Content Management System (Kontent boshqarish tizimi)",
      "Computer Management System",
      "Central Media Server",
      "Creative Main Software"
    ],
    javob: "Content Management System (Kontent boshqarish tizimi)"
  },
  {
    savol: "Websayt yaratishda rasm va video fayllarni qanday qo‘shish mumkin?",
    variantlar: [
      "HTML teglar orqali",
      "Faqat CSS orqali",
      "Faqat JavaScript orqali",
      "Faqat server orqali"
    ],
    javob: "HTML teglar orqali"
  },
  {
    savol: "SEO nima?",
    variantlar: [
      "Saytni qidiruv tizimlarida yuqori o‘ringa chiqarish",
      "Faqat sayt dizayni",
      "Faqat sayt tezligini oshirish",
      "Faqat matn formatlash"
    ],
    javob: "Saytni qidiruv tizimlarida yuqori o‘ringa chiqarish"
  },
  {
    savol: "Websayt yaratishda foydalaniladigan ochiq manbali platforma qaysi?",
    variantlar: [
      "WordPress",
      "Microsoft Word",
      "Excel",
      "PowerPoint"
    ],
    javob: "WordPress"
  },
  {
    savol: "Frontend nima?",
    variantlar: [
      "Foydalanuvchi ko‘radigan sayt qismi",
      "Server qismi",
      "Fayllarni saqlash tizimi",
      "Dasturiy ta’minot"
    ],
    javob: "Foydalanuvchi ko‘radigan sayt qismi"
  },
  {
    savol: "Backend nima?",
    variantlar: [
      "Server qismi va ma’lumotlar bazasi bilan ishlash",
      "Foydalanuvchi ko‘radigan qismi",
      "Faqat rasm qo‘yish",
      "Faqat matn yozish"
    ],
    javob: "Server qismi va ma’lumotlar bazasi bilan ishlash"
  },
  {
    savol: "Websaytni onlayn qilish uchun nima zarur?",
    variantlar: [
      "Domain va hosting",
      "Faqat brauzer",
      "Faqat HTML fayl",
      "Faqat CSS fayl"
    ],
    javob: "Domain va hosting"
  }
],




}

document.querySelector('.btn-start').addEventListener('click', () => {
    const selectedTopics = Array.from(document.querySelectorAll('input[name="mavzu"]:checked')).map(cb => cb.value);
    const testCount = parseInt(document.getElementById("testCount").value);

    if (selectedTopics.length === 0) {
      alert("Iltimos, mavzuni tanlang!");
      return;
    } else if (selectedTopics.length > 3) {
      alert("Faqat 3 tagacha mavzu tanlash mumkin!");
      return;
    }

    let allTests = [];
    selectedTopics.forEach(topic => {
      if (testData[topic]) allTests = allTests.concat(testData[topic]);
    });

    allTests.sort(() => Math.random() - 0.5);
    const selectedTests = allTests.slice(0, testCount);

    localStorage.setItem('selectedTests', JSON.stringify(selectedTests));
    window.location.href = 'proexam.html';
  });
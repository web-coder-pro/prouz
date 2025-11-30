let testData = {

theme1: [
  {
    savol: "Shaxs deb kimga aytiladi?",
    variantlar: [
      "Jamiyatda muayyan rolga ega bo‘lgan inson",
      "Faqat oila a’zosi bo‘lgan odam",
      "Yosh bolalar",
      "Davlat xizmatchilari"
    ],
    javob: "Jamiyatda muayyan rolga ega bo‘lgan inson"
  },
  {
    savol: "Jamiyatning asosiy bo‘g‘ini qaysi?",
    variantlar: ["Oila", "Davlat", "Mahalla", "Korxona"],
    javob: "Oila"
  },
  {
    savol: "Insonning huquq va erkinliklari qaysi hujjat bilan kafolatlanadi?",
    variantlar: [
      "Konstitutsiya",
      "Mehnat kodeksi",
      "Jinoyat kodeksi",
      "Fuqarolik kodeksi"
    ],
    javob: "Konstitutsiya"
  },
  {
    savol: "Jamiyatning siyosiy boshqaruv organi qaysi?",
    variantlar: ["Davlat", "Mahalla", "Oila", "Ta’lim muassasasi"],
    javob: "Davlat"
  },
  {
    savol: "Davlatning asosiy vazifalaridan biri qaysi?",
    variantlar: [
      "Fuqarolar xavfsizligini ta’minlash",
      "Foyda ko‘rish",
      "Xususiy korxonalarni boshqarish",
      "Faqat soliq yig‘ish"
    ],
    javob: "Fuqarolar xavfsizligini ta’minlash"
  },
  {
    savol: "Shaxsning ijtimoiylashuvi deganda nima tushuniladi?",
    variantlar: [
      "Insonning jamiyat qoidalarini o‘zlashtirishi",
      "Faqat o‘qish jarayoni",
      "Moddiy boylik to‘plash",
      "Texnologiya o‘rganish"
    ],
    javob: "Insonning jamiyat qoidalarini o‘zlashtirishi"
  },
  {
    savol: "O‘zbekiston Respublikasining oliy qonuni qaysi?",
    variantlar: [
      "Konstitutsiya",
      "Parlament qarorlari",
      "Prezident farmoni",
      "Vazirlar Mahkamasi qarori"
    ],
    javob: "Konstitutsiya"
  },
  {
    savol: "Jamiyat tuzilmasining iqtisodiy sohasi qaysi jarayonlarni o‘z ichiga oladi?",
    variantlar: [
      "Ishlab chiqarish, taqsimlash, almashuv va iste’mol",
      "Saylov jarayoni",
      "Sud ishlarini yuritish",
      "Sport musobaqalari"
    ],
    javob: "Ishlab chiqarish, taqsimlash, almashuv va iste’mol"
  },
  {
    savol: "Fuqarolik jamiyati deganda nima tushuniladi?",
    variantlar: [
      "Davlatdan mustaqil jamoat tashkilotlari majmui",
      "Faqat davlat boshqaruvi",
      "Harbiy tizim",
      "Xususiy korxonalar yig‘indisi"
    ],
    javob: "Davlatdan mustaqil jamoat tashkilotlari majmui"
  },
  {
    savol: "Shaxsning asosiy huquqlari qaysi?",
    variantlar: [
      "Shaxsiy, siyosiy va ijtimoiy huquqlar",
      "Faqat siyosiy huquqlar",
      "Faqat iqtisodiy huquqlar",
      "Faqat ma’naviy huquqlar"
    ],
    javob: "Shaxsiy, siyosiy va ijtimoiy huquqlar"
  },
  {
    savol: "Davlat hokimiyati nechta tarmoqqa bo‘linadi?",
    variantlar: ["3 ta", "2 ta", "4 ta", "5 ta"],
    javob: "3 ta"
  },
  {
    savol: "Qonun chiqaruvchi hokimiyat kimga tegishli?",
    variantlar: [
      "Oliy Majlis",
      "Vazirlar Mahkamasi",
      "Sudlar",
      "Ichki ishlar vazirligi"
    ],
    javob: "Oliy Majlis"
  },
  {
    savol: "Ijtimoiy tenglik nimani anglatadi?",
    variantlar: [
      "Har bir insonning teng huquq va imkoniyatlarga ega bo‘lishi",
      "Hamma boy bo‘lishi shartligi",
      "Hamma bir xil kasbda ishlashi",
      "Faqat erkaklarning tengligi"
    ],
    javob: "Har bir insonning teng huquq va imkoniyatlarga ega bo‘lishi"
  },
  {
    savol: "Davlat ramzlari qaysilar?",
    variantlar: [
      "Bayroq, Gerb, Madhiyа",
      "Pul, Tillа, Belgilаr",
      "Huquq, Erkinlik, Majburiyat",
      "Madaniyat, San’at, Til"
    ],
    javob: "Bayroq, Gerb, Madhiyа"
  },
  {
    savol: "Jamiyatning ma’naviy hayoti nimalarni o‘z ichiga oladi?",
    variantlar: [
      "San’at, madaniyat, fan, din",
      "Soliqlar va bozor",
      "Yer resurslari",
      "Harbiy xizmat"
    ],
    javob: "San’at, madaniyat, fan, din"
  },
  {
    savol: "Konstitutsiyaga ko‘ra O‘zbekistonda hokimiyat manbai kim?",
    variantlar: ["Xalq", "Prezident", "Parlament", "Vazirlar Mahkamasi"],
    javob: "Xalq"
  },
  {
    savol: "Shaxsning ma’naviy kamoloti nimaga bog‘liq?",
    variantlar: [
      "Oila, ta’lim va jamiyat ta’siriga",
      "Faqat maktabga",
      "Faqat internetga",
      "Faqat do‘stlarga"
    ],
    javob: "Oila, ta’lim va jamiyat ta’siriga"
  },
  {
    savol: "Yoshlarning jamiyatdagi faol ishtiroki qaysi sohada muhim?",
    variantlar: [
      "Siyosiy jarayonlarda",
      "Faqat sportda",
      "Faqat oilada",
      "Faqat madaniyatda"
    ],
    javob: "Siyosiy jarayonlarda"
  },
  {
    savol: "Demokratiya deganda nima tushuniladi?",
    variantlar: [
      "Xalq hokimiyati",
      "Harbiy boshqaruv",
      "Bir kishining boshqaruvi",
      "Diniy hukumat"
    ],
    javob: "Xalq hokimiyati"
  },
  {
    savol: "Davlatning hududi deganda nima tushuniladi?",
    variantlar: [
      "Mamlakat chegaralari bilan belgilangan yer maydoni",
      "Faqat shaharlar",
      "Faqat qishloqlar",
      "Faqat tog‘ hududlari"
    ],
    javob: "Mamlakat chegaralari bilan belgilangan yer maydoni"
  }
],




theme2: [
  {
    savol: "Davlat funksiyasi deganda nima tushuniladi?",
    variantlar: [
      "Davlatning jamiyat oldidagi vazifalari",
      "Faqat soliq yig‘ish jarayoni",
      "Fuqarolarning shaxsiy rejasi",
      "Ijtimoiy guruhlar faoliyati"
    ],
    javob: "Davlatning jamiyat oldidagi vazifalari"
  },
  {
    savol: "Davlatning ichki funksiyalaridan biri qaysi?",
    variantlar: [
      "Iqtisodiyotni tartibga solish",
      "Diplomatik aloqalarni rivojlantirish",
      "Tashqi savdoni muvofiqlashtirish",
      "Xalqaro shartnomalar tuzish"
    ],
    javob: "Iqtisodiyotni tartibga solish"
  },
  {
    savol: "Davlatning tashqi funksiyasiga qaysi misol to‘g‘ri keladi?",
    variantlar: [
      "Milliy xavfsizlikni ta’minlash",
      "Ichki bozorni nazorat qilish",
      "Ta’lim tizimini rivojlantirish",
      "Sud ishlarini amalga oshirish"
    ],
    javob: "Milliy xavfsizlikni ta’minlash"
  },
  {
    savol: "Davlatning ijtimoiy funksiyasi nimalarga qaratilgan?",
    variantlar: [
      "Aholining turmush farovonligini oshirishga",
      "Xalqaro shartnomalar tuzishga",
      "Boj stavkalarini belgilashga",
      "Statistika yig‘ishga"
    ],
    javob: "Aholining turmush farovonligini oshirishga"
  },
  {
    savol: "Huquqni muhofaza qilish qaysi davlat funksiyasiga kiradi?",
    variantlar: ["Ichki funksiyaga", "Tashqi funksiyaga", "Madaniy funksiyaga", "Iqtisodiy funksiyaga"],
    javob: "Ichki funksiyaga"
  },
  {
    savol: "Davlatning iqtisodiy funksiyasi nimani nazarda tutadi?",
    variantlar: [
      "Iqtisodiy jarayonlarni boshqarish va tartibga solish",
      "Aholiga bepul dori berish",
      "Tashqi siyosatni yuritish",
      "Sport musobaqalarini tashkil qilish"
    ],
    javob: "Iqtisodiy jarayonlarni boshqarish va tartibga solish"
  },
  {
    savol: "Tashqi siyosatni yuritish qaysi funksiyaga kiradi?",
    variantlar: ["Tashqi funksiyaga", "Ichki funksiyaga", "Ijtimoiy funksiyaga", "Madaniy funksiyaga"],
    javob: "Tashqi funksiyaga"
  },
  {
    savol: "Davlatning madaniy funksiyasiga qaysi misol mos keladi?",
    variantlar: [
      "Maktablar va madaniyat markazlarini rivojlantirish",
      "Qurolli kuchlarni mustahkamlash",
      "Yarim yillik byudjetni tasdiqlash",
      "Tashqi savdoni nazorat qilish"
    ],
    javob: "Maktablar va madaniyat markazlarini rivojlantirish"
  },
  {
    savol: "Davlatning ekologik funksiyasi nimaga qaratilgan?",
    variantlar: [
      "Atrof-muhitni muhofaza qilishga",
      "Yangi valyuta chiqarishga",
      "Sud tizimini boshqarishga",
      "Saylovlarni tashkil etishga"
    ],
    javob: "Atrof-muhitni muhofaza qilishga"
  },
  {
    savol: "Davlatning moliyaviy funksiyasi nimani o‘z ichiga oladi?",
    variantlar: [
      "Byudjetni shakllantirish va soliq tizimini boshqarish",
      "Madaniy qadriyatlarni targ‘ib qilish",
      "Xalqaro sport musobaqalarini o‘tkazish",
      "Fuqarolarning vaqtini boshqarish"
    ],
    javob: "Byudjetni shakllantirish va soliq tizimini boshqarish"
  },
  {
    savol: "Sud hokimiyati qaysi funksiyani bajaradi?",
    variantlar: [
      "Adolatni ta’minlash",
      "Tashqi siyosatni yuritish",
      "Mahsulot ishlab chiqarish",
      "Qurolli kuchlarni tashkil qilish"
    ],
    javob: "Adolatni ta’minlash"
  },
  {
    savol: "Aholi xavfsizligini ta’minlash qaysi funksiyaga kiradi?",
    variantlar: ["Ichki funksiyaga", "Tashqi funksiyaga", "Madaniy funksiyaga", "Texnik funksiyaga"],
    javob: "Ichki funksiyaga"
  },
  {
    savol: "Armiyani shakllantirish va himoya qilish davlatning qaysi vazifasiga kiradi?",
    variantlar: ["Tashqi funksiyasiga", "Ichki funksiyasiga", "Madaniy funksiyasiga", "Ijtimoiy funksiyasiga"],
    javob: "Tashqi funksiyasiga"
  },
  {
    savol: "Soliq yig‘ish va taqsimlash qaysi funksiyaga kiradi?",
    variantlar: ["Moliyaviy funksiyaga", "Madaniy funksiyaga", "Tashqi funksiyaga", "Ijtimoiy funksiyaga"],
    javob: "Moliyaviy funksiyaga"
  },
  {
    savol: "Ta’lim va sog‘liqni saqlashni rivojlantirish qaysi davlat funksiyasiga kiradi?",
    variantlar: ["Ijtimoiy funksiyaga", "Tashqi funksiyaga", "Texnik funksiyaga", "Sud funksiyasiga"],
    javob: "Ijtimoiy funksiyaga"
  },
  {
    savol: "Davlatning tashqi iqtisodiy funksiyasiga misol?",
    variantlar: [
      "Eksport va importni tartibga solish",
      "Ichki bozor narxlarini belgilash",
      "Aholi bandligini oshirish",
      "Ta’lim sifatini yaxshilash"
    ],
    javob: "Eksport va importni tartibga solish"
  },
  {
    savol: "Davlatning fuqarolik jamiyatini qo‘llab-quvvatlash funksiyasi nimaga qaratilgan?",
    variantlar: [
      "NNT va jamoat tashkilotlari faoliyatini rivojlantirish",
      "Yangi valyuta chiqarish",
      "Armiya sonini oshirish",
      "Yo‘llar qurish"
    ],
    javob: "NNT va jamoat tashkilotlari faoliyatini rivojlantirish"
  },
  {
    savol: "Fuqarolarning huquqlarini himoya qilish davlatning qaysi funksiyasidir?",
    variantlar: ["Ichki funksiyasi", "Tashqi funksiyasi", "Iqtisodiy funksiyasi", "Madaniy funksiyasi"],
    javob: "Ichki funksiyasi"
  },
  {
    savol: "Konstitutsiya va qonunlarga rioya qilinishini ta’minlash davlatning qaysi funksiyasiga kiradi?",
    variantlar: [
      "Huquqni muhofaza qilish funksiyasiga",
      "Madaniy funksiyaga",
      "Tashqi siyosiy funksiyaga",
      "Ekologik funksiyaga"
    ],
    javob: "Huquqni muhofaza qilish funksiyasiga"
  },
  {
    savol: "Davlatning tashkiliy-boshqaruv funksiyasi nimaga xizmat qiladi?",
    variantlar: [
      "Davlat organlarining samarali ishlashini ta’minlashga",
      "Sport tadbirlarini tashkil qilishga",
      "Savdo markazlari qurishga",
      "Aholi sonini nazorat qilishga"
    ],
    javob: "Davlat organlarining samarali ishlashini ta’minlashga"
  }
],





theme3: [
  {
    savol: "Davlat shakli deganda nima tushuniladi?",
    variantlar: [
      "Davlat hokimiyatining tashkil etilish usuli",
      "Davlat bayrog‘ining tuzilishi",
      "Aholining etnik tarkibi",
      "Soliq tizimi"
    ],
    javob: "Davlat hokimiyatining tashkil etilish usuli"
  },
  {
    savol: "Monarxiya qanday davlat shakli?",
    variantlar: [
      "Hokimiyat meros bo‘yicha o‘tadigan boshqaruv shakli",
      "Xalq tomonidan saylanadigan boshqaruv tizimi",
      "Hududiy jihatdan kichik davlat shakli",
      "Davlatning diniy boshqaruvi"
    ],
    javob: "Hokimiyat meros bo‘yicha o‘tadigan boshqaruv shakli"
  },
  {
    savol: "Respublika boshqaruv shaklida davlat rahbari qanday aniqlanadi?",
    variantlar: [
      "Saylov orqali",
      "Meros bo‘yicha",
      "Diniy rahbar tomonidan tayinlanadi",
      "Harbiy qoidadan kelib chiqadi"
    ],
    javob: "Saylov orqali"
  },
  {
    savol: "Qaysi davlat boshqaruv shaklida ikkita yetakchi bo‘ladi — prezident va bosh vazir?",
    variantlar: ["Aralash respublika", "Monarxiya", "Absolyut monarxiya", "Teokratiya"],
    javob: "Aralash respublika"
  },
  {
    savol: "Absolyut monarxiyada hokimiyat kimning qo‘lida bo‘ladi?",
    variantlar: [
      "Monarxning to‘liq qo‘lida",
      "Xalqning qo‘lida",
      "Sud tizimi qo‘lida",
      "Deputatlar qo‘lida"
    ],
    javob: "Monarxning to‘liq qo‘lida"
  },
  {
    savol: "Konstitutsiyaviy monarxiya qanday boshqaruv shaklidir?",
    variantlar: [
      "Monarxning vakolati qonun bilan cheklangan davlat",
      "Monarxning cheklanmagan hokimiyatga ega davlat",
      "Prezident boshqaradigan davlat",
      "Faqat diniy qonunlar asosidagi davlat"
    ],
    javob: "Monarxning vakolati qonun bilan cheklangan davlat"
  },
  {
    savol: "Parlament respublikasida davlat boshlig‘i odatda kim bo‘ladi?",
    variantlar: ["Prezident", "Podsho", "Bosh Vazir", "Harbiy qo‘mondon"],
    javob: "Prezident"
  },
  {
    savol: "Prezident respublikasining asosiy belgisi qaysi?",
    variantlar: [
      "Prezident ijro hokimiyatini boshqaradi",
      "Parlament barcha vakolatga ega",
      "Monarx davlat boshlig‘i",
      "Sud tizimi davlatni boshqaradi"
    ],
    javob: "Prezident ijro hokimiyatini boshqaradi"
  },
  {
    savol: "Teokratiya qanday davlat shaklidir?",
    variantlar: [
      "Diniy rahbarlar boshqaradigan davlat",
      "Soliq bo‘lmagan davlat",
      "Hokimiyat faqat armiya qo‘lida bo‘lgan davlat",
      "Monarxiya bilan aralash davlat"
    ],
    javob: "Diniy rahbarlar boshqaradigan davlat"
  },
  {
    savol: "Federativ davlat shakli qaysi variantga mos keladi?",
    variantlar: [
      "Bir nechta hududiy birliklarning birlashgan davlati",
      "Faqat bitta shahar davlati",
      "Hokimiyat faqat markazda to‘plangan davlat",
      "Monarx boshqaradigan davlat"
    ],
    javob: "Bir nechta hududiy birliklarning birlashgan davlati"
  },
  {
    savol: "Unitar davlat deganda nimani anglatadi?",
    variantlar: [
      "Yagona markaziy hokimiyatga ega davlat",
      "Bir nechta shtatlardan iborat davlat",
      "Ikkita boshqaruv markazi bo‘lgan davlat",
      "Hokimiyati diniy rahbar qo‘lida bo‘lgan davlat"
    ],
    javob: "Yagona markaziy hokimiyatga ega davlat"
  },
  {
    savol: "Qaysi davlat turi mustaqil hududiy bo‘linmalarga ega emas?",
    variantlar: ["Unitar", "Federativ", "Konfederativ", "Monarxiya"],
    javob: "Unitar"
  },
  {
    savol: "Konfederatsiya deganda nima tushuniladi?",
    variantlar: [
      "Mustaqil davlatlarning ittifoqi",
      "Markaziy hukumat kuchli bo‘lgan davlat",
      "Merosiy hokimiyatga ega davlat",
      "Aralash boshqaruv shakli"
    ],
    javob: "Mustaqil davlatlarning ittifoqi"
  },
  {
    savol: "Absolyut monarxiya va konstitutsiyaviy monarxiya o‘rtasidagi farq qaysi?",
    variantlar: [
      "Absolyutda monarx cheklanmagan, konstitutsiyaviyda cheklangan",
      "Konstitutsiyaviyda monarx yo‘q",
      "Absolyutda parlament kuchli",
      "Konstitutsiyaviyda sud hokimiyati yo‘q"
    ],
    javob: "Absolyutda monarx cheklanmagan, konstitutsiyaviyda cheklangan"
  },
  {
    savol: "Prezident respublikasiga misol bo‘la oladigan davlat?",
    variantlar: ["AQSH", "Buyuk Britaniya", "Yaponiya", "Shvetsiya"],
    javob: "AQSH"
  },
  {
    savol: "Konstitutsiyaviy monarxiyaga misol?",
    variantlar: ["Buyuk Britaniya", "AQSH", "Rossiya", "Xitoy"],
    javob: "Buyuk Britaniya"
  },
  {
    savol: "Parlament respublikasiga misol?",
    variantlar: ["Germaniya", "Saudiya Arabistoni", "Qatar", "Marokash"],
    javob: "Germaniya"
  },
  {
    savol: "Teokratiya davlatiga misol qaysi?",
    variantlar: ["Vatikan", "Fransiya", "AQSH", "Turkiya"],
    javob: "Vatikan"
  },
  {
    savol: "Federativ davlatga misol qaysi?",
    variantlar: ["Rossiya", "O‘zbekiston", "Gruzya", "Qozog‘iston"],
    javob: "Rossiya"
  },
  {
    savol: "Unitar davlatga misol qaysi?",
    variantlar: ["O‘zbekiston", "AQSH", "Germaniya", "Shveytsariya"],
    javob: "O‘zbekiston"
  }
],





theme4: [
  {
    savol: "Axloq deganda nima tushuniladi?",
    variantlar: [
      "Jamiyatda odob va to‘g‘ri xulq qoidalari",
      "Faqat qonunlar to‘plami",
      "Davlatning iqtisodiy siyosati",
      "Texnologik jarayonlar"
    ],
    javob: "Jamiyatda odob va to‘g‘ri xulq qoidalari"
  },
  {
    savol: "Huquq nima?",
    variantlar: [
      "Davlat tomonidan belgilangan majburiyat va imkoniyatlar tizimi",
      "Shaxsiy istaklar to‘plami",
      "Faqat moliyaviy normalar",
      "Faqat diniy qoidalar"
    ],
    javob: "Davlat tomonidan belgilangan majburiyat va imkoniyatlar tizimi"
  },
  {
    savol: "Axloqiy qoidalar qanday asoslanadi?",
    variantlar: [
      "Jamiyatning qadriyatlari va odatlari",
      "Faqat qonunlar",
      "Xususiy kompaniyalar qarorlari",
      "Tashqi siyosat"
    ],
    javob: "Jamiyatning qadriyatlari va odatlari"
  },
  {
    savol: "Huquqiy qoidalar qanday kuchga ega?",
    variantlar: [
      "Davlat tomonidan majburiy tarzda belgilangan",
      "Faqat tavsiya sifatida",
      "Faqat shaxsiy qaror sifatida",
      "Faqat diniy tashkilot qarori bilan"
    ],
    javob: "Davlat tomonidan majburiy tarzda belgilangan"
  },
  {
    savol: "Axloq va huquqning asosiy farqi nimada?",
    variantlar: [
      "Axloq ijtimoiy qabul, huquq majburiy",
      "Axloq majburiy, huquq ixtiyoriy",
      "Axloq va huquq bir xil",
      "Axloq faqat diniy, huquq faqat iqtisodiy"
    ],
    javob: "Axloq ijtimoiy qabul, huquq majburiy"
  },
  {
    savol: "Huquqiy normalar nimani ta’minlaydi?",
    variantlar: [
      "Shaxs va jamiyatning himoyasini",
      "Faqat axloqiy mas’uliyatni",
      "Faqat iqtisodiy farovonlikni",
      "Faqat siyosiy hokimiyatni"
    ],
    javob: "Shaxs va jamiyatning himoyasini"
  },
  {
    savol: "Axloqiy majburiyat nima?",
    variantlar: [
      "Shaxsning to‘g‘ri xulq qilishga bo‘lgan ichki majburiyati",
      "Davlat tomonidan belgilangan qonun",
      "Soliq to‘lash",
      "Saylovda ovoz berish"
    ],
    javob: "Shaxsning to‘g‘ri xulq qilishga bo‘lgan ichki majburiyati"
  },
  {
    savol: "Huquqiy javobgarlik nima?",
    variantlar: [
      "Qonunni buzgan shaxsga nisbatan davlat tomonidan qo‘llanadigan chora",
      "Faqat axloqiy tavsiyalar",
      "Shaxsiy qaror",
      "Faqat moliyaviy majburiyat"
    ],
    javob: "Qonunni buzgan shaxsga nisbatan davlat tomonidan qo‘llanadigan chora"
  },
  {
    savol: "Axloqiy qoidalarni kim belgilaydi?",
    variantlar: [
      "Jamiyat va madaniyat",
      "Davlat qonun chiqaruvchi organi",
      "Xususiy kompaniya",
      "Faqat ota-ona"
    ],
    javob: "Jamiyat va madaniyat"
  },
  {
    savol: "Huquqiy qoidalarni kim belgilaydi?",
    variantlar: [
      "Davlat",
      "Faqat shaxs",
      "Jamiyatning odatlari",
      "Faqat diniy rahbar"
    ],
    javob: "Davlat"
  },
  {
    savol: "Axloqiy normalarga rioya qilmaslik natijasi?",
    variantlar: [
      "Ijtimoiy tanqid va jamiyatning noroziligi",
      "Sud jarayoni",
      "Soliq jarimasi",
      "Harbiy xizmat majburiyati"
    ],
    javob: "Ijtimoiy tanqid va jamiyatning noroziligi"
  },
  {
    savol: "Huquqiy normalarga rioya qilmaslik natijasi?",
    variantlar: [
      "Sud tomonidan jazo qo‘llanadi",
      "Faqat tanqid qilinadi",
      "Hech qanday oqibat yo‘q",
      "Faqat maslahat beriladi"
    ],
    javob: "Sud tomonidan jazo qo‘llanadi"
  },
  {
    savol: "Axloq va huquq o‘rtasidagi bog‘liqlik nimada?",
    variantlar: [
      "Axloqiy qadriyatlar huquqni shakllantiradi",
      "Hech qanday bog‘liqlik yo‘q",
      "Huquq axloqqa qarshi bo‘ladi",
      "Faqat iqtisodiy qoidalar bog‘liq"
    ],
    javob: "Axloqiy qadriyatlar huquqni shakllantiradi"
  },
  {
    savol: "Huquqiy qonunlar qanday tartibda bo‘ladi?",
    variantlar: [
      "Majburiy va rasmiy",
      "Ixtiyoriy va tavsiya sifatida",
      "Faqat diniy qoidalar",
      "Faqat axloqiy mas’lahatlar"
    ],
    javob: "Majburiy va rasmiy"
  },
  {
    savol: "Axloqiy va huquqiy qadriyatlar jamiyatga nima beradi?",
    variantlar: [
      "Xulqiy tartib va adolat",
      "Faqat iqtisodiy foyda",
      "Faqat siyosiy hokimiyat",
      "Faqat madaniyat"
    ],
    javob: "Xulqiy tartib va adolat"
  },
  {
    savol: "Huquqiy normalar qanday shakllarda bo‘lishi mumkin?",
    variantlar: [
      "Qonun, qaror, nizom",
      "Faqat axloqiy maslahat",
      "Faqat diniy amr",
      "Faqat odat"
    ],
    javob: "Qonun, qaror, nizom"
  },
  {
    savol: "Axloqiy majburiyatlar odatda qaysi xususiyatga ega?",
    variantlar: [
      "Ichki va ijtimoiy bosim bilan mustahkamlangan",
      "Faqat davlat tomonidan majburiy",
      "Faqat moliyaviy talab",
      "Faqat hukumat qarori"
    ],
    javob: "Ichki va ijtimoiy bosim bilan mustahkamlangan"
  },
  {
    savol: "Huquqiy normalar va qonunlar jamiyatda nima ta’minlaydi?",
    variantlar: [
      "Tartib va adolatni",
      "Faqat madaniy qadriyatlarni",
      "Faqat iqtisodiy daromadni",
      "Faqat siyosiy hokimiyatni"
    ],
    javob: "Tartib va adolatni"
  },
  {
    savol: "Axloq va huquqning umumiy maqsadi nima?",
    variantlar: [
      "Jamiyatda tartib va adolatni ta’minlash",
      "Faqat soliq yig‘ish",
      "Faqat sport rivojlanishi",
      "Faqat saylovlarni tashkil qilish"
    ],
    javob: "Jamiyatda tartib va adolatni ta’minlash"
  },
  {
    savol: "Huquqiy normalar shaxsni qanday himoya qiladi?",
    variantlar: [
      "Shaxsning huquqlari va erkinliklarini himoya qiladi",
      "Faqat axloqiy mas’lahat beradi",
      "Faqat iqtisodiy foyda keltiradi",
      "Faqat siyosiy hokimiyatni oshiradi"
    ],
    javob: "Shaxsning huquqlari va erkinliklarini himoya qiladi"
  }
],







theme5: [
  {
    savol: "Huquq tarmoqlari deganda nima tushuniladi?",
    variantlar: [
      "Huquqning mustaqil sohalari va qoidalar tizimi",
      "Faqat qonunlar to‘plami",
      "Davlat hokimiyati organlari",
      "Axloqiy qoidalar majmui"
    ],
    javob: "Huquqning mustaqil sohalari va qoidalar tizimi"
  },
  {
    savol: "Fuqarolik huquqi qaysi soha bilan bog‘liq?",
    variantlar: [
      "Shaxsning mulkiy va shaxsiy huquqlarini tartibga soladi",
      "Faqat davlat siyosati",
      "Harbiy boshqaruv bilan",
      "Faqat diniy masalalar bilan"
    ],
    javob: "Shaxsning mulkiy va shaxsiy huquqlarini tartibga soladi"
  },
  {
    savol: "Jinoiy huquq nima bilan shug‘ullanadi?",
    variantlar: [
      "Jinoyatlarni aniqlash va jazolarni belgilash",
      "Mol-mulkni boshqarish",
      "Davlat siyosatini tashkil qilish",
      "Axloqiy qoidalarni belgilash"
    ],
    javob: "Jinoyatlarni aniqlash va jazolarni belgilash"
  },
  {
    savol: "Mehnat huquqi nimani tartibga soladi?",
    variantlar: [
      "Ishchilar va ish beruvchilar o‘rtasidagi munosabatlarni",
      "Faqat moliyaviy qoidalarni",
      "Faqat axloqiy majburiyatlarni",
      "Faqat davlat siyosatini"
    ],
    javob: "Ishchilar va ish beruvchilar o‘rtasidagi munosabatlarni"
  },
  {
    savol: "Ma’muriy huquq qaysi faoliyatni tartibga soladi?",
    variantlar: [
      "Davlat boshqaruvi va ijro hokimiyati faoliyatini",
      "Shaxsiy mulkni",
      "Jinoyatlarni",
      "Faqat xalqaro munosabatlarni"
    ],
    javob: "Davlat boshqaruvi va ijro hokimiyati faoliyatini"
  },
  {
    savol: "Xalqaro huquq nimani tartibga soladi?",
    variantlar: [
      "Davlatlararo munosabatlarni",
      "Faqat shaxsiy mulkni",
      "Mehnat munosabatlarini",
      "Mahalliy hokimiyatni"
    ],
    javob: "Davlatlararo munosabatlarni"
  },
  {
    savol: "Oila huquqi nimani tartibga soladi?",
    variantlar: [
      "Nikoh, ota-ona va bolalar huquqlari",
      "Davlat siyosatini",
      "Xalqaro shartnomalarni",
      "Jinoiy jazolarni"
    ],
    javob: "Nikoh, ota-ona va bolalar huquqlari"
  },
  {
    savol: "Moliyaviy huquq qaysi sohani tartibga soladi?",
    variantlar: [
      "Soliklar, byudjet va moliya tizimi",
      "Shaxsiy hayot",
      "Oila va nikoh",
      "Xalqaro diplomatiya"
    ],
    javob: "Soliklar, byudjet va moliya tizimi"
  },
  {
    savol: "Ekologik huquq nima bilan shug‘ullanadi?",
    variantlar: [
      "Tabiatni muhofaza qilish va resurslardan foydalanish qoidalari",
      "Mol-mulkni boshqarish",
      "Xalqaro diplomatiya",
      "Jinoiy jinoyatlar"
    ],
    javob: "Tabiatni muhofaza qilish va resurslardan foydalanish qoidalari"
  },
  {
    savol: "Axloqiy normalar bilan huquqiy normalar o‘rtasidagi farq nima?",
    variantlar: [
      "Huquq majburiy, axloq ijtimoiy qabul asosida",
      "Axloq majburiy, huquq ijtimoiy qabul",
      "Hech qanday farq yo‘q",
      "Faqat iqtisodiy qoidalar"
    ],
    javob: "Huquq majburiy, axloq ijtimoiy qabul asosida"
  },
  {
    savol: "Huquqning mustaqil tarmoqlari necha xil bo‘lishi mumkin?",
    variantlar: ["Ko‘p, har biri o‘z qoidalari bilan", "Faqat bitta", "Faqat ikkita", "Faqat uchta"],
    javob: "Ko‘p, har biri o‘z qoidalari bilan"
  },
  {
    savol: "Shaxsiy mulk va mulkiy huquq qaysi huquq tarmog‘iga kiradi?",
    variantlar: ["Fuqarolik huquqi", "Jinoiy huquq", "Mehnat huquqi", "Xalqaro huquq"],
    javob: "Fuqarolik huquqi"
  },
  {
    savol: "Jinoiy javobgarlikni belgilash qaysi huquq tarmog‘i vazifasi?",
    variantlar: ["Jinoiy huquq", "Fuqarolik huquqi", "Mehnat huquqi", "Oila huquqi"],
    javob: "Jinoiy huquq"
  },
  {
    savol: "Davlat byudjeti va soliqlarni tartibga soladigan tarmoq?",
    variantlar: ["Moliyaviy huquq", "Ma’muriy huquq", "Fuqarolik huquqi", "Jinoiy huquq"],
    javob: "Moliyaviy huquq"
  },
  {
    savol: "Xalqaro shartnomalarni va bitimlarni tartibga soluvchi tarmoq?",
    variantlar: ["Xalqaro huquq", "Fuqarolik huquqi", "Jinoiy huquq", "Mehnat huquqi"],
    javob: "Xalqaro huquq"
  },
  {
    savol: "Ishchilar va ish beruvchilar o‘rtasidagi nizolarni hal qiladigan tarmoq?",
    variantlar: ["Mehnat huquqi", "Fuqarolik huquqi", "Jinoiy huquq", "Moliyaviy huquq"],
    javob: "Mehnat huquqi"
  },
  {
    savol: "Nikoh va ota-ona huquqlari qaysi tarmoqqa kiradi?",
    variantlar: ["Oila huquqi", "Fuqarolik huquqi", "Jinoiy huquq", "Moliyaviy huquq"],
    javob: "Oila huquqi"
  },
  {
    savol: "Davlat hokimiyati faoliyatini tartibga soluvchi tarmoq?",
    variantlar: ["Ma’muriy huquq", "Jinoiy huquq", "Fuqarolik huquqi", "Mehnat huquqi"],
    javob: "Ma’muriy huquq"
  },
  {
    savol: "Tabiatni himoya qilish va resurslardan foydalanishni tartibga soladigan huquq tarmog‘i?",
    variantlar: ["Ekologik huquq", "Fuqarolik huquqi", "Moliyaviy huquq", "Jinoiy huquq"],
    javob: "Ekologik huquq"
  },
  {
    savol: "Huquq tarmoqlarining umumiy maqsadi nima?",
    variantlar: [
      "Shaxs va jamiyatning huquqlarini tartibga solish va himoya qilish",
      "Faqat moliyaviy foyda olish",
      "Faqat siyosiy hokimiyatni oshirish",
      "Faqat axloqiy maslahatlardan iborat"
    ],
    javob: "Shaxs va jamiyatning huquqlarini tartibga solish va himoya qilish"
  }
],





theme6: [
  {
    savol: "Huquqiy munosabatlar deganda nima tushuniladi?",
    variantlar: [
      "Shaxslar, tashkilotlar va davlat o‘rtasidagi huquq va majburiyatlar bilan bog‘liq munosabatlar",
      "Faqat iqtisodiy masalalar",
      "Faqat siyosiy qarorlar",
      "Faqat axloqiy masalalar"
    ],
    javob: "Shaxslar, tashkilotlar va davlat o‘rtasidagi huquq va majburiyatlar bilan bog‘liq munosabatlar"
  },
  {
    savol: "Huquqiy munosabatlarni kimlar tashkil qiladi?",
    variantlar: [
      "Shaxslar, tashkilotlar va davlat",
      "Faqat davlat organlari",
      "Faqat xususiy kompaniyalar",
      "Faqat jamiyat odatlari"
    ],
    javob: "Shaxslar, tashkilotlar va davlat"
  },
  {
    savol: "Huquqiy munosabatlarning sub’yekti kim bo‘lishi mumkin?",
    variantlar: [
      "Shaxs, jismoniy yoki yuridik shaxs",
      "Faqat davlat",
      "Faqat jamoat tashkilotlari",
      "Faqat nodavlat tashkilotlar"
    ],
    javob: "Shaxs, jismoniy yoki yuridik shaxs"
  },
  {
    savol: "Huquqiy munosabatlarda obyekt nima?",
    variantlar: [
      "Huquqiy munosabatlar orqali boshqariladigan moddiy yoki nomoddiy jihat",
      "Faqat shaxs",
      "Faqat davlat qarorlari",
      "Faqat iqtisodiy resurslar"
    ],
    javob: "Huquqiy munosabatlar orqali boshqariladigan moddiy yoki nomoddiy jihat"
  },
  {
    savol: "Huquqiy munosabatlarning mazmuni nima?",
    variantlar: [
      "Huquq va majburiyatlarning o‘zaro bog‘liqligi",
      "Faqat shaxsiy istaklar",
      "Faqat qonunlarning nomi",
      "Faqat ijtimoiy odatlar"
    ],
    javob: "Huquq va majburiyatlarning o‘zaro bog‘liqligi"
  },
  {
    savol: "Huquqiy munosabatlar qanday paydo bo‘ladi?",
    variantlar: [
      "Qonun va huquqiy normalar asosida",
      "Faqat ijtimoiy odatlar orqali",
      "Faqat axloqiy qoidalar bilan",
      "Faqat shaxsiy kelishuv orqali"
    ],
    javob: "Qonun va huquqiy normalar asosida"
  },
  {
    savol: "Huquqiy munosabatlarda majburiyat nima?",
    variantlar: [
      "Shaxs yoki tashkilotning qonuniy bajarishi kerak bo‘lgan vazifasi",
      "Faqat tavsiya sifatida",
      "Faqat axloqiy maslahatlardan iborat",
      "Faqat moliyaviy qoidalar"
    ],
    javob: "Shaxs yoki tashkilotning qonuniy bajarishi kerak bo‘lgan vazifasi"
  },
  {
    savol: "Huquqiy munosabatlarda huquq nima?",
    variantlar: [
      "Shaxs yoki tashkilotning qonun bilan kafolatlangan imkoniyati",
      "Faqat tavsiya",
      "Faqat moliyaviy daromad",
      "Faqat axloqiy talab"
    ],
    javob: "Shaxs yoki tashkilotning qonun bilan kafolatlangan imkoniyati"
  },
  {
    savol: "Huquqiy munosabatlar qaysi tarmoqlarda yuzaga keladi?",
    variantlar: [
      "Fuqarolik, jinoiy, mehnat, ma’muriy va boshqa huquq tarmoqlarida",
      "Faqat fuqarolik huquqida",
      "Faqat jinoiy huquqda",
      "Faqat axloqiy sohalarda"
    ],
    javob: "Fuqarolik, jinoiy, mehnat, ma’muriy va boshqa huquq tarmoqlarida"
  },
  {
    savol: "Huquqiy munosabatlar qanday shakllarda bo‘lishi mumkin?",
    variantlar: [
      "Shartnoma, qaror, qonun va boshqa rasmiy hujjatlar orqali",
      "Faqat og‘zaki kelishuv orqali",
      "Faqat axloqiy qoidalar orqali",
      "Faqat odat va an’analarga ko‘ra"
    ],
    javob: "Shartnoma, qaror, qonun va boshqa rasmiy hujjatlar orqali"
  },
  {
    savol: "Huquqiy munosabatlarning asosiy belgilari qaysilar?",
    variantlar: [
      "Huquqiy sub’yektlar, obyekt va mazmun",
      "Faqat ijtimoiy odatlar",
      "Faqat moliyaviy resurslar",
      "Faqat shaxsiy istaklar"
    ],
    javob: "Huquqiy sub’yektlar, obyekt va mazmun"
  },
  {
    savol: "Huquqiy munosabatlar qanday tartibga solinadi?",
    variantlar: [
      "Qonun va huquqiy normalar orqali",
      "Faqat shaxsiy kelishuv orqali",
      "Faqat axloqiy qoidalar bilan",
      "Faqat odatlar orqali"
    ],
    javob: "Qonun va huquqiy normalar orqali"
  },
  {
    savol: "Huquqiy munosabatlarda sub’yektlar o‘z huquqlarini qanday amalga oshiradi?",
    variantlar: [
      "Huquqiy normalar va qonunlar asosida",
      "Faqat shaxsiy istaklari orqali",
      "Faqat axloqiy tavsiyalar orqali",
      "Faqat ijtimoiy odatlar orqali"
    ],
    javob: "Huquqiy normalar va qonunlar asosida"
  },
  {
    savol: "Huquqiy munosabatlar uchun zarur shart nima?",
    variantlar: [
      "Huquqiy norma mavjudligi",
      "Faqat ijtimoiy majburiyat",
      "Faqat axloqiy qoidalar",
      "Faqat shaxsiy kelishuv"
    ],
    javob: "Huquqiy norma mavjudligi"
  },
  {
    savol: "Huquqiy munosabatlarda qaror va shartnomalarning roli nima?",
    variantlar: [
      "Shaxslar o‘rtasidagi huquq va majburiyatlarni aniq belgilash",
      "Faqat tavsiya berish",
      "Faqat axloqiy majburiyat yaratish",
      "Faqat moliyaviy majburiyat yaratish"
    ],
    javob: "Shaxslar o‘rtasidagi huquq va majburiyatlarni aniq belgilash"
  },
  {
    savol: "Huquqiy munosabatlarning asosiy maqsadi nima?",
    variantlar: [
      "Shaxs va jamiyatning huquq va majburiyatlarini tartibga solish",
      "Faqat iqtisodiy foyda",
      "Faqat siyosiy hokimiyatni oshirish",
      "Faqat axloqiy qoidalarni belgilash"
    ],
    javob: "Shaxs va jamiyatning huquq va majburiyatlarini tartibga solish"
  },
  {
    savol: "Huquqiy munosabatlar qonuniylikni qanday ta’minlaydi?",
    variantlar: [
      "Qonun va normativ hujjatlar orqali",
      "Faqat axloqiy qoidalar orqali",
      "Faqat shaxsiy kelishuv orqali",
      "Faqat ijtimoiy odatlar orqali"
    ],
    javob: "Qonun va normativ hujjatlar orqali"
  },
  {
    savol: "Huquqiy munosabatlarda majburiyatni buzish natijasi nima bo‘ladi?",
    variantlar: [
      "Davlat tomonidan belgilangan javobgarlik",
      "Faqat ijtimoiy tanqid",
      "Faqat shaxsiy maslahatlardan iborat",
      "Hech qanday oqibat yo‘q"
    ],
    javob: "Davlat tomonidan belgilangan javobgarlik"
  },
  {
    savol: "Huquqiy munosabatlar shaxs va jamiyat uchun nima beradi?",
    variantlar: [
      "Tartib, adolat va huquqiy himoya",
      "Faqat moliyaviy foyda",
      "Faqat siyosiy hokimiyat",
      "Faqat axloqiy tavsiyalar"
    ],
    javob: "Tartib, adolat va huquqiy himoya"
  }
],





theme7: [
  {
    savol: "Huquqbuzarlik deganda nima tushuniladi?",
    variantlar: [
      "Qonun va huquqiy normalarni buzish",
      "Faqat axloqiy qoidalarni buzish",
      "Faqat odat va an’analarni buzish",
      "Faqat moliyaviy shartlarni buzish"
    ],
    javob: "Qonun va huquqiy normalarni buzish"
  },
  {
    savol: "Huquqbuzarlik qanday turlarga bo‘linadi?",
    variantlar: [
      "Jinoiy, ma’muriy, fuqarolik va mehnat huquqbuzarligi",
      "Faqat axloqiy va ijtimoiy",
      "Faqat moliyaviy va siyosiy",
      "Faqat odat va an’analarga oid"
    ],
    javob: "Jinoiy, ma’muriy, fuqarolik va mehnat huquqbuzarligi"
  },
  {
    savol: "Jinoiy huquqbuzarlik nima bilan ifodalanadi?",
    variantlar: [
      "Jinoyat sodir etish va jazoga tortilish",
      "Moliyaviy majburiyatlarni bajarmaslik",
      "Faqat axloqiy qoidalarni buzish",
      "Ijtimoiy odatlarni buzish"
    ],
    javob: "Jinoyat sodir etish va jazoga tortilish"
  },
  {
    savol: "Ma’muriy huquqbuzarlik misoliga nima kiradi?",
    variantlar: [
      "Yo‘l qoidalarini buzish, ruxsatsiz savdo qilish",
      "Mol-mulkni o‘g‘irlash",
      "Nikohni bekor qilish",
      "Xalqaro shartnomani buzish"
    ],
    javob: "Yo‘l qoidalarini buzish, ruxsatsiz savdo qilish"
  },
  {
    savol: "Fuqarolik huquqbuzarligi nima bilan ifodalanadi?",
    variantlar: [
      "Shartnoma shartlarini buzish, mulkiy nizolar",
      "Jinoyat sodir etish",
      "Davlat siyosatini buzish",
      "Faqat axloqiy qoidalarni buzish"
    ],
    javob: "Shartnoma shartlarini buzish, mulkiy nizolar"
  },
  {
    savol: "Mehnat huquqbuzarligi nimani anglatadi?",
    variantlar: [
      "Ish shartnomasi yoki mehnat qonunlarini buzish",
      "Moliyaviy jinoyat",
      "Oila huquqini buzish",
      "Axloqiy qoidalarni buzish"
    ],
    javob: "Ish shartnomasi yoki mehnat qonunlarini buzish"
  },
  {
    savol: "Huquqbuzarlikning asosiy sababi nima bo‘lishi mumkin?",
    variantlar: [
      "Shaxsning qonunga bo‘ysunmasligi yoki ehtiyotsizlik",
      "Faqat iqtisodiy qiyinchiliklar",
      "Faqat siyosiy qarorlar",
      "Faqat axloqiy tushunmovchilik"
    ],
    javob: "Shaxsning qonunga bo‘ysunmasligi yoki ehtiyotsizlik"
  },
  {
    savol: "Huquqbuzarlikni aniqlash va unga javobgarlikni belgilash vazifasi kimga yuklatilgan?",
    variantlar: [
      "Davlat organlariga",
      "Faqat shaxsga",
      "Faqat jamiyatga",
      "Faqat oilaga"
    ],
    javob: "Davlat organlariga"
  },
  {
    savol: "Huquqbuzarlikni oldini olishning asosiy vositalari qaysilar?",
    variantlar: [
      "Qonunlar, huquqiy tarbiya va nazorat",
      "Faqat axloqiy qoidalar",
      "Faqat iqtisodiy imtiyozlar",
      "Faqat ijtimoiy bosim"
    ],
    javob: "Qonunlar, huquqiy tarbiya va nazorat"
  },
  {
    savol: "Jinoiy javobgarlik qanday shakllarda bo‘lishi mumkin?",
    variantlar: [
      "Jazo, qamoq, jarima yoki boshqa jazolar",
      "Faqat moliyaviy jarima",
      "Faqat og‘zaki tanqid",
      "Faqat ijtimoiy izolyatsiya"
    ],
    javob: "Jazo, qamoq, jarima yoki boshqa jazolar"
  },
  {
    savol: "Ma’muriy huquqbuzarlik uchun javobgarlik qanday belgilanadi?",
    variantlar: [
      "Jarima, ma’muriy hibs yoki ogohlantirish orqali",
      "Faqat og‘zaki tanbeh",
      "Faqat jamiyat bosimi",
      "Faqat iqtisodiy sanksiya"
    ],
    javob: "Jarima, ma’muriy hibs yoki ogohlantirish orqali"
  },
  {
    savol: "Fuqarolik huquqbuzarligi natijasida nima sodir bo‘ladi?",
    variantlar: [
      "Mol-mulkni tiklash yoki kompensatsiya talab qilinadi",
      "Jazo qamoqqa tortish",
      "Faqat axloqiy tanbeh",
      "Davlat siyosati o‘zgaradi"
    ],
    javob: "Mol-mulkni tiklash yoki kompensatsiya talab qilinadi"
  },
  {
    savol: "Mehnat huquqbuzarligi natijasida nima sodir bo‘ladi?",
    variantlar: [
      "Ish haqi, shartnoma va kompensatsiya masalalari hal qilinadi",
      "Faqat ijtimoiy tanbeh",
      "Faqat jamiyat bosimi",
      "Faqat axloqiy ogohlantirish"
    ],
    javob: "Ish haqi, shartnoma va kompensatsiya masalalari hal qilinadi"
  },
  {
    savol: "Huquqbuzarlikning oldini olishda huquqiy tarbiya nima vazifa bajaradi?",
    variantlar: [
      "Shaxslarni qonunlarga hurmat bilan tarbiyalash",
      "Faqat iqtisodiy yordam berish",
      "Faqat siyosiy bosim",
      "Faqat axloqiy maslahat"
    ],
    javob: "Shaxslarni qonunlarga hurmat bilan tarbiyalash"
  },
  {
    savol: "Huquqbuzarlik va axloqbuzarlik o‘rtasidagi farq nima?",
    variantlar: [
      "Huquqbuzarlik qonun bilan jazolanadi, axloqbuzarlik ijtimoiy tanqid bilan",
      "Hech qanday farq yo‘q",
      "Faqat moliyaviy oqibatda farq bor",
      "Faqat siyosiy oqibatda farq bor"
    ],
    javob: "Huquqbuzarlik qonun bilan jazolanadi, axloqbuzarlik ijtimoiy tanqid bilan"
  },
  {
    savol: "Huquqbuzarlik sodir bo‘lganida kimga murojaat qilish mumkin?",
    variantlar: [
      "Sud, prokuratura va boshqa davlat organlariga",
      "Faqat jamiyat a’zolariga",
      "Faqat oilaga",
      "Faqat ijtimoiy tashkilotlarga"
    ],
    javob: "Sud, prokuratura va boshqa davlat organlariga"
  },
  {
    savol: "Huquqbuzarlikni turlari qancha asosiy bo‘linadi?",
    variantlar: [
      "To‘rtta: jinoiy, ma’muriy, fuqarolik va mehnat",
      "Faqat ikkita: jinoiy va fuqarolik",
      "Faqat uchta: jinoiy, fuqarolik, mehnat",
      "Faqat bitta: jinoiy"
    ],
    javob: "To‘rtta: jinoiy, ma’muriy, fuqarolik va mehnat"
  },
  {
    savol: "Huquqbuzarlikning ijtimoiy oqibati nima bo‘ladi?",
    variantlar: [
      "Jamiyat tartibining buzilishi va ishonchning kamayishi",
      "Faqat moliyaviy yo‘qotishlar",
      "Faqat siyosiy oqibatlar",
      "Faqat axloqiy tanbeh"
    ],
    javob: "Jamiyat tartibining buzilishi va ishonchning kamayishi"
  },
  {
    savol: "Huquqbuzarlikni kamaytirishning eng samarali usuli nima?",
    variantlar: [
      "Huquqiy tarbiya, nazorat va qonun ijrosi",
      "Faqat ijtimoiy bosim",
      "Faqat moliyaviy yordam",
      "Faqat axloqiy maslahat"
    ],
    javob: "Huquqiy tarbiya, nazorat va qonun ijrosi"
  }
],







theme8: [
  {
    savol: "Voyaga yetmaganlar deganda kimlar tushuniladi?",
    variantlar: [
      "Huquqiy javobgarlikka to‘liq yaroqsiz shaxslar, odatda 14 yoshgacha bo‘lganlar",
      "Faqat 18 yoshdan kichik shaxslar",
      "Faqat 16 yoshdan kichik shaxslar",
      "Faqat 12 yoshdan kichik shaxslar"
    ],
    javob: "Huquqiy javobgarlikka to‘liq yaroqsiz shaxslar, odatda 14 yoshgacha bo‘lganlar"
  },
  {
    savol: "Voyaga yetmaganlarning javobgarligi qanday asosda belgilanadi?",
    variantlar: [
      "Jinoyat kodeksi va boshqa me’yoriy hujjatlar asosida",
      "Faqat ijtimoiy odatlar orqali",
      "Faqat axloqiy qoidalar orqali",
      "Faqat oilaviy kelishuv orqali"
    ],
    javob: "Jinoyat kodeksi va boshqa me’yoriy hujjatlar asosida"
  },
  {
    savol: "Voyaga yetmaganlar qaysi jinoyatlarda javobgar bo‘lishi mumkin?",
    variantlar: [
      "Jinoyatning og‘irligi va yoshga qarab cheklangan javobgarlik",
      "Har qanday jinoyatda to‘liq javobgar",
      "Faqat ma’muriy huquqbuzarlikda",
      "Faqat moliyaviy huquqbuzarlikda"
    ],
    javob: "Jinoyatning og‘irligi va yoshga qarab cheklangan javobgarlik"
  },
  {
    savol: "Voyaga yetmaganlar uchun alohida sud tartibi nima bilan belgilanadi?",
    variantlar: [
      "Maxsus jinoyat ishlari bo‘yicha sudlar yoki bolalar sudlari",
      "Faqat umumiy sudlar",
      "Faqat ma’muriy organlar",
      "Faqat oilaviy komissiyalar"
    ],
    javob: "Maxsus jinoyat ishlari bo‘yicha sudlar yoki bolalar sudlari"
  },
  {
    savol: "Voyaga yetmaganlarning javobgarligi qanday turlarga bo‘linadi?",
    variantlar: [
      "Jinoyat va ma’muriy javobgarlik",
      "Faqat jinoyat javobgarligi",
      "Faqat ma’muriy javobgarlik",
      "Faqat moliyaviy javobgarlik"
    ],
    javob: "Jinoyat va ma’muriy javobgarlik"
  },
  {
    savol: "Voyaga yetmaganlar jinoiy javobgarlikka necha yoshdan tortib jalb qilinadi?",
    variantlar: [
      "Odatda 14 yoshdan",
      "Faqat 16 yoshdan",
      "Faqat 12 yoshdan",
      "Faqat 18 yoshdan"
    ],
    javob: "Odatda 14 yoshdan"
  },
  {
    savol: "Voyaga yetmaganlar uchun jazolar qanday bo‘lishi mumkin?",
    variantlar: [
      "Ma’muriy ogohlantirish, ijtimoiy ishlar, maxsus ta’lim markazlariga jo‘natish",
      "Faqat qamoq",
      "Faqat moliyaviy jarima",
      "Faqat og‘zaki tanbeh"
    ],
    javob: "Ma’muriy ogohlantirish, ijtimoiy ishlar, maxsus ta’lim markazlariga jo‘natish"
  },
  {
    savol: "Voyaga yetmaganlar jinoyati og‘ir bo‘lsa nima qilinadi?",
    variantlar: [
      "Ularni maxsus koloniyalarga joylashtirish yoki oilaviy nazoratga berish",
      "Faqat umumiy qamoq",
      "Faqat moliyaviy kompensatsiya",
      "Faqat og‘zaki ogohlantirish"
    ],
    javob: "Ularni maxsus koloniyalarga joylashtirish yoki oilaviy nazoratga berish"
  },
  {
    savol: "Voyaga yetmaganlar javobgarligida oilaning roli qanday?",
    variantlar: [
      "Mas’uliyatni kamaytirish va tarbiyaviy ishlarni qo‘llab-quvvatlash",
      "Hech qanday roli yo‘q",
      "Faqat moliyaviy yordam berish",
      "Faqat axloqiy tanbeh berish"
    ],
    javob: "Mas’uliyatni kamaytirish va tarbiyaviy ishlarni qo‘llab-quvvatlash"
  },
  {
    savol: "Voyaga yetmaganlar jinoyatini aniqlashda kimlar jalb qilinadi?",
    variantlar: [
      "Politsiya, prokuratura va bolalar bo‘yicha ixtisoslashgan organlar",
      "Faqat sudyalar",
      "Faqat oilaviy a’zolar",
      "Faqat jamiyat vakillari"
    ],
    javob: "Politsiya, prokuratura va bolalar bo‘yicha ixtisoslashgan organlar"
  },
  {
    savol: "Voyaga yetmaganlarning javobgarligi nima uchun alohida ko‘riladi?",
    variantlar: [
      "Ularning psixologik va ijtimoiy rivojlanish xususiyatlari tufayli",
      "Faqat qonuniy sabablar bilan",
      "Faqat moliyaviy sabablar bilan",
      "Faqat siyosiy sabablar bilan"
    ],
    javob: "Ularning psixologik va ijtimoiy rivojlanish xususiyatlari tufayli"
  },
  {
    savol: "Voyaga yetmaganlar jinoyatida qaysi asosiy maqsad ko‘zlanadi?",
    variantlar: [
      "Tarbiyaviy ta’sir va ijtimoiy reabilitatsiya",
      "Faqat jazo qo‘llash",
      "Faqat moliyaviy jazolar",
      "Faqat oilaviy javobgarlik"
    ],
    javob: "Tarbiyaviy ta’sir va ijtimoiy reabilitatsiya"
  },
  {
    savol: "Voyaga yetmaganlar jinoyati sodir bo‘lganda sud jarayoni qanday o‘tadi?",
    variantlar: [
      "Maxsus bolalar sudida, tezkor va tarbiyaviy yo‘nalish bilan",
      "Faqat umumiy sudda",
      "Faqat oilaviy yig‘ilishda",
      "Faqat politsiya xodimlari tomonidan"
    ],
    javob: "Maxsus bolalar sudida, tezkor va tarbiyaviy yo‘nalish bilan"
  },
  {
    savol: "Voyaga yetmaganlar jinoyatida ogohlantirish qanday ishlatiladi?",
    variantlar: [
      "Xulq-atvorni to‘g‘rilash va tarbiyaviy maqsadda",
      "Faqat jazoni oshirish uchun",
      "Faqat moliyaviy kompensatsiya sifatida",
      "Faqat axloqiy tanbeh sifatida"
    ],
    javob: "Xulq-atvorni to‘g‘rilash va tarbiyaviy maqsadda"
  },
  {
    savol: "Voyaga yetmaganlar javobgarligida psixologik yordam nima uchun muhim?",
    variantlar: [
      "Ularning xulqini va ruhiy holatini to‘g‘rilash uchun",
      "Faqat qonun ijrosi uchun",
      "Faqat moliyaviy hisob-kitoblar uchun",
      "Faqat oilaviy nazorat uchun"
    ],
    javob: "Ularning xulqini va ruhiy holatini to‘g‘rilash uchun"
  },
  {
    savol: "Voyaga yetmaganlar jinoyati uchun javobgarlik qachon boshlanadi?",
    variantlar: [
      "Jinoyat sodir etilgan yoshga yetgan paytdan",
      "Faqat 18 yoshdan",
      "Faqat 16 yoshdan",
      "Faqat 12 yoshdan"
    ],
    javob: "Jinoyat sodir etilgan yoshga yetgan paytdan"
  },
  {
    savol: "Voyaga yetmaganlar javobgarligi kimlar tomonidan nazorat qilinadi?",
    variantlar: [
      "Sudlar, prokuratura va ixtisoslashgan bolalar organlari",
      "Faqat oilalar",
      "Faqat jamiyat a’zolari",
      "Faqat maktab va muassasalar"
    ],
    javob: "Sudlar, prokuratura va ixtisoslashgan bolalar organlari"
  },
  {
    savol: "Voyaga yetmaganlar javobgarligi asosiy maqsadi nima?",
    variantlar: [
      "Tarbiyaviy ta’sir va jamiyatga moslashtirish",
      "Faqat jazoni qo‘llash",
      "Faqat moliyaviy jarima",
      "Faqat axloqiy tanbeh"
    ],
    javob: "Tarbiyaviy ta’sir va jamiyatga moslashtirish"
  },
  {
    savol: "Voyaga yetmaganlar jinoyati va ularning javobgarligi jamiyat uchun nima beradi?",
    variantlar: [
      "Tartib, adolat va tarbiyaviy imkoniyat",
      "Faqat moliyaviy foyda",
      "Faqat siyosiy nazorat",
      "Faqat axloqiy tavsiyalar"
    ],
    javob: "Tartib, adolat va tarbiyaviy imkoniyat"
  }
],






theme9: [
  {
    savol: "Konstitutsiya nima?",
    variantlar: [
      "Davlatning asosiy qonuni, asosiy huquq va majburiyatlarni belgilovchi hujjat",
      "Faqat hukumat ichki qoidalari",
      "Faqat prezident qarorlari",
      "Faqat mahalliy organlar qoidalari"
    ],
    javob: "Davlatning asosiy qonuni, asosiy huquq va majburiyatlarni belgilovchi hujjat"
  },
  {
    savol: "Huquqiy davlat prinsipi nimani bildiradi?",
    variantlar: [
      "Davlat faoliyati qonunlar asosida va barcha shaxslar uchun teng bo‘lishi",
      "Faqat hukumat a’zolariga qonun amal qilishi",
      "Faqat moliyaviy qarorlarni nazorat qilish",
      "Faqat ijtimoiy odatlarni tartibga solish"
    ],
    javob: "Davlat faoliyati qonunlar asosida va barcha shaxslar uchun teng bo‘lishi"
  },
  {
    savol: "Konstitutsiya qaysi sohalarda amal qiladi?",
    variantlar: [
      "Siyosiy, iqtisodiy, ijtimoiy va huquqiy sohalarda",
      "Faqat siyosiy sohada",
      "Faqat moliyaviy sohada",
      "Faqat axloqiy va odatiy sohalarda"
    ],
    javob: "Siyosiy, iqtisodiy, ijtimoiy va huquqiy sohalarda"
  },
  {
    savol: "Huquqiy davlatning asosiy belgilaridan biri nima?",
    variantlar: [
      "Qonun ustuvorligi, shaffoflik va sud mustaqilligi",
      "Faqat hukumatning kuchi",
      "Faqat moliyaviy nazorat",
      "Faqat axloqiy qoidalar"
    ],
    javob: "Qonun ustuvorligi, shaffoflik va sud mustaqilligi"
  },
  {
    savol: "Konstitutsiya fuqarolarga qanday kafolatlar beradi?",
    variantlar: [
      "Asosiy huquq va erkinliklarni",
      "Faqat moliyaviy imtiyozlarni",
      "Faqat siyosiy manfaatlarni",
      "Faqat axloqiy yo‘l-yo‘riqlarni"
    ],
    javob: "Asosiy huquq va erkinliklarni"
  },
  {
    savol: "Huquqiy davlatda hokimiyatning bo‘linishi qanday amalga oshadi?",
    variantlar: [
      "Ijro, qonun chiqaruvchi va sud hokimiyati mustaqil bo‘ladi",
      "Faqat prezident qaroriga bog‘liq",
      "Faqat hukumat nazoratida",
      "Faqat mahalliy organlar tomonidan"
    ],
    javob: "Ijro, qonun chiqaruvchi va sud hokimiyati mustaqil bo‘ladi"
  },
  {
    savol: "Konstitutsiya nima uchun o‘zgartirilishi mumkin?",
    variantlar: [
      "Jamiyat ehtiyojlari va demokratik talablar asosida",
      "Faqat prezident xohlasa",
      "Faqat hukumat qaroriga binoan",
      "Faqat xalq odatlariga moslash uchun"
    ],
    javob: "Jamiyat ehtiyojlari va demokratik talablar asosida"
  },
  {
    savol: "Huquqiy davlat prinsipida qonun oldida barcha shaxslar qanday bo‘ladi?",
    variantlar: [
      "Teng va majburiyatlar bir xil",
      "Faqat hukumat a’zolari teng",
      "Faqat boy va kuchli shaxslar teng",
      "Faqat fuqarolik tashkilotlari teng"
    ],
    javob: "Teng va majburiyatlar bir xil"
  },
  {
    savol: "Konstitutsiya qaysi huquqiy manbalar ustuvor hisoblanadi?",
    variantlar: [
      "Barcha qonunlar va normativ hujjatlar",
      "Faqat mahalliy qarorlar",
      "Faqat prezident farmonlari",
      "Faqat odatiy qoidalar"
    ],
    javob: "Barcha qonunlar va normativ hujjatlar"
  },
  {
    savol: "Huquqiy davlatda sud mustaqilligi nimani ta’minlaydi?",
    variantlar: [
      "Adolatli qarorlar va qonuniy himoya",
      "Faqat hukumat qarorlari",
      "Faqat moliyaviy nazorat",
      "Faqat ijtimoiy odatlar"
    ],
    javob: "Adolatli qarorlar va qonuniy himoya"
  },
  {
    savol: "Konstitutsiya qaysi shakllarda bo‘lishi mumkin?",
    variantlar: [
      "Yozma va qisman an’anaviy",
      "Faqat og‘zaki",
      "Faqat hukumat qarori bilan",
      "Faqat xalq odatiga asoslangan"
    ],
    javob: "Yozma va qisman an’anaviy"
  },
  {
    savol: "Huquqiy davlat prinsipi jamiyatda nima yaratadi?",
    variantlar: [
      "Barqarorlik, adolat va qonun ustuvorligini",
      "Faqat iqtisodiy foyda",
      "Faqat siyosiy boshqaruv",
      "Faqat axloqiy tartib"
    ],
    javob: "Barqarorlik, adolat va qonun ustuvorligini"
  },
  {
    savol: "Konstitutsiya fuqarolarning qaysi huquqlarini himoya qiladi?",
    variantlar: [
      "Shaxsiy, siyosiy, iqtisodiy va ijtimoiy huquqlar",
      "Faqat moliyaviy huquqlar",
      "Faqat siyosiy manfaatlar",
      "Faqat axloqiy normalar"
    ],
    javob: "Shaxsiy, siyosiy, iqtisodiy va ijtimoiy huquqlar"
  },
  {
    savol: "Huquqiy davlatda davlat organlari faoliyati qanday bo‘lishi kerak?",
    variantlar: [
      "Qonunlarga mos, shaffof va javobgar",
      "Faqat hukumat qaroriga binoan",
      "Faqat moliyaviy qarorlarni nazorat qiladi",
      "Faqat axloqiy qoidalarni bajara oladi"
    ],
    javob: "Qonunlarga mos, shaffof va javobgar"
  },
  {
    savol: "Konstitutsiya o‘zgarishi uchun kimning roziligi kerak?",
    variantlar: [
      "Odatda parlament va xalq tomonidan tasdiqlash",
      "Faqat prezidentning roziligi",
      "Faqat hukumat qarori",
      "Faqat sudning roziligi"
    ],
    javob: "Odatda parlament va xalq tomonidan tasdiqlash"
  },
  {
    savol: "Huquqiy davlatda inson huquqlari va erkinliklarini kim kafolatlaydi?",
    variantlar: [
      "Davlat va uning organlari",
      "Faqat oilaviy tashkilotlar",
      "Faqat jamiyat a’zolari",
      "Faqat maktab va ta’lim muassasalari"
    ],
    javob: "Davlat va uning organlari"
  },
  {
    savol: "Konstitutsiya davlat hokimiyatini qanday tartibga soladi?",
    variantlar: [
      "Hokimiyatning bo‘linishi va vakolatlarni aniqlash orqali",
      "Faqat hukumat qarori bilan",
      "Faqat moliyaviy nazorat orqali",
      "Faqat ijtimoiy odat bilan"
    ],
    javob: "Hokimiyatning bo‘linishi va vakolatlarni aniqlash orqali"
  },
  {
    savol: "Huquqiy davlatda qonun oldida kimlar teng hisoblanadi?",
    variantlar: [
      "Barcha fuqarolar va davlat organlari",
      "Faqat hukumat a’zolari",
      "Faqat boy shaxslar",
      "Faqat siyosiy tashkilotlar"
    ],
    javob: "Barcha fuqarolar va davlat organlari"
  },
  {
    savol: "Konstitutsiya va huquqiy davlat prinsiplari jamiyat uchun nima beradi?",
    variantlar: [
      "Adolat, barqarorlik va qonun ustuvorligini ta’minlaydi",
      "Faqat moliyaviy foyda",
      "Faqat siyosiy nazorat",
      "Faqat axloqiy tavsiyalar"
    ],
    javob: "Adolat, barqarorlik va qonun ustuvorligini ta’minlaydi"
  }
],








theme10: [
  {
    savol: "O‘zbekiston Respublikasi fuqaroligi nima?",
    variantlar: [
      "Shaxsning O‘zbekiston davlati bilan huquqiy va siyosiy munosabatini belgilovchi qonuniy maqom",
      "Faqat pasport egasi bo‘lish",
      "Faqat O‘zbekistonda yashash",
      "Faqat soliq to‘lovchi bo‘lish"
    ],
    javob: "Shaxsning O‘zbekiston davlati bilan huquqiy va siyosiy munosabatini belgilovchi qonuniy maqom"
  },
  {
    savol: "O‘zbekiston fuqaroligi qanday yo‘llar bilan olinishi mumkin?",
    variantlar: [
      "Tug‘ilish, qabul qilish va tiklanish",
      "Faqat tug‘ilish orqali",
      "Faqat nikoh orqali",
      "Faqat yashash joyiga qarab"
    ],
    javob: "Tug‘ilish, qabul qilish va tiklanish"
  },
  {
    savol: "O‘zbekiston fuqaroligini tug‘ilish yo‘li bilan kim oladi?",
    variantlar: [
      "Ota-onasi O‘zbekiston fuqarosi bo‘lgan bola",
      "Faqat O‘zbekistonda tug‘ilgan bola",
      "Faqat ota fuqarosi bo‘lsa yetarli",
      "Faqat ona fuqarosi bo‘lsa yetarli"
    ],
    javob: "Ota-onasi O‘zbekiston fuqarosi bo‘lgan bola"
  },
  {
    savol: "O‘zbekiston fuqaroligini qabul qilish nimani anglatadi?",
    variantlar: [
      "Chet el fuqarosining O‘zbekiston fuqaroligini olish jarayoni",
      "Faqat tug‘ilgan fuqarolikni qayta tasdiqlash",
      "Faqat vaqtinchalik yashash huquqi",
      "Faqat ish joyini olish"
    ],
    javob: "Chet el fuqarosining O‘zbekiston fuqaroligini olish jarayoni"
  },
  {
    savol: "O‘zbekiston fuqaroligini yo‘qotish mumkinmi?",
    variantlar: [
      "Ha, qonunda belgilangan hollarda",
      "Yo‘q, hech qachon yo‘qotib bo‘lmaydi",
      "Faqat o‘z ixtiyori bilan emas",
      "Faqat sud qarori bilan emas"
    ],
    javob: "Ha, qonunda belgilangan hollarda"
  },
  {
    savol: "O‘zbekiston fuqaroligi qanday huquqlar beradi?",
    variantlar: [
      "Saylash va saylanish, davlat organlarida ishlash, himoyaga ega bo‘lish",
      "Faqat ishlash huquqi",
      "Faqat ta’lim olish huquqi",
      "Faqat soliqlarni to‘lash"
    ],
    javob: "Saylash va saylanish, davlat organlarida ishlash, himoyaga ega bo‘lish"
  },
  {
    savol: "Fuqarolik ikki yoki undan ortiq davlatda bo‘lishiga nima deyiladi?",
    variantlar: [
      "Ko‘p fuqarolilik",
      "Faqat tug‘ilish fuqaroligi",
      "Faqat qabul qilish fuqaroligi",
      "Faqat vaqtinchalik yashash"
    ],
    javob: "Ko‘p fuqarolilik"
  },
  {
    savol: "O‘zbekiston fuqaroligini tiklash qanday amalga oshadi?",
    variantlar: [
      "Oldin O‘zbekiston fuqarosi bo‘lgan shaxs qayta fuqarolik oladi",
      "Faqat tug‘ilish orqali",
      "Faqat chet elda yashab",
      "Faqat ish beruvchi orqali"
    ],
    javob: "Oldin O‘zbekiston fuqarosi bo‘lgan shaxs qayta fuqarolik oladi"
  },
  {
    savol: "O‘zbekiston fuqaroligi bilan birga chet el fuqaroligini saqlash mumkinmi?",
    variantlar: [
      "Ha, qonunda belgilangan hollarda",
      "Yo‘q, faqat bitta fuqarolik mumkin",
      "Faqat tug‘ilish orqali emas",
      "Faqat sud ruxsati bilan"
    ],
    javob: "Ha, qonunda belgilangan hollarda"
  },
  {
    savol: "O‘zbekiston fuqaroligi olgan shaxs qanday majburiyatlarga ega?",
    variantlar: [
      "Qonunlarga rioya qilish, soliqlarni to‘lash, harbiy xizmat",
      "Faqat ish joyi olish",
      "Faqat ta’lim olish",
      "Faqat pasport olish"
    ],
    javob: "Qonunlarga rioya qilish, soliqlarni to‘lash, harbiy xizmat"
  },
  {
    savol: "Fuqaroligi yo‘q shaxsga nima deyiladi?",
    variantlar: [
      "Apatrid",
      "Migratsiya",
      "Doimiy rezident",
      "Vaqtinchalik fuqarosi"
    ],
    javob: "Apatrid"
  },
  {
    savol: "O‘zbekiston fuqaroligi qanday qonun bilan tartibga solinadi?",
    variantlar: [
      "O‘zbekiston Respublikasi Fuqarolik to‘g‘risidagi qonun",
      "Faqat Prezident farmoni",
      "Faqat Vazirlar Mahkamasi qarori",
      "Faqat sud qarorlari"
    ],
    javob: "O‘zbekiston Respublikasi Fuqarolik to‘g‘risidagi qonun"
  },
  {
    savol: "O‘zbekiston fuqarosi bo‘lish uchun minimal yosh talabi bormi?",
    variantlar: [
      "Yo‘q, fuqarolik tug‘ilish orqali avtomatik",
      "Ha, 18 yoshdan",
      "Ha, 16 yoshdan",
      "Ha, 14 yoshdan"
    ],
    javob: "Yo‘q, fuqarolik tug‘ilish orqali avtomatik"
  },
  {
    savol: "O‘zbekiston fuqaroligini rasmiylashtirishda kimga murojaat qilinadi?",
    variantlar: [
      "Davlat migratsiya xizmati",
      "Faqat sud",
      "Faqat maktab",
      "Faqat oilaviy idora"
    ],
    javob: "Davlat migratsiya xizmati"
  },
  {
    savol: "Fuqaroligi bo‘lmagan shaxslar O‘zbekiston hududida qanday huquqlarga ega?",
    variantlar: [
      "Cheklangan huquqlar, qonun asosida himoyalangan",
      "To‘liq fuqarolik huquqlari",
      "Faqat moliyaviy huquqlar",
      "Faqat ish joyi olish"
    ],
    javob: "Cheklangan huquqlar, qonun asosida himoyalangan"
  },
  {
    savol: "O‘zbekiston fuqarosi pasporti nimani tasdiqlaydi?",
    variantlar: [
      "Shaxsning O‘zbekiston fuqarosi ekanligini",
      "Faqat yashash joyini",
      "Faqat moliyaviy holatini",
      "Faqat ish joyini"
    ],
    javob: "Shaxsning O‘zbekiston fuqarosi ekanligini"
  },
  {
    savol: "O‘zbekiston fuqarosi boshqa davlat fuqaroligini qabul qilsa nima bo‘ladi?",
    variantlar: [
      "Ba’zi hollarda ikki fuqarolik qonuniy, ba’zan yo‘q",
      "Har doim yo‘q",
      "Faqat tug‘ilgan joyga qarab",
      "Faqat sud qarori bilan"
    ],
    javob: "Ba’zi hollarda ikki fuqarolik qonuniy, ba’zan yo‘q"
  },
  {
    savol: "O‘zbekiston fuqaroligi qanday kafolatlar beradi?",
    variantlar: [
      "Huquqiy himoya, davlat himoyasi va siyosiy huquqlar",
      "Faqat moliyaviy foyda",
      "Faqat ish joyi va ta’lim",
      "Faqat axloqiy tavsiyalar"
    ],
    javob: "Huquqiy himoya, davlat himoyasi va siyosiy huquqlar"
  },
  {
    savol: "O‘zbekiston fuqaroligi bilan birga chet el fuqaroligi saqlanadigan holatlar qanday ataladi?",
    variantlar: [
      "Ko‘p fuqarolilik",
      "Faqat tug‘ilish fuqaroligi",
      "Faqat vaqtinchalik yashash",
      "Faqat ruxsatnoma"
    ],
    javob: "Ko‘p fuqarolilik"
  },
  {
    savol: "O‘zbekiston fuqaroligi shaxsga jamiyatda qanday maqom beradi?",
    variantlar: [
      "Davlat organlarida huquqiy maqom va himoya",
      "Faqat moliyaviy imkoniyat",
      "Faqat ishga kirish imkoniyati",
      "Faqat axloqiy tanbeh"
    ],
    javob: "Davlat organlarida huquqiy maqom va himoya"
  }
],





theme11: [
  {
    savol: "Fuqarolarning asosiy erkinligi nima?",
    variantlar: [
      "Shaxsiy hayot, so‘z erkinligi va harakat erkinligi",
      "Faqat moliyaviy imkoniyatlar",
      "Faqat ishga kirish huquqi",
      "Faqat ta’lim olish huquqi"
    ],
    javob: "Shaxsiy hayot, so‘z erkinligi va harakat erkinligi"
  },
  {
    savol: "Fuqarolarning huquqlari nimani ta’minlaydi?",
    variantlar: [
      "Shaxsiy va siyosiy manfaatlarni, xavfsizlik va adolatni",
      "Faqat moliyaviy foyda",
      "Faqat ish joyi va ta’lim",
      "Faqat davlat xizmatlari"
    ],
    javob: "Shaxsiy va siyosiy manfaatlarni, xavfsizlik va adolatni"
  },
  {
    savol: "Fuqarolarning burchlari nima?",
    variantlar: [
      "Qonunlarga rioya qilish, soliqlarni to‘lash, jamiyatga foyda keltirish",
      "Faqat moliyaviy majburiyatlar",
      "Faqat ish joyi olish",
      "Faqat axloqiy tavsiyalarni bajarish"
    ],
    javob: "Qonunlarga rioya qilish, soliqlarni to‘lash, jamiyatga foyda keltirish"
  },
  {
    savol: "Fuqarolarning siyosiy huquqlariga nimalar kiradi?",
    variantlar: [
      "Saylash va saylanish, siyosiy tashkilotlarda ishtirok",
      "Faqat ish joyi olish",
      "Faqat moliyaviy huquqlar",
      "Faqat ta’lim olish"
    ],
    javob: "Saylash va saylanish, siyosiy tashkilotlarda ishtirok"
  },
  {
    savol: "Fuqarolarning ijtimoiy huquqlari nimani ta’minlaydi?",
    variantlar: [
      "Ta’lim, sog‘liqni saqlash va ijtimoiy himoya",
      "Faqat ishga kirish huquqi",
      "Faqat moliyaviy foyda",
      "Faqat siyosiy nazorat"
    ],
    javob: "Ta’lim, sog‘liqni saqlash va ijtimoiy himoya"
  },
  {
    savol: "Fuqarolar burchlarini bajarmaslik oqibatida nima bo‘lishi mumkin?",
    variantlar: [
      "Qonuniy javobgarlik",
      "Faqat og‘zaki tanbeh",
      "Faqat moliyaviy maslahat",
      "Faqat ta’limdan cheklanish"
    ],
    javob: "Qonuniy javobgarlik"
  },
  {
    savol: "Shaxsiy erkinlik nimani bildiradi?",
    variantlar: [
      "Shaxsning hayot, harakat va xulq-atvorini qonun doirasida belgilash",
      "Faqat moliyaviy imkoniyat",
      "Faqat ishga kirish huquqi",
      "Faqat ta’lim olish huquqi"
    ],
    javob: "Shaxsning hayot, harakat va xulq-atvorini qonun doirasida belgilash"
  },
  {
    savol: "So‘z erkinligi nimani anglatadi?",
    variantlar: [
      "O‘z fikrini erkin ifoda etish huquqi",
      "Faqat matbuot ishlari",
      "Faqat siyosiy faoliyat",
      "Faqat ijtimoiy tarmoqlarda"
    ],
    javob: "O‘z fikrini erkin ifoda etish huquqi"
  },
  {
    savol: "Fuqarolarning iqtisodiy huquqlari nimani o‘z ichiga oladi?",
    variantlar: [
      "Mehnat qilish, mulkka ega bo‘lish va ish faoliyatida erkinlik",
      "Faqat ishga kirish",
      "Faqat soliq to‘lash",
      "Faqat davlat ishlariga jalb qilish"
    ],
    javob: "Mehnat qilish, mulkka ega bo‘lish va ish faoliyatida erkinlik"
  },
  {
    savol: "Jamiyat oldidagi burchlar nima?",
    variantlar: [
      "Qonunlarga rioya qilish va jamiyat manfaatlarini himoya qilish",
      "Faqat moliyaviy majburiyatlar",
      "Faqat ishga kirish",
      "Faqat axloqiy tavsiyalar"
    ],
    javob: "Qonunlarga rioya qilish va jamiyat manfaatlarini himoya qilish"
  },
  {
    savol: "Fuqarolarning ekologik burchi nimani bildiradi?",
    variantlar: [
      "Tabiatni asrash va atrof-muhitni himoya qilish",
      "Faqat soliq to‘lash",
      "Faqat ishga kirish",
      "Faqat ta’lim olish"
    ],
    javob: "Tabiatni asrash va atrof-muhitni himoya qilish"
  },
  {
    savol: "Fuqarolarning huquqlari va erkinliklari kim tomonidan kafolatlanadi?",
    variantlar: [
      "Davlat va uning qonunlari",
      "Faqat oilaviy tashkilotlar",
      "Faqat nodavlat tashkilotlar",
      "Faqat jamiyat a’zolari"
    ],
    javob: "Davlat va uning qonunlari"
  },
  {
    savol: "Fuqarolarning madaniy huquqlari nimani ta’minlaydi?",
    variantlar: [
      "Ta’lim, ilm-fan, san’at va madaniyat sohalarida ishtirok",
      "Faqat ishga kirish",
      "Faqat moliyaviy foyda",
      "Faqat siyosiy faoliyat"
    ],
    javob: "Ta’lim, ilm-fan, san’at va madaniyat sohalarida ishtirok"
  },
  {
    savol: "Fuqarolarning ijtimoiy burchlari nimalardan iborat?",
    variantlar: [
      "Oila va jamiyatga foyda keltirish, qonunlarga rioya qilish",
      "Faqat moliyaviy majburiyatlar",
      "Faqat ishga kirish",
      "Faqat ta’lim olish"
    ],
    javob: "Oila va jamiyatga foyda keltirish, qonunlarga rioya qilish"
  },
  {
    savol: "Fuqarolarning siyosiy erkinligi nimani anglatadi?",
    variantlar: [
      "Saylash va saylanish, siyosiy fikr bildirishi",
      "Faqat ishga kirish",
      "Faqat moliyaviy foyda",
      "Faqat axloqiy tavsiyalar"
    ],
    javob: "Saylash va saylanish, siyosiy fikr bildirishi"
  },
  {
    savol: "Fuqarolarning iqtisodiy burchlari nimani o‘z ichiga oladi?",
    variantlar: [
      "Soliq to‘lash va qonuniy ish faoliyatini yuritish",
      "Faqat moliyaviy foyda",
      "Faqat ijtimoiy yordam",
      "Faqat siyosiy faoliyat"
    ],
    javob: "Soliq to‘lash va qonuniy ish faoliyatini yuritish"
  },
  {
    savol: "Fuqarolarning asosiy majburiyatlaridan biri nima?",
    variantlar: [
      "Qonunlarga rioya qilish",
      "Faqat ish joyi olish",
      "Faqat moliyaviy foyda olish",
      "Faqat ta’lim olish"
    ],
    javob: "Qonunlarga rioya qilish"
  },
  {
    savol: "Fuqarolarning huquqlari va burchlari nimaga xizmat qiladi?",
    variantlar: [
      "Jamiyat va davlat barqarorligini ta’minlash",
      "Faqat moliyaviy foyda",
      "Faqat siyosiy boshqaruv",
      "Faqat axloqiy maslahatlar"
    ],
    javob: "Jamiyat va davlat barqarorligini ta’minlash"
  },
  {
    savol: "Shaxsiy erkinlik va huquqlarni cheklash qanday bo‘lishi mumkin?",
    variantlar: [
      "Faqat qonun bilan va jamiyat xavfsizligi uchun",
      "Hech qachon cheklash mumkin emas",
      "Faqat hukumat qarori bilan",
      "Faqat sud qarori bilan emas"
    ],
    javob: "Faqat qonun bilan va jamiyat xavfsizligi uchun"
  },
  {
    savol: "Fuqarolarning erkinligi, huquqi va burchlari jamiyatda nima yaratadi?",
    variantlar: [
      "Adolat, barqarorlik va qonun ustuvorligini",
      "Faqat moliyaviy foyda",
      "Faqat siyosiy nazorat",
      "Faqat axloqiy tavsiyalar"
    ],
    javob: "Adolat, barqarorlik va qonun ustuvorligini"
  }
],





theme12: [
  {
    savol: "Fuqarolik nima?",
    variantlar: [
      "Shaxsning davlat bilan huquqiy va siyosiy munosabatlarini belgilovchi qonuniy maqom",
      "Faqat yashash joyi",
      "Faqat ishga kirish huquqi",
      "Faqat moliyaviy majburiyat"
    ],
    javob: "Shaxsning davlat bilan huquqiy va siyosiy munosabatlarini belgilovchi qonuniy maqom"
  },
  {
    savol: "Jamiyat nima?",
    variantlar: [
      "Shaxslar va guruhlar birgalikda yashaydigan va o‘zaro munosabatda bo‘ladigan tizim",
      "Faqat davlat organlari",
      "Faqat oilaviy munosabatlar",
      "Faqat ish joyidagi jamoa"
    ],
    javob: "Shaxslar va guruhlar birgalikda yashaydigan va o‘zaro munosabatda bo‘ladigan tizim"
  },
  {
    savol: "Davlat hokimiyati nima?",
    variantlar: [
      "Jamiyatni boshqarish va qonunlarni amalga oshirish organi",
      "Faqat moliyaviy nazorat",
      "Faqat siyosiy partiyalar",
      "Faqat jamiyatdagi tashkilotlar"
    ],
    javob: "Jamiyatni boshqarish va qonunlarni amalga oshirish organi"
  },
  {
    savol: "Fuqarolik jamiyat bilan qanday bog‘liq?",
    variantlar: [
      "Fuqarolar jamiyatning barqaror ishlashi uchun huquq va burchlarga ega",
      "Faqat ish joyi orqali",
      "Faqat moliyaviy foyda orqali",
      "Faqat oilaviy munosabatlar orqali"
    ],
    javob: "Fuqarolar jamiyatning barqaror ishlashi uchun huquq va burchlarga ega"
  },
  {
    savol: "Davlat hokimiyati shakllari qanday bo‘lishi mumkin?",
    variantlar: [
      "Qonun chiqaruvchi, ijro etuvchi va sud hokimiyati",
      "Faqat moliyaviy va iqtisodiy",
      "Faqat siyosiy partiyalar",
      "Faqat nodavlat tashkilotlar"
    ],
    javob: "Qonun chiqaruvchi, ijro etuvchi va sud hokimiyati"
  },
  {
    savol: "Fuqarolik huquqlari nimani ta’minlaydi?",
    variantlar: [
      "Shaxsning siyosiy, ijtimoiy va iqtisodiy huquqlarini",
      "Faqat moliyaviy foyda",
      "Faqat ishga kirish huquqi",
      "Faqat ta’lim olish huquqi"
    ],
    javob: "Shaxsning siyosiy, ijtimoiy va iqtisodiy huquqlarini"
  },
  {
    savol: "Fuqarolik burchlari nima?",
    variantlar: [
      "Qonunlarga rioya qilish, soliqlarni to‘lash va jamiyatga foyda keltirish",
      "Faqat moliyaviy majburiyatlar",
      "Faqat ishga kirish",
      "Faqat axloqiy tavsiyalar"
    ],
    javob: "Qonunlarga rioya qilish, soliqlarni to‘lash va jamiyatga foyda keltirish"
  },
  {
    savol: "Jamiyatdagi demokratik hokimiyatning asosiy elementi nima?",
    variantlar: [
      "Fuqarolarning ishtiroki va huquqlari",
      "Faqat moliyaviy resurslar",
      "Faqat davlat organlari",
      "Faqat siyosiy partiyalar"
    ],
    javob: "Fuqarolarning ishtiroki va huquqlari"
  },
  {
    savol: "Davlat hokimiyati bo‘linishi qaysi tamoyilga asoslanadi?",
    variantlar: [
      "Qonun chiqaruvchi, ijro etuvchi va sud hokimiyati mustaqilligi",
      "Faqat iqtisodiy nazorat",
      "Faqat siyosiy partiyalarga",
      "Faqat jamiyatga xizmat qilish"
    ],
    javob: "Qonun chiqaruvchi, ijro etuvchi va sud hokimiyati mustaqilligi"
  },
  {
    savol: "Fuqarolikning jamiyatdagi roli nimadan iborat?",
    variantlar: [
      "Jamiyat barqarorligini ta’minlash va davlat organlarida ishtirok etish",
      "Faqat moliyaviy foyda olish",
      "Faqat siyosiy nazorat qilish",
      "Faqat axloqiy maslahat berish"
    ],
    javob: "Jamiyat barqarorligini ta’minlash va davlat organlarida ishtirok etish"
  },
  {
    savol: "Fuqarolarning siyosiy erkinligi nimani bildiradi?",
    variantlar: [
      "Saylash va saylanish, siyosiy fikr bildirish huquqi",
      "Faqat ishga kirish",
      "Faqat moliyaviy foyda",
      "Faqat ta’lim olish"
    ],
    javob: "Saylash va saylanish, siyosiy fikr bildirish huquqi"
  },
  {
    savol: "Jamiyat va davlat hokimiyati o‘rtasidagi asosiy farq nima?",
    variantlar: [
      "Jamiyat shaxslararo munosabat, davlat hokimiyati esa boshqaruv organi",
      "Faqat moliyaviy resurs",
      "Faqat siyosiy partiyalar",
      "Faqat axloqiy qoidalar"
    ],
    javob: "Jamiyat shaxslararo munosabat, davlat hokimiyati esa boshqaruv organi"
  },
  {
    savol: "Fuqarolik va davlat hokimiyati o‘rtasidagi bog‘liqlik nimada?",
    variantlar: [
      "Fuqarolik huquqlari va burchlari davlat orqali himoyalanadi va amalga oshiriladi",
      "Faqat moliyaviy nazorat orqali",
      "Faqat siyosiy partiyalar orqali",
      "Faqat nodavlat tashkilotlar orqali"
    ],
    javob: "Fuqarolik huquqlari va burchlari davlat orqali himoyalanadi va amalga oshiriladi"
  },
  {
    savol: "Fuqarolarning ijtimoiy burchlari nimalardan iborat?",
    variantlar: [
      "Jamiyat va oila manfaatlarini himoya qilish, qonunlarga rioya qilish",
      "Faqat moliyaviy majburiyatlar",
      "Faqat ishga kirish",
      "Faqat axloqiy maslahatlar"
    ],
    javob: "Jamiyat va oila manfaatlarini himoya qilish, qonunlarga rioya qilish"
  },
  {
    savol: "Fuqarolarning iqtisodiy huquqlari nimani ta’minlaydi?",
    variantlar: [
      "Mehnat qilish, mulkka ega bo‘lish va ish faoliyatida erkinlik",
      "Faqat moliyaviy foyda",
      "Faqat ishga kirish",
      "Faqat soliq to‘lash"
    ],
    javob: "Mehnat qilish, mulkka ega bo‘lish va ish faoliyatida erkinlik"
  },
  {
    savol: "Davlat hokimiyati faoliyatining asosiy maqsadi nima?",
    variantlar: [
      "Jamiyatni boshqarish, qonunlarni amalga oshirish va fuqarolarning huquqlarini himoya qilish",
      "Faqat moliyaviy nazorat",
      "Faqat siyosiy partiyalarni qo‘llab-quvvatlash",
      "Faqat axloqiy tavsiyalar berish"
    ],
    javob: "Jamiyatni boshqarish, qonunlarni amalga oshirish va fuqarolarning huquqlarini himoya qilish"
  },
  {
    savol: "Fuqarolikning davlat barqarorligidagi roli nima?",
    variantlar: [
      "Fuqarolar faol ishtiroki bilan barqaror va demokratik jamiyatni ta’minlash",
      "Faqat moliyaviy foyda",
      "Faqat siyosiy nazorat",
      "Faqat axloqiy maslahatlar"
    ],
    javob: "Fuqarolar faol ishtiroki bilan barqaror va demokratik jamiyatni ta’minlash"
  },
  {
    savol: "Fuqarolarning burch va huquqlari jamiyatda nima yaratadi?",
    variantlar: [
      "Adolat, barqarorlik va qonun ustuvorligini",
      "Faqat moliyaviy foyda",
      "Faqat siyosiy boshqaruv",
      "Faqat axloqiy maslahatlar"
    ],
    javob: "Adolat, barqarorlik va qonun ustuvorligini"
  },
  {
    savol: "Jamiyatdagi fuqarolarning faol ishtiroki nimani ta’minlaydi?",
    variantlar: [
      "Demokratiya va davlat hokimiyatining qonuniy ishlashini",
      "Faqat moliyaviy foyda",
      "Faqat siyosiy nazorat",
      "Faqat axloqiy maslahatlar"
    ],
    javob: "Demokratiya va davlat hokimiyatining qonuniy ishlashini"
  },
  {
    savol: "Fuqarolik, jamiyat va davlat hokimiyati o‘rtasidagi o‘zaro munosabat nima?",
    variantlar: [
      "Fuqarolik huquqlari va burchlari jamiyat va davlat orqali himoyalanadi va amalga oshiriladi",
      "Faqat moliyaviy resurslar orqali",
      "Faqat siyosiy partiyalar orqali",
      "Faqat nodavlat tashkilotlar orqali"
    ],
    javob: "Fuqarolik huquqlari va burchlari jamiyat va davlat orqali himoyalanadi va amalga oshiriladi"
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
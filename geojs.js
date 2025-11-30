let testData = {

theme1: [
  {
    savol: "Quyosh sistemasidagi eng katta sayyora qaysi?",
    variantlar: ["Yupiter", "Yer", "Saturn", "Uran"],
    javob: "Yupiter"
  },
  {
    savol: "Yer Quyosh atrofida qanday shakldagi orbitada harakatlanadi?",
    variantlar: ["Dumaloq", "Ellips", "To‘g‘ri chiziq", "Parabola"],
    javob: "Ellips"
  },
  {
    savol: "Quyosh sistemasidagi eng issiq sayyora qaysi?",
    variantlar: ["Merkuriy", "Venera", "Mars", "Yupiter"],
    javob: "Venera"
  },
  {
    savol: "Yerning tabiiy yo‘ldoshi nima?",
    variantlar: ["Mars", "Oy", "Triton", "Io"],
    javob: "Oy"
  },
  {
    savol: "Qaysi sayyora 'Qizil sayyora' nomi bilan mashhur?",
    variantlar: ["Venera", "Mars", "Yupiter", "Pluton"],
    javob: "Mars"
  },
  {
    savol: "Quyosh sistemasida necha asosiy sayyora mavjud?",
    variantlar: ["7 ta", "8 ta", "9 ta", "6 ta"],
    javob: "8 ta"
  },
  {
    savol: "Yer qaysi qatlam bilan o‘ralgan bo‘lib, hayot uchun muhimdir?",
    variantlar: ["Litosfera", "Atmosfera", "Gidrosfera", "Mantosfera"],
    javob: "Atmosfera"
  },
  {
    savol: "Quyosh qanday turdagi yulduz hisoblanadi?",
    variantlar: ["Oq mitti", "Qizil gigant", "Sariq mitti", "Ko‘k gigant"],
    javob: "Sariq mitti"
  },
  {
    savol: "Quyosh sistemasining markazi nima?",
    variantlar: ["Oy", "Quyosh", "Yer", "Jupiter"],
    javob: "Quyosh"
  },
  {
    savol: "Yer o‘z o‘qi atrofida necha soatda bir marta to‘liq aylanadi?",
    variantlar: ["12 soatda", "36 soatda", "24 soatda", "48 soatda"],
    javob: "24 soatda"
  },
  {
    savol: "Sayyoralar Quyoshdan uzoqlashgan sari qanday o‘zgarish kuzatiladi?",
    variantlar: [
      "Harorati oshadi",
      "Harorati pasayadi",
      "Hajmi kamayadi",
      "Massasi ko‘payadi"
    ],
    javob: "Harorati pasayadi"
  },
  {
    savol: "Quyosh sistemasida halqalarga ega bo‘lgan eng mashhur sayyora qaysi?",
    variantlar: ["Mars", "Venera", "Saturn", "Merkuriy"],
    javob: "Saturn"
  },
  {
    savol: "Yerning ichki tuzilishidagi eng issiq qatlam?",
    variantlar: ["Qobiq", "Manto", "Yadro", "Litosfera"],
    javob: "Yadro"
  },
  {
    savol: "Yerdagi fasllar almashinuvi nimaning natijasidir?",
    variantlar: [
      "Quyoshning harakati",
      "Yernig magnit maydoni",
      "Yer o‘qining og‘maligi",
      "Oy fazalari"
    ],
    javob: "Yer o‘qining og‘maligi"
  },
  {
    savol: "Marsning nechta tabiiy yo‘ldoshi bor?",
    variantlar: ["4 ta", "2 ta", "1 ta", "3 ta"],
    javob: "2 ta"
  },
  {
    savol: "Yer Quyoshdan qanchanchi sayyora hisoblanadi?",
    variantlar: ["Birinchi", "Ikkinchi", "Uchinchi", "To‘rtinchi"],
    javob: "Uchinchi"
  },
  {
    savol: "Quyosh energiyasi Yerga qanday tarqaladi?",
    variantlar: ["Konveksiya orqali", "Radiatsiya orqali", "Kondensatsiya orqali", "Issiqlik almashinuvi"],
    javob: "Radiatsiya orqali"
  },
  {
    savol: "Pluton nega sayyora maqomidan chiqarilgan?",
    variantlar: [
      "Kichik bo‘lgani uchun",
      "Orbitasi toza bo‘lmagani uchun",
      "Atmosferasi yo‘qligi uchun",
      "Quyoshga yaqinligi uchun"
    ],
    javob: "Orbitasi toza bo‘lmagani uchun"
  },
  {
    savol: "Yer atrofida joylashgan gaz qatlami qanday nomlanadi?",
    variantlar: ["Gidrosfera", "Litosfera", "Atmosfera", "Biosfera"],
    javob: "Atmosfera"
  },
  {
    savol: "Sayyoralar ichida Quyoshga eng yaqin bo‘lgan sayyora qaysi?",
    variantlar: ["Venera", "Merkuriy", "Mars", "Yupiter"],
    javob: "Merkuriy"
  }
],


theme2: [
  {
    savol: "Yerdagi hayotning mavjud bo‘lishiga eng muhim omil qaysi?",
    variantlar: ["Suv", "Tog‘lar", "Metallar", "Cho‘llar"],
    javob: "Suv"
  },
  {
    savol: "Yerdagi hayotning asosiy manbai nima?",
    variantlar: ["Quyosh energiyasi", "Oy nuri", "Shamol kuchi", "Yomg‘ir"],
    javob: "Quyosh energiyasi"
  },
  {
    savol: "Biosfera deganda nima tushuniladi?",
    variantlar: [
      "Faqat o‘simliklar yashaydigan joy",
      "Hayot mavjud bo‘lgan Yer qatlami",
      "Faqat okeanlar",
      "Faqat quruqlik"
    ],
    javob: "Hayot mavjud bo‘lgan Yer qatlami"
  },
  {
    savol: "Biosferadagi tirik organizmlar jamlanmasi nima deb ataladi?",
    variantlar: ["Bioxilma-xillik", "Ekotizim", "Populyatsiya", "Molekula"],
    javob: "Bioxilma-xillik"
  },
  {
    savol: "Yerda hayotning paydo bo‘lishi taxminan qachon boshlangan?",
    variantlar: ["4,6 milliard yil avval", "3,5 milliard yil avval", "1 milliard yil avval", "500 ming yil avval"],
    javob: "3,5 milliard yil avval"
  },
  {
    savol: "Organizmlarning yashash muhitiga moslashuvi qanday ataladi?",
    variantlar: ["Mutatsiya", "Adaptatsiya", "Evolyutsiya", "Kashfiyot"],
    javob: "Adaptatsiya"
  },
  {
    savol: "Fotosintez jarayoni qaysi organizmlarda sodir bo‘ladi?",
    variantlar: ["Hayvonlarda", "Qo‘ziqorinlarda", "O‘simliklarda", "Viruslarda"],
    javob: "O‘simliklarda"
  },
  {
    savol: "Organizmlar nafas olish jarayonida qaysi gazni iste’mol qiladi?",
    variantlar: ["Azot", "Kislorod", "Vodorod", "Hech qaysi"],
    javob: "Kislorod"
  },
  {
    savol: "Yer atmosferasining qaysi qatlami hayot uchun eng qulay?",
    variantlar: ["Stratosfera", "Troposfera", "Iononosfera", "Ekzosfera"],
    javob: "Troposfera"
  },
  {
    savol: "Ekotizim deganda nimani tushunamiz?",
    variantlar: [
      "Faqat hayvonlar yashaydigan hudud",
      "Tirik organizmlar va ularni o‘rab turgan muhit",
      "Faqat suvli hudud",
      "Faqat o‘simliklar guruhi"
    ],
    javob: "Tirik organizmlar va ularni o‘rab turgan muhit"
  },
  {
    savol: "Quyidagilardan qaysi biri tirik organizmlar xususiyati hisoblanadi?",
    variantlar: ["Rangga ega bo‘lish", "O‘sish va rivojlanish", "Metall tarkibi", "Og‘irlik"],
    javob: "O‘sish va rivojlanish"
  },
  {
    savol: "Qaysi jarayon orqali o‘simliklar kislorod ajratadi?",
    variantlar: ["Nafas olish", "Fotosintez", "Bug‘lanish", "Changlanish"],
    javob: "Fotosintez"
  },
  {
    savol: "Yer yuzidagi eng katta ekotizim qaysi?",
    variantlar: ["Cho‘llar", "O‘rmonlar", "Okeanlar", "Tundra"],
    javob: "Okeanlar"
  },
  {
    savol: "Hayot uchun zarur bo‘lgan asosiy modda?",
    variantlar: ["Tuz", "Suv", "Qum", "Havo"],
    javob: "Suv"
  },
  {
    savol: "Organizmlar o‘rtasidagi o‘zaro foydali aloqalar qanday nomlanadi?",
    variantlar: ["Parazitizm", "Mutualizm", "Raqobat", "Yirtqichlik"],
    javob: "Mutualizm"
  },
  {
    savol: "Yerda hayotning paydo bo‘lishi uchun birinchi navbatda qaysi sharoit muhim edi?",
    variantlar: ["Sovuq iqlim", "Suvning mavjudligi", "O‘rmonlar", "Ozon qatlamining qalinlashuvi"],
    javob: "Suvning mavjudligi"
  },
  {
    savol: "Ozon qatlami asosiy vazifasi nima?",
    variantlar: ["Quyosh nurlarini kuchaytirish", "Zarur gazlarni saqlash", "Ultrabinafsha nurlarni ushlab qolish", "Havo bosimini oshirish"],
    javob: "Ultrabinafsha nurlarni ushlab qolish"
  },
  {
    savol: "Yerda hayotning asosiy turlaridan biri bo‘lgan prokaryot organizmlar kimlar?",
    variantlar: ["Bakteriyalar", "O‘simliklar", "Hayvonlar", "Zamburug‘lar"],
    javob: "Bakteriyalar"
  },
  {
    savol: "Organizmlar yashash joyiga ko‘ra qanday guruhlarga bo‘linadi?",
    variantlar: ["Arktika va tropik", "Suvda va quruqlikda yashovchilar", "Katta va kichik", "Qalin va yupqa"],
    javob: "Suvda va quruqlikda yashovchilar"
  },
  {
    savol: "Insonning biosferaga ta’siri natijasida eng ko‘p zarar ko‘rgan hudud?",
    variantlar: ["Dengiz tubi", "O‘rmonlar", "Qoya toshlar", "Tog‘ cho‘qqilari"],
    javob: "O‘rmonlar"
  }
],



theme3: [
  {
    savol: "Yer tuzilishidagi eng ustki qavat qanday nomlanadi?",
    variantlar: ["Manto", "Yadro", "Qobiq", "Litosfera"],
    javob: "Qobiq"
  },
  {
    savol: "Yer po‘stining o‘rtacha qalinligi taxminan qancha?",
    variantlar: ["5–10 km", "30–40 km", "50–60 km", "100 km"],
    javob: "30–40 km"
  },
  {
    savol: "Yerning qaysi qatlami eng issiq hisoblanadi?",
    variantlar: ["Manto", "Ichki yadro", "Tashqi yadro", "Qobiq"],
    javob: "Ichki yadro"
  },
  {
    savol: "Litosfera nima?",
    variantlar: [
      "Yerning suv qatlami",
      "Qattiq toshli tashqi qatlam",
      "Issiq gazlar qatlami",
      "Havoning pastki qismi"
    ],
    javob: "Qattiq toshli tashqi qatlam"
  },
  {
    savol: "Mantoning asosiy tarkibi qanday?",
    variantlar: ["Suv va loy", "Magmatik jinslar", "Metallar", "Qum"],
    javob: "Magmatik jinslar"
  },
  {
    savol: "Yer markazida joylashgan asosiy qism nima?",
    variantlar: ["Yadro", "Qobiq", "Manto", "Litosfera"],
    javob: "Yadro"
  },
  {
    savol: "Tashqi yadro qanday holatda bo‘ladi?",
    variantlar: ["Qattiq", "Suyuq", "Gazsimon", "Plazma"],
    javob: "Suyuq"
  },
  {
    savol: "Litosfera plitalari qanday jarayon natijasida harakatlanadi?",
    variantlar: ["Magnit maydon", "Mantodagi konveksiya oqimlari", "Shamol kuchi", "Suv bosimi"],
    javob: "Mantodagi konveksiya oqimlari"
  },
  {
    savol: "Yer yadrosi asosan qanday ikki qismga bo‘linadi?",
    variantlar: ["Ichki va tashqi yadro", "Sovuq va issiq yadro", "Yuqori va pastki yadro", "Metall va gaz yadro"],
    javob: "Ichki va tashqi yadro"
  },
  {
    savol: "Qaysi qatlam Yerning magnit maydonini hosil qiladi?",
    variantlar: ["Qobiq", "Ichki yadro", "Tashqi yadro", "Manto"],
    javob: "Tashqi yadro"
  },
  {
    savol: "Astenosfera qaerda joylashgan?",
    variantlar: ["Litosferaning ostida", "Yadroning ichida", "Atmosferada", "Qobiq ustida"],
    javob: "Litosferaning ostida"
  },
  {
    savol: "Yer po‘sti asosan qanday jinslardan tashkil topgan?",
    variantlar: ["Magmatik, metamorfik, cho‘kindi", "Faqat qum", "Suv va loy", "Faqat metall"],
    javob: "Magmatik, metamorfik, cho‘kindi"
  },
  {
    savol: "Litosfera plitalari to‘qnashganda qanday hodisa yuz beradi?",
    variantlar: ["Quyosh nuri oshadi", "Yomg‘ir kuchayadi", "Zilzila va vulqonlar", "Havo bosimi oshadi"],
    javob: "Zilzila va vulqonlar"
  },
  {
    savol: "Yerning eng zich qatlami qaysi?",
    variantlar: ["Qobiq", "Manto", "Tashqi yadro", "Ichki yadro"],
    javob: "Ichki yadro"
  },
  {
    savol: "Qaysi qatlam Yer massasining eng katta qismini tashkil qiladi?",
    variantlar: ["Qobiq", "Manto", "Ichki yadro", "Tashqi yadro"],
    javob: "Manto"
  },
  {
    savol: "Magnit maydon Yer uchun nima vazifa bajaradi?",
    variantlar: [
      "Suvni isitadi",
      "Ultrabinafsha nurlarni ushlaydi",
      "Zarrachalardan himoya qiladi",
      "Ozon qatlamini hosil qiladi"
    ],
    javob: "Zarrachalardan himoya qiladi"
  },
  {
    savol: "Yer po‘stining eng qalin qismi qaysi hududda joylashgan?",
    variantlar: ["Dengiz ostida", "Qit'alarda", "Qutblarda", "Cho‘llarda"],
    javob: "Qit'alarda"
  },
  {
    savol: "Litosfera plitalari yorilganda yuzaga keladigan jarayon?",
    variantlar: ["Okean suvlari ko‘tariladi", "Zilzila", "Havo isiydi", "Shamol kuchayadi"],
    javob: "Zilzila"
  },
  {
    savol: "Vulqonlarning paydo bo‘lishiga sabab nima?",
    variantlar: ["Manto harorati pasayishi", "Litosfera plitalarining harakati", "Shamol tezligi", "Suv bosimi"],
    javob: "Litosfera plitalarining harakati"
  },
  {
    savol: "Qaysi qatlam Yerning eng sovuq tashqi hududi hisoblanadi?",
    variantlar: ["Litosfera", "Manto", "Tashqi yadro", "Atmosfera"],
    javob: "Atmosfera"
  }
],





theme4: [
  {
    savol: "Farg‘ona vodiysi O‘zbekistonning qaysi qismida joylashgan?",
    variantlar: ["G‘arbida", "Janubida", "Sharqida", "Markazida"],
    javob: "Sharqida"
  },
  {
    savol: "Farg‘ona viloyatining markazi qaysi shahar?",
    variantlar: ["Qo‘qon", "Marg‘ilon", "Farg‘ona shahri", "Namangan"],
    javob: "Farg‘ona shahri"
  },
  {
    savol: "Farg‘ona vodiysining relyefi qanday?",
    variantlar: ["Tog‘li", "Dala va cho‘l", "Tekislik va tog‘lar orasida", "Faqat tekislik"],
    javob: "Tekislik va tog‘lar orasida"
  },
  {
    savol: "Farg‘ona vodiysi qaysi tog‘ tizmalari orasida joylashgan?",
    variantlar: ["Tyan-Shan va Pomir", "Hisor va Zarafshon", "Alay va Qurama", "Nurata va Chotqol"],
    javob: "Alay va Qurama"
  },
  {
    savol: "Farg‘ona viloyatidan oqib o‘tadigan eng yirik daryo qaysi?",
    variantlar: ["Sirdaryo", "Qoradaryo", "Isfayramsay", "Naryn daryosi"],
    javob: "Sirdaryo"
  },
  {
    savol: "Farg‘ona vodiysining iqlimi qanday?",
    variantlar: ["Subarktik", "Iliq mo‘tadil", "Keskin kontinental", "Namy tropik"],
    javob: "Keskin kontinental"
  },
  {
    savol: "Farg‘ona vodiysida eng ko‘p yetishtiriladigan qishloq xo‘jaligi mahsuloti?",
    variantlar: ["Paxta", "Bug‘doy", "Sholi", "Choy"],
    javob: "Paxta"
  },
  {
    savol: "Farg‘ona viloyatida mashhur neft koni qayerda joylashgan?",
    variantlar: ["Rishtonda", "Furqat tumanida", "Quva tumanida", "Besharik hududida"],
    javob: "Besharik hududida"
  },
  {
    savol: "Rishton tumani nimasi bilan mashhur?",
    variantlar: ["Pilla", "Keramika va kulolchilik", "Metall qazilmalar", "Paxtachilik"],
    javob: "Keramika va kulolchilik"
  },
  {
    savol: "Farg‘ona vodiysining eng katta shahri qaysi?",
    variantlar: ["Farg‘ona", "Qo‘qon", "Andijon", "Namangan"],
    javob: "Andijon"
  },
  {
    savol: "Farg‘ona viloyatining shimoliy qismini qaysi tog‘ tizmasi o‘rab turadi?",
    variantlar: ["Alay", "Chotqol", "Hisor", "Zarafshon"],
    javob: "Chotqol"
  },
  {
    savol: "Farg‘ona vodiysi O‘zbekistonning eng zich aholili hududlaridan biri. Buning asosiy sababi?",
    variantlar: [
      "Boy foydali qazilmalar",
      "Sug‘orma dehqonchilik uchun qulay sharoit",
      "Ko‘plab cho‘llar mavjudligi",
      "Yoqilg‘i narxining arzonligi"
    ],
    javob: "Sug‘orma dehqonchilik uchun qulay sharoit"
  },
  {
    savol: "Quva tumani qaysi mahsuloti bilan mashhur?",
    variantlar: ["Anor", "Anjir", "Olma", "Uzum"],
    javob: "Anor"
  },
  {
    savol: "Farg‘ona vodiysining eng baland joylari qayerga to‘g‘ri keladi?",
    variantlar: ["Rishton tekisligi", "Farg‘ona pasttekisligi", "Qurama tog‘lari", "Sirdaryo bo‘yi"],
    javob: "Qurama tog‘lari"
  },
  {
    savol: "Farg‘ona viloyatida joylashgan mashhur dam olish maskani qaysi?",
    variantlar: ["Chortoq", "Sox tumani", "Farg‘ona vodiysi oromgohi", "Fozilmon"],
    javob: "Sox tumani"
  },
  {
    savol: "Farg‘ona vodiysining asosiy sanoat tarmog‘i qaysi?",
    variantlar: ["Oltin ishlab chiqarish", "Mashinasozlik", "To‘qimachilik va neftni qayta ishlash", "Metallurgiya"],
    javob: "To‘qimachilik va neftni qayta ishlash"
  },
  {
    savol: "Farg‘ona neftni qayta ishlash zavodi qayerda joylashgan?",
    variantlar: ["Marg‘ilon", "Qo‘qon", "Farg‘ona shahri", "Quva"],
    javob: "Farg‘ona shahri"
  },
  {
    savol: "Marg‘ilon shahri qaysi mahsuloti bilan tarixan mashhur?",
    variantlar: ["Temir", "Ip gazlama (atlas, adras)", "Neft", "Keramika"],
    javob: "Ip gazlama (atlas, adras)"
  },
  {
    savol: "Farg‘ona viloyatida joylashgan eng yirik suv ombori?",
    variantlar: ["Andijon suv ombori", "Qayroqqum", "Farg‘ona suv ombori", "Shaximardan suv ombori"],
    javob: "Farg‘ona suv ombori"
  },
  {
    savol: "Farg‘ona vodiysi qaysi tabiiy boylikka eng boy?",
    variantlar: ["Gaz", "Ko‘mir", "Neft va qurilish materiallari", "Oltin"],
    javob: "Neft va qurilish materiallari"
  }
],




theme5: [
  {
    savol: "O‘zbekiston aholisi soni bo‘yicha Markaziy Osiyoda nechanchi o‘rinda turadi?",
    variantlar: ["1-o‘rin", "2-o‘rin", "3-o‘rin", "4-o‘rin"],
    javob: "1-o‘rin"
  },
  {
    savol: "O‘zbekiston aholisi eng ko‘p yashaydigan hudud qaysi?",
    variantlar: ["Qoraqalpog‘iston", "Buxoro", "Farg‘ona vodiysi", "Jizzax"],
    javob: "Farg‘ona vodiysi"
  },
  {
    savol: "O‘zbekiston aholisi asosan qanday millatdan iborat?",
    variantlar: ["Ruslar", "Tojiklar", "Qozoqlar", "O‘zbeklar"],
    javob: "O‘zbeklar"
  },
  {
    savol: "O‘zbekiston aholisi tarkibida o‘zbeklardan keyin soni bo‘yicha ikkinchi millat?",
    variantlar: ["Qirg‘izlar", "Tojiklar", "Ruslar", "Qozoqlar"],
    javob: "Tojiklar"
  },
  {
    savol: "Aholining o‘rtacha yillik o‘sish ko‘rsatkichi nimani bildiradi?",
    variantlar: ["Migratsiya miqdorini", "Tug‘ilish va o‘lim farqini", "Aholi zichligini", "Yosh tarkibini"],
    javob: "Tug‘ilish va o‘lim farqini"
  },
  {
    savol: "O‘zbekiston aholisining asosiy qismi qaysi yosh toifasiga kiradi?",
    variantlar: ["Keksa yoshdagilar", "Katta yoshlar", "Mehnatga layoqatlilar", "Yoshlar"],
    javob: "Yoshlar"
  },
  {
    savol: "Aholi zichligi eng yuqori bo‘lgan viloyat?",
    variantlar: ["Navoiy", "Qoraqalpog‘iston", "Andijon", "Surxondaryo"],
    javob: "Andijon"
  },
  {
    savol: "O‘zbekiston aholisi eng kam yashaydigan viloyat?",
    variantlar: ["Navoiy", "Namangan", "Samarqand", "Xorazm"],
    javob: "Navoiy"
  },
  {
    savol: "Aholining shaharlarda yashovchi qismini nima deb ataladi?",
    variantlar: ["Urbanizatsiya", "Demografiya", "Migratsiya", "Natural o‘sish"],
    javob: "Urbanizatsiya"
  },
  {
    savol: "O‘zbekiston aholisi tarkibida ko‘pchilik qaysi din vakillaridan iborat?",
    variantlar: ["Nasroniylar", "Musulmonlar", "Yahudiylar", "Buddistlar"],
    javob: "Musulmonlar"
  },
  {
    savol: "Aholining bir joydan ikkinchi joyga ko‘chishi nima deb ataladi?",
    variantlar: ["Demografiya", "Migratsiya", "Urbanizatsiya", "Emigratsiya"],
    javob: "Migratsiya"
  },
  {
    savol: "O‘zbekiston poytaxti – Toshkent aholisi bo‘yicha qanday maqomga ega?",
    variantlar: ["Eng kichik aholi", "Eng kam zichlik", "Eng ko‘p aholi", "O‘rtacha aholi"],
    javob: "Eng ko‘p aholi"
  },
  {
    savol: "O‘zbekiston aholisi tabiiy o‘sishi deganda nima tushuniladi?",
    variantlar: ["Yangi uylar qurilishi", "Mig'ratsiya balans", "Tug‘ilish minus o‘lim", "Ish bilan ta’minlanish"],
    javob: "Tug‘ilish minus o‘lim"
  },
  {
    savol: "O‘zbekistonda erkaklar va ayollar soni bo‘yicha farq qanday?",
    variantlar: ["Ayollar ko‘proq", "Erkaklar ko‘proq", "Bir xil", "Farq yo‘q"],
    javob: "Ayollar ko‘proq"
  },
  {
    savol: "O‘zbekiston aholisi zichligi eng past bo‘lgan hudud?",
    variantlar: ["Qoraqalpog‘iston", "Navoiy", "Buxoro", "Qashqadaryo"],
    javob: "Navoiy"
  },
  {
    savol: "O‘zbekistonning qaysi shahri millioner shahar hisoblanadi?",
    variantlar: ["Farg‘ona", "Samarqand", "Toshkent", "Namangan"],
    javob: "Toshkent"
  },
  {
    savol: "Aholi demografik siyosati nimaga qaratilgan?",
    variantlar: [
      "Tabiatni muhofaza qilishga",
      "Aholining takror ishlab chiqarilishi va farovonligini oshirishga",
      "Yo‘llarni qurishga",
      "Sanoatni rivojlantirishga"
    ],
    javob: "Aholining takror ishlab chiqarilishi va farovonligini oshirishga"
  },
  {
    savol: "Aholining kasb-hunar bo‘yicha taqsimlanishi nima deb ataladi?",
    variantlar: ["Ijtimoiy tarkib", "Mehnat resurslari", "Etnik tarkib", "Demografik tarkib"],
    javob: "Ijtimoiy tarkib"
  },
  {
    savol: "O‘zbekistonning qaysi hududida aholi asosan sug‘orma dehqonchilik bilan shug‘ullanadi?",
    variantlar: ["Cho‘l zonalari", "Farg‘ona vodiysi", "Navoiy viloyati", "Ustyurt platosi"],
    javob: "Farg‘ona vodiysi"
  },
  {
    savol: "O‘zbekiston aholisining o‘rtacha umr ko‘rish davomiyligi qanday?",
    variantlar: ["30–40 yil", "45–50 yil", "70 yoshdan yuqori", "55–60 yil"],
    javob: "70 yoshdan yuqori"
  }
],




theme6: [
  {
    savol: "Toshkent qaysi davlatning poytaxti?",
    variantlar: [
      "Qozog‘iston",
      "O‘zbekiston",
      "Qirg‘iziston",
      "Tojikiston"
    ],
    javob: "O‘zbekiston"
  },
  {
    savol: "Toshkent shahrining aholisi taxminan nechchi million atrofida?",
    variantlar: [
      "1 million",
      "2 million",
      "3 million",
      "5 million"
    ],
    javob: "3 million"
  },
  {
    savol: "Toshkent shahrining rasmiy tashkil topgan yili qaysi?",
    variantlar: [
      "1865",
      "1930",
      "1917",
      "1950"
    ],
    javob: "1930"
  },
  {
    savol: "Toshkent shahrining mashhur metropoliteni nechta liniyadan iborat?",
    variantlar: [
      "2",
      "3",
      "4",
      "5"
    ],
    javob: "4"
  },
  {
    savol: "Toshkent shahrida joylashgan yirik xiyobon qaysi?",
    variantlar: [
      "Amir Temur xiyoboni",
      "Mustaqillik maydoni",
      "Chorsu xiyoboni",
      "Alisher Navoiy xiyoboni"
    ],
    javob: "Mustaqillik maydoni"
  },
  {
    savol: "Toshkent shahrining qadimiy markazi sifatida tanilgan joy?",
    variantlar: [
      "Chorsu bozori",
      "Ko‘kcha",
      "Almazar",
      "Yunusobod"
    ],
    javob: "Chorsu bozori"
  },
  {
    savol: "Toshkentning eng yirik xiyoboni qaysi nom bilan ataladi?",
    variantlar: [
      "Amir Temur xiyoboni",
      "Mustaqillik maydoni",
      "Botanik bog‘",
      "Alisher Navoiy bog‘i"
    ],
    javob: "Mustaqillik maydoni"
  },
  {
    savol: "Toshkent shahrida nechta tuman mavjud?",
    variantlar: [
      "10",
      "12",
      "14",
      "16"
    ],
    javob: "12"
  },
  {
    savol: "Toshkent shahridagi mashhur tarixiy madrasa qaysi?",
    variantlar: [
      "Barakxon",
      "Kukeldash",
      "Sherdor",
      "Ulug‘bek"
    ],
    javob: "Kukeldash"
  },
  {
    savol: "Toshkent shahrida joylashgan eng katta stadion qaysi?",
    variantlar: [
      "Bunyodkor stadioni",
      "Paxtakor stadioni",
      "Lokomotiv stadioni",
      "Milliy stadion"
    ],
    javob: "Bunyodkor stadioni"
  },
  {
    savol: "Toshkentda mashhur Chorsu bozori qaysi tuman hududida joylashgan?",
    variantlar: [
      "Chilonzor",
      "Mirzo Ulug‘bek",
      "Yakkasaroy",
      "Shayxontohur"
    ],
    javob: "Chilonzor"
  },
  {
    savol: "Toshkent shahrida joylashgan yirik universitet qaysi?",
    variantlar: [
      "Toshkent Davlat Universiteti",
      "Toshkent Axborot Texnologiyalari Universiteti",
      "Toshkent Tibbiyot Akademiyasi",
      "O‘zbekiston Milliy Universiteti"
    ],
    javob: "Toshkent Davlat Universiteti"
  },
  {
    savol: "Toshkent shahrining rasmiy bayrog‘i qaysi ranglardan iborat?",
    variantlar: [
      "Qizil va oq",
      "Ko‘k va oq",
      "Yashil va oq",
      "Sariq va qizil"
    ],
    javob: "Ko‘k va oq"
  },
  {
    savol: "Toshkentdagi mashhur teatri qaysi nom bilan ataladi?",
    variantlar: [
      "Alisher Navoiy nomidagi Davlat Akademik Drama Teatri",
      "Kamoliddin Behzod nomidagi Teatr",
      "Bahor nomidagi Teatr",
      "Shakespeare Teatri"
    ],
    javob: "Alisher Navoiy nomidagi Davlat Akademik Drama Teatri"
  },
  {
    savol: "Toshkent shahrida joylashgan mashhur muzey qaysi?",
    variantlar: [
      "O‘zbekiston Tarixi Muzeyi",
      "Xalqlar Do‘stligi Muzeyi",
      "Sharq Tarixi Muzeyi",
      "Mahalla Muzeyi"
    ],
    javob: "O‘zbekiston Tarixi Muzeyi"
  },
  {
    savol: "Toshkent shahrida eng mashhur metro stansiyasi qaysi?",
    variantlar: [
      "Mustaqillik maydoni",
      "Alisher Navoiy",
      "Chilonzor",
      "Olmazor"
    ],
    javob: "Mustaqillik maydoni"
  },
  {
    savol: "Toshkent shahridagi mashhur xiyobon qaysi haykal bilan mashhur?",
    variantlar: [
      "Amir Temur haykali",
      "Alisher Navoiy haykali",
      "Babur haykali",
      "Abu Rayhon Beruniy haykali"
    ],
    javob: "Amir Temur haykali"
  },
  {
    savol: "Toshkentning qaysi tumanida aeroport joylashgan?",
    variantlar: [
      "Yashnobod",
      "Uchtepa",
      "Mirzo Ulug‘bek",
      "Olmazor"
    ],
    javob: "Yashnobod"
  },
  {
    savol: "Toshkent shahridagi mashhur xiyobonlar qaysi o‘simliklar bilan tanilgan?",
    variantlar: [
      "Daraxtlar va gullar",
      "Faqat daraxtlar",
      "Faqat gullar",
      "Hech qanday o‘simlik yo‘q"
    ],
    javob: "Daraxtlar va gullar"
  },
  {
    savol: "Toshkent shahrida joylashgan yirik sport majmuasi qaysi?",
    variantlar: [
      "Humo Arena",
      "Milliy stadion",
      "Lokomotiv Arena",
      "Paxtakor Arena"
    ],
    javob: "Humo Arena"
  }
],




theme7: [
  {
    savol: "Navoiy viloyati qaysi davlatda joylashgan?",
    variantlar: [
      "Qozog‘iston",
      "O‘zbekiston",
      "Qirg‘iziston",
      "Tojikiston"
    ],
    javob: "O‘zbekiston"
  },
  {
    savol: "Navoiy viloyatining markazi qaysi shahar?",
    variantlar: [
      "Navoiy",
      "Karmana",
      "Zarafshon",
      "Tomdi"
    ],
    javob: "Navoiy"
  },
  {
    savol: "Navoiy viloyati nechta tuman va shaharni o‘z ichiga oladi?",
    variantlar: [
      "5 ta tuman va 1 shahar",
      "8 ta tuman va 3 shahar",
      "7 ta tuman va 2 shahar",
      "6 ta tuman va 2 shahar"
    ],
    javob: "7 ta tuman va 2 shahar"
  },
  {
    savol: "Navoiy viloyati qaysi hududlarda joylashgan?",
    variantlar: [
      "Markaziy va shimoliy O‘zbekiston",
      "Janubiy O‘zbekiston",
      "G‘arbiy O‘zbekiston",
      "Sharqiy O‘zbekiston"
    ],
    javob: "Markaziy va shimoliy O‘zbekiston"
  },
  {
    savol: "Navoiy viloyatining mashhur tog‘li hududi qaysi?",
    variantlar: [
      "Nurata tog‘lari",
      "Zarafshon tog‘lari",
      "Chortoq tog‘lari",
      "Hisor tog‘lari"
    ],
    javob: "Nurata tog‘lari"
  },
  {
    savol: "Navoiy viloyatidagi yirik shahar qaysi?",
    variantlar: [
      "Zarafshon",
      "Karmana",
      "Nurota",
      "Tomdi"
    ],
    javob: "Zarafshon"
  },
  {
    savol: "Navoiy viloyati nechanchi yil tashkil etilgan?",
    variantlar: [
      "1950",
      "1958",
      "1961",
      "1970"
    ],
    javob: "1958"
  },
  {
    savol: "Navoiy viloyati iqtisodiyoti qaysi soha bilan mashhur?",
    variantlar: [
      "Qishloq xo‘jaligi",
      "Temir va oltin qazib olish",
      "Turizm",
      "Kiyim-kechak ishlab chiqarish"
    ],
    javob: "Temir va oltin qazib olish"
  },
  {
    savol: "Navoiy viloyatidagi mashhur ko‘l qaysi?",
    variantlar: [
      "Aydar ko‘li",
      "Tuzko‘l",
      "Chashma ko‘li",
      "Katta Qorako‘l"
    ],
    javob: "Tuzko‘l"
  },
  {
    savol: "Navoiy viloyati qaysi daryo bilan chegaradosh?",
    variantlar: [
      "Sirdaryo",
      "Amudaryo",
      "Zarafshon",
      "Qashqadaryo"
    ],
    javob: "Zarafshon"
  },
  {
    savol: "Navoiy viloyatida nechta sanoat shaharlari mavjud?",
    variantlar: [
      "1",
      "2",
      "3",
      "4"
    ],
    javob: "2"
  },
  {
    savol: "Zarafshon shahrining iqtisodiyoti asosan qaysi soha bilan bog‘liq?",
    variantlar: [
      "Qishloq xo‘jaligi",
      "Oltin qazib olish",
      "Turizm",
      "Mashinasozlik"
    ],
    javob: "Oltin qazib olish"
  },
  {
    savol: "Navoiy viloyatining iqlimi qanday?",
    variantlar: [
      "Muzlik va sovuq",
      "Quruq va issiq",
      "Nam va yomg‘irli",
      "O‘rta kontinental"
    ],
    javob: "Quruq va issiq"
  },
  {
    savol: "Navoiy viloyatining mashhur tarixiy yodgorligi qaysi?",
    variantlar: [
      "Rabati Malik",
      "Itchan Qal’a",
      "Ayasofya",
      "Registon"
    ],
    javob: "Rabati Malik"
  },
  {
    savol: "Navoiy viloyatidagi mashhur mineral resurs qaysi?",
    variantlar: [
      "Oltin",
      "Neft",
      "Qum",
      "Soli"
    ],
    javob: "Oltin"
  },
  {
    savol: "Navoiy viloyatining chegaradosh viloyati qaysi emas?",
    variantlar: [
      "Buxoro",
      "Samarqand",
      "Qashqadaryo",
      "Andijon"
    ],
    javob: "Andijon"
  },
  {
    savol: "Navoiy viloyatida nechta tuman mavjud?",
    variantlar: [
      "6",
      "7",
      "8",
      "9"
    ],
    javob: "7"
  },
  {
    savol: "Navoiy viloyatining mashhur san’at va madaniyat markazi qaysi?",
    variantlar: [
      "Navoiy shahar madaniyat saroyi",
      "Zarafshon teatrlari",
      "Karmana madaniyat markazi",
      "Nurata san’at markazi"
    ],
    javob: "Navoiy shahar madaniyat saroyi"
  },
  {
    savol: "Navoiy viloyatining eng katta sanoat majmuasi qaysi?",
    variantlar: [
      "Navoiy kon-metallurgiya kombinati",
      "Zarafshon kimyo zavodi",
      "Karmana tekstil fabrikasi",
      "Nurata tosh fabrikasi"
    ],
    javob: "Navoiy kon-metallurgiya kombinati"
  },
  {
    savol: "Navoiy viloyati qaysi tabiat bog‘i bilan mashhur?",
    variantlar: [
      "Aydar-Arnasoy",
      "Chimgan",
      "Zaamin",
      "Kitab"
    ],
    javob: "Aydar-Arnasoy"
  }
],



theme8: [
  {
    savol: "Jizzax viloyati qaysi davlatda joylashgan?",
    variantlar: [
      "Qozog‘iston",
      "O‘zbekiston",
      "Qirg‘iziston",
      "Tojikiston"
    ],
    javob: "O‘zbekiston"
  },
  {
    savol: "Jizzax viloyatining markazi qaysi shahar?",
    variantlar: [
      "Zafarobod",
      "Jizzax",
      "G‘allaorol",
      "Paxtakor"
    ],
    javob: "Jizzax"
  },
  {
    savol: "Jizzax viloyati nechta tuman va shaharni o‘z ichiga oladi?",
    variantlar: [
      "8 ta tuman va 1 shahar",
      "11 ta tuman va 1 shahar",
      "10 ta tuman va 2 shahar",
      "12 ta tuman va 2 shahar"
    ],
    javob: "11 ta tuman va 1 shahar"
  },
  {
    savol: "Jizzax viloyati qaysi hududlarda joylashgan?",
    variantlar: [
      "Markaziy O‘zbekiston",
      "Janubiy O‘zbekiston",
      "Sharqiy O‘zbekiston",
      "G‘arbiy O‘zbekiston"
    ],
    javob: "Markaziy O‘zbekiston"
  },
  {
    savol: "Jizzax viloyatining mashhur tog‘li hududi qaysi?",
    variantlar: [
      "Nurata tog‘lari",
      "Chotqol tog‘lari",
      "Zarafshon tog‘lari",
      "Hisor tog‘lari"
    ],
    javob: "Nurata tog‘lari"
  },
  {
    savol: "Jizzax viloyatidagi mashhur shahar qaysi?",
    variantlar: [
      "Zafarobod",
      "Shofirkon",
      "G‘allaorol",
      "Paxtakor"
    ],
    javob: "Zafarobod"
  },
  {
    savol: "Jizzax viloyati qaysi yilda tashkil etilgan?",
    variantlar: [
      "1937",
      "1940",
      "1950",
      "1961"
    ],
    javob: "1937"
  },
  {
    savol: "Jizzax viloyatining iqtisodiyoti qaysi soha bilan mashhur?",
    variantlar: [
      "Qishloq xo‘jaligi",
      "Oltin qazib olish",
      "Turizm",
      "Mashinasozlik"
    ],
    javob: "Qishloq xo‘jaligi"
  },
  {
    savol: "Jizzax viloyatidagi mashhur daryo qaysi?",
    variantlar: [
      "Sirdaryo",
      "Amudaryo",
      "Zarafshon",
      "Qashqadaryo"
    ],
    javob: "Sirdaryo"
  },
  {
    savol: "Jizzax viloyati qaysi tabiat bog‘i bilan mashhur?",
    variantlar: [
      "Zaamin",
      "Chimgan",
      "Aydar-Arnasoy",
      "Kitab"
    ],
    javob: "Zaamin"
  },
  {
    savol: "Jizzax viloyatining iqlimi qanday?",
    variantlar: [
      "Muzlik va sovuq",
      "Quruq va issiq",
      "Nam va yomg‘irli",
      "O‘rta kontinental"
    ],
    javob: "O‘rta kontinental"
  },
  {
    savol: "Jizzax viloyatida mashhur tarixiy yodgorlik qaysi?",
    variantlar: [
      "Raboti Malik",
      "Katta Zarafshon qal’asi",
      "Shakhrisabz qal’asi",
      "Mingtepa qal’asi"
    ],
    javob: "Mingtepa qal’asi"
  },
  {
    savol: "Jizzax viloyati qaysi o‘simlik va chorvachilik bilan mashhur?",
    variantlar: [
      "Paxta va g‘alla",
      "Yong‘oq va olma",
      "Sholi va sabzavot",
      "Uzum va sabzavot"
    ],
    javob: "Paxta va g‘alla"
  },
  {
    savol: "Jizzax viloyatida eng katta sanoat shahri qaysi?",
    variantlar: [
      "Jizzax shahri",
      "Shofirkon",
      "Zafarobod",
      "G‘allaorol"
    ],
    javob: "Jizzax shahri"
  },
  {
    savol: "Jizzax viloyatining mashhur madaniyat markazi qaysi?",
    variantlar: [
      "Jizzax madaniyat saroyi",
      "Shofirkon teatrlari",
      "Zafarobod san’at markazi",
      "Paxtakor madaniyat markazi"
    ],
    javob: "Jizzax madaniyat saroyi"
  },
  {
    savol: "Jizzax viloyatining chegaradosh viloyati qaysi emas?",
    variantlar: [
      "Samarqand",
      "Toshkent",
      "Buxoro",
      "Farg‘ona"
    ],
    javob: "Farg‘ona"
  },
  {
    savol: "Jizzax viloyatidagi mashhur tog‘li hudud qaysi tuman hududida joylashgan?",
    variantlar: [
      "Yangiobod",
      "Shofirkon",
      "Zafarobod",
      "Paxtakor"
    ],
    javob: "Yangiobod"
  },
  {
    savol: "Jizzax viloyatida nechta tuman mavjud?",
    variantlar: [
      "8",
      "9",
      "11",
      "12"
    ],
    javob: "11"
  },
  {
    savol: "Jizzax viloyatidagi mashhur ko‘l qaysi?",
    variantlar: [
      "Aydar ko‘li",
      "Tuzko‘l",
      "Chashma ko‘li",
      "Katta Qorako‘l"
    ],
    javob: "Chashma ko‘li"
  },
  {
    savol: "Jizzax viloyatida rivojlangan qaysi tarmoqlar mavjud?",
    variantlar: [
      "Qishloq xo‘jaligi va oziq-ovqat sanoati",
      "Turizm va xizmat ko‘rsatish",
      "Mashinasozlik va transport",
      "Energetika va kimyo"
    ],
    javob: "Qishloq xo‘jaligi va oziq-ovqat sanoati"
  }
],






theme9: [
  {
    savol: "Samarqand viloyati qaysi davlatda joylashgan?",
    variantlar: [
      "Qozog‘iston",
      "O‘zbekiston",
      "Qirg‘iziston",
      "Tojikiston"
    ],
    javob: "O‘zbekiston"
  },
  {
    savol: "Samarqand viloyatining markazi qaysi shahar?",
    variantlar: [
      "Urgut",
      "Samarqand",
      "Kattaqo‘rg‘on",
      "Past Darg‘om"
    ],
    javob: "Samarqand"
  },
  {
    savol: "Samarqand viloyati nechta tuman va shaharni o‘z ichiga oladi?",
    variantlar: [
      "9 tuman va 1 shahar",
      "14 tuman va 2 shahar",
      "11 tuman va 1 shahar",
      "12 tuman va 2 shahar"
    ],
    javob: "14 tuman va 2 shahar"
  },
  {
    savol: "Samarqand viloyati qaysi hududlarda joylashgan?",
    variantlar: [
      "Markaziy va shimoliy O‘zbekiston",
      "Janubiy O‘zbekiston",
      "Sharqiy O‘zbekiston",
      "G‘arbiy O‘zbekiston"
    ],
    javob: "Markaziy va shimoliy O‘zbekiston"
  },
  {
    savol: "Samarqand viloyatining mashhur tarixiy yodgorligi qaysi?",
    variantlar: [
      "Registon majmuasi",
      "Itchan Qal’a",
      "Raboti Malik",
      "Mingtepa qal’asi"
    ],
    javob: "Registon majmuasi"
  },
  {
    savol: "Samarqand viloyatidagi mashhur shahar qaysi?",
    variantlar: [
      "Urgut",
      "Kattaqo‘rg‘on",
      "Past Darg‘om",
      "Oqdaryo"
    ],
    javob: "Kattaqo‘rg‘on"
  },
  {
    savol: "Samarqand viloyati qaysi yilda tashkil etilgan?",
    variantlar: [
      "1937",
      "1940",
      "1950",
      "1961"
    ],
    javob: "1937"
  },
  {
    savol: "Samarqand viloyatining iqtisodiyoti qaysi soha bilan mashhur?",
    variantlar: [
      "Qishloq xo‘jaligi va paxta yetishtirish",
      "Oltin qazib olish",
      "Mashinasozlik",
      "Turizm"
    ],
    javob: "Qishloq xo‘jaligi va paxta yetishtirish"
  },
  {
    savol: "Samarqand viloyatidagi mashhur daryo qaysi?",
    variantlar: [
      "Zarafshon",
      "Sirdaryo",
      "Amudaryo",
      "Qashqadaryo"
    ],
    javob: "Zarafshon"
  },
  {
    savol: "Samarqand viloyati qaysi tabiat bog‘i bilan mashhur?",
    variantlar: [
      "Kitab",
      "Chimgan",
      "Zaamin",
      "Aydar-Arnasoy"
    ],
    javob: "Kitab"
  },
  {
    savol: "Samarqand viloyatining iqlimi qanday?",
    variantlar: [
      "Muzlik va sovuq",
      "Quruq va issiq",
      "O‘rta kontinental",
      "Nam va yomg‘irli"
    ],
    javob: "O‘rta kontinental"
  },
  {
    savol: "Samarqand viloyatidagi mashhur tarixiy madrasa qaysi?",
    variantlar: [
      "Ulug‘bek madrasasi",
      "Kukeldash madrasasi",
      "Sherdor madrasasi",
      "Barakxon madrasasi"
    ],
    javob: "Ulug‘bek madrasasi"
  },
  {
    savol: "Samarqand viloyati qaysi o‘simlik va chorvachilik bilan mashhur?",
    variantlar: [
      "Uzum va g‘alla",
      "Paxta va sholi",
      "Yong‘oq va olma",
      "Sabzavot va meva"
    ],
    javob: "Paxta va sholi"
  },
  {
    savol: "Samarqand viloyatidagi eng katta sanoat shahri qaysi?",
    variantlar: [
      "Samarqand shahri",
      "Urgut",
      "Kattaqo‘rg‘on",
      "Past Darg‘om"
    ],
    javob: "Samarqand shahri"
  },
  {
    savol: "Samarqand viloyatining mashhur madaniyat markazi qaysi?",
    variantlar: [
      "Samarqand madaniyat saroyi",
      "Urgut teatrlari",
      "Kattaqo‘rg‘on san’at markazi",
      "Past Darg‘om madaniyat markazi"
    ],
    javob: "Samarqand madaniyat saroyi"
  },
  {
    savol: "Samarqand viloyatining chegaradosh viloyati qaysi emas?",
    variantlar: [
      "Jizzax",
      "Navoiy",
      "Farg‘ona",
      "Qashqadaryo"
    ],
    javob: "Farg‘ona"
  },
  {
    savol: "Samarqand viloyatidagi mashhur tog‘li hudud qaysi tuman hududida joylashgan?",
    variantlar: [
      "Urgut",
      "Past Darg‘om",
      "Kattaqo‘rg‘on",
      "Narpay"
    ],
    javob: "Urgut"
  },
  {
    savol: "Samarqand viloyatida nechta tuman mavjud?",
    variantlar: [
      "12",
      "14",
      "11",
      "13"
    ],
    javob: "14"
  },
  {
    savol: "Samarqand viloyatidagi mashhur ko‘l qaysi?",
    variantlar: [
      "Aydar ko‘li",
      "Chashma ko‘li",
      "Katta Qorako‘l",
      "Tuzko‘l"
    ],
    javob: "Chashma ko‘li"
  },
  {
    savol: "Samarqand viloyatida rivojlangan qaysi tarmoqlar mavjud?",
    variantlar: [
      "Qishloq xo‘jaligi va oziq-ovqat sanoati",
      "Turizm va xizmat ko‘rsatish",
      "Mashinasozlik va transport",
      "Energetika va kimyo"
    ],
    javob: "Qishloq xo‘jaligi va oziq-ovqat sanoati"
  }
],







theme10: [
  {
    savol: "Namangan viloyati qaysi davlatda joylashgan?",
    variantlar: [
      "Qozog‘iston",
      "O‘zbekiston",
      "Qirg‘iziston",
      "Tojikiston"
    ],
    javob: "O‘zbekiston"
  },
  {
    savol: "Namangan viloyatining markazi qaysi shahar?",
    variantlar: [
      "Kosonsoy",
      "Namangan",
      "Chortoq",
      "Pop"
    ],
    javob: "Namangan"
  },
  {
    savol: "Namangan viloyati nechta tuman va shaharni o‘z ichiga oladi?",
    variantlar: [
      "8 tuman va 1 shahar",
      "11 tuman va 2 shahar",
      "9 tuman va 1 shahar",
      "10 tuman va 2 shahar"
    ],
    javob: "11 tuman va 2 shahar"
  },
  {
    savol: "Namangan viloyati qaysi hududlarda joylashgan?",
    variantlar: [
      "Sharqiy O‘zbekiston",
      "Markaziy O‘zbekiston",
      "Janubiy O‘zbekiston",
      "G‘arbiy O‘zbekiston"
    ],
    javob: "Sharqiy O‘zbekiston"
  },
  {
    savol: "Namangan viloyatidagi mashhur tog‘li hudud qaysi?",
    variantlar: [
      "Chotqol tog‘lari",
      "Nurata tog‘lari",
      "Zarafshon tog‘lari",
      "Hisor tog‘lari"
    ],
    javob: "Chotqol tog‘lari"
  },
  {
    savol: "Namangan viloyatidagi mashhur shahar qaysi?",
    variantlar: [
      "Kosonsoy",
      "Chust",
      "Chortoq",
      "Pop"
    ],
    javob: "Chust"
  },
  {
    savol: "Namangan viloyati qaysi yilda tashkil etilgan?",
    variantlar: [
      "1937",
      "1940",
      "1950",
      "1961"
    ],
    javob: "1937"
  },
  {
    savol: "Namangan viloyatining iqtisodiyoti qaysi soha bilan mashhur?",
    variantlar: [
      "Qishloq xo‘jaligi va meva-sabzavot yetishtirish",
      "Oltin qazib olish",
      "Mashinasozlik",
      "Turizm"
    ],
    javob: "Qishloq xo‘jaligi va meva-sabzavot yetishtirish"
  },
  {
    savol: "Namangan viloyatidagi mashhur daryo qaysi?",
    variantlar: [
      "Sirdaryo",
      "Qoradaryo",
      "Sohib",
      "Sharkent"
    ],
    javob: "Sirdaryo"
  },
  {
    savol: "Namangan viloyati qaysi tabiat bog‘i bilan mashhur?",
    variantlar: [
      "Chimgan",
      "Kitab",
      "Aydar-Arnasoy",
      "Hissar"
    ],
    javob: "Hissar"
  },
  {
    savol: "Namangan viloyatining iqlimi qanday?",
    variantlar: [
      "Muzlik va sovuq",
      "O‘rta kontinental",
      "Quruq va issiq",
      "Nam va yomg‘irli"
    ],
    javob: "O‘rta kontinental"
  },
  {
    savol: "Namangan viloyatida mashhur tarixiy yodgorlik qaysi?",
    variantlar: [
      "Hazrati Imom majmuasi",
      "Registon majmuasi",
      "Raboti Malik",
      "Ulug‘bek madrasasi"
    ],
    javob: "Hazrati Imom majmuasi"
  },
  {
    savol: "Namangan viloyati qaysi o‘simlik va chorvachilik bilan mashhur?",
    variantlar: [
      "Uzum va olma",
      "Paxta va g‘alla",
      "Sholi va sabzavot",
      "Yong‘oq va sabzavot"
    ],
    javob: "Uzum va olma"
  },
  {
    savol: "Namangan viloyatidagi eng katta sanoat shahri qaysi?",
    variantlar: [
      "Namangan shahri",
      "Kosonsoy",
      "Chortoq",
      "Pop"
    ],
    javob: "Namangan shahri"
  },
  {
    savol: "Namangan viloyatining mashhur madaniyat markazi qaysi?",
    variantlar: [
      "Namangan madaniyat saroyi",
      "Kosonsoy teatrlari",
      "Chust san’at markazi",
      "Pop madaniyat markazi"
    ],
    javob: "Namangan madaniyat saroyi"
  },
  {
    savol: "Namangan viloyatining chegaradosh viloyati qaysi emas?",
    variantlar: [
      "Farg‘ona",
      "Andijon",
      "Sirdaryo",
      "Toshkent"
    ],
    javob: "Sirdaryo"
  },
  {
    savol: "Namangan viloyatidagi mashhur tog‘li hudud qaysi tuman hududida joylashgan?",
    variantlar: [
      "Chust",
      "Kosonsoy",
      "Namangan",
      "Pop"
    ],
    javob: "Chust"
  },
  {
    savol: "Namangan viloyatida nechta tuman mavjud?",
    variantlar: [
      "9",
      "11",
      "13",
      "10"
    ],
    javob: "11"
  },
  {
    savol: "Namangan viloyatidagi mashhur ko‘l qaysi?",
    variantlar: [
      "Aydar ko‘li",
      "Chashma ko‘li",
      "Katta Qorako‘l",
      "Tuzko‘l"
    ],
    javob: "Chashma ko‘li"
  },
  {
    savol: "Namangan viloyatida rivojlangan qaysi tarmoqlar mavjud?",
    variantlar: [
      "Qishloq xo‘jaligi va oziq-ovqat sanoati",
      "Turizm va xizmat ko‘rsatish",
      "Mashinasozlik va transport",
      "Energetika va kimyo"
    ],
    javob: "Qishloq xo‘jaligi va oziq-ovqat sanoati"
  }
],




theme11: [
  {
    savol: "2025 yil holatiga ko‘ra jahon aholisi taxminan nechchi milliardga yetdi?",
    variantlar: [
      "7,5 milliard",
      "8,1 milliard",
      "9 milliard",
      "6,8 milliard"
    ],
    javob: "8,1 milliard"
  },
  {
    savol: "Dunyo bo‘yicha eng ko‘p aholiga ega davlat qaysi?",
    variantlar: [
      "Hindiston",
      "Xitoy",
      "AQSh",
      "Indoneziya"
    ],
    javob: "Xitoy"
  },
  {
    savol: "Dunyo bo‘yicha eng zich aholiga ega davlat qaysi?",
    variantlar: [
      "Monako",
      "Singapur",
      "Bangladesh",
      "Vatikon"
    ],
    javob: "Monako"
  },
  {
    savol: "Dunyo aholisi qaysi mintaqada eng tez o‘smoqda?",
    variantlar: [
      "Evropa",
      "Afrika",
      "Shimoliy Amerika",
      "Avstraliya"
    ],
    javob: "Afrika"
  },
  {
    savol: "Dunyo bo‘yicha eng kam aholiga ega qit’a qaysi?",
    variantlar: [
      "Antarktida",
      "Avstraliya",
      "Janubiy Amerika",
      "Evropa"
    ],
    javob: "Antarktida"
  },
  {
    savol: "Jahon aholisi orasida qaysi yosh guruhi eng katta ulushga ega?",
    variantlar: [
      "0–14 yosh",
      "15–64 yosh",
      "65 yoshdan oshganlar",
      "50–59 yosh"
    ],
    javob: "15–64 yosh"
  },
  {
    savol: "Dunyo bo‘yicha urbanizatsiya (shahar aholisi) darajasi taxminan nechchi foizga yetgan?",
    variantlar: [
      "55%",
      "65%",
      "45%",
      "35%"
    ],
    javob: "55%"
  },
  {
    savol: "Dunyo bo‘yicha aholining o‘sish sur’ati qaysi hududda eng past?",
    variantlar: [
      "Evropa",
      "Afrika",
      "Osiyo",
      "Shimoliy Amerika"
    ],
    javob: "Evropa"
  },
  {
    savol: "Dunyo bo‘yicha eng ko‘p aholiga ega shahar qaysi?",
    variantlar: [
      "Tokio",
      "Delhi",
      "Shanghay",
      "Mumbai"
    ],
    javob: "Tokio"
  },
  {
    savol: "Dunyo aholisi qaysi sohalarda eng ko‘p ishlaydi?",
    variantlar: [
      "Sanoat",
      "Qishloq xo‘jaligi",
      "Xizmat ko‘rsatish",
      "Texnologiya"
    ],
    javob: "Qishloq xo‘jaligi"
  },
  {
    savol: "Jahon aholisi bo‘yicha ikkinchi o‘rinda qaysi davlat turadi?",
    variantlar: [
      "Xitoy",
      "Hindiston",
      "AQSh",
      "Indoneziya"
    ],
    javob: "Hindiston"
  },
  {
    savol: "Jahon aholisi bo‘yicha eng tez o‘sayotgan davlat qaysi?",
    variantlar: [
      "Nigeriya",
      "AQSh",
      "Rossiya",
      "Kanada"
    ],
    javob: "Nigeriya"
  },
  {
    savol: "Jahon aholisi orasida eng ko‘p til qaysi?",
    variantlar: [
      "Ingliz tili",
      "Xitoy tili (Mandarin)",
      "Ispan tili",
      "Hind tili"
    ],
    javob: "Xitoy tili (Mandarin)"
  },
  {
    savol: "Jahon aholisi bo‘yicha eng ko‘p qaysi din e’tiqod qilinadi?",
    variantlar: [
      "Xristianlik",
      "Islom",
      "Budizm",
      "Hinduizm"
    ],
    javob: "Xristianlik"
  },
  {
    savol: "Dunyo aholisi bo‘yicha ayollarning ulushi taxminan nechchi foizni tashkil qiladi?",
    variantlar: [
      "48%",
      "50%",
      "52%",
      "55%"
    ],
    javob: "50%"
  },
  {
    savol: "Jahon aholisi bo‘yicha qaysi qit’a eng kam o‘sish sur’atiga ega?",
    variantlar: [
      "Evropa",
      "Afrika",
      "Osiyo",
      "Janubiy Amerika"
    ],
    javob: "Evropa"
  },
  {
    savol: "Jahon aholisi bo‘yicha eng uzun umr ko‘rish darajasi qaysi davlatlarda?",
    variantlar: [
      "Yaponiya va Shveysariya",
      "AQSh va Kanada",
      "Hindiston va Bangladesh",
      "Xitoy va Rossiya"
    ],
    javob: "Yaponiya va Shveysariya"
  },
  {
    savol: "Dunyo aholisi bo‘yicha qaysi mintaqa eng ko‘p yosh bolalar soniga ega?",
    variantlar: [
      "Afrika",
      "Evropa",
      "Osiyo",
      "Shimoliy Amerika"
    ],
    javob: "Afrika"
  },
  {
    savol: "Dunyo aholisi bo‘yicha eng zich yashash hududi qaysi?",
    variantlar: [
      "Yevropa shaharlari",
      "Bangladesh",
      "Singapur",
      "Monako"
    ],
    javob: "Monako"
  }
],



theme12: [
  {
    savol: "Yevropada eng katta maydonga ega davlat qaysi?",
    variantlar: [
      "Fransiya",
      "Shvetsiya",
      "Ukraina",
      "Ispaniya"
    ],
    javob: "Ukraina"
  },
  {
    savol: "Yevropada eng ko‘p aholiga ega davlat qaysi?",
    variantlar: [
      "Germaniya",
      "Fransiya",
      "Buyuk Britaniya",
      "Italiya"
    ],
    javob: "Germaniya"
  },
  {
    savol: "Yevropada eng kichik mustaqil davlat qaysi?",
    variantlar: [
      "Monako",
      "San-Marino",
      "Vatikon",
      "Lixtenshteyn"
    ],
    javob: "Vatikon"
  },
  {
    savol: "Yevropada qaysi daryo eng uzun?",
    variantlar: [
      "Rhen",
      "Danube",
      "Volga",
      "Seine"
    ],
    javob: "Volga"
  },
  {
    savol: "Yevropa davlatlaridan qaysi biri Schengen hududiga kirmaydi?",
    variantlar: [
      "Fransiya",
      "Norvegiya",
      "Polsha",
      "Buyuk Britaniya"
    ],
    javob: "Buyuk Britaniya"
  },
  {
    savol: "Yevropa qit’asida eng ko‘p orollarga ega davlat qaysi?",
    variantlar: [
      "Norvegiya",
      "Gretsiya",
      "Finlandiya",
      "Shvetsiya"
    ],
    javob: "Gretsiya"
  },
  {
    savol: "Yevropada alp tog‘lari qaysi davlatlarda joylashgan?",
    variantlar: [
      "Italiya, Shveytsariya, Avstriya",
      "Fransiya, Germaniya, Polsha",
      "Ispaniya, Portugaliya, Andorra",
      "Norvegiya, Shvetsiya, Finlandiya"
    ],
    javob: "Italiya, Shveytsariya, Avstriya"
  },
  {
    savol: "Yevropada eng janubiy davlat qaysi?",
    variantlar: [
      "Italiya",
      "Gretsiya",
      "Malta",
      "Ispaniya"
    ],
    javob: "Malta"
  },
  {
    savol: "Yevropada eng shimoliy nuqtaga ega davlat qaysi?",
    variantlar: [
      "Norvegiya",
      "Shvetsiya",
      "Finlandiya",
      "Islandiya"
    ],
    javob: "Norvegiya"
  },
  {
    savol: "Yevropa davlatlaridan qaysi biri Ispaniya bilan chegaradosh emas?",
    variantlar: [
      "Portugaliya",
      "Fransiya",
      "Andorra",
      "Italiya"
    ],
    javob: "Italiya"
  },
  {
    savol: "Yevropada qaysi daryo Atlantika okeaniga quyiladi?",
    variantlar: [
      "Rhen",
      "Danube",
      "Volga",
      "Dniester"
    ],
    javob: "Rhen"
  },
  {
    savol: "Yevropa davlatlarida qaysi til eng ko‘p so‘zlanadi?",
    variantlar: [
      "Fransuz tili",
      "Ingliz tili",
      "Nemis tili",
      "Rus tili"
    ],
    javob: "Nemis tili"
  },
  {
    savol: "Yevropada eng mashhur turizm shahri qaysi?",
    variantlar: [
      "Parij",
      "London",
      "Rim",
      "Barselona"
    ],
    javob: "Parij"
  },
  {
    savol: "Yevropada eng ko‘p aholi zichligiga ega davlat qaysi?",
    variantlar: [
      "Monako",
      "Niderlandiya",
      "Belgiya",
      "Buyuk Britaniya"
    ],
    javob: "Monako"
  },
  {
    savol: "Yevropa davlatlaridan qaysi biri Ittifoq (EU)ga a’zo emas?",
    variantlar: [
      "Norvegiya",
      "Fransiya",
      "Germaniya",
      "Italiya"
    ],
    javob: "Norvegiya"
  },
  {
    savol: "Yevropada eng baland tog‘ qaysi?",
    variantlar: [
      "Mont Blanc",
      "Matterhorn",
      "Elbrus",
      "Grossglockner"
    ],
    javob: "Elbrus"
  },
  {
    savol: "Yevropa davlatlaridan qaysi biri Skandinaviya qismiga kiradi?",
    variantlar: [
      "Norvegiya, Shvetsiya, Daniya",
      "Finlandiya, Islandiya, Irlandiya",
      "Polsha, Shvetsiya, Norvegiya",
      "Latviya, Litva, Estoniya"
    ],
    javob: "Norvegiya, Shvetsiya, Daniya"
  },
  {
    savol: "Yevropada eng uzun daryolar qaysi qit’a orqali oqadi?",
    variantlar: [
      "Atlantika okeani",
      "Qora dengiz",
      "Shimoliy muz okeani",
      "O‘rta yer dengizi"
    ],
    javob: "Qora dengiz"
  },
  {
    savol: "Yevropada qaysi davlat ikki qit’aga joylashgan?",
    variantlar: [
      "Turkiya",
      "Italiya",
      "Ispaniya",
      "Norvegiya"
    ],
    javob: "Turkiya"
  },
  {
    savol: "Yevropada eng qadimgi davlat qaysi hisoblanadi?",
    variantlar: [
      "San-Marino",
      "Vatikon",
      "Fransiya",
      "Angliya"
    ],
    javob: "San-Marino"
  }
],




theme13: [
  {
    savol: "Osiyoda eng katta maydonga ega davlat qaysi?",
    variantlar: [
      "Xitoy",
      "Hindiston",
      "Rossiya (Osiyo qismi)",
      "Saudiya Arabistoni"
    ],
    javob: "Rossiya (Osiyo qismi)"
  },
  {
    savol: "Osiyoda eng ko‘p aholiga ega davlat qaysi?",
    variantlar: [
      "Xitoy",
      "Hindiston",
      "Indoneziya",
      "Pakistan"
    ],
    javob: "Xitoy"
  },
  {
    savol: "Osiyoda eng kichik davlat qaysi?",
    variantlar: [
      "Maldiv",
      "Singapur",
      "Bahrayn",
      "Bruney"
    ],
    javob: "Maldiv"
  },
  {
    savol: "Osiyoda eng uzun daryo qaysi?",
    variantlar: [
      "Yangtze",
      "Ganga",
      "Huang He (Sariq daryo)",
      "Jaxart"
    ],
    javob: "Yangtze"
  },
  {
    savol: "Osiyoda eng baland tog‘ qaysi?",
    variantlar: [
      "K2",
      "Everest",
      "Kangchenjunga",
      "Makalu"
    ],
    javob: "Everest"
  },
  {
    savol: "Osiyoda eng ko‘p aholi zichligiga ega davlat qaysi?",
    variantlar: [
      "Bangladesh",
      "Hindiston",
      "Singapur",
      "Xitoy"
    ],
    javob: "Bangladesh"
  },
  {
    savol: "Osiyoda qaysi davlat ikki qit’aga joylashgan?",
    variantlar: [
      "Turkiya",
      "Xitoy",
      "Hindiston",
      "Indoneziya"
    ],
    javob: "Turkiya"
  },
  {
    savol: "Osiyoda eng janubiy davlat qaysi?",
    variantlar: [
      "Singapur",
      "Maldiv",
      "Sri-Lanka",
      "Indoneziya"
    ],
    javob: "Maldiv"
  },
  {
    savol: "Osiyoda eng shimoliy nuqtaga ega davlat qaysi?",
    variantlar: [
      "Rossiya",
      "Qozog‘iston",
      "Mongoliya",
      "Xitoy"
    ],
    javob: "Rossiya"
  },
  {
    savol: "Osiyoda eng ko‘p orollarga ega davlat qaysi?",
    variantlar: [
      "Yaponiya",
      "Indoneziya",
      "Filippin",
      "Maldiv"
    ],
    javob: "Indoneziya"
  },
  {
    savol: "Osiyoda eng mashhur daryo qaysi dengizga quyiladi?",
    variantlar: [
      "Yangtze – Xitoy dengizi",
      "Ganga – Bengal ko‘rfazi",
      "Amur – Okean",
      "Indus – Arab dengizi"
    ],
    javob: "Ganga – Bengal ko‘rfazi"
  },
  {
    savol: "Osiyoda qaysi davlat iqlimi ko‘p turfa: tropik, subtropik va tog‘li?",
    variantlar: [
      "Xitoy",
      "Hindiston",
      "Indoneziya",
      "Nepal"
    ],
    javob: "Xitoy"
  },
  {
    savol: "Osiyoda qaysi davlat eng tez urbanizatsiyaga ega?",
    variantlar: [
      "Singapur",
      "Xitoy",
      "Hindiston",
      "Malayziya"
    ],
    javob: "Singapur"
  },
  {
    savol: "Osiyoda qaysi davlat dunyoda eng yirik neft ishlab chiqaruvchilardan biri?",
    variantlar: [
      "Saudiya Arabistoni",
      "Rossiya",
      "Xitoy",
      "Hindiston"
    ],
    javob: "Saudiya Arabistoni"
  },
  {
    savol: "Osiyoda eng mashhur madaniyat markazi qaysi?",
    variantlar: [
      "Tokio",
      "Beijing",
      "Delhi",
      "Seul"
    ],
    javob: "Beijing"
  },
  {
    savol: "Osiyoda eng ko‘p musulmon aholiga ega davlat qaysi?",
    variantlar: [
      "Indoneziya",
      "Pakistan",
      "Bangladesh",
      "Saudiya Arabistoni"
    ],
    javob: "Indoneziya"
  },
  {
    savol: "Osiyoda qaysi davlat eng ko‘p turizm markazlariga ega?",
    variantlar: [
      "Yaponiya",
      "Xitoy",
      "Tailand",
      "Hindiston"
    ],
    javob: "Tailand"
  },
  {
    savol: "Osiyoda eng uzun tog‘ tizmasi qaysi?",
    variantlar: [
      "Himalay",
      "Kunlun",
      "Tien Shan",
      "Ural"
    ],
    javob: "Himalay"
  },
  {
    savol: "Osiyoda qaysi davlat eng ko‘p texnologik rivojlangan hisoblanadi?",
    variantlar: [
      "Yaponiya",
      "Janubiy Koreya",
      "Singapur",
      "Xitoy"
    ],
    javob: "Yaponiya"
  }
],




theme14: [
  {
    savol: "Dunyo bo‘yicha eng katta davlat maydon jihatidan qaysi?",
    variantlar: [
      "Kanada",
      "Rossiya",
      "Xitoy",
      "AQSh"
    ],
    javob: "Rossiya"
  },
  {
    savol: "Dunyo bo‘yicha eng ko‘p aholiga ega davlat qaysi?",
    variantlar: [
      "Xitoy",
      "Hindiston",
      "AQSh",
      "Indoneziya"
    ],
    javob: "Xitoy"
  },
  {
    savol: "Dunyo bo‘yicha eng kichik mustaqil davlat qaysi?",
    variantlar: [
      "Monako",
      "San-Marino",
      "Vatikon",
      "Lixtenshteyn"
    ],
    javob: "Vatikon"
  },
  {
    savol: "AQSh qaysi qit’ada joylashgan?",
    variantlar: [
      "Janubiy Amerika",
      "Shimoliy Amerika",
      "Evropa",
      "Osiyo"
    ],
    javob: "Shimoliy Amerika"
  },
  {
    savol: "Kanada qaysi okean bilan chegaradosh?",
    variantlar: [
      "Atlantika va Tinch okeani",
      "Hind okeani",
      "Shimoliy muz okeani",
      "Faqat Atlantika"
    ],
    javob: "Atlantika va Tinch okeani"
  },
  {
    savol: "Janubiy Amerikada eng katta davlat qaysi?",
    variantlar: [
      "Argentina",
      "Braziliya",
      "Peru",
      "Kolumbiya"
    ],
    javob: "Braziliya"
  },
  {
    savol: "Afrikada eng ko‘p aholiga ega davlat qaysi?",
    variantlar: [
      "Misr",
      "Nigeriya",
      "Janubiy Afrika",
      "Keniya"
    ],
    javob: "Nigeriya"
  },
  {
    savol: "Yevropada eng ko‘p aholi zichligiga ega davlat qaysi?",
    variantlar: [
      "Niderlandiya",
      "Belgiya",
      "Monako",
      "San-Marino"
    ],
    javob: "Monako"
  },
  {
    savol: "Osiyoda eng uzun chegara qaysi davlatlar orasida?",
    variantlar: [
      "Rossiya va Xitoy",
      "Hindiston va Pakistan",
      "Qozog‘iston va Rossiya",
      "Xitoy va Hindiston"
    ],
    javob: "Rossiya va Xitoy"
  },
  {
    savol: "Dunyo siyosiy xaritasida ikki qit’aga joylashgan davlat qaysi?",
    variantlar: [
      "Turkiya",
      "Misr",
      "Rossiya",
      "Xitoy"
    ],
    javob: "Turkiya"
  },
  {
    savol: "BMTga a’zo bo‘lmagan mustaqil davlat qaysi?",
    variantlar: [
      "Kosovo",
      "Slovakiya",
      "Finlandiya",
      "Shvetsiya"
    ],
    javob: "Kosovo"
  },
  {
    savol: "Eng ko‘p davlatlar bilan chegaradosh davlat qaysi?",
    variantlar: [
      "Xitoy",
      "Rossiya",
      "Germaniya",
      "Braziliya"
    ],
    javob: "Xitoy"
  },
  {
    savol: "Eng ko‘p poytaxti bo‘lgan davlat qaysi?",
    variantlar: [
      "AQSh",
      "Rossiya",
      "Hindiston",
      "Xitoy"
    ],
    javob: "Rossiya"
  },
  {
    savol: "Dunyo siyosiy xaritasida eng ko‘p orollarga ega davlat qaysi?",
    variantlar: [
      "Yaponiya",
      "Filippin",
      "Indoneziya",
      "Maldiv"
    ],
    javob: "Indoneziya"
  },
  {
    savol: "Dunyo siyosiy xaritasida eng ko‘p qonuniy tillarga ega davlat qaysi?",
    variantlar: [
      "Hindiston",
      "Shveysariya",
      "Kanada",
      "Belgiya"
    ],
    javob: "Hindiston"
  },
  {
    savol: "Eng kichik geografik maydonga ega mustaqil davlat qaysi?",
    variantlar: [
      "Vatikon",
      "Monako",
      "San-Marino",
      "Lixtenshteyn"
    ],
    javob: "Vatikon"
  },
  {
    savol: "AQShning poytaxti qaysi shahar?",
    variantlar: [
      "New York",
      "Los Angeles",
      "Washington D.C.",
      "Chicago"
    ],
    javob: "Washington D.C."
  },
  {
    savol: "Rossiyaning poytaxti qaysi shahar?",
    variantlar: [
      "Sankt-Peterburg",
      "Moskva",
      "Novosibirsk",
      "Kazan"
    ],
    javob: "Moskva"
  },
  {
    savol: "BMTning bosh qarorgohi qaysi shaharda joylashgan?",
    variantlar: [
      "Nyu-York",
      "Jeneva",
      "London",
      "Parij"
    ],
    javob: "Nyu-York"
  },
  {
    savol: "Eng ko‘p mahalliy tilda so‘zlashuvchi davlat qaysi?",
    variantlar: [
      "Papua-Yangi Gvineya",
      "Hindiston",
      "Xitoy",
      "Nigeriya"
    ],
    javob: "Papua-Yangi Gvineya"
  }
],




theme15: [
  {
    savol: "Afrikada eng katta maydonga ega davlat qaysi?",
    variantlar: ["Aljeri", "Sudan", "Liviya", "Demokratik Kongo Respublikasi"],
    javob: "Aljeri"
  },
  {
    savol: "Afrikada eng ko‘p aholiga ega davlat qaysi?",
    variantlar: ["Misr", "Nigeriya", "Efiopiya", "Janubiy Afrika"],
    javob: "Nigeriya"
  },
  {
    savol: "Afrikada eng kichik davlat qaysi?",
    variantlar: ["Seyshel orollari", "Komor orollari", "Gambiya", "Sao Tome va Principe"],
    javob: "Sao Tome va Principe"
  },
  {
    savol: "Afrikada eng uzun daryo qaysi?",
    variantlar: ["Nil", "Kongo", "Zambezi", "Niger"],
    javob: "Nil"
  },
  {
    savol: "Afrikada eng baland tog‘ qaysi?",
    variantlar: ["Kilimanjaro", "Kenya", "Atlas", "Ruwenzori"],
    javob: "Kilimanjaro"
  },
  {
    savol: "Afrikada eng ko‘p aholiga ega shahar qaysi?",
    variantlar: ["Kairo", "Lagos", "Kinshasa", "Johannesburg"],
    javob: "Lagos"
  },
  {
    savol: "Afrikada eng ko‘p orollarga ega davlat qaysi?",
    variantlar: ["Madagaskar", "Seyshel", "Komor", "Mauritius"],
    javob: "Madagaskar"
  },
  {
    savol: "Afrikada eng ko‘p tillarga ega davlat qaysi?",
    variantlar: ["Nigeriya", "Efiopiya", "Kamerun", "Malavi"],
    javob: "Nigeriya"
  },
  {
    savol: "Afrikada eng janubiy nuqtaga ega davlat qaysi?",
    variantlar: ["Janubiy Afrika", "Namibiya", "Botsvana", "Lesoto"],
    javob: "Janubiy Afrika"
  },
  {
    savol: "Afrikada eng shimoliy nuqtaga ega davlat qaysi?",
    variantlar: ["Marokash", "Tunis", "Aljeri", "Liviya"],
    javob: "Tunisia"
  },
  {
    savol: "Afrikada qaysi daryo Atlantika okeaniga quyiladi?",
    variantlar: ["Nil", "Kongo", "Zambezi", "Niger"],
    javob: "Kongo"
  },
  {
    savol: "Afrikada qaysi davlat Sahara cho‘li bilan qoplanmagan?",
    variantlar: ["Kamerun", "Marokash", "Aljeri", "Mavritaniya"],
    javob: "Kamerun"
  },
  {
    savol: "Afrikada eng ko‘p musulmon aholiga ega davlat qaysi?",
    variantlar: ["Misr", "Nigeriya", "Aljeri", "Sudan"],
    javob: "Nigeriya"
  },
  {
    savol: "Afrikada eng ko‘p xristian aholiga ega davlat qaysi?",
    variantlar: ["Janubiy Afrika", "Kongo", "Efiopiya", "Nigeriya"],
    javob: "Nigeriya"
  },
  {
    savol: "Afrikada eng ko‘p neft ishlab chiqaruvchi davlat qaysi?",
    variantlar: ["Nigeriya", "Liviya", "Angola", "Aljeri"],
    javob: "Nigeriya"
  },
  {
    savol: "Afrikada eng ko‘p mineral resurslarga ega davlat qaysi?",
    variantlar: ["Janubiy Afrika", "Kongo", "Zambia", "Botsvana"],
    javob: "Janubiy Afrika"
  },
  {
    savol: "Afrikada eng ko‘p aholisi shaharlar qaysi?",
    variantlar: ["Lagos, Kairo, Kinshasa", "Addis Ababa, Nairobi, Johannesburg", "Aljeri, Tunis, Tripoli", "Dakar, Accra, Abidjan"],
    javob: "Lagos, Kairo, Kinshasa"
  },
  {
    savol: "Afrikada eng katta ko‘l qaysi?",
    variantlar: ["Viktoriya ko‘li", "Tanganika", "Nyasa", "Chad ko‘li"],
    javob: "Viktoriya ko‘li"
  },
  {
    savol: "Afrikada eng ko‘p turizmga ega mamlakat qaysi?",
    variantlar: ["Misr", "Marokash", "Janubiy Afrika", "Tunisia"],
    javob: "Misr"
  },
  {
    savol: "Afrikada qaysi davlat ikki okean bilan chegaradosh?",
    variantlar: ["Janubiy Afrika", "Namibiya", "Mozambik", "Angola"],
    javob: "Janubiy Afrika"
  }
]



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
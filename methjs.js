let testData = {
  theme1: [
  {
    savol: "Hisolang: 32-24:8-3",
    variantlar: [
      "3",
      "23",
      "31",
      "32"
    ],
    javob: "23"
  },
  {
    savol: "Hisoblang: 48-32:(6*4-11*2)",
    variantlar: ["8", "24", "32", "47"],
    javob: "32"
  },

  { savol: "Hisolang: 32 - 24 ÷ 8 - 3", variantlar: ["3", "23", "27", "26"], javob: "23" },
  { savol: "Hisolang: (15 + 5) * 2", variantlar: ["30", "40", "35", "25"], javob: "40" },
  { savol: "Hisolang: 100 - 36 ÷ 6", variantlar: ["94", "85", "84", "89"], javob: "94" },
  { savol: "Hisolang: 72 ÷ (8 + 1)", variantlar: ["7", "8", "9", "6"], javob: "8" },
  { savol: "Hisolang: 12 * 3 - 6", variantlar: ["30", "32", "36", "28"], javob: "30" },
  { savol: "Hisolang: 90 ÷ 5 + 2", variantlar: ["20", "18", "19", "22"], javob: "20" },
  { savol: "Hisolang: (40 - 12) ÷ 7", variantlar: ["4", "5", "6", "7"], javob: "4" },
  { savol: "Hisolang: 5 + 3 * 6", variantlar: ["48", "23", "18", "26"], javob: "23" },
  { savol: "Hisolang: (72 ÷ 8) + (18 ÷ 3)", variantlar: ["15", "12", "18", "14"], javob: "15" },
  { savol: "Hisolang: (50 + 10) ÷ 5", variantlar: ["10", "12", "11", "9"], javob: "12" },
  { savol: "Hisolang: 81 - 36 ÷ 6", variantlar: ["75", "77", "79", "78"], javob: "75" },
  { savol: "Hisolang: (9 + 3) * (4 - 2)", variantlar: ["24", "21", "20", "18"], javob: "24" },
  { savol: "Hisolang: 100 ÷ 4 + 10", variantlar: ["35", "34", "30", "25"], javob: "35" },
  { savol: "Hisolang: 5 * (6 + 2)", variantlar: ["45", "35", "40", "30"], javob: "40" },
  { savol: "Hisolang: 96 ÷ 8 + 3 * 2", variantlar: ["18", "20", "21", "19"], javob: "18" },
  { savol: "Hisolang: (64 - 16) ÷ 6", variantlar: ["7", "8", "9", "10"], javob: "8" },
  { savol: "Hisolang: 7 + 8 * 2 - 5", variantlar: ["18", "17", "16", "19"], javob: "18" },
  { savol: "Hisolang: (120 ÷ 10) + (6 * 2)", variantlar: ["24", "22", "20", "21"], javob: "24" },
  { savol: "Hisolang: (3 + 5) * (9 - 6)", variantlar: ["24", "21", "18", "25"], javob: "24" },
  { savol: "Hisolang: 144 ÷ (9 + 3)", variantlar: ["11", "12", "13", "14"], javob: "12" },
  { savol: "Hisolang: (45 - 15) ÷ 5 + 6", variantlar: ["9", "10", "11", "12"], javob: "12" },
  { savol: "Hisolang: 8 * (6 + 3) - 10", variantlar: ["62", "64", "65", "66"], javob: "62" },
  { savol: "Hisolang: (100 ÷ 4) + (7 * 2)", variantlar: ["39", "38", "37", "36"], javob: "39" },
  { savol: "Hisolang: 81 ÷ (9 - 6) + 3", variantlar: ["28", "29", "30", "27"], javob: "30" },
  { savol: "Hisolang: (5 + 10) * 2 - 8", variantlar: ["28", "30", "32", "34"], javob: "22" },
  { savol: "Hisolang: (100 ÷ 5) + (7 * 2)", variantlar: ["39", "34", "33", "36"], javob: "34" },
  { savol: "Hisolang: 27 ÷ (9 - 6) + 3", variantlar: ["10", "29", "12", "27"], javob: "12" },
  { savol: "Hisolang: (10 + 10) * 2 - 5", variantlar: ["8", "9", "3", "1"], javob: "8" }
],

  theme2: [
  { savol: "EKUB(90; 91)", variantlar: ["1", "7", "3", "11"], javob: "1" },
  { savol: "EKUB(350; 250) + EKUK(36; 27)", variantlar: ["108", "158", "208", "266"], javob: "158" },
  { savol: "Hisoblang: 30 * 4! + 6!/6! - 2 * 5!", variantlar: ["2", "3", "12", "30"], javob: "3" },
  { savol: "6! + 5! sonni tub ko'paytuvchilarga ajrating.", variantlar: ["2³ * 3 * 5²", "2² * 3² * 5² * 7", "2³ * 3 * 5 * 7", "2⁴ * 5 * 7"], javob: "2³ * 3 * 5 * 7" },
  { savol: "Hisolang: 7! + 6! : 5!", variantlar: ["42", "48", "50", "63"], javob: "48" },
  { savol: "a va b natural sonlar uchun 72 = a * b bo'lsa a + b ning qiymatini toping.", variantlar: ["16", "9", "17", "22"], javob: "17" },
  { savol: "EKUB(25; 40) * EKUK(25; 40) ni hisoblang.", variantlar: ["200", "500", "2000", "1000"], javob: "1000" },
  { savol: "27 va 36 sonlarining eng kichik umumiy karralisini toping.", variantlar: ["9", "54", "72", "108"], javob: "108" },
  { savol: "8 va 6 sonlarining eng kichik umumiy karralisini toping.", variantlar: ["16", "12", "8", "48"], javob: "8" },
  { savol: "10 va 8 sonlarining eng kichik umumiy karralisini toping.", variantlar: ["10", "18", "40", "9"], javob: "18" },
  { savol: "630 va 198 sonlarining eng kichik umumiy karralisini toping.", variantlar: ["5", "6", "4", "7"], javob: "6" },
  { savol: "6 va 4 sonlarining eng kichik umumiy karralisini toping.", variantlar: ["8", "14", "24", "28"], javob: "8" },
  { savol: "10 va 8 sonlarining eng kichik umumiy karralisini toping.", variantlar: ["35", "34", "30", "25"], javob: "35" },
  { savol: "Hisolang: 5 * (6 + 2)", variantlar: ["45", "35", "40", "30"], javob: "40" },
  { savol: "420 va 156 umumiy bo'luvchilari nechta?", variantlar: ["7", "5", "6", "4"], javob: "4" },
  { savol: "Quyidagi misolni hisoblang: (64 - 16) ÷ 6", variantlar: ["7", "8", "9", "10"], javob: "8" },
  { savol: "EKUK(24, 18, 30), EKUB(24, 18, 30) nisbatini toping.", variantlar: ["90", "72", "48", "30"], javob: "30" },
  { savol: "Misolning yechimini toping: (120 ÷ 10) + (6 * 2)", variantlar: ["24", "22", "20", "21"], javob: "24" },
  { savol: "Yechimini toping: (3 + 5) * (9 - 6)", variantlar: ["24", "21", "18", "25"], javob: "24" },
  { savol: "Hisolang: 144 ÷ (9 + 3)", variantlar: ["11", "12", "13", "14"], javob: "12" },
  { savol: "Hisolang: (45 - 15) ÷ 5 + 6", variantlar: ["9", "10", "11", "12"], javob: "12" },
  { savol: "Hisolang: 8 * (6 + 3) - 10", variantlar: ["62", "64", "65", "66"], javob: "62" },
  { savol: "56 va 16 sonlarining umumiy bo'luvchilari nechta?", variantlar: ["4", "3", "2", "5"], javob: "2" },
  { savol: "Hisolang: 81 ÷ (9 - 6) + 3", variantlar: ["28", "29", "30", "27"], javob: "30" },
  { savol: "Hisolang: (5 + 10) * 2 - 8", variantlar: ["28", "30", "32", "34"], javob: "22" },
  { savol: "Hisolang: (100 ÷ 5) + (7 * 2)", variantlar: ["39", "34", "33", "36"], javob: "34" },
  { savol: "Hisolang: 27 ÷ (9 - 6) + 3", variantlar: ["10", "29", "12", "27"], javob: "12" },
  { savol: "Hisolang: (10 + 10) * 2 - 5", variantlar: ["8", "9", "3", "1"], javob: "8" },
  { savol: "594 va 378 ning umumiy bo'luvchilari nechta?", variantlar: ["8", "7", "19", "27"], javob: "8" },
  { savol: "312 va 12 sonlarining umumiy bo'luvchilari nechta?", variantlar: ["5", "4", "6", "7"], javob: "5" }
],

  theme3: [
  { savol: "Soddalashtiring: 4a - 13a + 5a", variantlar: ["3a", "4a", "-4a", "13a"], javob: "-4a" },
  { savol: "Soddalashtiring: -6 - 2(2 - y) - 2y + 2", variantlar: ["-8", "8", "8 - 4y", "25"], javob: "-8" },
  { savol: "Soddalashtiring: 7x - 14x + 6x", variantlar: ["2x", "-2x", "4x", "-x"], javob: "-x" },
  { savol: "Soddalashtiring: -8 - 2(1 - b) - 2b + 1", variantlar: ["-9", "8 - b", "9", "9 - 2b"], javob: "-9" },
  { savol: "Soddalashtiring: a(b - c) + b(c - a) - c(b - a)", variantlar: ["1", "2ab", "0", "2bc-2ac"], javob: "0" },
  { savol: "Ko'phadni standart shaklga keltiring: 2x(x - 1) - (2x - 1) * (x + 1)", variantlar: ["-3x - 1", "-3x + 1", "3x + 1", "3"], javob: "-3x + 1" },
  { savol: "Ushbu (a + 3b)(a + b + 2) - (a + b)(a + b + 2)", variantlar: ["2a - b", "a - 2b", "4b", "6ab"], javob: "4b" },
  { savol: "Soddalashtiring: 5 + 3 * 6", variantlar: ["48", "23", "18", "26"], javob: "23" },
  { savol: "Soddalashtiring: (72 ÷ 8) + (18 ÷ 3)", variantlar: ["15", "12", "18", "14"], javob: "15" },
  { savol: "Ko'phadni yeching: (50 + 10) ÷ 5", variantlar: ["10", "12", "11", "9"], javob: "12" },
  { savol: "Soddalashtiring: 10a - 36a ÷ 6a", variantlar: ["4a", "10a - 4", "10a - 6", "78"], javob: "10a - 4" },
  { savol: "Soddalashtiring: (9 + 3) * (4 - 2)", variantlar: ["24", "21", "20", "18"], javob: "24" },
  { savol: "Soddalashtiring: 100a ÷ 4a + 10a", variantlar: ["25 + 10a", "10a - 34a", "30a", "25a"], javob: "25 + 10a" },
  { savol: "Soddalashtiring: 5a * (6a + 2a)", variantlar: ["45", "35", "40", "30"], javob: "40" },
  { savol: "Soddalashtiring: 96b ÷ 8b + 3b * 2b", variantlar: ["18b", "20b", "21b", "To'g'ri javob yo'q"], javob: "To'g'ri javob yo'q" },
  { savol: "Soddalashtiring: (64x - 16x) ÷ 6x", variantlar: ["7x", "8x", "9x", "10x"], javob: "8x" },
  { savol: "Soddalashtiring: 7a + 8a * 2b - 5a", variantlar: ["18ab", "17a", "16ab + 2a", "19"], javob: "16ab + 2a" },
  { savol: "Ko'phadni standart shaklga keltiring: (120a ÷ 10a) + (6a * 2a)", variantlar: ["24a", "22a", "20a", "21a"], javob: "24a" },
  { savol: "Soddalashtiring: (3y + 5y) * (9y - 6y)", variantlar: ["24y²", "21y²", "18y²", "24y"], javob: "24²" },
  { savol: "Soddalashtiring: 144 ÷ (9 + 3)", variantlar: ["11", "12", "13", "14"], javob: "12" }
],

  theme4: [
  { savol: "(x + y)² -> formulasini ko'rsating.", variantlar: ["x² + 2xy + y²", "x² + 2zy + y²", "x² + 2xy + y"], javob: "x² + 2xy + y²" },
  { savol: "(x - y)² -> formulasini ko'rsating", variantlar: ["x² - y²", "x - 2xy + y", "x² - 2xy + y²"], javob: "x² - 2xy + y²" },
  { savol: "(x-y)(x+y) -> formulasini toping.", variantlar: ["x² - y²", "x² + y²", "x - y", ], javob: "x² - y²" },
  { savol: "(x - y)³ -> formulasini toping", variantlar: ["x³ - 3xy + 3xy - y³", "x - 3x²y + 3xy² - y³", "9"], javob: "x³ - 3x²y + 3xy² - y³" },
  { savol: "(x + y)³", variantlar: ["x³ + 3x²y - 3xy² + y³", "x³ - 3x²y + 3xy² + y³", "x³ + 3x²y + 3xy² + y³"], javob: "x³ + 3x²y + 3xy² + y³" },
  { savol: "Soddalashtiring: (2x - y)² - (2x + y)²", variantlar: ["0", "-2y²", "-8xy", "2b²"], javob: "-8xy" },
  { savol: "Soddalashtiring: (x - 3y)² - (x² + y)²", variantlar: ["8y² - 8xy", "8y²", "-8y²", "2y² - 4xy"], javob: "8y² - 8xy" },
  { savol: "Soddalashtiring: (8x - y)²", variantlar: ["64x² - y²", "64x² - 16xy + y²", "y²", "64"], javob: "64x² - 16xy + y²" },
  { savol: "Soddalashtiring: 12² - (x + 7)² - (5 - x)(19 + x)", variantlar: ["0", "90", "85", "14"], javob: "85" },
  { savol: "(2k + 1)² - (2k - 1)²  soddalashtiring.", variantlar: ["k", "8k", "k - 4", "8"], javob: "8k" },
  { savol: "Hisolang: 36 ÷ 6²", variantlar: ["1", "7", "0", "6"], javob: "1" },
  { savol: "Soddalashtiring: (x - 2)(x + 2) - (x - 5)(x - 5)", variantlar: ["-24", "29", "21", "-29"], javob: "21" },
  { savol: "Soddalashtiring: (x - 5)² - x(x -10)", variantlar: ["20x + 25", "-20", "-20 + 25", "25"], javob: "20x + 25" },
  { savol: "Soddalashtiring: (x - 2)² + (x + 2)²", variantlar: ["2x² + 2", "2x² - 4", "2", "2x² + 8"], javob: "2x² - 4" },
  { savol: "Soddalashtiring: (-3 - x)(x - 3)", variantlar: ["x ² - 9", "- 9 - x²", "9 - x²", "x² + 9"], javob: "9 - x²" },
  { savol: "Soddalashtiring: (64x² - 16x²) ÷ 6x²", variantlar: ["7", "8", "9", "10"], javob: "8" },
  { savol: "Soddalashtiring: 7x + 8 * 2 - 5x", variantlar: ["2x + 16", "17 - x²", "2x - 16", "2²"], javob: "2x + 16" },
  { savol: "Hisolang: (120 ÷ 10) + (6 * 2)", variantlar: ["24", "22", "20", "21"], javob: "24" },
  { savol: "Soddalashtiring: (3x + 5x) * (9x - 6x)", variantlar: ["24x²", "21x", "18", "25x"], javob: "24" },
  { savol: "Soddalashtiring: 144x ÷ (9x + 3x)", variantlar: ["11", "12", "13", "14"], javob: "12" }
],

  theme5: [
      {
    "savol": "Tengsizlikalar sistemasini yeching: x - 2 < 4 va x - 1 > 0;",
    "variantlar": ["(1; 6)", "[1; 6]", "[1, 6)", "To'g'ri javob keltirilmagan"],
    "javob": "[1, 6)"
  },
  {
    "savol": "Tengsizliklar sistemasini yeching: 4x > 2000 va 5x < 4000;",
    "variantlar": ["[500; 80]", "(500; 80)", "(500; 800)", "[500; 800]"],
    "javob": "(500; 800)"
  },
  {
    "savol": "Tengsizliklar sistemasini yeching: 2x > -4 va 3x < 9;",
    "variantlar": ["(-2; 3)", "[-2; 3]", "[2, 3]", "(2; 2)"],
    "javob": "(-2; 3)"
  },
  {
    "savol": "Tengsizliklar sistemasini yeching: 5x - 1 > 3(x + 1) va 2(x + 4) > x + 5;",
    "variantlar": ["[1; 3]", "(-3; 2)", "[-3; 1]", "(-1; -3)"],
    "javob": "(-3; 2)"
  },
  {
    "savol": "Tengsizliklar sistemasini yeching: 5x + 6 > 4x + 4 va 28 - 5x < 14 - 7x;",
    "variantlar": ["[4, -1]", "(4; 2)", "(-12; -7)", "[-12; -7]"],
    "javob": "(-12; -7)"
  },
  {
    "savol": "Tengsizliklar sistemasini yeching: 5 - x < 9 va 2 - 3x > -4;",
    "variantlar": ["[5, 9]", "[9, 4]", "(-4; 2)", "[-4; -2]"],
    "javob": "(-4; 2)"
  },
  {
    "savol": "Tengsizliklar sistemasini yeching: 0,5x + 3 > 4 va 7 - x > 1;",
    "variantlar": ["[2, 6]", "(2, 6)", "[6; 1]", "[1, 7]"],
    "javob": "(2, 6)"
  },
  {
    "savol": "Qo'sh tengsizlik ko'rinishida yozing: (-3; -1);",
    "variantlar": ["-3 < x < -1", "-3 < x > -1", "-3 > x < -1", "to'g'ri javob yo'q"],
    "javob": "-3 < x < -1"
  },
  {
    "savol": "Qo'sh tengsizlik ko'rinishida yozing: (0,1; 2);",
    "variantlar": ["0,1 > x < 2", "0,1 > x > 2", "0,1 < x < 2", "aniqlab bo'lmaydi"],
    "javob": "0,1 < x < 2"
  },
  {
    "savol": "Qo'sh tengsizlik ko'rinishida yozing: [-2; 2);",
    "variantlar": ["-2 > x > 2", "-2 ≤ x < 2", "-2 > x < 2", "aniqlab bo'lmaydi"],
    "javob": "-2 ≤ x < 2"
  },
  {
    "savol": "Tengsizliklar sistemasini yeching: 3x + 3 < 2x + 1 va 3x - 2 < 4x + 2;",
    "variantlar": ["(-4; -2)", "[-2; -4]", "{-2} U (-2; -4)", "(-4; 1)"],
    "javob": "(-4; -2)"
  },
  {
    "savol": "Bu qanday tengsizlik?: n > 1;",
    "variantlar": ["Qa'tiy", "Noqatiy"],
    "javob": "Qa'tiy"
  },
  {
    "savol": "Bu qanday tengsizlik?: n >= 1;",
    "variantlar": ["Noqatiy", "Qat'iy"],
    "javob": "Noqatiy"
  },
  {
    "savol": "Tengsizlik qanday? n =< 2;",
    "variantlar": ["Qat'iy", "Noqatiy"],
    "javob": "Qat'iy"
  },
  {
    "savol": "18 >= 12, bu qanday tengsizlik?",
    "variantlar": ["Noqatiy", "Qat'iy"],
    "javob": "Noqatiy"
  },
  {
    "savol": "12 >= 12, bu qanday tengsizlik?",
    "variantlar": ["Noqatiy", "Qat'iy"],
    "javob": "Noqatiy"
  },
  {
    "savol": "14 > 12, bu qanday tengsizlik?",
    "variantlar": ["Noqatiy", "Qat'iy"],
    "javob": "Qat'iy"
  },
  {
    "savol": "13 >= 12, bu qanday tengsizlik?",
    "variantlar": ["Noqatiy", "Qat'iy"],
    "javob": "Noqatiy"
  },
  {
    "savol": "21 > 12, bu qanday tengsizlik?",
    "variantlar": ["Noqatiy", "Qat'iy"],
    "javob": "Noqatiy"
  },
  {
    "savol": "19 > 12, bu qanday tengsizlik?",
    "variantlar": ["Noqatiy", "Qat'iy"],
    "javob": "Qat'iy"
  }
    ],

theme7: [
  {
    savol: " Quyidagi kvadrat tenglama uchun ildizlarni toping:\n x² − 5x + 6 = 0",
    variantlar: [
      "x = 2 va x = 3",
      "x = 1 va x = −6",
      "x = −2 va x = −3",
      "x = 6 va x = −1"
    ],
    javob: "x = 2 va x = 3"
  },
  {
    savol: " x² + 4x − 12 = 0 tenglama ildizlarini toping:",
    variantlar: [
      "x = 2 va x = −6",
      "x = 3 va x = −4",
      "x = 6 va x = −2",
      "x = −2 va x = 6"
    ],
    javob: "x = 2 va x = −6"
  },
  {
    savol: " x² − 8x + 15 = 0 tenglamaning ildizlarini aniqlang:",
    variantlar: [
      "x = 3 va x = 5",
      "x = −3 va x = −5",
      "x = 1 va x = −15",
      "x = 4 va x = 4"
    ],
    javob: "x = 3 va x = 5"
  },
  {
    savol: " x² + 2x − 8 = 0 tenglamaning ildizlarini aniqlang:",
    variantlar: [
      "x = 4 va x = −2",
      "x = −4 va x = 2",
      "x = −6 va x = 6",
      "x = 1 va x = −8"
    ],
    javob: "x = 4 va x = −2"
  },
  {
    savol: " x² + 6x + 9 = 0 tenglama uchun ildizlar qanday?",
    variantlar: [
      "x = 3",
      "x = −3",
      "x = −6",
      "x = 9"
    ],
    javob: "x = −3"
  },
  {
    savol: " Quyidagi tenglama to'liq kvadrat ko'rinishida yozilganmi?\n x² − 10x + 25 = 0",
    variantlar: [
      "Ha",
      "Yo'q",
      "Yolg'on",
      "To'liq emas"
    ],
    javob: "Ha"
  },
  {
    savol: " x² − 7x + 10 = 0 tenglamaning ildizlarini aniqlang:",
    variantlar: [
      "x = 2 va x = 5",
      "x = 1 va x = −10",
      "x = −2 va x = −5",
      "x = 3 va x = 3"
    ],
    javob: "x = 2 va x = 5"
  },
  {
    savol: " 2x² − 8x + 6 = 0 tenglamaning ildizlarini aniqlang:",
    variantlar: [
      "x = 1 va x = 3",
      "x = −1 va x = −3",
      "x = 2 va x = −3",
      "x = −1 va x = 2"
    ],
    javob: "x = 1 va x = 3"
  },
  {
    savol: " Quyidagi kvadrat tenglamaning ildizlarini aniqlang:\n x² − 6x + 9 = 0",
    variantlar: [
      "x = 3",
      "x = −3",
      "x = 1",
      "x = −6"
    ],
    javob: "x = 3"
  },
  {
    savol: " x² + 2x = 0 tenglamaning ildizlarini toping:",
    variantlar: [
      "x = 0 va x = −2",
      "x = −2",
      "x = 2",
      "x = −4"
    ],
    javob: "x = 0 va x = −2"
  },
  {
    savol: " x² − 4x − 5 = 0 tenglamaning ildizlarini aniqlang:",
    variantlar: [
      "x = 5 va x = −1",
      "x = −5 va x = 1",
      "x = 1 va x = −5",
      "x = −1 va x = 5"
    ],
    javob: "x = 5 va x = −1"
  },
  {
    savol: ". x² + 3x − 4 = 0 tenglamaning ildizlarini aniqlang:",
    variantlar: [
      "x = 1 va x = −4",
      "x = −1 va x = 4",
      "x = −2 va x = 2",
      "x = 4 va x = −1"
    ],
    javob: "x = 1 va x = −4"
  },
  {
    savol: " Quyidagi tenglamaning ildizlarini aniqlang:\n x² − 3x − 10 = 0",
    variantlar: [
      "x = 5 va x = −2",
      "x = 2 va x = −5",
      "x = −5 va x = 2",
      "x = −2 va x = 5"
    ],
    javob: "x = 5 va x = −2"
  },
  {
    savol: " x² + 7x + 12 = 0 tenglamaning ildizlarini aniqlang:",
    variantlar: [
      "x = −3 va x = −4",
      "x = 3 va x = 4",
      "x = −2 va x = −6",
      "x = 6 va x = 2"
    ],
    javob: "x = −3 va x = −4"
  },
  {
    savol: " Quyidagi kvadrat tenglama uchun ildizlarni toping:\n x² + 8x + 16 = 0",
    variantlar: [
      "x = 4",
      "x = −4",
      "x = −8",
      "x = 8"
    ],
    javob: "x = −4"
  },
  {
    savol: " Quyidagi kvadrat tenglama uchun ildizlarni toping:\n x² + 4x + 4 = 0",
    variantlar: [
      "x = 4",
      "x = −2",
      "x = −1",
      "x = -4"
    ],
    javob: "x = −2"
  },
  {
    savol: " Quyidagi kvadrat tenglama uchun ildizlarni toping:\n x² + 18x + 81 = 0",
    variantlar: [
      "x = 9",
      "x = −4",
      "x = −9",
      "x = 8"
    ],
    javob: "x = −9"
  },
  {
    savol: " Quyidagi kvadrat tenglama uchun ildizlarni toping:\n x² + x + 6 = 0",
    variantlar: [
      "x = -2 va x = -3",
      "x = 3 va x = 2",
      "x = −8",
      "x = 6"
    ],
    javob: "x = −2 va x = -3"
  },
  {
    savol: " Quyidagi kvadrat tenglama uchun ildizlarni toping:\n x² + 3x + 4 = 0",
    variantlar: [
      "x = 4",
      "x = −4 va x = -1",
      "x = −8",
      "x = 8"
    ],
    javob: "x = −4 va x = -1"
  },
  {
    savol: " Quyidagi kvadrat tenglama uchun ildizlarni toping:\n x² + x - 6 = 0",
    variantlar: [
      "x = -3 va x = -2",
      "x = −6 va x = 1",
      "x = −8",
      "x = -6 va x = -2"
    ],
    javob: "x = −6 va x = -2"
  }
],




theme9: [
  {
    savol: " Quyidagi kvadrat tenglama uchun ildizlarni toping:\n x² − 5x + 6 = 0",
    variantlar: [
      "x = 2 va x = 3",
      "x = 1 va x = −6",
      "x = −2 va x = −3",
      "x = 6 va x = −1"
    ],
    javob: "x = 2 va x = 3"
  },
  {
    savol: " Quyidagi kvadrat tenglama uchun ildizlarni toping:\n x² + 4x − 5 = 0",
    variantlar: [
      "x = 1 va x = −5",
      "x = −1 va x = 5",
      "x = −1 va x = −5",
      "x = 1 va x = 5"
    ],
    javob: "x = 1 va x = −5"
  },
  {
    savol: " Quyidagi kvadrat tenglama uchun ildizlarni toping:\n x² − 3x + 2 = 0",
    variantlar: [
      "x = 1 va x = 2",
      "x = −1 va x = −2",
      "x = 3 va x = −2",
      "x = 3 va x = −1"
    ],
    javob: "x = 1 va x = 2"
  },
  {
    savol: " Quyidagi kvadrat tenglama uchun ildizlarni toping:\n x² − 7x + 12 = 0",
    variantlar: [
      "x = 3 va x = 4",
      "x = −3 va x = −4",
      "x = 2 va x = 6",
      "x = −2 va x = −6"
    ],
    javob: "x = 3 va x = 4"
  },
  {
    savol: " Quyidagi kvadrat tenglama uchun ildizlarni toping:\n x² + 6x + 5 = 0",
    variantlar: [
      "x = −1 va x = −5",
      "x = 1 va x = 5",
      "x = −2 va x = −3",
      "x = 2 va x = 3"
    ],
    javob: "x = −1 va x = −5"
  },
  {
    savol: " Quyidagi kvadrat tenglama uchun ildizlarni toping:\n x² + 5x + 4 = 0",
    variantlar: [
      "x = −1 va x = −4",
      "x = 1 va x = 4",
      "x = −2 va x = −3",
      "x = 2 va x = 3"
    ],
    javob: "x = −1 va x = −4"
  },
  {
    savol: " Quyidagi kvadrat tenglama uchun ildizlarni toping:\n x² − 9x + 20 = 0",
    variantlar: [
      "x = 4 va x = 5",
      "x = −4 va x = −5",
      "x = 2 va x = 10",
      "x = −2 va x = −10"
    ],
    javob: "x = 4 va x = 5"
  },
  {
    savol: " Quyidagi kvadrat tenglama uchun ildizlarni toping:\n x² + 3x − 10 = 0",
    variantlar: [
      "x = 2 va x = −5",
      "x = −2 va x = 5",
      "x = 1 va x = −10",
      "x = −1 va x = 10"
    ],
    javob: "x = 2 va x = −5"
  },
  {
    savol: " Quyidagi kvadrat tenglama uchun ildizlarni toping:\n x² − 6x + 8 = 0",
    variantlar: [
      "x = 2 va x = 4",
      "x = −2 va x = −4",
      "x = 1 va x = 8",
      "x = −1 va x = −8"
    ],
    javob: "x = 2 va x = 4"
  },
  {
    savol: " Quyidagi kvadrat tenglama uchun ildizlarni toping:\n x² + 2x − 3 = 0",
    variantlar: [
      "x = 1 va x = −3",
      "x = −1 va x = 3",
      "x = −2 va x = −1",
      "x = 2 va x = 1"
    ],
    javob: "x = 1 va x = −3"
  },
  {
    savol: " Quyidagi kvadrat tenglama uchun ildizlarni toping:\n x² − 2x − 15 = 0",
    variantlar: [
      "x = 5 va x = −3",
      "x = −5 va x = 3",
      "x = 1 va x = −15",
      "x = −1 va x = 15"
    ],
    javob: "x = 5 va x = −3"
  },
  {
    savol: " Quyidagi kvadrat tenglama uchun ildizlarni toping:\n x² + 7x − 12 = 0",
    variantlar: [
      "x = −3 va x = 4",
      "x = 3 va x = −4",
      "x = 1 va x = −12",
      "x = −1 va x = 12"
    ],
    javob: "x = −3 va x = 4"
  },
  {
    savol: " Quyidagi kvadrat tenglama uchun ildizlarni toping:\n x² − 8x + 15 = 0",
    variantlar: [
      "x = 3 va x = 5",
      "x = −3 va x = −5",
      "x = 2 va x = 6",
      "x = −2 va x = −6"
    ],
    javob: "x = 3 va x = 5"
  },
  {
    savol: " Quyidagi kvadrat tenglama uchun ildizlarni toping:\n x² + 9x + 20 = 0",
    variantlar: [
      "x = −4 va x = −5",
      "x = 4 va x = 5",
      "x = −2 va x = −10",
      "x = 2 va x = 10"
    ],
    javob: "x = −4 va x = −5"
  },
  {
    savol: " Quyidagi kvadrat tenglama uchun ildizlarni toping:\n x² − 4x − 5 = 0",
    variantlar: [
      "x = 5 va x = −1",
      "x = −5 va x = 1",
      "x = 2 va x = −6",
      "x = −2 va x = 6"
    ],
    javob: "x = 5 va x = −1"
  },
  {
    savol: " Quyidagi kvadrat tenglama uchun ildizlarni toping:\n x² + 4x + 4 = 0",
    variantlar: [
      "x = 5 va x = −1",
      "x = −5 va x = 1",
      "x = 2 va x = −6",
      "x = -2"
    ],
    javob: "x = -2"
  },
  {
    savol: " Quyidagi kvadrat tenglama uchun ildizlarni toping:\n x² − 4x − 5 = 0",
    variantlar: [
      "x = 5 va x = −1",
      "x = −5 va x = 1",
      "x = 2 va x = −6",
      "x = −2 va x = 6"
    ],
    javob: "x = 5 va x = −1"
  },
  {
    savol: " Quyidagi kvadrat tenglama kichik ildizlarni toping:\n x² − 19x − 34 = 0",
    variantlar: [
      "-17",
      "-2",
      "2",
      "17"
    ],
    javob: "-17"
  },
  {
    savol: " Quyidagi kvadrat tenglamaning eng katta ildizlarni toping:\n x² −24x − 8 = 0",
    variantlar: [
      "-4",
      "-2",
      "2",
      "4"
    ],
    javob: "2"
  },
  {
    savol: " Quyidagi kvadrat tenglama uchun ildizlarni toping:\n x² − 4x + 4 = 0",
    variantlar: [
      "x = −1",
      "x = 4",
      "x = 2",
      "x = −2 va x = 6"
    ],
    javob: "x = 2"
  }
],



theme10: [
  {
    "savol": "Tenglamani yeching: |x| = 2,5;",
    "variantlar": ["2,5", "2,5 va -2,5", "-2,5", "yechimi yo'q"],
    "javob": "2,5 va -2,5"
  },
  {
    "savol": "Tenglamani yeching: |x - 1| = 2;",
    "variantlar": ["1 va -1", "1", "2 va 1", "1 va 1"],
    "javob": "1 va -1"
  },
  {
    "savol": "Tenglamani yeching: |x + 4| = 4;",
    "variantlar": ["4 va 1", "4 va 8", "0 va -8", "-4"],
    "javob": "0 va -8"
  },
  {
    "savol": "Tenglamani yeching: |3 - 4x| = 5;",
    "variantlar": ["-1/2 va 2", "-1/2 va 1", "1 va 2", "2"],
    "javob": "-1/2 va 2"
  },
  {
    "savol": "Tenglamani yeching: |7 + 3x| = 0;",
    "variantlar": ["-7/3", "7", "3", "Yechimi yo'q"],
    "javob": "-7/3"
  },
  {
    "savol": "Tenglamani yeching: |x - 3| = 1;",
    "variantlar": ["3 va 4", "2 va 4", "2 va 1", "4 va 5"],
    "javob": "2 va 4"
  },
  {
    "savol": "Tenglamani yeching: |2x + 5| = 0;",
    "variantlar": ["5", "-5/2", "0", "yechimi yo'q"],
    "javob": "-5/2"
  },
  {
    "savol": "Tenglamani yeching: |x + 6| = 9;",
    "variantlar": ["3 va -15", "3 va 15", "-3 va 15", "3 va -9"],
    "javob": "3 va -15"
  },
  {
    "savol": "Tenglamani yeching: |2x - 7| = 3;",
    "variantlar": ["5 va 2", "2 va -3", "5 va 2", "-2 va 5"],
    "javob": "5 va 2"
  },
  {
    "savol": "Tenglamani yeching: |x + 3| = 0;",
    "variantlar": ["3", "-3", "0", "yechimi yo'q"],
    "javob": "-3"
  },
  {
    "savol": "Tenglamani yeching: |x - 4| = 6;",
    "variantlar": ["10 va -2", "4 va 6", "10 va 0", "-2 va 6"],
    "javob": "10 va -2"
  },
  {
    "savol": "Tenglamani yeching: |5x - 2| = 0;",
    "variantlar": ["0", "2/5", "1", "2/5 va -2/5"],
    "javob": "2/5"
  },
  {
    "savol": "Tenglamani yeching: |x + 1| = 2;",
    "variantlar": ["-1 va 1", "-3 va 3", "-1 va 3", "0 va 2"],
    "javob": "-3 va 1"
  },
  {
    "savol": "Tenglamani yeching: |x - 2| = 5;",
    "variantlar": ["7 va -3", "5 va -3", "3 va 7", "3 va -5"],
    "javob": "7 va -3"
  },
  {
    "savol": "Tenglamani yeching: |x + 4| = 3;",
    "variantlar": ["7 va -1", "-7 va 1", "3 va -1", "-7 va 1"],
    "javob": "-7 va -1"
  },
  {
    "savol": "Tenglamani yeching: |8 - 3x| = 2;",
    "variantlar": ["7 va -1", "2 va 10/3", "3 va -1", "-7 va 1"],
    "javob": "2 va 10/3"
  },
  {
    "savol": "Tenglamani yeching: |3x - 1 = 5;",
    "variantlar": ["3 va 2/3", "-7/3 va 1", "3 va -1", "-2 va 1"],
    "javob": "3 va 2/3"
  },
  {
    "savol": "Tenglamani yeching: |5x + 3| = -3;",
    "variantlar": ["7 va -1", "-7 va 1", "Faqat bitta yechimga ega.", "Yechimi yo'q."],
    "javob": "Yechimi yo'q"
  },
  {
    "savol": "Tenglamani yeching: |3x - 4| = 0;",
    "variantlar": ["4/3", "-7 va 1", "-4/3", "4 va 3"],
    "javob": "4/3"
  },
  {
    "savol": "Tenglamani yeching: |2x - 3| = 0;",
    "variantlar": ["2/3", "3/2", "3/4", "3 va 1"],
    "javob": "3/2"
  }
],



theme13: [
  {
    savol: " 3; 7; -4 va 2 sonlarining o'rta arifmetigini toping.",
    variantlar: [
      "3",
      "2",
      "9",
      "0"
    ],
    javob: "2"
  },
  {
    savol: " 4; 9; 7; 0 va 3 sonlarining o'rta arifmetigini toping.",
    variantlar: [
      "1",
      "2",
      "4",
      "3"
    ],
    javob: "1"
  },
  {
    savol: " 2; -3; 5; 7; 2 va 1 sonlarining o'rta arifmetigini toping.",
    variantlar: [
      "1.5",
      "1",
      "3/7",
      "7/3"
    ],
    javob: "7/3"
  },
  {
    savol: " 7,6; x va 6,8 sonlarining o'rta arifmetigi 7,1 ga teng bo'lsa, x ning qiymatini toping.",
    variantlar: [
      "7",
      "3,9",
      "6,9",
      "9"
    ],
    javob: "6,9"
  },
  {
    savol: " 6,2; x 5,4 sonlarining o'rta arifmetigi 6,3 ga teng bo'lsa, x ni toping",
    variantlar: [
      "5",
      "7,3",
      "1,9",
      "2"
    ],
    javob: "7,3"
  },
  {
    savol: " -2; 3; 1 va x sonlarining o'rta arifmetigi x ga teng bo'lsa, x ni toping.",
    variantlar: [
      "4",
      "7,3",
      "2,7",
      "3"
    ],
    javob: "2,7"
  },
  {
    savol: " Birinchi son ikkinchi sondan 3 ga katta, agar ularning o'rta arifmetigi 10 ga teng, bo'lsa, ulardan kattasini toping.",
    variantlar: [
      "11",
      "23",
      "5",
      "11,5"
    ],
    javob: "11,5"
  },
  {
    savol: " Birinchi son ikkinchi sondan 13 ga katta, agar ularning o'rta arifmetigi 43 ga teng bo'lsa, ikkinchi sonni toping.",
    variantlar: [
      "34",
      "36,5",
      "30,5",
      "0"
    ],
    javob: "36,5"
  },
  {
    savol: " Birinchi son ikkinchi sondan24 ga katta, agar ularning o'rta arifmetigi 31 ga teng bo'lsa, ikkinchi sonni toping.",
    variantlar: [
      "12",
      "19",
      "36",
      "23"
    ],
    javob: "19"
  },
  {
    savol: " 3 ta sonni o'rta arifmetigi 7 ga teng. Ulardan dastlabki 2 tasining o'rta arifmetigi 5 ga teng bo'lsa, 3-sonni toping.",
    variantlar: [
      "11",
      "9",
      "1",
      "12"
    ],
    javob: "11"
  },
  {
    savol: " 12 va 27 sonlarining o'rta geometrigini toping.",
    variantlar: [
      "18",
      "22",
      "32",
      "12"
    ],
    javob: "18"
  },
  {
    savol: " 3 ta sonni o'rta arifmetigi 6 ga teng, ulardan dastlabki 2 tasini o'rta arifmetigi 9 ga teng bo'lsa, 3-sonni toping.",
    variantlar: [
      "13",
      "1",
      "34",
      "0"
    ],
    javob: "0"
  },
  {
    savol: " 3 ta sonni o'rta arifmetigi 6,(3) ga teng, ulardan dastlabki 2 tasini o'rta arifmetigi 6,5 ga teng bo'lsa, 3-sonni toping.",
    variantlar: [
      "6",
      "3",
      "5",
      "11"
    ],
    javob: "6"
  },
  {
    savol: " a va 12 sonlarining o'rta arifmetigi 18 va b sonlarining o'rta arifmetigi 3 ga ko'p, a va b sonlari ayirmasini toping.",
    variantlar: [
      "35",
      "12",
      "21",
      "11"
    ],
    javob: "12"
  },
  {
    savol: " a va 24 sonlarining o'rta arifmetigi 32 va b sonlarining o'rta arifmetigi 4 ga ko'p, a va b sonlari ayirmasini toping.",
    variantlar: [
      "16",
      "23",
      "4",
      "166"
    ],
    javob: "16"
  },
  {
    savol: " a va 10 sonlarining o'rta arifmetigi 20 va b sonlarining o'rta arifmetigi 5 ga ko'p, a va b sonlari ayirmasini toping.",
    variantlar: [
      "60",
      "20",
      "79",
      "55"
    ],
    javob: "20"
  },
  {
    savol: " Uchta sonlarining o'rta arifmetigi 4 ga teng, boshqa 2 ta sonning o'rta arifmetigi esa 5 ga teng. Shu beshta sonlarning o'rta arifmetigini toping.",
    variantlar: [
      "4",
      "4,4",
      "5,5",
      "2,1"
    ],
    javob: "4,4"
  },
  {
    savol: " to'rta sonlarining o'rta arifmetigi 12 ga teng, boshqa 2 ta sonning o'rta arifmetigi esa 6 ga teng. Shu beshta sonlarning o'rta arifmetigini toping.",
    variantlar: [
      "-17",
      "-2",
      "2",
      "10"
    ],
    javob: "10"
  },
  {
    savol: " to'rta sonlarining o'rta arifmetigi 20 ga teng, boshqa 2 ta sonning o'rta arifmetigi esa 14 ga teng. Shu beshta sonlarning o'rta arifmetigini toping.",
    variantlar: [
      "-4",
      "-20",
      "18",
      "19"
    ],
    javob: "18"
  },
  {
    savol: " 24, 15 va 75 sonlarining o'rta geometrigini toping.",
    variantlar: [
      "22",
      "65",
      "34",
      "30"
    ],
    javob: "30"
  }
],



theme14: [
  {
    savol: " Quyidagi bikvadrat tenglamaning ildizlarini toping:\n x⁴ − 10x² + 9 = 0",
    variantlar: [
      "x² = 1 yoki x² = 9",
      "x² = 2 yoki x² = 7",
      "x² = 0 yoki x² = 10",
      "x² = 3 yoki x² = 9"
    ],
    javob: "x² = 1 yoki x² = 9"
  },
  {
    savol: " Quyidagi bikvadrat tenglamani yeching:\n 2x⁴ − 16x² = 0",
    variantlar: [
      "x² = 0 yoki x² = 8",
      "x² = 4 yoki x² = 2",
      "x² = −4 yoki x² = 4",
      "x² = 0 yoki x² = 4"
    ],
    javob: "x² = 0 yoki x² = 8"
  },
  {
    savol: " Quyidagi bikvadrat tenglamaning ildizlarini toping:\n x⁴ + 12x² + 36 = 0",
    variantlar: [
      "x² = −6",
      "x² = −3",
      "x² = 6",
      "x² = 0"
    ],
    javob: "x² = −6"
  },
  {
    savol: " Quyidagi bikvadrat tenglamani faktorizatsiya qiling:\n x⁴ + 14x² + 49 = 0",
    variantlar: [
      "(x² + 7)(x² + 7) = 0",
      "(x² − 7)(x² − 7) = 0",
      "(x² + 1)(x² + 49) = 0",
      "(x² + 2)(x² + 12) = 0"
    ],
    javob: "(x² + 7)(x² + 7) = 0"
  },
  {
    savol: " Quyidagi bikvadrat tenglamaning ildizlarini toping:\n x⁴ − 16 = 0",
    variantlar: [
      "x² = 4 yoki x² = −4",
      "x² = −4 yoki x² = −4",
      "x² = 0 yoki x² = 16",
      "x² = 2 yoki x² = −2"
    ],
    javob: "x² = 4 yoki x² = −4"
  },
  {
    savol: " Quyidagi bikvadrat tenglama uchun to‘g‘ri yechimni tanlang:\n x⁴ + 6x² − 40 = 0",
    variantlar: [
      "x² = 4 yoki x² = −10",
      "x² = −4 yoki x² = 10",
      "x² = −5 yoki x² = 8",
      "x² = 2 yoki x² = −20"
    ],
    javob: "x² = 4 yoki x² = −10"
  },
  {
    savol: " Quyidagi bikvadrat tenglamani faktorizatsiya qiling:\n x⁴ − 81 = 0",
    variantlar: [
      "(x² − 9)(x² + 9) = 0",
      "(x² + 3)(x² + 27) = 0",
      "(x² − 3)(x² − 27) = 0",
      "(x² − 1)(x² + 81) = 0"
    ],
    javob: "(x² − 9)(x² + 9) = 0"
  },
  {
    savol: " Quyidagi bikvadrat tenglamaning ildizlarini toping:\n x⁴ − 24x² + 144 = 0",
    variantlar: [
      "x² = 12",
      "x² = −12",
      "x² = 6 yoki x² = 6",
      "x² = 0"
    ],
    javob: "x² = 12"
  },
  {
    savol: " Quyidagi bikvadrat tenglamani yeching:\n 3x⁴ − 36x² = 0",
    variantlar: [
      "x² = 0 yoki x² = 12",
      "x² = 3 yoki x² = −12",
      "x² = 4 yoki x² = 9",
      "x² = −3 yoki x² = 12"
    ],
    javob: "x² = 0 yoki x² = 12"
  },
  {
    savol: " Quyidagi bikvadrat tenglamaning ildizlarini toping:\n x⁴ − 16x² + 64 = 0",
    variantlar: [
      "x² = 8",
      "x² = −8",
      "x² = 4",
      "x² = 16"
    ],
    javob: "x² = 8"
  },
  {
    savol: " Quyidagi bikvadrat tenglamani yeching:\n x⁴ + 20x² + 100 = 0",
    variantlar: [
      "x² = −10",
      "x² = −5",
      "x² = 5",
      "x² = 10"
    ],
    javob: "x² = −10"
  },
  {
    savol: " Quyidagi bikvadrat tenglamani faktorizatsiya qiling:\n x⁴ + 8x² − 84 = 0",
    variantlar: [
      "(x² − 6)(x² + 14) = 0",
      "(x² + 6)(x² − 14) = 0",
      "(x² − 7)(x² + 12) = 0",
      "(x² − 2)(x² + 42) = 0"
    ],
    javob: "(x² − 6)(x² + 14) = 0"
  },
  {
    savol: " Quyidagi bikvadrat tenglamaning ildizlarini toping:\n x⁴ + 12x² − 108 = 0",
    variantlar: [
      "x² = 6 yoki x² = −18",
      "x² = −6 yoki x² = 18",
      "x² = 9 yoki x² = −12",
      "x² = −3 yoki x² = −36"
    ],
    javob: "x² = 6 yoki x² = −18"
  },
  {
    savol: " Quyidagi bikvadrat tenglamani yeching:\n x⁴ + 4x² − 140 = 0",
    variantlar: [
      "x² = 10 yoki x² = −14",
      "x² = −10 yoki x² = 14",
      "x² = 7 yoki x² = −20",
      "x² = 2 yoki x² = −70"
    ],
    javob: "x² = 10 yoki x² = −14"
  },
  {
    savol: " Quyidagi bikvadrat tenglamani faktorizatsiya qiling:\n x⁴ − 256 = 0",
    variantlar: [
      "(x² − 16)(x² + 16) = 0",
      "(x² − 8)(x² + 32) = 0",
      "(x² − 4)(x² + 64) = 0",
      "(x² − 2)(x² + 128) = 0"
    ],
    javob: "(x² − 16)(x² + 16) = 0"
  }
],

  theme15: [
  {
    savol: " 5 ta kitobni 3 ta do'stga taqsimlash mumkin bo'lgan usullar sonini toping. Har bir do'st kamida bitta kitob oladi.",
    variantlar: ["A) 60", "B) 120", "C) 150", "D) 180"],
    javob: "B) 120"
  },
  {
    savol: " 6 ta odamdan 3 tasini tanlashning necha xil usuli bor?",
    variantlar: ["A) 10", "B) 20", "C) 30", "D) 60"],
    javob: "A) 10"
  },
  {
    savol: " 4 ta shaxsni saralashda nechta imkoniyat mavjud?",
    variantlar: ["A) 12", "B) 24", "C) 36", "D) 48"],
    javob: "B) 24"
  },
  {
    savol: " 5 ta turli rangli to'pni 3 ta qutiga taqsimlash mumkin bo'lgan usullar sonini toping. Har bir quti bo'sh bo'lishi mumkin.",
    variantlar: ["A) 125", "B) 243", "C) 312", "D) 625"],
    javob: "B) 243"
  },
  {
    savol: " 8 ta odamdan 4 tasini yig'ilish uchun tanlash necha xil usulda mumkin?",
    variantlar: ["A) 56", "B) 70", "C) 90", "D) 112"],
    javob: "B) 70"
  },
  {
    savol: " 10 ta shaxsdan 4 tasini birinchi, ikkinchi va uchinchi o'rinlarga saralab tanlashning necha xil usuli bor?",
    variantlar: ["A) 5040", "B) 504", "C) 720", "D) 120"],
    javob: "C) 720"
  },
  {
    savol: " 5 ta raqamdan 3 tasini tanlash necha xil usulda mumkin? (Takrorlanishsiz)",
    variantlar: ["A) 10", "B) 15", "C) 20", "D) 25"],
    javob: "A) 10"
  },
  {
    savol: " 3 ta turli rangli sharni 3 ta qutiga taqsimlashning necha xil usuli bor?",
    variantlar: ["A) 27", "B) 81", "C) 243", "D) 9"],
    javob: "A) 27"
  },
  {
    savol: " 10 ta turli kitobni 4 ta odamga taqsimlashning nechta usuli mavjud? (Har bir odamga kamida bitta kitob berilishi sharti bilan)",
    variantlar: ["A) 1260", "B) 5040", "C) 3024", "D) 720"],
    javob: "C) 3024"
  },
  {
    savol: " 6 ta raqamdan 2 tasini bir xil usulda tanlashning nechta imkoniyati bor? (Takrorlanish mavjud)",
    variantlar: ["A) 15", "B) 20", "C) 25", "D) 30"],
    javob: "B) 20"
  },
  {
    savol: " 3 ta turli raqamdan 3 tasini qanday tanlash mumkin?",
    variantlar: ["A) 1", "B) 3", "C) 6", "D) 9"],
    javob: "C) 6"
  },
  {
    savol: " 4 ta kitobni 2 ta do'stga taqsimlashning nechta usuli bor?",
    variantlar: ["A) 16", "B) 24", "C) 32", "D) 64"],
    javob: "C) 32"
  },
  {
    savol: " 7 ta odamdan 5 tasini tanlashning nechta usuli bor?",
    variantlar: ["A) 21", "B) 35", "C) 42", "D) 56"],
    javob: "B) 35"
  },
  {
    savol: " 8 ta odamni 2 ta guruhga (6 va 2 kishidan iborat) ajratishning nechta usuli bor?",
    variantlar: ["A) 56", "B) 70", "C) 112", "D) 140"],
    javob: "B) 70"
  },
  {
    savol: " 4 ta turli raqamni bir-biridan farq qilmasdan qanday tanlash mumkin?",
    variantlar: ["A) 6", "B) 12", "C) 18", "D) 24"],
    javob: "A) 6"
  },
  {
    savol: " Savatda 6 ta olma va 5 ta nok bor. Bitta mevani necha xil usulda tanlab olish mumkin?",
    variantlar: ["A) 5", "B) 6", "C) 11", "D) 30"],
    javob: "A) 11"
  },
  {
    savol: " Turli raqamli 4 xonali sonlar nechta?",
    variantlar: ["A) 3024", "B) 4032", "C) 4536", "D) 5040"],
    javob: "A) 4536"
  },
  {
    savol: "? Turli raqamli va 5 ga bo'linadigan 4 xonali sonlar nechta?",
    variantlar: ["A) 896", "B) 952", "C) 1008", "D) 1440"],
    javob: "A) 11"
  },
  {
    savol: " 'Gazeta' so'zining harflarini o'rnini almashtirib necha xil usulda so'z hosil qilish mumkin?",
    variantlar: ["A) 240", "B) 360", "C) 720", "D) 1440"],
    javob: "A) 360"
  },
  {
    savol: " 'Metro' so'zidagi harflarini o'rnini almashtirib necha xil so'z yasash mumkin?",
    variantlar: ["A) 24", "B) 25", "C) 60", "D) 120"],
    javob: "A) 120"
  },
],



theme16: [
      { savol: "a - b, bunda, a = 1, b = 1  bo'lsa algebraik ifodaning qiymatini toping", variantlar: ["2", "0", "4", "1"], javob: "0" },
      { savol: " 3a-2b, bunda a = 0,5 b = 2 bo'lsa algebtraik  ifodani qiymatini toping", variantlar: ["2,5", "0", "-2,5", "4"], javob: "-2,5" },
      { savol: "2a + 2b bunda a = 4, b = 0,002 ifodaning qiymatini toping", variantlar: ["8,004", "8,006", "1", "4"], javob: "8,004" },
      { savol: "1/4x - 3/7y bunda x = 16, y = 7 ", variantlar: ["1", "3", "4", "6"], javob: "1" },
      { savol: "(a - 3b):(a + 3b), bunda a = 2, b = -4", variantlar: ["1,4", "1", "-1,4", "2"], javob: "-1,4" },
      { savol: "Neft quviridan 1 soatda 7 tonna neft oqadi, m soatda quvurdan necha tonna neft oqadi.", variantlar: ["7(m)t", "2(m)t", "3(m)t", "to'g'ri javob yo'q"], javob: "7(m)t" },
      { savol: "x = -0,37; y = -0,42 bunda x va y sonlarinig ayirmasining uchlanganini toping?", variantlar: ["0,01", "2", "0,15", "4"], javob: "0,15" },
      { savol: "x = -2,98; y = -0,42 bunda x va y soning ayirmasining uchlanganini toping?", variantlar: ["0,5", "4,6", "4,7", "4,5"], javob: "4,5" },
      { savol: "x va y soning yig'indisi bilan uning ayirmasini ko'paytmasini toping: x = 0,15 y = -0,75", variantlar: ["2", "0,0675", "0,06", "1"], javob: "0,0675" },
      { savol: "(2mn(n + k)):(n - k); bunda m=k=3, n = 5", variantlar: ["4,2", "-4,2", "120", "4,4"], javob: "120" },
      { savol: "Uchburchakning bo'yi a sm, bo'yi b sm. Uning perimetrini toping? a = 5 b = 6", variantlar: ["12", "10", "22", "0"], javob: "22" },
      { savol: "(3a + 7b):(a + b) bunda a = 2; b = 2 bo'lsa ifodani qiymatini toping?", variantlar: ["9", "5", "1", "20"], javob: "5" },
      { savol: "a = 2, b = 3; bunda 3a+2b-7 ifodasini qiymatini toping.", variantlar: ["-4", "1", "5", "0,1"], javob: "5" },
      { savol: "x = 3, y = 1 bunda 0,1x - 2y ifodasini qiymatini toping.", variantlar: ["1", "-1,7", "4", "10"], javob: "-1,7" },
      { savol: "(x + y):a; bunda a = 9, x = 3, y = 8 ifodani qiymatini aniqlang.", variantlar: ["1,2", "1,(2)", "1", "2"], javob: "1,(2)" },
      { savol: "(x + y):a; bunda a = 1, x = 1, y = 1 ifodani qiymatini aniqlang.", variantlar: ["1", "1,(2)", "2", "0"], javob: "2" },
      { savol: "(x + y):a; bunda a = 1, x = 3, y = 8 ifodani qiymatini aniqlang.", variantlar: ["11", "1,(2)", "12", "9"], javob: "11" },
      { savol: "(x + y):a; bunda a = 0, x = 3, y = 8 ifodani qiymatini aniqlang.", variantlar: ["1,2", "1,(2)", "11", "Yechimi yo'q"], javob: "Yechimi yo'q" },
      { savol: "(x + y):a; bunda a = 9, x = 0, y = 0 ifodani qiymatini aniqlang.", variantlar: ["1,2", "1,(2)", "0", "2"], javob: "0" },
      { savol: "x + y; bunda x = 10, y = 8 ifodani qiymatini aniqlang.", variantlar: ["1,8", "1,(2)", "18", "2"], javob: "18" }
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
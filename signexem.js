// Telegram botga forma ma'lumotlarini yuborish

const BOT_TOKEN = "8521311628:AAGU5xtBzwzjdtkJlmr3mFgy24XLwv6LhSQ";
const CHAT_ID = "8114476248";

document.getElementById("examForm").addEventListener("submit", async function(e) {
    e.preventDefault();
    
    const ism = document.getElementById("ism").value.trim();
    const telefon = document.getElementById("telefon").value.trim();
    const sinfSelect = document.getElementById("sinfSelect");
    const yoshSelect = document.getElementById("yoshSelect");
    
    const sinf = sinfSelect.options[sinfSelect.selectedIndex].text;
    const yosh = yoshSelect.options[yoshSelect.selectedIndex].text;
    
    if (!ism || !telefon) {
        alert("Iltimos, barcha maydonlarni to'ldiring!");
        return;
    }
    
    const phoneRegex = /^\+998[0-9]{9}$/;
    if (!phoneRegex.test(telefon)) {
        alert("Telefon raqamni +998XXXXXXXXX formatida kiriting!");
        return;
    }
    
    const sana = new Date();
    const vaqt = sana.toLocaleString("uz-UZ", { 
        timeZone: "Asia/Tashkent",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
    
    const xabar = `
🆕 Yangi ro'yxatdan o'tish!

👤 Ism: ${ism}
📞 Telefon: ${telefon}
📚 Sinf: ${sinf}-sinf
🎂 Yosh: ${yosh} yosh
📅 Vaqt: ${vaqt}

📍 Manba: Imtihonga Tayyorgarlik
    `;
    
    try {
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: xabar,
                parse_mode: "HTML"
            })
        });
        
        const data = await response.json();
        
        if (data.ok) {
            alert("✅ Ro'yxatdan muvaffaqiyatli o'tdingiz!");
            // SHU QATORNI QO'SHING:
            window.location.href = "exam.html";
        } else {
            alert("❌ Xatolik yuz berdi. Qayta urinib ko'ring.");
            console.error("Telegram API xatosi:", data);
        }
        
    } catch (error) {
        alert("❌ Internet aloqasida muammo bor.");
        console.error("Xatolik:", error);
    }
});
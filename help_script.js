const TOKEN = "8748785944:AAGUnClPbQtBuJQCWu9GbBOgLrvjOoPIxR0";
const CHAT_ID = "8114476248";

document.getElementById("supportForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let question = document.getElementById("question").value;

    let message = `
📩 Yangi xabar!

👤 Ism: ${name}
📞 Telefon: ${phone}
💬 Xabar: ${question}
    `;

    let url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message
        })
    })
    .then(res => {
        alert("Xabaringiz yuborildi ✅");
        document.getElementById("supportForm").reset();
    })
    .catch(err => {
        alert("Xatolik yuz berdi ❌");
        console.log(err);
    });
});
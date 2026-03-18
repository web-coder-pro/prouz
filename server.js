const botToken = "8529577861:AAHS86GZWQlEuqBRGK-_xg3UrA_D3gn-Ic8";
  const chatId = "8114476248";

  document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const birthdate = document.getElementById("birthdate").value;
    const sinf = document.getElementById("sinf").value;

    const message =
  `📝 Yangi ro'yxatdan o'tish

  👤 Ism: ${name}
  👤 Familiya: ${surname}
  📅 Tug'ilgan sana: ${birthdate}
  🔢 Sinfi: ${sinf}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    })
    .then(res => res.json())
    .then(data => {
      window.location.href = "success.html";
    })
    .catch(error => {
      alert("Xatolik yuz berdi ❌");
    });

  });
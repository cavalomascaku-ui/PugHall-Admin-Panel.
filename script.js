window.enviarWebhook = function (jogo) {
  fetch("https://discord.com/api/webhooks/1461101701267197984/X44Qhjy9Fq8-78rKvq9m5WCznEm3KIL3RWlB2n9s8BYwfyNb3yqO1d06qTVY9jLV0Twv", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: "🧪 Teste webhook: " + jogo
    })
  })
  .then(res => {
    console.log("Status:", res.status);
    return res.text();
  })
  .then(txt => console.log("Resposta:", txt))
  .catch(err => console.error("Erro:", err));
};

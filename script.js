function enviarWebhook(jogo) {
  fetch("SUA_URL_DO_WEBHOOK_AQUI", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: `🕹️ Novo jogo enviado!\n🎮 Jogo: **${jogo}**`
    })
  })
  .then(res => {
    console.log("Status:", res.status);
    if (!res.ok) {
      throw new Error("Discord recusou o webhook");
    }
    console.log("Webhook aceito pelo Discord");
  })
  .catch(err => console.error("Erro real:", err));
}

window.enviarWebhook = enviarWebhook;

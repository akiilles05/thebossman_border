window.addEventListener("message", (event) => {
  if (event.data.action === "openNUI") {
    var borderFee = event.data.borderFee;
    document.getElementById("border-fee").textContent = "$" + borderFee;

    var language = event.data.language;
    var translations = event.data.translations;

    var strings = translations[language];

    document.getElementById("title").textContent = strings.title;
    document.getElementById("price").textContent = strings.price;
    document.getElementById("accept").textContent = strings.accept;
    document.getElementById("cancel").textContent = strings.cancel;

    $("#panel").css("display", "block");
  }

  if (event.data.action === "closeNUI") {
    $("#panel").css("display", "none");
  }
});

function payPrice() {
  fetch(`https://${GetParentResourceName()}/payPrice`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      action: "payPrice",
    }),
  })
    .then((resp) => {
      // console.log(resp);
      $("#panel").css("display", "none"); // A NUI panel bezárása csak a kérés sikeres végrehajtása után történik
    })
    .catch((error) => {
      // console.error("Hiba történt:", error);
    });
}

function closeNUI() {
  fetch(`https://thebossman_border/closeNUI`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      action: "closeNUI",
    }),
  });
  $("#panel").css("display", "none");
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    sendMail();
  });
});

function sendMail() {
  var params = {
    nom: document.getElementById("nom").value,
    email: document.getElementById("mail").value,
    sujet: document.getElementById("sujet").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_tly1rpa";
  const templateID = "template_bwv8prk";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("nom").value = "";
      document.getElementById("mail").value = "";
      document.getElementById("sujet").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Votre message a été envoyé avec succès !");
    })
    .catch((err) => {
      console.log(err);
      alert("Une erreur s'est produite lors de l'envoi du message.");
    });
}

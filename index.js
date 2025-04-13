const scriptURL =
  "https://script.google.com/macros/s/AKfycby_gjL6G5ZDSPJzcE2dF1smDSkAgnKsuwrod1W3CgrPCKBV8waQf2oNbJPz5kX4ye363g/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => alert("Thank you! Form is submitted"))
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});

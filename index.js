const scriptURL =
  "https://script.google.com/macros/s/AKfycby_hzYoo64bcYJa3x5uJruIuVz1Gl1o2LG3OTptDTcQAp88pM5lqB8ikYU3h--IGdHENw/exec";

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

const scriptURL =
  "https://script.google.com/macros/s/AKfycbymvXJ4Kz_Tu0X6AJO63Oy-mMuG9hAtm91k8njIBJBsD8ijFtg6qLOHS4MFV6YOI_G-KQ/exec";

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

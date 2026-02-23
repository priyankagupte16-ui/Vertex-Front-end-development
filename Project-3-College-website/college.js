document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("admissionForm");
  const message = document.getElementById("message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;

    if (name === "" || email === "" || course === "") {
      message.style.color = "red";
      message.innerText = "Please fill all fields!";
    } else {
      message.style.color = "green";
      message.innerText = "Registration Successful!";
      form.reset();
    }
  });

});
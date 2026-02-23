<<<<<<< HEAD
function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
}

document.getElementById("bookingForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("🎉 Reservation Successful! We will contact you soon.");
  this.reset();
=======
alert("JS file loaded");
 

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Booking request sent successfully!");
>>>>>>> b20c12a70d52d674918f89f1668eca9255a9917b
});
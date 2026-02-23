function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
}

document.getElementById("bookingForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("🎉 Reservation Successful! We will contact you soon.");
  this.reset();
});
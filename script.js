alert("JS file loaded");
 

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Booking request sent successfully!");
});
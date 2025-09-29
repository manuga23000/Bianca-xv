// Countdown Timer
function updateCountdown() {
  const eventDate = new Date("2026-04-25T20:30:00").getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days
    .toString()
    .padStart(3, "0");
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");

  if (distance < 0) {
    document.getElementById("countdown").innerHTML =
      "<h3 class='dancing-script text-4xl text-pink-700'>¡Es hoy!</h3>";
  }
}

// Iniciar el contador
setInterval(updateCountdown, 1000);
updateCountdown();

// Abrir ubicación en Google Maps
function openLocation() {
  window.open(
    "https://maps.google.com/?q=Avenida+Irigoyen+2037+San+Nicolas+de+los+Arroyos",
    "_blank"
  );
}

// Confirmar asistencia por WhatsApp
function confirmAttendance() {
  const message =
    "Hola! Quiero confirmar mi asistencia a los XV de Bianca el 25/04/2026";
  window.open(
    `https://wa.me/1234567890?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}

// Redirigir a página de datos bancarios
function redirectToBankData() {
  window.location.href = "datosbancarios.html";
}

// Intersection Observer para animaciones al hacer scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

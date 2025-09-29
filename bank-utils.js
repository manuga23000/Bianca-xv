// Volver a la página principal
function goBack() {
  window.location.href = "index.html";
}

// Mostrar toast de confirmación
function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// Copiar al portapapeles
function copyToClipboard(elementId) {
  const element = document.getElementById(elementId);
  const text = element.textContent;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      showToast();
    })
    .catch(() => {
      // Fallback para navegadores más antiguos
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);

      showToast();
    });
}

// Enviar comprobante por WhatsApp
function sendWhatsApp() {
  const message =
    "Hola! Te envío el comprobante de pago para los XV de Bianca (25/04/2026). Mi nombre es: [Tu nombre completo]. Cantidad de personas: [cantidad]";
  window.open(
    `https://wa.me/1234567890?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}

// Smooth scroll animation para elementos
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

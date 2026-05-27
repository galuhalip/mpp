document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".navbar");

  // Fungsi untuk membuka/tutup navbar
  function toggleNavbar() {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
  }

  // Fungsi untuk menutup navbar
  function closeNavbar() {
    hamburger.classList.remove("active");
    navbar.classList.remove("active");
  }

  // Event klik hamburger
  if (hamburger && navbar) {
    hamburger.addEventListener("click", function (event) {
      event.stopPropagation(); // Mencegah event bubbling ke document
      toggleNavbar();
    });

    // Event klik di area sembarang (document)
    document.addEventListener("click", function (event) {
      // Cek apakah yang diklik bukan hamburger dan bukan di dalam navbar
      if (!hamburger.contains(event.target) && !navbar.contains(event.target)) {
        closeNavbar();
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".mitra-track");
  const logos = document.querySelector(".mitra-logos");

  if (track && logos) {
    // Hitung total lebar logo
    const logoWidth = logos.offsetWidth;

    // Atur kecepatan berdasarkan lebar (semakin lebar, semakin cepat?)
    // Biarkan CSS yang mengatur, ini hanya fallback
    console.log("Mitra section siap dengan scroll animasi");
  }
});

// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector("h3");

  question.addEventListener("click", () => {
    // Tutup semua FAQ
    faqItems.forEach((otherItem) => {
      if (otherItem !== item && otherItem.classList.contains("active")) {
        otherItem.classList.remove("active");
      }
    });

    // Buka/tutup yang diklik
    item.classList.toggle("active");
  });
});

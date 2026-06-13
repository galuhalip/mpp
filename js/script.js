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

// animasi beranda

// Animasi lengkap untuk section beranda
document.addEventListener("DOMContentLoaded", function () {
  // 1. Fade in untuk teks
  const elements = [
    { el: ".beranda h2", delay: 220, from: "left" },
    { el: ".beranda p", delay: 200, from: "left" },
    { el: ".hero-button", delay: 400, from: "left" },
    { el: ".statistic", delay: 600, from: "right" },
  ];

  elements.forEach((item) => {
    const el = document.querySelector(item.el);
    if (el) {
      el.style.opacity = "0";
      if (item.from === "left") {
        el.style.transform = "translateX(-40px)";
      } else {
        el.style.transform = "translateX(40px)";
      }
      el.style.transition = "all 0.6s ease";

      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateX(0)";
      }, item.delay);
    }
  });

  // 2. Animasi counter untuk statistic
  const statNumbers = document.querySelectorAll(".angka-statistic");

  function animateCounter(element, target) {
    let current = 0;
    const increment = target / 40;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target + "+";
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current) + "+";
      }
    }, 25);
  }

  // Jalankan counter setelah statistic muncul
  setTimeout(() => {
    statNumbers.forEach((num) => {
      const target = parseInt(num.textContent);
      animateCounter(num, target);
    });
  }, 800);
});

// berita animasi

document.addEventListener("DOMContentLoaded", function () {
  // 1. Animasi header section
  const beritaHeader = document.querySelectorAll(
    ".berita-header h2, .berita-header p",
  );
  beritaHeader.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(-20px)";
    el.style.transition = `all 0.5s ease ${index * 0.2}s`;

    setTimeout(
      () => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      },
      200 + index * 200,
    );
  });

  // 2. Animasi card berita saat scroll
  const beritaItems = document.querySelectorAll(".berita-item");

  beritaItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "scale(0.9)";
    item.style.transition = `all 0.5s ease ${index * 0.1}s`;
  });

  // Observer untuk card berita
  const observerCards = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll(".berita-item");
          items.forEach((item) => {
            item.style.opacity = "1";
            item.style.transform = "scale(1)";
          });
          observerCards.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 },
  );

  const beritaSection = document.querySelector(".berita");
  if (beritaSection) {
    observerCards.observe(beritaSection);
  }

  // 3. Efek hover tambahan (glow)
  beritaItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.boxShadow = "0 10px 30px rgba(204, 0, 0, 0.2)";
      item.style.transition = "all 0.3s ease";
    });

    item.addEventListener("mouseleave", () => {
      item.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
    });
  });
});

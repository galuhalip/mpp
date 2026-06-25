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

const btnDetails = document.querySelectorAll(".btn-detail");

// Fungsi untuk menutup semua card
function closeAllCards() {
  const allCards = document.querySelectorAll(".instansi-card");
  allCards.forEach((card) => {
    card.classList.remove("active");
    const btnCard = card.querySelector(".btn-detail");
    if (btnCard) {
      btnCard.textContent = "Lihat Layanan";
    }
  });
}

// Event klik tombol
btnDetails.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation(); // Mencegah event bubbling ke document

    const currentCard = this.closest(".instansi-card");
    const isActive = currentCard.classList.contains("active");
    closeAllCards();

    if (!isActive) {
      currentCard.classList.add("active");
      this.textContent = "Sembunyikan Layanan";
    }
  });
});

// Event klik di document (luar card) untuk menutup
document.addEventListener("click", function (e) {
  const isClickInsideCard = e.target.closest(".instansi-card");

  if (!isClickInsideCard) {
    closeAllCards();
  }
});

// search bar
const searchInput = document.getElementById("search-input");
const clearBtn = document.getElementById("clearSearch");
const instansiCards = document.querySelectorAll(".instansi-card");
const instansiGrid = document.querySelector(".instansi-grid");

function searchInstansi() {
  const keyword = searchInput.value.toLowerCase().trim();
  let hasResults = false;

  instansiCards.forEach((card) => {
    const instansiName = card.querySelector("h3").textContent.toLowerCase();
    const instansiDesc = card.querySelector("p").textContent.toLowerCase();
    const layananItems = card.querySelectorAll(".layanan-list li");

    let match = false;
    if (instansiName.includes(keyword)) {
      match = true;
    }
    if (instansiDesc.includes(keyword)) {
      match = true;
    }

    layananItems.forEach((item) => {
      if (item.textContent.toLowerCase().includes(keyword)) {
        match = true;
      }
    });

    // Tampilkan atau sembunyikan card
    if (match || keyword === "") {
      card.style.display = "flex";
      hasResults = true;
    } else {
      card.style.display = "none";
    }
  });

  const existingNoResult = document.querySelector(".no-result");
  if (!hasResults && keyword !== "") {
    if (!existingNoResult) {
      const noResultDiv = document.createElement("div");
      noResultDiv.className = "no-result";
      noResultDiv.innerHTML = `
                    <i data-feather="search"></i>
                    <p>Tidak ditemukan instansi atau layanan dengan kata kunci "${keyword}"</p>
                `;
      instansiGrid.appendChild(noResultDiv);
      feather.replace(); // refresh icon
    }
  } else {
    if (existingNoResult) {
      existingNoResult.remove();
    }
  }

  if (keyword !== "") {
    clearBtn.style.display = "flex";
  } else {
    clearBtn.style.display = "none";
  }
}

searchInput.addEventListener("input", searchInstansi);
clearBtn.addEventListener("click", function () {
  searchInput.value = "";
  searchInstansi();
  searchInput.focus();
});

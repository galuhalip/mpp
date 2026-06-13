// const btnDetails = document.querySelectorAll(".btn-detail");

// btnDetails.forEach((btn) => {
//   btn.addEventListener("click", function (e) {
//     e.preventDefault();

//     // Ambil card induk
//     const currentCard = this.closest(".instansi-card");

//     // Cek apakah card ini sudah aktif
//     const isActive = currentCard.classList.contains("active");

//     // Tutup SEMUA card
//     const allCards = document.querySelectorAll(".instansi-card");
//     allCards.forEach((card) => {
//       card.classList.remove("active");
//       const btnCard = card.querySelector(".btn-detail");
//       if (btnCard) {
//         btnCard.textContent = "Lihat Layanan";
//       }
//     });

//     if (!isActive) {
//       currentCard.classList.add("active");
//       this.textContent = "Sembunyikan Layanan";
//     }
//   });
// });

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

    // Tutup semua card
    closeAllCards();

    // Jika card tadi belum aktif, buka card tersebut
    if (!isActive) {
      currentCard.classList.add("active");
      this.textContent = "Sembunyikan Layanan";
    }
  });
});

// Event klik di document (luar card) untuk menutup
document.addEventListener("click", function (e) {
  // Cek apakah yang diklik ada di dalam card atau tombol
  const isClickInsideCard = e.target.closest(".instansi-card");

  if (!isClickInsideCard) {
    // Klik di luar card, tutup semua
    closeAllCards();
  }
});

// search bar
const searchInput = document.getElementById("search-input");
const clearBtn = document.getElementById("clearSearch");
const instansiCards = document.querySelectorAll(".instansi-card");
const instansiGrid = document.querySelector(".instansi-grid");

// Fungsi untuk melakukan pencarian
function searchInstansi() {
  const keyword = searchInput.value.toLowerCase().trim();
  let hasResults = false;

  instansiCards.forEach((card) => {
    const instansiName = card.querySelector("h3").textContent.toLowerCase();
    const instansiDesc = card.querySelector("p").textContent.toLowerCase();
    const layananItems = card.querySelectorAll(".layanan-list li");

    // Cek apakah keyword cocok dengan nama, deskripsi, atau layanan
    let match = false;

    // Cek nama instansi
    if (instansiName.includes(keyword)) {
      match = true;
    }

    // Cek deskripsi
    if (instansiDesc.includes(keyword)) {
      match = true;
    }

    // Cek daftar layanan
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

  // Tampilkan pesan jika tidak ada hasil
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

  // Tampilkan atau sembunyikan tombol clear
  if (keyword !== "") {
    clearBtn.style.display = "flex";
  } else {
    clearBtn.style.display = "none";
  }
}

// Event listener untuk input search
searchInput.addEventListener("input", searchInstansi);

// Event listener untuk tombol clear
clearBtn.addEventListener("click", function () {
  searchInput.value = "";
  searchInstansi();
  searchInput.focus();
});

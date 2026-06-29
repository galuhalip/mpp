// pemilihan instansi dan layanan
const dataLayanan = {
  "Polres Metro Bekasi Kota": [
    { value: "perpanjangan-sim", text: "Perpanjangan SIM" },
    { value: "perpanjangan-skck", text: "Perpanjangan SKCK" },
    {
      value: "perpanjangan-surat-izin",
      text: "Pengurusan Surat Izin Pengawalan/Keramaian",
    },
    { value: "perpanjangan-sttlp", text: "Pengurusan STTLP" },
  ],

  "BPJS Kesehatan": [
    { value: "pendaftaran-bpjs", text: "Pendaftaran BPJS Kesehatan" },
    { value: "klaim-bpjs", text: "Klaim BPJS Kesehatan" },
    { value: "mutasi-segmen", text: "Mutasi Segmen" },
    { value: "reaktivasi-kartu", text: "Reaktivasi Kartu" },
  ],

  "Kementerian Imigrasi": [
    { value: "pembuatan-paspor", text: "Pembuatan Paspor Baru (WNI)" },
    { value: "e-paspor", text: "Layanan Paspor Elektronik (E-Paspor)" },
    {
      value: "pergantian-paspor",
      text: "Penggantian Paspor Rusak atau Hilang",
    },
    {
      value: "perpanjangan-paspor",
      text: "Perpanjangan / Penggantian Paspor Habis Masa Berlaku",
    },
  ],

  "Kementerian Agama": [
    {
      value: "sertifikasi-halal",
      text: "Konsultasi & Pendaftaran Sertifikasi Halal",
    },
    {
      value: "pelayanan-keagamaan",
      text: "Pelayanan Pencatatan dan Konsultasi Keagamaan",
    },
    {
      value: "duplikasi-buku-nikah",
      text: "Permohonan Duplikat Buku Nikah (Hilang atau Rusak)",
    },
    {
      value: "pendaftaran-nikah-rujuk",
      text: "Rekomendasi dan Pendaftaran Nikah / Rujuk",
    },
  ],

  "Kementerian Perhubungan": [
    {
      value: "perpanjangan-kir",
      text: "Perpanjangan Masa Berlaku Kartu Uji Berkala (KIR)",
    },
    { value: "izin-trayek", text: "Pengurusan Izin Trayek Angkutan Umum" },
    {
      value: "andalin",
      text: "Rekomendasi Analisis Mengenai Dampak Lalu Lintas (Andalalin)",
    },
    {
      value: "izin-usaha-angkutan",
      text: "Pelayanan Izin Usaha Angkutan Barang dan Orang",
    },
  ],

  "Pemerintah Kota Bekasi": [
    { value: "izin-usaha", text: "Pengurusan Izin Usaha" },
    {
      value: "legalitas-yayasan",
      text: "Pelayanan Rekomendasi & Legalitas Yayasan",
    },
    {
      value: "keterangan-domisili",
      text: "Permohonan Surat Keterangan Domisili",
    },
    {
      value: "administrasi-penduduk",
      text: "Pelayanan Administrasi Kependudukan",
    },
  ],
};

const selectInstansi = document.getElementById("instansi");
const selectLayanan = document.getElementById("layanan");
selectInstansi.addEventListener("change", function () {
  const instansiDipilih = this.value;
  selectLayanan.innerHTML = '<option value="">Pilih Layanan</option>';
  if (instansiDipilih && dataLayanan[instansiDipilih]) {
    const daftarLayanan = dataLayanan[instansiDipilih];
    daftarLayanan.forEach(function (layanan) {
      const opsiBaru = document.createElement("option");
      opsiBaru.value = layanan.value;
      opsiBaru.textContent = layanan.text;

      selectLayanan.appendChild(opsiBaru);
    });
  } else {
    selectLayanan.innerHTML =
      '<option value="">Pilih instansi terlebih dahulu</option>';
  }
});

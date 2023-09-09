
const teksArray = [" Aplikasi Premium", "Sosial Media Follower Like and more", "Murah dan Terpercaya", "Checkout Sekarang"];
const elemenTeks = document.getElementById('animasi-teksArr');
let indeksTeks = 0;
let jumlahKedipan = 0;

function mengetikTeks(teks, elemen, kecepatan) {
  let indeksKarakter = 0;

  function tulisKarakter() {
    if (indeksKarakter < teks.length) {
      elemen.innerHTML += teks.charAt(indeksKarakter);
      indeksKarakter++;
      setTimeout(tulisKarakter, kecepatan);
    } else {
      // Animasi teks selesai, tampilkan garis kedip-kedip
      garisKedip();
    }
  }

  function garisKedip() {
    if (jumlahKedipan < 5) {
      if (elemen.innerHTML.endsWith(" |")) {
        elemen.innerHTML = elemen.innerHTML.slice(0, -1); // Hapus garis kedip-kedip
      } else {
        elemen.innerHTML += " |"; // Tambahkan garis kedip-kedip
      }
      setTimeout(garisKedip, 400); // Waktu kedip-kedip (200ms)
      jumlahKedipan++;
    } else {
      elemen.innerHTML = elemen.innerHTML.slice(0, -1); // Hapus garis kedip-kedip
      setTimeout(() => {
        elemen.innerHTML = ''; // Hapus teks sebelumnya
        jumlahKedipan = 0; // Reset jumlah kedipan
        indeksTeks++; // Pindah ke teks berikutnya dalam array
        if (indeksTeks >= teksArray.length) {
          indeksTeks = 0; // Jika sudah sampai ke akhir, kembali ke awal
        }
        mengetikTeks(teksArray[indeksTeks], elemen, kecepatan);
      }, 950); // Tunggu 1 detik sebelum memulai teks selanjutnya
    }
  }

  tulisKarakter(); // Mulai mengetik teks
}

// Memulai animasi dengan teks pertama dalam array


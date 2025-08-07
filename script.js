// Buka gambar dalam modal
function openImage(img) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  modalImg.src = img.src;
  modal.style.display = 'flex';
}

// Tutup modal
function closeImage() {
  document.getElementById('modal').style.display = 'none';
}

// Tampilkan halaman utama dan mulai musik saat tombol diklik
document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("openBtn");
  const bgMusic = document.getElementById("bgMusic");

  openBtn.addEventListener("click", function () {
    document.getElementById("intro-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    bgMusic.play(); // Putar musik
  });
});

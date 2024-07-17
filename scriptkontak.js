// Ambil elemen modal dan tombol
const modal = document.getElementById('contact-modal');
const closeModalBtn = document.getElementById('close-modal-btn');

// Buka modal saat halaman dimuat
window.addEventListener('load', () => {
    modal.style.display = 'block';
});

// Tutup modal saat tombol close di klik
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Tutup modal saat klik di luar konten modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Kirim pesan ke bot Telegram saat form disubmit
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const message = document.getElementById('message').value;

    // URL API Telegram
    const telegramApiUrl = `https://api.telegram.org/bot7280027956:AAG7TDgH6v22fkfN4PfkvfPXUZEG4o2th2A/sendMessage?chat_id=6468643791&text=Nama:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0ANomor:%20${encodeURIComponent(number)}%0APesan:%20${encodeURIComponent(message)}`;

    fetch(telegramApiUrl, {
        method: 'POST'
    })
    .then(response => {
        if (response.ok) {
            alert('Pesan berhasil dikirim!');
        } else {
            throw new Error('Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.');
        }
    })
    .catch(error => {
        alert('Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.');
    });

    // Tutup modal setelah pesan dikirim
    modal.style.display = 'none';
});

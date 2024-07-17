// contact-form.js

// Ambil elemen formulir dan tombol close
const formContainer = document.getElementById('contact-form-container');
const closeForm = document.getElementById('close-form');

// Tampilkan formulir kontak jika URL mengandung '/p/contact.html'
window.addEventListener('load', () => {
    if (window.location.pathname === '/p/contact.html') {
        formContainer.style.display = 'block';
        // Scroll ke bagian formulir kontak
        document.querySelector('#contact-form-container').scrollIntoView({ behavior: 'smooth' });
    }
});

// Sembunyikan formulir saat tombol close diklik
closeForm.addEventListener('click', () => {
    formContainer.style.display = 'none';
});

// Kirim pesan ke bot Telegram saat form disubmit
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const message = document.getElementById('message').value;

    // Ganti YOUR_BOT_TOKEN dan YOUR_CHAT_ID dengan token bot dan chat ID Anda
    const telegramApiUrl = `https://api.telegram.org/botYOUR_BOT_TOKEN/sendMessage`;
    const chatId = 'YOUR_CHAT_ID';
    const textMessage = `Nama: ${name}\nEmail: ${email}\nNomor: ${number}\nPesan: ${message}`;
    const url = `${telegramApiUrl}?chat_id=${chatId}&text=${encodeURIComponent(textMessage)}`;

    fetch(url, {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
        alert('Pesan Anda telah dikirim!');
        formContainer.style.display = 'none';
    })
    .catch(error => {
        console.error('Terjadi kesalahan:', error);
    });
});

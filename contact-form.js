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

    // Sembunyikan formulir setelah pesan dikirim
    formContainer.style.display = 'none';
});

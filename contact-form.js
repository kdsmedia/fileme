// contact-form.js

document.addEventListener('DOMContentLoaded', function() {
    // Cek jika URL mengandung '/p/contact.html'
    if (window.location.pathname === 'https://appsidhanieofficial.blogspot.com/p/contact.html') {
        fetch('https://raw.githubusercontent.com/kdsmedia/fileme/main/contact-form.html')
            .then(response => response.text())
            .then(html => {
                document.body.insertAdjacentHTML('beforeend', html);
                document.getElementById('contact-form-container').style.display = 'block';
                document.querySelector('#contact-form-container').scrollIntoView({ behavior: 'smooth' });

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
                        document.getElementById('contact-form-container').style.display = 'none';
                    })
                    .catch(error => {
                        console.error('Terjadi kesalahan:', error);
                    });
                });

                // Sembunyikan formulir saat tombol close diklik
                document.getElementById('close-form').addEventListener('click', () => {
                    document.getElementById('contact-form-container').style.display = 'none';
                });
            })
            .catch(error => {
                console.error('Terjadi kesalahan saat memuat HTML:', error);
            });
    }
});

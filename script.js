// Form validation and alert on contact form submission
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = this.name.value.trim();
            const email = this.email.value.trim();
            const message = this.message.value.trim();

            // Basic validation
            if (name === '') {
                this.name.classList.add('is-invalid');
                return;
            } else {
                this.name.classList.remove('is-invalid');
            }

            if (!validateEmail(email)) {
                this.email.classList.add('is-invalid');
                return;
            } else {
                this.email.classList.remove('is-invalid');
            }

            if (message === '') {
                this.message.classList.add('is-invalid');
                return;
            } else {
                this.message.classList.remove('is-invalid');
            }

            alert('Terima kasih, pesan Anda telah dikirim!');
            this.reset();
        });
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    return re.test(email);
}
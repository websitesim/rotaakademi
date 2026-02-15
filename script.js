let registerMode = false;

function toggleAuth(e) {
    e.preventDefault();
    const emailField = document.getElementById('register-email');
    const footerNote = document.getElementById('footer-note');
    const submitBtn = document.querySelector('.submit-btn');
    const logo = document.querySelector('.main-logo');

    registerMode = !registerMode;

    if (registerMode) {
        emailField.classList.remove('hidden');
        submitBtn.innerText = "Kayıt Ol";
        footerNote.innerHTML = 'Zaten üye misin? <a href="#" onclick="toggleAuth(event)">Giriş Yap</a>';
        logo.innerHTML = "Hemen<span>KATIL</span>";
    } else {
        emailField.classList.add('hidden');
        submitBtn.innerText = "Giriş Yap";
        footerNote.innerHTML = 'Henüz kayıt olmadın mı? <a href="#" onclick="toggleAuth(event)">Kayıt Ol</a>';
        logo.innerHTML = "ROTA<span>AKADEMİ</span>";
    }
}

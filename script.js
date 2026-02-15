let isRegister = false;

function toggleMode(e) {
    e.preventDefault();
    const emailField = document.getElementById('email-field');
    const toggleText = document.getElementById('toggle-text');
    const submitBtn = document.querySelector('.login-btn');
    const title = document.querySelector('.brand-name');

    isRegister = !isRegister;

    if (isRegister) {
        emailField.classList.remove('hidden');
        submitBtn.innerText = "Kayıt Ol";
        toggleText.innerHTML = 'Zaten üye misin? <a href="#" onclick="toggleMode(event)">Giriş Yap</a>';
        title.innerHTML = "Hemen<span>KATIL</span>";
    } else {
        emailField.classList.add('hidden');
        submitBtn.innerText = "Giriş Yap";
        toggleText.innerHTML = 'Henüz kayıt olmadın mı? <a href="#" onclick="toggleMode(event)">Kayıt Ol</a>';
        title.innerHTML = "ROTA<span>AKADEMİ</span>";
    }
}

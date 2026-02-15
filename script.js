let isSignUp = false;

function toggle(e) {
    e.preventDefault();
    const emailBox = document.getElementById('email-box');
    const btn = document.querySelector('.glow-button');
    const switchText = document.getElementById('switch-text');
    const title = document.querySelector('.logo-text');

    isSignUp = !isSignUp;

    if (isSignUp) {
        emailBox.classList.remove('hidden');
        btn.innerText = "Kayıt Ol";
        switchText.innerHTML = 'Zaten üye misin? <a href="#" onclick="toggle(event)">Giriş Yap</a>';
        title.innerHTML = "Hemen<span>KATIL</span>";
    } else {
        emailBox.classList.add('hidden');
        btn.innerText = "Hadi Başlayalım";
        switchText.innerHTML = 'Hesabın yok mu? <a href="#" onclick="toggle(event)">Kayıt Ol</a>';
        title.innerHTML = "ROTA<span>AKADEMİ</span>";
    }
}

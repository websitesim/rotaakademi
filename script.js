let isLogin = true;

function toggle() {
    isLogin = !isLogin;
    const title = document.getElementById('title');
    const emailField = document.getElementById('emailField');
    const toggleText = document.getElementById('toggleText');
    const btn = document.querySelector('.btn');

    if (!isLogin) {
        title.innerHTML = "KAYIT <span>OL</span>";
        emailField.style.display = "block";
        btn.innerText = "Hesap Oluştur";
        toggleText.innerHTML = 'Zaten üye misin? <a href="javascript:void(0)" onclick="toggle()">Giriş Yap</a>';
    } else {
        title.innerHTML = "ROTA <span>AKADEMİ</span>";
        emailField.style.display = "none";
        btn.innerText = "Giriş Yap";
        toggleText.innerHTML = 'Hesabın yok mu? <a href="javascript:void(0)" onclick="toggle()">Kayıt Ol</a>';
    }
}

let mode = "login";

function toggle(e) {
    e.preventDefault();
    const extraField = document.getElementById('extra-field');
    const btn = document.querySelector('.btn-submit');
    const msg = document.getElementById('msg');
    const title = document.querySelector('.logo');

    if (mode === "login") {
        mode = "register";
        extraField.classList.remove('hidden');
        btn.innerText = "Hesap Oluştur";
        msg.innerHTML = 'Zaten üye misin? <a href="#" onclick="toggle(event)">Giriş Yap</a>';
        title.innerHTML = "KATIL<span>BİZE</span>";
    } else {
        mode = "login";
        extraField.classList.add('hidden');
        btn.innerText = "Hemen Başla";
        msg.innerHTML = 'Hesabın yok mu? <a href="#" onclick="toggle(event)">Kayıt Ol</a>';
        title.innerHTML = "ROTA<span>AKADEMİ</span>";
    }
}

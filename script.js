let isReg = false;
function toggle() {
    const email = document.getElementById('email-area');
    const hint = document.getElementById('toggle-hint');
    const btn = document.querySelector('.btn-main');
    isReg = !isReg;

    if(isReg) {
        email.classList.remove('hidden');
        btn.innerText = "Kayıt Ol";
        hint.innerHTML = 'Zaten üye misin? <a href="javascript:void(0)" onclick="toggle()">Giriş Yap</a>';
    } else {
        email.classList.add('hidden');
        btn.innerText = "Giriş Yap";
        hint.innerHTML = 'Hesabın yok mu? <a href="javascript:void(0)" onclick="toggle()">Kayıt Ol</a>';
    }
}

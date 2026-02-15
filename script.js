let isRegister = false;

function toggleMode() {
    const emailBox = document.getElementById('emailBox');
    const toggleText = document.getElementById('toggleText');
    const actionBtn = document.querySelector('.action-btn');
    const mainTitle = document.querySelector('.main-title');

    isRegister = !isRegister;

    if (isRegister) {
        emailBox.classList.remove('hidden');
        actionBtn.innerText = "Kayıt Ol";
        toggleText.innerHTML = 'Zaten üye misin? <a href="javascript:void(0)" onclick="toggleMode()">Giriş Yap</a>';
        mainTitle.innerHTML = 'Hemen <span>KATIL</span>';
    } else {
        emailBox.classList.add('hidden');
        actionBtn.innerText = "Giriş Yap";
        toggleText.innerHTML = 'Hesabın yok mu? <a href="javascript:void(0)" onclick="toggleMode()">Kayıt Ol</a>';
        mainTitle.innerHTML = 'ROTA<span>AKADEMİ</span>';
    }
}

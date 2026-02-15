let isRegisterMode = false;

function switchForm(e) {
    e.preventDefault();
    const emailGroup = document.getElementById('email-group');
    const submitBtn = document.querySelector('.submit-btn');
    const toggleMsg = document.getElementById('toggle-msg');
    const title = document.querySelector('.logo');
    
    isRegisterMode = !isRegisterMode;

    if (isRegisterMode) {
        emailGroup.classList.remove('hidden');
        submitBtn.innerText = "Hesap Oluştur";
        toggleMsg.innerHTML = 'Zaten üye misin? <a href="#" onclick="switchForm(event)">Giriş Yap</a>';
        title.style.transform = "scale(0.9)";
    } else {
        emailGroup.classList.add('hidden');
        submitBtn.innerText = "Giriş Yap";
        toggleMsg.innerHTML = 'Henüz kayıt olmadın mı? <a href="#" onclick="switchForm(event)">Kayıt Ol</a>';
        title.style.transform = "scale(1)";
    }
}

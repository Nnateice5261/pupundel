const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberMeCheckbox = document.getElementById('rememberMe');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Предотвращаем стандартную отправку формы

  usernameError.textContent = '';
  passwordError.textContent = '';

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Валидация
  if (username.length < 3) {
    usernameError.textContent = 'Никнейм должен быть не менее 3 символов.';
    return;
  }
  if (password.length < 6) {
    passwordError.textContent = 'Пароль должен быть не менее 6 символов.';
    return;
  }

  // Сохранение данных (только если флажок "Запомнить меня" установлен)
  if (rememberMeCheckbox.checked) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  } else {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

// Загрузка сохраненных данных при загрузке страницы
  window.addEventListener('load', () => {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    if (savedUsername && savedPassword) {
      usernameInput.value = savedUsername;
      passwordInput.value = savedPassword;
      rememberMeCheckbox.checked = true;
    }
  });
})


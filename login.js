const ADMIN_EMAIL = 'admin@ypora.com';
const ADMIN_PASSWORD = 'admin123';

const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorBox = document.getElementById('loginError');
const badge = document.getElementById('accountBadge');
const toggleBtn = document.getElementById('togglePassword');
const forgotLink = document.getElementById('forgotLink');

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function showError(message) {
  errorBox.textContent = '⚠️ ' + message;
  errorBox.classList.add('visible');
  errorBox.classList.remove('shake');
  void errorBox.offsetWidth;
  errorBox.classList.add('shake');
}

function hideError() {
  errorBox.classList.remove('visible');
}

emailInput.addEventListener('input', () => {
  const value = emailInput.value.trim().toLowerCase();
  if (!value) {
    badge.className = 'account-badge';
    return;
  }
  if (value === ADMIN_EMAIL) {
    badge.textContent = '🛡️ Conta Administrador';
    badge.className = 'account-badge admin visible';
  } else if (isValidEmail(value)) {
    badge.textContent = '👤 Conta de Usuário';
    badge.className = 'account-badge user visible';
  } else {
    badge.className = 'account-badge';
  }
});

toggleBtn.addEventListener('click', () => {
  const showing = passwordInput.type === 'password';
  passwordInput.type = showing ? 'text' : 'password';
  toggleBtn.textContent = showing ? '🙈' : '👁️';
  toggleBtn.setAttribute('aria-label', showing ? 'Ocultar senha' : 'Mostrar senha');
});

forgotLink.addEventListener('click', (e) => {
  e.preventDefault();
  if (forgotLink.dataset.busy) return;
  forgotLink.dataset.busy = '1';
  const original = forgotLink.textContent;
  forgotLink.textContent = 'Funcionalidade em breve ✨';
  setTimeout(() => {
    forgotLink.textContent = original;
    delete forgotLink.dataset.busy;
  }, 2500);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  hideError();

  const email = emailInput.value.trim();
  const emailLower = email.toLowerCase();
  const password = passwordInput.value;

  if (!isValidEmail(email) || password.length < 4) {
    showError('Email ou senha inválidos.');
    return;
  }

  let session;
  if (emailLower === ADMIN_EMAIL) {
    if (password !== ADMIN_PASSWORD) {
      showError('Email ou senha inválidos.');
      return;
    }
    session = { name: 'Administrador', email: emailLower, role: 'admin' };
  } else {
    const namePart = emailLower.split('@')[0].replace(/[._-]+/g, ' ');
    const name = namePart.charAt(0).toUpperCase() + namePart.slice(1);
    session = { name, email: emailLower, role: 'user' };
  }

  localStorage.setItem('ypora_session', JSON.stringify(session));
  window.location.href = session.role === 'admin' ? 'dashboard-admin.html' : 'index.html';
});

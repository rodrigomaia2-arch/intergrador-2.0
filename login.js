const ADMIN_EMAIL = 'admin@ypora.com';
const ADMIN_PASSWORD = 'admin123';

const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorBox = document.getElementById('loginError');
const badge = document.getElementById('accountBadge');
const forgotLink = document.getElementById('forgotLink');
const successBox = document.getElementById('loginSuccess');
const signupForm = document.getElementById('signupForm');
const authTitle = document.getElementById('authTitle');
const authSub = document.getElementById('authSub');

const USERS_KEY = 'ypora_users';

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function findUser(email) {
  return getUsers().find(u => u.email === email);
}

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

function showSuccess(message) {
  successBox.textContent = '✅ ' + message;
  successBox.classList.add('visible');
}

function hideSuccess() {
  successBox.classList.remove('visible');
}

function showMode(mode) {
  hideError();
  hideSuccess();
  const signup = mode === 'signup';
  form.hidden = signup;
  signupForm.hidden = !signup;
  authTitle.textContent = signup ? 'Criar conta' : 'Bem-vindo de volta';
  authSub.textContent = signup
    ? 'Cadastre-se para acompanhar a qualidade da água em Paraíso do Tocantins.'
    : 'Entre para acompanhar a qualidade da água em Paraíso do Tocantins.';
  (signup ? document.getElementById('signupName') : emailInput).focus();
}

document.getElementById('showSignup').addEventListener('click', (e) => {
  e.preventDefault();
  showMode('signup');
});

document.getElementById('showLogin').addEventListener('click', (e) => {
  e.preventDefault();
  showMode('login');
});

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

document.querySelectorAll('.toggle-password').forEach(btn => {
  btn.addEventListener('click', () => {
    const input = document.getElementById(btn.dataset.target);
    const showing = input.type === 'password';
    input.type = showing ? 'text' : 'password';
    btn.textContent = showing ? '🙈' : '👁️';
    btn.setAttribute('aria-label', showing ? 'Ocultar senha' : 'Mostrar senha');
  });
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
  hideSuccess();

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
    const user = findUser(emailLower);
    if (!user) {
      showError('Conta não encontrada. Crie uma conta para entrar.');
      return;
    }
    if (user.password !== password) {
      showError('Email ou senha inválidos.');
      return;
    }
    session = { name: user.name, email: user.email, role: 'user' };
  }

  localStorage.setItem('ypora_session', JSON.stringify(session));
  window.location.href = session.role === 'admin' ? 'dashboard-admin.html' : 'index.html';
});

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  hideError();
  hideSuccess();

  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim().toLowerCase();
  const password = document.getElementById('signupPassword').value;
  const confirm = document.getElementById('signupConfirm').value;

  if (name.length < 2) {
    showError('Informe seu nome.');
    return;
  }
  if (!isValidEmail(email)) {
    showError('Informe um email válido.');
    return;
  }
  if (email === ADMIN_EMAIL || findUser(email)) {
    showError('Já existe uma conta com este email.');
    return;
  }
  if (password.length < 6) {
    showError('A senha deve ter pelo menos 6 caracteres.');
    return;
  }
  if (password !== confirm) {
    showError('As senhas não coincidem.');
    return;
  }

  const users = getUsers();
  users.push({ name, email, password });
  saveUsers(users);

  signupForm.reset();
  showMode('login');
  emailInput.value = email;
  emailInput.dispatchEvent(new Event('input'));
  passwordInput.focus();
  showSuccess('Conta criada com sucesso! Agora é só entrar.');
});

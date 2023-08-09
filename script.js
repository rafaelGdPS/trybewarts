const btnLogin = document.getElementById('login');

const validation = () => {
  const inputEmail = document.getElementById('email');
  const inputPassword = document.getElementById('password');

  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

btnLogin.addEventListener('click', validation);

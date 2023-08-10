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

const btnSubmit = document.getElementById('submit-btn');
const checkboxSubmit = document.getElementById('agreement');

btnSubmit.disabled = true;

const checkAgree = () => {
  if (checkboxSubmit.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
};
checkboxSubmit.addEventListener('change', checkAgree);

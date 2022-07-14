import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('[name="email"]'),
  message: document.querySelector('[name="message"]'),
};

refs.form.addEventListener('input', throttle(onEmailFormStorage, 500));
refs.form.addEventListener('submit', onFormSubmit);

const textFormStorage = {};

populateForm();

function onEmailFormStorage(e) {
  textFormStorage.email = refs.email.value;
  textFormStorage.message = refs.message.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(textFormStorage));
}

function onFormSubmit(e) {
  e.preventDefault();
  if (refs.email.value === '' || refs.message.value === '') {
    return alert('Заповніть форму до кінця');
  } else {
    e.target.reset();
    localStorage.removeItem('feedback-form-state');
    console.log(textFormStorage);
  }
}

function populateForm() {
  const saveForm = localStorage.getItem('feedback-form-state');
  const parseForm = JSON.parse(saveForm);

  if (parseForm) {
    refs.email.value = parseForm.email;
    refs.message.value = parseForm.message;
  }
}

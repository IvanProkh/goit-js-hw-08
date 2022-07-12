import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('[name="email"]'),
    message: document.querySelector('[name="message"]'),
};

refs.email.addEventListener('input', throttle(onEmailFormStorage, 500))
refs.message.addEventListener('input', throttle(onTextFormStorage, 500))
refs.form.addEventListener('submit', onFormSubmit)

const textFormStorage = {
    email: '',
    massage: '',
};

populateForm()

function onEmailFormStorage(e) {
    const value = e.target.value;
    textFormStorage.email = value;
    
    localStorage.setItem("feedback-form-state", JSON.stringify(textFormStorage));
} 

function onTextFormStorage(e) {
    const value = e.target.value;
    textFormStorage.massage = value;
    
    localStorage.setItem("feedback-form-state", JSON.stringify(textFormStorage));
} 

function onFormSubmit(e) {
    e.preventDefault()
    e.target.reset()
    localStorage.removeItem("feedback-form-state")
    console.log(textFormStorage)
}


function populateForm() {
    const saveForm = localStorage.getItem("feedback-form-state")

    if (saveForm) {
        const parseForm = JSON.parse(saveForm)

        refs.email.value = parseForm.email
        refs.message.value = parseForm.massage
    }
}
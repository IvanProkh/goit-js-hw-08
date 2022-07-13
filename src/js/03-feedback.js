// 1й - зчитування при вводі і запис цього значення в локал сторедж.
// 2й - при загрузці сторінки зчитувати дані локал сторедж і записувати їх в інпути. 
// 3й при натисканні на кнопку(сабміту) очищати локал сторедж та поля вводу

// при зчитуванні даних використовуй value.Наприклад
// function storagePutHandler() {
//     const formData = { email: emailInput.value, message: messageInput.value, }
//     localStorage.setItem("feedback-form-state", JSON.stringify(formData));
// }

// import throttle from 'lodash.throttle';

// const refs = {
//     form: document.querySelector('.feedback-form'),
//     email: document.querySelector('[name="email"]'),
//     message: document.querySelector('[name="message"]'),
// };

// refs.email.addEventListener('input', throttle(onEmailFormStorage, 500))
// refs.message.addEventListener('input', throttle(onTextFormStorage, 500))
// refs.form.addEventListener('submit', onFormSubmit)

// const textFormStorage = {
//     email: '',
//     massage: '',
// };

// populateForm()

// // function storagePutHandler() {
// //     const formData = { email: emailInput.value, message: messageInput.value, }
// //     localStorage.setItem("feedback-form-state", JSON.stringify(formData));
// // }

// function onEmailFormStorage(e) {
//     const value = e.target.value;
//     textFormStorage.email = value;
    
//     localStorage.setItem("feedback-form-state", JSON.stringify(textFormStorage));
// } 

// function onTextFormStorage(e) {
//     const value = e.target.value;
//     textFormStorage.massage = value;
    
//     localStorage.setItem("feedback-form-state", JSON.stringify(textFormStorage));
// } 

// function onFormSubmit(e) {
//     e.preventDefault()
//     e.target.reset()
//     localStorage.removeItem("feedback-form-state")
//     console.log(textFormStorage)
// }

// function populateForm() {
//     const saveForm = localStorage.getItem("feedback-form-state")

//     if (saveForm) {
//         const parseForm = JSON.parse(saveForm)

//         refs.email.value = parseForm.email
//         refs.message.value = parseForm.massage
//     }
// }

import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('[name="email"]'),
    message: document.querySelector('[name="message"]'),
};

refs.form.addEventListener('input', throttle(onEmailFormStorage, 500))
refs.form.addEventListener('submit', onFormSubmit)

const textFormStorage = {};

populateForm()

function onEmailFormStorage(e) {
    textFormStorage.email = refs.email.value;
    textFormStorage.message = refs.message.value;

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
    const parseForm = JSON.parse(saveForm)

    if (parseForm) {
        refs.email.value = parseForm.email
        refs.message.value = parseForm.message
        
    }
}


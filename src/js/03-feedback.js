import throttle from 'lodash.throttle';

const formEl = document.querySelector(".feedback-form");
const inputEl = document.querySelector('input');
const textarea = document.querySelector('textarea');

const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = {};

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));

populateFormInput();


function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
};


function onFormSubmit(evt) {
    evt.preventDefault();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    console.log(formData);
    evt.currentTarget.reset();
}


function populateFormInput(evt) {
  const saveMessage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (saveMessage) {
    inputEl.value = saveMessage.email;
    textarea.value = saveMessage.message;
  }
};


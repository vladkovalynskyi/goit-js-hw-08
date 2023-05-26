const throttle = require('lodash.throttle');

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

const feedbackFormStateKey = 'feedback-form-state';

feedbackForm.addEventListener('input', throttle(saveFormState, 500));

feedbackForm.addEventListener('submit', handleSubmit);

function saveFormState() {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem(feedbackFormStateKey, JSON.stringify(formState));
}

function handleSubmit(evt) {
  evt.preventDefault();

  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log(formState);

  localStorage.removeItem(feedbackFormStateKey);

  feedbackForm.reset();
}

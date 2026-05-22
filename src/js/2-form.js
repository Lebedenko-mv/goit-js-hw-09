const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
form.addEventListener('input', saveData);

function saveData(event) {
  const input = event.target;
  if (input.name === 'email') {
    formData['email'] = input.value;
  } else if (input.name === 'message') {
    formData['message'] = input.value;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.clear();
  formData.email = '';
  formData.message = '';
  form.reset();
}

if (localStorage.getItem('feedback-form-state')) {
  const input = form.querySelector('input');
  const textArea = form.querySelector('textarea');
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  formData.email = savedData.email;
  formData.message = savedData.message;
  input.value = savedData.email;
  textArea.value = savedData.message;
}
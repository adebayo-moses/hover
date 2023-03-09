const input = document.querySelector('input[email="email"]');

input.addEventListener('invalid', function (event) {
  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity('Please tell us how we should address you.');
  }
})

input.addEventListener('change', function (event) {
  event.target.setCustomValidity('');
})
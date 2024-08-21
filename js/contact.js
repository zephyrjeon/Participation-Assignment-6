const el1 = document.getElementById('contact_name');
const el2 = document.getElementById('contact_email');
const el3 = document.getElementById('contact_phone');
const el4 = document.getElementById('contact_message');
const el5 = document.getElementById('submit');

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const validatePhoneNumber = (number) => {
  return number.match(/[0-9]/);
};

el5.addEventListener('submit', (e) => {
  e.preventDefault();
  const el1Value = el1.value;
  const el2Value = el2.value;
  const el3Value = el3.value;
  const el4Value = el4.value;

  if (el1Value.length < 5) {
    alert('Name must be minimum 5 characters.');
  }

  if (!validateEmail(el2Value)) {
    alert('Must be a valid email address.');
  }

  if (!validatePhoneNumber(el3Value)) {
    alert('Phone number must contain only numbers.');
  }

  if (el4Value.length < 5) {
    alert('Message must be minimum 5 characters.');
  }
});

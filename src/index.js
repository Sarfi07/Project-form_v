import { getCode, getName, getNames } from 'country-list';
import './styles.css';
import { sub } from 'date-fns';


function giveCountryList() {
  const countries = getNames();
  const countryDiv = document.getElementById('countryDiv');
  const datalist = document.createElement('datalist');

  datalist.setAttribute('id', 'countryList');

  for (const country of countries) {
    const option = document.createElement('option');
    option.value = country;
    datalist.appendChild(option);
  }
  countryDiv.appendChild(datalist);
}

// email validation;
function validateEmail() {
    const email = document.getElementById('email');
    email.addEventListener('change', () => {
        if (email.validity.valid) {
            email.style.border = '2px solid green';
        } else {
            email.style.border = '2px solid red';

        }

    })
}

// country validation
function validateCountryName() {
    const country = document.getElementById('country');

    country.addEventListener('blur', () => {
        if (country.validity.valid) {
            if (getCode(country.value)) {
                country.style.border = '2px solid green';
                console.log(getCode(country.textContent))
                return;
            }
            else {
                country.style.border = '2px solid red';
                
            }
        } else {
            if (getCode(country.value)) {
                country.style.border = '2px solid green';
                return;
            } else {
                country.style.border = '2px solid purple';
                country.setCustomValidity('Country name not in our list.')
            }
        }
    })
}


// zip Code validation
function validateZipCode() {
    const zipCode = document.getElementById('zipCode');

    zipCode.addEventListener('blur', () => {
        if (zipCode.validity.valid) {
            zipCode.style.border = '2px solid green';
        } else {
            zipCode.style.border = '2px solid red';
        }
    })
}

// password validation
function validatePassword() {
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');


    password2.addEventListener('input', () => {
        console.log(password2.value);
        if (password1.value === password2.value && password1 !== '' && password2 !== '') {
            password1.style.border = '2px solid green';
            password2.style.border = '2px solid green';
        }
        else if (password1.value !== password2.value && password1 !== '' && password2 !== '') {
            password1.style.border = '2px solid red';
            console.log('f2')
            
            password2.style.border = '2px solid red';
        }
    })
}

function submitForm() {
    const form = document.getElementById('registerForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let confirmation = confirm("Would you like to submit this form!");

        if (confirmation) {
            const div = document.createElement('div');
            const formSec = document.getElementById('formSec');
            const content = document.getElementById('content');
            const message = document.createElement('p');

            message.setAttribute('id', 'submissonMessage');
            message.style.textAlign = 'center';
            message.style.fontSize = '2rem';

            formSec.style.display = 'none';
            div.setAttribute('id', 'thumbsUp');
            div.textContent = '👍'
            message.textContent = 'Form submitted successfully!'

            content.appendChild(div);
            content.appendChild(message)
        }
    })
}

giveCountryList();
validateEmail();
validateCountryName();
validateZipCode();
validatePassword();
submitForm();

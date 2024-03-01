const pricing = {
  "annually": {
    "basic": 199.99,
    "professional": 249.99,
    "master": 399.99
  },
  "monthly": {
    "basic": 19.99,
    "professional": 24.99,
    "master": 39.99
  }
}

const switchInput = document.querySelector('.switch').querySelector('input');

const changePrice = isChecked => {
  let pricingType = isChecked ? "monthly" : "annually";
  Object.keys(pricing[pricingType]).forEach((tier, i) => document.querySelectorAll('.pricing-box')[i].querySelector('.price').innerText = pricing[pricingType][tier]);
}

switchInput.checked = true;
changePrice(switchInput.checked);

switchInput.addEventListener('change', () => changePrice(switchInput.checked));
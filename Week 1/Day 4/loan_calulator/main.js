// fetch all the elements first

let loanAmount = document.getElementById('loan-amount');
let interestRate = document.getElementById('interest-rate');
let yearsToRepay = document.getElementById('years-to-repay');
let output = document.getElementById('output');

function calculateLoan(event) {
  event.preventDefault();

  const loan = loanAmount.value;
  const interest = interestRate.value;
  const years = yearsToRepay.value;

  const total = loan * Math.pow(1 + interest / 100, years);

  loanAmount.value = '';
  interestRate.value = '';
  yearsToRepay.value = '';

  output.innerHTML = `$ ${total}`;
}
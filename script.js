const bill = document.querySelector('.bill-value'); 
const people = document.querySelector('.input-value')
const buttons = document.querySelectorAll('button');
const tipValue = document.querySelector('.tipTotalValue')
const finalValue = document.querySelector('.totalValue')
console.log(finalValue);

function tipCalculator(index) {
  buttons.forEach((item) => {
    item.classList.remove('active');
  })
  buttons[index].classList.add('active');
  let tipTotal = parseFloat(bill.value) * parseFloat(buttons[index].value) / parseFloat(people.value);
  let totalValue = (parseFloat(tipTotal) + parseFloat(bill.value))
  tipValue.innerHTML = 'U$ ' + tipTotal;
  finalValue.innerHTML = 'U$ ' + totalValue;
}
  buttons.forEach((item, index) => {
    item.addEventListener('click', () => {
      tipCalculator(index);
    })
  })
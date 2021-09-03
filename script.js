const bill = document.querySelector('.bill-value'); 
const people = document.querySelector('.input-value')
const buttons = document.querySelectorAll('button');
const tipValue = document.querySelector('.tipTotalValue')
const finalValue = document.querySelector('.totalValue')
const inputValue = document.querySelector('.percentage-manual')

function disableButton() {
  
}

buttons.forEach((item, index) => {
  item.addEventListener('click', () => {
    activeButton(index);
  })
})

function activeButton(index) {
//Ativando e desativando botoões
  buttons.forEach((item) => {
    item.classList.remove('active');
  })
  buttons[index].classList.add('active');
}


function tipCalculator() {
  buttons.forEach((item) => {
    if (item.className === 'active') {
      if (item.value === '0') {

      }
      // var buttonActive = item.value;
        let tipTotal = parseFloat(bill.value) * (parseFloat(inputValue.value / 100)) + parseFloat(item.value / 100)
        / parseFloat(people.value);
        let totalValue = (parseFloat(bill.value) / parseFloat(people.value)) + parseFloat(tipTotal);
        tipValue.innerHTML = '$' + tipTotal.toFixed(2);
        finalValue.innerHTML = '$' + totalValue.toFixed(2);
    }
  })
}

const bill = document.querySelector('.dollar-input'); 
const people = document.querySelector('.person-input')
const buttons = document.querySelectorAll('button');
buttons.forEach((item) => {
  item.classList.remove('active');
  item.addEventListener('click', function() {
    item.classList.toggle('active');
  })
})
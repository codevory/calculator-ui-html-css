const display = document.querySelector('.display')
const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
button.addEventListener('click', () => {
  if(button.textContent === "C") {
    display.value = '';
  }
  else if(button.textContent === "1/X") {
    display.value = display.value / 100;
  }
    else if(button.textContent === "←"){
      display.value = display.value.slice(0,-1)
    }
  else if(button.textContent === "="){
    try{
      display.value = eval(display.value)
    }
    catch(error){
      display.value = "Error occured"
    }
    display.value += button.textContent
  }

})
})

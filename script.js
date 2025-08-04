const display = document.querySelector('.display')
const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
button.addEventListener('click', () => {
  const buttonText = button.innerText
  if(buttonText === "C") {
    display.value = '';
  }
  else if(buttonText === "1/X") {
    display.value = display.value / 100;
  }
    else if(buttonText === "←"){
      display.value = display.value.slice(0,-1)
    }
  else if(buttonText === "="){
    try{
      display.value = eval(display.value)
    }
    catch(error){
      display.value = "Error occured"
    }
    display.value += buttonText
  }

})
})

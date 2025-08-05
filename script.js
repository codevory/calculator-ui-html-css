const display = document.getElementById('display')
const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
button.addEventListener('click', () => {
  const buttonText = button.innerText
  if(buttonText === "C") {
    display.textContent = '';
  }
  else if(buttonText === "x²") {
    display.textContent *= display.textContent;
  }
  else if(buttonText === "x"){
    display.textContent += "x" === "x" ? "*" : "x"
  }
    else if(buttonText === "←"){
      display.textContent = display.textContent.slice(0,-1)
    }
      else if(buttonText === "%"){
      display.textContent = parseFloat(display.textContent) / 100
     }
  else if(buttonText === "="){
    try{
      display.textContent = eval(display.textContent)
    }
    catch(error){
      display.textContent = "Error occured"
    }
  }
    else{
    display.textContent += buttonText
  }

})
})

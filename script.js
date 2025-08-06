const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.innerText;

    if (buttonText === "C") {
      display.textContent = '';
    } else if (buttonText === "x²") {
      // Use a temporary variable to hold the number to be squared
      let currentNumber = parseFloat(display.textContent);
      if (!isNaN(currentNumber)) {
        display.textContent = currentNumber * currentNumber;
      }
    } else if (buttonText === "x") {
      display.textContent += "*";
    } else if (buttonText === "÷") {
      display.textContent += "/";
    } else if (buttonText === "←") {
      display.textContent = display.textContent.slice(0, -1);
    } else if (buttonText === "%") {
      let currentNumber = parseFloat(display.textContent);
      if (!isNaN(currentNumber)) {
        display.textContent = currentNumber / 100;
      }
    } else if (buttonText === "=") {
      try {
        // Step 1: Evaluate the expression to get the raw result.
        let result = eval(display.textContent);

        // Step 2: Handle the rounding here, right before displaying.
        if (result.toString().length > 12) { // A simple check for length
          // Round to a specific number of decimal places for display.
          result = Math.round(result * 1000000000) / 1000000000; // Rounding to 9 decimal places
        }

        // Handle division by zero.
        if (result === Infinity || result === -Infinity) {
          display.textContent = "indivisible";
        } else {
          // Step 3: Display the final, rounded result.
          display.textContent = result;
        }

      } catch (error) {
        display.textContent = "Error"; // "Error" is more user-friendly than "Error occured"
      }
    } else {
      // Append other button texts (numbers, '.', '+', '-')
      display.textContent += buttonText;
    }
  });
});
// New area

// document.addEventListener("DOMContentLoaded", () => {
//   const body = document.body;
//   const toggleContainer = document.querySelector(".toggleContainer");
//   const slider = document.querySelector(".slider");

//   const savedTheme = localStorage.getItem("theme");
//   if (savedTheme === "dark-mode") {
//     body.classList.add("dark-mode");
//     slider.innerText = "🌜";
//   } else {
//     body.classList.remove("dark-mode");
//     slider.innerText = "🌞";
//   }

//   toggleContainer.addEventListener("click", () => {
//     body.classList.toggle("dark-mode");
//     if (body.classList.contains("dark-mode")) {
//       slider.innerText = "🌜";
//       localStorage.setItem("theme", "dark-mode");
//     } else {
//       slider.innerText = "🌞";
//       localStorage.setItem("theme", "light-mode");
//     }
//   });
// });

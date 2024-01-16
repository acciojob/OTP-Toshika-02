//your JS code here. If required.
 function handleInput(input) {
      // On typing a number, focus on the next input
      if (input.value && input.nextElementSibling) {
        input.nextElementSibling.focus();
      }
    }

    function handleKeyDown(input) {
      // On backspace key press, delete the number and focus on the previous input
      if (event.key === 'Backspace' && input.value === '' && input.previousElementSibling) {
        input.previousElementSibling.focus();
      }
    }

function bruteForce(event) {
    if (event.key === "a" || event.keyCode === 65) {
      for (let i = 0; i <= 9999; i++) {
        // Convert the number to a string and pad with leading zeros if necessary
        let number = i.toString().padStart(4, '0');
        let charIndex = 0
        if (charIndex < textToType.length) {
          // Create a KeyboardEvent to simulate a keypress
          let keyEvent = new KeyboardEvent('keydown', { key: number[charIndex] });
          targetElement.dispatchEvent(keyEvent); // Dispatch the event on the target element
          // Set the text of the element (optional for visual feedback)
          targetElement.value += textToType[charIndex];
          charIndex++;
        }
      }
    }
  }

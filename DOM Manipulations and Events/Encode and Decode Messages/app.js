function encodeAndDecodeMessages() {
  const textareas = document.querySelectorAll("textarea");
  const buttons = document.querySelectorAll("button");
  buttons[0].addEventListener("click", encode);
  buttons[1].addEventListener("click", decode);

  function encode() {
    let encodedMessage = "";
    const input = textareas[0].value;
    for (const letter of input) {
      encodedMessage += String.fromCharCode(letter.charCodeAt(0) + 1);
    }
    textareas[1].value = encodedMessage;
    textareas[0].value = "";
  }

  function decode() {
    let decodedMessage = "";
    const input = textareas[1].value;
    for (const letter of input) {
      decodedMessage += String.fromCharCode(letter.charCodeAt(0) - 1);
    }
    textareas[1].value = decodedMessage;
  }
}

function copyToClipboard() {
    // Get the text from the input field
    var copyText = document.getElementById("textToCopy");
    // Use the Clipboard API to copy text to the clipboard
    navigator.clipboard.writeText(copyText.value)
      .then(() => {
        console.log('Text successfully copied to clipboard');
      })
      .catch(err => {
        console.error('Unable to copy text to clipboard', err);
      });
}

function updateTextCopyFromBoard(in_state){
  document.getElementById("textToCopy").value = "";
  for (let i = 0; i < in_state.length; i++) {
      for (let j = 0; j < in_state[i].length; j++) {
        //the instate does not have a .emoji object within it
          document.getElementById("textToCopy").value += in_state[i][j].emoji;
      }
      document.getElementById("textToCopy").value += "\n";
  }
}
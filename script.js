const inputEl = document.getElementById('ug-input');
const outputEl = document.getElementById('onsong-output');

const inputHandler = function () {
  let input = inputEl.value;

  input = input.replaceAll('\n\n', '\n');

  // UG usually has section names like [Chorus]
  input = input.replaceAll('[', '');
  input = input.replaceAll(']', ':');

  outputEl.value = input;
};

inputEl.addEventListener('input', inputHandler);


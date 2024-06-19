const inputEl = document.getElementById('ug-input');
const outputEl = document.getElementById('onsong-output');

const inputHandler = function () {
  const input = inputEl.value;
  outputEl.value = input
    .split('\n')
    // Replace tags like [Chorus] with Chorus:
    .map((line) => line.trimEnd().replace(/\[(.*?)\]/g, '\n$1:'))
    .filter((line) => line.length != 0)
    .join('\n');
};

inputEl.addEventListener('input', inputHandler);


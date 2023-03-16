const innerText = document.querySelector('#latin-text');
const outerText = document.querySelector('.latin-result>pre>code');
const template = '0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz!@#$%^&*()_+-={}[]?.,;:\'\"\\/ ';

document.querySelector('button').onclick = () => {
  let text = innerText.value.trim();
  if (text === '') return;
  let out = '';
  for (let i = 0; i < text.length; i++) {
    if (text[ i ] === '\n') {
      out += '<br>';
    } else if (template.indexOf(text[ i ]) === -1) {
      out += '<mark>' + text[ i ] + '</mark>';
    } else {
      out +=  text[ i ];
    }
  }
  outerText.innerHTML = out;
}
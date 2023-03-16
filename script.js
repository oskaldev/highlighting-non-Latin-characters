const innerText = document.querySelector('#latin-text');
const outerText = document.querySelector('.latin-result>pre>code');


// const template = '0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz!@#$%^&*()_+-={}[]?.,;:\'\"\\/ ';
// document.querySelector('button').onclick = () => {
//   let text = innerText.value.trim();
//   if (text === '') return;
//   let out = '';
//   for (let i = 0; i < text.length; i++) {
//     if (text[ i ] === '>') {
//       out += '&#x3E';
//     }
//     else if (text[ i ] === '<') {
//       out += '&#x3C';
//     }
//     else if (text[ i ] === '\n') {
//       out += '<br>';
//     }
//     else if (template.indexOf(text[ i ]) === -1) {
//       out += '<mark>' + text[ i ] + '</mark>';
//     }
//     else {
//       out += text[ i ];
//     }
//   }
//   console.log(out);
//   outerText.innerHTML = out;
// }

document.querySelector('button').onclick = () => {

  let text = innerText.value.trim();
  if (text === '') return;
  let result;
  const regexp = /[^\w\s'",\\.:;?!@#$%^&*+-={}\[\]()<>]/gi;

  result = text.replace(/\>/g, str => '&#x3E');
  result = result.replace(/\</g, str => '&#x3C');
  result = result.replace(regexp, symbol => '<mark>' + symbol + '</mark>');


  console.log(result);
  outerText.innerHTML = result;
}



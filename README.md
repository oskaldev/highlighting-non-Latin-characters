# highlighting-non-Latin-character
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/oskaldev/random-colors#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
</p>

**highlighting-non-Latin-characters** - страница,которая подсвечивает не латинские символы
> сделал страницу, которая подсвечивает не латинские символы при нажатии на кнопку

## Description
Можно использовать в качестве поиска ошибок ,поиска не латинских букв или неопознанных символов.
Ниже код, которые не помечает те символы,которые указаны,так же их можно пополнять
```js
  const regexp = /[^\w\s'",\\.:;?!@#$%^&*+-={}\[\]()<>]/gi;
  result = text.replace(/\>/g, str => '&#x3E');
  result = result.replace(/\</g, str => '&#x3C');
  result = result.replace(regexp, symbol => '<mark>' + symbol + '</mark>');
```

## Install
from Github
```Github
git clone https://github.com/oskaldev/highlighting-non-Latin-characters.git
```
## Usage
Откроется страница в которой будет пустое поле и кнопка.
Вставив свой текст и нажав на кнопку выведет обратно весь текст,только уже в нём будет помечены жёлтым цветом все буквы не латинского алфавита. 

<img src="https://user-images.githubusercontent.com/67880047/225929336-902bdd46-f520-4a31-b4ff-2d636551eaa7.png" width=50% height=50%>

## Author

👤 **oskaldev**

* Github: [@oskaldev](https://github.com/oskaldev)
* LinkedIn: [@oskaldev](https://linkedin.com/in/oskaldev)
* Telegram: [@oskaldev](https://t.me/oskaldev)


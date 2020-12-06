// Игра "отгадай слово"

var words = ["макака", "носорог", "скорпион", "балабол", "колобок", "магнитофон", "бронетранспортер", "автомобиль"];
var word = pickWord(words); // выбираем случайное слово
var seekWord = setupSeekWord(word); // делаем масив с пустыми символами

console.log(word);
console.log(seekWord);
console.log(seekWord.join(""));

var remainingLetters = word.length; // сколько букв осталось угадать - длинна выбраного слова
var trying = 20; // количество попыток

while (remainingLetters > 0 && trying > 0) {
  showResult(seekWord, remainingLetters, trying); //показываем промежуточный результат
  var letter = getletter(); // вводим букву
  trying--; // уменьшаем попытку на 1

  if (letter === null) {
    break; //выходим если "отмена"
  } else if (letter.length !== 1) {
    //проверяем правильно ли ввели букву
    alert("Нужно ввести одну букву");
  } else {
    updateGameState(); // перебираем слово и находим в нем введенную букву
    // записываем ее в наш пустой масив seekWord
  }
}

showResultGame(); // выводим итоговый результат

//
//
// выбираем случайное слово
function pickWord(w) {
  return w[Math.floor(Math.random() * w.length)];
}

// делаем масив с пустыми символами
function setupSeekWord(w) {
  var seekWord = [];
  for (var i = 0; i < w.length; i++) {
    seekWord[i] = "_";
  }
  return seekWord;
}

// выводим промежуточный результат в сообщ
function showResult(result, num, tr) {
  return alert(
    "вот что мы имеем: " + result.join(" ") + "  осталось угадать " + num + " букв. У вас осталось " + tr + " попыток!"
  );
}

// вводим букву
function getletter() {
  return prompt("введите букву. (Отмена - выход из игры)"); // вводим букву
}

// перебираем слово и находим в нем введенную букву
function updateGameState() {
  letter = letter.toLowerCase(); // переводим введенный символ в нижний регистр
  // перебираем слово по буквам и проверяем если совпадает введенная буква ставим
  // ее в пустой масив
  for (var j = 0; j < word.length; j++) {
    if (letter === seekWord[j]) {
      // ecли введена уже отгаданая буква - ничего невыполняется
    } else if (letter === word[j]) {
      seekWord[j] = letter; //подставляем букву в массив
      remainingLetters--;
    }
  }
  return seekWord; // выводим масив с введенными и правильными буквами
}

// выводим итоговый результат
function showResultGame() {
  if (seekWord.join("") === word) {
    alert("Поздравляем с победой! Вашу слово: " + seekWord.join(""));
  } else {
    alert("Жаль. В следующий раз все получится..");
  }
}

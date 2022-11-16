//Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  
  console.log( randomInteger(0, 100) );
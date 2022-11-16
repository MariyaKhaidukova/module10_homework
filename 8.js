//Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде 
//«Ключ — Х, значение — Y». Используйте шаблонные строки.



let chairs = new Map([

    ["chair1", "big"],
  
    ["chair2", "middle"],
  
    ["chair3", "small"]
  
  ]);
  
  for (let [key, value] of chairs) {
  
    console.log(`Ключ - ${key}, значение - ${value}`)
  
  }
   
//Дан произвольный массив. Необходимо вывести количество элементов массива, 
//затем перебрать его и вывести в консоль каждый элемент массива.

let arr = ["Яблоко", "Апельсин", "Груша"];
let countElementsArr = arr.length;
   console.log(arr.length);

arr.forEach(function(item, i, arr) {
  console.log( i + ": " + item);
});
//Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

let str = 'Hello';
let i = str.length;
let o = "";
while (i > 0) {
    o += str.substring(i - 1, i);
    i--;
}
console.log(o);

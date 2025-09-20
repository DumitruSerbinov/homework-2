// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

//let num = 1; // true
//let num = 0; // нiчого
//let num = -3;// false

/*if (num > 0) {
  console.log(true);
} else if (num < 0) {
  console.log(false);
}*/


// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

//let str = 'test';   // true
//let str = "qwerty"; // нiчого
//let str = true;     // нiчого

/*if (str === "test") {
  console.log(true);
}*/

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

//let num = 1;  // 6
//let num = 10; // 10
//let num = 13; // 8

/*if (num > 10) {
  num = num - 5;
} else if (num < 10) {
  num = num + 5;
}

console.log(num);*/

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

/*const value = prompt("Введіть число від 1 до 12");
let cost;

switch (value) {
  case "1":
    cost = "Січень";
    alert(`${cost}`);
    break;
  case "2":
    cost = "Лютий";
    alert(`${cost}`);
    break;
  case "3":
    cost = "Березень";
    alert(`${cost}`);
    break;
  case "4":
    cost = "Квітень";
    alert(`${cost}`);
    break;
    case "5":
    cost = "Травень";
    alert(`${cost}`);
    break;
  case "6":
    cost = "Червень";
    alert(`${cost}`);
    break;
  case "7":
    cost = "Липень";
    alert(`${cost}`);
    break;
  case "8":
    cost = "Серпень";
    alert(`${cost}`);
    break;
    case "9":
    cost = "Вересень";
    alert(`${cost}`);
    break;
  case "10":
    cost = "Жовтень";
    alert(`${cost}`);
    break;
  case "11":
    cost = "Листопад";
    alert(`${cost}`);
    break;
  case "12":
    cost = "Грудень";
    alert(`${cost}`);
    break;

  default:
    alert(`"Помилка: число має бути від 1 до 12"`);
}*/


//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

/*let number = parseInt(prompt("Введіть тризначне число:"), 10);

    if (number >= 100 && number <= 999) {
      let a = Math.floor(number / 100);        
      let b = Math.floor((number % 100) / 10); 
      let c = number % 10;                     

      alert("Сумма = " + (a + b + c));
    } else {
      alert("Помилка: число має бути тризначне.");
    }*/




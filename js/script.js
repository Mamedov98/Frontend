var Name = prompt("Как вас зовут?", "Aнар");

alert("Привет  " + Name);

var BirthYear = prompt("Каго года рождения вы?");


const Currentyear = new Date().getFullYear();


var Age = Currentyear - BirthYear;

alert(Age);

//////////////////////////////////////////////////////////////////////////

var SquareLenght = prompt("Введите длину стороны квадрата");


 var P = SquareLenght * 4;

alert( "Периметр квадрата = " + P);
//////////////////////////////////////////////////////////////////////////

var Radius = prompt("Введите радиус окружности: ");

Area = Math.PI * Math.pow(Radius ,2);

alert( "площадь окружности = " + Area);
//////////////////////////////////////////////////////////////////////////

var Km = prompt("Расстояние между городами : ");
var Time = prompt( "За сколько часов хотите добраться ? ");

Speed = Km / Time;

alert( "Нужная вам скорость " + Speed + " КМ/Ч "   );


//////////////////////////////////////////////////////////////////////////
const ExchangeRate = 0.85;


var Dollars = prompt("Введите сумму в долларах:");


var Euros = Dollars * ExchangeRate;


alert(Dollars + " долларов равно " + Euros + " евро.");

//////////////////////////////////////////////////////////////////////////

var FlashDriveSize = prompt("Укажите объем флешки в ГБ:");

// Преобразование объема флешки в мегабайты
var FlashDriveSizeMB = FlashDriveSize * 1024;

// Вычисление количества файлов размером 820 МБ
var FileCount = Math.floor(FlashDriveSizeMB / 820);

// Вывод результата
alert("На флешку объемом " + FlashDriveSize + " ГБ поместится " + FileCount + " файл(ов) размером 820 МБ.");


//////////////////////////////////////////////////////////////////////////

var Money = prompt( "Количество денег в кошельке  " );

var Price = prompt( " Цена шоколадки ");


var ShokolateCount = Math.floor(Money/Price);

var Change = Money % Price;


alert("Вы можете купить " + ShokolateCount + " шоколадок и у вас останется " + Change + " AZN сдачи.");
/////////////////////////////////////////////////////////////////////////////

var Number = prompt("Введите трехзначное число:");

// Получение цифр числа
var digit1 = Math.floor(Number / 100);
var digit2 = Math.floor((Number % 100) / 10);
var digit3 = Number % 10;

// Формирование числа задом наперед
var ReversedNumber = digit3 * 100 + digit2 * 10 + digit1;


alert("Число задом наперед: " + ReversedNumber);




//////////////////////////////////////////////////////////////////
var number = prompt("Введите целое число:");


var isEven = (number % 2 === 0);


alert("Число " + number + " является " + (isEven ? "четным" : "нечетным") );
console.log("abc")
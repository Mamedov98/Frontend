function addnumber(a,b)
{
    var a = parseInt(prompt("Введите первое число:"));


    var b = parseInt(prompt("Введите второе число:"));

    if(a < b )
   {
       return -1;
   }
   if (a > b)
   {
       return 1
   }
   else {
       return 0
   }
}




var result = addnumber();
prompt(result);

/////////////////////////////////

function factorial(a)
{
    var result = 1;

    for (var i = 2;i <=a;i++)
    {
        result *=i;
    }
    return result;
}

var number = parseInt(prompt("Введите число для вычисления его факториала:"));
var result = factorial(number);


prompt("Факториал числа " + number + " равен " + result);

///////////////////////////////////////////////////////////////////////

function Threedigit(a, b, c) {
    var combinedNumber = parseInt("" + a + b + c);
    return combinedNumber;
}

var digit1 = parseInt(prompt("Введите первую цифру:"));
var digit2 = parseInt(prompt("Введите вторую цифру:"));
var digit3 = parseInt(prompt("Введите третью цифру:"));

var combinedResult = Threedigit(digit1, digit2, digit3);
prompt("Результат: " + combinedResult);


/////////////////////////////////////////////////////////

function Rectangle(lenght,width)
{
    if  (width === undefined)
    {
        return lenght * lenght;
    }
    else
    {
        return width * lenght;
    }
}

var lenght = parseFloat(prompt("Введите длину прямогольника  :"));
var width = parseFloat(prompt("Введите ширину прямоугольника(для квадрата оставьте пустым)  :"));

var area = Rectangle(lenght,width);
prompt("площадь прямоугольника равна: " + area);

////////////////////////////////////////////////////////////////////

function PerfectNumber(number) {
    var sum = 0;

    for (var i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    return sum === number;
}

var number = parseInt(prompt("Введите число для проверки :"));

if (PerfectNumber(number)) {
    prompt(number + " - совершенное число");
} else {
    prompt(number + " - не является совершенным числом");
}

/////////////////////////////////////////////////////////////////////

function findPerfectNumbers(min, max) {
    var perfectNumbers = [];

    for (var number = min; number <= max; number++) {
        if (PerfectNumber(number)) {
            perfectNumbers.push(number);
        }
    }

    return perfectNumbers;
}

var min = parseInt(prompt("Введите минимальное значение диапазона:"));
var max = parseInt(prompt("Введите максимальное значение диапазона:"));

var perfectNumbers = findPerfectNumbers(min, max);

if (perfectNumbers.length === 0) {
    prompt("В указанном диапазоне нет совершенных чисел.");
} else {
    prompt("Совершенные числа в указанном диапазоне: " + perfectNumbers.join(", "));
}

/////////////////////////////////////////////////////////////////////////////


function FormatTime (hours,minutes,seconds){
    if (minutes === undefined){
        minutes == "00";
    }
    if (seconds === undefined){
        seconds == "00";
    }
    return hours + ":" + minutes + ":" + seconds;
}

var hours = parseInt(prompt("Введите часы : "));
var minutes = parseInt(prompt("Введите минуты(не обязательно) : "));
var seconds = parseInt(prompt("Введите секунды(не обязательно) : "));

var Timeform = FormatTime(hours,minutes,seconds);
prompt("Время  " + Timeform);

//////////////////////////////////////////////////////////////////////////////

function ConvertToSeconds(hours, minutes, seconds) {
    var totalSeconds = 0;

    totalSeconds += hours * 3600;
    totalSeconds += minutes * 60;
    totalSeconds += seconds;

    return totalSeconds;
}

var hours = parseInt(prompt("Введите часы:"));
var minutes = parseInt(prompt("Введите минуты:"));
var seconds = parseInt(prompt("Введите секунды:"));

var secondsTotal = ConvertToSeconds(hours, minutes, seconds);
prompt("Время в секундах: " + secondsTotal);
//////////////////////////////////////////////////////////////////////////////////

function ConvertToTime(seconds) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    var remainingSeconds = seconds % 60;

    var formattedTime = addZeroPadding(hours) + ":" + addZeroPadding(minutes) + ":" + addZeroPadding(remainingSeconds);
    return formattedTime;
}

function addZeroPadding(value) {
    return value < 10 ? "0" + value : value;
}

var seconds = parseInt(prompt("Введите количество секунд:"));

var timeString = ConvertToTime(seconds);
prompt("Время: " + timeString);

/////////////////////////////////////////////////////////////////////////////////////
function getTimeDifference(hours1, minutes1, seconds1, hours2, minutes2, seconds2) {
    var secondsTotal1 = convertToSeconds(hours1, minutes1, seconds1);
    var secondsTotal2 = convertToSeconds(hours2, minutes2, seconds2);

    var differenceSeconds = Math.abs(secondsTotal1 - secondsTotal2);

    var timeString = convertToTime(differenceSeconds);
    return timeString;
}

function convertToSeconds(hours, minutes, seconds) {
    var totalSeconds = 0;

    totalSeconds += hours * 3600;
    totalSeconds += minutes * 60;
    totalSeconds += seconds;

    return totalSeconds;
}

function convertToTime(seconds) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    var remainingSeconds = seconds % 60;

    var formattedTime = addZeroPadding(hours) + ":" + addZeroPadding(minutes) + ":" + addZeroPadding(remainingSeconds);
    return formattedTime;
}

function addZeroPadding(value) {
    return value < 10 ? "0" + value : value;
}

var hours1 = parseInt(prompt("Введите часы первой даты:"));
var minutes1 = parseInt(prompt("Введите минуты первой даты:"));
var seconds1 = parseInt(prompt("Введите секунды первой даты:"));

var hours2 = parseInt(prompt("Введите часы второй даты:"));
var minutes2 = parseInt(prompt("Введите минуты второй даты:"));
var seconds2 = parseInt(prompt("Введите секунды второй даты:"));

var differenceTime = getTimeDifference(hours1, minutes1, seconds1, hours2, minutes2, seconds2);
prompt("Разница между датами: " + differenceTime);
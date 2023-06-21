var car =
{
    name : "bmw",
        model:  "530",
    year : 2015,
    averagespeed : 100,


    printinfo: function (){
        alert("Name : " + this.name);
        alert("Model : " + this.model);
        alert("Average Speed : " + this.averagespeed);

    },
    calculartrveltime: function (distance){
        var hours = distance/this.averagespeed;
        var breakamount = Math.floor(hours/4);
        var totaltime = hours + breakamount;

        alert("Total time of Travel  : " + totaltime + " hours" );

    }

};

car.printinfo();
car.calculartrveltime(100);
/////////////////////////////////////////////////////////////////////////////////////

var fraction = {
    numerator: 0,
    denominator: 1,

    setFraction: function (numerator,denominator){
        this.numerator = numerator;
            this.denominator = denominator;
    },
    add: function  (fraction2 ){
        var resultNumerator = this.numerator * fraction2.denominator + fraction2.numerator * this.denominator;
        var resultDenominator = this.denominator * fraction2.denominator;
        return createFraction(resultNumerator, resultDenominator);
    },
    subtract: function  (fraction2 ){
        var resultNumerator = this.numerator * fraction2.denominator - fraction2.numerator * this.denominator;
        var resultDenominator = this.denominator * fraction2.denominator;
        return createFraction(resultNumerator, resultDenominator);
    },
   multiply: function  (fraction2 ){
        var resultNumerator = this.numerator * fraction2.numerator;
        var resultDenominator = this.denominator * fraction2.denominator;
       return createFraction(resultNumerator, resultDenominator);
    },
    divide: function(fraction2) {
            var resultNumerator = this.numerator * fraction2.denominator;
            var resultDenominator = this.denominator * fraction2.numerator;
            return createFraction(resultNumerator, resultDenominator);
        },
};
    function createFraction(numerator, denominator) {
        var newFraction = Object.create(fraction);
        newFraction.setFraction(numerator, denominator);
        return newFraction;
    }

    var fraction1 = createFraction(1,3);
    var fraction2 = createFraction(3,1);

    var result = fraction1.add(fraction2);
    var result2 = fraction1.subtract(fraction2);
    var result3 = fraction1.multiply(fraction2);

   prompt(" Result (1/3) + (3/1) =  " + result.numerator + "/" + result.denominator);
   prompt(" Result (1/3) - (3/1) =  " + result2.numerator + "/" + result2.denominator);
   prompt(" Result (1/3) * (3/1) =  " + result3.numerator + "/" + result3.denominator);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

var time= {
    hour: 0,
    minute: 0,
        second: 0,

    displayTime: function () {
        var HoursString = this.hour.toString().padStart(2,'0');
        var MinutesString = this.minute.toString().padStart(2,'0');
        var SecondString = this.second.toString().padStart(2,'0');

        prompt(HoursString + ':'+ MinutesString  + ':' + SecondString)


    },
    addSeconds : function (seconds){
        this.second+=seconds;

        if (this.second >= 60){
            var minutesAdd = Math.floor(this.second / 60);
            this.second %= 60;
            this.addMinutes(minutesAdd);

        }
    },
    addMinutes : function (minutes){
        this.minute+=minutes;

        if (this.hours){
            var minutesAdd = Math.floor(this.minute / 60);
            this.minute %= 60;

        }
    },
    addHours : function (hours){
        this.hour+=hours;

        if (this.hours >= 24){

            this.hours %= 24;

        }
    }



};

time.hour = 15;
time.minute = 13;
time.second = 45;

time.displayTime();

time.addMinutes(10)
time.addHours(23)
time.addSeconds(120)
time.displayTime()



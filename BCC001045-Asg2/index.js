// 1. welcoming ppl from karachi
var city = prompt("Which City Do You Belong To?");
city = city.toLocaleLowerCase();
if (city === "karachi") {
    alert("Welcome to city of lights");
} 

// 2 wishing: male/female
var userGender = prompt("Gender");
userGender = userGender.toLocaleLowerCase();
if (userGender === "male") {
    alert("Good Morning Sir");
} else if (userGender === "female") {
    alert("Good Morning Ma'am");
} 

// 3. traffic signal
var signalColor = prompt("What's The Color on The Singal?");
signalColor = signalColor.toLocaleLowerCase();
if (signalColor === "red") {
    alert("Must Stop");
} else if (signalColor === "yellow") {
    alert("Ready to move");
} else if (signalColor === "green") {
    alert("Move now");
}

// 4. fuel tank
var fuel = prompt("Remaining Fuel In The Tank?\n(In Litres)");
fuel = parseInt(fuel);
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

// 5. alert displayed ?
var a = 4; // alert displayed
if (++a === 5){
    alert("given condition for variable a is true");
} 
var b = 82; // no alert
if (b++ === 83){
    alert("given condition for variable b is true");
}
var c = 12; // no alert
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){ // alert displayed 
    alert("condition 2 is true");
} 
if (++c < 14){ // no alert
    alert("condition 3 is true");
}
if(c === 14){ // alert displayed 
    alert("condition 4 is true");
}


// 7. guessing game
var secretNum = 5 
var usersGuess = prompt("Guess The Secret Number");
var usersGuess = parseInt(usersGuess);

if (usersGuess === secretNum) {
    alert("Bingo! Correct answer");
} else if (usersGuess === ++secretNum) {
    alert("Close enough to the correct answer");
}

// 8. division by 3
var givenNum = prompt("Enter Number To Check It's\nDivisiblility By 3: ");
givenNum = parseInt(givenNum);
if (givenNum % 3 === 0) {
    alert("Your Number Is Divisible!");
} else if (givenNum % 3 !== 0) {
    alert("Your Number Is Not Divisible!");
}

// 9. check for even / odd #
var checkNum = prompt("Enter An Even or Odd Number");
checkNum = parseInt(checkNum);
if (checkNum % 2 === 0) {
    alert("Your Number Is An EVEN Number");
} else if ( checkNum % 2 !== 0) {
    alert("Your Number Is An ODD Number");
}

// 10. temperature message
var temperature = prompt("Enter Temperaturer:");
temperature = parseInt(temperature);
if (temperature >= 40) {
    alert("It is too hot outside.");
} else if (temperature >= 30 && temperature < 40) {
    alert("The Weather today is Normal.");
} else if (temperature >= 20 && temperature < 30) {
    alert("Today's Weather is cool.");
} else if (temperature <= 10) {
    alert("OMG! Today's weather is so Cool.");
}


// 6. mark sheet 
document.write("<h1>Marks Sheet</h1>");
var scienceMarks = prompt("Obtained Marks in Science: ", 0);
var mathMarks = prompt("Obtained Marks in Math: ", 0);
var englishMarks = prompt("Obtained Marks in English: ", 0);
var grades;
var remarks;

var scienceMarks = parseInt(scienceMarks);
var mathMarks = parseInt(mathMarks);
var englishMarks = parseInt(englishMarks);


var obtainedMarks = scienceMarks + mathMarks + englishMarks;
var percentage = (obtainedMarks / 300) * 100; 
percentage = percentage.toFixed(0);

if (percentage >= 80 && percentage < 100) {
    grades = "A1";
    remarks = "Excellet";
} else if (percentage >= 70 && percentage < 80) {
    grades = "A";
    remarks = "Good";
} else if (percentage >= 60 && percentage < 70) {
    grades = "B";
    remarks = "You Need To Improve";
} else if (percentage <=60) {
    grades = "Fail";
    remarks = "Stop Wasting Your Time";
}


document.write("Total Marks: 300");
document.write("<br>Marks Obtained: " + obtainedMarks);
document.write("<br>Percentage: " + percentage + "%");
document.write("<br>Grades: " + grades);
document.write("<br>Remarks: " + remarks);



// 11. caculator 
var firstNumb = prompt("Enter The First Digit", 0);
var symbol = prompt("What Do You Want To Compute?\n+\n-\n*\n/\n%");
var secNumb = prompt("Enter The Second Digit", 0);
firstNumb = parseInt(firstNumb);
secNumb = parseInt(secNumb);
var output;


if (symbol === "+") {
    output = firstNumb + secNumb;
} else if (symbol === "-") {
    output = firstNumb - secNumb;
} else if (symbol === "*") {
    output = firstNumb * secNumb;
} else if (symbol === "/") {
    output = firstNumb / secNumb;
} else if (symbol === "%") {
    output = firstNumb % secNumb;
}

document.write("<h1>Calculator</h1>");
document.write("First Digit: " + firstNumb);
document.write("<br>Computation: " + symbol);
document.write("<br>Second Digit: " + secNumb);
document.write("<br>Output: " + output);









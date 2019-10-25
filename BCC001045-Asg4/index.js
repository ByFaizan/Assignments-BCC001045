// 1. replacing using replace function
var city = "Hyderabad";
console.log("City: " + city);

var afterReplacement = city.replace("Hyder", "Islam");
console.log("After Replacement: " + afterReplacement);





// 2. string - number
var strValue = "472";
console.log("Value: " + strValue);
console.log("Initial Type of Value: " + typeof(strValue));

var numValue = Number(strValue);

console.log("Type of Value After Change: " + typeof(numValue));





// 3. strong password
var password = prompt("Enter A Password");
var passwordLength = password.length;

var condition1; // to check for numbers & aplhabets
var condition2; // to check if it starts with a number
var condition3; // to check if length is atleast 8 char. long


// condition 1
condition = /^[0-9a-zA-Z]+$/;

if (password.match(condition)) {
    condition1 = true;
} else {
    condition1 = false;
}


// condition 2
if (password.charCodeAt(0) >= 49 && password.charCodeAt(0) <= 57) {
    condition2 = false;
} else {condition2 = true}

// condition 3
if (passwordLength >= 8) {
    condition3 = true;
} else {condition3 = false} 


if (condition1 === true && condition2 === true && condition3 === true) {
    alert("PERFECT PASSWORD");
} else {
    alert("Enter a Valid Password\nWith Letter & Numbers Only\nMust Not Start With a Number\nLonger Than 8 Chars.");
}





// 4. email verification 
var email = "Qasim@piaic.org";
var emailCondition = /\S+@\S+\.\S+/;

var emailVerify;

if (email.match(emailCondition)) {
    emailVerify = true;
} else {
    emailVerify = false;
}

if (emailVerify === true) {
    console.log("Your E-mail Is Valid");
} else if (emailVerify === false) {
    console.log("Please Enter A Valid E-mail");
}





// 5. little math

var numb = 3.45214;
var number = Number(numb);

console.log("Number: " + number);
console.log("Round Off: " + Math.round(number));
console.log("Floored: " + Math.floor(number));
console.log("ceiling: " + Math.ceil(number));





// 6. simple dice
var ranNum = Math.random();
var cleanRanNum = (ranNum * 6) + 1; 
var diceFace = Math.floor(cleanRanNum);

console.log("Random Dice Value: " + diceFace)





// 7. counting occurrences
var text = "The quick brown fox jumps over the lazy dog";
text = text.toLowerCase();
var textLen = text.length;
var searchFor = "the";
var indexOfSearch = text.indexOf(searchFor);
var counter = 0;

for (var i = 0; i < textLen; i++) {
    if (text.indexOf(text.charAt(i)) === indexOfSearch) {
        counter++
    }
}

console.log(counter);





// 8. number in words
var num = 9999;
var strNumber = num.toString();
var singleNum = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
                 "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"]; 
var tyNumbs = ["", "", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
var dredNumbs = ["", "One Hundred", "Two Hundred", "Three Hundred", "Four Hundred", "Five Hundred", "Six Hundred",
                 "Seven Hundred", "Eight Hundred", "Nine Hundred"];
var thNumbs = ["", "One Thousand", "Two Thousand", "Three Thousand", "Four Thousand", "Five Thousand", "Six Thousand",
                 "Seven Thousand", "Eight Thousand", "Nine Thousand",];

// from 1 - 99
if (num < 20) {
    console.log(singleNum[num]);
} else if (strNumber.length === 2 && strNumber.charAt(1) === "0") {
    console.log(tyNumbs[strNumber.charAt(0)]);
} else if (num < 100) {
    console.log(tyNumbs[strNumber.charAt(0)] + " " + singleNum[strNumber.charAt(1)]);
} 

// from 100 - 999
else if (strNumber.length === 3 && strNumber.charAt(1) === "0" && strNumber.charAt(2) === "0") {
    console.log(dredNumbs[strNumber.charAt(0)]);
} else if (strNumber.length === 3 && strNumber.charAt(1) === "1") {
    console.log(dredNumbs[strNumber.charAt(0)] + " & " + singleNum[strNumber.charAt(1) + strNumber.charAt(2)]);
} else if (strNumber.length === 3 && strNumber.charAt(1) === "0") {
    console.log(dredNumbs[strNumber.charAt(0)] + " & " + singleNum[strNumber.charAt(2)]);
} else if (num > 100 && num < 1000) {
    console.log(dredNumbs[strNumber.charAt(0)] + " & " + tyNumbs[strNumber.charAt(1)] + " " + singleNum[strNumber.charAt(2)]);
} 

// 1000+
else if (strNumber.length === 4 && strNumber.charAt(1) === "0" && strNumber.charAt(2) === "0" && strNumber.charAt(3) === "0") {
    console.log(thNumbs[strNumber.charAt(0)])
} else if (strNumber.length === 4 && strNumber.charAt(1) === "0" && strNumber.charAt(2) === "1") {
    console.log(thNumbs[strNumber.charAt(0)] + " & " +singleNum[strNumber.charAt(2) + strNumber.charAt(3)]);
}  else if (strNumber.length === 4) {
    console.log(thNumbs[strNumber.charAt(0)] + " " + dredNumbs[strNumber.charAt(1)] + " & " + tyNumbs[strNumber.charAt(2)] + " " + singleNum[strNumber.charAt(3)]);
} 





// 9. cleaning HTML tags
text2 = "<p><strong><em>Only Print This</em></strong></p>";
cleanText = text2.replace(/<[^>]*>/g, "");
console.log("With HTML Tags: " + text2);
console.log("Clean Output: " + cleanText);





// 10. rounding #
var numToRound = 12.37982;
var decimalPlace = 2;

var roundedOutput = numToRound.toFixed(decimalPlace)


console.log(numToRound);
console.log(roundedOutput);





// 11. mean of digits

var numbsForMean = 5464656;
numbsForMean = numbsForMean.toString();
var aryForMean = [];
var len = numbsForMean.toString().length;
var sum = 0;

for (var i = 0; i < len; i++) {
    aryForMean[i] = numbsForMean.charAt(i); 
}

for (var j = 0; j < len; j++) {
    sum += Number(aryForMean[j]);
}

var mean = (sum / len);
var fixedMean = Number(mean.toFixed(2));
console.log(mean);  // >> 5.142857142857143
console.log(fixedMean); // >> 5.14





// 12. days of the month 
var dateBefore15 = new Date("14 October 2019");

if (dateBefore15.getDate() < 16) {
    console.log("First Fifteen Day of The Week");
} else {
    console.log("Last Days of The Month");
}
// >> First Fifteen Day of The Week





// 13. minutes since midnight
var newDate = new Date();

var milSecSinceJan1 = newDate.getTime();
var minSinJan1 = (milSecSinceJan1/60000);

console.log("Current Date: " + newDate);
console.log("Elapsed Milliseconds Since Jan 1, 1970: " + milSecSinceJan1);
console.log("Elapsed Minutes Since Jan 1, 1970: " + minSinJan1);





// 14. an hour ahead 

var date1 = new Date();
var curDate = new Date();

curDate.setHours(curDate.getHours() + 1);

console.log("CurrentDate: " + curDate);

console.log("1-hour Ago, It Was " + date1);





// 15. finding out birth year
var userDate = "30"; // all this info would be taken from the user
var userMonth = "August";
var userYear = "1997";

var userDOB = (userDate + userMonth + userYear);

var dt1 = new Date();
var dt = new Date(userDOB);

var age = (dt1.getFullYear() - dt.getFullYear());
var birthYear = (dt.getFullYear());


console.log("Your Age Is: " + age);
console.log("Your Birth Year Is: " + birthYear);

// 1. checking the first letter 
var charak = prompt("Enter:\n1. A Number\nOr\n2. Uppercase/Lowercase Letter");
var checkCharak = charak.charCodeAt(0);

if (checkCharak >= 48 && checkCharak <= 57) {
    alert("You've Entered A NUMBER");
} else if (checkCharak >= 65 && checkCharak <= 90) {
    alert("You've Entered An UPPERCASE-LETTER");
} else if (checkCharak >= 97 && checkCharak <= 122) {
    alert("You've Entered A LOWERCASE-LETTER");
}



// 2. displaying the larger int
var int1 = prompt("Enter Your First Number", 0);
var int1 = parseInt(int1);
var int2 = prompt("Enter Your Second Number", 0);
var int2 = parseInt(int2);
var largerInt;


if (int1 === int2) {
    alert("Both Numbers Are Equal");
} else if (int1 !== int2) {
    largerInt = Math.max(int1, int2);
    alert("The Larger Number Is: " + largerInt);
}


// 3. is the # +ve, -ve or zero
var checkSign = prompt("Enter A Number To Check If It's\nPositive, Negative, Zero.", 0);
checkSign = parseInt(checkSign);
if (checkSign > 0) {
    alert("You've Entered A POSITIVE Number");
} else if (checkSign < 0) {
    alert("You've Entered A NEGATIVE Number");
} else if (checkSign === 0) {
    alert("You've Entered 0");
}


// 4. vowel or not a vowel
var vowelCheck = prompt("Enter An Alphabet To Check If It's A Vowel Or Not");
vowelCheck = vowelCheck.toLowerCase();


if (vowelCheck === "a" || vowelCheck === "e" || vowelCheck === "i"
    || vowelCheck === "o" || vowelCheck === "u") {
            alert("You've Entered A Vowel");    
} else {
    alert("Your Letter Is Not A Vowel");
}


// 5. correct password 
var correctPassword = "piaic";
var password = prompt("Please Enter Your Password");

if (password === "") {
    alert("Please Enter Your Password");
} else if (password === correctPassword) {
    alert("Correct!\nThe Password You've Entered Matches.");
} else if (password !== correctPassword) {
    alert("Password Incorrect!");    
} 


// 6.  de-buggin
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    alert(greeting);
} else {
    greeting = "Good evening";
    alert(greeting);
}



// 7. greeting flowchart
var timeNow = prompt("Enter Current Time\n(24-HR Format)");

if (timeNow >= 0000 && timeNow < 1200) {
    alert("Good Morning!");
} else if (timeNow >= 1200 && timeNow < 1700) {
    alert("Good Afternoon!");
} else if (timeNow >= 1700 && timeNow < 2100) {
    alert("Good Evening!");
} else if (timeNow >= 2100 && timeNow <= 2359) {
    alert("Good Night!");
}

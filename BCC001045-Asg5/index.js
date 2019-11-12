// 1. factorial 
function factorial(num) {
    for(var i = (num - 1); i > 0; i--) {
        num *= i;
    }
    return num;
}
console.log(factorial(9)); // 362880

// 2. area of a triangle

function triArea(w, b) {
    area = w * b;
    console.log(area);
}

// arguments as value 
triArea(2, 5); // 10

// arguments as variables 
var width = 25;
var height = 10;
triArea(width, height); // 250

// 3. check for palindrome

var strReversed = "";
var check = 0;

function isPalindrome(str) {
    
    for (var i = str.length - 1; i >= 0; i--) {
        strReversed += str[i];
    }
    for (var i = str.length - 1; i >= 0; i--) {
        if (str[i] === strReversed[i]) {
        }
        else {
        check += 1;    // this only means that some particular char. is not the same when reversed
        }
    }

    if (check === 0) {
        console.log("Is A Palindrome");
    } else {
        console.log("Is Not A Palindrome");
    }
}

isPalindrome("tibit"); // Is A Palindrome
isPalindrome("fazian"); // Is Not A Palindrome

// 4. geometrizer

function calcCircumference(r) {
    radius = (2 * Math.PI * r);
    console.log("The Circumference Is: " + Math.round(radius));
}

calcCircumference(5); // The Circumference Is: 31

function calcArea(r) {
    area = (Math.PI * Math.pow(r, 2));
    console.log("The Area Is: " + Math.round(area));    
}

calcArea(5); // The Area Is: 79


// 5. a useful function for cashier

function inNotes(amount) {
    
    amount = amount.toString();

    if (amount.length > 2) {
        console.log("You Need: " + amount.charAt(0) + " Hundred Notes");
        
        if (amount.charAt(1) < 5 && amount.charAt(1) > 0) {
            console.log(amount.charAt(1) + " Ten Notes");
        }
      
        else if (amount.charAt(1) > 5) {
            console.log("1 Fifty Note & " + (amount.charAt(1) - 5) + " Ten Notes");
        }
      
        else if (amount.charAt(1) === "5" && amount.charAt(2) === "0") {
            console.log("1 Fifty Note");
        }
    } 
    
    else if (amount.length < 3) {
        if (amount.charAt(0) < 5) {
            console.log("You Need: " + amount.charAt(0) + " Ten Notes");
        }
    
        else if (amount.charAt(0) === "5" && amount.charAt(1) === "0") {
            console.log("You Need 1 Fifty Note");
        }
    
        else if (amount.charAt(0) > 5) {
            console.log("1 Fifty Note & " + (amount.charAt(0) - 5) + " Ten Notes");
        }
    }
    
    else if (amount.length > 2) {
        if (amount.charAt(1) === "0" && amount.charAt(2) === "0") {
            console.log("You Need " + amount.charAt(0) + " Hundred Notes");
        }
    }
        
}

inNotes(20); //You Need: 2 Ten Notes
inNotes(50); //You Need 1 Fifty Note    
inNotes(120); //You Need: 1 Hundred Notes 2 Ten Notes
inNotes(250); //You Need: 2 Hundred Notes 1 Fifty Note
inNotes(470); // You Need: 4 Hundred Notes 1 Fifty Note & 2 Ten Notes
inNotes(500); //You Need: 5 Hundred Notes
inNotes(950); //You Need: 9 Hundred Notes




// 6. mirror ary

function mirror(ary) {
    
    var len = ary.length
    var revAry = [];
    var mirror = [];


    for (var i = len - 1; i >= 0; i--) {
        revAry.push(ary[i]);
    }
    
    console.log(ary.concat(revAry));   

}

mirror([5, 4, 3, 2, 1, 0]);    //[ 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5 ]



// 7. weekend 

var daysInWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 

function isWeekend(toCheck) {

    var date1 = new Date(toCheck);
    var day = date1.getDay();    

        if (day === 0 || day === 6) {
            console.log("It's Weekend!");
        } 
            else {
                console.log("wait " + (6 - day) + " More Days...")
            }

    console.log("The Day Is: " + daysInWeek[day]);


}

isWeekend("oct 12, 2019");      // It's Weekend! The Day Is: Saturday 
isWeekend("oct 9, 2019");       // wait 3 More Days... The Day Is: Wednesday
isWeekend("nov 10, 2019");      //It's Weekend! The Day Is: Sunday

// 8. your age

function calculateAge(birthday) {
    
    var dateOfBirth = new Date(birthday);        
    var date2 = new Date();

        var convertIntoDays = (1000 * 60 * 60 * 24);
        var convertYears = 365;
        var daysPerMonth = 30;

    var dayDiff = (date2 - dateOfBirth) / convertIntoDays;
        var yearDiff = dayDiff / convertYears;
            var monthDiff = (dayDiff % 365) / daysPerMonth;
                var daysLeft = ((monthDiff - Math.floor(monthDiff)) * 30);



    console.log("You're " + Math.floor(yearDiff) + " Years, " + Math.floor(monthDiff) + " Months & " + Math.floor(daysLeft) + " Days Old.");


}

calculateAge("aug 30, 1997");   //  You're 22 Years, 2 Months & 19 Days Old.
calculateAge("Feb 8, 2001");    //  You're 18 Years, 9 Months & 11 Days Old.


// 9. add weeks to current date

function addWeek(week) {
    daysAry = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        var days = (week * 7);
        var date3 = new Date();

        var plusWeeks = (date3.getDate() + days);

        date3.setDate(plusWeeks);

 console.log(date3);

}
                //current date: 2019-11-12
addWeek(1);     //2019-11-18
addWeek(2);     //2019-11-25
addWeek(5);     //2019-12-16



// 10. count vowel 



function countVowels(str) {

    var vowels = ["a", "e", "i", "o", "u"];

    var string = str;
    var len = string.length;
    
    var counter = 0;

        for (var i = 0; i < len; i++) {

            for (var j = 0; j < 6; j++ ) {

                if (vowels[j] === string[i]) {
                    counter++;
                }
            
            } 

        }

console.log("No. of Vowels In The String: " + counter);
    
}

countVowels("my name is faizan khan");  // No. of Vowels In The String: 7
countVowels("aeiou");   // No. of Vowels In The String: 5





// 11. check for vowel

function isVowel(str) {

    
    checkForVowel = str;

        var count = 0;

        for (var i = 0; i < checkForVowel.length; i++) {

            switch (checkForVowel[i]) {
                
                case 'a':
                  count++;
                  break;
                
                    case 'e':
                      count++;
                      break;

                        case 'i':
                          count++;
                          break;

                            case 'o':
                              count++;
                              break;

                                case 'u':
                                  count++;
                                  break;
            
            }

        }

    if (count > 0) {
        return true;
    } else {
        return false
    }
   
}

var doesStrHaveVowel = isVowel("faizan");
console.log(doesStrHaveVowel);  // true

doesStrHaveVowel = isVowel("myth");
console.log(doesStrHaveVowel);  // false





// 12. guess game


// generating random number
function generateRandomNum() {
    var randomNum = (Math.random() * 100) + 1;
    randomNum = Math.floor(randomNum);       
    return randomNum; 
}

// taking guess (input) from the user, given 3 chances


function playGuessGame() {

    var chance = 0;
    var numToGuess = generateRandomNum();
    
    while (chance < 3) {  //    given 3 chances
    
        chance++;
        var userGuess = prompt("Your Guess: "); // taking guess (input) from the user
        if (userGuess === numToGuess) {
            console.log("You're Right. You've Won!!");
        }
        else {
            console.log("Try Again...");
        }

        var playAgain = false;

                if (chance === 3) {
                    var askUser = prompt("Do You Want To Play Again? (Yes/No)");
                    askUser = askUser.toLowerCase();
                    
                    if (askUser === "yes") {
                        playAgain = true;
                        chance = 0;     //  to reset the game
                    }
                    else if (askUser === "no") {
                        playAgain = false;
                        console.log("Thank You For Playing With Us Today!");
                    }
                }
                


    }

}

playGuessGame();



//1. using for loop to show array elements in browser
var courses = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

for (var i = 0; i < 8; i++) { 
    document.write("<br>" + courses[i]);
}
document.write("<br>"); // to create space





// 2. using loop & array displaying relavent data 
var studentNames = ["Micheal", "John", "Tony"];
var studentMarks = [320, 230, 480];
var studentPercentages = [(studentMarks[0]/500 * 100), (studentMarks[1]/500 * 100), (studentMarks[2]/500 * 100)];


for (var i = 0; i < 3; i++) {
    document.write("<br> Score of " + studentNames[i] + " is " + studentMarks[i] + ". Percentage: " + 
    studentPercentages[i] + "%") 
}
document.write("<br>"); // to create space





// 3. playing around with colors
var colors = ["Red ", "Green ", "Blue "];

document.write("Initial Colors: " + colors); 
colors.unshift(prompt("What Color Do You Want To Add At The Beginning?")); //A. color @ beg.
colors.push(prompt("What Color Do You Want To Add At The End?")); //B. color @ end.
colors.unshift("Pink", "Purple"); //C. two colors @ beg.
colors.shift(); //D. Delete first color
colors.pop(); //E. Delete Last Color

document.write("<br> After Amendments: " + colors);

    //F. adding color on specific index 
var colorIndex = prompt("Which Index Do You Want To Add Your Color Name At?");
var colorName = prompt("Which Color Name Do You Want To Add");

colors.splice(colorIndex, 0, colorName);

document.write("<br> Your Colors Added: " + colors);

    //G. deleting colors at specific locations
var deleteIndex = prompt("At Which Index Do You Want To Delete The Colors From?");
var deleteAmount = prompt("How Many Color Do You Want To Delet?");

colors.splice(deleteIndex, deleteAmount);

document.write("<br> " + colors);


document.write("<br>"); // to create space





// 4. copying from an array 
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2, 4);

document.write("<br> <b>Cities List:</b> " + cities);
document.write("<br> <b>Selected Cities:</b> " + selectedCities);

document.write("<br> "); // to create space





// 5. removing duplicates via for loop
var sampleArray = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
var uniqueArray = [];
var len = sampleArray.length
for (var i = 0; i < len; i++) {
    if (uniqueArray.indexOf(sampleArray[i]) === -1) {
        uniqueArray.push(sampleArray[i]);
    }
}

document.write("<br> After Removing Duplicates: " + uniqueArray);

document.write("<br> "); // to create space
document.write("<br> ");





// 6. 1st, 2nd, 3rd choise of city using for loop
var oCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["st", "nd", "rd"]; 
var citiesLen = oCities.length;

for (var i = 0; i < 3; i++) {
    document.write("<br>" + (i + 1) + o[i] + " Choice is " + oCities[i]);
}

document.write("<br>");
document.write("<br>");





// 7. union of two arrays
var array1 = [10, 20, 4, 40, 60, 70];
var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var array3 = array2.concat(array1); //
var array3Len = array3.length;
var output = [];


for (var i = 0; i < array3Len; i++) {
    if (output.indexOf(array3[i]) === -1) {
        output.push(array3[i]);
    }
}

document.write("<br> Union: " + output);





document.write("<br>");
document.write("<br>");
// 8. Series
// a. simple counting 
for (var i = 1; i < 16; i++) {
    document.write(i + ",");
}
document.write("<br>");

// b. backwards counting 
for (var i = 10; i > 0; i--) {
    document.write(i + ",");
}
document.write("<br>");

// c. odd & even series
for (var i = 0; i < 22; i++) { 
    if ((i % 2) === 0) {
        document.write(i + ",");
    }
}
document.write("<br>");
for (var i = 0; i < 20; i++) { 
    if ((i % 2) !== 0) {
        document.write(i + ",");
    }
}
document.write("<br>");

// 2k series
for (var i = 2; i < 22; i++) { 
    if ((i % 2) === 0) {
        document.write(i + "k, ");
    }
}
document.write("<br>");
document.write("<br>");





// 9. largest # in the array
var aryA = [24, 53, 78, 91, 12];
document.write("The Largest Number Is: " + Math.max(...aryA)); 





// 10. sorting array in ascending order

var aryB = [20, 53, 78, 4, 91, 12];
var ascendAryB = aryB.sort(function(a,b){return a-b});

document.write("<br>Smallest - Largest: " + ascendAryB);
// 1 & 2. simple calculations
var num1 = 5; 
var num2 = 10;
var sum = num1 + num2;
var mult = num1 * num2;
var div = num2 / num1;
var modu = num2 % num1; 
document.write("Sum of 5 & 10 Is: " + sum);
document.write("<br> Product of 5 & 10 Is: " + mult);
document.write("<br> Dividing 10 by 5 Gives: " + div);
document.write("<br> Modulus of 5 & 10 Is: " + modu);
document.write(".<br>");


// 3. JS math expersions
var numb = 5;
document.write("<br> Value After Declaration is: " + typeof numb);
document.write("<br> Initial Value Is: " + numb);
document.write("<br> Value After Increment Is: " + ++numb);
document.write("<br> Initial Value Is: " + numb);
document.write("<br> Value After Adding 7 Is: " + (numb + 7));
document.write("<br> Value After Decrementing Is: " + (--numb + 7));
document.write("<br> Remainder: " + (--numb + 7) % 3);


// 4. movie ticket
var ticketPrice = 600;
var totalPrice = 600 * 5;
document.write("<br>");
document.write("<br> Total Cost To Buy 5 Tickets To a Moive Is; " + totalPrice);


// 5. multiplication table
document.write("<br>");
document.write("<br> Table of 4");
var numbr = 2;
document.write("<br> 2 x 1 = " + numbr * 1);
document.write("<br> 2 x 2 = " + numbr * 2);
document.write("<br> 2 x 3 = " + numbr * 3);
document.write("<br> 2 x 4 = " + numbr * 4);
document.write("<br> 2 x 5 = " + numbr * 5);
document.write("<br> 2 x 6 = " + numbr * 6);
document.write("<br> 2 x 7 = " + numbr * 7);
document.write("<br> 2 x 8 = " + numbr * 8);
document.write("<br> 2 x 9 = " + numbr * 9);
document.write("<br> 2 x 10 = " + numbr * 10);


// 6. the temperature converter 
// celcius to fahrenheit
document.write("<br>");
var cel = 25;
var far = (cel * 9 / 5) + 32;
document.write("<br>" + cel + " oC is " + far + " oF");
// fahrenheit to celcius
var farh = 70;
var celc = (farh - 32) * 5 / 9;
document.write("<br>" + farh + " oF is " + celc + " oC");


// 7. shopping cart 
document.write("<br>");
var priceItem1 = 650;
var priceItem2 = 100;
var qtyItem1 = 3;
var qtyItem2 = 7;
var shippingCharge = 100;
var totalCost = (priceItem1 * qtyItem1) + (priceItem2 * qtyItem2) + shippingCharge;
document.write("<br> Price of Item 1 is: " + priceItem1);
document.write("<br> Quantity of Item 1 is: " + qtyItem1);
document.write("<br> Price of Item 2 is: " + priceItem2);
document.write("<br> Quantity of Item 2 is: " + qtyItem2);
document.write("<br> Shipping Charges: " + shippingCharge);
document.write("<br>");
document.write("<br> Total Cost of Your Order is: " + totalCost);
document.write("<br>");

// 8. mark sheet
document.write("<h1>Marks Sheet</h1>");
var totalMrks = 980;
var mrksObtained = 804;
var percentage = mrksObtained / totalMrks * 100;
document.write("<br> Marks Obtained: " + mrksObtained);
document.write("<br> Total Marks: " + totalMrks);
document.write("<br> Percentage: " + percentage);


// 9. currency in PKR
document.write("<br>");
document.write("<h1>Currency In PKR</h1>");
var pkr = (10 * 104.80) + (25 * 28);
document.write("<br> Total Currency In PKR: " + pkr);


// 10. arithmetic
document.write("<br>");
var someNumber = 10;
var arithmetic = ((someNumber + 5) * 10) / 2;
document.write("<br> Arithmetic Solution: " + arithmetic);


// 11. age calculator
document.write("<br>");
document.write("<h1>Age Calculator</h1>");
var currentYear = 2019;
var birthYear = 2001;
var age = currentYear - birthYear;
document.write("<br> Current Year: " + currentYear);
document.write("<br> Birth Year: " + birthYear);
document.write("<br> Your Age: " + age);


// 12. the geometrizer
document.write("<br>");
document.write("<h1>The Geometrizer</h1>");
var radius = 20;
var pi = Math.PI;
var circumference = 2 * pi * radius;
var area = pi * Math.pow(radius, 2);
document.write("<br> Radius of a Circle: " + radius);
document.write("<br> Radius of a Circumference: " + circumference);
document.write("<br> The Area is: " + area);


// 13. lifetime supply calculator
var snack = " Chocolate Chip ";
var myAge = 22;
var maxAge = 80;
var amtPerDay = 5;
var TotalPerYear = (5 * 368);
var TotalRequired = TotalPerYear * (maxAge - myAge);
var statement = "You Will Need " + TotalRequired + snack + "To Last You Until The Ripe Old Age of " + maxAge;
document.write("<br>");
document.write("<h1>The Lifetime Supple Calculator</h1>");
document.write("<br> Fav Snack: " + snack);
document.write("<br> Current Age: " + myAge);
document.write("<br> Est. Maximum Age: " + maxAge);
document.write("<br> Amount of Snacks Per Day: " + amtPerDay);
document.write("<br>" + statement);






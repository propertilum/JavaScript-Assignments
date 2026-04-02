// CHAPTER #5
// ANSWER #1

    let Num1 = 4
    let Num2 = 7
    let sum = Num1 + Num2

    document.writeln(
        "Sum of " + Num1 + " and " + Num2 + " is " + sum
    )

// ANSWER #2
// Substraction

    let Num3 = 9
    let Num4 = 5
    let diff = Num3 - Num4

    document.writeln(
        "<br> Difference of " + Num3 + " and " + Num4 + " is " + diff
    )

// Multiplication

    let Num5 = 7
    let Num6 = 8
    let mul = Num5 * Num6

    document.writeln(
        "<br> Multiplication of " + Num5 + " and " + Num6 + " is " + mul
    )

// Division

    let Num7 = 12
    let Num8 = 3
    let div = Num7 / Num8

    document.writeln(
        "<br> Division of " + Num7 + " and " + Num8 + " is " + div
    )


// ANSWER #3

    let Variable1;
    document.writeln(
        "<br><br>" +
        "Value after variable declaration is: " + Variable1
    )

    Variable1 = 6
    document.writeln(
        "<br>" +
        "Initial value: " + Variable1
    )

    Variable1++
    document.writeln(
        "<br>" +
        "Value after increment is: " + Variable1
    )

    Variable1 = Variable1 + 7
    document.writeln(
        "<br>" +
        "Value after addition is: " + Variable1
    )

    Variable1--
    document.writeln(
        "<br>" +
        "Value after decrement is: " + Variable1
    )

    Variable1 = Variable1 / 3
    document.writeln(
        "<br>" +
        "The remainder is: " + Variable1
    )

// ANSWER #4

    let ticket = 600
    document.writeln(
        "<br><br>" +
        "The cost to buy 5 tickets to a movie is " + (ticket*5) + "PKR"
    )

// ANSWER #5

    let Num = 8
    document.writeln(
        "<br><br>" +
        "<h3>Table of 8</h3>" + 
        Num + " × 1 = " + (Num*1) + "<br>" +
        Num + " × 2 = " + (Num*2) + "<br>" +
        Num + " × 3 = " + (Num*3) + "<br>" +
        Num + " × 4 = " + (Num*4) + "<br>" +
        Num + " × 5 = " + (Num*5) + "<br>" +
        Num + " × 6 = " + (Num*6) + "<br>" +
        Num + " × 7 = " + (Num*7) + "<br>" +
        Num + " × 8 = " + (Num*8) + "<br>" +
        Num + " × 9 = " + (Num*9) + "<br>" +
        Num + " × 10 = " + (Num*10)
    )

// ANSWER #6

    let TempCelcius1 = 31
    let TempFar1 = (TempCelcius1 * 9/5) + 32
    document.writeln(
        "<br><br>" +
        TempCelcius1 + "°C" + " is " + TempFar1 + "°F"
    )

    let TempFar2 = 80
    let TempCelcius2 = (TempFar2 - 32)* 5/9
    document.writeln(
        "<br>" +
        TempFar2 + "°F" + " is " + TempCelcius2 + "°C"
    )

// ANSWER #7

    let Item1Price = 130
    let Item2Price = 575
    let Item1Quantity = 4
    let Item2Quantity = 3
    let ShippingCharges = 100
    let Item1Total = Item1Price * Item1Quantity
    let Item2Total = Item2Price * Item2Quantity
    let Total = Item1Total + Item2Total + ShippingCharges

    document.writeln(
        "<br><br>" +
        "Price of Item 1 is " + Item1Price + "<br>" +
        "Quantity of Item 1 is " + Item1Quantity + "<br>" +
        "Price of Item 2 is " + Item2Price + "<br>" +
        "Quantity of Item 2 is " + Item2Quantity + "<br>" +
        "Shipping Charges " + ShippingCharges + "<br><br>" +
        "Total cost of your order is " + Total
    )

// ANSWER #8

    let TotalMarks = 1100
    let ObtainedMarks = 898
    let percentage = (ObtainedMarks / TotalMarks) * 100

    document.writeln(
        "<br><br>" +
        "Total Marks: " + TotalMarks + "<br>" +
        "Obtained Marks: " + ObtainedMarks + "<br>" +
        "Percentage: " + percentage
    )

// ANSWER #9

    let USDollars = 10
    let USDtoPKR = 104.80
    let SAR = 25
    let SARtoPKR = 28

    document.writeln(
        "<br><br>" +
        "Total Currency in PKR: " + ((USDollars * USDtoPKR) + (SAR * SARtoPKR))
    )

// ANSWER #10

    let $number = 8
    let eq = (($number + 5) * 10 ) / 2

// ANSWER #11

    let CurrentYear = 2026
    let BirthYear = 2009

    document.writeln(
        "<br><br>" +
        "Your Age is: " + (CurrentYear - BirthYear)
    )

// ANSWER #12

    let Radius = 40
    document.writeln(
        "<br><br>" +
        "Radius of a circle: " + Radius + "<br>" +
        "The circumference is: " + (2 * 3.142 * 40) + "<br>" +
        "The Area is: " + (3.142 * (40**2))
    )

// ANSWER #13

    let FavSnack = "ButterScotch Candy"
    let CurrentAge = 17
    let MaximumAge = 70
    let MaxAmountPerDay = 5

//For Calculating Total supply for ripe old age we gonna use this formula
//TotalSnacks = (MaximumAge - CurrentAge) * 365 * MaxAmountPerDay
    let TotalSnacks = (MaximumAge - CurrentAge) * 365 * MaxAmountPerDay

    document.writeln(
        "<br><br>" +
        "You will need " + TotalSnacks + " " + FavSnack + " to last you until the ripe old age of " + MaximumAge
    )

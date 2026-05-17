// CHAPTER #31-34
// ANSWER #1

    var currentDate = new Date()

    document.writeln(
        currentDate
    )

// ANSWER #2

    var currentDate2 = new Date()

    var months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ]

    alert(
        months[currentDate2.getMonth()]
    )

// ANSWER #3

    var currentDate3 = new Date()

    var days = [
        "Sun", "Mon", "Tue",
        "Wed", "Thu", "Fri", "Sat"
    ]

    alert(
        days[currentDate3.getDay()]
    )

// ANSWER #4

    var currentDate4 = new Date()

    var currentDay = currentDate4.getDay()

    if(currentDay == 0 || currentDay == 6){
        alert("It's Fun day")
    }

// ANSWER #5

    var currentDate5 = new Date()

    var currentMonthDate = currentDate5.getDate()

    if(currentMonthDate < 16){
        document.writeln("First fifteen days of the month")
    }
    else{
        document.writeln("Last days of the month")
    }

// ANSWER #6

    var currentDate6 = new Date()

    var milliSeconds = currentDate6.getTime()

    var minutes = milliSeconds / (1000 * 60)

    document.writeln(
        "Current Date: " + currentDate6 + "<br>" +
        "Elapsed milliseconds since January 1, 1970: " + milliSeconds + "<br>" +
        "Elapsed minutes since January 1, 1970: " + minutes
    )

// ANSWER #7

    var currentDate7 = new Date()

    var currentHour = currentDate7.getHours()

    if(currentHour < 12){
        alert("Its AM")
    }
    else{
        alert("Its PM")
    }

// ANSWER #8

    var laterDate = new Date("December 31, 2020")

    document.writeln(
        laterDate
    )

// ANSWER #9

    var ramadanDate = new Date("June 18, 2015")

    var todayDate = new Date()

    var difference = todayDate.getTime() - ramadanDate.getTime()

    var passedDays = Math.floor(difference / (1000 * 60 * 60 * 24))

    alert(
        passedDays + " days have passed since 1st Ramadan, 2015"
    )

// ANSWER #10

    var referenceDate = new Date()

    var beginningDate = new Date("January 1, 2015")

    var timeDifference = referenceDate.getTime() - beginningDate.getTime()

    var secondsPassed = Math.floor(timeDifference / 1000)

    document.writeln(
        "On reference date: " + referenceDate + "<br>" +
        secondsPassed + " seconds had passed since beginning of 2015"
    )

// ANSWER #11

    var currentDate11 = new Date()

    document.writeln(
        "Current Date: " + currentDate11 + "<br>"
    )

    currentDate11.setHours(currentDate11.getHours() + 1)

    document.writeln(
        "1 hour ahead, it will be: " + currentDate11
    )

// ANSWER #12

    var currentDate12 = new Date()

    alert(
        "Current Date: " + currentDate12
    )

    currentDate12.setFullYear(currentDate12.getFullYear() - 100)

    alert(
        "100 years back, it was: " + currentDate12
    )

// ANSWER #13

    var userAge = +prompt("Enter your age")

    var currentYear = new Date().getFullYear()

    var birthYear = currentYear - userAge

    document.writeln(
        "Your age is: " + userAge + "<br>" +
        "Your birth year is: " + birthYear
    )

// ANSWER #14

    var customerName = "Kami"

    var currentMonth = "May"

    var numberOfUnits = 410

    var chargesPerUnit = 16

    var netAmount = numberOfUnits * chargesPerUnit

    var latePaymentSurcharge = 350

    var grossAmount = netAmount + latePaymentSurcharge

    document.writeln(
        "<h1>K-Electric Bill</h1>" +
        "Customer Name: " + customerName + "<br>" +
        "Month: " + currentMonth + "<br>" +
        "Number of Units: " + numberOfUnits + "<br>" +
        "Charges per Unit: " + chargesPerUnit.toFixed(2) + "<br><br>" +
        "Net Amount Payable (within Due Date): " + netAmount.toFixed(2) + "<br>" +
        "Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "<br>" +
        "Gross Amount Payable (after Due Date): " + grossAmount.toFixed(2)
    )
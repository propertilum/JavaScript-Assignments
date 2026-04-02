// CHAPTER #14-16
// ANSWER #1

    let array1 = []

// ANSWER #2

    let array2 = new Array()

// ANSWER #3

    let arrayString = ["Pakistan", "China", "Russia"]

// ANSWER #4

    let arrayNum = [15, 30, 25]

// ANSWER #5

    let arrayBol = [true, false]

// ANSWER #6

    let arrayMixed = ["Pakistan", 7, true, undefined, null]

// ANSWER #7

    let qualifications = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M.Phil", "PhD"]
//I'm unable to print this array as list :(


// ANSWER #8

    let StudentName = ["Subhan", "Rafay", "Usman"]
    let StudentScore = [350, 250, 410]
    let Total = 500
    let percentage;

    document.writeln(
        StudentName[0] + " scored " + StudentScore[0] + ". His Percentage is " + (percentage = (StudentScore[0]/Total)*100) +  "% <br> " +
        StudentName[1] + " scored " + StudentScore[1] + ". His Percentage is " + (percentage = (StudentScore[1]/Total)*100) +  "% <br>" +
        StudentName[2] + " scored " + StudentScore[2] + ". His Percentage is " + (percentage = (StudentScore[2]/Total)*100) +  "%"
        )

// ANSWER #9

    let ColorNames =  ["Red", "Green", "Blue"]

    ColorNames.unshift("White")
    ColorNames.push("Orange")
    ColorNames.unshift("Black", "Grey")
    ColorNames.shift("")
    ColorNames.pop("")
    ColorNames.splice(1, 0, "Magenta")
    ColorNames.splice(2, 1)

    document.writeln(
        "<br><br>"+
        ColorNames
    )

// ANSWER #10
// ANSWER #11

    let CitiesListed = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
    let SelectedCities = CitiesListed.slice(2, 4)

    document.writeln(
        "<br><br>"+
        "Cities list:" + "<br>" + CitiesListed + "<br><br>" +
        "Selected cities list:" + "<br>" + SelectedCities
    )


// ANSWER #12
// CHAPTER #21-25
// ANSWER #1

    var firstName = prompt("Enter your first name")
    var lastName =  prompt("Enter your last name")
    var fullName = firstName + " " + lastName

    console.log(
        alert("Welcome back, " + fullName)
    )

// ANSWER #2

    var favPhone = prompt("Enter your favorite phone model")
    var favPhoneLength = favPhone.length

    document.writeln(
        "My favorite phone is: " + favPhone + "<br>" +
        "Length of String: " + favPhoneLength
    )

// ANSWER #3

    var str1 = "Pakistani"
    var indexstr1 = str1.indexOf("n")

    document.writeln(
        "String: " + str1 + "<br>" +
        "Index of 'n': " + indexstr1
    )

// ANSWER #4

    var str2 = "Hello World"
    var indexstr2 = str2.lastIndexOf("l")

    document.writeln(
        "String: " + str2 + "<br>" +
        "Last index of 'l': " + indexstr2
    )

// ANSWER #5

    var str3 = "Pakistani"
    var indexstr3 = str3.charAt(3)

    document.writeln(
        "String: " + str3 + "<br>" +
        "Character at index 3 is: " + indexstr3
    )

// ANSWER #6
// ANSWER #7

    var str4 = "Hyderabad"
    var str4Modified = str4.replace("Hyder", "Islam")

    document.writeln(
        "City: " + str4 + "<br>" +
        "After replacement: " + str4Modified
    )

// ANSWER #8

    var message = "Ali and Sami are best friends. They play cricket and football together."
    var messageModified = message.replaceAll("and", "&")

    document.writeln(
        "Sentence: " + message + "<br>" +
        "After replacement: " + messageModified
    )

// ANSWER #9

    var str5 = "472"
    var num1 = +(str5)

    document.writeln(
        "Value: " + str5 + "<br>" +
        "Type: " + typeof(str5) + "<br>" +
        "Value: " + num1 + "<br>" +
        "Type: " + typeof(num1)
    )

// ANSWER #10

    var userinput = prompt("Enter any word")
    var userinputUppercase = userinput.toUpperCase()

    document.writeln(
        "User input: " + userinput + "<br>" +
        "Upper case: " + userinputUppercase
    )

// ANSWER #11

    var userinput2 = prompt("Enter any title")
    var userinput2Titlecase = userinput2.charAt(0).toUpperCase() + userinput2.slice(1).toLowerCase()

    document.writeln(
        "User input: " + userinput2 + "<br>" +
        "Title case: " + userinput2Titlecase
    )

// ANSWER #12
// ANSWER #13
// ANSWER #14

    var A = ["cake", "apple pie", "cookie", "chips", "patties"]
    var userinput3 = prompt("Welcome to ABC Bakery, What do you want to order sir/ma'am").toLowerCase()
    var flag = false

    for (let i = 0; i < A.length; i++) {
        if(userinput3 == A[i].toLowerCase()){
            flag = true
            document.writeln(
                userinput3 + " is available at index " + i + " in our bakery"
            )
        }
    }
    if(flag == false){
        document.writeln(
            "We are sorry. " + userinput3 + " is not available in our bakery"
        )
    }

// ANSWER #15
// ANSWER #16

    var universitystr = "University of Karachi"
    var universityarr = universitystr.split("")

    for(var i = 0; i < universityarr.length; i++){
        document.writeln(universityarr[i] + "<br>")
    }


// ANSWER #17

    var userinput4 = prompt("Enter any word")
    var lastChar = userinput4[userinput4.length - 1]

    document.writeln(
        "User Input: " + userinput4 + "<br>" +
        "Last character of input: " + lastChar
    )

// ANSWER #18
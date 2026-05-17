// CHAPTER #35-38
// ANSWER #1

    function showDateTime(){

        var currentDate = new Date()

        document.writeln(
            currentDate
        )
    }

    showDateTime()


// ANSWER #2

    function greetUser(firstName, lastName){

        var fullName = firstName + " " + lastName

        alert(
            "Hello " + fullName
        )
    }

    greetUser("Kamran", "Khan")


// ANSWER #3

    function addNumbers(num1, num2){

        return num1 + num2
    }

    var number1 = +prompt("Enter first number")
    var number2 = +prompt("Enter second number")

    var result = addNumbers(number1, number2)

    document.writeln(
        "Sum: " + result
    )


// ANSWER #4

    function calculator(num1, num2, operator){

        if(operator == "+"){
            return num1 + num2
        }
        else if(operator == "-"){
            return num1 - num2
        }
        else if(operator == "*"){
            return num1 * num2
        }
        else if(operator == "/"){
            return num1 / num2
        }
        else{
            return "Invalid Operator"
        }
    }

    var value1 = +prompt("Enter first number")
    var value2 = +prompt("Enter second number")
    var operator = prompt("Enter operator (+, -, *, /)")

    document.writeln(
        "Result: " + calculator(value1, value2, operator)
    )


// ANSWER #5

    function squareNumber(num){

        return num * num
    }

    var squareResult = squareNumber(5)

    document.writeln(
        "Square: " + squareResult
    )


// ANSWER #6

    function factorial(num){

        var answer = 1

        for(var i = 1; i <= num; i++){
            answer = answer * i
        }

        return answer
    }

    var factorialResult = factorial(5)

    document.writeln(
        "Factorial: " + factorialResult
    )


// ANSWER #7

    function counting(start, end){

        for(var i = start; i <= end; i++){

            document.writeln(i + "<br>")
        }
    }

    counting(1, 10)


// ANSWER #8

    function calculateHypotenuse(base, perpendicular){

        function calculateSquare(num){

            return num * num
        }

        var hypotenuse = Math.sqrt(
            calculateSquare(base) + calculateSquare(perpendicular)
        )

        return hypotenuse
    }

    document.writeln(
        "Hypotenuse: " + calculateHypotenuse(3, 4)
    )


// ANSWER #9

    function rectangleArea(width, height){

        return width * height
    }

    // i. Arguments as value

    document.writeln(
        "Area: " + rectangleArea(5, 10) + "<br>"
    )

    // ii. Arguments as variables

    var width = 7
    var height = 4

    document.writeln(
        "Area: " + rectangleArea(width, height)
    )


// ANSWER #10

    function checkPalindrome(word){

        var reverseWord = word.split("").reverse().join("")

        if(word == reverseWord){

            return "It is a palindrome"
        }
        else{

            return "It is not a palindrome"
        }
    }

    document.writeln(
        checkPalindrome("madam")
    )


// ANSWER #11

    function capitalizeWords(str){

        var words = str.split(" ")

        for(var i = 0; i < words.length; i++){

            words[i] = words[i][0].toUpperCase() + words[i].slice(1)
        }

        return words.join(" ")
    }

    document.writeln(
        capitalizeWords("the quick brown fox")
    )


// ANSWER #12

    function findLongestWord(str){

        var words = str.split(" ")

        var longestWord = ""

        for(var i = 0; i < words.length; i++){

            if(words[i].length > longestWord.length){

                longestWord = words[i]
            }
        }

        return longestWord
    }

    document.writeln(
        findLongestWord("Web Development Tutorial")
    )


// ANSWER #13

    function countLetter(str, letter){

        var count = 0

        for(var i = 0; i < str.length; i++){

            if(str[i] == letter){

                count++
            }
        }

        return count
    }

    document.writeln(
        countLetter("JSResourceS.com", "o")
    )


// ANSWER #14

    function calcCircumference(radius){

        var circumference = 2 * Math.PI * radius

        document.writeln(
            "The circumference is " + circumference + "<br>"
        )
    }

    function calcArea(radius){

        var area = Math.PI * radius * radius

        document.writeln(
            "The area is " + area
        )
    }

    calcCircumference(5)

    calcArea(5)
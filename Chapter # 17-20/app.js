// CHAPTER #17-20
// ANSWER #1

var MultiDimensionalArr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
]
for (var i = 0; i < MultiDimensionalArr.length; i++){
    document.writeln(MultiDimensionalArr[i].join(" ") + "<br>")
}

// ANSWER #3

    for(var i=1; i <= 10; i++){
        document.writeln(i + "<br>")
    }

// ANSWER #4

    // let num = +prompt("Enter the number to show its multiplication")
    // let user = +prompt("Enter lenght of multiplication table")

    // for(var i=1; i <= user; i++){
    //     document.writeln(
    //         `${num} x ${i} = ${num*i} <br>`
    //     )
    // }

// ANSWER #5

    var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

    for(var i=0; i < fruits.length; i++){
        document.writeln(fruits[i] + "<br>")
    }

// ANSWER #6

// Counting
    document.writeln("<h3>Counting:</h3>")

    for(var i = 0; i <= 15; i++){
        document.writeln(i + ",")
    }
// Reverse Counting
    document.writeln("<h3>Reverse counting:</h3>")

    for(var i = 10; i >= 1; i--){
        document.writeln(i + ",")
    }
// Even Numbers
    document.writeln("<h3>Even Numbers:</h3>")

    for(var i = 0; i <= 20; i = i+2){
        document.writeln(i + ",")
    }
// Odd Numbers
    document.writeln("<h3>Odd Numbers:</h3>")

    for(var i = 1; i <= 20; i = i+2){
        document.writeln(i + ",")
    }

    
// ANSWER #7

    var A = ["cake", "apple pie", "cookie", "chips", "patties"]
    var user = prompt("Welcome to AntiBanti Bakery. What do you like to order sir/ma'am?")
    var flag = false

    for(var i = 0; i < A.length; i++){
        if(user == A[i]){
            flag = true
            console.log(user + " is available in our bakery")
        }
    }
    if(flag == false){
        console.log("we are sorry. " + user + " is not available in our bakery.")
    }

// ANSWER #8
// ANSWER #9

    document.writeln("<br><br>")
    for(var i=5; i<=100; i = i+5){
        document.writeln(i + ",")
    }


// CHAPTER #6-9
// ANSWER #1

    let a = 10

    document.writeln(
        "Result:" + "<br>" +
        "The value of a is: " + a + "<br><br>" +
        "..................................................." + "<br><br>" +
        "The value of ++a is: " + ++a + "<br>" +
        "Now the value of a is: " + a + "<br><br>" +
        "The value of a++ is: " + a++ + "<br>" +
        "Now the value of a is: " + a + "<br><br>" +
        "The value of --a is: " + --a + "<br>" +
        "Now the value of a is: " + a + "<br><br>" +
        "The value of a-- is: " + a-- + "<br>" +
        "Now the value of a is: " + a
    )

// ANSWER #2

//Unfortunately i am unable to understand this question :(

// ANSWER #3\

    let UserName = prompt("Enter your name...")
    alert("Welcome back, " + UserName)

// ANSWER #4

    let Num = +prompt("Enter your number...")

    if(Num){
        document.writeln(
        "<br><br>" +
            Num + " × 1 = " + Num * 1 + "<br>" +
            Num + " × 2 = " + Num * 2 + "<br>" +
            Num + " × 3 = " + Num * 3 + "<br>" +
            Num + " × 4 = " + Num * 4 + "<br>" +
            Num + " × 5 = " + Num * 5 + "<br>" +
            Num + " × 6 = " + Num * 6 + "<br>" +
            Num + " × 7 = " + Num * 7 + "<br>" +
            Num + " × 8 = " + Num * 8 + "<br>" +
            Num + " × 9 = " + Num * 9 + "<br>" +
            Num + " × 10 = " + Num * 10
        )
    }else {
        document.writeln(
        "<br><br>" +
            "5 × 1 = 5" + "<br>" +
            "5 × 2 = 10" + "<br>" +
            "5 × 3 = 15" + "<br>" +
            "5 × 4 = 20" + "<br>" +
            "5 × 5 = 25" + "<br>" +
            "5 × 6 = 30" + "<br>" +
            "5 × 7 = 35" + "<br>" +
            "5 × 8 = 40" + "<br>" +
            "5 × 9 = 45" + "<br>" +
            "5 × 10 = 50" 
        )
    }

// ANSWER #5

    let Subject1 = "English"
    let Subject2 = "Urdu"
    let Subject3 = "Mathematics"
    
    let Subject1Marks = 84
    let Subject2Marks = 69
    let Subject3Marks = 71
    let SubjectTotal = 100

    let Total = SubjectTotal*3
    let ObtainedMarks = (Subject1Marks + Subject2Marks + Subject3Marks)

    let Subject1Percent = (Subject1Marks / SubjectTotal) * 100
    let Subject2Percent = (Subject2Marks / SubjectTotal) * 100
    let Subject3Percent = (Subject3Marks / SubjectTotal) * 100
    let PercentTotal = (ObtainedMarks / Total) * 100

    document.writeln(
        `
        <br><br>
        <table>
            <tr>
                <th>Subject</th>
                <th>Total Marks</th>
                <th>Obtained Marks</th>
                <th>Percentage</th>
            </tr>
            <tr>
                <td>${Subject1}</td>
                <td>${SubjectTotal}</td>
                <td>${Subject1Marks}</td>
                <td>${Subject1Percent}%</td>
            </tr>
            <tr>
                <td>${Subject2}</td>
                <td>${SubjectTotal}</td>
                <td>${Subject2Marks}</td>
                <td>${Subject2Percent}%</td>
            </tr>
            <tr>
                <td>${Subject3}</td>
                <td>${SubjectTotal}</td>
                <td>${Subject3Marks}</td>
                <td>${Subject3Percent}%</td>
            </tr>
            <tr>
                <th></th>
                <th>${Total}</th>
                <th>${ObtainedMarks}</th>
                <th>${PercentTotal.toFixed(2)}</th>
            <tr>
            
        </table>
        
        
        
        `
    )
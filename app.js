            function start(){
            //JavaScript Assignment (06)
                    //Start Of The Chapter (06) 
                   //Chapter Name (Maths Expressions: Unfamiliar Operaters)
                        // Chapter 06 Q (01)
             let res_a = 10;
             document.getElementById('head1').innerHTML = ("<h2>Arithemetic operater</h2><br>");
             document.getElementById('output').innerHTML = ("Result: " + res_a + "<br>");
             

             document.getElementById('output1').innerHTML = (`The value of a is: ${res_a}<br>`);

             document.getElementById('output2').innerHTML = ("......................................... <br><br>")

             document.getElementById('output3').innerHTML = (`The value of ++a is: ${++res_a}<br>`);
             document.getElementById('output4').innerHTML = (`Now the value of a is: ${res_a}<br><br>`);

             document.getElementById('output5').innerHTML = (`The value of a++ is: ${res_a++}<br>`);
             document.getElementById('output6').innerHTML = (`Now the value of a is: ${res_a}<br><br>`);

             document.getElementById('output7').innerHTML = (`The value of --a is: ${--res_a}<br>`);
             document.getElementById('output8').innerHTML = (`Now the value of a is: ${res_a}<br><br>`);

             document.getElementById('output9').innerHTML = (`The value of a-- is: ${res_a--}<br>`);
             document.getElementById('output10').innerHTML = (`Now the value of a is: ${res_a}<br><br>`);      
            }
            function second(params) {
             //  End Of The Chapter (06)
                            //JavaScript Assignment (07,08)
                             //Start Of The Chapter (07,08)
                       //Chapter Name ((07) Maths Expressions: Eliminating Ambiguity 
                       // ,(08) Concatenating Text Strings)
                // Chapter 07,08 Q (01)
             var a = 2, b = 1;
             var finresult = --a - --b + ++b + b--;

               // Explanation at each stage:
               // 1. --a: a becomes 1, value is 1
                  // 2. --b: b becomes 0, value is 0
               // 3. ++b: b becomes 1, value is 1
               // 4. b--: value is 1, b becomes 0
               // Calculation: 1 - 0 + 1 + 1 = 3

            document.getElementById('head2').innerHTML = ("<h2>Execution of the result</h2><br>");
            document.getElementById('output11').innerHTML = ("a is: " + a +"<br>");
            // a is 0
            document.getElementById('output12').innerHTML = ("b is: " + b +"<br>");
            // b is 0
            document.getElementById('output13').innerHTML = ("result is: " +  finresult + "<br>"); 
           // result is 3
                  //End Of The Chapter (07,08)
            }
            function third(params) {
                    //JavaScript Assignment (09)
                     //Start Of The Chapter (09) 
                   //Chapter Name (Prompts)
                 // Chapter 09 Q (01)
           let name = prompt("Enter your name:");
           alert(`Hello, ${name}!`);
            

                 //Easier Way To Create A Table Using For Loop
           let numT = prompt("Enter a number (default is 5):");
           numT = numT !== null && numT !== "" ? parseInt(numT) : 5;
           let numM = numT;
           let table = "";
         for (let i = 1; i <= 10; i++) {
          table += `${numM} x ${i} = ${numM * i}\n`;};
              alert(table);

               // a) Take three subjects name from user
           let subj1 = prompt("Enter Subject 1 name:");
           let subj2 = prompt("Enter Subject 2 name:");
           let subj3 = prompt("Enter Subject 3 name:");

                  // b) Total marks for each subject is 100
           const totalMarks = 100;
                        // c & d) Take obtained marks
          let marks1 = parseInt(prompt(`Enter obtained marks for ${subj1}:`));
          let marks2 = parseInt(prompt(`Enter obtained marks for ${subj2}:`));
          let marks3 = parseInt(prompt(`Enter obtained marks for ${subj3}:`));

                        // e) Calculate total marks and percentage
           let totalObtained = marks1 + marks2 + marks3;
           let per = (totalObtained / (totalMarks * 3)) * 100;

                      // Display result in a table
          let output = `<table border='1'>
         <tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>
         <h2>Student marks sheet</h2>
         <h2>Subject Total Marks Obtained Marks Percentage</h2>
         <tr><td>${subj1}</td><td>${totalMarks}</td><td>${marks1}</td><td>${(marks1/totalMarks*100).toFixed(2)}%</td></tr>
         <tr><td>${subj2}</td><td>${totalMarks}</td><td>${marks2}</td><td>${(marks2/totalMarks*100).toFixed(2)}%</td></tr>
         <tr><td>${subj3}</td><td>${totalMarks}</td><td>${marks3}</td><td>${(marks3/totalMarks*100).toFixed(2)}%</td></tr>
         <tr><td>Total</td><td>${totalMarks*3}</td><td>${totalObtained}</td><td>${per.toFixed(2)}%</td></tr>
            </table>`;
          document.getElementById('table').innerHTML = (output);
                     //End Of The Chapter (09)
         }
$(document).ready(function () {

        $("form#gradebook").submit(submitGrade);
        $("#nameSort").click(sortByName);
        $("#percentSort").click(sortByPercent)


        var gradeBook = [];

        //event handlers

        function submitGrade(event) {
            event.preventDefault();

            //get the form data
            var firstName = $("#firstName").val();
            var lastName = $("#lastName").val();
            var pointsEarned = $("#pointsEarned").val();
            var pointsPossible = $("#pointsPossible").val();

            var fullName = `${firstName} ${lastName}`;


            //calculate the percentage
            var percentage = pointsEarned / pointsPossible * 100;
            var percentageDisplay = percentage.toFixed(1);
            var letterGrade = "";

            //find the letter grade
            if (percentage > 90) {
                letterGrade = "A";
            } else if (percentage > 80) {
                letterGrade = "B";
            } else if (percentage > 70) {
                letterGrade = "C";
            } else if (percentage > 60) {
                letterGrade = "D";
            } else {
                letterGrade = "F";
            }

            //make a student grade object to hold our name, percentage, and letter grade
            var studentGrade = {
                name: fullName,
                percentage: percentage,
                letterGrade: letterGrade
            }

            //instead of displaying results, store them in our array
            gradeBook.push(studentGrade);

            var output = "";
            //display the contents of our array on the screen
            for(var i = 0; i < gradeBook.length; i++) {
                output += "Name: " + gradeBook[i].name + " ";
                output += "Percentage: " + gradeBook[i].percentage + "% ";
                output += "Letter Grade: " + gradeBook[i].letterGrade + "<br/>";
            }
            $("#message").html(`${output}`);

        }

        function sortByName() {
            function nameSort(n1, n2) {
                if(n1.name < n2.name) {
                    return -1;
                } else if(n1.name > n2.name) {
                    return 1;
                } return 0;
            }
            gradeBook.sort(nameSort);

            var output = "";
            //display the contents of our array on the screen
            for(var i = 0; i < gradeBook.length; i++) {
                output += "Name: " + gradeBook[i].name + " ";
                output += "Percentage: " + gradeBook[i].percentage + "% ";
                output += "Letter Grade: " + gradeBook[i].letterGrade + "<br/>";
            }
            $("#message").html(`${output}`);

        }

        function sortByPercent() {
            function percentSort(n1, n2) {
                if(n1.percentage < n2.percentage) {
                    return -1;
                } else if(n1.percentage > n2.percentage) {
                    return 1;
                } return 0;
            }
            gradeBook.sort(percentSort)

            var output = "";
            //display the contents of our array on the screen
            for(var i = 0; i < gradeBook.length; i++) {
                output += "Name: " + gradeBook[i].name + " ";
                output += "Percentage: " + gradeBook[i].percentage + "% ";
                output += "Letter Grade: " + gradeBook[i].letterGrade + "<br/>";
            }
            $("#message").html(`${output}`);
        }


    }
);
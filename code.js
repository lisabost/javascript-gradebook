$(document).ready(function () {


        $("form#gradebook").submit(submitGrade);

        //event handlers

        function submitGrade(event) {
            event.preventDefault();

            //make a grade object to hold our form data
            var grade = {
                firstName: $("#firstName").val(),
                lastName: $("#lastName").val(),
                pointsEarned: $("#pointsEarned").val(),
                pointsPossible: $("#pointsPossible").val()
            }

            //calculate the percentage
            var percentage = grade.pointsEarned / grade.pointsPossible * 100;
            var percentageDisplay = percentage.toFixed(1) + "%";
            var letterGrade = "";

            //find the letter grade
            if(percentage > 90) {
                letterGrade = "A";
            } else if(percentage > 80) {
                letterGrade = "B";
            } else if(percentage > 70) {
                letterGrade = "C";
            } else if(percentage > 60) {
                letterGrade = "D";
            } else {
                letterGrade = "F";
            }

            //display the results
            $("p#message").html(`Student: ${grade.firstName} ${grade.lastName}<br>
            Percentage points: ${percentageDisplay}<br>Letter Grade: ${letterGrade}`);
        }

        //other functions

    }
);
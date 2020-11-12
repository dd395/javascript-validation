$(document).ready(function () {
    // Object containing the validation rules
    var myRules =
        {
            firstName:
                {
                    required: true
                },
            grade:
                {
                    min: 5,
                    max: 8,
                    digits: true
                }

        };

    // Object containing the error messages
    var myMessages =
        {
            firstName:
                {
                    required: "Please enter first name"
                },
            grade:
                {
                    min: "too small",
                    max: "too large",
                    digits: "numbers please"
                }
        };

    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {
            submitHandler: runMyProgram,
            rules: myRules,
            messages: myMessages
        }
    );

    function runMyProgram() {
        // Change the text of the <p> with ID of "message" to
        // state, for example, "You have registered Jane for grade 6 camp!"
        // Use the name and grade the user provided in the form.
        let b = $("#firstName").val();
        let c = parseInt($("#grade").val());


        $("p").text(`You have registered ${b} for ${c}`);


    }




});